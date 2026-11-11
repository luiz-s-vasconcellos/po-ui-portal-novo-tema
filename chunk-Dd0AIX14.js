import{n as P,t as M}from"./main-G4GMLTOQ.js";import{$ as R4,Aa as qk,D as Gae,Dt as Zoe,E as G4,Ei as WV,Fr as Jc,H as Mze,Hi as ar,Hr as Kk,I as Koe,Ia as sk,Ii as ZO,Ji as eF,Li as Zb,Mi as Y0,Mn as tre,Mt as are,Nr as Ig,Oa as qL,Or as H_,Ot as Zte,P as Joe,Pr as JL,Pt as bae,Ri as Zg,Rr as Jn,T as Fze,Ti as W0,U as Nf,Ua as u1,Vi as _u,Vr as Kb,Yr as NZ,Zn as $_,Zr as No,an as j4,ba as o1,cr as Bk,ea as ge,eo as xo,er as Ab,fi as RZ,gi as Tk,hi as TZ,ir as BO,j as I4,jr as I,k as Goe,ki as XL,no as yk,nr as An,pr as Cu,pt as Tt,qa as vt$1,qi as de,rn as ia,sa as jk,t as $4,ta as hF,tr as Ak,tt as Ru,va as nk,vn as oi,wa as p,wi as Vt,xi as VO,ya as nm}from"./chunk-BJubg121.js";var Fe=(()=>{class a{static ɵfac=function(r){return new(r||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-upload-basic`]],standalone:!1,decls:1,vars:0,consts:[[`name`,`upload`,`p-label`,`PO Upload`,`p-url`,`https://po-sample-api.onrender.com/v1/uploads/addFile`]],template:function(r,i){r&1&&_u(0,`po-upload`,0)},dependencies:[$4],encapsulation:2,changeDetection:1})}return a})();var He=a=>({"docs-sample-code-tabs":a});var Te=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-upload-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Upload Basic`),Zg(),Jc(4,`a`,2),vt$1(`click`,function(){return i.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-upload-basic/sample-po-upload-basic.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<po-upload name="upload" p-label="PO Upload" p-url="https://po-sample-api.onrender.com/v1/uploads/addFile"> </po-upload>
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-upload-basic/sample-po-upload-basic.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-upload-basic',
  templateUrl: 'sample-po-upload-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoUploadBasicComponent {}
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-upload-basic`),Zg(),_u(23,`hr`)),r&2&&(Ig(5),yk(`po-icon `+i.sampleCodeButtonIcon),Ig(),nm(` `,i.sampleCodeButtonLabel),Ig(),Ab(`ngClass`,Bk(4,He,i.hideSampleCodeTabs)))},dependencies:[eF,P,tre,are,Fe],encapsulation:2,changeDetection:1})}return a})();function Ge(a,oe){if(a&1&&(Jc(0,`div`)(1,`po-widget`,22)(2,`form`,23)(3,`po-input`,24),W0(),Zg(),Jc(4,`po-select`,25),W0(),Zg(),Jc(5,`po-select`,26),W0(),Zg(),Jc(6,`po-switch`,27),W0(),Zg(),Jc(7,`po-switch`,28),W0(),Zg()()()()),a&2){let d=nk();Ig(2),Ab(`formGroup`,d.actionForm),Ig(),Y0(),Ig(),Ab(`p-options`,d.iconOptions),Y0(),Ig(),Ab(`p-options`,d.typeOptions),Y0(),Ig(),Y0(),Ig(),Y0()}}var qe=(()=>{class a{fb=p(u1);helperText;allowedExtensions;customLiterals;dragDropHeight;event;formField;help;label;literals;modalActions;maxFiles;maxSize;minSize;properties;restrictions;upload;url;headers;headersLabs;action;customModalActions;actionForm;size;propertiesOptions=[{value:`autoupload`,label:`Automatic upload`},{value:`directory`,label:`Directory`},{value:`disabled`,label:`Disabled`},{value:`disabledRemoveFile`,label:`Disabled Remove File`},{value:`dragDrop`,label:`Drag Drop`},{value:`requiredUrl`,label:`required Url`},{value:`multiple`,label:`Multiple upload`},{value:`optional`,label:`Optional`},{value:`required`,label:`Required`},{value:`showRequired`,label:`Show Required`},{value:`restrictionsInfo`,label:`Hide Restrictions Info`},{value:`selectButton`,label:`Hide Select Files Button`},{value:`sendButton`,label:`Hide Send Files Button`},{value:`showCustomAction`,label:`Add Custom Action to Progress`},{value:`labelTextWrap`,label:`Label Text Wrap`},{value:`compactLabel`,label:`Compact Label`},{value:`showThumbnail`,label:`Show Thumbnail`},{value:`loading`,label:`Loading`}];sizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];typeOptions=[{label:`Danger`,value:`danger`},{label:`Default`,value:`default`}];iconOptions=[{value:`an an-download`,label:`an an-download`},{value:`an an-Server`,label:`an an-Server`},{value:`an an-upload`,label:`an an-upload`},{value:`an an-share`,label:`an an-share`}];constructor(){this.initializeActionForm()}initializeActionForm(){this.actionForm=this.fb.group({label:[``],icon:[``],type:[`default`],visible:[!0],disabled:[!1]})}ngOnInit(){this.restore(),this.actionForm.valueChanges.subscribe(d=>{this.updateAction(d)})}updateAction(d){this.action=d}changeEvent(d){this.event=d}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals)}catch(d){this.customLiterals=void 0}}changeModalActions(){try{this.customModalActions=JSON.parse(this.modalActions)}catch(d){this.customModalActions=void 0}}onChangeHeaders(d){try{this.headers=JSON.parse(d)}catch(r){this.headers=void 0}}onChangeExtension(){let d=this.allowedExtensions.split(`,`).map(r=>r.trim());this.restrictions=Object.assign({},this.restrictions,{allowedExtensions:d})}onChangeMaxFiles(d){this.restrictions=Object.assign({},this.restrictions,{maxFiles:d})}onChangeMaxSize(d){this.restrictions=Object.assign({},this.restrictions,{maxFileSize:this.getValueInBytes(d)})}onChangeMinSize(d){this.restrictions=Object.assign({},this.restrictions,{minFileSize:this.getValueInBytes(d)})}restore(){this.helperText=``,this.allowedExtensions=void 0,this.customLiterals=void 0,this.dragDropHeight=void 0,this.event=void 0,this.formField=void 0,this.label=void 0,this.help=void 0,this.literals=``,this.modalActions=``,this.maxFiles=void 0,this.maxSize=void 0,this.minSize=void 0,this.properties=[],this.restrictions={},this.upload=void 0,this.url=`https://po-sample-api.onrender.com/v1/uploads/addFile`,this.headers=void 0,this.headersLabs=void 0,this.actionForm.reset({type:`default`,visible:!0}),this.action={label:``,type:`default`},this.customModalActions=[],this.size=`medium`}getValueInBytes(d){return 1048576*d}static ɵfac=function(r){return new(r||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-upload-labs`]],standalone:!1,decls:29,vars:53,consts:[[`fRestrictions`,`ngForm`],[`name`,`upload`,3,`ngModelChange`,`p-custom-action-click`,`p-error`,`p-keydown`,`p-success`,`p-upload`,`p-open-modal-preview`,`p-remove`,`ngModel`,`p-helper`,`p-auto-upload`,`p-directory`,`p-disabled`,`p-required-url`,`p-disabled-remove-file`,`p-drag-drop`,`p-drag-drop-height`,`p-form-field`,`p-help`,`p-hide-select-button`,`p-hide-restrictions-info`,`p-hide-send-button`,`p-label`,`p-literals`,`p-loading`,`p-multiple`,`p-optional`,`p-required`,`p-show-required`,`p-show-thumbnail`,`p-restrictions`,`p-size`,`p-url`,`p-headers`,`p-custom-action`,`p-label-text-wrap`,`p-compact-label`,`p-custom-modal-actions`],[1,`po-row`],[`p-label`,`Model`,1,`po-md-6`,3,`p-value`],[`p-label`,`Event`,1,`po-md-6`,3,`p-value`],[`name`,`allowedExtensions`,`p-help`,`Digite as extensões permitidas separadas por vírgula`,`p-label`,`Allowed Extensions`,`p-placeholder`,`.png, .jpeg, .jpg`,1,`po-md-6`,3,`ngModelChange`,`p-change`,`ngModel`],[`name`,`maxFiles`,`p-clean`,``,`p-help`,`Requer p-multiple habilitado`,`p-label`,`Max Files`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`p-change`,`ngModel`],[`name`,`dragDropHeight`,`p-clean`,``,`p-help`,`Altura da área de arrastar e soltar`,`p-label`,`Drag Drop Height`,`p-min`,`160`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`name`,`minSize`,`p-clean`,``,`p-help`,`Em megabytes`,`p-label`,`Min File Size`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`p-change`,`ngModel`],[`name`,`maxSize`,`p-clean`,``,`p-help`,`Em megabytes`,`p-label`,`Max File Size`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`p-change`,`ngModel`],[`name`,`label`,`p-clean`,``,`p-label`,`Label`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`help`,`p-clean`,``,`p-label`,`Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`helperText`,`p-clean`,``,`p-label`,`Additional Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`formField`,`p-clean`,``,`p-label`,`Form Field`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`url`,`p-clean`,``,`p-label`,`URL`,`p-required`,``,1,`po-md-12`,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`headers`,`p-help`,`Ex.: {"Authorization": "12312414"}`,`p-label`,`Headers`,1,`po-md-12`,`po-lg-6`,3,`ngModelChange`,`p-change`,`ngModel`],[`name`,`literals`,`p-help`,`Ex.: {"selectFile": "Select file", "deleteFile": "Delete file", "cancel": "Cancel sending"}`,`p-label`,`Literals`,1,`po-md-12`,`po-lg-6`,3,`ngModelChange`,`p-change`,`ngModel`],[`name`,`customModalActions`,`p-help`,`Ex.: [{"label": "Label", "disabled": false}]`,`p-label`,`Custom Modal Actions`,1,`po-md-12`,`po-lg-6`,3,`ngModelChange`,`p-change`,`ngModel`,`p-disabled`],[`name`,`properties`,`p-columns`,`4`,`p-help`,`Select any options`,`p-label`,`Properties`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`size`,`p-columns`,`4`,`p-label`,`Size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[1,`po-row`,`po-mt-1`],[`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`],[`p-title`,`Action Button`],[1,`po-row`,3,`formGroup`],[`formControlName`,`label`,`p-label`,`Label`,1,`po-md-6`,`po-lg-4`],[`formControlName`,`icon`,`p-label`,`Icon`,1,`po-md-6`,`po-lg-3`,3,`p-options`],[`formControlName`,`type`,`p-label`,`Type`,1,`po-md-6`,`po-lg-3`,3,`p-options`],[`formControlName`,`disabled`,`p-label`,`Disabled`,1,`po-md-3`,`po-lg-2`],[`formControlName`,`visible`,`p-label`,`Visible`,1,`po-md-3`,`po-lg-2`]],template:function(r,i){if(r&1){let m=ZO();Jc(0,`po-upload`,1),W0(),Zb(`ngModelChange`,function(l){return H_(m),Ak(i.upload,l)||(i.upload=l),$_(l)}),vt$1(`p-custom-action-click`,function(){return i.changeEvent(`p-custom-action-click`)})(`p-error`,function(){return i.changeEvent(`p-error`)})(`p-keydown`,function(){return i.changeEvent(`p-keydown`)})(`p-success`,function(){return i.changeEvent(`p-success`)})(`p-upload`,function(){return i.changeEvent(`p-upload`)})(`p-upload`,function(){return i.changeEvent(`p-upload`)})(`p-open-modal-preview`,function(){return i.changeEvent(`p-open-modal-preview`)})(`p-remove`,function(){return i.changeEvent(`p-remove`)}),Zg(),_u(1,`po-divider`),Jc(2,`div`,2),_u(3,`po-info`,3),qk(4,`json`),_u(5,`po-info`,4),Zg(),_u(6,`po-divider`),Jc(7,`div`,2)(8,`form`,null,0)(10,`po-input`,5),W0(),Zb(`ngModelChange`,function(l){return H_(m),Ak(i.allowedExtensions,l)||(i.allowedExtensions=l),$_(l)}),vt$1(`p-change`,function(){return i.onChangeExtension()}),Zg(),Jc(11,`po-number`,6),W0(),Zb(`ngModelChange`,function(l){return H_(m),Ak(i.maxFiles,l)||(i.maxFiles=l),$_(l)}),vt$1(`p-change`,function(){return i.onChangeMaxFiles(i.maxFiles)}),Zg(),Jc(12,`po-number`,7),W0(),Zb(`ngModelChange`,function(l){return H_(m),Ak(i.dragDropHeight,l)||(i.dragDropHeight=l),$_(l)}),Zg(),Jc(13,`po-number`,8),W0(),Zb(`ngModelChange`,function(l){return H_(m),Ak(i.minSize,l)||(i.minSize=l),$_(l)}),vt$1(`p-change`,function(){return i.onChangeMinSize(i.minSize)}),Zg(),Jc(14,`po-number`,9),W0(),Zb(`ngModelChange`,function(l){return H_(m),Ak(i.maxSize,l)||(i.maxSize=l),$_(l)}),vt$1(`p-change`,function(){return i.onChangeMaxSize(i.maxSize)}),Zg(),_u(15,`po-divider`),Jc(16,`po-input`,10),W0(),Zb(`ngModelChange`,function(l){return H_(m),Ak(i.label,l)||(i.label=l),$_(l)}),Zg(),Jc(17,`po-input`,11),W0(),Zb(`ngModelChange`,function(l){return H_(m),Ak(i.help,l)||(i.help=l),$_(l)}),Zg(),Jc(18,`po-input`,12),W0(),Zb(`ngModelChange`,function(l){return H_(m),Ak(i.helperText,l)||(i.helperText=l),$_(l)}),Zg(),Jc(19,`po-input`,13),W0(),Zb(`ngModelChange`,function(l){return H_(m),Ak(i.formField,l)||(i.formField=l),$_(l)}),Zg(),Jc(20,`po-input`,14),W0(),Zb(`ngModelChange`,function(l){return H_(m),Ak(i.url,l)||(i.url=l),$_(l)}),Zg(),Jc(21,`po-input`,15),W0(),Zb(`ngModelChange`,function(l){return H_(m),Ak(i.headersLabs,l)||(i.headersLabs=l),$_(l)}),vt$1(`p-change`,function(l){return i.onChangeHeaders(l)}),Zg(),Jc(22,`po-input`,16),W0(),Zb(`ngModelChange`,function(l){return H_(m),Ak(i.literals,l)||(i.literals=l),$_(l)}),vt$1(`p-change`,function(){return i.changeLiterals()}),Zg(),Jc(23,`po-input`,17),W0(),Zb(`ngModelChange`,function(l){return H_(m),Ak(i.modalActions,l)||(i.modalActions=l),$_(l)}),vt$1(`p-change`,function(){return i.changeModalActions()}),Zg(),Jc(24,`po-checkbox-group`,18),W0(),Zb(`ngModelChange`,function(l){return H_(m),Ak(i.properties,l)||(i.properties=l),$_(l)}),Zg(),VO(25,Ge,8,3,`div`),Jc(26,`po-radio-group`,19),W0(),Zb(`ngModelChange`,function(l){return H_(m),Ak(i.size,l)||(i.size=l),$_(l)}),Zg(),Jc(27,`div`,20)(28,`po-button`,21),vt$1(`p-click`,function(){return i.restore()}),Zg()()()()}r&2&&(Kb(`ngModel`,i.upload),Ab(`p-helper`,i.helperText)(`p-auto-upload`,i.properties.includes(`autoupload`))(`p-directory`,i.properties.includes(`directory`))(`p-disabled`,i.properties.includes(`disabled`))(`p-required-url`,i.properties.includes(`requiredUrl`))(`p-disabled-remove-file`,i.properties.includes(`disabledRemoveFile`))(`p-drag-drop`,i.properties.includes(`dragDrop`))(`p-drag-drop-height`,i.dragDropHeight)(`p-form-field`,i.formField)(`p-help`,i.help)(`p-hide-select-button`,i.properties.includes(`selectButton`))(`p-hide-restrictions-info`,i.properties.includes(`restrictionsInfo`))(`p-hide-send-button`,i.properties.includes(`sendButton`))(`p-label`,i.label)(`p-literals`,i.customLiterals)(`p-loading`,i.properties.includes(`loading`))(`p-multiple`,i.properties.includes(`multiple`))(`p-optional`,i.properties.includes(`optional`))(`p-required`,i.properties.includes(`required`))(`p-show-required`,i.properties.includes(`showRequired`))(`p-show-thumbnail`,i.properties.includes(`showThumbnail`))(`p-restrictions`,i.restrictions)(`p-size`,i.size)(`p-url`,i.url)(`p-headers`,i.headers)(`p-custom-action`,i.action)(`p-label-text-wrap`,i.properties?.includes(`labelTextWrap`))(`p-compact-label`,i.properties?.includes(`compactLabel`))(`p-custom-modal-actions`,i.customModalActions),Y0(),Ig(3),Ab(`p-value`,Kk(4,51,i.upload)),Ig(2),Ab(`p-value`,i.event),Ig(5),Kb(`ngModel`,i.allowedExtensions),Y0(),Ig(),Kb(`ngModel`,i.maxFiles),Y0(),Ig(),Kb(`ngModel`,i.dragDropHeight),Y0(),Ig(),Kb(`ngModel`,i.minSize),Y0(),Ig(),Kb(`ngModel`,i.maxSize),Y0(),Ig(2),Kb(`ngModel`,i.label),Y0(),Ig(),Kb(`ngModel`,i.help),Y0(),Ig(),Kb(`ngModel`,i.helperText),Y0(),Ig(),Kb(`ngModel`,i.formField),Y0(),Ig(),Kb(`ngModel`,i.url),Y0(),Ig(),Kb(`ngModel`,i.headersLabs),Y0(),Ig(),Kb(`ngModel`,i.literals),Y0(),Ig(),Kb(`ngModel`,i.modalActions),Ab(`p-disabled`,!i.properties.includes(`showThumbnail`)),Y0(),Ig(),Kb(`ngModel`,i.properties),Ab(`p-options`,i.propertiesOptions),Y0(),Ig(),BO(i.properties.includes(`showCustomAction`)?25:-1),Ig(),Kb(`ngModel`,i.size),Ab(`p-options`,i.sizeOptions),Y0())},dependencies:[NZ,TZ,RZ,JL,qL,XL,o1,oi,Nf,I4,j4,Goe,Zte,Koe,R4,$4,Joe,bae,hF],encapsulation:2,changeDetection:1})}return a})();var Ke=a=>({"docs-sample-code-tabs":a});var Ue=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-upload-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Upload Labs`),Zg(),Jc(4,`a`,2),vt$1(`click`,function(){return i.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-upload-labs/sample-po-upload-labs.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<po-upload
  name="upload"
  [(ngModel)]="upload"
  [p-helper]="helperText"
  [p-auto-upload]="properties.includes('autoupload')"
  [p-directory]="properties.includes('directory')"
  [p-disabled]="properties.includes('disabled')"
  [p-required-url]="properties.includes('requiredUrl')"
  [p-disabled-remove-file]="properties.includes('disabledRemoveFile')"
  [p-drag-drop]="properties.includes('dragDrop')"
  [p-drag-drop-height]="dragDropHeight"
  [p-form-field]="formField"
  [p-help]="help"
  [p-hide-select-button]="properties.includes('selectButton')"
  [p-hide-restrictions-info]="properties.includes('restrictionsInfo')"
  [p-hide-send-button]="properties.includes('sendButton')"
  [p-label]="label"
  [p-literals]="customLiterals"
  [p-loading]="properties.includes('loading')"
  [p-multiple]="properties.includes('multiple')"
  [p-optional]="properties.includes('optional')"
  [p-required]="properties.includes('required')"
  [p-show-required]="properties.includes('showRequired')"
  [p-show-thumbnail]="properties.includes('showThumbnail')"
  [p-restrictions]="restrictions"
  [p-size]="size"
  [p-url]="url"
  [p-headers]="headers"
  [p-custom-action]="action"
  [p-label-text-wrap]="properties?.includes('labelTextWrap')"
  [p-compact-label]="properties?.includes('compactLabel')"
  [p-custom-modal-actions]="customModalActions"
  (p-custom-action-click)="changeEvent('p-custom-action-click')"
  (p-error)="changeEvent('p-error')"
  (p-keydown)="changeEvent('p-keydown')"
  (p-success)="changeEvent('p-success')"
  (p-upload)="changeEvent('p-upload')"
  (p-upload)="changeEvent('p-upload')"
  (p-open-modal-preview)="changeEvent('p-open-modal-preview')"
  (p-remove)="changeEvent('p-remove')"
>
</po-upload>

<po-divider />

<div class="po-row">
  <po-info class="po-md-6" p-label="Model" [p-value]="upload | json"> </po-info>

  <po-info class="po-md-6" p-label="Event" [p-value]="event"> </po-info>
</div>

<po-divider />

<div class="po-row">
  <form #fRestrictions="ngForm">
    <po-input
      class="po-md-6"
      name="allowedExtensions"
      [(ngModel)]="allowedExtensions"
      p-help="Digite as extens\xF5es permitidas separadas por v\xEDrgula"
      p-label="Allowed Extensions"
      p-placeholder=".png, .jpeg, .jpg"
      (p-change)="onChangeExtension()"
    >
    </po-input>

    <po-number
      class="po-md-6 po-lg-3"
      name="maxFiles"
      [(ngModel)]="maxFiles"
      p-clean
      p-help="Requer p-multiple habilitado"
      p-label="Max Files"
      (p-change)="onChangeMaxFiles(maxFiles)"
    >
    </po-number>

    <po-number
      class="po-md-6 po-lg-3"
      name="dragDropHeight"
      [(ngModel)]="dragDropHeight"
      p-clean
      p-help="Altura da \xE1rea de arrastar e soltar"
      p-label="Drag Drop Height"
      p-min="160"
    >
    </po-number>

    <po-number
      class="po-md-6 po-lg-3"
      name="minSize"
      [(ngModel)]="minSize"
      p-clean
      p-help="Em megabytes"
      p-label="Min File Size"
      (p-change)="onChangeMinSize(minSize)"
    >
    </po-number>

    <po-number
      class="po-md-6 po-lg-3"
      name="maxSize"
      [(ngModel)]="maxSize"
      p-clean
      p-help="Em megabytes"
      p-label="Max File Size"
      (p-change)="onChangeMaxSize(maxSize)"
    >
    </po-number>

    <po-divider />

    <po-input class="po-md-6" name="label" [(ngModel)]="label" p-clean p-label="Label"> </po-input>

    <po-input class="po-md-6" name="help" [(ngModel)]="help" p-clean p-label="Help"> </po-input>

    <po-input class="po-md-6" name="helperText" [(ngModel)]="helperText" p-clean p-label="Additional Help"> </po-input>

    <po-input class="po-md-6" name="formField" [(ngModel)]="formField" p-clean p-label="Form Field"> </po-input>

    <po-input class="po-md-12 po-lg-6" name="url" [(ngModel)]="url" p-clean p-label="URL" p-required> </po-input>

    <po-input
      class="po-md-12 po-lg-6"
      name="headers"
      [(ngModel)]="headersLabs"
      p-help='Ex.: {"Authorization": "12312414"}'
      p-label="Headers"
      (p-change)="onChangeHeaders($event)"
    >
    </po-input>

    <po-input
      class="po-md-12 po-lg-6"
      name="literals"
      [(ngModel)]="literals"
      p-help='Ex.: {"selectFile": "Select file", "deleteFile": "Delete file", "cancel": "Cancel sending"}'
      p-label="Literals"
      (p-change)="changeLiterals()"
    >
    </po-input>

    <po-input
      class="po-md-12 po-lg-6"
      name="customModalActions"
      [(ngModel)]="modalActions"
      [p-disabled]="!properties.includes('showThumbnail')"
      p-help='Ex.: [{"label": "Label", "disabled": false}]'
      p-label="Custom Modal Actions"
      (p-change)="changeModalActions()"
    >
    </po-input>

    <po-checkbox-group
      class="po-md-12"
      name="properties"
      [(ngModel)]="properties"
      p-columns="4"
      p-help="Select any options"
      p-label="Properties"
      [p-options]="propertiesOptions"
    >
    </po-checkbox-group>

    @if (properties.includes('showCustomAction')) {
      <div>
        <po-widget p-title="Action Button">
          <form [formGroup]="actionForm" class="po-row">
            <po-input class="po-md-6 po-lg-4" formControlName="label" p-label="Label" />
            <po-select class="po-md-6 po-lg-3" formControlName="icon" p-label="Icon" [p-options]="iconOptions" />
            <po-select class="po-md-6 po-lg-3" formControlName="type" p-label="Type" [p-options]="typeOptions" />
            <po-switch class="po-md-3 po-lg-2" formControlName="disabled" p-label="Disabled" />
            <po-switch class="po-md-3 po-lg-2" formControlName="visible" p-label="Visible" />
          </form>
        </po-widget>
      </div>
    }

    <po-radio-group
      class="po-md-12"
      name="size"
      [(ngModel)]="size"
      p-columns="4"
      p-label="Size"
      p-help="Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme)."
      [p-options]="sizeOptions"
    >
    </po-radio-group>

    <div class="po-row po-mt-1">
      <po-button class="po-lg-3 po-md-6" p-label="Sample Restore" (p-click)="restore()"> </po-button>
    </div>
  </form>
</div>
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-upload-labs/sample-po-upload-labs.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import {
  PoCheckboxGroupOption,
  PoProgressAction,
  PoSelectOption,
  PoRadioGroupOption,
  PoUploadFileRestrictions,
  PoUploadLiterals,
  PoModalAction
} from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-upload-labs',
  templateUrl: './sample-po-upload-labs.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoUploadLabsComponent implements OnInit {
  private fb = inject(FormBuilder);

  helperText: string;
  allowedExtensions: string;
  customLiterals: PoUploadLiterals;
  dragDropHeight: number;
  event: string;
  formField: string;
  help: string;
  label: string;
  literals: string;
  modalActions: string;
  maxFiles: number;
  maxSize: number;
  minSize: number;
  properties: Array<string>;
  restrictions: PoUploadFileRestrictions;
  upload: Array<any>;
  url: string;
  headers: { [name: string]: string | Array<string> };
  headersLabs: string;
  action: PoProgressAction;
  customModalActions: Array<PoModalAction>;
  actionForm: FormGroup;
  size: string;

  public readonly propertiesOptions: Array<PoCheckboxGroupOption> = [
    { value: 'autoupload', label: 'Automatic upload' },
    { value: 'directory', label: 'Directory' },
    { value: 'disabled', label: 'Disabled' },
    { value: 'disabledRemoveFile', label: 'Disabled Remove File' },
    { value: 'dragDrop', label: 'Drag Drop' },
    { value: 'requiredUrl', label: 'required Url' },
    { value: 'multiple', label: 'Multiple upload' },
    { value: 'optional', label: 'Optional' },
    { value: 'required', label: 'Required' },
    { value: 'showRequired', label: 'Show Required' },
    { value: 'restrictionsInfo', label: 'Hide Restrictions Info' },
    { value: 'selectButton', label: 'Hide Select Files Button' },
    { value: 'sendButton', label: 'Hide Send Files Button' },
    { value: 'showCustomAction', label: 'Add Custom Action to Progress' },
    { value: 'labelTextWrap', label: 'Label Text Wrap' },
    { value: 'compactLabel', label: 'Compact Label' },
    { value: 'showThumbnail', label: 'Show Thumbnail' },
    { value: 'loading', label: 'Loading' }
  ];

  public readonly sizeOptions: Array<PoRadioGroupOption> = [
    { label: 'small', value: 'small' },
    { label: 'medium', value: 'medium' }
  ];

  public readonly typeOptions: Array<PoSelectOption> = [
    { label: 'Danger', value: 'danger' },
    { label: 'Default', value: 'default' }
  ];

  public readonly iconOptions: Array<PoSelectOption> = [
    { value: 'an an-download', label: 'an an-download' },
    { value: 'an an-Server', label: 'an an-Server' },
    { value: 'an an-upload', label: 'an an-upload' },
    { value: 'an an-share', label: 'an an-share' }
  ];

  constructor() {
    this.initializeActionForm();
  }

  initializeActionForm() {
    this.actionForm = this.fb.group({
      label: [''],
      icon: [''],
      type: ['default'],
      visible: [true],
      disabled: [false]
    });
  }

  ngOnInit() {
    this.restore();
    this.actionForm.valueChanges.subscribe(formValue => {
      this.updateAction(formValue);
    });
  }

  updateAction(formValue: any) {
    this.action = formValue;
  }

  changeEvent(event: string) {
    this.event = event;
  }

  changeLiterals() {
    try {
      this.customLiterals = JSON.parse(this.literals);
    } catch {
      this.customLiterals = undefined;
    }
  }

  changeModalActions() {
    try {
      this.customModalActions = JSON.parse(this.modalActions);
    } catch {
      this.customModalActions = undefined;
    }
  }

  onChangeHeaders(headers) {
    try {
      this.headers = JSON.parse(headers);
    } catch {
      this.headers = undefined;
    }
  }
  onChangeExtension() {
    const allowedExtensions = this.allowedExtensions.split(',').map(allowedExtension => allowedExtension.trim());
    this.restrictions = Object.assign({}, this.restrictions, { allowedExtensions });
  }

  onChangeMaxFiles(maxFiles: number) {
    this.restrictions = Object.assign({}, this.restrictions, { maxFiles });
  }

  onChangeMaxSize(maxSize: number) {
    this.restrictions = Object.assign({}, this.restrictions, { maxFileSize: this.getValueInBytes(maxSize) });
  }

  onChangeMinSize(minSize: number) {
    this.restrictions = Object.assign({}, this.restrictions, { minFileSize: this.getValueInBytes(minSize) });
  }

  restore() {
    this.helperText = '';
    this.allowedExtensions = undefined;
    this.customLiterals = undefined;
    this.dragDropHeight = undefined;
    this.event = undefined;
    this.formField = undefined;
    this.label = undefined;
    this.help = undefined;
    this.literals = '';
    this.modalActions = '';
    this.maxFiles = undefined;
    this.maxSize = undefined;
    this.minSize = undefined;
    this.properties = [];
    this.restrictions = {};
    this.upload = undefined;
    this.url = 'https://po-sample-api.onrender.com/v1/uploads/addFile';
    this.headers = undefined;
    this.headersLabs = undefined;
    this.actionForm.reset({ type: 'default', visible: true });
    this.action = { label: '', type: 'default' };
    this.customModalActions = [];
    this.size = 'medium';
  }

  private getValueInBytes(value: number) {
    return 1048576 * value;
  }
}
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-upload-labs`),Zg(),_u(23,`hr`)),r&2&&(Ig(5),yk(`po-icon `+i.sampleCodeButtonIcon),Ig(),nm(` `,i.sampleCodeButtonLabel),Ig(),Ab(`ngClass`,Bk(4,Ke,i.hideSampleCodeTabs)))},dependencies:[eF,P,tre,are,qe],encapsulation:2,changeDetection:1})}return a})();var Xe=[`formOpportunity`];var Ze=()=>({maxFileSize:`204800`});var ke=(()=>{class a{poNotification=p(Ru);formOpportunity;biograph;linkedin;name;resume;uploadedResume;ngOnInit(){this.uploadedResume=!1}apply(){this.formOpportunity.reset(),this.uploadedResume=!1,this.poNotification.success(`You were applied successfully`)}resumeUploadError(){this.uploadedResume=!1}resumeUploadSuccess(){this.uploadedResume=!0}static ɵfac=function(r){return new(r||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-upload-resume`]],viewQuery:function(r,i){if(r&1&&Cu(Xe,7),r&2){let m;No(m=xo())&&(i.formOpportunity=m.first)}},standalone:!1,decls:12,vars:7,consts:[[`formOpportunity`,`ngForm`],[1,`po-row`],[`name`,`name`,`p-clean`,``,`p-label`,`Full Name`,`p-required`,``,1,`po-md-12`,3,`ngModelChange`,`ngModel`],[`name`,`biograph`,`p-label`,`Biograph`,`p-required`,``,1,`po-md-12`,3,`ngModelChange`,`ngModel`],[`name`,`linkedin`,`p-clean`,``,`p-label`,`LinkedIn URL`,1,`po-md-12`,3,`ngModelChange`,`ngModel`],[`name`,`resume`,`p-label`,`Resume`,`p-required`,``,`p-url`,`https://po-sample-api.onrender.com/v1/uploads/addFile`,1,`po-md-12`,3,`ngModelChange`,`p-error`,`p-success`,`ngModel`,`p-restrictions`],[`p-label`,`Apply`,1,`po-md-4`,3,`p-click`,`p-disabled`]],template:function(r,i){if(r&1){let m=ZO();Jc(0,`form`,null,0)(2,`div`,1)(3,`po-input`,2),W0(),Zb(`ngModelChange`,function(l){return H_(m),Ak(i.name,l)||(i.name=l),$_(l)}),Zg()(),Jc(4,`div`,1)(5,`po-textarea`,3),W0(),Zb(`ngModelChange`,function(l){return H_(m),Ak(i.biograph,l)||(i.biograph=l),$_(l)}),Zg()(),Jc(6,`div`,1)(7,`po-url`,4),W0(),Zb(`ngModelChange`,function(l){return H_(m),Ak(i.linkedin,l)||(i.linkedin=l),$_(l)}),Zg()(),Jc(8,`div`,1)(9,`po-upload`,5),W0(),Zb(`ngModelChange`,function(l){return H_(m),Ak(i.resume,l)||(i.resume=l),$_(l)}),vt$1(`p-error`,function(){return i.resumeUploadError()})(`p-success`,function(){return i.resumeUploadSuccess()}),Zg()(),Jc(10,`div`,1)(11,`po-button`,6),vt$1(`p-click`,function(){return i.apply()}),Zg()()()}if(r&2){let m=sk(1);Ig(3),Kb(`ngModel`,i.name),Y0(),Ig(2),Kb(`ngModel`,i.biograph),Y0(),Ig(2),Kb(`ngModel`,i.linkedin),Y0(),Ig(2),Kb(`ngModel`,i.resume),Ab(`p-restrictions`,jk(6,Ze)),Y0(),Ig(2),Ab(`p-disabled`,m.invalid||!i.uploadedResume)}},dependencies:[NZ,TZ,RZ,JL,qL,oi,j4,Zoe,$4,G4],encapsulation:2,changeDetection:1})}return a})();var et=a=>({"docs-sample-code-tabs":a});var Ae=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-upload-resume-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Upload - Resume`),Zg(),Jc(4,`a`,2),vt$1(`click`,function(){return i.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-upload-resume/sample-po-upload-resume.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<form #formOpportunity="ngForm">
  <div class="po-row">
    <po-input class="po-md-12" name="name" [(ngModel)]="name" p-clean p-label="Full Name" p-required> </po-input>
  </div>

  <div class="po-row">
    <po-textarea class="po-md-12" name="biograph" [(ngModel)]="biograph" p-label="Biograph" p-required> </po-textarea>
  </div>

  <div class="po-row">
    <po-url class="po-md-12" name="linkedin" [(ngModel)]="linkedin" p-clean p-label="LinkedIn URL"> </po-url>
  </div>

  <div class="po-row">
    <po-upload
      class="po-md-12"
      name="resume"
      [(ngModel)]="resume"
      p-label="Resume"
      p-required
      p-url="https://po-sample-api.onrender.com/v1/uploads/addFile"
      [p-restrictions]="{ maxFileSize: '204800' }"
      (p-error)="resumeUploadError()"
      (p-success)="resumeUploadSuccess()"
    >
    </po-upload>
  </div>

  <div class="po-row">
    <po-button
      class="po-md-4"
      p-label="Apply"
      [p-disabled]="formOpportunity.invalid || !uploadedResume"
      (p-click)="apply()"
    >
    </po-button>
  </div>
</form>
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-upload-resume/sample-po-upload-resume.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, OnInit, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';

import { PoNotificationService } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-upload-resume',
  templateUrl: 'sample-po-upload-resume.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoUploadResumeComponent implements OnInit {
  private poNotification = inject(PoNotificationService);

  @ViewChild('formOpportunity', { static: true }) formOpportunity: UntypedFormControl;

  biograph: string;
  linkedin: string;
  name: string;
  resume: string;
  uploadedResume: boolean;

  ngOnInit() {
    this.uploadedResume = false;
  }

  apply() {
    this.formOpportunity.reset();
    this.uploadedResume = false;

    this.poNotification.success('You were applied successfully');
  }

  resumeUploadError() {
    this.uploadedResume = false;
  }

  resumeUploadSuccess() {
    this.uploadedResume = true;
  }
}
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-upload-resume`),Zg(),_u(23,`hr`)),r&2&&(Ig(5),yk(`po-icon `+i.sampleCodeButtonIcon),Ig(),nm(` `,i.sampleCodeButtonLabel),Ig(),Ab(`ngClass`,Bk(4,et,i.hideSampleCodeTabs)))},dependencies:[eF,P,tre,are,ke],encapsulation:2,changeDetection:1})}return a})();var nt=[`upload`];var it=[`stepper`];var ot=[`submitForm`];var at=[`sucessData`];var lt=a=>({"po-invisible":a});function rt(a,oe){if(a&1){let d=ZO();Jc(0,`div`,8)(1,`div`,9)(2,`p`,11),Tk(3,`Confirm informations`),Zg()(),_u(4,`po-info`,28)(5,`po-info`,29)(6,`po-info`,30),Jc(7,`po-button`,31),vt$1(`p-click`,function(){H_(d);let i=nk();return $_(i.confirmSubmit())}),Zg()()}if(a&2){let d=nk();Ig(4),Ab(`p-value`,d.project[0].name||`N/D`),Ig(),Ab(`p-value`,d.title||`N/D`),Ig(),Ab(`p-value`,d.description||`N/D`)}}var Le=(()=>{class a{upload;stepper;submitForm;sucessData;confirm={action:()=>{this.sucessData.close()},label:`Return`};description;project=[];restrictions={allowedExtensions:[`.zip`,`.7z`,`.tar`,`.wim`]};title;ngOnInit(){this.newSubmit()}canSubmitProject(){return!!(this.project&&this.project.length)&&this.title&&this.description}confirmSubmit(){this.sucessData.open(),this.newSubmit(),this.stepper.first()}submitProject(){this.upload.sendFiles(),this.stepper.next()}newSubmit(){this.project=[],this.title=void 0,this.description=void 0}static ɵfac=function(r){return new(r||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-upload-rs`]],viewQuery:function(r,i){if(r&1&&Cu(nt,7)(it,7)(ot,7)(at,7),r&2){let m;No(m=xo())&&(i.upload=m.first),No(m=xo())&&(i.stepper=m.first),No(m=xo())&&(i.submitForm=m.first),No(m=xo())&&(i.sucessData=m.first)}},standalone:!1,decls:47,vars:15,consts:[[`stepper`,``],[`submitForm`,`ngForm`],[`upload`,``],[`sucessData`,``],[1,`po-row`],[`p-orientation`,`vertical`,`p-step-icons`,``,`p-step-size`,`42`,1,`po-lg-10`,`po-offset-lg-2`,`po-offset-xl-2`],[`p-label`,`Welcome`],[`p-title`,`Realize & Show`,1,`po-lg-8`,`po-mt-2`],[1,`tht-row`],[1,`po-sm-12`],[1,`po-font-title`],[1,`po-font-text-large`],[`p-label`,`Yes!`,`p-kind`,`primary`,1,`po-sm-12`,`po-mt-2`,3,`p-click`],[`p-label`,`Submit`,3,`p-can-active-next-step`],[1,`po-lg-10`],[1,`po-font-subtitle`],[1,`po-font-text-small-bold`],[1,`po-font-title`,`po-lg-2`],[`p-icon`,`an an-cloud-arrow-up`,1,`po-clickable`,3,`click`],[`p-icon`,`an an-fill an-x-circle`,1,`po-clickable`,3,`click`,`ngClass`],[1,`po-sm-12`,`po-mt-3`,`po-font-text-bold`],[`name`,`project`,`p-hide-select-button`,``,`p-hide-send-button`,``,`p-required`,``,`p-url`,`https://po-sample-api.onrender.com/v1/uploads/addFile`,1,`po-sm-12`,3,`ngModelChange`,`ngModel`,`p-restrictions`],[`name`,`title`,`p-label`,`Title`,`p-placeholder`,`Be creative`,`p-required`,``,1,`po-sm-12`,3,`ngModelChange`,`ngModel`,`p-disabled`],[`name`,`description`,`p-label`,`Description`,`p-maxlength`,`140`,`p-placeholder`,`Resume on few words`,`p-required`,``,1,`po-sm-12`,3,`ngModelChange`,`ngModel`,`p-disabled`],[`p-label`,`Done`,1,`po-sm-12`,`po-mt-2`,3,`p-click`,`p-disabled`],[`p-label`,`Confirm`],[`p-title`,`Confirmation`,3,`p-primary-action`],[1,`po-sm-12`,`po-font-title`],[`p-label`,`File name`,1,`po-md-4`,3,`p-value`],[`p-label`,`Title`,1,`po-md-4`,3,`p-value`],[`p-label`,`Description`,1,`po-md-4`,3,`p-value`],[`p-label`,`Confirm`,1,`po-sm-12`,`po-mt-2`,`po-mb-2`,3,`p-click`]],template:function(r,i){if(r&1){let m=ZO();Jc(0,`div`,4)(1,`po-stepper`,5,0)(3,`po-step`,6)(4,`po-widget`,7)(5,`div`,8)(6,`div`,9)(7,`h1`,10),Tk(8,`Welcome, TOTVS!`),Zg(),Jc(9,`p`,11),Tk(10,`Let's submit your project?`),Zg()()(),Jc(11,`div`,8)(12,`po-button`,12),vt$1(`p-click`,function(){H_(m);let l=sk(2);return $_(l.next())}),Zg()()()(),Jc(13,`po-step`,13)(14,`po-widget`,7)(15,`form`,null,1)(17,`div`,4)(18,`div`,14)(19,`div`,4)(20,`p`,15),Tk(21,`Please, select your project:`),Zg()(),Jc(22,`div`,4)(23,`p`,16),Tk(24,`*Upload a zip file containing your project.`),Zg()()(),Jc(25,`div`,17)(26,`po-icon`,18),vt$1(`click`,function(){H_(m);let l=sk(32);return $_(l.selectFiles())}),Zg(),Jc(27,`po-icon`,19),vt$1(`click`,function(){H_(m);let l=sk(32);return $_(l.clear())}),Zg()()(),Jc(28,`div`,4)(29,`label`,20),Tk(30,`Attached`),Zg(),Jc(31,`po-upload`,21,2),W0(),Zb(`ngModelChange`,function(l){return H_(m),Ak(i.project,l)||(i.project=l),$_(l)}),Zg()(),Jc(33,`div`,4)(34,`po-input`,22),W0(),Zb(`ngModelChange`,function(l){return H_(m),Ak(i.title,l)||(i.title=l),$_(l)}),Zg()(),Jc(35,`div`,4)(36,`po-textarea`,23),W0(),Zb(`ngModelChange`,function(l){return H_(m),Ak(i.description,l)||(i.description=l),$_(l)}),Zg()(),Jc(37,`div`,8)(38,`po-button`,24),vt$1(`p-click`,function(){return i.submitProject()}),Zg()()()()(),Jc(39,`po-step`,25)(40,`po-widget`,7),VO(41,rt,8,3,`div`,8),Zg()()()(),Jc(42,`po-modal`,26,3)(44,`div`,4)(45,`p`,27),Tk(46,`Project successfully submited!`),Zg()()()}r&2&&(Ig(13),Ab(`p-can-active-next-step`,i.canSubmitProject.bind(i)),Ig(14),Ab(`ngClass`,Bk(13,lt,i.project.length<1)),Ig(2),Vt(`po-invisible`,i.project.length<1),Ig(2),Kb(`ngModel`,i.project),Ab(`p-restrictions`,i.restrictions),Y0(),Ig(3),Kb(`ngModel`,i.title),Ab(`p-disabled`,i.project.length<1),Y0(),Ig(2),Kb(`ngModel`,i.description),Ab(`p-disabled`,i.project.length<1),Y0(),Ig(2),Ab(`p-disabled`,i.canSubmitProject()),Ig(3),BO(i.canSubmitProject()?41:-1),Ig(),Ab(`p-primary-action`,i.confirm))},dependencies:[eF,NZ,TZ,RZ,JL,qL,oi,j4,Zoe,$4,Tt,Joe,ia,Gae,Fze,bae],encapsulation:2,changeDetection:1})}return a})();var pt=a=>({"docs-sample-code-tabs":a});var ze=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-upload-rs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Upload - Realize & Show`),Zg(),Jc(4,`a`,2),vt$1(`click`,function(){return i.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-upload-rs/sample-po-upload-rs.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<div class="po-row">
  <po-stepper
    #stepper
    class="po-lg-10 po-offset-lg-2 po-offset-xl-2"
    p-orientation="vertical"
    p-step-icons
    p-step-size="42"
  >
    <po-step p-label="Welcome">
      <po-widget class="po-lg-8 po-mt-2" p-title="Realize & Show">
        <div class="tht-row">
          <div class="po-sm-12">
            <h1 class="po-font-title">Welcome, TOTVS!</h1>
            <p class="po-font-text-large">Let's submit your project?</p>
          </div>
        </div>

        <div class="tht-row">
          <po-button class="po-sm-12 po-mt-2" p-label="Yes!" p-kind="primary" (p-click)="stepper.next()"> </po-button>
        </div>
      </po-widget>
    </po-step>

    <po-step p-label="Submit" [p-can-active-next-step]="canSubmitProject.bind(this)">
      <po-widget class="po-lg-8 po-mt-2" p-title="Realize & Show">
        <form #submitForm="ngForm">
          <div class="po-row">
            <div class="po-lg-10">
              <div class="po-row">
                <p class="po-font-subtitle">Please, select your project:</p>
              </div>

              <div class="po-row">
                <p class="po-font-text-small-bold">*Upload a zip file containing your project.</p>
              </div>
            </div>

            <div class="po-font-title po-lg-2">
              <po-icon p-icon="an an-cloud-arrow-up" class="po-clickable" (click)="upload.selectFiles()"></po-icon>
              <po-icon
                p-icon="an an-fill an-x-circle"
                class="po-clickable"
                [ngClass]="{ 'po-invisible': project.length < 1 }"
                (click)="upload.clear()"
              ></po-icon>
            </div>
          </div>

          <div class="po-row">
            <label class="po-sm-12 po-mt-3 po-font-text-bold" [class.po-invisible]="project.length < 1">Attached</label>
            <po-upload
              #upload
              class="po-sm-12"
              name="project"
              [(ngModel)]="project"
              p-hide-select-button
              p-hide-send-button
              p-required
              p-url="https://po-sample-api.onrender.com/v1/uploads/addFile"
              [p-restrictions]="restrictions"
            >
            </po-upload>
          </div>

          <div class="po-row">
            <po-input
              class="po-sm-12"
              name="title"
              [(ngModel)]="title"
              p-label="Title"
              p-placeholder="Be creative"
              p-required
              [p-disabled]="project.length < 1"
            >
            </po-input>
          </div>

          <div class="po-row">
            <po-textarea
              class="po-sm-12"
              name="description"
              [(ngModel)]="description"
              p-label="Description"
              p-maxlength="140"
              p-placeholder="Resume on few words"
              p-required
              [p-disabled]="project.length < 1"
            >
            </po-textarea>
          </div>

          <div class="tht-row">
            <po-button
              class="po-sm-12 po-mt-2"
              p-label="Done"
              [p-disabled]="canSubmitProject()"
              (p-click)="submitProject()"
            >
            </po-button>
          </div>
        </form>
      </po-widget>
    </po-step>

    <po-step p-label="Confirm">
      <po-widget class="po-lg-8 po-mt-2" p-title="Realize & Show">
        @if (canSubmitProject()) {
          <div class="tht-row">
            <div class="po-sm-12">
              <p class="po-font-text-large">Confirm informations</p>
            </div>
            <po-info class="po-md-4" p-label="File name" [p-value]="project[0].name || 'N/D'"> </po-info>
            <po-info class="po-md-4" p-label="Title" [p-value]="title || 'N/D'"> </po-info>
            <po-info class="po-md-4" p-label="Description" [p-value]="description || 'N/D'"> </po-info>
            <po-button class="po-sm-12 po-mt-2 po-mb-2" p-label="Confirm" (p-click)="confirmSubmit()"> </po-button>
          </div>
        }
      </po-widget>
    </po-step>
  </po-stepper>
</div>

<po-modal #sucessData p-title="Confirmation" [p-primary-action]="confirm">
  <div class="po-row">
    <p class="po-sm-12 po-font-title">Project successfully submited!</p>
  </div>
</po-modal>
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-upload-rs/sample-po-upload-rs.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { NgForm } from '@angular/forms';

import { PoModalAction, PoModalComponent, PoStepperComponent, PoUploadComponent } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-upload-rs',
  templateUrl: 'sample-po-upload-rs.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoUploadRsComponent implements OnInit {
  @ViewChild('upload', { static: true }) upload: PoUploadComponent;
  @ViewChild('stepper', { static: true }) stepper: PoStepperComponent;
  @ViewChild('submitForm', { static: true }) submitForm: NgForm;
  @ViewChild('sucessData', { static: true }) sucessData: PoModalComponent;

  confirm: PoModalAction = {
    action: () => {
      this.sucessData.close();
    },
    label: 'Return'
  };

  description: string;
  project: Array<any> = [];
  restrictions = { allowedExtensions: ['.zip', '.7z', '.tar', '.wim'] };
  title: string;

  ngOnInit() {
    this.newSubmit();
  }

  canSubmitProject() {
    return !!(this.project && this.project.length) && this.title && this.description;
  }

  confirmSubmit() {
    this.sucessData.open();
    this.newSubmit();
    this.stepper.first();
  }

  submitProject() {
    this.upload.sendFiles();
    this.stepper.next();
  }

  private newSubmit() {
    this.project = [];
    this.title = undefined;
    this.description = undefined;
  }
}
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-upload-rs`),Zg(),_u(23,`hr`)),r&2&&(Ig(5),yk(`po-icon `+i.sampleCodeButtonIcon),Ig(),nm(` `,i.sampleCodeButtonLabel),Ig(),Ab(`ngClass`,Bk(4,pt,i.hideSampleCodeTabs)))},dependencies:[eF,P,tre,are,Le],encapsulation:2,changeDetection:1})}return a})();var Re=(()=>{class a{customAction={icon:`an an-download`,type:`default`,visible:!1};uploadSuccess(){this.customAction.visible=!0}onCustomActionClick(d){if(!d.rawFile){console.error(`Arquivo inválido ou não encontrado.`);return}this.downloadFile(d.rawFile)}downloadFile(d){let r=URL.createObjectURL(d),i=document.createElement(`a`);i.href=r,i.download=d.name,i.style.display=`none`,document.body.appendChild(i),i.click(),document.body.removeChild(i),URL.revokeObjectURL(r)}static ɵfac=function(r){return new(r||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-upload-download`]],standalone:!1,decls:1,vars:2,consts:[[`name`,`upload`,`p-url`,`https://po-sample-api.onrender.com/v1/uploads/addFile`,3,`p-custom-action-click`,`p-success`,`p-custom-action`,`p-multiple`]],template:function(r,i){r&1&&(Jc(0,`po-upload`,0),vt$1(`p-custom-action-click`,function(s){return i.onCustomActionClick(s)})(`p-success`,function(){return i.uploadSuccess()}),Zg()),r&2&&Ab(`p-custom-action`,i.customAction)(`p-multiple`,!0)},dependencies:[$4],encapsulation:2,changeDetection:1})}return a})();var ct=a=>({"docs-sample-code-tabs":a});var Ve=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-upload-download-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Upload - with Download Button`),Zg(),Jc(4,`a`,2),vt$1(`click`,function(){return i.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-upload-download/sample-po-upload-download.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<po-upload
  name="upload"
  p-url="https://po-sample-api.onrender.com/v1/uploads/addFile"
  [p-custom-action]="customAction"
  (p-custom-action-click)="onCustomActionClick($event)"
  [p-multiple]="true"
  (p-success)="uploadSuccess()"
></po-upload>
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-upload-download/sample-po-upload-download.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';
import { PoProgressAction } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-upload-download',
  templateUrl: 'sample-po-upload-download.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoUploadDownloadComponent {
  customAction: PoProgressAction = {
    icon: 'an an-download',
    type: 'default',
    visible: false
  };

  uploadSuccess() {
    this.customAction.visible = true;
  }

  onCustomActionClick(file: { rawFile: File }) {
    if (!file.rawFile) {
      console.error('Arquivo inv\xE1lido ou n\xE3o encontrado.');
      return;
    }

    this.downloadFile(file.rawFile);
  }

  downloadFile(rawFile: File) {
    // Cria uma URL tempor\xE1ria para o arquivo
    const url = URL.createObjectURL(rawFile);

    // Cria um link <a> tempor\xE1rio para iniciar o download
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = rawFile.name; // Define o nome do arquivo para o download
    anchor.style.display = 'none';

    // Adiciona o link ao DOM, aciona o clique e remove o link
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);

    // Libera a mem\xF3ria utilizada pela URL tempor\xE1ria
    URL.revokeObjectURL(url);
  }
}
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-upload-download`),Zg(),_u(23,`hr`)),r&2&&(Ig(5),yk(`po-icon `+i.sampleCodeButtonIcon),Ig(),nm(` `,i.sampleCodeButtonLabel),Ig(),Ab(`ngClass`,Bk(4,ct,i.hideSampleCodeTabs)))},dependencies:[eF,P,tre,are,Re],encapsulation:2,changeDetection:1})}return a})();var Et=()=>[`.png`,`.jpg`,`.jpeg`,`.gif`];var St=a=>({allowedExtensions:a,maxFiles:5,maxFileSize:2057280});var Oe=(()=>{class a{static ɵfac=function(r){return new(r||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-upload-preview`]],standalone:!1,decls:1,vars:6,consts:[[`name`,`upload`,`p-label`,`PO Upload com Pré-visualização`,`p-url`,`https://po-sample-api.onrender.com/v1/uploads/addFile`,3,`p-restrictions`,`p-show-thumbnail`,`p-multiple`]],template:function(r,i){r&1&&_u(0,`po-upload`,0),r&2&&Ab(`p-restrictions`,Bk(4,St,jk(3,Et)))(`p-show-thumbnail`,!0)(`p-multiple`,!0)},dependencies:[$4],encapsulation:2,changeDetection:1})}return a})();var gt=a=>({"docs-sample-code-tabs":a});var je=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-upload-preview-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Upload - with Preview`),Zg(),Jc(4,`a`,2),vt$1(`click`,function(){return i.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-upload-preview/sample-po-upload-preview.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<po-upload
  name="upload"
  p-label="PO Upload com Pr\xE9-visualiza\xE7\xE3o"
  p-url="https://po-sample-api.onrender.com/v1/uploads/addFile"
  [p-restrictions]="{ allowedExtensions: ['.png', '.jpg', '.jpeg', '.gif'], maxFiles: 5, maxFileSize: 2057280 }"
  [p-show-thumbnail]="true"
  [p-multiple]="true"
></po-upload>
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-upload-preview/sample-po-upload-preview.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';
import { PoProgressAction } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-upload-preview',
  templateUrl: 'sample-po-upload-preview.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoUploadPreviewComponent {}
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-upload-preview`),Zg(),_u(23,`hr`)),r&2&&(Ig(5),yk(`po-icon `+i.sampleCodeButtonIcon),Ig(),nm(` `,i.sampleCodeButtonLabel),Ig(),Ab(`ngClass`,Bk(4,gt,i.hideSampleCodeTabs)))},dependencies:[eF,P,tre,are,Oe],encapsulation:2,changeDetection:1})}return a})();var Be=(()=>{class a{static ɵfac=function(r){return new(r||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-upload-doc`]],standalone:!1,decls:2328,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[1,`docs-api-deprecated-marker`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[`pan`,``,1,`docs-api-property-type`,`string`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`pan`,``,1,`docs-api-property-type`,`PoProgressAction`],[1,`language-html`],[1,`language-typescript`],[`pan`,``,1,`docs-api-property-type`,`Array<PoModalAction>`],[`pan`,``,1,`docs-api-property-type`,`number`],[`pan`,``,1,`docs-api-property-type`,`PoUploadFileRestrictions`],[`pan`,``,1,`docs-api-property-type`,`{`,`[name:`,`string]:`,`string`],[`pan`,``,1,`docs-api-property-type`,`Array<string>;`,`}`],[`pan`,``,1,`docs-api-property-type`,`PoUploadLiterals`],[`pan`,``,1,`docs-api-property-type`,`PoHelperOptions`],[`href`,`https://po-ui.io/documentation/po-helper`],[`href`,`https://po-ui.io/documentation/po-theme`],[1,`docs-api-method-table`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`Array<string>`],[`pan`,``,1,`docs-api-property-type`,`Function`],[`pan`,``,1,`docs-api-property-type`,`TemplateRef<void>`],[`href`,`https://po-ui.io/icons`]],template:function(r,i){r&1&&(Jc(0,`div`,0)(1,`p`,1)(2,`code`),Tk(3,`import { PoFieldModule } from '@po-ui/ng-components';`),Zg()(),Jc(4,`div`,2)(5,`p`),Tk(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-timepicker, po-upload, po-url e po-search-ai.`),Zg(),Jc(7,`blockquote`)(8,`p`),Tk(9,`Não esqueça de importar o módulo `),Jc(10,`code`),Tk(11,`FormsModule`),Zg(),Tk(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),Jc(13,`code`),Tk(14,`ReactiveFormsModule`),Zg(),Tk(15,`, ambos nativos do Angular.`),Zg()()(),Jc(16,`h3`,3),Tk(17,`Componente`),Zg(),Jc(18,`h4`,4)(19,`code`,5),Tk(20,`PoUploadComponent`),Zg()(),Jc(21,`div`,2)(22,`p`),Tk(23,`O componente `),Jc(24,`code`),Tk(25,`po-upload`),Zg(),Tk(26,` permite que o usu\xE1rio envie arquivo(s) ao servidor e acompanhe o progresso.
Este componente tamb\xE9m possibilita algumas configura\xE7\xF5es como: \u2013 Envio de diret\xF3rios, onde ele acessa o diret\xF3rio selecionado assim como seus sub-diret\xF3rios;`),Zg(),Jc(27,`ul`)(28,`li`),Tk(29,`Múltipla seleção, onde o usuário pode enviar mais de um arquivo ao servidor.`),Zg(),Jc(30,`li`),Tk(31,`Auto envio, onde o arquivo \xE9 enviado imediatamente ap\xF3s a sele\xE7\xE3o do usu\xE1rio, n\xE3o necessitando que o usu\xE1rio
clique em enviar.`),Zg(),Jc(32,`li`),Tk(33,`Restrições de formatos de arquivo e tamanho.`),Zg(),Jc(34,`li`),Tk(35,`Função de sucesso que será disparada quando os arquivos forem enviados com sucesso.`),Zg(),Jc(36,`li`),Tk(37,`Função de erro que será disparada quando houver erro no envio dos arquivos.`),Zg(),Jc(38,`li`),Tk(39,`Permite habilitar uma área onde os arquivos podem ser arrastados.`),Zg()(),Jc(40,`h4`),Tk(41,`Tokens customizáveis`),Zg(),Jc(42,`p`),Tk(43,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),Zg(),Jc(44,`blockquote`)(45,`p`),Tk(46,`Para maiores informações, acesse o guia `),Jc(47,`a`,6),Tk(48,`Personalizando o Tema Padrão com Tokens CSS`),Zg(),Tk(49,`.`),Zg()(),Jc(50,`table`)(51,`thead`)(52,`tr`)(53,`th`),Tk(54,`Propriedade`),Zg(),Jc(55,`th`),Tk(56,`Descrição`),Zg(),Jc(57,`th`),Tk(58,`Valor Padrão`),Zg()()(),Jc(59,`tbody`)(60,`tr`)(61,`td`)(62,`strong`),Tk(63,`FIELD CONTAINER`),Zg()(),_u(64,`td`)(65,`td`),Zg(),Jc(66,`tr`)(67,`td`)(68,`code`),Tk(69,`--field-container-title-justify`),Zg()(),Jc(70,`td`),Tk(71,`Alinhamento horizontal do título (`),Jc(72,`code`),Tk(73,`justify-content`),Zg(),Tk(74,`)`),Zg(),Jc(75,`td`)(76,`code`),Tk(77,`space-between`),Zg()()(),Jc(78,`tr`)(79,`td`)(80,`code`),Tk(81,`--field-container-title-flex`),Zg()(),Jc(82,`td`),Tk(83,`Flex do título (`),Jc(84,`code`),Tk(85,`flex`),Zg(),Tk(86,`)`),Zg(),Jc(87,`td`)(88,`code`),Tk(89,`1 auto`),Zg()()(),Jc(90,`tr`)(91,`td`)(92,`strong`),Tk(93,`TEXT SUPPORT`),Zg()(),_u(94,`td`)(95,`td`),Zg(),Jc(96,`tr`)(97,`td`)(98,`code`),Tk(99,`--font-family-text-support`),Zg()(),Jc(100,`td`),Tk(101,`Família tipográfica usada no texto de suporte`),Zg(),Jc(102,`td`)(103,`code`),Tk(104,`var(--font-family-theme)`),Zg()()(),Jc(105,`tr`)(106,`td`)(107,`code`),Tk(108,`--text-color-text-support`),Zg()(),Jc(109,`td`),Tk(110,`Cor da fonte no texto de suporte`),Zg(),Jc(111,`td`)(112,`code`),Tk(113,`var(--color-neutral-dark-90)`),Zg()()(),Jc(114,`tr`)(115,`td`)(116,`strong`),Tk(117,`UPLOAD CONTENT`),Zg()(),_u(118,`td`)(119,`td`),Zg(),Jc(120,`tr`)(121,`td`)(122,`code`),Tk(123,`--background-color-content`),Zg(),Tk(124,` \xA0`),Zg(),Jc(125,`td`),Tk(126,`Cor de fundo`),Zg(),Jc(127,`td`)(128,`code`),Tk(129,`var(--color-neutral-light-10)`),Zg()()(),Jc(130,`tr`)(131,`td`)(132,`code`),Tk(133,`--border-color-content`),Zg()(),Jc(134,`td`),Tk(135,`Cor da borda`),Zg(),Jc(136,`td`)(137,`code`),Tk(138,`var(--color-neutral-light-20)`),Zg()()(),Jc(139,`tr`)(140,`td`)(141,`code`),Tk(142,`--border-radius-content`),Zg()(),Jc(143,`td`),Tk(144,`Contém o valor do raio dos cantos do elemento`),Zg(),Jc(145,`td`)(146,`code`),Tk(147,`var(--border-radius-md)`),Zg()()(),Jc(148,`tr`)(149,`td`)(150,`code`),Tk(151,`--text-color-file-name`),Zg()(),Jc(152,`td`),Tk(153,`Cor do texto do nome do arquivo`),Zg(),Jc(154,`td`)(155,`code`),Tk(156,`var(--color-neutral-dark-90)`),Zg()()(),Jc(157,`tr`)(158,`td`)(159,`code`),Tk(160,`--font-family-file-name`),Zg()(),Jc(161,`td`),Tk(162,`Família tipográfica usada no texto do arquivo`),Zg(),Jc(163,`td`)(164,`code`),Tk(165,`var(--font-family-theme)`),Zg()()(),Jc(166,`tr`)(167,`td`)(168,`code`),Tk(169,`--text-color-info-bar`),Zg()(),Jc(170,`td`),Tk(171,`Cor do texto de informação`),Zg(),Jc(172,`td`)(173,`code`),Tk(174,`var(--color-neutral-mid-60)`),Zg()()(),Jc(175,`tr`)(176,`td`)(177,`code`),Tk(178,`--font-family-info-bar`),Zg()(),Jc(179,`td`),Tk(180,`Família tipográfica usada no texto de informação`),Zg(),Jc(181,`td`)(182,`code`),Tk(183,`var(--font-family-theme)`),Zg()()(),Jc(184,`tr`)(185,`td`)(186,`strong`),Tk(187,`ERROR STATE`),Zg()(),_u(188,`td`)(189,`td`),Zg(),Jc(190,`tr`)(191,`td`)(192,`code`),Tk(193,`--background-color-content-error`),Zg()(),Jc(194,`td`),Tk(195,`Cor de fundo do container de erro`),Zg(),Jc(196,`td`)(197,`code`),Tk(198,`var(--color-neutral-light-00)`),Zg()()(),Jc(199,`tr`)(200,`td`)(201,`code`),Tk(202,`--border-color-content-error`),Zg()(),Jc(203,`td`),Tk(204,`Cor da borda do container de erro`),Zg(),Jc(205,`td`)(206,`code`),Tk(207,`var(--color-feedback-negative-base)`),Zg()()(),Jc(208,`tr`)(209,`td`)(210,`code`),Tk(211,`--text-color-error`),Zg()(),Jc(212,`td`),Tk(213,`Cor do texto do container de erro`),Zg(),Jc(214,`td`)(215,`code`),Tk(216,`var(--color-feedback-negative-dark)`),Zg()()(),Jc(217,`tr`)(218,`td`)(219,`code`),Tk(220,`--color-icon-error`),Zg()(),Jc(221,`td`),Tk(222,`Cor do ícone no estado de erro`),Zg(),Jc(223,`td`)(224,`code`),Tk(225,`var(--color-feedback-negative-base)`),Zg()()(),Jc(226,`tr`)(227,`td`)(228,`code`),Tk(229,`--font-family-error`),Zg()(),Jc(230,`td`),Tk(231,`Família tipográfica usada no texto de erro`),Zg(),Jc(232,`td`)(233,`code`),Tk(234,`var(--font-family-theme)`),Zg()()(),Jc(235,`tr`)(236,`td`)(237,`strong`),Tk(238,`UPLOADED STATE`),Zg()(),_u(239,`td`)(240,`td`),Zg(),Jc(241,`tr`)(242,`td`)(243,`code`),Tk(244,`--background-color-content-uploaded`),Zg()(),Jc(245,`td`),Tk(246,`Cor de fundo do container com status de enviado`),Zg(),Jc(247,`td`)(248,`code`),Tk(249,`var(--color-neutral-light-00)`),Zg()()(),Jc(250,`tr`)(251,`td`)(252,`code`),Tk(253,`--border-color-content-uploaded`),Zg()(),Jc(254,`td`),Tk(255,`Cor da borda do container com status de enviado`),Zg(),Jc(256,`td`)(257,`code`),Tk(258,`var(--color-neutral-light-20)`),Zg()()(),Jc(259,`tr`)(260,`td`)(261,`strong`),Tk(262,`INTERACTIVE STATE`),Zg()(),_u(263,`td`)(264,`td`),Zg(),Jc(265,`tr`)(266,`td`)(267,`code`),Tk(268,`--text-color-file-name-interactive`),Zg()(),Jc(269,`td`),Tk(270,`Cor do texto do nome do arquivo quando interativo`),Zg(),Jc(271,`td`)(272,`code`),Tk(273,`var(--color-action-default)`),Zg()()(),Jc(274,`tr`)(275,`td`)(276,`strong`),Tk(277,`THUMBNAIL`),Zg()(),_u(278,`td`)(279,`td`),Zg(),Jc(280,`tr`)(281,`td`)(282,`code`),Tk(283,`--color-icon-thumbnail`),Zg()(),Jc(284,`td`),Tk(285,`Cor do ícone na thumbnail`),Zg(),Jc(286,`td`)(287,`code`),Tk(288,`var(--color-action-default)`),Zg()()(),Jc(289,`tr`)(290,`td`)(291,`code`),Tk(292,`--border-width-thumbnail`),Zg()(),Jc(293,`td`),Tk(294,`Tamanho da fonte na thumbnail`),Zg(),Jc(295,`td`)(296,`code`),Tk(297,`var(--border-width-sm)`),Zg()()(),Jc(298,`tr`)(299,`td`)(300,`code`),Tk(301,`--border-radius-thumbnail`),Zg()(),Jc(302,`td`),Tk(303,`Contém o valor do raio dos cantos na thumbnail`),Zg(),Jc(304,`td`)(305,`code`),Tk(306,`var(--border-radius-md)`),Zg()()(),Jc(307,`tr`)(308,`td`)(309,`code`),Tk(310,`--background-color-thumbnail`),Zg()(),Jc(311,`td`),Tk(312,`Cor de fundo na thumbnail`),Zg(),Jc(313,`td`)(314,`code`),Tk(315,`var(--color-neutral-light-05)`),Zg()()(),Jc(316,`tr`)(317,`td`)(318,`strong`),Tk(319,`Focused`),Zg()(),_u(320,`td`)(321,`td`),Zg(),Jc(322,`tr`)(323,`td`)(324,`code`),Tk(325,`--outline-color-focused`),Zg()(),Jc(326,`td`),Tk(327,`Cor do outline do estado de focus`),Zg(),Jc(328,`td`)(329,`code`),Tk(330,`var(--color-action-focus)`),Zg()()()()()(),Jc(331,`div`,7)(332,`h4`,8),Tk(333,`Seletor`),Zg(),Jc(334,`pre`,9),Tk(335,`<po-upload
    (p-additional-help)="EventEmitter"
    p-additional-help-tooltip="string"
    p-append-in-body="boolean"
    p-auto-focus="boolean"
    p-auto-upload="boolean"
    p-compact-label="boolean"
    p-custom-action="PoProgressAction"
    (p-custom-action-click)="EventEmitter"
    p-custom-modal-actions="Array<PoModalAction>"
    p-directory="boolean"
    p-disabled="boolean"
    p-disabled-remove-file="boolean"
    p-drag-drop="boolean"
    p-drag-drop-height="number"
    p-restrictions="PoUploadFileRestrictions"
    p-form-field="string"
    p-headers="{
    [name: string]: string | Array<string>;
}"
    p-help="string"
    p-hide-restrictions-info="boolean"
    p-hide-select-button="boolean"
    p-hide-send-button="boolean"
    p-multiple="boolean"
    (p-keydown)="EventEmitter"
    p-label="string"
    p-label-text-wrap="boolean"
    p-literals="PoUploadLiterals"
    p-loading="boolean"
    name="string"
    (ng-model-change)="EventEmitter"
    (p-cancel)="EventEmitter"
    (p-error)="EventEmitter"
    (p-open-modal-preview)="EventEmitter"
    (p-remove)="EventEmitter"
    (p-success)="EventEmitter"
    (p-upload)="EventEmitter"
    p-optional="boolean"
    p-helper="PoHelperOptions | string"
    p-required="boolean"
    p-required-url="boolean"
    p-show-required="boolean"
    p-show-thumbnail="boolean"
    p-size="string"
    p-url="string" >
</po-upload>
`),Zg()(),Jc(336,`h4`,10),Tk(337,`Propriedades`),Zg(),Jc(338,`table`,11)(339,`tr`,12)(340,`th`,13),Tk(341,`Nome`),Zg(),Jc(342,`th`,13),Tk(343,`Tipo`),Zg(),Jc(344,`th`,13),Tk(345,`Padrão`),Zg(),Jc(346,`th`,13),Tk(347,`Descrição`),Zg()(),Jc(348,`tr`,14)(349,`td`,15)(350,`div`,16)(351,`span`,17),Tk(352,` (p-additional-help)`),_u(353,`br`),Zg()(),Jc(354,`div`,18),Tk(355,`Deprecated`),Zg()(),Jc(356,`td`,19)(357,`code`,20),Tk(358,`EventEmitter`),Zg()(),Jc(359,`td`,21),Tk(360,`-`),Zg(),Jc(361,`td`,22)(362,`em`)(363,`strong`),Tk(364,`(opcional)`),Zg()(),Jc(365,`p`),Tk(366,`Evento disparado ao clicar no ícone de ajuda adicional.`),Zg(),Jc(367,`blockquote`)(368,`p`),Tk(369,`Essa propriedade está `),Jc(370,`strong`),Tk(371,`depreciada`),Zg(),Tk(372,` e será removida na versão `),Jc(373,`code`),Tk(374,`23.x.x`),Zg(),Tk(375,`. Recomendamos utilizar a propriedade `),Jc(376,`code`),Tk(377,`p-helper`),Zg(),Tk(378,` que oferece mais recursos e flexibilidade.`),Zg()()()(),Jc(379,`tr`,14)(380,`td`,15)(381,`div`,23)(382,`span`,24),Tk(383,` p-additional-help-tooltip`),_u(384,`br`),Zg()(),Jc(385,`div`,18),Tk(386,`Deprecated`),Zg()(),Jc(387,`td`,19)(388,`code`,25),Tk(389,`string`),Zg()(),Jc(390,`td`,21),Tk(391,`-`),Zg(),Jc(392,`td`,22)(393,`em`)(394,`strong`),Tk(395,`(opcional)`),Zg()(),Jc(396,`p`),Tk(397,`Exibe um ícone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente `),Jc(398,`code`),Tk(399,`po-helper`),Zg(),Tk(400,`.
`),Jc(401,`strong`),Tk(402,`Como boa prática, indica-se utilizar um texto com até 140 caracteres.`),Zg()(),Jc(403,`blockquote`)(404,`p`),Tk(405,`Requer um recuo mínimo de 8px se o componente estiver próximo à lateral da tela.`),Zg()(),Jc(406,`blockquote`)(407,`p`),Tk(408,`Essa propriedade está `),Jc(409,`strong`),Tk(410,`depreciada`),Zg(),Tk(411,` e será removida na versão `),Jc(412,`code`),Tk(413,`23.x.x`),Zg(),Tk(414,`. Recomendamos utilizar a propriedade `),Jc(415,`code`),Tk(416,`p-helper`),Zg(),Tk(417,` que oferece mais recursos e flexibilidade.`),Zg()()()(),Jc(418,`tr`,14)(419,`td`,15)(420,`div`,23)(421,`span`,24),Tk(422,` p-append-in-body`),_u(423,`br`),Zg()()(),Jc(424,`td`,19)(425,`code`,26),Tk(426,`boolean`),Zg()(),Jc(427,`td`,21)(428,`p`)(429,`code`),Tk(430,`false`),Zg()()(),Jc(431,`td`,22)(432,`em`)(433,`strong`),Tk(434,`(opcional)`),Zg()(),Jc(435,`p`),Tk(436,`Define que o popover (`),Jc(437,`code`),Tk(438,`p-helper`),Zg(),Tk(439,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o dentro do componente. Essa
op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow escondido, garantindo o
posicionamento correto do tooltip pr\xF3ximo ao elemento.`),Zg(),Jc(440,`blockquote`)(441,`p`),Tk(442,`Quando utilizado com `),Jc(443,`code`),Tk(444,`p-helper`),Zg(),Tk(445,`, leitores de tela como o NVDA podem não ler o conteúdo do popover.`),Zg()()()(),Jc(446,`tr`,14)(447,`td`,15)(448,`div`,23)(449,`span`,24),Tk(450,` p-auto-focus`),_u(451,`br`),Zg()()(),Jc(452,`td`,19)(453,`code`,26),Tk(454,`boolean`),Zg()(),Jc(455,`td`,21)(456,`p`)(457,`code`),Tk(458,`false`),Zg()()(),Jc(459,`td`,22)(460,`em`)(461,`strong`),Tk(462,`(opcional)`),Zg()(),Jc(463,`p`),Tk(464,`Aplica foco no elemento ao ser iniciado.`),Zg(),Jc(465,`blockquote`)(466,`p`),Tk(467,`Caso mais de um elemento seja configurado com essa propriedade, apenas o último elemento declarado com ela terá o foco.`),Zg()()()(),Jc(468,`tr`,14)(469,`td`,15)(470,`div`,23)(471,`span`,24),Tk(472,` p-auto-upload`),_u(473,`br`),Zg()()(),Jc(474,`td`,19)(475,`code`,26),Tk(476,`boolean`),Zg()(),Jc(477,`td`,21)(478,`p`)(479,`code`),Tk(480,`false`),Zg()()(),Jc(481,`td`,22)(482,`em`)(483,`strong`),Tk(484,`(opcional)`),Zg()(),Jc(485,`p`),Tk(486,`Define se o envio do arquivo será automático ao selecionar o mesmo.`),Zg(),Jc(487,`blockquote`)(488,`p`),Tk(489,`Esta propriedade funciona somente se a propriedade `),Jc(490,`code`),Tk(491,`p-url`),Zg(),Tk(492,` tiver um valor atribuído.`),Zg()()()(),Jc(493,`tr`,14)(494,`td`,15)(495,`div`,23)(496,`span`,24),Tk(497,` p-compact-label`),_u(498,`br`),Zg()()(),Jc(499,`td`,19)(500,`code`,26),Tk(501,`boolean`),Zg()(),Jc(502,`td`,21)(503,`p`)(504,`code`),Tk(505,`false`),Zg()()(),Jc(506,`td`,22)(507,`em`)(508,`strong`),Tk(509,`(opcional)`),Zg()(),Jc(510,`p`),Tk(511,`Define se o título do campo será exibido de forma compacta.`),Zg(),Jc(512,`p`),Tk(513,`Quando habilitado (`),Jc(514,`code`),Tk(515,`true`),Zg(),Tk(516,`), o modo compacto afeta o conjunto composto por:`),Zg(),Jc(517,`ul`)(518,`li`)(519,`code`),Tk(520,`po-label`),Zg()(),Jc(521,`li`)(522,`code`),Tk(523,`p-requirement (showRequired)`),Zg()(),Jc(524,`li`)(525,`code`),Tk(526,`po-helper`),Zg()()(),Jc(527,`p`),Tk(528,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),Zg(),Jc(529,`p`),Tk(530,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),Zg(),Jc(531,`ul`)(532,`li`)(533,`code`),Tk(534,`--field-container-title-justify`),Zg()(),Jc(535,`li`)(536,`code`),Tk(537,`--field-container-title-flex`),Zg()()(),Jc(538,`p`),Tk(539,`Exemplo:`),Zg(),Jc(540,`pre`)(541,`code`),Tk(542,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),Zg()(),Jc(543,`p`),Tk(544,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),Zg()()(),Jc(545,`tr`,14)(546,`td`,15)(547,`div`,23)(548,`span`,24),Tk(549,` p-custom-action`),_u(550,`br`),Zg()()(),Jc(551,`td`,19)(552,`code`,27),Tk(553,`PoProgressAction`),Zg()(),Jc(554,`td`,21),Tk(555,`-`),Zg(),Jc(556,`td`,22)(557,`em`)(558,`strong`),Tk(559,`(opcional)`),Zg()(),Jc(560,`p`),Tk(561,`Define uma ação personalizada no componente `),Jc(562,`code`),Tk(563,`po-upload`),Zg(),Tk(564,`, adicionando um bot\xE3o no canto inferior direito
de cada barra de progresso associada aos arquivos enviados ou em envio.`),Zg(),Jc(565,`p`),Tk(566,`A ação deve implementar a interface `),Jc(567,`strong`),Tk(568,`PoProgressAction`),Zg(),Tk(569,`, permitindo configurar propriedades como:`),Zg(),Jc(570,`ul`)(571,`li`)(572,`code`),Tk(573,`label`),Zg(),Tk(574,`: Texto do botão.`),Zg(),Jc(575,`li`)(576,`code`),Tk(577,`icon`),Zg(),Tk(578,`: Ícone a ser exibido no botão.`),Zg(),Jc(579,`li`)(580,`code`),Tk(581,`type`),Zg(),Tk(582,`: Tipo de botão (ex.: `),Jc(583,`code`),Tk(584,`danger`),Zg(),Tk(585,` ou `),Jc(586,`code`),Tk(587,`default`),Zg(),Tk(588,`).`),Zg(),Jc(589,`li`)(590,`code`),Tk(591,`disabled`),Zg(),Tk(592,`: Indica se o botão deve estar desabilitado.`),Zg(),Jc(593,`li`)(594,`code`),Tk(595,`visible`),Zg(),Tk(596,`: Indica se o botão deve estar visível.`),Zg()(),Jc(597,`p`)(598,`strong`),Tk(599,`Exemplo de uso:`),Zg()(),Jc(600,`pre`)(601,`code`,28),Tk(602,`<po-upload
 [p-custom-action]="customAction"
 (p-custom-action-click)="onCustomActionClick($event)">
</po-upload>
`),Zg()(),Jc(603,`pre`)(604,`code`,29),Tk(605,`customAction: PoProgressAction = {
  label: 'Baixar',
  icon: 'an an-download',
  type: 'default',
  visible: true
};

onCustomActionClick(file: PoUploadFile) {
  console.log(\`A\xE7\xE3o personalizada clicada para o arquivo: \${file.name}\`);
}
`),Zg()()()(),Jc(606,`tr`,14)(607,`td`,15)(608,`div`,16)(609,`span`,17),Tk(610,` (p-custom-action-click)`),_u(611,`br`),Zg()()(),Jc(612,`td`,19)(613,`code`,20),Tk(614,`EventEmitter`),Zg()(),Jc(615,`td`,21),Tk(616,`-`),Zg(),Jc(617,`td`,22)(618,`em`)(619,`strong`),Tk(620,`(opcional)`),Zg()(),Jc(621,`p`),Tk(622,`Evento emitido ao clicar na ação personalizada configurada no `),Jc(623,`code`),Tk(624,`p-custom-action`),Zg(),Tk(625,`.`),Zg(),Jc(626,`p`),Tk(627,`O evento retorna o arquivo associado \xE0 barra de progresso onde a a\xE7\xE3o foi clicada,
permitindo executar opera\xE7\xF5es espec\xEDficas para aquele arquivo.`),Zg(),Jc(628,`p`)(629,`strong`),Tk(630,`Exemplo de uso:`),Zg()(),Jc(631,`pre`)(632,`code`,28),Tk(633,`<po-upload
 [p-custom-action]="customAction"
 (p-custom-action-click)="onCustomActionClick($event)">
</po-upload>
`),Zg()(),Jc(634,`pre`)(635,`code`,29),Tk(636,`customAction: PoProgressAction = {
  label: 'Baixar',
  icon: 'an an-download',
  type: 'default',
  visible: true
};

onCustomActionClick(file: PoUploadFile) {
  console.log(\`A\xE7\xE3o personalizada clicada para o arquivo: \${file.name}\`);
  // L\xF3gica para download do arquivo
  this.downloadFile(file);
}

downloadFile(file: PoUploadFile) {
  // Exemplo de download
  console.log(\`Iniciando o download do arquivo: \${file.name}\`);
}
`),Zg()()()(),Jc(637,`tr`,14)(638,`td`,15)(639,`div`,23)(640,`span`,24),Tk(641,` p-custom-modal-actions`),_u(642,`br`),Zg()()(),Jc(643,`td`,19)(644,`code`,30),Tk(645,`Array<PoModalAction>`),Zg()(),Jc(646,`td`,21),Tk(647,`-`),Zg(),Jc(648,`td`,22)(649,`em`)(650,`strong`),Tk(651,`(opcional)`),Zg()(),Jc(652,`p`),Tk(653,`Define uma ou duas a\xE7\xF5es personalizadas do modal de pr\xE9-visualiza\xE7\xE3o, adicionando um bot\xE3o ou dois bot\xF5es no canto inferior direito
do modal.`),Zg(),Jc(654,`p`),Tk(655,`A ação deve implementar a interface `),Jc(656,`strong`),Tk(657,`PoModalAction`),Zg(),Tk(658,`, permitindo configurar propriedades como:`),Zg(),Jc(659,`ul`)(660,`li`)(661,`code`),Tk(662,`label`),Zg(),Tk(663,`: Texto do botão.`),Zg(),Jc(664,`li`)(665,`code`),Tk(666,`action`),Zg(),Tk(667,`: Ícone a ser exibido no botão.`),Zg(),Jc(668,`li`)(669,`code`),Tk(670,`danger`),Zg(),Tk(671,`: Define a propriedade `),Jc(672,`code`),Tk(673,`p-danger`),Zg(),Tk(674,` do botão.`),Zg(),Jc(675,`li`)(676,`code`),Tk(677,`disabled`),Zg(),Tk(678,`: Indica se o botão deve estar desabilitado.`),Zg(),Jc(679,`li`)(680,`code`),Tk(681,`visible`),Zg(),Tk(682,`: Indica se o botão deve estar visível.`),Zg()(),Jc(683,`p`)(684,`strong`),Tk(685,`Exemplo de uso:`),Zg()(),Jc(686,`pre`)(687,`code`,28),Tk(688,`<po-upload
 [p-custom-modal-actions]="customActions"
</po-upload>
`),Zg()(),Jc(689,`pre`)(690,`code`,29),Tk(691,`customActions:  Array<PoModalAction> = [
 { label: 'Confirmar', action: this.confirmModal.bind(this) },
 { label: 'Cancelar', action: this.closeModal.bind(this) }
];
`),Zg()()()(),Jc(692,`tr`,14)(693,`td`,15)(694,`div`,23)(695,`span`,24),Tk(696,` p-directory`),_u(697,`br`),Zg()()(),Jc(698,`td`,19)(699,`code`,26),Tk(700,`boolean`),Zg()(),Jc(701,`td`,21)(702,`p`)(703,`code`),Tk(704,`false`),Zg()()(),Jc(705,`td`,22)(706,`em`)(707,`strong`),Tk(708,`(opcional)`),Zg()(),Jc(709,`p`),Tk(710,`Permite a seleção de diretórios contendo um ou mais arquivos para envio.`),Zg(),Jc(711,`blockquote`)(712,`p`),Tk(713,`A habilitação desta propriedade se restringe apenas à seleção de diretórios.`),Zg()(),Jc(714,`blockquote`)(715,`p`),Tk(716,`Definição não suportada pelo browser `),Jc(717,`strong`),Tk(718,`Internet Explorer`),Zg(),Tk(719,`, todavia será possível a seleção de arquivos padrão.`),Zg()()()(),Jc(720,`tr`,14)(721,`td`,15)(722,`div`,23)(723,`span`,24),Tk(724,` p-disabled`),_u(725,`br`),Zg()()(),Jc(726,`td`,19)(727,`code`,26),Tk(728,`boolean`),Zg()(),Jc(729,`td`,21),Tk(730,`-`),Zg(),Jc(731,`td`,22)(732,`em`)(733,`strong`),Tk(734,`(opcional)`),Zg()(),Jc(735,`p`),Tk(736,`Indica que o campo será desabilitado.`),Zg()()(),Jc(737,`tr`,14)(738,`td`,15)(739,`div`,23)(740,`span`,24),Tk(741,` p-disabled-remove-file`),_u(742,`br`),Zg()()(),Jc(743,`td`,19)(744,`code`,26),Tk(745,`boolean`),Zg()(),Jc(746,`td`,21)(747,`p`)(748,`code`),Tk(749,`false`),Zg()()(),Jc(750,`td`,22)(751,`em`)(752,`strong`),Tk(753,`(opcional)`),Zg()(),Jc(754,`p`),Tk(755,`Desabilita botão de remover o(s) arquivo(s) selecionado(s).`),Zg()()(),Jc(756,`tr`,14)(757,`td`,15)(758,`div`,23)(759,`span`,24),Tk(760,` p-drag-drop`),_u(761,`br`),Zg()()(),Jc(762,`td`,19)(763,`code`,26),Tk(764,`boolean`),Zg()(),Jc(765,`td`,21)(766,`p`)(767,`code`),Tk(768,`false`),Zg()()(),Jc(769,`td`,22)(770,`em`)(771,`strong`),Tk(772,`(opcional)`),Zg()(),Jc(773,`p`),Tk(774,`Exibe a \xE1rea onde \xE9 poss\xEDvel arrastar e selecionar os arquivos. Quando estiver definida, omite o bot\xE3o para sele\xE7\xE3o de arquivos
automaticamente.`),Zg(),Jc(775,`blockquote`)(776,`p`),Tk(777,`Recomendamos utilizar apenas um `),Jc(778,`code`),Tk(779,`po-upload`),Zg(),Tk(780,` com esta funcionalidade por tela.`),Zg()()()(),Jc(781,`tr`,14)(782,`td`,15)(783,`div`,23)(784,`span`,24),Tk(785,` p-drag-drop-height`),_u(786,`br`),Zg()()(),Jc(787,`td`,19)(788,`code`,31),Tk(789,`number`),Zg()(),Jc(790,`td`,21)(791,`p`)(792,`code`),Tk(793,`320`),Zg()()(),Jc(794,`td`,22)(795,`em`)(796,`strong`),Tk(797,`(opcional)`),Zg()(),Jc(798,`p`),Tk(799,`Define em `),Jc(800,`em`),Tk(801,`pixels`),Zg(),Tk(802,` a altura da área onde podem ser arrastados os arquivos. A altura mínima aceita é `),Jc(803,`code`),Tk(804,`160px`),Zg(),Tk(805,`.`),Zg(),Jc(806,`blockquote`)(807,`p`),Tk(808,`Esta propriedade funciona somente se a propriedade `),Jc(809,`code`),Tk(810,`p-drag-drop`),Zg(),Tk(811,` estiver habilitada.`),Zg()()()(),Jc(812,`tr`,14)(813,`td`,15)(814,`div`,23)(815,`span`,24),Tk(816,` p-restrictions`),_u(817,`br`),Zg()()(),Jc(818,`td`,19)(819,`code`,32),Tk(820,`PoUploadFileRestrictions`),Zg()(),Jc(821,`td`,21),Tk(822,`-`),Zg(),Jc(823,`td`,22)(824,`em`)(825,`strong`),Tk(826,`(opcional)`),Zg()(),Jc(827,`p`),Tk(828,`Objeto que segue a definição da interface `),Jc(829,`code`),Tk(830,`PoUploadFileRestrictions`),Zg(),Tk(831,`,
que possibilita definir tamanho m\xE1ximo/m\xEDnimo e extens\xE3o dos arquivos permitidos.`),Zg()()(),Jc(832,`tr`,14)(833,`td`,15)(834,`div`,23)(835,`span`,24),Tk(836,` p-form-field`),_u(837,`br`),Zg()()(),Jc(838,`td`,19)(839,`code`,25),Tk(840,`string`),Zg()(),Jc(841,`td`,21)(842,`p`)(843,`code`),Tk(844,`files`),Zg()()(),Jc(845,`td`,22)(846,`em`)(847,`strong`),Tk(848,`(opcional)`),Zg()(),Jc(849,`p`),Tk(850,`Nome do campo de formulário que será enviado para o serviço informado na propriedade `),Jc(851,`code`),Tk(852,`p-url`),Zg(),Tk(853,`.`),Zg()()(),Jc(854,`tr`,14)(855,`td`,15)(856,`div`,23)(857,`span`,24),Tk(858,` p-headers`),_u(859,`br`),Zg()()(),Jc(860,`td`,19)(861,`code`,33),Tk(862,`{ [name: string]: string `),Zg(),Jc(863,`code`,34),Tk(864,` Array<string>;
}`),Zg()(),Jc(865,`td`,21),Tk(866,`-`),Zg(),Jc(867,`td`,22)(868,`p`),Tk(869,`Objeto que contém os cabeçalhos que será enviado na requisição dos arquivos.`),Zg()()(),Jc(870,`tr`,14)(871,`td`,15)(872,`div`,23)(873,`span`,24),Tk(874,` p-help`),_u(875,`br`),Zg()()(),Jc(876,`td`,19)(877,`code`,25),Tk(878,`string`),Zg()(),Jc(879,`td`,21),Tk(880,`-`),Zg(),Jc(881,`td`,22)(882,`em`)(883,`strong`),Tk(884,`(opcional)`),Zg()(),Jc(885,`p`),Tk(886,`Texto de apoio para o campo.`),Zg()()(),Jc(887,`tr`,14)(888,`td`,15)(889,`div`,23)(890,`span`,24),Tk(891,` p-hide-restrictions-info`),_u(892,`br`),Zg()()(),Jc(893,`td`,19)(894,`code`,26),Tk(895,`boolean`),Zg()(),Jc(896,`td`,21)(897,`p`)(898,`code`),Tk(899,`false`),Zg()()(),Jc(900,`td`,22)(901,`em`)(902,`strong`),Tk(903,`(opcional)`),Zg()(),Jc(904,`p`),Tk(905,`Oculta visualmente as informações de restrições para o upload.`),Zg()()(),Jc(906,`tr`,14)(907,`td`,15)(908,`div`,23)(909,`span`,24),Tk(910,` p-hide-select-button`),_u(911,`br`),Zg()()(),Jc(912,`td`,19)(913,`code`,26),Tk(914,`boolean`),Zg()(),Jc(915,`td`,21)(916,`p`)(917,`code`),Tk(918,`false`),Zg()()(),Jc(919,`td`,22)(920,`em`)(921,`strong`),Tk(922,`(opcional)`),Zg()(),Jc(923,`p`),Tk(924,`Omite o botão de seleção de arquivos.`),Zg(),Jc(925,`blockquote`)(926,`p`),Tk(927,`Caso o valor definido seja `),Jc(928,`code`),Tk(929,`true`),Zg(),Tk(930,`, caber\xE1 ao desenvolvedor a responsabilidade
pela chamada do m\xE9todo `),Jc(931,`code`),Tk(932,`selectFiles()`),Zg(),Tk(933,` para seleção de arquivos.`),Zg()()()(),Jc(934,`tr`,14)(935,`td`,15)(936,`div`,23)(937,`span`,24),Tk(938,` p-hide-send-button`),_u(939,`br`),Zg()()(),Jc(940,`td`,19)(941,`code`,26),Tk(942,`boolean`),Zg()(),Jc(943,`td`,21)(944,`p`)(945,`code`),Tk(946,`false`),Zg()()(),Jc(947,`td`,22)(948,`em`)(949,`strong`),Tk(950,`(opcional)`),Zg()(),Jc(951,`p`),Tk(952,`Omite o botão de envio de arquivos.`),Zg(),Jc(953,`blockquote`)(954,`p`),Tk(955,`Caso o valor definido seja `),Jc(956,`code`),Tk(957,`true`),Zg(),Tk(958,`, caber\xE1 ao desenvolvedor a responsabilidade
pela chamada do m\xE9todo `),Jc(959,`code`),Tk(960,`sendFiles()`),Zg(),Tk(961,` para envio do(s) arquivo(s) selecionado(s).`),Zg()()()(),Jc(962,`tr`,14)(963,`td`,15)(964,`div`,23)(965,`span`,24),Tk(966,` p-multiple`),_u(967,`br`),Zg()()(),Jc(968,`td`,19)(969,`code`,26),Tk(970,`boolean`),Zg()(),Jc(971,`td`,21),Tk(972,`-`),Zg(),Jc(973,`td`,22)(974,`em`)(975,`strong`),Tk(976,`(opcional)`),Zg()(),Jc(977,`p`),Tk(978,`Define se pode selecionar mais de um arquivo.`),Zg(),Jc(979,`blockquote`)(980,`p`),Tk(981,`Se utilizada a `),Jc(982,`code`),Tk(983,`p-directory`),Zg(),Tk(984,`, habilita-se automaticamente esta propriedade.`),Zg()()()(),Jc(985,`tr`,14)(986,`td`,15)(987,`div`,16)(988,`span`,17),Tk(989,` (p-keydown)`),_u(990,`br`),Zg()()(),Jc(991,`td`,19)(992,`code`,20),Tk(993,`EventEmitter`),Zg()(),Jc(994,`td`,21),Tk(995,`-`),Zg(),Jc(996,`td`,22)(997,`em`)(998,`strong`),Tk(999,`(opcional)`),Zg()(),Jc(1e3,`p`),Tk(1001,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),Jc(1002,`code`),Tk(1003,`KeyboardEvent`),Zg(),Tk(1004,` com informações sobre a tecla.`),Zg()()(),Jc(1005,`tr`,14)(1006,`td`,15)(1007,`div`,23)(1008,`span`,24),Tk(1009,` p-label`),_u(1010,`br`),Zg()()(),Jc(1011,`td`,19)(1012,`code`,25),Tk(1013,`string`),Zg()(),Jc(1014,`td`,21),Tk(1015,`-`),Zg(),Jc(1016,`td`,22)(1017,`em`)(1018,`strong`),Tk(1019,`(opcional)`),Zg()(),Jc(1020,`p`),Tk(1021,`Rótulo do campo.`),Zg()()(),Jc(1022,`tr`,14)(1023,`td`,15)(1024,`div`,23)(1025,`span`,24),Tk(1026,` p-label-text-wrap`),_u(1027,`br`),Zg()()(),Jc(1028,`td`,19)(1029,`code`,26),Tk(1030,`boolean`),Zg()(),Jc(1031,`td`,21)(1032,`p`)(1033,`code`),Tk(1034,`false`),Zg()()(),Jc(1035,`td`,22)(1036,`em`)(1037,`strong`),Tk(1038,`(opcional)`),Zg()(),Jc(1039,`p`),Tk(1040,`Habilita a quebra automática do texto da propriedade `),Jc(1041,`code`),Tk(1042,`p-label`),Zg(),Tk(1043,`. Quando `),Jc(1044,`code`),Tk(1045,`p-label-text-wrap`),Zg(),Tk(1046,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),Zg()()(),Jc(1047,`tr`,14)(1048,`td`,15)(1049,`div`,23)(1050,`span`,24),Tk(1051,` p-literals`),_u(1052,`br`),Zg()()(),Jc(1053,`td`,19)(1054,`code`,35),Tk(1055,`PoUploadLiterals`),Zg()(),Jc(1056,`td`,21),Tk(1057,`-`),Zg(),Jc(1058,`td`,22)(1059,`em`)(1060,`strong`),Tk(1061,`(opcional)`),Zg()(),Jc(1062,`p`),Tk(1063,`Objeto com as literais usadas no `),Jc(1064,`code`),Tk(1065,`po-upload`),Zg(),Tk(1066,`.`),Zg(),Jc(1067,`p`),Tk(1068,`Existem duas maneiras de customizar o componente:`),Zg(),Jc(1069,`ul`)(1070,`li`),Tk(1071,`passando um objeto implementando a interface `),Jc(1072,`code`),Tk(1073,`PoUploadLiterals`),Zg(),Tk(1074,` com todas as literais disponíveis;`),Zg(),Jc(1075,`li`),Tk(1076,`passando apenas as literais que deseja customizar:`),Jc(1077,`pre`)(1078,`code`),Tk(1079,`const customLiterals: PoUploadLiterals = {
  folders: 'Pastas',
  selectFile: 'Buscar arquivo',
  startSending: 'Enviar'
};
`),Zg()()()(),Jc(1080,`p`),Tk(1081,`E para carregar as literais customizadas, basta apenas passar o objeto para o componente:`),Zg(),Jc(1082,`pre`)(1083,`code`),Tk(1084,`<po-upload
  [p-literals]="customLiterals">
</po-upload>
`),Zg()(),Jc(1085,`blockquote`)(1086,`p`),Tk(1087,`O objeto padrão de literais será traduzido de acordo com o idioma do `),Jc(1088,`em`),Tk(1089,`browser`),Zg(),Tk(1090,` (pt, en, es, ru).`),Zg()()()(),Jc(1091,`tr`,14)(1092,`td`,15)(1093,`div`,23)(1094,`span`,24),Tk(1095,` p-loading`),_u(1096,`br`),Zg()()(),Jc(1097,`td`,19)(1098,`code`,26),Tk(1099,`boolean`),Zg()(),Jc(1100,`td`,21)(1101,`p`)(1102,`code`),Tk(1103,`false`),Zg()()(),Jc(1104,`td`,22)(1105,`em`)(1106,`strong`),Tk(1107,`(opcional)`),Zg()(),Jc(1108,`p`),Tk(1109,`Exibe um ícone de carregamento no botão `),Jc(1110,`code`),Tk(1111,`Selecionar arquivo`),Zg(),Tk(1112,`, à esquerda do texto, sinalizando que uma operação está\xA0em andamento.`),Zg(),Jc(1113,`blockquote`)(1114,`p`),Tk(1115,`Incompatível com `),Jc(1116,`code`),Tk(1117,`p-drag-drop`),Zg(),Tk(1118,` e `),Jc(1119,`code`),Tk(1120,`p-hide-select-button`),Zg(),Tk(1121,`, pois o estado de loading depende da exibição do botão `),Jc(1122,`code`),Tk(1123,`Selecionar arquivo`),Zg(),Tk(1124,`.`),Zg()()()(),Jc(1125,`tr`,14)(1126,`td`,15)(1127,`div`,23)(1128,`span`,24),Tk(1129,` name`),_u(1130,`br`),Zg()()(),Jc(1131,`td`,19)(1132,`code`,25),Tk(1133,`string`),Zg()(),Jc(1134,`td`,21),Tk(1135,`-`),Zg(),Jc(1136,`td`,22)(1137,`p`),Tk(1138,`Define o valor do atributo `),Jc(1139,`code`),Tk(1140,`name`),Zg(),Tk(1141,` do componente.`),Zg()()(),Jc(1142,`tr`,14)(1143,`td`,15)(1144,`div`,16)(1145,`span`,17),Tk(1146,` (ngModelChange)`),_u(1147,`br`),Zg()()(),Jc(1148,`td`,19)(1149,`code`,20),Tk(1150,`EventEmitter`),Zg()(),Jc(1151,`td`,21),Tk(1152,`-`),Zg(),Jc(1153,`td`,22)(1154,`em`)(1155,`strong`),Tk(1156,`(opcional)`),Zg()(),Jc(1157,`p`),Tk(1158,`Função para atualizar o ngModel do componente, necessário quando não for utilizado dentro da `),Jc(1159,`em`),Tk(1160,`tag`),Zg(),Jc(1161,`code`),Tk(1162,`form`),Zg(),Tk(1163,`.`),Zg(),Jc(1164,`p`),Tk(1165,`Na versão 12.2.0 do Angular a verificação `),Jc(1166,`code`),Tk(1167,`strictTemplates`),Zg(),Tk(1168,` vem true como default. Portanto, para utilizar
two-way binding no componente deve se utilizar da seguinte forma:`),Zg(),Jc(1169,`pre`)(1170,`code`),Tk(1171,`<po-upload ... [ngModel]="UploadModel" (ngModelChange)="uploadModel = $event"> </po-upload>
`),Zg()()()(),Jc(1172,`tr`,14)(1173,`td`,15)(1174,`div`,16)(1175,`span`,17),Tk(1176,` (p-cancel)`),_u(1177,`br`),Zg()()(),Jc(1178,`td`,19)(1179,`code`,20),Tk(1180,`EventEmitter`),Zg()(),Jc(1181,`td`,21),Tk(1182,`-`),Zg(),Jc(1183,`td`,22)(1184,`em`)(1185,`strong`),Tk(1186,`(opcional)`),Zg()(),Jc(1187,`p`),Tk(1188,`Evento será disparado ao clicar no ícone de fechar.`),Zg(),Jc(1189,`blockquote`)(1190,`p`),Tk(1191,`Por parâmetro será passado o objeto do arquivo.`),Zg()()()(),Jc(1192,`tr`,14)(1193,`td`,15)(1194,`div`,16)(1195,`span`,17),Tk(1196,` (p-error)`),_u(1197,`br`),Zg()()(),Jc(1198,`td`,19)(1199,`code`,20),Tk(1200,`EventEmitter`),Zg()(),Jc(1201,`td`,21),Tk(1202,`-`),Zg(),Jc(1203,`td`,22)(1204,`em`)(1205,`strong`),Tk(1206,`(opcional)`),Zg()(),Jc(1207,`p`),Tk(1208,`Evento será disparado quando ocorrer algum erro no envio do arquivo.`),Zg(),Jc(1209,`blockquote`)(1210,`p`),Tk(1211,`Por parâmetro será passado o objeto do retorno que é do tipo `),Jc(1212,`code`),Tk(1213,`HttpErrorResponse`),Zg(),Tk(1214,`.`),Zg()()()(),Jc(1215,`tr`,14)(1216,`td`,15)(1217,`div`,16)(1218,`span`,17),Tk(1219,` (p-open-modal-preview)`),_u(1220,`br`),Zg()()(),Jc(1221,`td`,19)(1222,`code`,20),Tk(1223,`EventEmitter`),Zg()(),Jc(1224,`td`,21),Tk(1225,`-`),Zg(),Jc(1226,`td`,22)(1227,`em`)(1228,`strong`),Tk(1229,`(opcional)`),Zg()(),Jc(1230,`p`),Tk(1231,`Evento será disparado ao abrir o modal de pré-visualização.`),Zg(),Jc(1232,`blockquote`)(1233,`p`),Tk(1234,`Por parâmetro será passado o objeto do arquivo.`),Zg()()()(),Jc(1235,`tr`,14)(1236,`td`,15)(1237,`div`,16)(1238,`span`,17),Tk(1239,` (p-remove)`),_u(1240,`br`),Zg()()(),Jc(1241,`td`,19)(1242,`code`,20),Tk(1243,`EventEmitter`),Zg()(),Jc(1244,`td`,21),Tk(1245,`-`),Zg(),Jc(1246,`td`,22)(1247,`em`)(1248,`strong`),Tk(1249,`(opcional)`),Zg()(),Jc(1250,`p`),Tk(1251,`Evento será disparado ao clicar no ícone de remover.`),Zg(),Jc(1252,`blockquote`)(1253,`p`),Tk(1254,`Por parâmetro será passado o objeto do arquivo.`),Zg()()()(),Jc(1255,`tr`,14)(1256,`td`,15)(1257,`div`,16)(1258,`span`,17),Tk(1259,` (p-success)`),_u(1260,`br`),Zg()()(),Jc(1261,`td`,19)(1262,`code`,20),Tk(1263,`EventEmitter`),Zg()(),Jc(1264,`td`,21),Tk(1265,`-`),Zg(),Jc(1266,`td`,22)(1267,`em`)(1268,`strong`),Tk(1269,`(opcional)`),Zg()(),Jc(1270,`p`),Tk(1271,`Evento será disparado quando o envio do arquivo for realizado com sucesso.`),Zg(),Jc(1272,`blockquote`)(1273,`p`),Tk(1274,`Por parâmetro será passado o objeto do retorno que é do tipo `),Jc(1275,`code`),Tk(1276,`HttpResponse`),Zg(),Tk(1277,`.`),Zg()()()(),Jc(1278,`tr`,14)(1279,`td`,15)(1280,`div`,16)(1281,`span`,17),Tk(1282,` (p-upload)`),_u(1283,`br`),Zg()()(),Jc(1284,`td`,19)(1285,`code`,20),Tk(1286,`EventEmitter`),Zg()(),Jc(1287,`td`,21),Tk(1288,`-`),Zg(),Jc(1289,`td`,22)(1290,`em`)(1291,`strong`),Tk(1292,`(opcional)`),Zg()(),Jc(1293,`p`),Tk(1294,`Fun\xE7\xE3o que ser\xE1 executada no momento de realizar o envio do arquivo,
onde ser\xE1 poss\xEDvel adicionar informa\xE7\xF5es ao par\xE2metro que ser\xE1 enviado na requisi\xE7\xE3o.
\xC9 passado por par\xE2metro um objeto com o arquivo e as propriedades data e extraFormData,
que ser\xE3o enviadas em conjunto com o arquivo na requisi\xE7\xE3o, por exemplo:`),Zg(),Jc(1295,`blockquote`)(1296,`p`),Tk(1297,`data, nesta propriedade pode ser informado algum dado`),Zg()(),Jc(1298,`pre`)(1299,`code`),Tk(1300,`event.data = {id: 'id do usu\xE1rio'};
`),Zg()(),Jc(1301,`blockquote`)(1302,`p`),Tk(1303,`extraFormData, nesta propriedade pode ser informado algum dado solicitado pela API
que n\xE3o possa estar no objeto `),Jc(1304,`code`),Tk(1305,`data`),Zg(),Tk(1306,`, assim o conte\xFAdo sar\xE1 extra\xEDdo do objeto e
enviado como par\xE2metro`),Zg()(),Jc(1307,`pre`)(1308,`code`),Tk(1309,`event.extraFormData = {id: 'id do usu\xE1rio'};
`),Zg()()()(),Jc(1310,`tr`,14)(1311,`td`,15)(1312,`div`,23)(1313,`span`,24),Tk(1314,` p-optional`),_u(1315,`br`),Zg()()(),Jc(1316,`td`,19)(1317,`code`,26),Tk(1318,`boolean`),Zg()(),Jc(1319,`td`,21)(1320,`p`)(1321,`code`),Tk(1322,`false`),Zg()()(),Jc(1323,`td`,22)(1324,`em`)(1325,`strong`),Tk(1326,`(opcional)`),Zg()(),Jc(1327,`p`),Tk(1328,`Define se a indicação de campo opcional será exibida.`),Zg(),Jc(1329,`blockquote`)(1330,`p`),Tk(1331,`Não será exibida a indicação se:`),Zg()(),Jc(1332,`ul`)(1333,`li`),Tk(1334,`O campo conter `),Jc(1335,`code`),Tk(1336,`p-required`),Zg(),Tk(1337,`;`),Zg(),Jc(1338,`li`),Tk(1339,`Não possuir `),Jc(1340,`code`),Tk(1341,`p-help`),Zg(),Tk(1342,` e/ou `),Jc(1343,`code`),Tk(1344,`p-label`),Zg(),Tk(1345,`.`),Zg()()()(),Jc(1346,`tr`,14)(1347,`td`,15)(1348,`div`,23)(1349,`span`,24),Tk(1350,` p-helper`),_u(1351,`br`),Zg()()(),Jc(1352,`td`,19)(1353,`code`,36),Tk(1354,`PoHelperOptions `),Zg(),Jc(1355,`code`,25),Tk(1356,` string`),Zg()(),Jc(1357,`td`,21),Tk(1358,`-`),Zg(),Jc(1359,`td`,22)(1360,`em`)(1361,`strong`),Tk(1362,`(opcional)`),Zg()(),Jc(1363,`p`),Tk(1364,`Define as opções do componente de ajuda (po-helper) que será exibido ao lado do label quando a propriedade `),Jc(1365,`code`),Tk(1366,`p-label`),Zg(),Tk(1367,` for definida, ou, ao lado do componente na ausência da propriedade `),Jc(1368,`code`),Tk(1369,`p-label`),Zg(),Tk(1370,`.`),Zg(),Jc(1371,`blockquote`)(1372,`p`),Tk(1373,`Para mais informações acesse: `),Jc(1374,`a`,37),Tk(1375,`https://po-ui.io/documentation/po-helper`),Zg(),Tk(1376,`.`),Zg()(),Jc(1377,`blockquote`)(1378,`p`),Tk(1379,`Ao configurar esta propriedade, o antigo ícone de ajuda adicional (`),Jc(1380,`code`),Tk(1381,`p-additional-help-tooltip`),Zg(),Tk(1382,` e `),Jc(1383,`code`),Tk(1384,`p-additional-help`),Zg(),Tk(1385,`) será ignorado.`),Zg()()()(),Jc(1386,`tr`,14)(1387,`td`,15)(1388,`div`,23)(1389,`span`,24),Tk(1390,` p-required`),_u(1391,`br`),Zg()()(),Jc(1392,`td`,19)(1393,`code`,26),Tk(1394,`boolean`),Zg()(),Jc(1395,`td`,21)(1396,`p`)(1397,`code`),Tk(1398,`false`),Zg()()(),Jc(1399,`td`,22)(1400,`em`)(1401,`strong`),Tk(1402,`(opcional)`),Zg()(),Jc(1403,`p`),Tk(1404,`Define que o campo será obrigatório.`),Zg()()(),Jc(1405,`tr`,14)(1406,`td`,15)(1407,`div`,23)(1408,`span`,24),Tk(1409,` p-required-url`),_u(1410,`br`),Zg()()(),Jc(1411,`td`,19)(1412,`code`,26),Tk(1413,`boolean`),Zg()(),Jc(1414,`td`,21)(1415,`p`)(1416,`code`),Tk(1417,`true`),Zg()()(),Jc(1418,`td`,22)(1419,`em`)(1420,`strong`),Tk(1421,`(opcional)`),Zg()(),Jc(1422,`p`),Tk(1423,`Define se a propriedade `),Jc(1424,`code`),Tk(1425,`p-url`),Zg(),Tk(1426,` é obrigatória.`),Zg(),Jc(1427,`p`),Tk(1428,`Caso a propriedade seja definida como `),Jc(1429,`code`),Tk(1430,`false`),Zg(),Tk(1431,`:`),Zg(),Jc(1432,`ul`)(1433,`li`),Tk(1434,`o botão de "Selecionar arquivo" ficará habilitado mesmo sem a propriedade `),Jc(1435,`code`),Tk(1436,`p-url`),Zg(),Tk(1437,` definida.`),Zg(),Jc(1438,`li`),Tk(1439,`o botão "Iniciar envio" ficará oculto até que a propriedade `),Jc(1440,`code`),Tk(1441,`p-url`),Zg(),Tk(1442,` seja definida.`),Zg()(),Jc(1443,`blockquote`)(1444,`p`),Tk(1445,`Se utilizada com a propriedade `),Jc(1446,`code`),Tk(1447,`p-auto-upload`),Zg(),Tk(1448,` definida como `),Jc(1449,`code`),Tk(1450,`true`),Zg(),Tk(1451,` será necessário definir a propriedade `),Jc(1452,`code`),Tk(1453,`p-url`),Zg(),Tk(1454,`.`),Zg()()()(),Jc(1455,`tr`,14)(1456,`td`,15)(1457,`div`,23)(1458,`span`,24),Tk(1459,` p-show-required`),_u(1460,`br`),Zg()()(),Jc(1461,`td`,19)(1462,`code`,26),Tk(1463,`boolean`),Zg()(),Jc(1464,`td`,21),Tk(1465,`-`),Zg(),Jc(1466,`td`,22)(1467,`p`),Tk(1468,`Define se a indicação de campo obrigatório será exibida.`),Zg(),Jc(1469,`blockquote`)(1470,`p`),Tk(1471,`Não será exibida a indicação se:`),Zg()(),Jc(1472,`ul`)(1473,`li`),Tk(1474,`Não possuir `),Jc(1475,`code`),Tk(1476,`p-help`),Zg(),Tk(1477,` e/ou `),Jc(1478,`code`),Tk(1479,`p-label`),Zg(),Tk(1480,`.`),Zg()()()(),Jc(1481,`tr`,14)(1482,`td`,15)(1483,`div`,23)(1484,`span`,24),Tk(1485,` p-show-thumbnail`),_u(1486,`br`),Zg()()(),Jc(1487,`td`,19)(1488,`code`,26),Tk(1489,`boolean`),Zg()(),Jc(1490,`td`,21)(1491,`p`)(1492,`code`),Tk(1493,`true`),Zg()()(),Jc(1494,`td`,22)(1495,`em`)(1496,`strong`),Tk(1497,`(opcional)`),Zg()(),Jc(1498,`p`),Tk(1499,`Exibe a pré-visualização de imagens ao anexá-las.`),Zg(),Jc(1500,`blockquote`)(1501,`p`),Tk(1502,`Propriedade funciona apenas em arquivos de formato de imagem (`),Jc(1503,`code`),Tk(1504,`.png`),Zg(),Tk(1505,`, `),Jc(1506,`code`),Tk(1507,`.jpg`),Zg(),Tk(1508,`, `),Jc(1509,`code`),Tk(1510,`.jpeg`),Zg(),Tk(1511,` e `),Jc(1512,`code`),Tk(1513,`.gif`),Zg(),Tk(1514,`).
Ser\xE1 ignorada em outros tipos de arquivo.`),Zg()()()(),Jc(1515,`tr`,14)(1516,`td`,15)(1517,`div`,23)(1518,`span`,24),Tk(1519,` p-size`),_u(1520,`br`),Zg()()(),Jc(1521,`td`,19)(1522,`code`,25),Tk(1523,`string`),Zg()(),Jc(1524,`td`,21)(1525,`p`)(1526,`code`),Tk(1527,`medium`),Zg()()(),Jc(1528,`td`,22)(1529,`em`)(1530,`strong`),Tk(1531,`(opcional)`),Zg()(),Jc(1532,`p`),Tk(1533,`Define o tamanho e as ações do componente:`),Zg(),Jc(1534,`ul`)(1535,`li`)(1536,`code`),Tk(1537,`small`),Zg(),Tk(1538,`: altura do button como 32px (disponível apenas para acessibilidade AA).`),Zg(),Jc(1539,`li`)(1540,`code`),Tk(1541,`medium`),Zg(),Tk(1542,`: altura do button como 44px.`),Zg()(),Jc(1543,`blockquote`)(1544,`p`),Tk(1545,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Jc(1546,`code`),Tk(1547,`medium`),Zg(),Tk(1548,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Jc(1549,`a`,38),Tk(1550,`po-theme`),Zg(),Tk(1551,`.`),Zg()()()(),Jc(1552,`tr`,14)(1553,`td`,15)(1554,`div`,23)(1555,`span`,24),Tk(1556,` p-url`),_u(1557,`br`),Zg()()(),Jc(1558,`td`,19)(1559,`code`,25),Tk(1560,`string`),Zg()(),Jc(1561,`td`,21),Tk(1562,`-`),Zg(),Jc(1563,`td`,22)(1564,`p`),Tk(1565,`URL que deve ser feita a requisição com os arquivos selecionados.`),Zg()()()(),Jc(1566,`h3`,10),Tk(1567,`Métodos`),Zg(),Jc(1568,`table`,39)(1569,`tr`,14)(1570,`th`,40)(1571,`div`,23)(1572,`h4`)(1573,`span`,24),Tk(1574,` clear `),Zg()()()()(),Jc(1575,`tr`,22)(1576,`td`,22)(1577,`p`),Tk(1578,`Método responsável por `),Jc(1579,`strong`),Tk(1580,`limpar`),Zg(),Tk(1581,` o(s) arquivo(s) selecionado(s).`),Zg()()()(),_u(1582,`br`),Jc(1583,`table`,39)(1584,`tr`,14)(1585,`th`,40)(1586,`div`,23)(1587,`h4`)(1588,`span`,24),Tk(1589,` focus `),Zg()()()()(),Jc(1590,`tr`,22)(1591,`td`,22)(1592,`p`),Tk(1593,`Função que atribui foco ao componente.`),Zg(),Jc(1594,`p`),Tk(1595,`Para utilizá-la é necessário ter a instância do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:`),Zg(),Jc(1596,`pre`)(1597,`code`),Tk(1598,`import { PoUploadComponent } from '@po-ui/ng-components';

...

@ViewChild(PoUploadComponent, { static: true }) upload: PoUploadComponent;

focusUpload() {
  this.upload.focus();
}
`),Zg()()()()(),_u(1599,`br`),Jc(1600,`table`,39)(1601,`tr`,14)(1602,`th`,40)(1603,`div`,23)(1604,`h4`)(1605,`span`,24),Tk(1606,` closeModal `),Zg()()()()(),Jc(1607,`tr`,22)(1608,`td`,22)(1609,`p`),Tk(1610,`Método responsável por fechar o modal.`),Zg()()()(),_u(1611,`br`),Jc(1612,`table`,39)(1613,`tr`,14)(1614,`th`,40)(1615,`div`,23)(1616,`h4`)(1617,`span`,24),Tk(1618,` selectFiles `),Zg()()()()(),Jc(1619,`tr`,22)(1620,`td`,22)(1621,`p`),Tk(1622,`Método responsável por `),Jc(1623,`strong`),Tk(1624,`abrir`),Zg(),Tk(1625,` a janela para seleção de arquivo(s).`),Zg()()()(),_u(1626,`br`),Jc(1627,`table`,39)(1628,`tr`,14)(1629,`th`,40)(1630,`div`,23)(1631,`h4`)(1632,`span`,24),Tk(1633,` sendFiles `),Zg()()()()(),Jc(1634,`tr`,22)(1635,`td`,22)(1636,`p`),Tk(1637,`Método responsável por `),Jc(1638,`strong`),Tk(1639,`enviar`),Zg(),Tk(1640,` o(s) arquivo(s) selecionado(s).`),Zg()()()(),_u(1641,`br`),Jc(1642,`table`,39)(1643,`tr`,14)(1644,`th`,40)(1645,`div`,23)(1646,`h4`)(1647,`span`,24),Tk(1648,` showAdditionalHelp `),Zg()()()()(),Jc(1649,`tr`,22)(1650,`td`,22)(1651,`p`),Tk(1652,`Método que exibe `),Jc(1653,`code`),Tk(1654,`p-helper`),Zg(),Tk(1655,` ou executa a ação definida em `),Jc(1656,`code`),Tk(1657,`p-helper{eventOnClick}`),Zg(),Tk(1658,` ou em `),Jc(1659,`code`),Tk(1660,`p-additionalHelp`),Zg(),Tk(1661,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),Jc(1662,`code`),Tk(1663,`p-keydown`),Zg(),Tk(1664,`.`),Zg(),Jc(1665,`blockquote`)(1666,`p`),Tk(1667,`Exibe ou oculta o conteúdo do componente `),Jc(1668,`code`),Tk(1669,`po-helper`),Zg(),Tk(1670,` quando o componente estiver com foco.`),Zg()(),Jc(1671,`pre`)(1672,`code`),Tk(1673,`//Exemplo com p-label e p-helper
<po-upload
 #upload
 ...
 p-label="Label do upload"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, upload)"
></po-upload>
`),Zg()(),Jc(1674,`pre`)(1675,`code`),Tk(1676,`...
onKeyDown(event: KeyboardEvent, inp: PoUploadComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),Zg()()()()(),_u(1677,`br`),Jc(1678,`h3`),Tk(1679,`Interfaces`),Zg(),Jc(1680,`h4`,41)(1681,`code`,5),Tk(1682,`PoUploadFileRestrictions`),Zg()(),Jc(1683,`div`,2)(1684,`p`),Tk(1685,`Interface que define as restri\xE7\xF5es dos arquivos a serem selecionados com base em regras predefinidas
para o seu tamanho, extens\xE3o e quantidade.`),Zg()(),Jc(1686,`h4`,10),Tk(1687,`Propriedades`),Zg(),Jc(1688,`table`,11)(1689,`tr`,12)(1690,`th`,13),Tk(1691,`Nome`),Zg(),Jc(1692,`th`,13),Tk(1693,`Tipo`),Zg(),Jc(1694,`th`,13),Tk(1695,`Descrição`),Zg()(),Jc(1696,`tr`,14)(1697,`td`,15)(1698,`div`,23)(1699,`span`,24),Tk(1700,` allowedExtensions`),_u(1701,`br`),Zg()()(),Jc(1702,`td`,19)(1703,`code`,42),Tk(1704,`Array<string>`),Zg()(),Jc(1705,`td`,22)(1706,`em`)(1707,`strong`),Tk(1708,`(opcional)`),Zg()(),Jc(1709,`p`),Tk(1710,`Extensões permitidas de arquivos que serão enviados ao servidor, devendo ser informada uma coleção de extensões, por exemplo:`),Zg(),Jc(1711,`pre`)(1712,`code`),Tk(1713,`allowedExtensions = ['.png', '.jpg', '.pdf'];
`),Zg()()()(),Jc(1714,`tr`,14)(1715,`td`,15)(1716,`div`,23)(1717,`span`,24),Tk(1718,` maxFileSize`),_u(1719,`br`),Zg()()(),Jc(1720,`td`,19)(1721,`code`,31),Tk(1722,`number`),Zg()(),Jc(1723,`td`,22)(1724,`em`)(1725,`strong`),Tk(1726,`(opcional)`),Zg()(),Jc(1727,`p`),Tk(1728,`Tamanho máximo do arquivo a ser enviado ao servidor.`),Zg(),Jc(1729,`p`),Tk(1730,`Deve ser informado um valor em `),Jc(1731,`em`),Tk(1732,`bytes`),Zg(),Tk(1733,`, por exemplo: `),Jc(1734,`code`),Tk(1735,`31457280`),Zg(),Tk(1736,` (30MB).`),Zg(),Jc(1737,`blockquote`)(1738,`p`),Tk(1739,`Por padrão o valor é `),Jc(1740,`code`),Tk(1741,`30 MB`),Zg(),Tk(1742,`.`),Zg()()()(),Jc(1743,`tr`,14)(1744,`td`,15)(1745,`div`,23)(1746,`span`,24),Tk(1747,` maxFiles`),_u(1748,`br`),Zg()()(),Jc(1749,`td`,19)(1750,`code`,31),Tk(1751,`number`),Zg()(),Jc(1752,`td`,22)(1753,`em`)(1754,`strong`),Tk(1755,`(opcional)`),Zg()(),Jc(1756,`p`),Tk(1757,`Quantidade máxima de arquivos para o `),Jc(1758,`em`),Tk(1759,`upload`),Zg(),Tk(1760,`.`),Zg(),Jc(1761,`blockquote`)(1762,`p`),Tk(1763,`Esta propriedade será válida somente se a propriedade `),Jc(1764,`code`),Tk(1765,`p-multiple`),Zg(),Tk(1766,` estiver habilitada e seu valor for maior do que zero.`),Zg()()()(),Jc(1767,`tr`,14)(1768,`td`,15)(1769,`div`,23)(1770,`span`,24),Tk(1771,` minFileSize`),_u(1772,`br`),Zg()()(),Jc(1773,`td`,19)(1774,`code`,31),Tk(1775,`number`),Zg()(),Jc(1776,`td`,22)(1777,`em`)(1778,`strong`),Tk(1779,`(opcional)`),Zg()(),Jc(1780,`p`),Tk(1781,`Tamanho mínimo em `),Jc(1782,`em`),Tk(1783,`bytes`),Zg(),Tk(1784,` do arquivo que será enviado ao servidor.`),Zg(),Jc(1785,`blockquote`)(1786,`p`),Tk(1787,`Por padrão o valor é `),Jc(1788,`code`),Tk(1789,`0`),Zg(),Tk(1790,`.`),Zg()()()()(),Jc(1791,`h4`,41)(1792,`code`,5),Tk(1793,`PoUploadLiterals`),Zg()(),Jc(1794,`div`,2)(1795,`p`),Tk(1796,`Interface para definição das literais usadas no `),Jc(1797,`code`),Tk(1798,`po-upload`),Zg(),Tk(1799,`.`),Zg()(),Jc(1800,`h4`,10),Tk(1801,`Propriedades`),Zg(),Jc(1802,`table`,11)(1803,`tr`,12)(1804,`th`,13),Tk(1805,`Nome`),Zg(),Jc(1806,`th`,13),Tk(1807,`Tipo`),Zg(),Jc(1808,`th`,13),Tk(1809,`Descrição`),Zg()(),Jc(1810,`tr`,14)(1811,`td`,15)(1812,`div`,23)(1813,`span`,24),Tk(1814,` close`),_u(1815,`br`),Zg()()(),Jc(1816,`td`,19)(1817,`code`,25),Tk(1818,`string`),Zg()(),Jc(1819,`td`,22)(1820,`em`)(1821,`strong`),Tk(1822,`(opcional)`),Zg()(),Jc(1823,`p`),Tk(1824,`Texto do leitor de tela ao focar no ícone de fechar.`),Zg()()(),Jc(1825,`tr`,14)(1826,`td`,15)(1827,`div`,23)(1828,`span`,24),Tk(1829,` continue`),_u(1830,`br`),Zg()()(),Jc(1831,`td`,19)(1832,`code`,25),Tk(1833,`string`),Zg()(),Jc(1834,`td`,22)(1835,`em`)(1836,`strong`),Tk(1837,`(opcional)`),Zg()(),Jc(1838,`p`),Tk(1839,`Texto do botão padrão do modal de pré-visualizar.`),Zg()()(),Jc(1840,`tr`,14)(1841,`td`,15)(1842,`div`,23)(1843,`span`,24),Tk(1844,` doneText`),_u(1845,`br`),Zg()()(),Jc(1846,`td`,19)(1847,`code`,25),Tk(1848,`string`),Zg()(),Jc(1849,`td`,22)(1850,`em`)(1851,`strong`),Tk(1852,`(opcional)`),Zg()(),Jc(1853,`p`),Tk(1854,`Texto a ser exibido no container de informação quando o estado for de sucesso.`),Zg()()(),Jc(1855,`tr`,14)(1856,`td`,15)(1857,`div`,23)(1858,`span`,24),Tk(1859,` dragFilesHere`),_u(1860,`br`),Zg()()(),Jc(1861,`td`,19)(1862,`code`,25),Tk(1863,`string`),Zg()(),Jc(1864,`td`,22)(1865,`em`)(1866,`strong`),Tk(1867,`(opcional)`),Zg()(),Jc(1868,`p`),Tk(1869,`Texto indicativo para a área onde os arquivos devem ser arrastados quando utilizada a propriedade `),Jc(1870,`code`),Tk(1871,`p-drag-drop`),Zg(),Tk(1872,`.`),Zg()()(),Jc(1873,`tr`,14)(1874,`td`,15)(1875,`div`,23)(1876,`span`,24),Tk(1877,` dragFoldersHere`),_u(1878,`br`),Zg()()(),Jc(1879,`td`,19)(1880,`code`,25),Tk(1881,`string`),Zg()(),Jc(1882,`td`,22)(1883,`em`)(1884,`strong`),Tk(1885,`(opcional)`),Zg()(),Jc(1886,`p`),Tk(1887,`Texto indicativo para a área onde os diretórios devem ser arrastados quando utilizada a propriedade `),Jc(1888,`code`),Tk(1889,`p-drag-drop`),Zg(),Tk(1890,`.`),Zg()()(),Jc(1891,`tr`,14)(1892,`td`,15)(1893,`div`,23)(1894,`span`,24),Tk(1895,` dropFilesHere`),_u(1896,`br`),Zg()()(),Jc(1897,`td`,19)(1898,`code`,25),Tk(1899,`string`),Zg()(),Jc(1900,`td`,22)(1901,`em`)(1902,`strong`),Tk(1903,`(opcional)`),Zg()(),Jc(1904,`p`),Tk(1905,`Texto indicativo para a área onde os arquivos devem ser soltos quando utilizada a propriedade `),Jc(1906,`code`),Tk(1907,`p-drag-drop`),Zg()()()(),Jc(1908,`tr`,14)(1909,`td`,15)(1910,`div`,23)(1911,`span`,24),Tk(1912,` dropFoldersHere`),_u(1913,`br`),Zg()()(),Jc(1914,`td`,19)(1915,`code`,25),Tk(1916,`string`),Zg()(),Jc(1917,`td`,22)(1918,`em`)(1919,`strong`),Tk(1920,`(opcional)`),Zg()(),Jc(1921,`p`),Tk(1922,`Texto indicativo para a área onde os diretórios devem ser soltos quando utilizada a propriedade `),Jc(1923,`code`),Tk(1924,`p-drag-drop`),Zg(),Tk(1925,`.`),Zg()()(),Jc(1926,`tr`,14)(1927,`td`,15)(1928,`div`,23)(1929,`span`,24),Tk(1930,` errorOccurred`),_u(1931,`br`),Zg()()(),Jc(1932,`td`,19)(1933,`code`,25),Tk(1934,`string`),Zg()(),Jc(1935,`td`,22)(1936,`em`)(1937,`strong`),Tk(1938,`(opcional)`),Zg()(),Jc(1939,`p`),Tk(1940,`Texto a ser exibido quando ocorrer erro no envio do arquivo.`),Zg()()(),Jc(1941,`tr`,14)(1942,`td`,15)(1943,`div`,23)(1944,`span`,24),Tk(1945,` files`),_u(1946,`br`),Zg()()(),Jc(1947,`td`,19)(1948,`code`,25),Tk(1949,`string`),Zg()(),Jc(1950,`td`,22)(1951,`em`)(1952,`strong`),Tk(1953,`(opcional)`),Zg()(),Jc(1954,`p`),Tk(1955,`Parâmetro `),Jc(1956,`em`),Tk(1957,`files`),Zg(),Tk(1958,` para o texto de exibição quando arrastado um arquivo para um local inválido com a opção de `),Jc(1959,`em`),Tk(1960,`dragDrop`),Zg(),Tk(1961,`.`),Zg()()(),Jc(1962,`tr`,14)(1963,`td`,15)(1964,`div`,23)(1965,`span`,24),Tk(1966,` folders`),_u(1967,`br`),Zg()()(),Jc(1968,`td`,19)(1969,`code`,25),Tk(1970,`string`),Zg()(),Jc(1971,`td`,22)(1972,`em`)(1973,`strong`),Tk(1974,`(opcional)`),Zg()(),Jc(1975,`p`),Tk(1976,`Parâmetro `),Jc(1977,`em`),Tk(1978,`folders`),Zg(),Tk(1979,` para o texto de exibição quando arrastado um arquivo para um local inválido com a opção de `),Jc(1980,`em`),Tk(1981,`dragDrop`),Zg(),Tk(1982,`.`),Zg()()(),Jc(1983,`tr`,14)(1984,`td`,15)(1985,`div`,23)(1986,`span`,24),Tk(1987,` invalidDropArea`),_u(1988,`br`),Zg()()(),Jc(1989,`td`,19)(1990,`code`,25),Tk(1991,`string`),Zg()(),Jc(1992,`td`,22)(1993,`em`)(1994,`strong`),Tk(1995,`(opcional)`),Zg()(),Jc(1996,`p`),Tk(1997,`Texto exibido caso o usuário arrastar um arquivo para um local inválido ao utilizar a opção de `),Jc(1998,`em`),Tk(1999,`dragDrop`),Zg(),Tk(2e3,`.`),Zg()()(),Jc(2001,`tr`,14)(2002,`td`,15)(2003,`div`,23)(2004,`span`,24),Tk(2005,` preview`),_u(2006,`br`),Zg()()(),Jc(2007,`td`,19)(2008,`code`,25),Tk(2009,`string`),Zg()(),Jc(2010,`td`,22)(2011,`em`)(2012,`strong`),Tk(2013,`(opcional)`),Zg()(),Jc(2014,`p`),Tk(2015,`Título do modal de pré-visualizar.`),Zg()()(),Jc(2016,`tr`,14)(2017,`td`,15)(2018,`div`,23)(2019,`span`,24),Tk(2020,` selectFile`),_u(2021,`br`),Zg()()(),Jc(2022,`td`,19)(2023,`code`,25),Tk(2024,`string`),Zg()(),Jc(2025,`td`,22)(2026,`em`)(2027,`strong`),Tk(2028,`(opcional)`),Zg()(),Jc(2029,`p`),Tk(2030,`Texto exibido no label do botão de seleção dos arquivos.`),Zg()()(),Jc(2031,`tr`,14)(2032,`td`,15)(2033,`div`,23)(2034,`span`,24),Tk(2035,` selectFiles`),_u(2036,`br`),Zg()()(),Jc(2037,`td`,19)(2038,`code`,25),Tk(2039,`string`),Zg()(),Jc(2040,`td`,22)(2041,`em`)(2042,`strong`),Tk(2043,`(opcional)`),Zg()(),Jc(2044,`p`),Tk(2045,`Texto exibido no label do botão de seleção dos arquivos ao utilizar a propriedade `),Jc(2046,`code`),Tk(2047,`p-multiple`),Zg(),Tk(2048,`.`),Zg()()(),Jc(2049,`tr`,14)(2050,`td`,15)(2051,`div`,23)(2052,`span`,24),Tk(2053,` selectFilesOnComputer`),_u(2054,`br`),Zg()()(),Jc(2055,`td`,19)(2056,`code`,25),Tk(2057,`string`),Zg()(),Jc(2058,`td`,22)(2059,`em`)(2060,`strong`),Tk(2061,`(opcional)`),Zg()(),Jc(2062,`p`),Tk(2063,`Texto utilizado para indicar a possibilidade de sele\xE7\xE3o de arquivos na \xE1rea onde podem ser arrastados os arquivos
ao utilizar a op\xE7\xE3o de `),Jc(2064,`em`),Tk(2065,`dragDrop`),Zg(),Tk(2066,`.`),Zg()()(),Jc(2067,`tr`,14)(2068,`td`,15)(2069,`div`,23)(2070,`span`,24),Tk(2071,` selectFolder`),_u(2072,`br`),Zg()()(),Jc(2073,`td`,19)(2074,`code`,25),Tk(2075,`string`),Zg()(),Jc(2076,`td`,22)(2077,`em`)(2078,`strong`),Tk(2079,`(opcional)`),Zg()(),Jc(2080,`p`),Tk(2081,`Texto exibido no label do botão de seleção dos arquivos ao utilizar a propriedade `),Jc(2082,`code`),Tk(2083,`p-directory`),Zg(),Tk(2084,`.`),Zg()()(),Jc(2085,`tr`,14)(2086,`td`,15)(2087,`div`,23)(2088,`span`,24),Tk(2089,` selectFolderOnComputer`),_u(2090,`br`),Zg()()(),Jc(2091,`td`,19)(2092,`code`,25),Tk(2093,`string`),Zg()(),Jc(2094,`td`,22)(2095,`em`)(2096,`strong`),Tk(2097,`(opcional)`),Zg()(),Jc(2098,`p`),Tk(2099,`Texto utilizado para indicar a possibilidade de sele\xE7\xE3o de diret\xF3rio na \xE1rea onde podem ser arrastados os arquivos
ao utilizar a op\xE7\xE3o de `),Jc(2100,`em`),Tk(2101,`dragDrop`),Zg(),Tk(2102,`.`),Zg()()(),Jc(2103,`tr`,14)(2104,`td`,15)(2105,`div`,23)(2106,`span`,24),Tk(2107,` sentWithSuccess`),_u(2108,`br`),Zg()()(),Jc(2109,`td`,19)(2110,`code`,25),Tk(2111,`string`),Zg()(),Jc(2112,`td`,22)(2113,`em`)(2114,`strong`),Tk(2115,`(opcional)`),Zg()(),Jc(2116,`p`),Tk(2117,`Texto a ser exibido quando o envio do arquivo for realizado com sucesso.`),Zg()()(),Jc(2118,`tr`,14)(2119,`td`,15)(2120,`div`,23)(2121,`span`,24),Tk(2122,` startSending`),_u(2123,`br`),Zg()()(),Jc(2124,`td`,19)(2125,`code`,25),Tk(2126,`string`),Zg()(),Jc(2127,`td`,22)(2128,`em`)(2129,`strong`),Tk(2130,`(opcional)`),Zg()(),Jc(2131,`p`),Tk(2132,`Texto exibido no label do botão para iniciar o envio dos arquivos.`),Zg()()(),Jc(2133,`tr`,14)(2134,`td`,15)(2135,`div`,23)(2136,`span`,24),Tk(2137,` thumbnail`),_u(2138,`br`),Zg()()(),Jc(2139,`td`,19)(2140,`code`,25),Tk(2141,`string`),Zg()(),Jc(2142,`td`,22)(2143,`em`)(2144,`strong`),Tk(2145,`(opcional)`),Zg()(),Jc(2146,`p`),Tk(2147,`Texto do leitor da miniatura da imagem.`),Zg()()(),Jc(2148,`tr`,14)(2149,`td`,15)(2150,`div`,23)(2151,`span`,24),Tk(2152,` tryAgain`),_u(2153,`br`),Zg()()(),Jc(2154,`td`,19)(2155,`code`,25),Tk(2156,`string`),Zg()(),Jc(2157,`td`,22)(2158,`em`)(2159,`strong`),Tk(2160,`(opcional)`),Zg()(),Jc(2161,`p`),Tk(2162,`Texto de Tente novamente ao ocorrer erro ao enviar.`),Zg()()(),Jc(2163,`tr`,14)(2164,`td`,15)(2165,`div`,23)(2166,`span`,24),Tk(2167,` uploadingText`),_u(2168,`br`),Zg()()(),Jc(2169,`td`,19)(2170,`code`,25),Tk(2171,`string`),Zg()(),Jc(2172,`td`,22)(2173,`em`)(2174,`strong`),Tk(2175,`(opcional)`),Zg()(),Jc(2176,`p`),Tk(2177,`Texto a ser exibido no container de informação quando o estado for enviando.`),Zg()()()(),Jc(2178,`h4`,41)(2179,`code`,5),Tk(2180,`PoProgressAction`),Zg()(),Jc(2181,`div`,2)(2182,`p`),Tk(2183,`Interface para as ações dos componentes po-progress e po-upload.`),Zg()(),Jc(2184,`h4`,10),Tk(2185,`Propriedades`),Zg(),Jc(2186,`table`,11)(2187,`tr`,12)(2188,`th`,13),Tk(2189,`Nome`),Zg(),Jc(2190,`th`,13),Tk(2191,`Tipo`),Zg(),Jc(2192,`th`,13),Tk(2193,`Descrição`),Zg()(),Jc(2194,`tr`,14)(2195,`td`,15)(2196,`div`,23)(2197,`span`,24),Tk(2198,` disabled`),_u(2199,`br`),Zg()()(),Jc(2200,`td`,19)(2201,`code`,26),Tk(2202,`boolean `),Zg(),Jc(2203,`code`,43),Tk(2204,` Function`),Zg()(),Jc(2205,`td`,22)(2206,`em`)(2207,`strong`),Tk(2208,`(opcional)`),Zg()(),Jc(2209,`p`),Tk(2210,`Função que deve retornar um booleano para habilitar ou desabilitar a ação para o registro selecionado.`),Zg(),Jc(2211,`p`),Tk(2212,`Também é possível informar diretamente um valor booleano que vai habilitar ou desabilitar a ação para todos os registros.`),Zg()()(),Jc(2213,`tr`,14)(2214,`td`,15)(2215,`div`,23)(2216,`span`,24),Tk(2217,` icon`),_u(2218,`br`),Zg()()(),Jc(2219,`td`,19)(2220,`code`,25),Tk(2221,`string `),Zg(),Jc(2222,`code`,44),Tk(2223,` TemplateRef<void>`),Zg()(),Jc(2224,`td`,22)(2225,`em`)(2226,`strong`),Tk(2227,`(opcional)`),Zg()(),Jc(2228,`p`),Tk(2229,`Define um ícone que será exibido ao lado esquerdo do rótulo.`),Zg(),Jc(2230,`p`),Tk(2231,`É possível usar qualquer um dos ícones da `),Jc(2232,`a`,45),Tk(2233,`Biblioteca de ícones`),Zg(),Tk(2234,`. conforme exemplo abaixo:`),Zg(),Jc(2235,`pre`)(2236,`code`),Tk(2237,`<po-component
 [p-property]="[{ label: 'PHOSPHOR ICON', icon: 'an an-newspaper' }]">
</po-component>
`),Zg()(),Jc(2238,`p`),Tk(2239,`Também é possível utilizar outras fontes de ícones, por exemplo a biblioteca Font Awesome, da seguinte forma:`),Zg(),Jc(2240,`pre`)(2241,`code`),Tk(2242,`<po-component
 [p-property]="[{ label: 'FA ICON', icon: 'fa fa-icon-podcast' }]">
</po-component>
`),Zg()(),Jc(2243,`p`),Tk(2244,`Outra opção seria a customização do ícone através do `),Jc(2245,`code`),Tk(2246,`TemplateRef`),Zg(),Tk(2247,`, conforme exemplo abaixo:
component.html:`),Zg(),Jc(2248,`pre`)(2249,`code`),Tk(2250,`<ng-template #iconTemplate>
  <ion-icon name="heart"></ion-icon>
</ng-template>

<po-component [p-property]="myProperty"></po-component>
`),Zg()(),Jc(2251,`p`),Tk(2252,`component.ts:`),Zg(),Jc(2253,`pre`)(2254,`code`),Tk(2255,`@ViewChild('iconTemplate', { static: true } ) iconTemplate : TemplateRef<void>;

myProperty = [
 {
   label: 'FA ICON',
   icon: this.iconTemplate
 }
];
`),Zg()()()(),Jc(2256,`tr`,14)(2257,`td`,15)(2258,`div`,23)(2259,`span`,24),Tk(2260,` label`),_u(2261,`br`),Zg()()(),Jc(2262,`td`,19)(2263,`code`,25),Tk(2264,`string`),Zg()(),Jc(2265,`td`,22)(2266,`em`)(2267,`strong`),Tk(2268,`(opcional)`),Zg()(),Jc(2269,`p`),Tk(2270,`Rótulo da ação.`),Zg()()(),Jc(2271,`tr`,14)(2272,`td`,15)(2273,`div`,23)(2274,`span`,24),Tk(2275,` type`),_u(2276,`br`),Zg()()(),Jc(2277,`td`,19)(2278,`code`,25),Tk(2279,`string`),Zg()(),Jc(2280,`td`,22)(2281,`em`)(2282,`strong`),Tk(2283,`(opcional)`),Zg()(),Jc(2284,`p`),Tk(2285,`Define a cor do item, sendo `),Jc(2286,`code`),Tk(2287,`default`),Zg(),Tk(2288,` o padrão.`),Zg(),Jc(2289,`p`),Tk(2290,`Valores válidos:`),Zg(),Jc(2291,`ul`)(2292,`li`)(2293,`code`),Tk(2294,`default`),Zg()(),Jc(2295,`li`)(2296,`code`),Tk(2297,`danger`),Zg(),Tk(2298,` - indicado para ações exclusivas (excluir, sair).`),Zg()()()(),Jc(2299,`tr`,14)(2300,`td`,15)(2301,`div`,23)(2302,`span`,24),Tk(2303,` visible`),_u(2304,`br`),Zg()()(),Jc(2305,`td`,19)(2306,`code`,26),Tk(2307,`boolean `),Zg(),Jc(2308,`code`,43),Tk(2309,` Function`),Zg()(),Jc(2310,`td`,22)(2311,`em`)(2312,`strong`),Tk(2313,`(opcional)`),Zg()(),Jc(2314,`p`),Tk(2315,`Define se a ação será visível.`),Zg(),Jc(2316,`blockquote`)(2317,`p`),Tk(2318,`Caso o valor não seja especificado a ação será visível.`),Zg()(),Jc(2319,`p`),Tk(2320,`Opções para tornar a ação visível ou não:`),Zg(),Jc(2321,`ul`)(2322,`li`)(2323,`p`),Tk(2324,`Função que deve retornar um booleano.`),Zg()(),Jc(2325,`li`)(2326,`p`),Tk(2327,`Informar diretamente um valor booleano.`),Zg()()()()()()())},dependencies:[P],encapsulation:2,changeDetection:1})}return a})();function vt(a,oe){if(a&1){let d=ZO();Jc(0,`po-tab`,4),vt$1(`p-click`,function(){H_(d);let i=nk();return $_(i.changeTab(`web`))}),_u(1,`sample-po-upload-basic-view`)(2,`sample-po-upload-labs-view`)(3,`sample-po-upload-resume-view`)(4,`sample-po-upload-rs-view`)(5,`sample-po-upload-download-view`)(6,`sample-po-upload-preview-view`),Zg()}if(a&2){let d=nk();Ab(`p-active`,d.activeTab===`web`)}}var ft=[{path:``,component:(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=6;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(d,r){this.route=d,this.router=r}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(d=>{let r=d.view;this.hidePoWebSample=this.samplesLength===0,this.activeTab=this.hidePoWebSample?`doc`:r||`web`})}changeTab(d){this.router.navigate([],{queryParams:{view:d},queryParamsHandling:`merge`}),this.activeTab=d}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(r){return new(r||a)(I(ar),I(An))};static ɵcmp=Jn({type:a,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:3,consts:[[`p-title`,`Upload`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Exemplos`,3,`p-active`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-active`]],template:function(r,i){r&1&&(Jc(0,`po-page-default`,0)(1,`po-tabs`,1),VO(2,vt,7,1,`po-tab`,2),Jc(3,`po-tab`,3),vt$1(`p-click`,function(){return i.changeTab(`doc`)}),_u(4,`sample-po-upload-doc`),Zg()()()),r&2&&(Ab(`p-actions`,i.actions),Ig(2),BO(i.hidePoWebSample?-1:2),Ig(),Ab(`p-active`,i.activeTab===`doc`))},dependencies:[Mze,tre,are,Te,Ue,Ae,ze,Ve,je,Be],encapsulation:2,changeDetection:1})}return a})()}];var We=(()=>{class a{static ɵfac=function(r){return new(r||a)};static ɵmod=ge({type:a});static ɵinj=de({imports:[WV.forChild(ft),WV]})}return a})();var un=(()=>{class a{static ɵfac=function(r){return new(r||a)};static ɵmod=ge({type:a});static ɵinj=de({imports:[M,We]})}return a})();export{un as DocPoUploadModule};