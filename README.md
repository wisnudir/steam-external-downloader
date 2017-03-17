![logo](https://github.com/wisnudir/steam-external-downloader/blob/master/images/icon128.png)
# Steam External Downloader
This is chrome extension/plugin that will add download button to steam workshop page.
Download button linked to another website, such as [Skymods](http://smods.ru). <br/>
So it will give you easier way to download workshop item (not subscribe), without copy paste keyword or id anymore, just with click.
---
## Table of Content
[Release](#release)
<br />[How to Instal](#how-to-instal)
<br />[Demo Images & Guides](#demo-images--guide)
<br />[Auto-disable](#auto-disable)
<br />[Released Feature](#released-feature)
<br />[Next Feature Update (Release Soon)](#next-feature-update-release-soon)
<br />[FAQ](#faq)
<br /><br />
## Release
Check [release tab](https://github.com/wisnudir/steam-external-downloader/releases) for released plugin.
<br />
## How to instal
Read my [Wiki](https://github.com/wisnudir/steam-external-downloader/wiki) for detail step.<br/><br/>
Currently is not available in Chrome Web Store, you have to instal manualy by dragging <code>.crx</code> file to your Chrome browser. <br />
Its normal if chrome will show harmfull software warning, because is not registered in their web store. You can completely ignore that, its save and wouldnt cause damages anything, check our source code for your ensure. <br /> 
Alternatively, if chrome keep prefent this plugin, you can clone this project, extract, and upload to chrome via developer mode, and dont forget to disable devevloper mode after uploaded.<br/><br/>
For now, its support for 5 games and all of them from [Skymods](http://smods.ru), there are: 
* Cities: Skyline [smods.ru](http://smods.ru)
* Transport Fever [transport-fever.smods.ru](http://transport-fever.smods.ru)
* XCOM 2 [xcom2.smods.ru](http://xcom2.smods.ru)
* Hearts of Iron IV [hearts-of-iron-4](http://hearts-of-iron-4.smods.ru)
* Stellaris [stellaris](http://stellaris.smods.ru)

Note: <br />
> - You have to choose one of them before click download button, or you'll get nothing. <br />
> - Button will apear in all games, not only for 5 games mentioned above, and if game not supported it will become dummy button<br />
> - <b>Im not support pirates</b>, it just tool for altenative asset/mod download

<br/> ### [^ back to menu](#table-of-content)

## Demo Images & Guide
Button style will added and blended with steam default style. In the right side image bellow is user interface menu plugin.
![image of demo-1](https://github.com/wisnudir/steam-external-downloader/blob/master/demo-images/1400%20560.png)<br />
<br/><br/>

### First you need to go into specific workshop item like this
<br/>if not, plugin will disable and button wouldnt appear
![image of demo-2](https://github.com/wisnudir/steam-external-downloader/blob/master/demo-images/aa.PNG)<br />
<br/><br/>

### Then look at the generated button and option 
![image of demo-3](https://github.com/wisnudir/steam-external-downloader/blob/master/demo-images/aaa.PNG)<br />
<br/><br/>

### Select game, if you select wrong game it would be generate wrong link, or get nothing in search result
![image of demo-4](https://github.com/wisnudir/steam-external-downloader/blob/master/demo-images/abc.png)
<br /><br/>

### Finally button will open new tab and load search result
<br />Look it just show one result and item is equal, without copy paste or typing anymore.
![image of demo-1](https://github.com/wisnudir/steam-external-downloader/blob/master/demo-images/aaaaa.PNG)
<br/><br/> ### [^ back to menu](#table-of-content)
<br /><br/>

## Auto-inactive
This extension only active if you open specific workshop item and/or shared file item<br />
![image of demo-1](https://github.com/wisnudir/steam-external-downloader/blob/master/demo-images/enable.png)<br />
And will auto-inactive when you visit another website<br />
![image of demo-1](https://github.com/wisnudir/steam-external-downloader/blob/master/demo-images/disable.png)<br />
also inactive when you visit steam page but not in specific workshop item<br />
![image of demo-1](https://github.com/wisnudir/steam-external-downloader/blob/master/demo-images/disable-2.png)<br />
<br/> ### [^ back to menu](#table-of-content)

## Released Feature
### v1.0
- [x] Add download button that refer to search by id, so it will return one specific item on Skymod.
- [x] Add category games, currently support 5 games.
- [x] Auto disable feature, will enable only for specific steam workshop item.
<br/><br/>

## Next Feature Update (Release Soon)
### v1.1 
- [ ] Improve read method, *so plugin will know current page categories and game
- [ ] No more select game, automaticly selected
- [ ] Fix button link for workshop collection, v1.0 link is not working
- [ ] Add download button in every item at workshop collection list

### v1.2
- [ ] Add modulator game support feature. This will allow you to manage (add, delete, edit) the external link and game supported.
- [ ] Add button in required item, so you dont have to open required item first.
- [ ] Add media download (images, video) for non asset/mod item, e.g for Artwork, screenshot
- [ ] ...

*In version 2.0 will significanly different*
### v2.0
- [ ] Replace old "download" button with "search by id" button instead.
- [ ] Add "read more" button from skymod as a "Skymod Link" button. *Skymod is just example, can be replace by anoyher website if available*
- [ ] Add "download" button from skymod as a "Download" button. *It will direct download from cloud storage, such as [uploadfiles.eu](http://uploadfiles.eu/), and bypassing skymod page.*
- [ ] Add "Search similiar" button to external web
- [ ] ...
<br/><br/> ### [^ back to menu](#table-of-content)
<br/><br/>
## FAQ
> __Is this plugin will donload content(mod,asset,etc) from Steam server?__
> No, its not. It just link to external web that containt a huge collection of mod, like [Skymods](http://smods.ru).

> __In extension's permission mentioned that it will read and change my data in steamcommunity, what actually changed?__
> It just permission to allow plugin adding some codes to page, in this case, we added codes for displaying button and button link, not more.

> __What background proccess actualy do?__
> It just read your tab address bar, for auto-disable purpose. And this background proccess are not always running.

> __Can i add another web to integrated with steam by this plugin?__
> Yes you can, by editing the source code or contact me by [create new issue](https://github.com/wisnudir/steam-external-downloader/issues) in tab above and dont forget to add <b>request external web</b> label in your issue, i'll try add that web request if possible. Or wait for modular game support feature in the next release.

> __Is this can search collection?__
> Currently no, wait for next release.

> __Why my search result is nothing?__
> You may didnt selected any game or selected wrong game. Or maybe web (skymods) not uploaded that content yet. You can search manualy by name for ensure.
<br/><br/> ### [^ back to menu](#table-of-content)

---
Big thanks to [Steam](http://store.steampowered.com/) and [Skymods](http://smods.ru/)
---
### [back to top](#steam-external-downloader)
