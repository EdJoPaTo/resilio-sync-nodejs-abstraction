import * as fs from 'fs'

import {ResilioConfig} from './config'

const {mkdir} = fs.promises

export async function generateFoldersOnFilesystem(resilioConfig: ResilioConfig): Promise<void> {
	await mkdir(resilioConfig.storage_path, {recursive: true})
}
