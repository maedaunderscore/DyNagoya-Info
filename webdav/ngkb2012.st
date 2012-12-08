TopPage show
Introduction maeda.WorkspaceDialog new y: '200px'; open
Screen title: '最近、Javascriptを吐く言語がはやってますが'
Screen title: 'このページは'; add: [%1 h1: 'JSで実装されたSmalltalk処理系の']; add: [ %1 h1 css: 'color' put: 'red'; css: 'font-size' put: '100px'; with: 'amber smalltalk']; add: [ %1 h1: 'で作りました'].WorkspaceDialog new |> EntryPoint bottomPosition; open.
TopPage show.
TopPage browser onPage; openMethod: 'renderBody:'
Event browser onPage; openMethod: 'renderOn:'
Screen put: DSLforHtml new.
p := Event browser onPage; openClassMethod: 'meeting11'
Event latest tweet
Event latest addToDSTokai
p openClassMethod: 'Events'
Wakame show
Wakame done: '13:18'.
Wakame done: '15:10'.
ScheduleEditor open: Wakame
Screen title: ''; add: [ %1 h1: '興味のある方'. %1 h1 with: [ %1 span css: 'color' put: 'red'; css: 'font-size' put: '100px'; with: 'DyNagoya'. %1 span: 'で']. %1 h1: 'お待ちしています。']; put: Dolphin new. [Dolphin asJQuery toggleClass: 'tada'] valueWithInterval: 1000

