// Currently not complete
// Send a PullRequest to add missing types

export interface ResilioConfigFolder {
	dir: string;
	secret: string;
}

export interface ResilioConfig {
	device_name: string;
	storage_path: string;
	shared_folders: ResilioConfigFolder[];
}
