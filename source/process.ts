import {spawn, ChildProcess} from 'child_process'

/**
 * See ChildProcess.on('close', <…>)
 */
export type CloseCallback = (code: number | null, signal: NodeJS.Signals | null) => void

export class ResilioSyncProcess {
	private _resilioProcess?: ChildProcess

	constructor(
		private readonly resilioBinary: string,
		private readonly resilioConfigFilePath: string,
	) {}

	start(callbackOnClose?: CloseCallback): void {
		const syncArgs = ['--nodaemon', '--config', this.resilioConfigFilePath]

		this._resilioProcess = spawn(this.resilioBinary, syncArgs, {
			stdio: 'ignore',
		})

		this._resilioProcess.on('close', (code, signal) => {
			this._resilioProcess = undefined
			callbackOnClose?.(code, signal)
		})
	}

	async stop(): Promise<void> {
		const promise = new Promise<void>((resolve, reject) => {
			if (!this._resilioProcess) {
				resolve()
				return
			}

			this._resilioProcess.on('close', (code, signal) => {
				if (code) {
					reject(new Error(`Resilio terminated badly: ${code} ${String(signal)}`))
				} else {
					resolve()
				}

				this._resilioProcess = undefined
			})
		})

		if (this._resilioProcess) {
			this._resilioProcess.kill()
		}

		return promise
	}
}
