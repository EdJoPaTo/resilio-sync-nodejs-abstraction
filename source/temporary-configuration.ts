import * as fs from 'fs'
import * as os from 'os'
import * as path from 'path'

const {mkdtempSync, unlinkSync, rmdirSync} = fs

export class TemporaryConfiguration {
	public readonly filepath: string
	private readonly _folder: string

	constructor() {
		this._folder = createTemporaryDirectory()
		this.filepath = configurationFile(this._folder)
	}

	cleanup(): void {
		try {
			unlinkSync(this.filepath)
		} catch {}

		try {
			rmdirSync(this._folder)
		} catch {}
	}
}

function createTemporaryDirectory(): string {
	return mkdtempSync(path.join(os.tmpdir(), 'resilio-sync-config-'))
}

function configurationFile(temporaryFolder: string): string {
	return path.join(temporaryFolder, 'sync.conf')
}
