# Spotify Relay

[![Build Status](https://img.shields.io/github/forks/aestriex/Spotify-Relay.svg)](https://github.com/aestriex/Spotify-Relay)
[![Build Status](https://img.shields.io/github/stars/aestriex/Spotify-Relay.svg)](https://github.com/aestriex/Spotify-Relay)
[![License](https://img.shields.io/github/license/aestriex/Spotify-Relay.svg)](https://github.com/aestriex/Spotify-Relay)

Spotify Relay is a bot allowing users to listen to their favorite songs and podcasts via Discord. This is a "single-use" bot, and is only orientated around listening and streaming music from Spotify.

This is the official GitHub repository for the bot. The repository servers as a place for members of the community to audit the bot's code, suggest updates to the code directly, and submit fatal bug reports.

**Note:** This repository is not a module or package. This bot has not yet been released.

## Bot Commands
This bot has a range of commands to make sure that the bot is as accessible to its audience as possible.

### General Commands  
* /help - View all our commands and what they do.  
* /info - Get information about the bot!  
* /ping - Check the API Latency!  
* /invite - Add our bot to your discord server!  
* /support - Get an invite to our support server!  
  
### Music Commands  
* /play - Play a song from YouTube or a stream.  
* /nowplaying - Get the current playing track.  
* /pause - Pause the current track.  
* /unpause - Resume the current track.  
* /stop - Clear the queue and stop the player.  
* /skip - Skip the current track.  
* /loop - Loop the current track.  
* /shuffle - Shuffle the queue.   
* /volume - Change the player's volume.  
* /seek - Seek through the current playing track or song.  
* /queue - View the current queue.

## Usage

To use this bot in your own server, invite it using the below url:
**Important:** This bot has *not* been fully released as of 2022-07-17.

https://discord.com/api/oauth2/authorize?client_id=997975523978387456&permissions=3165440&scope=bot%20applications.commands

\[[Quick Link to Invite](https://discord.com/api/oauth2/authorize?client_id=997975523978387456&permissions=3165440&scope=bot%20applications.commands)\]

### Bot Permissions

| Permission Name | Description | Required State |
|-----------------|-------------|----------------|
| Read Messages   | We need this permission in order to recognize incoming requests to the bot (i.e. commands) | Required |
| Send Messages   | This permission is required in order to respond to commands. | Required |
| Embed Links     | Some of our responses to commands use embeds. As such, we need Embed Links in order to display our embeds. | Required |
| Connect         | We need this permission to connect to Voice Channels in your server once a play command has been issues to the bot. | Required |
| Speak           | We need this permission in order to actually play the song requested in the Voice Channels. | Required |
| Priority Speaker| This permission is needed to make sure music plays above regular chatter within connected Voice Channels. | Not Required |



<details>
<summary>For the developers</summary>
Final Permission Integer: 3165440  
  
A permission is required that is called `applications.commands` in guilds to ensure the bot can write commands to the server, and read them once executed.
</details>


## Contributors
Main Writer: Aestriex#3839  
System Contributor: PoRiFiRo〥#0001

### Contributing
You can help this bot by submitting Feature Requests on the Discussions menu, submitting Pull Requests to change/audit features, or simply starring this repository to let the current contributors know that our work is appreciated.