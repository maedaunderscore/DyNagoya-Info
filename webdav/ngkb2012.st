TopPage show
Introduction maeda.WorkspaceDialog new y: '200px'; open
Screen title: '�ǶᡢJavascript���Ǥ����줬�Ϥ�äƤޤ���'
Screen title: '���Υڡ�����'; add: [%1 h1: 'JS�Ǽ������줿Smalltalk�����Ϥ�']; add: [ %1 h1 css: 'color' put: 'red'; css: 'font-size' put: '100px'; with: 'amber smalltalk']; add: [ %1 h1: '�Ǻ��ޤ���'].WorkspaceDialog new |> EntryPoint bottomPosition; open.
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
Screen title: ''; add: [ %1 h1: '��̣�Τ�����'. %1 h1 with: [ %1 span css: 'color' put: 'red'; css: 'font-size' put: '100px'; with: 'DyNagoya'. %1 span: '��']. %1 h1: '���Ԥ����Ƥ��ޤ���']; put: Dolphin new. [Dolphin asJQuery toggleClass: 'tada'] valueWithInterval: 1000
