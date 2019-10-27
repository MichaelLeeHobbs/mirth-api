#### Alerts.getAlerts({alertId})

Summary: Retrieves multiple alerts by ID, or all alerts if not specified.

Description: 

Parameters:

| Name | Description | Required |
| ------ | ------ | ------ |
| alertId | The ID of the alert(s). If absent, all alerts will be returned. | No |

Responses:

| Name | Description | Schema |
| ------ | ------ | ------ |
| 200 | successful operation |  |
---
#### Alerts.createAlert({body*})

Summary: Creates a new alert.

Description: 

Parameters:

| Name | Description | Required |
| ------ | ------ | ------ |
| body | The alert to create. | Yes |

Responses:

| Name | Description | Schema |
| ------ | ------ | ------ |
| default | successful operation |  |
---
#### Alerts.getAlertsPost({body})

Summary: Retrieves multiple alerts by ID, or all alerts if not specified. This is a POST request alternative to GET /alerts that may be used when there are too many alert IDs to include in the query parameters.

Description: 

Parameters:

| Name | Description | Required |
| ------ | ------ | ------ |
| body | The ID of the alert(s). If absent, all alerts will be returned. | No |

Responses:

| Name | Description | Schema |
| ------ | ------ | ------ |
| 200 | successful operation |  |
---
#### Alerts.getAlertInfo1({body*})

Summary: Returns an AlertInfo object containing alert protocol options and any updated channel summaries.

Description: 

Parameters:

| Name | Description | Required |
| ------ | ------ | ------ |
| body | A map of ChannelHeader objects telling the server the state of the client-side channel cache. | Yes |

Responses:

| Name | Description | Schema |
| ------ | ------ | ------ |
| 200 | successful operation |  |
---
#### Alerts.getAlertProtocolOptions()

Summary: Returns all alert protocol options.

Description: 

Parameters:

| Name | Description | Required |
| ------ | ------ | ------ |

Responses:

| Name | Description | Schema |
| ------ | ------ | ------ |
| 200 | successful operation |  |
---
#### Alerts.getAlertStatusList()

Summary: Returns all alert dashboard statuses.

Description: 

Parameters:

| Name | Description | Required |
| ------ | ------ | ------ |

Responses:

| Name | Description | Schema |
| ------ | ------ | ------ |
| 200 | successful operation |  |
---
#### Alerts.getAlert({alertId*})

Summary: Retrieves an alert by ID.

Description: 

Parameters:

| Name | Description | Required |
| ------ | ------ | ------ |
| alertId | The ID of the alert. | Yes |

Responses:

| Name | Description | Schema |
| ------ | ------ | ------ |
| 200 | successful operation |  |
---
#### Alerts.updateAlert({alertId*, body*})

Summary: Updates the specified alert.

Description: 

Parameters:

| Name | Description | Required |
| ------ | ------ | ------ |
| alertId | The ID of the alert. | Yes |
| body | The alert to create. | Yes |

Responses:

| Name | Description | Schema |
| ------ | ------ | ------ |
| default | successful operation |  |
---
#### Alerts.removeAlert({alertId*})

Summary: Removes the specified alert.

Description: 

Parameters:

| Name | Description | Required |
| ------ | ------ | ------ |
| alertId | The ID of the alert. | Yes |

Responses:

| Name | Description | Schema |
| ------ | ------ | ------ |
| default | successful operation |  |
---
#### Alerts.disableAlert({alertId*})

Summary: Disables the specified alert.

Description: 

Parameters:

| Name | Description | Required |
| ------ | ------ | ------ |
| alertId | The ID of the alert. | Yes |

Responses:

| Name | Description | Schema |
| ------ | ------ | ------ |
| default | successful operation |  |
---
#### Alerts.enableAlert({alertId*})

Summary: Enables the specified alert.

Description: 

Parameters:

| Name | Description | Required |
| ------ | ------ | ------ |
| alertId | The ID of the alert. | Yes |

Responses:

| Name | Description | Schema |
| ------ | ------ | ------ |
| default | successful operation |  |
---
#### Alerts.getAlertInfo2({alertId*, body*})

Summary: Returns an AlertInfo object containing the alert model, alert protocol options, and any updated channel summaries.

Description: 

Parameters:

| Name | Description | Required |
| ------ | ------ | ------ |
| alertId | The ID of the alert. | Yes |
| body | A map of ChannelHeader objects telling the server the state of the client-side channel cache. | Yes |

Responses:

| Name | Description | Schema |
| ------ | ------ | ------ |
| 200 | successful operation |  |
---
#### ChannelGroups.getChannelGroups({channelGroupId})

Summary: Retrieve a list of all channel groups, or multiple channel groups by ID.

Description: 

Parameters:

| Name | Description | Required |
| ------ | ------ | ------ |
| channelGroupId | The IDs of the channel groups to retrieve. If absent, all groups will be retrieved. | No |

Responses:

| Name | Description | Schema |
| ------ | ------ | ------ |
| 200 | successful operation |  |
---
#### ChannelGroups.updateChannelGroups({channelGroups, removedChannelGroupIds, override})

Summary: Updates all channel groups in one request.

Description: 

Parameters:

| Name | Description | Required |
| ------ | ------ | ------ |
| channelGroups | The channel group object to update or create. | No |
| removedChannelGroupIds | All channel group IDs known to be removed. | No |
| override | If true, the channel groups will be updated even if different revisions exist on the server. | No |

Responses:

| Name | Description | Schema |
| ------ | ------ | ------ |
| 200 | successful operation |  |
---
#### ChannelGroups.getChannelGroupsPost({body})

Summary: Retrieve a list of all channel groups, or multiple channel groups by ID. This is a POST request alternative to GET /channelgroups that may be used when there are too many channel group IDs to include in the query parameters.

Description: 

Parameters:

| Name | Description | Required |
| ------ | ------ | ------ |
| body | The IDs of the channel groups to retrieve. If absent, all groups will be retrieved. | No |

Responses:

| Name | Description | Schema |
| ------ | ------ | ------ |
| 200 | successful operation |  |
---
#### Channels.getChannels({channelId, pollingOnly})

Summary: Retrieve a list of all channels, or multiple channels by ID.

Description: 

Parameters:

| Name | Description | Required |
| ------ | ------ | ------ |
| channelId | The IDs of the channels to retrieve. If absent, all channels will be retrieved. | No |
| pollingOnly | If true, only channels with polling source connectors will be returned. | No |

Responses:

| Name | Description | Schema |
| ------ | ------ | ------ |
| 200 | successful operation |  |
---
#### Channels.createChannel({body*})

Summary: Creates a new channel.

Description: 

Parameters:

| Name | Description | Required |
| ------ | ------ | ------ |
| body | The Channel object to create. | Yes |

Responses:

| Name | Description | Schema |
| ------ | ------ | ------ |
| 200 | successful operation |  |
---
#### Channels.removeChannels({channelId*})

Summary: Removes the channels with the specified IDs.

Description: 

Parameters:

| Name | Description | Required |
| ------ | ------ | ------ |
| channelId | The IDs of the channels to remove. | Yes |

Responses:

| Name | Description | Schema |
| ------ | ------ | ------ |
| default | successful operation |  |
---
#### Channels.getChannelsPost({body, pollingOnly})

Summary: Retrieve a list of all channels, or multiple channels by ID. This is a POST request alternative to GET /channels that may be used when there are too many channel IDs to include in the query parameters.

Description: 

Parameters:

| Name | Description | Required |
| ------ | ------ | ------ |
| body | The IDs of the channels to retrieve. If absent, all channels will be retrieved. | No |
| pollingOnly | If true, only channels with polling source connectors will be returned. | No |

Responses:

| Name | Description | Schema |
| ------ | ------ | ------ |
| 200 | successful operation |  |
---
#### Channels.getChannelSummary({body*, ignoreNewChannels*})

Summary: Returns a list of channel summaries, indicating to a client which channels have changed (been updated, deleted, undeployed, etc.). If a channel was modified, the entire Channel object will be returned.

Description: 

Parameters:

| Name | Description | Required |
| ------ | ------ | ------ |
| body | A map of ChannelHeader objects telling the server the state of the client-side channel cache. | Yes |
| ignoreNewChannels | If true, summaries will only be returned for channels in the map's entry set. | Yes |

Responses:

| Name | Description | Schema |
| ------ | ------ | ------ |
| 200 | successful operation |  |
---
#### Channels.removeChannelsPost({body*})

Summary: Removes the channels with the specified IDs. This is a POST request alternative to DELETE /channels that may be used when there are too many channel IDs to include in the query parameters.

Description: 

Parameters:

| Name | Description | Required |
| ------ | ------ | ------ |
| body | The IDs of the channels to remove. | Yes |

Responses:

| Name | Description | Schema |
| ------ | ------ | ------ |
| default | successful operation |  |
---
#### Channels.setChannelEnabled1({channelId, enabled*})

Summary: Enables/disables the specified channels.

Description: 

Parameters:

| Name | Description | Required |
| ------ | ------ | ------ |
| channelId | The IDs of the channels to enable/disable. If absent, all channels will be enabled/disabled. | No |
| enabled | Indicates whether the channels should be enabled or disabled. | Yes |

Responses:

| Name | Description | Schema |
| ------ | ------ | ------ |
| default | successful operation |  |
---
#### Channels.setChannelInitialState1({channelId, initialState*})

Summary: Sets the initial state for the specified channels.

Description: 

Parameters:

| Name | Description | Required |
| ------ | ------ | ------ |
| channelId | The IDs of the channels to modify initial states on. If absent, the initial state will be set on all channels. | No |
| initialState | The initial state of the channel. | Yes |

Responses:

| Name | Description | Schema |
| ------ | ------ | ------ |
| default | successful operation |  |
---
#### Channels.getChannelIdsAndNames()

Summary: Returns a map of all channel IDs and names.

Description: 

Parameters:

| Name | Description | Required |
| ------ | ------ | ------ |

Responses:

| Name | Description | Schema |
| ------ | ------ | ------ |
| 200 | successful operation |  |
---
#### Channels.getChannel({channelId*})

Summary: Retrieve a single channel by ID.

Description: 

Parameters:

| Name | Description | Required |
| ------ | ------ | ------ |
| channelId | The ID of the channel to retrieve. | Yes |

Responses:

| Name | Description | Schema |
| ------ | ------ | ------ |
| 200 | successful operation |  |
---
#### Channels.updateChannel({channelId*, body*, override})

Summary: Updates the specified channel.

Description: 

Parameters:

| Name | Description | Required |
| ------ | ------ | ------ |
| channelId | The ID of the channel to update. | Yes |
| body | The Channel object to update with. | Yes |
| override | If true, the channel will be updated even if a different revision exists on the server. | No |

Responses:

| Name | Description | Schema |
| ------ | ------ | ------ |
| 200 | successful operation |  |
---
#### Channels.removeChannel({channelId*})

Summary: Removes the channel with the specified ID.

Description: 

Parameters:

| Name | Description | Required |
| ------ | ------ | ------ |
| channelId | The ID of the channel to remove. | Yes |

Responses:

| Name | Description | Schema |
| ------ | ------ | ------ |
| default | successful operation |  |
---
#### Channels.getConnectorNames({channelId*})

Summary: Returns all connector names for a channel.

Description: 

Parameters:

| Name | Description | Required |
| ------ | ------ | ------ |
| channelId | The ID of the channel. | Yes |

Responses:

| Name | Description | Schema |
| ------ | ------ | ------ |
| 200 | successful operation |  |
---
#### Channels.setChannelEnabled2({channelId*, enabled*})

Summary: Enables/disables the specified channel.

Description: 

Parameters:

| Name | Description | Required |
| ------ | ------ | ------ |
| channelId | The ID of the channel. | Yes |
| enabled | The enabled flag (true/false) to set. | Yes |

Responses:

| Name | Description | Schema |
| ------ | ------ | ------ |
| default | successful operation |  |
---
#### Channels.setChannelInitialState2({channelId*, initialState*})

Summary: Sets the initial state for a single channel.

Description: 

Parameters:

| Name | Description | Required |
| ------ | ------ | ------ |
| channelId | The ID of the channel. | Yes |
| initialState | The initial state of the channel. | Yes |

Responses:

| Name | Description | Schema |
| ------ | ------ | ------ |
| default | successful operation |  |
---
#### Channels.getMetaDataColumns({channelId*})

Summary: Returns all metadata columns for a channel.

Description: 

Parameters:

| Name | Description | Required |
| ------ | ------ | ------ |
| channelId | The ID of the channel. | Yes |

Responses:

| Name | Description | Schema |
| ------ | ------ | ------ |
| 200 | successful operation |  |
---
#### ChannelStatistics.clearAllStatistics()

Summary: Clears all statistics (including lifetime) for all channels/connectors.

Description: 

Parameters:

| Name | Description | Required |
| ------ | ------ | ------ |

Responses:

| Name | Description | Schema |
| ------ | ------ | ------ |
| default | successful operation |  |
---
#### ChannelStatistics.clearStatistics({body*, received, filtered, sent, error})

Summary: Clears the statistics for the given channels and/or connectors.

Description: 

Parameters:

| Name | Description | Required |
| ------ | ------ | ------ |
| body | Channel IDs mapped to lists of metaDataIds (connectors). If the metaDataId list is null, then all statistics for the channel will be cleared. | Yes |
| received | If true, received stats will be cleared. | No |
| filtered | If true, filtered stats will be cleared. | No |
| sent | If true, sent stats will be cleared. | No |
| error | If true, error stats will be cleared. | No |

Responses:

| Name | Description | Schema |
| ------ | ------ | ------ |
| default | successful operation |  |
---
#### ChannelStatistics.getStatistics1({channelId, includeUndeployed, includeMetadataId, excludeMetadataId, aggregateStats})

Summary: Returns the Statistics for all channels.

Description: 

Parameters:

| Name | Description | Required |
| ------ | ------ | ------ |
| channelId | The IDs of the channels to retrieve. If absent, all channels will be retrieved. | No |
| includeUndeployed | If true, statistics for undeployed channels will also be included. | No |
| includeMetadataId | The ids of connectors to include. Cannot include and exclude connectors. | No |
| excludeMetadataId | The ids of connectors to exclude. Cannot include and exclude connectors. | No |
| aggregateStats | If true, statistics will be aggregated into one result | No |

Responses:

| Name | Description | Schema |
| ------ | ------ | ------ |
| 200 | successful operation |  |
---
#### ChannelStatistics.getStatisticsPost({channelIds, includeUndeployed, includeMetadataIds, excludeMetadataIds, aggregateStats})

Summary: Returns the Statistics for all channels. This is a POST request alternative to GET /statistics that may be used when there are too many channel IDs to include in the query parameters.

Description: 

Parameters:

| Name | Description | Required |
| ------ | ------ | ------ |
| channelIds | The IDs of the channels to retrieve. If absent, all channels will be retrieved. | No |
| includeUndeployed | If true, statistics for undeployed channels will also be included. | No |
| includeMetadataIds | The ids of connectors to include. Cannot include and exclude connectors. | No |
| excludeMetadataIds | The ids of connectors to exclude. Cannot include and exclude connectors. | No |
| aggregateStats | If true, statistics will be aggregated into one result | No |

Responses:

| Name | Description | Schema |
| ------ | ------ | ------ |
| 200 | successful operation |  |
---
#### ChannelStatistics.getStatistics2({channelId*})

Summary: Returns the Statistics for the channel with the specified id.

Description: 

Parameters:

| Name | Description | Required |
| ------ | ------ | ------ |
| channelId | The ID of the channel to retrieve statistics for. | Yes |

Responses:

| Name | Description | Schema |
| ------ | ------ | ------ |
| 200 | successful operation |  |
---
#### ChannelDeploymentOperations.deployChannels({body, returnErrors})

Summary: Deploys (or redeploys) selected channels.

Description: 

Parameters:

| Name | Description | Required |
| ------ | ------ | ------ |
| body | The ID of the channel(s) to deploy. If absent, all channels will be deployed. | No |
| returnErrors | If true, an error response code and the exception will be returned. | No |

Responses:

| Name | Description | Schema |
| ------ | ------ | ------ |
| default | successful operation |  |
---
#### ChannelDeploymentOperations.redeployAllChannels({returnErrors})

Summary: Redeploys all channels.

Description: 

Parameters:

| Name | Description | Required |
| ------ | ------ | ------ |
| returnErrors | If true, an error response code and the exception will be returned. | No |

Responses:

| Name | Description | Schema |
| ------ | ------ | ------ |
| default | successful operation |  |
---
#### ChannelDeploymentOperations.undeployChannels({body, returnErrors})

Summary: Undeploys selected channels.

Description: 

Parameters:

| Name | Description | Required |
| ------ | ------ | ------ |
| body | The ID of the channel(s) to undeploy. If absent, all channels will be undeployed. | No |
| returnErrors | If true, an error response code and the exception will be returned. | No |

Responses:

| Name | Description | Schema |
| ------ | ------ | ------ |
| default | successful operation |  |
---
#### ChannelDeploymentOperations.deployChannel({channelId*, returnErrors})

Summary: Deploys (or redeploys) a single channel.

Description: 

Parameters:

| Name | Description | Required |
| ------ | ------ | ------ |
| channelId | The ID of the channel to deploy. | Yes |
| returnErrors | If true, an error response code and the exception will be returned. | No |

Responses:

| Name | Description | Schema |
| ------ | ------ | ------ |
| default | successful operation |  |
---
#### ChannelDeploymentOperations.undeployChannel({channelId*, returnErrors})

Summary: Undeploys a single channel.

Description: 

Parameters:

| Name | Description | Required |
| ------ | ------ | ------ |
| channelId | The ID of the channel to undeploy. | Yes |
| returnErrors | If true, an error response code and the exception will be returned. | No |

Responses:

| Name | Description | Schema |
| ------ | ------ | ------ |
| default | successful operation |  |
---
#### ChannelStatusOperations.haltChannels({channelId*, returnErrors})

Summary: Halts the channels with the specified IDs.

Description: 

Parameters:

| Name | Description | Required |
| ------ | ------ | ------ |
| channelId | The channel IDs to halt. | Yes |
| returnErrors | If true, an error response code and the exception will be returned. | No |

Responses:

| Name | Description | Schema |
| ------ | ------ | ------ |
| default | successful operation |  |
---
#### ChannelStatusOperations.pauseChannels({channelId*, returnErrors})

Summary: Pauses the channels with the specified IDs.

Description: 

Parameters:

| Name | Description | Required |
| ------ | ------ | ------ |
| channelId | The channel IDs to pause. | Yes |
| returnErrors | If true, an error response code and the exception will be returned. | No |

Responses:

| Name | Description | Schema |
| ------ | ------ | ------ |
| default | successful operation |  |
---
#### ChannelStatusOperations.resumeChannels({channelId*, returnErrors})

Summary: Resume the channels with the specified IDs.

Description: 

Parameters:

| Name | Description | Required |
| ------ | ------ | ------ |
| channelId | The channel IDs to resume. | Yes |
| returnErrors | If true, an error response code and the exception will be returned. | No |

Responses:

| Name | Description | Schema |
| ------ | ------ | ------ |
| default | successful operation |  |
---
#### ChannelStatusOperations.startChannels({channelId*, returnErrors})

Summary: Starts the channels with the specified IDs.

Description: 

Parameters:

| Name | Description | Required |
| ------ | ------ | ------ |
| channelId | The channel IDs to start. | Yes |
| returnErrors | If true, an error response code and the exception will be returned. | No |

Responses:

| Name | Description | Schema |
| ------ | ------ | ------ |
| default | successful operation |  |
---
#### ChannelStatusOperations.startConnectors({body*, returnErrors})

Summary: Starts the connectors with the specified channel and metadata IDs.

Description: 

Parameters:

| Name | Description | Required |
| ------ | ------ | ------ |
| body | A map of channel and metadata IDs to start connectors for. | Yes |
| returnErrors | If true, an error response code and the exception will be returned. | No |

Responses:

| Name | Description | Schema |
| ------ | ------ | ------ |
| default | successful operation |  |
---
#### ChannelStatusOperations.stopChannels({channelId*, returnErrors})

Summary: Stops the channels with the specified IDs.

Description: 

Parameters:

| Name | Description | Required |
| ------ | ------ | ------ |
| channelId | The channel IDs to stop. | Yes |
| returnErrors | If true, an error response code and the exception will be returned. | No |

Responses:

| Name | Description | Schema |
| ------ | ------ | ------ |
| default | successful operation |  |
---
#### ChannelStatusOperations.stopConnectors({body*, returnErrors})

Summary: Stops the connectors with the specified channel and metadata IDs.

Description: 

Parameters:

| Name | Description | Required |
| ------ | ------ | ------ |
| body | A map of channel and metadata IDs to stop connectors for. | Yes |
| returnErrors | If true, an error response code and the exception will be returned. | No |

Responses:

| Name | Description | Schema |
| ------ | ------ | ------ |
| default | successful operation |  |
---
#### ChannelStatusOperations.getChannelStatusList({channelId, filter, includeUndeployed})

Summary: Returns all channel dashboard statuses, or multiple statuses by channel ID.

Description: 

Parameters:

| Name | Description | Required |
| ------ | ------ | ------ |
| channelId | The channel IDs to return dashboard statuses for. If absent, all statuses will be returned. | No |
| filter | The filter string to limit dashboard statuses with. | No |
| includeUndeployed | If true, statuses for undeployed channels will also be included. | No |

Responses:

| Name | Description | Schema |
| ------ | ------ | ------ |
| 200 | successful operation |  |
---
#### ChannelStatusOperations.getChannelStatusListPost({body, filter, includeUndeployed})

Summary: Returns all channel dashboard statuses, or multiple statuses by channel ID. This is a POST request alternative to GET /statuses that may be used when there are too many channel IDs to include in the query parameters.

Description: 

Parameters:

| Name | Description | Required |
| ------ | ------ | ------ |
| body | The channel IDs to return dashboard statuses for. If absent, all statuses will be returned. | No |
| filter | The filter string to limit dashboard statuses with. | No |
| includeUndeployed | If true, statuses for undeployed channels will also be included. | No |

Responses:

| Name | Description | Schema |
| ------ | ------ | ------ |
| 200 | successful operation |  |
---
#### ChannelStatusOperations.getDashboardChannelInfo({fetchSize*, filter})

Summary: Returns a DashboardChannelInfo object containing a partial channel status list and a set of remaining channel IDs.

Description: 

Parameters:

| Name | Description | Required |
| ------ | ------ | ------ |
| fetchSize | Specifies the maximum number of statuses to return. | Yes |
| filter | The filter string to limit dashboard statuses with. | No |

Responses:

| Name | Description | Schema |
| ------ | ------ | ------ |
| 200 | successful operation |  |
---
#### ChannelStatusOperations.haltChannel({channelId*, returnErrors})

Summary: Halts the channel with the specified ID.

Description: 

Parameters:

| Name | Description | Required |
| ------ | ------ | ------ |
| channelId | The channel ID to halt. | Yes |
| returnErrors | If true, an error response code and the exception will be returned. | No |

Responses:

| Name | Description | Schema |
| ------ | ------ | ------ |
| default | successful operation |  |
---
#### ChannelStatusOperations.pauseChannel({channelId*, returnErrors})

Summary: Pauses the channel with the specified ID.

Description: 

Parameters:

| Name | Description | Required |
| ------ | ------ | ------ |
| channelId | The channel ID to pause. | Yes |
| returnErrors | If true, an error response code and the exception will be returned. | No |

Responses:

| Name | Description | Schema |
| ------ | ------ | ------ |
| default | successful operation |  |
---
#### ChannelStatusOperations.resumeChannel({channelId*, returnErrors})

Summary: Resumes the channel with the specified ID.

Description: 

Parameters:

| Name | Description | Required |
| ------ | ------ | ------ |
| channelId | The channel ID to resume. | Yes |
| returnErrors | If true, an error response code and the exception will be returned. | No |

Responses:

| Name | Description | Schema |
| ------ | ------ | ------ |
| default | successful operation |  |
---
#### ChannelStatusOperations.startChannel({channelId*, returnErrors})

Summary: Starts the channel with the specified ID.

Description: 

Parameters:

| Name | Description | Required |
| ------ | ------ | ------ |
| channelId | The channel ID to start. | Yes |
| returnErrors | If true, an error response code and the exception will be returned. | No |

Responses:

| Name | Description | Schema |
| ------ | ------ | ------ |
| default | successful operation |  |
---
#### ChannelStatusOperations.stopChannel({channelId*, returnErrors})

Summary: Stops the channel with the specified ID.

Description: 

Parameters:

| Name | Description | Required |
| ------ | ------ | ------ |
| channelId | The channel ID to stop. | Yes |
| returnErrors | If true, an error response code and the exception will be returned. | No |

Responses:

| Name | Description | Schema |
| ------ | ------ | ------ |
| default | successful operation |  |
---
#### ChannelStatusOperations.startConnector({channelId*, metaDataId*, returnErrors})

Summary: Starts the connector with the specified channel and metadata ID.

Description: 

Parameters:

| Name | Description | Required |
| ------ | ------ | ------ |
| channelId | The channel ID to start a connector for. | Yes |
| metaDataId | The connector metadata ID to start. | Yes |
| returnErrors | If true, an error response code and the exception will be returned. | No |

Responses:

| Name | Description | Schema |
| ------ | ------ | ------ |
| default | successful operation |  |
---
#### ChannelStatusOperations.stopConnector({channelId*, metaDataId*, returnErrors})

Summary: Stops the connector with the specified channel and metadata ID.

Description: 

Parameters:

| Name | Description | Required |
| ------ | ------ | ------ |
| channelId | The channel ID to stop a connector for. | Yes |
| metaDataId | The connector metadata ID to stop. | Yes |
| returnErrors | If true, an error response code and the exception will be returned. | No |

Responses:

| Name | Description | Schema |
| ------ | ------ | ------ |
| default | successful operation |  |
---
#### ChannelStatusOperations.getChannelStatus({channelId*})

Summary: Returns the dashboard status for a single channel ID.

Description: 

Parameters:

| Name | Description | Required |
| ------ | ------ | ------ |
| channelId | The channel ID to return a dashboard status for. | Yes |

Responses:

| Name | Description | Schema |
| ------ | ------ | ------ |
| 200 | successful operation |  |
---
#### Messages.removeAllMessages1({channelId*, restartRunningChannels, clearStatistics})

Summary: Removes all messages for multiple specified channels.

Description: 

Parameters:

| Name | Description | Required |
| ------ | ------ | ------ |
| channelId | The IDs of the channels. | Yes |
| restartRunningChannels | If true, currently running channels will be stopped and restarted as part of the remove process. Otherwise, currently running channels will not be included. | No |
| clearStatistics | If true, message statistics will also be cleared. | No |

Responses:

| Name | Description | Schema |
| ------ | ------ | ------ |
| default | successful operation |  |
---
#### Messages.removeAllMessagesPost({body*, restartRunningChannels, clearStatistics})

Summary: Removes all messages for multiple specified channels. This is a POST request alternative to DELETE /_removeAllMessages that may be used when there are too many channel IDs to include in the query parameters.

Description: 

Parameters:

| Name | Description | Required |
| ------ | ------ | ------ |
| body | The IDs of the channels. | Yes |
| restartRunningChannels | If true, currently running channels will be stopped and restarted as part of the remove process. Otherwise, currently running channels will not be included. | No |
| clearStatistics | If true, message statistics will also be cleared. | No |

Responses:

| Name | Description | Schema |
| ------ | ------ | ------ |
| default | successful operation |  |
---
#### Messages.getMessages1({channelId*, minMessageId, maxMessageId, minOriginalId, maxOriginalId, minImportId, maxImportId, startDate, endDate, textSearch, textSearchRegex, status, includedMetaDataId, excludedMetaDataId, serverId, rawContentSearch, processedRawContentSearch, transformedContentSearch, encodedContentSearch, sentContentSearch, responseContentSearch, responseTransformedContentSearch, processedResponseContentSearch, connectorMapContentSearch, channelMapContentSearch, sourceMapContentSearch, responseMapContentSearch, processingErrorContentSearch, postprocessorErrorContentSearch, responseErrorContentSearch, metaDataSearch, metaDataCaseInsensitiveSearch, textSearchMetaDataColumn, minSendAttempts, maxSendAttempts, attachment, error, includeContent, offset, limit})

Summary: Search for messages by specific filter criteria.

Description: 

Parameters:

| Name | Description | Required |
| ------ | ------ | ------ |
| channelId | The ID of the channel. | Yes |
| minMessageId | The minimum message ID to query. | No |
| maxMessageId | The maximum message ID to query. | No |
| minOriginalId | The minimum original message ID to query. Messages that have been reprocessed will retain their original message ID. | No |
| maxOriginalId | The maximum original message ID to query. Messages that have been reprocessed will retain their original message ID. | No |
| minImportId | The minimum import message ID to query. Messages that have been imported will retain their original message ID under this value. | No |
| maxImportId | The maximum import message ID to query. Messages that have been imported will retain their original message ID under this value. | No |
| startDate | The earliest original received date to query by. Example: 1985-10-26T09:00:00.000-0700 | No |
| endDate | The latest original received date to query by. Example: 2015-10-21T07:28:00.000-0700 | No |
| textSearch | Searches all message content for this string. This process could take a long time depending on the amount of message content currently stored. Any message content that was encrypted by this channel will not be searchable. | No |
| textSearchRegex | If true, text search input will be considered a regular expression pattern to be matched. Only supported by PostgreSQL, MySQL and Oracle databases. | No |
| status | Determines which message statuses to query by. | No |
| includedMetaDataId | If present, only connector metadata IDs in this list will be queried. | No |
| excludedMetaDataId | If present, connector metadata IDs in this list will not be queried. | No |
| serverId | The server ID associated with messages. | No |
| rawContentSearch | Searches the raw content of messages. | No |
| processedRawContentSearch | Searches the processed raw content of messages. | No |
| transformedContentSearch | Searches the transformed content of messages. | No |
| encodedContentSearch | Searches the encoded content of messages. | No |
| sentContentSearch | Searches the sent content of messages. | No |
| responseContentSearch | Searches the response content of messages. | No |
| responseTransformedContentSearch | Searches the response transformed content of messages. | No |
| processedResponseContentSearch | Searches the processed response content of messages. | No |
| connectorMapContentSearch | Searches the connector map content of messages. | No |
| channelMapContentSearch | Searches the channel map content of messages. | No |
| sourceMapContentSearch | Searches the source map content of messages. | No |
| responseMapContentSearch | Searches the response map content of messages. | No |
| processingErrorContentSearch | Searches the processing error content of messages. | No |
| postprocessorErrorContentSearch | Searches the postprocessor error content of messages. | No |
| responseErrorContentSearch | Searches the response error content of messages. | No |
| metaDataSearch | Searches a custom metadata column. Value should be in the form: COLUMN_NAME &lt;operator&gt; value, where operator is one of the following: =, !=, <, <=, >, >=, CONTAINS, DOES NOT CONTAIN, STARTS WITH, DOES NOT START WITH, ENDS WITH, DOES NOT END WITH | No |
| metaDataCaseInsensitiveSearch | Searches a custom metadata column, ignoring case. Value should be in the form: COLUMN_NAME &lt;operator&gt; value. | No |
| textSearchMetaDataColumn | When using a text search, these custom metadata columns will also be searched. | No |
| minSendAttempts | The minimum number of send attempts for connector messages. | No |
| maxSendAttempts | The maximum number of send attempts for connector messages. | No |
| attachment | If true, only messages with attachments are included in the results. | No |
| error | If true, only messages with errors are included in the results. | No |
| includeContent | If true, message content will be returned with the results. | No |
| offset | Used for pagination, determines where to start in the search results. | No |
| limit | Used for pagination, determines the maximum number of results to return. | No |

Responses:

| Name | Description | Schema |
| ------ | ------ | ------ |
| 200 | successful operation |  |
---
#### Messages.processMessage1({channelId*, body*, destinationMetaDataId, sourceMapEntry, overwrite, imported, originalMessageId})

Summary: Processes a new message through a channel.

Description: 

Parameters:

| Name | Description | Required |
| ------ | ------ | ------ |
| channelId | The ID of the channel. | Yes |
| body | The raw message data to process. | Yes |
| destinationMetaDataId | Indicates which destinations to send the message to. | No |
| sourceMapEntry | These entries will be injected into the source map for the message. Value should be in the format: key=value | No |
| overwrite | If true and a valid original message ID is given, this message will overwrite the existing one. | No |
| imported | If true, marks this message as being imported. If the message is overwriting an existing one, then statistics will not be decremented. | No |
| originalMessageId | The original message ID this message is associated with. | No |

Responses:

| Name | Description | Schema |
| ------ | ------ | ------ |
| 200 | successful operation |  |
---
#### Messages.removeMessages1({channelId*, minMessageId, maxMessageId, minOriginalId, maxOriginalId, minImportId, maxImportId, startDate, endDate, textSearch, textSearchRegex, status, includedMetaDataId, excludedMetaDataId, serverId, rawContentSearch, processedRawContentSearch, transformedContentSearch, encodedContentSearch, sentContentSearch, responseContentSearch, responseTransformedContentSearch, processedResponseContentSearch, connectorMapContentSearch, channelMapContentSearch, sourceMapContentSearch, responseMapContentSearch, processingErrorContentSearch, postprocessorErrorContentSearch, responseErrorContentSearch, metaDataSearch, metaDataCaseInsensitiveSearch, textSearchMetaDataColumn, minSendAttempts, maxSendAttempts, attachment, error})

Summary: Remove messages by specific filter criteria.

Description: 

Parameters:

| Name | Description | Required |
| ------ | ------ | ------ |
| channelId | The ID of the channel. | Yes |
| minMessageId | The minimum message ID to query. | No |
| maxMessageId | The maximum message ID to query. | No |
| minOriginalId | The minimum original message ID to query. Messages that have been reprocessed will retain their original message ID. | No |
| maxOriginalId | The maximum original message ID to query. Messages that have been reprocessed will retain their original message ID. | No |
| minImportId | The minimum import message ID to query. Messages that have been imported will retain their original message ID under this value. | No |
| maxImportId | The maximum import message ID to query. Messages that have been imported will retain their original message ID under this value. | No |
| startDate | The earliest original received date to query by. Example: 1985-10-26T09:00:00.000-0700 | No |
| endDate | The latest original received date to query by. Example: 2015-10-21T07:28:00.000-0700 | No |
| textSearch | Searches all message content for this string. This process could take a long time depending on the amount of message content currently stored. Any message content that was encrypted by this channel will not be searchable. | No |
| textSearchRegex | If true, text search input will be considered a regular expression pattern to be matched. Only supported by PostgreSQL, MySQL and Oracle databases. | No |
| status | Determines which message statuses to query by. | No |
| includedMetaDataId | If present, only connector metadata IDs in this list will be queried. | No |
| excludedMetaDataId | If present, connector metadata IDs in this list will not be queried. | No |
| serverId | The server ID associated with messages. | No |
| rawContentSearch | Searches the raw content of messages. | No |
| processedRawContentSearch | Searches the processed raw content of messages. | No |
| transformedContentSearch | Searches the transformed content of messages. | No |
| encodedContentSearch | Searches the encoded content of messages. | No |
| sentContentSearch | Searches the sent content of messages. | No |
| responseContentSearch | Searches the response content of messages. | No |
| responseTransformedContentSearch | Searches the response transformed content of messages. | No |
| processedResponseContentSearch | Searches the processed response content of messages. | No |
| connectorMapContentSearch | Searches the connector map content of messages. | No |
| channelMapContentSearch | Searches the channel map content of messages. | No |
| sourceMapContentSearch | Searches the source map content of messages. | No |
| responseMapContentSearch | Searches the response map content of messages. | No |
| processingErrorContentSearch | Searches the processing error content of messages. | No |
| postprocessorErrorContentSearch | Searches the postprocessor error content of messages. | No |
| responseErrorContentSearch | Searches the response error content of messages. | No |
| metaDataSearch | Searches a custom metadata column. Value should be in the form: COLUMN_NAME &lt;operator&gt; value, where operator is one of the following: =, !=, <, <=, >, >=, CONTAINS, DOES NOT CONTAIN, STARTS WITH, DOES NOT START WITH, ENDS WITH, DOES NOT END WITH | No |
| metaDataCaseInsensitiveSearch | Searches a custom metadata column, ignoring case. Value should be in the form: COLUMN_NAME &lt;operator&gt; value. | No |
| textSearchMetaDataColumn | When using a text search, these custom metadata columns will also be searched. | No |
| minSendAttempts | The minimum number of send attempts for connector messages. | No |
| maxSendAttempts | The maximum number of send attempts for connector messages. | No |
| attachment | If true, only messages with attachments are included in the results. | No |
| error | If true, only messages with errors are included in the results. | No |

Responses:

| Name | Description | Schema |
| ------ | ------ | ------ |
| default | successful operation |  |
---
#### Messages.exportMessagesServer1({channelId*, minMessageId, maxMessageId, minOriginalId, maxOriginalId, minImportId, maxImportId, startDate, endDate, textSearch, textSearchRegex, status, includedMetaDataId, excludedMetaDataId, serverId, rawContentSearch, processedRawContentSearch, transformedContentSearch, encodedContentSearch, sentContentSearch, responseContentSearch, responseTransformedContentSearch, processedResponseContentSearch, connectorMapContentSearch, channelMapContentSearch, sourceMapContentSearch, responseMapContentSearch, processingErrorContentSearch, postprocessorErrorContentSearch, responseErrorContentSearch, metaDataSearch, metaDataCaseInsensitiveSearch, textSearchMetaDataColumn, minSendAttempts, maxSendAttempts, attachment, error, pageSize, contentType, destinationContent, encrypt, includeAttachments, baseFolder, rootFolder, filePattern, archiveFileName, archiveFormat, compressFormat, password, encryptionType})

Summary: Exports messages into a specific directory path accessible by the server.

Description: 

Parameters:

| Name | Description | Required |
| ------ | ------ | ------ |
| channelId | The ID of the channel. | Yes |
| minMessageId | The minimum message ID to query. | No |
| maxMessageId | The maximum message ID to query. | No |
| minOriginalId | The minimum original message ID to query. Messages that have been reprocessed will retain their original message ID. | No |
| maxOriginalId | The maximum original message ID to query. Messages that have been reprocessed will retain their original message ID. | No |
| minImportId | The minimum import message ID to query. Messages that have been imported will retain their original message ID under this value. | No |
| maxImportId | The maximum import message ID to query. Messages that have been imported will retain their original message ID under this value. | No |
| startDate | The earliest original received date to query by. Example: 1985-10-26T09:00:00.000-0700 | No |
| endDate | The latest original received date to query by. Example: 2015-10-21T07:28:00.000-0700 | No |
| textSearch | Searches all message content for this string. This process could take a long time depending on the amount of message content currently stored. Any message content that was encrypted by this channel will not be searchable. | No |
| textSearchRegex | If true, text search input will be considered a regular expression pattern to be matched. Only supported by PostgreSQL, MySQL and Oracle databases. | No |
| status | Determines which message statuses to query by. | No |
| includedMetaDataId | If present, only connector metadata IDs in this list will be queried. | No |
| excludedMetaDataId | If present, connector metadata IDs in this list will not be queried. | No |
| serverId | The server ID associated with messages. | No |
| rawContentSearch | Searches the raw content of messages. | No |
| processedRawContentSearch | Searches the processed raw content of messages. | No |
| transformedContentSearch | Searches the transformed content of messages. | No |
| encodedContentSearch | Searches the encoded content of messages. | No |
| sentContentSearch | Searches the sent content of messages. | No |
| responseContentSearch | Searches the response content of messages. | No |
| responseTransformedContentSearch | Searches the response transformed content of messages. | No |
| processedResponseContentSearch | Searches the processed response content of messages. | No |
| connectorMapContentSearch | Searches the connector map content of messages. | No |
| channelMapContentSearch | Searches the channel map content of messages. | No |
| sourceMapContentSearch | Searches the source map content of messages. | No |
| responseMapContentSearch | Searches the response map content of messages. | No |
| processingErrorContentSearch | Searches the processing error content of messages. | No |
| postprocessorErrorContentSearch | Searches the postprocessor error content of messages. | No |
| responseErrorContentSearch | Searches the response error content of messages. | No |
| metaDataSearch | Searches a custom metadata column. Value should be in the form: COLUMN_NAME &lt;operator&gt; value, where operator is one of the following: =, !=, <, <=, >, >=, CONTAINS, DOES NOT CONTAIN, STARTS WITH, DOES NOT START WITH, ENDS WITH, DOES NOT END WITH | No |
| metaDataCaseInsensitiveSearch | Searches a custom metadata column, ignoring case. Value should be in the form: COLUMN_NAME &lt;operator&gt; value. | No |
| textSearchMetaDataColumn | When using a text search, these custom metadata columns will also be searched. | No |
| minSendAttempts | The minimum number of send attempts for connector messages. | No |
| maxSendAttempts | The maximum number of send attempts for connector messages. | No |
| attachment | If true, only messages with attachments are included in the results. | No |
| error | If true, only messages with errors are included in the results. | No |
| pageSize | The maximum number of messages that will be queried at a time. | No |
| contentType | The ContentType that will be extracted from the message for writing. If null or not provided, the entire message will be written in serialized format. | No |
| destinationContent | If true, the content to write will be extracted from the destination message(s), rather than the source message. | No |
| encrypt | If true, message content will be encrypted before writing. | No |
| includeAttachments | Determines whether attachments will be included with messages. | No |
| baseFolder | The base directory to use when resolving relative paths in the root folder. | No |
| rootFolder | The root folder to contain the written messages/sub-folders. | No |
| filePattern | A string defining the folder/filename(s) for writing messages. It may contain variables to be replaced. | No |
| archiveFileName | The file name to use for archive exports. | No |
| archiveFormat | The archiver format to use to archive messages/folders that are written to the root folder. Valid values: zip, tar | No |
| compressFormat | The compressor format to use to compress the archive file. Only valid when using the TAR archive format. Valid values: gz, bzip2 | No |
| password | The password used to protect the archive file. Only valid when using the ZIP archive format. | No |
| encryptionType | The algorithm used to encrypt the password-protected archive file. Only valid when using the ZIP archive format. Valid values: STANDARD, AES128, AES256 | No |

Responses:

| Name | Description | Schema |
| ------ | ------ | ------ |
| 200 | successful operation |  |
---
#### Messages.exportMessagesServer2({channelId*, filter*, pageSize, writerOptions})

Summary: Exports messages into a specific directory path accessible by the server.

Description: 

Parameters:

| Name | Description | Required |
| ------ | ------ | ------ |
| channelId | The ID of the channel. | Yes |
| filter | The MessageFilter object to use to query messages by. | Yes |
| pageSize | The maximum number of messages that will be queried at a time. | No |
| writerOptions | The MessageWriterOptions object containing various export options. | No |

Responses:

| Name | Description | Schema |
| ------ | ------ | ------ |
| 200 | successful operation |  |
---
#### Messages.importMessage({channelId*, body*})

Summary: Imports a Message object into a channel. The message will not actually be processed through the channel, only imported.

Description: 

Parameters:

| Name | Description | Required |
| ------ | ------ | ------ |
| channelId | The ID of the channel. | Yes |
| body | The Message object to import. | Yes |

Responses:

| Name | Description | Schema |
| ------ | ------ | ------ |
| default | successful operation |  |
---
#### Messages.importMessagesServer({channelId*, body*, includeSubfolders})

Summary: Imports messages into a channel from a path accessible by the server. The messages will not actually be processed through the channel, only imported.

Description: 

Parameters:

| Name | Description | Required |
| ------ | ------ | ------ |
| channelId | The ID of the channel. | Yes |
| body | The directory path on the server side to import messages from. | Yes |
| includeSubfolders | If true, sub-folders will also be scanned recursively for messages. | No |

Responses:

| Name | Description | Schema |
| ------ | ------ | ------ |
| 200 | successful operation |  |
---
#### Messages.removeMessages2({channelId*, body*})

Summary: Remove messages by specific filter criteria.

Description: 

Parameters:

| Name | Description | Required |
| ------ | ------ | ------ |
| channelId | The ID of the channel. | Yes |
| body | The MessageFilter object to use to query messages by. | Yes |

Responses:

| Name | Description | Schema |
| ------ | ------ | ------ |
| default | successful operation |  |
---
#### Messages.removeAllMessages2({channelId*, restartRunningChannels, clearStatistics})

Summary: Removes all messages for the specified channel.

Description: 

Parameters:

| Name | Description | Required |
| ------ | ------ | ------ |
| channelId | The ID of the channel. | Yes |
| restartRunningChannels | If true, currently running channels will be stopped and restarted as part of the remove process. Otherwise, currently running channels will not be included. | No |
| clearStatistics | If true, message statistics will also be cleared. | No |

Responses:

| Name | Description | Schema |
| ------ | ------ | ------ |
| default | successful operation |  |
---
#### Messages.reprocessMessages1({channelId*, minMessageId, maxMessageId, minOriginalId, maxOriginalId, minImportId, maxImportId, startDate, endDate, textSearch, textSearchRegex, status, includedMetaDataId, excludedMetaDataId, serverId, rawContentSearch, processedRawContentSearch, transformedContentSearch, encodedContentSearch, sentContentSearch, responseContentSearch, responseTransformedContentSearch, processedResponseContentSearch, connectorMapContentSearch, channelMapContentSearch, sourceMapContentSearch, responseMapContentSearch, processingErrorContentSearch, postprocessorErrorContentSearch, responseErrorContentSearch, metaDataSearch, metaDataCaseInsensitiveSearch, textSearchMetaDataColumn, minSendAttempts, maxSendAttempts, attachment, error, replace, filterDestinations, metaDataId})

Summary: Reprocesses messages through a channel by specific filter criteria.

Description: 

Parameters:

| Name | Description | Required |
| ------ | ------ | ------ |
| channelId | The ID of the channel. | Yes |
| minMessageId | The minimum message ID to query. | No |
| maxMessageId | The maximum message ID to query. | No |
| minOriginalId | The minimum original message ID to query. Messages that have been reprocessed will retain their original message ID. | No |
| maxOriginalId | The maximum original message ID to query. Messages that have been reprocessed will retain their original message ID. | No |
| minImportId | The minimum import message ID to query. Messages that have been imported will retain their original message ID under this value. | No |
| maxImportId | The maximum import message ID to query. Messages that have been imported will retain their original message ID under this value. | No |
| startDate | The earliest original received date to query by. Example: 1985-10-26T09:00:00.000-0700 | No |
| endDate | The latest original received date to query by. Example: 2015-10-21T07:28:00.000-0700 | No |
| textSearch | Searches all message content for this string. This process could take a long time depending on the amount of message content currently stored. Any message content that was encrypted by this channel will not be searchable. | No |
| textSearchRegex | If true, text search input will be considered a regular expression pattern to be matched. Only supported by PostgreSQL, MySQL and Oracle databases. | No |
| status | Determines which message statuses to query by. | No |
| includedMetaDataId | If present, only connector metadata IDs in this list will be queried. | No |
| excludedMetaDataId | If present, connector metadata IDs in this list will not be queried. | No |
| serverId | The server ID associated with messages. | No |
| rawContentSearch | Searches the raw content of messages. | No |
| processedRawContentSearch | Searches the processed raw content of messages. | No |
| transformedContentSearch | Searches the transformed content of messages. | No |
| encodedContentSearch | Searches the encoded content of messages. | No |
| sentContentSearch | Searches the sent content of messages. | No |
| responseContentSearch | Searches the response content of messages. | No |
| responseTransformedContentSearch | Searches the response transformed content of messages. | No |
| processedResponseContentSearch | Searches the processed response content of messages. | No |
| connectorMapContentSearch | Searches the connector map content of messages. | No |
| channelMapContentSearch | Searches the channel map content of messages. | No |
| sourceMapContentSearch | Searches the source map content of messages. | No |
| responseMapContentSearch | Searches the response map content of messages. | No |
| processingErrorContentSearch | Searches the processing error content of messages. | No |
| postprocessorErrorContentSearch | Searches the postprocessor error content of messages. | No |
| responseErrorContentSearch | Searches the response error content of messages. | No |
| metaDataSearch | Searches a custom metadata column. Value should be in the form: COLUMN_NAME &lt;operator&gt; value, where operator is one of the following: =, !=, <, <=, >, >=, CONTAINS, DOES NOT CONTAIN, STARTS WITH, DOES NOT START WITH, ENDS WITH, DOES NOT END WITH | No |
| metaDataCaseInsensitiveSearch | Searches a custom metadata column, ignoring case. Value should be in the form: COLUMN_NAME &lt;operator&gt; value. | No |
| textSearchMetaDataColumn | When using a text search, these custom metadata columns will also be searched. | No |
| minSendAttempts | The minimum number of send attempts for connector messages. | No |
| maxSendAttempts | The maximum number of send attempts for connector messages. | No |
| attachment | If true, only messages with attachments are included in the results. | No |
| error | If true, only messages with errors are included in the results. | No |
| replace | If true, the message will overwrite the current one | No |
| filterDestinations | If true, the metaDataId parameter will be used to determine which destinations to reprocess the message through. | No |
| metaDataId | Indicates which destinations to send the message to. | No |

Responses:

| Name | Description | Schema |
| ------ | ------ | ------ |
| default | successful operation |  |
---
#### Messages.reprocessMessages2({channelId*, body*, replace, filterDestinations, metaDataId})

Summary: Reprocesses messages through a channel filtering with a MessageFilter.

Description: 

Parameters:

| Name | Description | Required |
| ------ | ------ | ------ |
| channelId | The ID of the channel. | Yes |
| body | The MessageFilter object to use to query messages by. | Yes |
| replace | If true, the message will overwrite the current one | No |
| filterDestinations | If true, the metaDataId parameter will be used to determine which destinations to reprocess the message through. | No |
| metaDataId | Indicates which destinations to send the message to. | No |

Responses:

| Name | Description | Schema |
| ------ | ------ | ------ |
| default | successful operation |  |
---
#### Messages.getMessages2({channelId*, body*, includeContent, offset, limit})

Summary: Search for messages by specific filter criteria.

Description: 

Parameters:

| Name | Description | Required |
| ------ | ------ | ------ |
| channelId | The ID of the channel. | Yes |
| body | The MessageFilter object to use to query messages by. | Yes |
| includeContent | If true, message content will be returned with the results. | No |
| offset | Used for pagination, determines where to start in the search results. | No |
| limit | Used for pagination, determines the maximum number of results to return. | No |

Responses:

| Name | Description | Schema |
| ------ | ------ | ------ |
| 200 | successful operation |  |
---
#### Messages.getMessageCount1({channelId*, minMessageId, maxMessageId, minOriginalId, maxOriginalId, minImportId, maxImportId, startDate, endDate, textSearch, textSearchRegex, status, includedMetaDataId, excludedMetaDataId, serverId, rawContentSearch, processedRawContentSearch, transformedContentSearch, encodedContentSearch, sentContentSearch, responseContentSearch, responseTransformedContentSearch, processedResponseContentSearch, connectorMapContentSearch, channelMapContentSearch, sourceMapContentSearch, responseMapContentSearch, processingErrorContentSearch, postprocessorErrorContentSearch, responseErrorContentSearch, metaDataSearch, metaDataCaseInsensitiveSearch, textSearchMetaDataColumn, minSendAttempts, maxSendAttempts, attachment, error})

Summary: Count number for messages by specific filter criteria.

Description: 

Parameters:

| Name | Description | Required |
| ------ | ------ | ------ |
| channelId | The ID of the channel. | Yes |
| minMessageId | The minimum message ID to query. | No |
| maxMessageId | The maximum message ID to query. | No |
| minOriginalId | The minimum original message ID to query. Messages that have been reprocessed will retain their original message ID. | No |
| maxOriginalId | The maximum original message ID to query. Messages that have been reprocessed will retain their original message ID. | No |
| minImportId | The minimum import message ID to query. Messages that have been imported will retain their original message ID under this value. | No |
| maxImportId | The maximum import message ID to query. Messages that have been imported will retain their original message ID under this value. | No |
| startDate | The earliest original received date to query by. Example: 1985-10-26T09:00:00.000-0700 | No |
| endDate | The latest original received date to query by. Example: 2015-10-21T07:28:00.000-0700 | No |
| textSearch | Searches all message content for this string. This process could take a long time depending on the amount of message content currently stored. Any message content that was encrypted by this channel will not be searchable. | No |
| textSearchRegex | If true, text search input will be considered a regular expression pattern to be matched. Only supported by PostgreSQL, MySQL and Oracle databases. | No |
| status | Determines which message statuses to query by. | No |
| includedMetaDataId | If present, only connector metadata IDs in this list will be queried. | No |
| excludedMetaDataId | If present, connector metadata IDs in this list will not be queried. | No |
| serverId | The server ID associated with messages. | No |
| rawContentSearch | Searches the raw content of messages. | No |
| processedRawContentSearch | Searches the processed raw content of messages. | No |
| transformedContentSearch | Searches the transformed content of messages. | No |
| encodedContentSearch | Searches the encoded content of messages. | No |
| sentContentSearch | Searches the sent content of messages. | No |
| responseContentSearch | Searches the response content of messages. | No |
| responseTransformedContentSearch | Searches the response transformed content of messages. | No |
| processedResponseContentSearch | Searches the processed response content of messages. | No |
| connectorMapContentSearch | Searches the connector map content of messages. | No |
| channelMapContentSearch | Searches the channel map content of messages. | No |
| sourceMapContentSearch | Searches the source map content of messages. | No |
| responseMapContentSearch | Searches the response map content of messages. | No |
| processingErrorContentSearch | Searches the processing error content of messages. | No |
| postprocessorErrorContentSearch | Searches the postprocessor error content of messages. | No |
| responseErrorContentSearch | Searches the response error content of messages. | No |
| metaDataSearch | Searches a custom metadata column. Value should be in the form: COLUMN_NAME &lt;operator&gt; value, where operator is one of the following: =, !=, <, <=, >, >=, CONTAINS, DOES NOT CONTAIN, STARTS WITH, DOES NOT START WITH, ENDS WITH, DOES NOT END WITH | No |
| metaDataCaseInsensitiveSearch | Searches a custom metadata column, ignoring case. Value should be in the form: COLUMN_NAME &lt;operator&gt; value. | No |
| textSearchMetaDataColumn | When using a text search, these custom metadata columns will also be searched. | No |
| minSendAttempts | The minimum number of send attempts for connector messages. | No |
| maxSendAttempts | The maximum number of send attempts for connector messages. | No |
| attachment | If true, only messages with attachments are included in the results. | No |
| error | If true, only messages with errors are included in the results. | No |

Responses:

| Name | Description | Schema |
| ------ | ------ | ------ |
| 200 | successful operation |  |
---
#### Messages.getMessageCount2({channelId*, body*})

Summary: Count number for messages by specific filter criteria.

Description: 

Parameters:

| Name | Description | Required |
| ------ | ------ | ------ |
| channelId | The ID of the channel. | Yes |
| body | The MessageFilter object to use to query messages by. | Yes |

Responses:

| Name | Description | Schema |
| ------ | ------ | ------ |
| 200 | successful operation |  |
---
#### Messages.getMaxMessageId({channelId*})

Summary: Returns the maximum message ID for the given channel.

Description: 

Parameters:

| Name | Description | Required |
| ------ | ------ | ------ |
| channelId | The ID of the channel. | Yes |

Responses:

| Name | Description | Schema |
| ------ | ------ | ------ |
| 200 | successful operation |  |
---
#### Messages.getMessageContent({channelId*, messageId*, metaDataId})

Summary: Retrieve a message by ID.

Description: 

Parameters:

| Name | Description | Required |
| ------ | ------ | ------ |
| channelId | The ID of the channel. | Yes |
| messageId | The ID of the message. | Yes |
| metaDataId | The metadata IDs of the connectors. | No |

Responses:

| Name | Description | Schema |
| ------ | ------ | ------ |
| 200 | successful operation |  |
---
#### Messages.removeMessage({channelId*, messageId*, metaDataId})

Summary: Remove a single message by ID.

Description: 

Parameters:

| Name | Description | Required |
| ------ | ------ | ------ |
| channelId | The ID of the channel. | Yes |
| messageId | The ID of the message. | Yes |
| metaDataId | If present, only the specific connector message will be removed. If the metadata ID is 0, the entire message will be removed. | No |

Responses:

| Name | Description | Schema |
| ------ | ------ | ------ |
| default | successful operation |  |
---
#### Messages.getDICOMMessage({channelId*, messageId*, body*})

Summary: Given a ConnectorMessage object, reattaches any DICOM attachment data and returns the raw Base64 encoded message data.

Description: 

Parameters:

| Name | Description | Required |
| ------ | ------ | ------ |
| channelId | The ID of the channel. | Yes |
| messageId | The ID of the message. | Yes |
| body | The ConnectorMessage to retrieve DICOM data for. | Yes |

Responses:

| Name | Description | Schema |
| ------ | ------ | ------ |
| 200 | successful operation |  |
---
#### Messages.reprocessMessage({channelId*, messageId*, replace, filterDestinations, metaDataId})

Summary: Reprocesses and overwrites a single message.

Description: 

Parameters:

| Name | Description | Required |
| ------ | ------ | ------ |
| channelId | The ID of the channel. | Yes |
| messageId | The ID of the message. | Yes |
| replace | If true, the message will overwrite the current one | No |
| filterDestinations | If true, the metaDataId parameter will be used to determine which destinations to reprocess the message through. | No |
| metaDataId | Indicates which destinations to send the message to. | No |

Responses:

| Name | Description | Schema |
| ------ | ------ | ------ |
| default | successful operation |  |
---
#### Messages.getAttachmentsByMessageId({channelId*, messageId*, includeContent})

Summary: Retrieve a list of attachments by message ID.

Description: 

Parameters:

| Name | Description | Required |
| ------ | ------ | ------ |
| channelId | The ID of the channel. | Yes |
| messageId | The ID of the message. | Yes |
| includeContent | If false, only the attachment ID and type will be returned. | No |

Responses:

| Name | Description | Schema |
| ------ | ------ | ------ |
| 200 | successful operation |  |
---
#### Messages.getAttachment({channelId*, messageId*, attachmentId*})

Summary: Retrieve a message attachment by ID.

Description: 

Parameters:

| Name | Description | Required |
| ------ | ------ | ------ |
| channelId | The ID of the channel. | Yes |
| messageId | The ID of the message. | Yes |
| attachmentId | The ID of the attachment. | Yes |

Responses:

| Name | Description | Schema |
| ------ | ------ | ------ |
| 200 | successful operation |  |
---
#### Messages.exportAttachmentServer({channelId*, messageId*, attachmentId*, body*, binary})

Summary: Exports a message attachment into a specific file path accessible by the server.

Description: 

Parameters:

| Name | Description | Required |
| ------ | ------ | ------ |
| channelId | The ID of the channel. | Yes |
| messageId | The ID of the message. | Yes |
| attachmentId | The ID of the attachment. | Yes |
| body | The file path to export the attachment to. | Yes |
| binary | Indicates that the attachment is binary and should be Base64 decoded before writing to file. | No |

Responses:

| Name | Description | Schema |
| ------ | ------ | ------ |
| default | successful operation |  |
---
#### Messages.processMessage2({channelId*, body*})

Summary: Processes a new message through a channel, using the RawMessage object.

Description: 

Parameters:

| Name | Description | Required |
| ------ | ------ | ------ |
| channelId | The ID of the channel. | Yes |
| body | The RawMessage object to process. | Yes |

Responses:

| Name | Description | Schema |
| ------ | ------ | ------ |
| 200 | successful operation |  |
---
#### CodeTemplates.getCodeTemplateLibraries({libraryId, includeCodeTemplates})

Summary: Retrieves multiple code template libraries by ID, or all libraries if not specified.

Description: 

Parameters:

| Name | Description | Required |
| ------ | ------ | ------ |
| libraryId | The ID of the library(s) to retrieve. | No |
| includeCodeTemplates | If true, full code templates will be included inside each library. | No |

Responses:

| Name | Description | Schema |
| ------ | ------ | ------ |
| 200 | successful operation |  |
---
#### CodeTemplates.updateCodeTemplateLibraries({body*, override})

Summary: Replaces all code template libraries.

Description: 

Parameters:

| Name | Description | Required |
| ------ | ------ | ------ |
| body | The list of code template libraries to replace with. | Yes |
| override | If true, the code template library will be updated even if a different revision exists on the server. | No |

Responses:

| Name | Description | Schema |
| ------ | ------ | ------ |
| 200 | successful operation |  |
---
#### CodeTemplates.updateLibrariesAndTemplates({libraries, removedLibraryIds, updatedCodeTemplates, removedCodeTemplateIds, override})

Summary: Updates all libraries and updates/removes selected code templates in one request.

Description: 

Parameters:

| Name | Description | Required |
| ------ | ------ | ------ |
| libraries | The set of code template libraries to replace with. | No |
| removedLibraryIds | All library IDs known to be removed. | No |
| updatedCodeTemplates | The set of code templates to update. | No |
| removedCodeTemplateIds | All code template IDs known to be removed. | No |
| override | If true, the libraries and code templates will be updated even if different revisions exist on the server. | No |

Responses:

| Name | Description | Schema |
| ------ | ------ | ------ |
| 200 | successful operation |  |
---
#### CodeTemplates.getCodeTemplateLibrariesPost({body, includeCodeTemplates})

Summary: Retrieves multiple code template libraries by ID, or all libraries if not specified. This is a POST request alternative to GET /codeTemplateLibraries that may be used when there are too many library IDs to include in the query parameters.

Description: 

Parameters:

| Name | Description | Required |
| ------ | ------ | ------ |
| body | The ID of the library(s) to retrieve. | No |
| includeCodeTemplates | If true, full code templates will be included inside each library. | No |

Responses:

| Name | Description | Schema |
| ------ | ------ | ------ |
| 200 | successful operation |  |
---
#### CodeTemplates.getCodeTemplateLibrary({libraryId*, includeCodeTemplates})

Summary: Retrieves a single code template library.

Description: 

Parameters:

| Name | Description | Required |
| ------ | ------ | ------ |
| libraryId | The ID of the library to retrieve. | Yes |
| includeCodeTemplates | If true, full code templates will be included inside each library. | No |

Responses:

| Name | Description | Schema |
| ------ | ------ | ------ |
| 200 | successful operation |  |
---
#### CodeTemplates.getCodeTemplates({codeTemplateId})

Summary: Retrieves multiple code templates by ID, or all templates if not specified.

Description: 

Parameters:

| Name | Description | Required |
| ------ | ------ | ------ |
| codeTemplateId | The ID of the code template(s) to retrieve. | No |

Responses:

| Name | Description | Schema |
| ------ | ------ | ------ |
| 200 | successful operation |  |
---
#### CodeTemplates.getCodeTemplatesPost({body})

Summary: Retrieves multiple code templates by ID, or all templates if not specified. This is a POST request alternative to GET /codeTemplates that may be used when there are too many code template IDs to include in the query parameters.

Description: 

Parameters:

| Name | Description | Required |
| ------ | ------ | ------ |
| body | The ID of the code template(s) to retrieve. | No |

Responses:

| Name | Description | Schema |
| ------ | ------ | ------ |
| 200 | successful operation |  |
---
#### CodeTemplates.getCodeTemplateSummary({body*})

Summary: Returns a list of code template summaries, indicating to a client which code templates have changed. If a code template was modified, the entire CodeTemplate object will be returned.

Description: 

Parameters:

| Name | Description | Required |
| ------ | ------ | ------ |
| body | A map of revisions telling the server the state of the client-side code template cache. | Yes |

Responses:

| Name | Description | Schema |
| ------ | ------ | ------ |
| 200 | successful operation |  |
---
#### CodeTemplates.getCodeTemplate({codeTemplateId*})

Summary: Retrieves a single code template.

Description: 

Parameters:

| Name | Description | Required |
| ------ | ------ | ------ |
| codeTemplateId | The ID of the code template to retrieve. | Yes |

Responses:

| Name | Description | Schema |
| ------ | ------ | ------ |
| 200 | successful operation |  |
---
#### CodeTemplates.updateCodeTemplate({codeTemplateId*, body*, override})

Summary: Updates a single code template.

Description: 

Parameters:

| Name | Description | Required |
| ------ | ------ | ------ |
| codeTemplateId | The ID of the code template. | Yes |
| body | The CodeTemplate object to update with. | Yes |
| override | If true, the code template will be updated even if a different revision exists on the server. | No |

Responses:

| Name | Description | Schema |
| ------ | ------ | ------ |
| 200 | successful operation |  |
---
#### CodeTemplates.removeCodeTemplate({codeTemplateId*})

Summary: Removes a single code template.

Description: 

Parameters:

| Name | Description | Required |
| ------ | ------ | ------ |
| codeTemplateId | The ID of the code template. | Yes |

Responses:

| Name | Description | Schema |
| ------ | ------ | ------ |
| default | successful operation |  |
---
#### ConnectorServices.testWrite1({channelId*, channelName*, body*})

Summary: Tests whether a file can be written to the specified directory.

Description: 

Parameters:

| Name | Description | Required |
| ------ | ------ | ------ |
| channelId | The ID of the channel. | Yes |
| channelName | The name of the channel. | Yes |
| body | The directory to test writing to. | Yes |

Responses:

| Name | Description | Schema |
| ------ | ------ | ------ |
| 200 | successful operation |  |
---
#### ConnectorServices.testRead({channelId*, channelName*, body*})

Summary: Tests whether a file can be read from the specified directory.

Description: 

Parameters:

| Name | Description | Required |
| ------ | ------ | ------ |
| channelId | The ID of the channel. | Yes |
| channelName | The name of the channel. | Yes |
| body | The File Reader properties to use. | Yes |

Responses:

| Name | Description | Schema |
| ------ | ------ | ------ |
| 200 | successful operation |  |
---
#### ConnectorServices.testWrite2({channelId*, channelName*, body*})

Summary: Tests whether a file can be written to the specified directory.

Description: 

Parameters:

| Name | Description | Required |
| ------ | ------ | ------ |
| channelId | The ID of the channel. | Yes |
| channelName | The name of the channel. | Yes |
| body | The File Writer properties to use. | Yes |

Responses:

| Name | Description | Schema |
| ------ | ------ | ------ |
| 200 | successful operation |  |
---
#### ConnectorServices.testConnection1({channelId*, channelName*, body*})

Summary: Tests whether a connection can be successfully established to the destination endpoint.

Description: 

Parameters:

| Name | Description | Required |
| ------ | ------ | ------ |
| channelId | The ID of the channel. | Yes |
| channelName | The name of the channel. | Yes |
| body | The HTTP Sender properties to use. | Yes |

Responses:

| Name | Description | Schema |
| ------ | ------ | ------ |
| 200 | successful operation |  |
---
#### ConnectorServices.getTables({channelId*, channelName*, driver*, url*, username, password, tableNamePattern, selectLimit, resourceId})

Summary: Executes a query to retrieve database table metadata.

Description: 

Parameters:

| Name | Description | Required |
| ------ | ------ | ------ |
| channelId | The ID of the channel. | Yes |
| channelName | The name of the channel. | Yes |
| driver | The JDBC driver class to use. | Yes |
| url | The JDBC connection URL to use. | Yes |
| username | The username to authenticate with. | No |
| password | The password to authenticate with. | No |
| tableNamePattern | If specified, filters by table name. Wildcards (* or %) are allowed. | No |
| selectLimit | A simple query to use to retrieve database metadata information. | No |
| resourceId | Library resource IDs to use, if a custom driver is necessary. | No |

Responses:

| Name | Description | Schema |
| ------ | ------ | ------ |
| 200 | successful operation |  |
---
#### ConnectorServices.getTemplates()

Summary: Retrieves JMS connector settings templates.

Description: 

Parameters:

| Name | Description | Required |
| ------ | ------ | ------ |

Responses:

| Name | Description | Schema |
| ------ | ------ | ------ |
| 200 | successful operation |  |
---
#### ConnectorServices.getTemplate({templateName*})

Summary: Retrieves a single JMS connector settings template.

Description: 

Parameters:

| Name | Description | Required |
| ------ | ------ | ------ |
| templateName | The name of the template. | Yes |

Responses:

| Name | Description | Schema |
| ------ | ------ | ------ |
| 200 | successful operation |  |
---
#### ConnectorServices.saveTemplate({templateName*, body*})

Summary: Creates or updates a JMS connector settings template.

Description: 

Parameters:

| Name | Description | Required |
| ------ | ------ | ------ |
| templateName | The name of the template. | Yes |
| body | The JMS connector properties to save. | Yes |

Responses:

| Name | Description | Schema |
| ------ | ------ | ------ |
| 200 | successful operation |  |
---
#### ConnectorServices.deleteTemplate({templateName*})

Summary: Creates or updates a JMS connector settings template.

Description: 

Parameters:

| Name | Description | Required |
| ------ | ------ | ------ |
| templateName | The name of the template. | Yes |

Responses:

| Name | Description | Schema |
| ------ | ------ | ------ |
| 200 | successful operation |  |
---
#### ConnectorServices.sendTestEmail1({channelId*, channelName*, body*})

Summary: Sends a test e-mail, replacing any connector properties first.

Description: 

Parameters:

| Name | Description | Required |
| ------ | ------ | ------ |
| channelId | The ID of the channel. | Yes |
| channelName | The name of the channel. | Yes |
| body | The SMTP Sender properties to use. | Yes |

Responses:

| Name | Description | Schema |
| ------ | ------ | ------ |
| 200 | successful operation |  |
---
#### ConnectorServices.testConnection2({channelId*, channelName*, body*})

Summary: Tests whether a connection can be successfully established to the destination endpoint.

Description: 

Parameters:

| Name | Description | Required |
| ------ | ------ | ------ |
| channelId | The ID of the channel. | Yes |
| channelName | The name of the channel. | Yes |
| body | The TCP Sender properties to use. | Yes |

Responses:

| Name | Description | Schema |
| ------ | ------ | ------ |
| 200 | successful operation |  |
---
#### ConnectorServices.cacheWsdlFromUrl({channelId*, channelName*, body*})

Summary: Downloads the WSDL at the specified URL and caches the web service definition tree.

Description: 

Parameters:

| Name | Description | Required |
| ------ | ------ | ------ |
| channelId | The ID of the channel. | Yes |
| channelName | The name of the channel. | Yes |
| body | The Web Service Sender properties to use. | Yes |

Responses:

| Name | Description | Schema |
| ------ | ------ | ------ |
| 200 | successful operation |  |
---
#### ConnectorServices.generateEnvelope({channelId*, channelName*, wsdlUrl*, username, password, service, port, operation, buildOptional})

Summary: Generate SOAP envelope for a given WSDL operation.

Description: 

Parameters:

| Name | Description | Required |
| ------ | ------ | ------ |
| channelId | The ID of the channel. | Yes |
| channelName | The name of the channel. | Yes |
| wsdlUrl | The WSDL URL to check. | Yes |
| username | Username used to authenticate to the web server. | No |
| password | Password used to authenticate to the web server. | No |
| service | The service name for the WSDL operation. | No |
| port | The port / endpoint name for the service. | No |
| operation | The name of the operation to generate an envelope for. | No |
| buildOptional | Whether to include optional fields in the envelope. | No |

Responses:

| Name | Description | Schema |
| ------ | ------ | ------ |
| 200 | successful operation |  |
---
#### ConnectorServices.getDefinition({channelId*, channelName*, wsdlUrl*, username, password})

Summary: Retrieves the definition service map corresponding to the specified WSDL.

Description: 

Parameters:

| Name | Description | Required |
| ------ | ------ | ------ |
| channelId | The ID of the channel. | Yes |
| channelName | The name of the channel. | Yes |
| wsdlUrl | The WSDL URL to check. | Yes |
| username | Username used to authenticate to the web server. | No |
| password | Password used to authenticate to the web server. | No |

Responses:

| Name | Description | Schema |
| ------ | ------ | ------ |
| 200 | successful operation |  |
---
#### ConnectorServices.getSoapAction({channelId*, channelName*, wsdlUrl*, username, password, service, port, operation})

Summary: Retrieves the default SOAP Action for a given WSDL operation.

Description: 

Parameters:

| Name | Description | Required |
| ------ | ------ | ------ |
| channelId | The ID of the channel. | Yes |
| channelName | The name of the channel. | Yes |
| wsdlUrl | The WSDL URL to check. | Yes |
| username | Username used to authenticate to the web server. | No |
| password | Password used to authenticate to the web server. | No |
| service | The service name for the WSDL operation. | No |
| port | The port / endpoint name for the service. | No |
| operation | The name of the operation to generate an envelope for. | No |

Responses:

| Name | Description | Schema |
| ------ | ------ | ------ |
| 200 | successful operation |  |
---
#### ConnectorServices.isWsdlCached({channelId*, channelName*, wsdlUrl*, username, password})

Summary: Returns true if the definition tree for the WSDL is cached by the server.

Description: 

Parameters:

| Name | Description | Required |
| ------ | ------ | ------ |
| channelId | The ID of the channel. | Yes |
| channelName | The name of the channel. | Yes |
| wsdlUrl | The WSDL URL to check. | Yes |
| username | Username used to authenticate to the web server. | No |
| password | Password used to authenticate to the web server. | No |

Responses:

| Name | Description | Schema |
| ------ | ------ | ------ |
| 200 | successful operation |  |
---
#### ConnectorServices.testConnection3({channelId*, channelName*, body*})

Summary: Tests whether a connection can be successfully established to the destination endpoint.

Description: 

Parameters:

| Name | Description | Required |
| ------ | ------ | ------ |
| channelId | The ID of the channel. | Yes |
| channelName | The name of the channel. | Yes |
| body | The Web Service Sender properties to use. | Yes |

Responses:

| Name | Description | Schema |
| ------ | ------ | ------ |
| 200 | successful operation |  |
---
#### DatabaseTasks.getDatabaseTasks()

Summary: Retrieves all current database tasks.

Description: 

Parameters:

| Name | Description | Required |
| ------ | ------ | ------ |

Responses:

| Name | Description | Schema |
| ------ | ------ | ------ |
| 200 | successful operation |  |
---
#### DatabaseTasks.getDatabaseTask({databaseTaskId*})

Summary: Retrieves a single database task.

Description: 

Parameters:

| Name | Description | Required |
| ------ | ------ | ------ |
| databaseTaskId | The ID of the database task. | Yes |

Responses:

| Name | Description | Schema |
| ------ | ------ | ------ |
| 200 | successful operation |  |
---
#### DatabaseTasks.cancelDatabaseTask({databaseTaskId*})

Summary: Cancels execution of the specified database task.

Description: 

Parameters:

| Name | Description | Required |
| ------ | ------ | ------ |
| databaseTaskId | The ID of the database task. | Yes |

Responses:

| Name | Description | Schema |
| ------ | ------ | ------ |
| default | successful operation |  |
---
#### DatabaseTasks.runDatabaseTask({databaseTaskId*})

Summary: Executes the specified database task.

Description: 

Parameters:

| Name | Description | Required |
| ------ | ------ | ------ |
| databaseTaskId | The ID of the database task. | Yes |

Responses:

| Name | Description | Schema |
| ------ | ------ | ------ |
| 200 | successful operation |  |
---
#### Events.getEvents1({maxEventId, minEventId, level, startDate, endDate, name, outcome, userId, ipAddress, serverId, offset, limit})

Summary: Search for events by specific filter criteria.

Description: 

Parameters:

| Name | Description | Required |
| ------ | ------ | ------ |
| maxEventId | The maximum event ID to query. | No |
| minEventId | The minimum event ID to query. | No |
| level | The type of events to query. | No |
| startDate | The earliest event date to query by. Example: 1985-10-26T09:00:00.000-0700 | No |
| endDate | The latest event date to query by. Example: 2015-10-21T07:28:00.000-0700 | No |
| name | Searches the event name for this string. | No |
| outcome | Searches on whether the event outcome was successful or not. | No |
| userId | The user ID to query events by. | No |
| ipAddress | The IP address that originated the event. | No |
| serverId | The ID of the server that the event was created from. | No |
| offset | Used for pagination, determines where to start in the search results. | No |
| limit | Used for pagination, determines the maximum number of results to return. | No |

Responses:

| Name | Description | Schema |
| ------ | ------ | ------ |
| 200 | successful operation |  |
---
#### Events.removeAllEvents({export})

Summary: Remove all events.

Description: 

Parameters:

| Name | Description | Required |
| ------ | ------ | ------ |
| export | If true, messages will be exported into the application data directory on the server before being removed. | No |

Responses:

| Name | Description | Schema |
| ------ | ------ | ------ |
| 200 | successful operation |  |
---
#### Events.exportAllEvents()

Summary: Exports all events to the application data directory on the server.

Description: 

Parameters:

| Name | Description | Required |
| ------ | ------ | ------ |

Responses:

| Name | Description | Schema |
| ------ | ------ | ------ |
| 200 | successful operation |  |
---
#### Events.getEvents2({body*, offset, limit})

Summary: Search for events by specific filter criteria.

Description: 

Parameters:

| Name | Description | Required |
| ------ | ------ | ------ |
| body | The EventFilter object to use to query events by. | Yes |
| offset | Used for pagination, determines where to start in the search results. | No |
| limit | Used for pagination, determines the maximum number of results to return. | No |

Responses:

| Name | Description | Schema |
| ------ | ------ | ------ |
| 200 | successful operation |  |
---
#### Events.getEventCount1({maxEventId, minEventId, level, startDate, endDate, name, outcome, userId, ipAddress, serverId})

Summary: Count number for events by specific filter criteria.

Description: 

Parameters:

| Name | Description | Required |
| ------ | ------ | ------ |
| maxEventId | The maximum event ID to query. | No |
| minEventId | The minimum event ID to query. | No |
| level | The type of events to query. | No |
| startDate | The earliest event date to query by. Example: 1985-10-26T09:00:00.000-0700 | No |
| endDate | The latest event date to query by. Example: 2015-10-21T07:28:00.000-0700 | No |
| name | Searches the event name for this string. | No |
| outcome | Searches on whether the event outcome was successful or not. | No |
| userId | The user ID to query events by. | No |
| ipAddress | The IP address that originated the event. | No |
| serverId | The ID of the server that the event was created from. | No |

Responses:

| Name | Description | Schema |
| ------ | ------ | ------ |
| 200 | successful operation |  |
---
#### Events.getEventCount2({body*})

Summary: Count number for events by specific filter criteria.

Description: 

Parameters:

| Name | Description | Required |
| ------ | ------ | ------ |
| body | The EventFilter object to use to query events by. | Yes |

Responses:

| Name | Description | Schema |
| ------ | ------ | ------ |
| 200 | successful operation |  |
---
#### Events.getMaxEventId()

Summary: Returns the maximum event ID currently in the database.

Description: 

Parameters:

| Name | Description | Required |
| ------ | ------ | ------ |

Responses:

| Name | Description | Schema |
| ------ | ------ | ------ |
| 200 | successful operation |  |
---
#### Events.getEvent({eventId*})

Summary: Retrieves an event by ID.

Description: 

Parameters:

| Name | Description | Required |
| ------ | ------ | ------ |
| eventId | The ID of the event. | Yes |

Responses:

| Name | Description | Schema |
| ------ | ------ | ------ |
| 200 | successful operation |  |
---
#### Extensions.installExtension({file})

Summary: Installs an extension.

Description: 

Parameters:

| Name | Description | Required |
| ------ | ------ | ------ |
| file | The extension file to upload. | No |

Responses:

| Name | Description | Schema |
| ------ | ------ | ------ |
| default | successful operation |  |
---
#### Extensions.uninstallExtension({body*})

Summary: Uninstalls an extension.

Description: 

Parameters:

| Name | Description | Required |
| ------ | ------ | ------ |
| body | The path attribute of the extension to uninstall. | Yes |

Responses:

| Name | Description | Schema |
| ------ | ------ | ------ |
| default | successful operation |  |
---
#### Extensions.getConnectorMetaData()

Summary: Returns all active connector metadata.

Description: 

Parameters:

| Name | Description | Required |
| ------ | ------ | ------ |

Responses:

| Name | Description | Schema |
| ------ | ------ | ------ |
| 200 | successful operation |  |
---
#### Extensions.getPluginMetaData()

Summary: Returns all active plugin metadata.

Description: 

Parameters:

| Name | Description | Required |
| ------ | ------ | ------ |

Responses:

| Name | Description | Schema |
| ------ | ------ | ------ |
| 200 | successful operation |  |
---
#### Extensions.getExtensionMetaData({extensionName*})

Summary: Returns extension metadata by name.

Description: 

Parameters:

| Name | Description | Required |
| ------ | ------ | ------ |
| extensionName | The name of the extension to retrieve. | Yes |

Responses:

| Name | Description | Schema |
| ------ | ------ | ------ |
| 200 | successful operation |  |
---
#### Extensions.setExtensionEnabled({extensionName*, enabled*})

Summary: Enables or disables an extension.

Description: 

Parameters:

| Name | Description | Required |
| ------ | ------ | ------ |
| extensionName | The name of the extension to retrieve. | Yes |
| enabled | The new enabled status to set. | Yes |

Responses:

| Name | Description | Schema |
| ------ | ------ | ------ |
| default | successful operation |  |
---
#### Extensions.isExtensionEnabled({extensionName*})

Summary: Returns the enabled status of an extension.

Description: 

Parameters:

| Name | Description | Required |
| ------ | ------ | ------ |
| extensionName | The name of the extension to retrieve. | Yes |

Responses:

| Name | Description | Schema |
| ------ | ------ | ------ |
| 200 | successful operation |  |
---
#### Extensions.getPluginProperties({extensionName*})

Summary: Returns properties for a specified extension.

Description: 

Parameters:

| Name | Description | Required |
| ------ | ------ | ------ |
| extensionName | The name of the extension to retrieve. | Yes |

Responses:

| Name | Description | Schema |
| ------ | ------ | ------ |
| 200 | successful operation |  |
---
#### Extensions.setPluginProperties({extensionName*, body*})

Summary: Sets properties for a specified extension.

Description: 

Parameters:

| Name | Description | Required |
| ------ | ------ | ------ |
| extensionName | The name of the extension to retrieve. | Yes |
| body | The new properties to set. | Yes |

Responses:

| Name | Description | Schema |
| ------ | ------ | ------ |
| default | successful operation |  |
---
#### ExtensionServices.getChannelStates()

Summary: Retrieves all dashboard channel states.

Description: 

Parameters:

| Name | Description | Required |
| ------ | ------ | ------ |

Responses:

| Name | Description | Schema |
| ------ | ------ | ------ |
| 200 | successful operation |  |
---
#### ExtensionServices.getChannelState({channelId*})

Summary: Retrieves a single dashboard channel state.

Description: 

Parameters:

| Name | Description | Required |
| ------ | ------ | ------ |
| channelId | The channel ID to return a dashboard status for. | Yes |

Responses:

| Name | Description | Schema |
| ------ | ------ | ------ |
| 200 | successful operation |  |
---
#### ExtensionServices.getAllChannelLogs({serverId, fetchSize*, lastLogId})

Summary: Retrieves connection logs for all channels.

Description: 

Parameters:

| Name | Description | Required |
| ------ | ------ | ------ |
| serverId | The server ID to retrieve logs for. Logs for all servers are retrieved is this parameter is not specified. | No |
| fetchSize | Specifies the maximum number of log items to return. | Yes |
| lastLogId | The last log ID the client retrieved. Only log items with a greater ID will be returned. | No |

Responses:

| Name | Description | Schema |
| ------ | ------ | ------ |
| 200 | successful operation |  |
---
#### ExtensionServices.getChannelLog({serverId, channelId*, fetchSize*, lastLogId})

Summary: Retrieves connection logs for a specific channel.

Description: 

Parameters:

| Name | Description | Required |
| ------ | ------ | ------ |
| serverId | The server ID to retrieve logs for. Logs for all servers are retrieved is this parameter is not specified. | No |
| channelId | The channel ID to retrieve logs for. | Yes |
| fetchSize | Specifies the maximum number of log items to return. | Yes |
| lastLogId | The last log ID the client retrieved. Only log items with a greater ID will be returned. | No |

Responses:

| Name | Description | Schema |
| ------ | ------ | ------ |
| 200 | successful operation |  |
---
#### ExtensionServices.getConnectorStateMap({serverId})

Summary: Retrieves all dashboard connector states.

Description: 

Parameters:

| Name | Description | Required |
| ------ | ------ | ------ |
| serverId | The server ID to retrieve connector statuses for. Connector Statuses across all servers are retrieved is this parameter is not specified. | No |

Responses:

| Name | Description | Schema |
| ------ | ------ | ------ |
| 200 | successful operation |  |
---
#### ExtensionServices.start()

Summary: Starts the data pruner on-demand.

Description: 

Parameters:

| Name | Description | Required |
| ------ | ------ | ------ |

Responses:

| Name | Description | Schema |
| ------ | ------ | ------ |
| 200 | successful operation |  |
---
#### ExtensionServices.stop()

Summary: Stops the data pruner if currently running.

Description: 

Parameters:

| Name | Description | Required |
| ------ | ------ | ------ |

Responses:

| Name | Description | Schema |
| ------ | ------ | ------ |
| default | successful operation |  |
---
#### ExtensionServices.getStatusMap()

Summary: Retrieves the current data pruner status.

Description: 

Parameters:

| Name | Description | Required |
| ------ | ------ | ------ |

Responses:

| Name | Description | Schema |
| ------ | ------ | ------ |
| 200 | successful operation |  |
---
#### ExtensionServices.getLibraries({resourceId*})

Summary: Retrieves all library URLs for the given directory resource.

Description: 

Parameters:

| Name | Description | Required |
| ------ | ------ | ------ |
| resourceId | The ID of the directory resource. | Yes |

Responses:

| Name | Description | Schema |
| ------ | ------ | ------ |
| 200 | successful operation |  |
---
#### ExtensionServices.getAllMapsPost({body, includeGlobalMap})

Summary: Retrieves global and/or global channel map information. This is a POST request alternative to GET /maps/all that may be used when there are too many channel IDs to include in the query parameters.

Description: 

Parameters:

| Name | Description | Required |
| ------ | ------ | ------ |
| body | The ID of the channel to retrieve global channel map information for. | No |
| includeGlobalMap | If true, the global map will be returned. | No |

Responses:

| Name | Description | Schema |
| ------ | ------ | ------ |
| 200 | successful operation |  |
---
#### ExtensionServices.getAllMaps({channelId, includeGlobalMap})

Summary: Retrieves global and/or global channel map information.

Description: 

Parameters:

| Name | Description | Required |
| ------ | ------ | ------ |
| channelId | The ID of the channel to retrieve global channel map information for. | No |
| includeGlobalMap | If true, the global map will be returned. | No |

Responses:

| Name | Description | Schema |
| ------ | ------ | ------ |
| 200 | successful operation |  |
---
#### ExtensionServices.getGlobalMap()

Summary: Retrieves global map information.

Description: 

Parameters:

| Name | Description | Required |
| ------ | ------ | ------ |

Responses:

| Name | Description | Schema |
| ------ | ------ | ------ |
| 200 | successful operation |  |
---
#### ExtensionServices.getGlobalChannelMap({channelId*})

Summary: Retrieves global channel map information for a single channel.

Description: 

Parameters:

| Name | Description | Required |
| ------ | ------ | ------ |
| channelId | The ID of the channel to retrieve global channel map information for. | Yes |

Responses:

| Name | Description | Schema |
| ------ | ------ | ------ |
| 200 | successful operation |  |
---
#### ExtensionServices.getServerLogs({fetchSize*, lastLogId})

Summary: Retrieves server log entries.

Description: 

Parameters:

| Name | Description | Required |
| ------ | ------ | ------ |
| fetchSize | Specifies the maximum number of log items to return. | Yes |
| lastLogId | The last log ID the client retrieved. Only log items with a greater ID will be returned. | No |

Responses:

| Name | Description | Schema |
| ------ | ------ | ------ |
| 200 | successful operation |  |
---
#### ServerConfiguration.getGuid()

Summary: Returns a globally unique id.

Description: 

Parameters:

| Name | Description | Required |
| ------ | ------ | ------ |

Responses:

| Name | Description | Schema |
| ------ | ------ | ------ |
| 200 | successful operation |  |
---
#### ServerConfiguration.sendTestEmail2({body*})

Summary: Sends a test e-mail.

Description: 

Parameters:

| Name | Description | Required |
| ------ | ------ | ------ |
| body | Contains all properties needed to send the e-mail. Properties include: port, encryption, host, timeout, authentication, username, password, toAddress, fromAddress | Yes |

Responses:

| Name | Description | Schema |
| ------ | ------ | ------ |
| 200 | successful operation |  |
---
#### ServerConfiguration.getAbout()

Summary: Returns a map of common information about the Mirth Connect server.

Description: 

Parameters:

| Name | Description | Required |
| ------ | ------ | ------ |

Responses:

| Name | Description | Schema |
| ------ | ------ | ------ |
| 200 | successful operation |  |
---
#### ServerConfiguration.getBuildDate()

Summary: Returns the build date of the Mirth Connect server.

Description: 

Parameters:

| Name | Description | Required |
| ------ | ------ | ------ |

Responses:

| Name | Description | Schema |
| ------ | ------ | ------ |
| 200 | successful operation |  |
---
#### ServerConfiguration.getChannelDependencies()

Summary: Returns all channel dependencies for the server.

Description: 

Parameters:

| Name | Description | Required |
| ------ | ------ | ------ |

Responses:

| Name | Description | Schema |
| ------ | ------ | ------ |
| 200 | successful operation |  |
---
#### ServerConfiguration.setChannelDependencies({body*})

Summary: Updates all channel dependencies for the server.

Description: 

Parameters:

| Name | Description | Required |
| ------ | ------ | ------ |
| body | The channel dependencies to set. | Yes |

Responses:

| Name | Description | Schema |
| ------ | ------ | ------ |
| default | successful operation |  |
---
#### ServerConfiguration.getChannelMetadata()

Summary: Returns all channel metadata for the server.

Description: 

Parameters:

| Name | Description | Required |
| ------ | ------ | ------ |

Responses:

| Name | Description | Schema |
| ------ | ------ | ------ |
| 200 | successful operation |  |
---
#### ServerConfiguration.setChannelMetadata({body*})

Summary: Updates all channel metadata for the server.

Description: 

Parameters:

| Name | Description | Required |
| ------ | ------ | ------ |
| body | The map of channel metadata to set. | Yes |

Responses:

| Name | Description | Schema |
| ------ | ------ | ------ |
| default | successful operation |  |
---
#### ServerConfiguration.getChannelTags()

Summary: Returns a set containing all channel tags for the server.

Description: 

Parameters:

| Name | Description | Required |
| ------ | ------ | ------ |

Responses:

| Name | Description | Schema |
| ------ | ------ | ------ |
| 200 | successful operation |  |
---
#### ServerConfiguration.setChannelTags({body*})

Summary: Updates all channel tags.

Description: 

Parameters:

| Name | Description | Required |
| ------ | ------ | ------ |
| body | The channel tags to set. | Yes |

Responses:

| Name | Description | Schema |
| ------ | ------ | ------ |
| default | successful operation |  |
---
#### ServerConfiguration.getAvailableCharsetEncodings()

Summary: Returns a List of all of the charset encodings supported by the server.

Description: 

Parameters:

| Name | Description | Required |
| ------ | ------ | ------ |

Responses:

| Name | Description | Schema |
| ------ | ------ | ------ |
| 200 | successful operation |  |
---
#### ServerConfiguration.getServerConfiguration({initialState, pollingOnly, disableAlerts})

Summary: Returns a ServerConfiguration object which contains all of the channels, alerts, configuration map, and properties stored on the Mirth Connect server.

Description: 

Parameters:

| Name | Description | Required |
| ------ | ------ | ------ |
| initialState | The initial state to set all channels in the configuration to. | No |
| pollingOnly | If true, and the initialState parameter is set, only channels with polling source connectors will have their initial states overwritten in the returned server configuration. | No |
| disableAlerts | If true, all alerts returned in the server configuration will be disabled. | No |

Responses:

| Name | Description | Schema |
| ------ | ------ | ------ |
| 200 | successful operation |  |
---
#### ServerConfiguration.setServerConfiguration({body*, deploy, overwriteConfigMap})

Summary: Updates all of the channels, alerts and properties stored on the Mirth Connect server.

Description: 

Parameters:

| Name | Description | Required |
| ------ | ------ | ------ |
| body | The ServerConfiguration object containing all channels, users, alerts, and properties to update. | Yes |
| deploy | If true, all enabled channels will be deployed after the configuration is restored. | No |
| overwriteConfigMap | If true, overwrite the Configuration Map | No |

Responses:

| Name | Description | Schema |
| ------ | ------ | ------ |
| default | successful operation |  |
---
#### ServerConfiguration.getConfigurationMap()

Summary: Returns all entries in the configuration map.

Description: 

Parameters:

| Name | Description | Required |
| ------ | ------ | ------ |

Responses:

| Name | Description | Schema |
| ------ | ------ | ------ |
| 200 | successful operation |  |
---
#### ServerConfiguration.setConfigurationMap({body*})

Summary: Updates all entries in the configuration map.

Description: 

Parameters:

| Name | Description | Required |
| ------ | ------ | ------ |
| body | The new configuration map to update with. | Yes |

Responses:

| Name | Description | Schema |
| ------ | ------ | ------ |
| default | successful operation |  |
---
#### ServerConfiguration.getDatabaseDrivers()

Summary: Returns the database driver list.

Description: 

Parameters:

| Name | Description | Required |
| ------ | ------ | ------ |

Responses:

| Name | Description | Schema |
| ------ | ------ | ------ |
| 200 | successful operation |  |
---
#### ServerConfiguration.getEncryptionSettings()

Summary: Returns an EncryptionSettings object with all encryption settings.

Description: 

Parameters:

| Name | Description | Required |
| ------ | ------ | ------ |

Responses:

| Name | Description | Schema |
| ------ | ------ | ------ |
| 200 | successful operation |  |
---
#### ServerConfiguration.getGlobalScripts()

Summary: Returns a map containing all of the global scripts.

Description: 

Parameters:

| Name | Description | Required |
| ------ | ------ | ------ |

Responses:

| Name | Description | Schema |
| ------ | ------ | ------ |
| 200 | successful operation |  |
---
#### ServerConfiguration.setGlobalScripts({body*})

Summary: Updates all of the global scripts.

Description: 

Parameters:

| Name | Description | Required |
| ------ | ------ | ------ |
| body | The map of global scripts to update with. Script keys: Deploy, Undeploy, Preprocessor, Postprocessor | Yes |

Responses:

| Name | Description | Schema |
| ------ | ------ | ------ |
| default | successful operation |  |
---
#### ServerConfiguration.getServerId()

Summary: Returns the server id.

Description: 

Parameters:

| Name | Description | Required |
| ------ | ------ | ------ |

Responses:

| Name | Description | Schema |
| ------ | ------ | ------ |
| 200 | successful operation |  |
---
#### ServerConfiguration.getJVMName()

Summary: Returns the name of the JVM running Mirth Connect.

Description: 

Parameters:

| Name | Description | Required |
| ------ | ------ | ------ |

Responses:

| Name | Description | Schema |
| ------ | ------ | ------ |
| 200 | successful operation |  |
---
#### ServerConfiguration.getLicenseInfo()

Summary: Returns a LicenseInfo object with the expiration date and other information.

Description: 

Parameters:

| Name | Description | Required |
| ------ | ------ | ------ |

Responses:

| Name | Description | Schema |
| ------ | ------ | ------ |
| 200 | successful operation |  |
---
#### ServerConfiguration.getPasswordRequirements()

Summary: Returns all password requirements for the server.

Description: 

Parameters:

| Name | Description | Required |
| ------ | ------ | ------ |

Responses:

| Name | Description | Schema |
| ------ | ------ | ------ |
| 200 | successful operation |  |
---
#### ServerConfiguration.getProtocolsAndCipherSuites()

Summary: Returns a map containing all supported and enabled TLS protocols and cipher suites.

Description: 

Parameters:

| Name | Description | Required |
| ------ | ------ | ------ |

Responses:

| Name | Description | Schema |
| ------ | ------ | ------ |
| 200 | successful operation |  |
---
#### ServerConfiguration.getResources()

Summary: Returns all resources for the server.

Description: 

Parameters:

| Name | Description | Required |
| ------ | ------ | ------ |

Responses:

| Name | Description | Schema |
| ------ | ------ | ------ |
| 200 | successful operation |  |
---
#### ServerConfiguration.setResources({body*})

Summary: Updates all resources for the server.

Description: 

Parameters:

| Name | Description | Required |
| ------ | ------ | ------ |
| body | The new list of resource properties to update with. | Yes |

Responses:

| Name | Description | Schema |
| ------ | ------ | ------ |
| default | successful operation |  |
---
#### ServerConfiguration.reloadResource({resourceId*})

Summary: Reloads a resource and all libraries associated with it.

Description: 

Parameters:

| Name | Description | Required |
| ------ | ------ | ------ |
| resourceId | The unique ID of the resource to reload. | Yes |

Responses:

| Name | Description | Schema |
| ------ | ------ | ------ |
| default | successful operation |  |
---
#### ServerConfiguration.getRhinoLanguageVersion()

Summary: Returns the language version that the Rhino engine should use.

Description: 

Parameters:

| Name | Description | Required |
| ------ | ------ | ------ |

Responses:

| Name | Description | Schema |
| ------ | ------ | ------ |
| 200 | successful operation |  |
---
#### ServerConfiguration.getServerSettings()

Summary: Returns a ServerSettings object with all server settings.

Description: 

Parameters:

| Name | Description | Required |
| ------ | ------ | ------ |

Responses:

| Name | Description | Schema |
| ------ | ------ | ------ |
| 200 | successful operation |  |
---
#### ServerConfiguration.setServerSettings({body*})

Summary: Updates the server configuration settings.

Description: 

Parameters:

| Name | Description | Required |
| ------ | ------ | ------ |
| body | The ServerSettings object containing all of the settings to update. | Yes |

Responses:

| Name | Description | Schema |
| ------ | ------ | ------ |
| default | successful operation |  |
---
#### ServerConfiguration.getStatus()

Summary: Returns the status of the Mirth Connect server.

Description: 

Parameters:

| Name | Description | Required |
| ------ | ------ | ------ |

Responses:

| Name | Description | Schema |
| ------ | ------ | ------ |
| 200 | successful operation |  |
---
#### ServerConfiguration.getServerTime()

Summary: Returns the time of the server.

Description: 

Parameters:

| Name | Description | Required |
| ------ | ------ | ------ |

Responses:

| Name | Description | Schema |
| ------ | ------ | ------ |
| 200 | successful operation |  |
---
#### ServerConfiguration.getServerTimezone()

Summary: Returns the time zone of the server.

Description: 

Parameters:

| Name | Description | Required |
| ------ | ------ | ------ |

Responses:

| Name | Description | Schema |
| ------ | ------ | ------ |
| 200 | successful operation |  |
---
#### ServerConfiguration.getUpdateSettings()

Summary: Returns an UpdateSettings object with all update settings.

Description: 

Parameters:

| Name | Description | Required |
| ------ | ------ | ------ |

Responses:

| Name | Description | Schema |
| ------ | ------ | ------ |
| 200 | successful operation |  |
---
#### ServerConfiguration.setUpdateSettings({body*})

Summary: Updates the update settings.

Description: 

Parameters:

| Name | Description | Required |
| ------ | ------ | ------ |
| body | The UpdateSettings object containing all of the settings to update. | Yes |

Responses:

| Name | Description | Schema |
| ------ | ------ | ------ |
| default | successful operation |  |
---
#### ServerConfiguration.getVersion()

Summary: Returns the version of the Mirth Connect server.

Description: 

Parameters:

| Name | Description | Required |
| ------ | ------ | ------ |

Responses:

| Name | Description | Schema |
| ------ | ------ | ------ |
| 200 | successful operation |  |
---
#### SystemInformationAndStatistics.getInfo()

Summary: Returns information about the underlying system.

Description: 

Parameters:

| Name | Description | Required |
| ------ | ------ | ------ |

Responses:

| Name | Description | Schema |
| ------ | ------ | ------ |
| 200 | successful operation |  |
---
#### SystemInformationAndStatistics.getStats()

Summary: Returns statistics for the underlying system.

Description: 

Parameters:

| Name | Description | Required |
| ------ | ------ | ------ |

Responses:

| Name | Description | Schema |
| ------ | ------ | ------ |
| 200 | successful operation |  |
---
#### UsageData.getUsageData({body*})

Summary: Generates usage document using data from both the client and server.

Description: 

Parameters:

| Name | Description | Required |
| ------ | ------ | ------ |
| body | The map of client usage data to use. | Yes |

Responses:

| Name | Description | Schema |
| ------ | ------ | ------ |
| 200 | successful operation |  |
---
#### Users.getAllUsers()

Summary: Returns a List of all users.

Description: 

Parameters:

| Name | Description | Required |
| ------ | ------ | ------ |

Responses:

| Name | Description | Schema |
| ------ | ------ | ------ |
| 200 | successful operation |  |
---
#### Users.createUser({body*})

Summary: Creates a new user.

Description: 

Parameters:

| Name | Description | Required |
| ------ | ------ | ------ |
| body | The User object to create. | Yes |

Responses:

| Name | Description | Schema |
| ------ | ------ | ------ |
| default | successful operation |  |
---
#### Users.checkUserPassword({body*})

Summary: Checks the password against the configured password policies.

Description: 

Parameters:

| Name | Description | Required |
| ------ | ------ | ------ |
| body | The plaintext password to check. | Yes |

Responses:

| Name | Description | Schema |
| ------ | ------ | ------ |
| 200 | successful operation |  |
---
#### Users.login({username*, password*})

Summary: Logs in to the Mirth Connect server using the specified name and password.

Description: 

Parameters:

| Name | Description | Required |
| ------ | ------ | ------ |
| username | The username to login with. | Yes |
| password | The password to login with. | Yes |

Responses:

| Name | Description | Schema |
| ------ | ------ | ------ |
| 200 | successful operation |  |
---
#### Users.logout()

Summary: Logs out of the server.

Description: 

Parameters:

| Name | Description | Required |
| ------ | ------ | ------ |

Responses:

| Name | Description | Schema |
| ------ | ------ | ------ |
| default | successful operation |  |
---
#### Users.getCurrentUser()

Summary: Returns the current logged in user.

Description: 

Parameters:

| Name | Description | Required |
| ------ | ------ | ------ |

Responses:

| Name | Description | Schema |
| ------ | ------ | ------ |
| 200 | successful operation |  |
---
#### Users.getUser({userIdOrName*})

Summary: Returns a specific user by ID or username.

Description: 

Parameters:

| Name | Description | Required |
| ------ | ------ | ------ |
| userIdOrName | The unique ID or username of the user to retrieve. | Yes |

Responses:

| Name | Description | Schema |
| ------ | ------ | ------ |
| 200 | successful operation |  |
---
#### Users.updateUser({userId*, body*})

Summary: Updates a specified user.

Description: 

Parameters:

| Name | Description | Required |
| ------ | ------ | ------ |
| userId | The unique ID of the user to update. | Yes |
| body | The User object to update. | Yes |

Responses:

| Name | Description | Schema |
| ------ | ------ | ------ |
| default | successful operation |  |
---
#### Users.removeUser({userId*})

Summary: Removes a specific user.

Description: 

Parameters:

| Name | Description | Required |
| ------ | ------ | ------ |
| userId | The unique ID of the user to remove. | Yes |

Responses:

| Name | Description | Schema |
| ------ | ------ | ------ |
| default | successful operation |  |
---
#### Users.isUserLoggedIn({userId*})

Summary: Returns a true if the specified user is logged in to the server.

Description: 

Parameters:

| Name | Description | Required |
| ------ | ------ | ------ |
| userId | The unique ID of the user. | Yes |

Responses:

| Name | Description | Schema |
| ------ | ------ | ------ |
| 200 | successful operation |  |
---
#### Users.updateUserPassword({userId*, body*})

Summary: Updates a user's password.

Description: 

Parameters:

| Name | Description | Required |
| ------ | ------ | ------ |
| userId | The unique ID of the user to update the password for. | Yes |
| body | The plaintext password to update with. | Yes |

Responses:

| Name | Description | Schema |
| ------ | ------ | ------ |
| 200 | successful operation |  |
---
#### Users.getUserPreferences({userId*, name})

Summary: Returns a Map of user preferences, optionally filtered by a set of property names.

Description: 

Parameters:

| Name | Description | Required |
| ------ | ------ | ------ |
| userId | The unique ID of the user. | Yes |
| name | An optional set of property names to filter by. | No |

Responses:

| Name | Description | Schema |
| ------ | ------ | ------ |
| 200 | successful operation |  |
---
#### Users.setUserPreferences({userId*, body*})

Summary: Updates multiple user preferences.

Description: 

Parameters:

| Name | Description | Required |
| ------ | ------ | ------ |
| userId | The unique ID of the user. | Yes |
| body | The properties to update for the user. | Yes |

Responses:

| Name | Description | Schema |
| ------ | ------ | ------ |
| default | successful operation |  |
---
#### Users.getUserPreference({userId*, name*})

Summary: Returns a specific user preference.

Description: 

Parameters:

| Name | Description | Required |
| ------ | ------ | ------ |
| userId | The unique ID of the user. | Yes |
| name | The name of the user property to retrieve. | Yes |

Responses:

| Name | Description | Schema |
| ------ | ------ | ------ |
| 200 | successful operation |  |
---
#### Users.setUserPreference({userId*, name*, body*})

Summary: Updates a user preference.

Description: 

Parameters:

| Name | Description | Required |
| ------ | ------ | ------ |
| userId | The unique ID of the user. | Yes |
| name | The name of the user property to update. | Yes |
| body | The value to update the property with. | Yes |

Responses:

| Name | Description | Schema |
| ------ | ------ | ------ |
| default | successful operation |  |
---
