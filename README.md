# steam-external-downloader
This is chrome extension/plugin that will add download button in steam workshop page.
Download button linked to another website, such as [Skymods](http://smods.ru) 
So it will give you easier way to download workshop item (not subscribe), without copy paste keyword or id anymore, just with click.
---
## Release
Check [release tab](https://github.com/wisnudir/steam-external-downloader/releases) for released plugin.
<br />
## How to instal
Currently not available in Chrome Web Store, you have to instal manualy by dragging <code>.crx</code> file to your Chrome browser. <br />
Its normal if chrome will show harmfull software warning, because not registered in their web store. You can completely ignore that, its save and wouldnt cause damages anything, check our source code for your ensure. <br /> 
Alternatively, if chrome keep prefent this plugin, you can clone this project, extract, and upload to chrome via developer mode, and dont forget to disable devevloper mode after uploaded.<br/><br/>
Currently support 5 games and all from [Skymods](http://smods.ru), there are 
* Cities: Skyline [smods.ru](http://smods.ru)
* Transport Fever [transport-fever.smods.ru](http://transport-fever.smods.ru)
* XCOM 2 [xcom2.smods.ru](http://xcom2.smods.ru)
* Hearts of Iron IV [hearts-of-iron-4](http://hearts-of-iron-4.smods.ru)
* Stellaris [stellaris](http://stellaris.smods.ru)

Note: <br />
> - You have to choose one of them before click download button, or you'll get nothing. <br />
> - Button will apear in all games, not only for 5 games mentioned above, and if game not supported then will become dummy button<br />
> - <b>Im not support pirates</b>, it just tool for altenative asset/mod download

## Demo Images
Button style will added and blended with steam default style.
![image of demo-1](https://github.com/wisnudir/steam-external-downloader/blob/master/demo-images/1400%20560.png)<br />
![image of demo-2](https://github.com/wisnudir/steam-external-downloader/blob/master/demo-images/aa.PNG)<br />
![image of demo-3](https://github.com/wisnudir/steam-external-downloader/blob/master/demo-images/aaa.PNG)<br />
![image of demo-4](https://github.com/wisnudir/steam-external-downloader/blob/master/demo-images/aaaa.png)<br /><br/>
### Button will generate specific result:<br />
![image of demo-1](https://github.com/wisnudir/steam-external-downloader/blob/master/demo-images/aaaaa.PNG)<br />

## Auto-disable
This extension only enable if you open specific workshop item and/or shared file item<br />
![image of demo-1](https://github.com/wisnudir/steam-external-downloader/blob/master/demo-images/enable.png)<br />
And will auto-disable when you visit another website<br />
![image of demo-1](https://github.com/wisnudir/steam-external-downloader/blob/master/demo-images/disable.png)<br />
also disable when you visit steam page but not in specific workshop item<br />
![image of demo-1](https://github.com/wisnudir/steam-external-downloader/blob/master/demo-images/disable-2.png)<br /><br/>

## Released Feature
### v1.0
- [ ] Add download button that refer to search by id, so it will return one specific item on Skymod.
- [ ] Add category games, currently support 5 games.
- [ ] Auto disable feature, will enable only for specific steam workshop item.
<br/><br/>

## Next Feature Update (Release Soon)
### v1.1 
- [ ] Add remember checkbox or setting for game selector *so you dont have to choose game every clicks download button*
- [ ] Inmprove crawling method *so extension will know current page categories, such us workshop, screenshoot, video share, etc*
- [ ] Add button link for workshop collection
- [ ] Add download button in every item at workshop collection list
- [ ] Add media download (images, video) for non asset/mod item, e.g for Artwork, screenshot

### v1.2
- [ ] Add modulator game support feature. This will allow you to manage (add, delete, edit) the external link and game supported.
- [ ] ...

In version 2.0 will significanly different
### v2.0
- [ ] Replace old "download" button with "search by id" button instead.
- [ ] Add "read more" button from skymod as a "Skymod Link" button. *Skymod is just example, can be replace by anoyher website if available*
- [ ] Add "download" button from skymod as a "Download" button. *It will direct download from cloud storage, such as [uploadfiles.eu](http://uploadfiles.eu/), and bypassing skymod page.*
- [ ] Add "Search similiar" button 
<br/><br/>
## FAQ
> *Is this plugin will donload content(mod,asset,etc) from Steam server?* <br/>
No, its not. It just link to external web that containt a huge collection of mod, like [Skymods](http://smods.ru).
<br/>
> *In extension's permission mentioned that it will read and change my data in steamcommunity, what actually changed?*<br/>
It just permission to allow plugin adding some codes to page, in this case, we added codes for displaying button and button link, not more.
<br/>
> *What background proccess actualy do?*<br/>
It just read your tab address bar, for auto-disable purpose. And this background proccess are not always running.
<br/>
> *Can i add another web to integrated with steam?*<br/>
Yes you can, by editing the source code or contact me, i'll add that web request if possible. Or wait for modular game support feature in the nest release.
> *Is this can search collection?*<br>
Currently no, wait for next release.<br/>
> *Why my search result is nothing?*<br/>
1. You may didnt selected any game or selected wrong game.<br/>
2. Or maybe web (skymods) not uploaded that content yet. You can search manualy by name for ensure.
<br>
---
> Big thanks for [Steam](http://store.steampowered.com/) and [Skymods](http://smods.ru/)
---
