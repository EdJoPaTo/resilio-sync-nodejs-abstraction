// Currently not complete
// Send a PullRequest to add missing types

export interface ResilioConfigFolder {
	readonly dir: string;
	readonly secret: string;
}

export interface ResilioConfig {
	readonly device_name: string;
	readonly storage_path: string;
	readonly shared_folders: readonly ResilioConfigFolder[];
}
