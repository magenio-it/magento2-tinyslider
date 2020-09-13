# Magento2 Tiny-Slider 2 Integration
This module allows you to use Tiny Slider 2 in your Magento frontend.

![GitHub release](https://img.shields.io/github/release/magenio-it/magento2-tinyslider.svg?label=Magento2%20TinySlider)

![Tiny-slider Release](https://img.shields.io/github/release/ganlanyuan/tiny-slider.svg?label=Tiny%20slider%20version)
 
## Requirements 

![Generic badge](https://img.shields.io/badge/Magento-%5Ev2.2.0-red)
![Generic badge](https://img.shields.io/badge/Magento%20composer%20installer-*-yellow)
![Generic badge](https://img.shields.io/badge/PHP-^7.1-purple)
 
## INSTALL
- run 
```shell script
composer require 'magenio/magento2-tinyslider'
```
or add the following lines into your composer.json:
```json
"require":{
    ...
    "magenio/magento2-tinyslider":"^1.0.0"
 }
```
Then run this commands:
 ```shell script
composer update
bin/magento cache:flush
bin/magento module:enable Magenio_TinySlider
bin/magento setup upgrade
 ```
 
## USAGE

### Declarative notation

- Using data-mage-init attribute. 
Example:
```json
data-mage-init='{"tinySliderInit":{ 
        "items": 1,
       "responsive": {
            "640": {
                "edgePadding": 20,
                "items": 2
            },
            "1024": {
                "items": 4
            }
      } 
}}'>
```
- Using <script type="text/x-magento-init"> ... </script> tag. Example:
```html
<script type="text/x-magento-init">
 {
    "<element_selector>": {
        "tinySliderInit": {
            "items": 1,
            "responsive": {
                 "640": {
                     "edgePadding": 20,
                     "items": 2
                 },
                 "1024": {
                     "items": 4
                 }
            } 
        }
    }
 }
</script>
```

### Imperative notation
```html
<script>
     require([
        'tinySlider'
    ], function () {
         return tns({
               "container": "<element_selector>",
               "items": 1,
               "responsive": {
               "640": {
                   "edgePadding": 20,
                       "items": 2
               },
               "1024": {
                   "items": 4
               }
           }
       });
    });
</script>
```

## Features and Options
All features and options for Tiny Slider are available on tiny-slider's github page:

[Tiny Slider 2](http://ganlanyuan.github.io/tiny-slider/)

## Development
- For work / contribute to development of tiny-slider or for update the library run
 ```shell script
npm install
 ```
or 
 ```shell script
npm update --save
 ```
