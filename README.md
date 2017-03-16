# steam-external-downloader
This is chrome extension/plugin that will add download button in steam workshop page.
Download button will linked to another website, such as [Skymods](http://smods.ru) 
So it will give you easier way to download workshop item (not subscribe), without copy paste keyword or id anymore, just with click.
---------------------------------
Currently support 5 games and all from Skymods, there are 
* Cities: Skyline [smods.ru](http://smods.ru)
* Transport Fever [transport-fever.smods.ru](http://transport-fever.smods.ru)
* XCOM 2 [xcom2.smods.ru](http://xcom2.smods.ru)
* Hearts of Iron IV [hearts-of-iron-4](http://hearts-of-iron-4.smods.ru)
* Stellaris [stellaris](http://stellaris.smods.ru)

Note: 
*- You have to choose one of them before click download button, or you'll get nothing. *
*- Button will apear in all games, not only for 5 games mentioned above, and its become dummy button*
----------------------------------
### Demo Images
Button style will add and blended with default style
![image of demo-1](https://github.com/wisnudir/steam-external-downloader/blob/master/demo-images/1400%20560.png)
![image of demo-2](https://github.com/wisnudir/steam-external-downloader/blob/master/demo-images/aa.png)
![image of demo-3](https://github.com/wisnudir/steam-external-downloader/blob/master/demo-images/aaa.png)
![image of demo-4](https://github.com/wisnudir/steam-external-downloader/blob/master/demo-images/aaaa.png)
The button will generate:
![image of demo-1](https://github.com/wisnudir/steam-external-downloader/blob/master/demo-images/aaaaa.png)

### Auto-disable
This extension only enable if you open specific workshop item
![image of demo-1](https://github.com/wisnudir/steam-external-downloader/blob/master/demo-images/enable.png)
And will auto-disable when you visit another website
![image of demo-1](https://github.com/wisnudir/steam-external-downloader/blob/master/demo-images/disable.png)
also disable when you visit steam web page but not in specific workshop item
![image of demo-1](https://github.com/wisnudir/steam-external-downloader/blob/master/demo-images/disable-2.png)

### Next Future Update
##### v1.1
- [ ] Add remember checkbox *so you dont have to always choose games before click download button*
- [ ] Inmprove crawling method *so extension will know current page categories, such us workshop, screenshoot, video share, etc*
- [ ] Add right button link for workshop collection
- [ ] Add download button in every item at workshop collection list
- [ ] Add media download (images, video) for non asset/mod item, e.g for Artwork, screenshot

##### v1.*
- [ ] ...

In version 2.0 will significanly different
##### v2.0
- [ ] Replace old "download" button with "search by id" button instead.
- [ ] Add "read more" button from skymod as a "Skymod Link" button. *Skymod is just example, can be replace by anoyher website if available*
- [ ] Add "download" button from skymod as a "Download" button. *It will direct download from cloud storage, such as [uploadfiles.eu](http://uploadfiles.eu/), and bypassing skymod page.*
- [ ] Add "Search similiar" button 

