﻿!function(){"use strict";var n=WinJS.Navigation,i=(WinJS.Utilities,WinJS.Binding);WinJS.UI;WinJS.UI.Pages.define("/pages/about/about.html",{ready:function(e,a){Windows.ApplicationModel.Package.current.id.version;this.bindingData=WinJS.Binding.as({appVersion:"3.9.2.0",developedBy:WinJS.Resources.getString("developed_by").value.replace("{1}",'<a href="http://moderntech.io">ModernTech.io</a>'),poweredBy:WinJS.Resources.getString("powered_by").value.replace("{1}",'<a href="http://translate.google.com">Google</a> & <a href="http://bing.com/translator">Bing</a>'),onclickBack:i.initializer(function(){n.back()}),onclickRate:i.initializer(function(){if(Custom.Device.isPhone)var n=new Windows.Foundation.Uri("zune:reviewapp?appid="+Windows.ApplicationModel.Store.CurrentApp.appId);else var n=new Windows.Foundation.Uri("ms-windows-store:REVIEW?PFN="+Windows.ApplicationModel.Store.CurrentApp.appId);return Windows.System.Launcher.launchUriAsync(n)}),onclickContact:i.initializer(function(){var n=new Windows.Foundation.Uri("mailto:support@moderntranslate.com?body=//Please write your email in English.");return Windows.System.Launcher.launchUriAsync(n)}),onclickWebsite:i.initializer(function(){var n=new Windows.Foundation.Uri("http://moderntranslate.com");return Windows.System.Launcher.launchUriAsync(n)})});var t="",o=Custom.Data.languageList.length,r=0;Custom.Data.languageList.forEach(function(n){return"auto"==n.language_id||0==n.main?void o--:(r++,void(t+=n.language_name+", "))}),t=t.substring(0,t.length-2)+".",this.bindingData.languageList=t,this.bindingData.feature_new_1=WinJS.Resources.getString("feature_new_1").value.replace("{1}",o),i.processAll(e,this.bindingData)},unload:function(){}})}();