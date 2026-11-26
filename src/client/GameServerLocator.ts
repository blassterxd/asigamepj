import ServerInfo from './contracts/ServerInfo';
import localization from '../model/resources/localization';

async function getServerInfoFromUri(serverDiscoveryUri: string): Promise<ServerInfo> {
	// Using random number to prevent serverUri caching
	const serverUrisResponse = await fetch(`${serverDiscoveryUri}?r=${Math.random()}`); // throwing TypeError here is ok

	if (!serverUrisResponse.ok) {
		throw new Error(localization.formatString(
			localization.serverDiscoveryBroken,
			serverUrisResponse.status.toString(),
			await serverUrisResponse.text()) as string);
	}

	const serverUris = (await serverUrisResponse.json()) as ServerInfo[];

	if (!serverUris || serverUris.length === 0) {
		throw new Error(localization.serverUrisBroken);
	}

	return serverUris[0];
}

export default async function getServerInfo(serverDiscoveryUri: string): Promise<ServerInfo> {
	// Local deployment: use only the configured discovery URI, no public fallback servers.
	return getServerInfoFromUri(serverDiscoveryUri);
}
