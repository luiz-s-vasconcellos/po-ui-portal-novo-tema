import{m as P,p as M}from"./main-DMA7KEAR.js";import{$i as dF,Ar as I,At as Zte,D as Gae,Dr as Gk,E as G4,F as Joe,G as Nf,Hr as Lk,Ii as WL,Ir as Kb,It as bae,Ka as qk,L as Koe,Lr as Kg,Ni as Vt,Oi as VO,Pi as W0,Pn as tre,Pr as Jn,Pt as are,Qa as tm,Qi as c1,T as Fze,Ti as U_,Ui as YO,Va as p,W as Mze,Wi as Yb,Wr as MZ,Zi as ar,Zr as No,an as ia,ar as An,bi as TZ,bn as oi,ci as QP,cr as B_,da as gk,do as xo,gi as Rb,go as z0,ha as i1,ht as Tt,io as vu,j as I4,ji as Vk,k as Goe,kt as Zoe,li as Qc,na as de,oo as wg,qi as ZL,ro as vt$1,rr as AZ,rt as Ru,sa as ek,si as QL,sn as j4,t as $4,tt as R4,ua as ge,va as ik,vi as Sk,wr as GV,xi as Tk,xr as FO,yr as Du}from"./chunk-DtUf9FxZ.js";var Fe=(()=>{class a{static ɵfac=function(r){return new(r||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-upload-basic`]],standalone:!1,decls:1,vars:0,consts:[[`name`,`upload`,`p-label`,`PO Upload`,`p-url`,`https://po-sample-api.onrender.com/v1/uploads/addFile`]],template:function(r,i){r&1&&vu(0,`po-upload`,0)},dependencies:[$4],encapsulation:2,changeDetection:1})}return a})();var He=a=>({"docs-sample-code-tabs":a});var Te=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-upload-basic-view`]],standalone:!1,decls:26,vars:6,consts:[[`id`,`sample-po-upload-basic`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`data-file`,`sample-po-upload-basic/sample-po-upload-basic.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-upload-basic/sample-po-upload-basic.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Upload Basic`),Kg(),Qc(4,`a`,2),vt$1(`click`,function(){return i.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-upload-basic/sample-po-upload-basic.component.html`),Kg(),Qc(13,`div`,7)(14,`pre`,8),Sk(15,`<po-upload name="upload" p-label="PO Upload" p-url="https://po-sample-api.onrender.com/v1/uploads/addFile"> </po-upload>
`),Kg()()()(),Qc(16,`po-tab`,9)(17,`div`)(18,`label`,6),Sk(19,`sample-po-upload-basic/sample-po-upload-basic.component.ts`),Kg(),Qc(20,`div`,10)(21,`pre`,11),Sk(22,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-upload-basic',
  templateUrl: 'sample-po-upload-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoUploadBasicComponent {}
`),Kg()()()()()(),Qc(23,`div`,12),vu(24,`sample-po-upload-basic`),Kg(),vu(25,`hr`)),r&2&&(wg(5),gk(`po-icon `+i.sampleCodeButtonIcon),wg(),tm(` `,i.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,He,i.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,Fe],encapsulation:2,changeDetection:1})}return a})();function Ge(a,ae){if(a&1&&(Qc(0,`div`)(1,`po-widget`,22)(2,`form`,23)(3,`po-input`,24),z0(),Kg(),Qc(4,`po-select`,25),z0(),Kg(),Qc(5,`po-select`,26),z0(),Kg(),Qc(6,`po-switch`,27),z0(),Kg(),Qc(7,`po-switch`,28),z0(),Kg()()()()),a&2){let p=ek();wg(2),Rb(`formGroup`,p.actionForm),wg(),W0(),wg(),Rb(`p-options`,p.iconOptions),W0(),wg(),Rb(`p-options`,p.typeOptions),W0(),wg(),W0(),wg(),W0()}}var qe=(()=>{class a{fb=p(c1);helperText;allowedExtensions;customLiterals;dragDropHeight;event;formField;help;label;literals;modalActions;maxFiles;maxSize;minSize;properties;restrictions;upload;url;headers;headersLabs;action;customModalActions;actionForm;size;propertiesOptions=[{value:`autoupload`,label:`Automatic upload`},{value:`directory`,label:`Directory`},{value:`disabled`,label:`Disabled`},{value:`disabledRemoveFile`,label:`Disabled Remove File`},{value:`dragDrop`,label:`Drag Drop`},{value:`requiredUrl`,label:`required Url`},{value:`multiple`,label:`Multiple upload`},{value:`optional`,label:`Optional`},{value:`required`,label:`Required`},{value:`showRequired`,label:`Show Required`},{value:`restrictionsInfo`,label:`Hide Restrictions Info`},{value:`selectButton`,label:`Hide Select Files Button`},{value:`sendButton`,label:`Hide Send Files Button`},{value:`showCustomAction`,label:`Add Custom Action to Progress`},{value:`labelTextWrap`,label:`Label Text Wrap`},{value:`compactLabel`,label:`Compact Label`},{value:`showThumbnail`,label:`Show Thumbnail`},{value:`loading`,label:`Loading`}];sizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];typeOptions=[{label:`Danger`,value:`danger`},{label:`Default`,value:`default`}];iconOptions=[{value:`an an-download`,label:`an an-download`},{value:`an an-Server`,label:`an an-Server`},{value:`an an-upload`,label:`an an-upload`},{value:`an an-share`,label:`an an-share`}];constructor(){this.initializeActionForm()}initializeActionForm(){this.actionForm=this.fb.group({label:[``],icon:[``],type:[`default`],visible:[!0],disabled:[!1]})}ngOnInit(){this.restore(),this.actionForm.valueChanges.subscribe(p=>{this.updateAction(p)})}updateAction(p){this.action=p}changeEvent(p){this.event=p}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals)}catch(p){this.customLiterals=void 0}}changeModalActions(){try{this.customModalActions=JSON.parse(this.modalActions)}catch(p){this.customModalActions=void 0}}onChangeHeaders(p){try{this.headers=JSON.parse(p)}catch(r){this.headers=void 0}}onChangeExtension(){let p=this.allowedExtensions.split(`,`).map(r=>r.trim());this.restrictions=Object.assign({},this.restrictions,{allowedExtensions:p})}onChangeMaxFiles(p){this.restrictions=Object.assign({},this.restrictions,{maxFiles:p})}onChangeMaxSize(p){this.restrictions=Object.assign({},this.restrictions,{maxFileSize:this.getValueInBytes(p)})}onChangeMinSize(p){this.restrictions=Object.assign({},this.restrictions,{minFileSize:this.getValueInBytes(p)})}restore(){this.helperText=``,this.allowedExtensions=void 0,this.customLiterals=void 0,this.dragDropHeight=void 0,this.event=void 0,this.formField=void 0,this.label=void 0,this.help=void 0,this.literals=``,this.modalActions=``,this.maxFiles=void 0,this.maxSize=void 0,this.minSize=void 0,this.properties=[],this.restrictions={},this.upload=void 0,this.url=`https://po-sample-api.onrender.com/v1/uploads/addFile`,this.headers=void 0,this.headersLabs=void 0,this.actionForm.reset({type:`default`,visible:!0}),this.action={label:``,type:`default`},this.customModalActions=[],this.size=`medium`}getValueInBytes(p){return 1048576*p}static ɵfac=function(r){return new(r||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-upload-labs`]],standalone:!1,decls:29,vars:53,consts:[[`fRestrictions`,`ngForm`],[`name`,`upload`,3,`ngModelChange`,`p-custom-action-click`,`p-error`,`p-keydown`,`p-success`,`p-upload`,`p-open-modal-preview`,`p-remove`,`ngModel`,`p-helper`,`p-auto-upload`,`p-directory`,`p-disabled`,`p-required-url`,`p-disabled-remove-file`,`p-drag-drop`,`p-drag-drop-height`,`p-form-field`,`p-help`,`p-hide-select-button`,`p-hide-restrictions-info`,`p-hide-send-button`,`p-label`,`p-literals`,`p-loading`,`p-multiple`,`p-optional`,`p-required`,`p-show-required`,`p-show-thumbnail`,`p-restrictions`,`p-size`,`p-url`,`p-headers`,`p-custom-action`,`p-label-text-wrap`,`p-compact-label`,`p-custom-modal-actions`],[1,`po-row`],[`p-label`,`Model`,1,`po-md-6`,3,`p-value`],[`p-label`,`Event`,1,`po-md-6`,3,`p-value`],[`name`,`allowedExtensions`,`p-help`,`Digite as extensões permitidas separadas por vírgula`,`p-label`,`Allowed Extensions`,`p-placeholder`,`.png, .jpeg, .jpg`,1,`po-md-6`,3,`ngModelChange`,`p-change`,`ngModel`],[`name`,`maxFiles`,`p-clean`,``,`p-help`,`Requer p-multiple habilitado`,`p-label`,`Max Files`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`p-change`,`ngModel`],[`name`,`dragDropHeight`,`p-clean`,``,`p-help`,`Altura da área de arrastar e soltar`,`p-label`,`Drag Drop Height`,`p-min`,`160`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`name`,`minSize`,`p-clean`,``,`p-help`,`Em megabytes`,`p-label`,`Min File Size`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`p-change`,`ngModel`],[`name`,`maxSize`,`p-clean`,``,`p-help`,`Em megabytes`,`p-label`,`Max File Size`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`p-change`,`ngModel`],[`name`,`label`,`p-clean`,``,`p-label`,`Label`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`help`,`p-clean`,``,`p-label`,`Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`helperText`,`p-clean`,``,`p-label`,`Additional Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`formField`,`p-clean`,``,`p-label`,`Form Field`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`url`,`p-clean`,``,`p-label`,`URL`,`p-required`,``,1,`po-md-12`,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`headers`,`p-help`,`Ex.: {"Authorization": "12312414"}`,`p-label`,`Headers`,1,`po-md-12`,`po-lg-6`,3,`ngModelChange`,`p-change`,`ngModel`],[`name`,`literals`,`p-help`,`Ex.: {"selectFile": "Select file", "deleteFile": "Delete file", "cancel": "Cancel sending"}`,`p-label`,`Literals`,1,`po-md-12`,`po-lg-6`,3,`ngModelChange`,`p-change`,`ngModel`],[`name`,`customModalActions`,`p-help`,`Ex.: [{"label": "Label", "disabled": false}]`,`p-label`,`Custom Modal Actions`,1,`po-md-12`,`po-lg-6`,3,`ngModelChange`,`p-change`,`ngModel`,`p-disabled`],[`name`,`properties`,`p-columns`,`4`,`p-help`,`Select any options`,`p-label`,`Properties`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`size`,`p-columns`,`4`,`p-label`,`Size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[1,`po-row`,`po-mt-1`],[`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`],[`p-title`,`Action Button`],[1,`po-row`,3,`formGroup`],[`formControlName`,`label`,`p-label`,`Label`,1,`po-md-6`,`po-lg-4`],[`formControlName`,`icon`,`p-label`,`Icon`,1,`po-md-6`,`po-lg-3`,3,`p-options`],[`formControlName`,`type`,`p-label`,`Type`,1,`po-md-6`,`po-lg-3`,3,`p-options`],[`formControlName`,`disabled`,`p-label`,`Disabled`,1,`po-md-3`,`po-lg-2`],[`formControlName`,`visible`,`p-label`,`Visible`,1,`po-md-3`,`po-lg-2`]],template:function(r,i){if(r&1){let m=YO();Qc(0,`po-upload`,1),z0(),Kb(`ngModelChange`,function(l){return B_(m),Tk(i.upload,l)||(i.upload=l),U_(l)}),vt$1(`p-custom-action-click`,function(){return i.changeEvent(`p-custom-action-click`)})(`p-error`,function(){return i.changeEvent(`p-error`)})(`p-keydown`,function(){return i.changeEvent(`p-keydown`)})(`p-success`,function(){return i.changeEvent(`p-success`)})(`p-upload`,function(){return i.changeEvent(`p-upload`)})(`p-upload`,function(){return i.changeEvent(`p-upload`)})(`p-open-modal-preview`,function(){return i.changeEvent(`p-open-modal-preview`)})(`p-remove`,function(){return i.changeEvent(`p-remove`)}),Kg(),vu(1,`po-divider`),Qc(2,`div`,2),vu(3,`po-info`,3),Gk(4,`json`),vu(5,`po-info`,4),Kg(),vu(6,`po-divider`),Qc(7,`div`,2)(8,`form`,null,0)(10,`po-input`,5),z0(),Kb(`ngModelChange`,function(l){return B_(m),Tk(i.allowedExtensions,l)||(i.allowedExtensions=l),U_(l)}),vt$1(`p-change`,function(){return i.onChangeExtension()}),Kg(),Qc(11,`po-number`,6),z0(),Kb(`ngModelChange`,function(l){return B_(m),Tk(i.maxFiles,l)||(i.maxFiles=l),U_(l)}),vt$1(`p-change`,function(){return i.onChangeMaxFiles(i.maxFiles)}),Kg(),Qc(12,`po-number`,7),z0(),Kb(`ngModelChange`,function(l){return B_(m),Tk(i.dragDropHeight,l)||(i.dragDropHeight=l),U_(l)}),Kg(),Qc(13,`po-number`,8),z0(),Kb(`ngModelChange`,function(l){return B_(m),Tk(i.minSize,l)||(i.minSize=l),U_(l)}),vt$1(`p-change`,function(){return i.onChangeMinSize(i.minSize)}),Kg(),Qc(14,`po-number`,9),z0(),Kb(`ngModelChange`,function(l){return B_(m),Tk(i.maxSize,l)||(i.maxSize=l),U_(l)}),vt$1(`p-change`,function(){return i.onChangeMaxSize(i.maxSize)}),Kg(),vu(15,`po-divider`),Qc(16,`po-input`,10),z0(),Kb(`ngModelChange`,function(l){return B_(m),Tk(i.label,l)||(i.label=l),U_(l)}),Kg(),Qc(17,`po-input`,11),z0(),Kb(`ngModelChange`,function(l){return B_(m),Tk(i.help,l)||(i.help=l),U_(l)}),Kg(),Qc(18,`po-input`,12),z0(),Kb(`ngModelChange`,function(l){return B_(m),Tk(i.helperText,l)||(i.helperText=l),U_(l)}),Kg(),Qc(19,`po-input`,13),z0(),Kb(`ngModelChange`,function(l){return B_(m),Tk(i.formField,l)||(i.formField=l),U_(l)}),Kg(),Qc(20,`po-input`,14),z0(),Kb(`ngModelChange`,function(l){return B_(m),Tk(i.url,l)||(i.url=l),U_(l)}),Kg(),Qc(21,`po-input`,15),z0(),Kb(`ngModelChange`,function(l){return B_(m),Tk(i.headersLabs,l)||(i.headersLabs=l),U_(l)}),vt$1(`p-change`,function(l){return i.onChangeHeaders(l)}),Kg(),Qc(22,`po-input`,16),z0(),Kb(`ngModelChange`,function(l){return B_(m),Tk(i.literals,l)||(i.literals=l),U_(l)}),vt$1(`p-change`,function(){return i.changeLiterals()}),Kg(),Qc(23,`po-input`,17),z0(),Kb(`ngModelChange`,function(l){return B_(m),Tk(i.modalActions,l)||(i.modalActions=l),U_(l)}),vt$1(`p-change`,function(){return i.changeModalActions()}),Kg(),Qc(24,`po-checkbox-group`,18),z0(),Kb(`ngModelChange`,function(l){return B_(m),Tk(i.properties,l)||(i.properties=l),U_(l)}),Kg(),FO(25,Ge,8,3,`div`),Qc(26,`po-radio-group`,19),z0(),Kb(`ngModelChange`,function(l){return B_(m),Tk(i.size,l)||(i.size=l),U_(l)}),Kg(),Qc(27,`div`,20)(28,`po-button`,21),vt$1(`p-click`,function(){return i.restore()}),Kg()()()()}r&2&&(Yb(`ngModel`,i.upload),Rb(`p-helper`,i.helperText)(`p-auto-upload`,i.properties.includes(`autoupload`))(`p-directory`,i.properties.includes(`directory`))(`p-disabled`,i.properties.includes(`disabled`))(`p-required-url`,i.properties.includes(`requiredUrl`))(`p-disabled-remove-file`,i.properties.includes(`disabledRemoveFile`))(`p-drag-drop`,i.properties.includes(`dragDrop`))(`p-drag-drop-height`,i.dragDropHeight)(`p-form-field`,i.formField)(`p-help`,i.help)(`p-hide-select-button`,i.properties.includes(`selectButton`))(`p-hide-restrictions-info`,i.properties.includes(`restrictionsInfo`))(`p-hide-send-button`,i.properties.includes(`sendButton`))(`p-label`,i.label)(`p-literals`,i.customLiterals)(`p-loading`,i.properties.includes(`loading`))(`p-multiple`,i.properties.includes(`multiple`))(`p-optional`,i.properties.includes(`optional`))(`p-required`,i.properties.includes(`required`))(`p-show-required`,i.properties.includes(`showRequired`))(`p-show-thumbnail`,i.properties.includes(`showThumbnail`))(`p-restrictions`,i.restrictions)(`p-size`,i.size)(`p-url`,i.url)(`p-headers`,i.headers)(`p-custom-action`,i.action)(`p-label-text-wrap`,i.properties?.includes(`labelTextWrap`))(`p-compact-label`,i.properties?.includes(`compactLabel`))(`p-custom-modal-actions`,i.customModalActions),W0(),wg(3),Rb(`p-value`,qk(4,51,i.upload)),wg(2),Rb(`p-value`,i.event),wg(5),Yb(`ngModel`,i.allowedExtensions),W0(),wg(),Yb(`ngModel`,i.maxFiles),W0(),wg(),Yb(`ngModel`,i.dragDropHeight),W0(),wg(),Yb(`ngModel`,i.minSize),W0(),wg(),Yb(`ngModel`,i.maxSize),W0(),wg(2),Yb(`ngModel`,i.label),W0(),wg(),Yb(`ngModel`,i.help),W0(),wg(),Yb(`ngModel`,i.helperText),W0(),wg(),Yb(`ngModel`,i.formField),W0(),wg(),Yb(`ngModel`,i.url),W0(),wg(),Yb(`ngModel`,i.headersLabs),W0(),wg(),Yb(`ngModel`,i.literals),W0(),wg(),Yb(`ngModel`,i.modalActions),Rb(`p-disabled`,!i.properties.includes(`showThumbnail`)),W0(),wg(),Yb(`ngModel`,i.properties),Rb(`p-options`,i.propertiesOptions),W0(),wg(),VO(i.properties.includes(`showCustomAction`)?25:-1),wg(),Yb(`ngModel`,i.size),Rb(`p-options`,i.sizeOptions),W0())},dependencies:[AZ,MZ,TZ,QL,WL,ZL,i1,oi,Nf,I4,j4,Goe,Zte,Koe,R4,$4,Joe,bae,dF],encapsulation:2,changeDetection:1})}return a})();var Ke=a=>({"docs-sample-code-tabs":a});var ke=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-upload-labs-view`]],standalone:!1,decls:26,vars:6,consts:[[`id`,`sample-po-upload-labs`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`data-file`,`sample-po-upload-labs/sample-po-upload-labs.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-upload-labs/sample-po-upload-labs.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Upload Labs`),Kg(),Qc(4,`a`,2),vt$1(`click`,function(){return i.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-upload-labs/sample-po-upload-labs.component.html`),Kg(),Qc(13,`div`,7)(14,`pre`,8),Sk(15,`<po-upload
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
`),Kg()()()(),Qc(16,`po-tab`,9)(17,`div`)(18,`label`,6),Sk(19,`sample-po-upload-labs/sample-po-upload-labs.component.ts`),Kg(),Qc(20,`div`,10)(21,`pre`,11),Sk(22,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),Kg()()()()()(),Qc(23,`div`,12),vu(24,`sample-po-upload-labs`),Kg(),vu(25,`hr`)),r&2&&(wg(5),gk(`po-icon `+i.sampleCodeButtonIcon),wg(),tm(` `,i.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,Ke,i.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,qe],encapsulation:2,changeDetection:1})}return a})();var Xe=[`formOpportunity`];var Ze=()=>({maxFileSize:`204800`});var Ue=(()=>{class a{poNotification=p(Ru);formOpportunity;biograph;linkedin;name;resume;uploadedResume;ngOnInit(){this.uploadedResume=!1}apply(){this.formOpportunity.reset(),this.uploadedResume=!1,this.poNotification.success(`You were applied successfully`)}resumeUploadError(){this.uploadedResume=!1}resumeUploadSuccess(){this.uploadedResume=!0}static ɵfac=function(r){return new(r||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-upload-resume`]],viewQuery:function(r,i){if(r&1&&Du(Xe,7),r&2){let m;No(m=xo())&&(i.formOpportunity=m.first)}},standalone:!1,decls:12,vars:7,consts:[[`formOpportunity`,`ngForm`],[1,`po-row`],[`name`,`name`,`p-clean`,``,`p-label`,`Full Name`,`p-required`,``,1,`po-md-12`,3,`ngModelChange`,`ngModel`],[`name`,`biograph`,`p-label`,`Biograph`,`p-required`,``,1,`po-md-12`,3,`ngModelChange`,`ngModel`],[`name`,`linkedin`,`p-clean`,``,`p-label`,`LinkedIn URL`,1,`po-md-12`,3,`ngModelChange`,`ngModel`],[`name`,`resume`,`p-label`,`Resume`,`p-required`,``,`p-url`,`https://po-sample-api.onrender.com/v1/uploads/addFile`,1,`po-md-12`,3,`ngModelChange`,`p-error`,`p-success`,`ngModel`,`p-restrictions`],[`p-label`,`Apply`,1,`po-md-4`,3,`p-click`,`p-disabled`]],template:function(r,i){if(r&1){let m=YO();Qc(0,`form`,null,0)(2,`div`,1)(3,`po-input`,2),z0(),Kb(`ngModelChange`,function(l){return B_(m),Tk(i.name,l)||(i.name=l),U_(l)}),Kg()(),Qc(4,`div`,1)(5,`po-textarea`,3),z0(),Kb(`ngModelChange`,function(l){return B_(m),Tk(i.biograph,l)||(i.biograph=l),U_(l)}),Kg()(),Qc(6,`div`,1)(7,`po-url`,4),z0(),Kb(`ngModelChange`,function(l){return B_(m),Tk(i.linkedin,l)||(i.linkedin=l),U_(l)}),Kg()(),Qc(8,`div`,1)(9,`po-upload`,5),z0(),Kb(`ngModelChange`,function(l){return B_(m),Tk(i.resume,l)||(i.resume=l),U_(l)}),vt$1(`p-error`,function(){return i.resumeUploadError()})(`p-success`,function(){return i.resumeUploadSuccess()}),Kg()(),Qc(10,`div`,1)(11,`po-button`,6),vt$1(`p-click`,function(){return i.apply()}),Kg()()()}if(r&2){let m=ik(1);wg(3),Yb(`ngModel`,i.name),W0(),wg(2),Yb(`ngModel`,i.biograph),W0(),wg(2),Yb(`ngModel`,i.linkedin),W0(),wg(2),Yb(`ngModel`,i.resume),Rb(`p-restrictions`,Lk(6,Ze)),W0(),wg(2),Rb(`p-disabled`,m.invalid||!i.uploadedResume)}},dependencies:[AZ,MZ,TZ,QL,WL,oi,j4,Zoe,$4,G4],encapsulation:2,changeDetection:1})}return a})();var et=a=>({"docs-sample-code-tabs":a});var Ae=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-upload-resume-view`]],standalone:!1,decls:26,vars:6,consts:[[`id`,`sample-po-upload-resume`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`data-file`,`sample-po-upload-resume/sample-po-upload-resume.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-upload-resume/sample-po-upload-resume.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Upload - Resume`),Kg(),Qc(4,`a`,2),vt$1(`click`,function(){return i.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-upload-resume/sample-po-upload-resume.component.html`),Kg(),Qc(13,`div`,7)(14,`pre`,8),Sk(15,`<form #formOpportunity="ngForm">
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
`),Kg()()()(),Qc(16,`po-tab`,9)(17,`div`)(18,`label`,6),Sk(19,`sample-po-upload-resume/sample-po-upload-resume.component.ts`),Kg(),Qc(20,`div`,10)(21,`pre`,11),Sk(22,`import { Component, OnInit, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),Kg()()()()()(),Qc(23,`div`,12),vu(24,`sample-po-upload-resume`),Kg(),vu(25,`hr`)),r&2&&(wg(5),gk(`po-icon `+i.sampleCodeButtonIcon),wg(),tm(` `,i.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,et,i.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,Ue],encapsulation:2,changeDetection:1})}return a})();var nt=[`upload`];var it=[`stepper`];var ot=[`submitForm`];var at=[`sucessData`];var lt=a=>({"po-invisible":a});function rt(a,ae){if(a&1){let p=YO();Qc(0,`div`,8)(1,`div`,9)(2,`p`,11),Sk(3,`Confirm informations`),Kg()(),vu(4,`po-info`,28)(5,`po-info`,29)(6,`po-info`,30),Qc(7,`po-button`,31),vt$1(`p-click`,function(){B_(p);let i=ek();return U_(i.confirmSubmit())}),Kg()()}if(a&2){let p=ek();wg(4),Rb(`p-value`,p.project[0].name||`N/D`),wg(),Rb(`p-value`,p.title||`N/D`),wg(),Rb(`p-value`,p.description||`N/D`)}}var Le=(()=>{class a{upload;stepper;submitForm;sucessData;confirm={action:()=>{this.sucessData.close()},label:`Return`};description;project=[];restrictions={allowedExtensions:[`.zip`,`.7z`,`.tar`,`.wim`]};title;ngOnInit(){this.newSubmit()}canSubmitProject(){return!!(this.project&&this.project.length)&&this.title&&this.description}confirmSubmit(){this.sucessData.open(),this.newSubmit(),this.stepper.first()}submitProject(){this.upload.sendFiles(),this.stepper.next()}newSubmit(){this.project=[],this.title=void 0,this.description=void 0}static ɵfac=function(r){return new(r||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-upload-rs`]],viewQuery:function(r,i){if(r&1&&Du(nt,7)(it,7)(ot,7)(at,7),r&2){let m;No(m=xo())&&(i.upload=m.first),No(m=xo())&&(i.stepper=m.first),No(m=xo())&&(i.submitForm=m.first),No(m=xo())&&(i.sucessData=m.first)}},standalone:!1,decls:47,vars:15,consts:[[`stepper`,``],[`submitForm`,`ngForm`],[`upload`,``],[`sucessData`,``],[1,`po-row`],[`p-orientation`,`vertical`,`p-step-icons`,``,`p-step-size`,`42`,1,`po-lg-10`,`po-offset-lg-2`,`po-offset-xl-2`],[`p-label`,`Welcome`],[`p-title`,`Realize & Show`,1,`po-lg-8`,`po-mt-2`],[1,`tht-row`],[1,`po-sm-12`],[1,`po-font-title`],[1,`po-font-text-large`],[`p-label`,`Yes!`,`p-kind`,`primary`,1,`po-sm-12`,`po-mt-2`,3,`p-click`],[`p-label`,`Submit`,3,`p-can-active-next-step`],[1,`po-lg-10`],[1,`po-font-subtitle`],[1,`po-font-text-small-bold`],[1,`po-font-title`,`po-lg-2`],[`p-icon`,`an an-cloud-arrow-up`,1,`po-clickable`,3,`click`],[`p-icon`,`an an-fill an-x-circle`,1,`po-clickable`,3,`click`,`ngClass`],[1,`po-sm-12`,`po-mt-3`,`po-font-text-bold`],[`name`,`project`,`p-hide-select-button`,``,`p-hide-send-button`,``,`p-required`,``,`p-url`,`https://po-sample-api.onrender.com/v1/uploads/addFile`,1,`po-sm-12`,3,`ngModelChange`,`ngModel`,`p-restrictions`],[`name`,`title`,`p-label`,`Title`,`p-placeholder`,`Be creative`,`p-required`,``,1,`po-sm-12`,3,`ngModelChange`,`ngModel`,`p-disabled`],[`name`,`description`,`p-label`,`Description`,`p-maxlength`,`140`,`p-placeholder`,`Resume on few words`,`p-required`,``,1,`po-sm-12`,3,`ngModelChange`,`ngModel`,`p-disabled`],[`p-label`,`Done`,1,`po-sm-12`,`po-mt-2`,3,`p-click`,`p-disabled`],[`p-label`,`Confirm`],[`p-title`,`Confirmation`,3,`p-primary-action`],[1,`po-sm-12`,`po-font-title`],[`p-label`,`File name`,1,`po-md-4`,3,`p-value`],[`p-label`,`Title`,1,`po-md-4`,3,`p-value`],[`p-label`,`Description`,1,`po-md-4`,3,`p-value`],[`p-label`,`Confirm`,1,`po-sm-12`,`po-mt-2`,`po-mb-2`,3,`p-click`]],template:function(r,i){if(r&1){let m=YO();Qc(0,`div`,4)(1,`po-stepper`,5,0)(3,`po-step`,6)(4,`po-widget`,7)(5,`div`,8)(6,`div`,9)(7,`h1`,10),Sk(8,`Welcome, TOTVS!`),Kg(),Qc(9,`p`,11),Sk(10,`Let's submit your project?`),Kg()()(),Qc(11,`div`,8)(12,`po-button`,12),vt$1(`p-click`,function(){B_(m);let l=ik(2);return U_(l.next())}),Kg()()()(),Qc(13,`po-step`,13)(14,`po-widget`,7)(15,`form`,null,1)(17,`div`,4)(18,`div`,14)(19,`div`,4)(20,`p`,15),Sk(21,`Please, select your project:`),Kg()(),Qc(22,`div`,4)(23,`p`,16),Sk(24,`*Upload a zip file containing your project.`),Kg()()(),Qc(25,`div`,17)(26,`po-icon`,18),vt$1(`click`,function(){B_(m);let l=ik(32);return U_(l.selectFiles())}),Kg(),Qc(27,`po-icon`,19),vt$1(`click`,function(){B_(m);let l=ik(32);return U_(l.clear())}),Kg()()(),Qc(28,`div`,4)(29,`label`,20),Sk(30,`Attached`),Kg(),Qc(31,`po-upload`,21,2),z0(),Kb(`ngModelChange`,function(l){return B_(m),Tk(i.project,l)||(i.project=l),U_(l)}),Kg()(),Qc(33,`div`,4)(34,`po-input`,22),z0(),Kb(`ngModelChange`,function(l){return B_(m),Tk(i.title,l)||(i.title=l),U_(l)}),Kg()(),Qc(35,`div`,4)(36,`po-textarea`,23),z0(),Kb(`ngModelChange`,function(l){return B_(m),Tk(i.description,l)||(i.description=l),U_(l)}),Kg()(),Qc(37,`div`,8)(38,`po-button`,24),vt$1(`p-click`,function(){return i.submitProject()}),Kg()()()()(),Qc(39,`po-step`,25)(40,`po-widget`,7),FO(41,rt,8,3,`div`,8),Kg()()()(),Qc(42,`po-modal`,26,3)(44,`div`,4)(45,`p`,27),Sk(46,`Project successfully submited!`),Kg()()()}r&2&&(wg(13),Rb(`p-can-active-next-step`,i.canSubmitProject.bind(i)),wg(14),Rb(`ngClass`,Vk(13,lt,i.project.length<1)),wg(2),Vt(`po-invisible`,i.project.length<1),wg(2),Yb(`ngModel`,i.project),Rb(`p-restrictions`,i.restrictions),W0(),wg(3),Yb(`ngModel`,i.title),Rb(`p-disabled`,i.project.length<1),W0(),wg(2),Yb(`ngModel`,i.description),Rb(`p-disabled`,i.project.length<1),W0(),wg(2),Rb(`p-disabled`,i.canSubmitProject()),wg(3),VO(i.canSubmitProject()?41:-1),wg(),Rb(`p-primary-action`,i.confirm))},dependencies:[QP,AZ,MZ,TZ,QL,WL,oi,j4,Zoe,$4,Tt,Joe,ia,Gae,Fze,bae],encapsulation:2,changeDetection:1})}return a})();var dt=a=>({"docs-sample-code-tabs":a});var ze=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-upload-rs-view`]],standalone:!1,decls:26,vars:6,consts:[[`id`,`sample-po-upload-rs`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`data-file`,`sample-po-upload-rs/sample-po-upload-rs.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-upload-rs/sample-po-upload-rs.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Upload - Realize & Show`),Kg(),Qc(4,`a`,2),vt$1(`click`,function(){return i.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-upload-rs/sample-po-upload-rs.component.html`),Kg(),Qc(13,`div`,7)(14,`pre`,8),Sk(15,`<div class="po-row">
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
`),Kg()()()(),Qc(16,`po-tab`,9)(17,`div`)(18,`label`,6),Sk(19,`sample-po-upload-rs/sample-po-upload-rs.component.ts`),Kg(),Qc(20,`div`,10)(21,`pre`,11),Sk(22,`import { Component, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';
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
`),Kg()()()()()(),Qc(23,`div`,12),vu(24,`sample-po-upload-rs`),Kg(),vu(25,`hr`)),r&2&&(wg(5),gk(`po-icon `+i.sampleCodeButtonIcon),wg(),tm(` `,i.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,dt,i.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,Le],encapsulation:2,changeDetection:1})}return a})();var Re=(()=>{class a{customAction={icon:`an an-download`,type:`default`,visible:!1};uploadSuccess(){this.customAction.visible=!0}onCustomActionClick(p){if(!p.rawFile){console.error(`Arquivo inválido ou não encontrado.`);return}this.downloadFile(p.rawFile)}downloadFile(p){let r=URL.createObjectURL(p),i=document.createElement(`a`);i.href=r,i.download=p.name,i.style.display=`none`,document.body.appendChild(i),i.click(),document.body.removeChild(i),URL.revokeObjectURL(r)}static ɵfac=function(r){return new(r||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-upload-download`]],standalone:!1,decls:1,vars:2,consts:[[`name`,`upload`,`p-url`,`https://po-sample-api.onrender.com/v1/uploads/addFile`,3,`p-custom-action-click`,`p-success`,`p-custom-action`,`p-multiple`]],template:function(r,i){r&1&&(Qc(0,`po-upload`,0),vt$1(`p-custom-action-click`,function(s){return i.onCustomActionClick(s)})(`p-success`,function(){return i.uploadSuccess()}),Kg()),r&2&&Rb(`p-custom-action`,i.customAction)(`p-multiple`,!0)},dependencies:[$4],encapsulation:2,changeDetection:1})}return a})();var ct=a=>({"docs-sample-code-tabs":a});var Ve=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-upload-download-view`]],standalone:!1,decls:26,vars:6,consts:[[`id`,`sample-po-upload-download`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`data-file`,`sample-po-upload-download/sample-po-upload-download.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-upload-download/sample-po-upload-download.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Upload - with Download Button`),Kg(),Qc(4,`a`,2),vt$1(`click`,function(){return i.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-upload-download/sample-po-upload-download.component.html`),Kg(),Qc(13,`div`,7)(14,`pre`,8),Sk(15,`<po-upload
  name="upload"
  p-url="https://po-sample-api.onrender.com/v1/uploads/addFile"
  [p-custom-action]="customAction"
  (p-custom-action-click)="onCustomActionClick($event)"
  [p-multiple]="true"
  (p-success)="uploadSuccess()"
></po-upload>
`),Kg()()()(),Qc(16,`po-tab`,9)(17,`div`)(18,`label`,6),Sk(19,`sample-po-upload-download/sample-po-upload-download.component.ts`),Kg(),Qc(20,`div`,10)(21,`pre`,11),Sk(22,`import { Component, ChangeDetectionStrategy } from '@angular/core';
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
`),Kg()()()()()(),Qc(23,`div`,12),vu(24,`sample-po-upload-download`),Kg(),vu(25,`hr`)),r&2&&(wg(5),gk(`po-icon `+i.sampleCodeButtonIcon),wg(),tm(` `,i.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,ct,i.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,Re],encapsulation:2,changeDetection:1})}return a})();var Et=()=>[`.png`,`.jpg`,`.jpeg`,`.gif`];var St=a=>({allowedExtensions:a,maxFiles:5,maxFileSize:2057280});var je=(()=>{class a{static ɵfac=function(r){return new(r||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-upload-preview`]],standalone:!1,decls:1,vars:6,consts:[[`name`,`upload`,`p-label`,`PO Upload com Pré-visualização`,`p-url`,`https://po-sample-api.onrender.com/v1/uploads/addFile`,3,`p-restrictions`,`p-show-thumbnail`,`p-multiple`]],template:function(r,i){r&1&&vu(0,`po-upload`,0),r&2&&Rb(`p-restrictions`,Vk(4,St,Lk(3,Et)))(`p-show-thumbnail`,!0)(`p-multiple`,!0)},dependencies:[$4],encapsulation:2,changeDetection:1})}return a})();var gt=a=>({"docs-sample-code-tabs":a});var Oe=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-upload-preview-view`]],standalone:!1,decls:26,vars:6,consts:[[`id`,`sample-po-upload-preview`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`data-file`,`sample-po-upload-preview/sample-po-upload-preview.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-upload-preview/sample-po-upload-preview.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Upload - with Preview`),Kg(),Qc(4,`a`,2),vt$1(`click`,function(){return i.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-upload-preview/sample-po-upload-preview.component.html`),Kg(),Qc(13,`div`,7)(14,`pre`,8),Sk(15,`<po-upload
  name="upload"
  p-label="PO Upload com Pr\xE9-visualiza\xE7\xE3o"
  p-url="https://po-sample-api.onrender.com/v1/uploads/addFile"
  [p-restrictions]="{ allowedExtensions: ['.png', '.jpg', '.jpeg', '.gif'], maxFiles: 5, maxFileSize: 2057280 }"
  [p-show-thumbnail]="true"
  [p-multiple]="true"
></po-upload>
`),Kg()()()(),Qc(16,`po-tab`,9)(17,`div`)(18,`label`,6),Sk(19,`sample-po-upload-preview/sample-po-upload-preview.component.ts`),Kg(),Qc(20,`div`,10)(21,`pre`,11),Sk(22,`import { Component, ChangeDetectionStrategy } from '@angular/core';
import { PoProgressAction } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-upload-preview',
  templateUrl: 'sample-po-upload-preview.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoUploadPreviewComponent {}
`),Kg()()()()()(),Qc(23,`div`,12),vu(24,`sample-po-upload-preview`),Kg(),vu(25,`hr`)),r&2&&(wg(5),gk(`po-icon `+i.sampleCodeButtonIcon),wg(),tm(` `,i.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,gt,i.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,je],encapsulation:2,changeDetection:1})}return a})();var Be=(()=>{class a{router=p(An);openDoc(p){this.router.navigate([`/documentation`,p],{queryParams:{view:`doc`}})}static ɵfac=function(r){return new(r||a)};static ɵcmp=Jn({type:a,selectors:[[`sample-po-upload-doc`]],standalone:!1,decls:2328,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[`id`,`class-po-upload-component`,1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[`id`,`event-p-additional-help`,1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[1,`docs-api-deprecated-marker`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`id`,`prop-p-additional-help-tooltip`,1,`docs-api-properties-row`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[`pan`,``,1,`docs-api-property-type`,`string`],[`id`,`prop-p-append-in-body`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`id`,`prop-p-auto-focus`,1,`docs-api-properties-row`],[`id`,`prop-p-auto-upload`,1,`docs-api-properties-row`],[`id`,`prop-p-compact-label`,1,`docs-api-properties-row`],[`id`,`prop-p-custom-action`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoProgressAction`],[1,`language-html`],[1,`language-typescript`],[`id`,`event-p-custom-action-click`,1,`docs-api-properties-row`],[`id`,`prop-p-custom-modal-actions`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`Array<PoModalAction>`],[`id`,`prop-p-directory`,1,`docs-api-properties-row`],[`id`,`prop-p-disabled`,1,`docs-api-properties-row`],[`id`,`prop-p-disabled-remove-file`,1,`docs-api-properties-row`],[`id`,`prop-p-drag-drop`,1,`docs-api-properties-row`],[`id`,`prop-p-drag-drop-height`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`number`],[`id`,`prop-p-restrictions`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoUploadFileRestrictions`],[`id`,`prop-p-form-field`,1,`docs-api-properties-row`],[`id`,`prop-p-headers`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`{`,`[name:`,`string]:`,`string`],[`pan`,``,1,`docs-api-property-type`,`Array<string>;`,`}`],[`id`,`prop-p-help`,1,`docs-api-properties-row`],[`id`,`prop-p-hide-restrictions-info`,1,`docs-api-properties-row`],[`id`,`prop-p-hide-select-button`,1,`docs-api-properties-row`],[`id`,`prop-p-hide-send-button`,1,`docs-api-properties-row`],[`id`,`prop-p-multiple`,1,`docs-api-properties-row`],[`id`,`event-p-keydown`,1,`docs-api-properties-row`],[`id`,`prop-p-label`,1,`docs-api-properties-row`],[`id`,`prop-p-label-text-wrap`,1,`docs-api-properties-row`],[`id`,`prop-p-literals`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoUploadLiterals`],[`id`,`prop-p-loading`,1,`docs-api-properties-row`],[`id`,`prop-name`,1,`docs-api-properties-row`],[`id`,`event-ngModelChange`,1,`docs-api-properties-row`],[`id`,`event-p-cancel`,1,`docs-api-properties-row`],[`id`,`event-p-error`,1,`docs-api-properties-row`],[`id`,`event-p-open-modal-preview`,1,`docs-api-properties-row`],[`id`,`event-p-remove`,1,`docs-api-properties-row`],[`id`,`event-p-success`,1,`docs-api-properties-row`],[`id`,`event-p-upload`,1,`docs-api-properties-row`],[`id`,`prop-p-optional`,1,`docs-api-properties-row`],[`id`,`prop-p-helper`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoHelperOptions`],[`href`,`https://po-ui.io/documentation/po-helper`],[`id`,`prop-p-required`,1,`docs-api-properties-row`],[`id`,`prop-p-required-url`,1,`docs-api-properties-row`],[`id`,`prop-p-show-required`,1,`docs-api-properties-row`],[`id`,`prop-p-show-thumbnail`,1,`docs-api-properties-row`],[`id`,`prop-p-size`,1,`docs-api-properties-row`],[`href`,`https://po-ui.io/documentation/po-theme`],[`id`,`prop-p-url`,1,`docs-api-properties-row`],[`id`,`method-clear`,1,`docs-api-method-table`],[1,`docs-api-properties-row`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[`id`,`method-focus`,1,`docs-api-method-table`],[`id`,`method-closeModal`,1,`docs-api-method-table`],[`id`,`method-selectFiles`,1,`docs-api-method-table`],[`id`,`method-sendFiles`,1,`docs-api-method-table`],[`id`,`method-showAdditionalHelp`,1,`docs-api-method-table`],[`id`,`interface-po-upload-file-restrictions`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-upload-file-restrictions-allowed-extensions`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`Array<string>`],[`id`,`interface-po-upload-file-restrictions-max-file-size`,1,`docs-api-properties-row`],[`id`,`interface-po-upload-file-restrictions-max-files`,1,`docs-api-properties-row`],[`id`,`interface-po-upload-file-restrictions-min-file-size`,1,`docs-api-properties-row`],[`id`,`interface-po-upload-literals`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-upload-literals-close`,1,`docs-api-properties-row`],[`id`,`interface-po-upload-literals-continue`,1,`docs-api-properties-row`],[`id`,`interface-po-upload-literals-done-text`,1,`docs-api-properties-row`],[`id`,`interface-po-upload-literals-drag-files-here`,1,`docs-api-properties-row`],[`id`,`interface-po-upload-literals-drag-folders-here`,1,`docs-api-properties-row`],[`id`,`interface-po-upload-literals-drop-files-here`,1,`docs-api-properties-row`],[`id`,`interface-po-upload-literals-drop-folders-here`,1,`docs-api-properties-row`],[`id`,`interface-po-upload-literals-error-occurred`,1,`docs-api-properties-row`],[`id`,`interface-po-upload-literals-files`,1,`docs-api-properties-row`],[`id`,`interface-po-upload-literals-folders`,1,`docs-api-properties-row`],[`id`,`interface-po-upload-literals-invalid-drop-area`,1,`docs-api-properties-row`],[`id`,`interface-po-upload-literals-preview`,1,`docs-api-properties-row`],[`id`,`interface-po-upload-literals-select-file`,1,`docs-api-properties-row`],[`id`,`interface-po-upload-literals-select-files`,1,`docs-api-properties-row`],[`id`,`interface-po-upload-literals-select-files-on-computer`,1,`docs-api-properties-row`],[`id`,`interface-po-upload-literals-select-folder`,1,`docs-api-properties-row`],[`id`,`interface-po-upload-literals-select-folder-on-computer`,1,`docs-api-properties-row`],[`id`,`interface-po-upload-literals-sent-with-success`,1,`docs-api-properties-row`],[`id`,`interface-po-upload-literals-start-sending`,1,`docs-api-properties-row`],[`id`,`interface-po-upload-literals-thumbnail`,1,`docs-api-properties-row`],[`id`,`interface-po-upload-literals-try-again`,1,`docs-api-properties-row`],[`id`,`interface-po-upload-literals-uploading-text`,1,`docs-api-properties-row`],[`id`,`interface-po-progress-action`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-progress-action-disabled`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`Function`],[`id`,`interface-po-progress-action-icon`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`TemplateRef<void>`],[`href`,`https://po-ui.io/icons`],[`id`,`interface-po-progress-action-label`,1,`docs-api-properties-row`],[`id`,`interface-po-progress-action-type`,1,`docs-api-properties-row`],[`id`,`interface-po-progress-action-visible`,1,`docs-api-properties-row`]],template:function(r,i){r&1&&(Qc(0,`div`,0)(1,`p`,1)(2,`code`),Sk(3,`import { PoFieldModule } from '@po-ui/ng-components';`),Kg()(),Qc(4,`div`,2)(5,`p`),Sk(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-timepicker, po-upload, po-url e po-search-ai.`),Kg(),Qc(7,`blockquote`)(8,`p`),Sk(9,`Não esqueça de importar o módulo `),Qc(10,`code`),Sk(11,`FormsModule`),Kg(),Sk(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),Qc(13,`code`),Sk(14,`ReactiveFormsModule`),Kg(),Sk(15,`, ambos nativos do Angular.`),Kg()()(),Qc(16,`h3`,3),Sk(17,`Componente`),Kg(),Qc(18,`h4`,4)(19,`code`,5),Sk(20,`PoUploadComponent`),Kg()(),Qc(21,`div`,2)(22,`p`),Sk(23,`O componente `),Qc(24,`code`),Sk(25,`po-upload`),Kg(),Sk(26,` permite que o usu\xE1rio envie arquivo(s) ao servidor e acompanhe o progresso.
Este componente tamb\xE9m possibilita algumas configura\xE7\xF5es como: \u2013 Envio de diret\xF3rios, onde ele acessa o diret\xF3rio selecionado assim como seus sub-diret\xF3rios;`),Kg(),Qc(27,`ul`)(28,`li`),Sk(29,`Múltipla seleção, onde o usuário pode enviar mais de um arquivo ao servidor.`),Kg(),Qc(30,`li`),Sk(31,`Auto envio, onde o arquivo \xE9 enviado imediatamente ap\xF3s a sele\xE7\xE3o do usu\xE1rio, n\xE3o necessitando que o usu\xE1rio
clique em enviar.`),Kg(),Qc(32,`li`),Sk(33,`Restrições de formatos de arquivo e tamanho.`),Kg(),Qc(34,`li`),Sk(35,`Função de sucesso que será disparada quando os arquivos forem enviados com sucesso.`),Kg(),Qc(36,`li`),Sk(37,`Função de erro que será disparada quando houver erro no envio dos arquivos.`),Kg(),Qc(38,`li`),Sk(39,`Permite habilitar uma área onde os arquivos podem ser arrastados.`),Kg()(),Qc(40,`h4`),Sk(41,`Tokens customizáveis`),Kg(),Qc(42,`p`),Sk(43,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),Kg(),Qc(44,`blockquote`)(45,`p`),Sk(46,`Para maiores informações, acesse o guia `),Qc(47,`a`,6),Sk(48,`Personalizando o Tema Padrão com Tokens CSS`),Kg(),Sk(49,`.`),Kg()(),Qc(50,`table`)(51,`thead`)(52,`tr`)(53,`th`),Sk(54,`Propriedade`),Kg(),Qc(55,`th`),Sk(56,`Descrição`),Kg(),Qc(57,`th`),Sk(58,`Valor Padrão`),Kg()()(),Qc(59,`tbody`)(60,`tr`)(61,`td`)(62,`strong`),Sk(63,`FIELD CONTAINER`),Kg()(),vu(64,`td`)(65,`td`),Kg(),Qc(66,`tr`)(67,`td`)(68,`code`),Sk(69,`--field-container-title-justify`),Kg()(),Qc(70,`td`),Sk(71,`Alinhamento horizontal do título (`),Qc(72,`code`),Sk(73,`justify-content`),Kg(),Sk(74,`)`),Kg(),Qc(75,`td`)(76,`code`),Sk(77,`space-between`),Kg()()(),Qc(78,`tr`)(79,`td`)(80,`code`),Sk(81,`--field-container-title-flex`),Kg()(),Qc(82,`td`),Sk(83,`Flex do título (`),Qc(84,`code`),Sk(85,`flex`),Kg(),Sk(86,`)`),Kg(),Qc(87,`td`)(88,`code`),Sk(89,`1 auto`),Kg()()(),Qc(90,`tr`)(91,`td`)(92,`strong`),Sk(93,`TEXT SUPPORT`),Kg()(),vu(94,`td`)(95,`td`),Kg(),Qc(96,`tr`)(97,`td`)(98,`code`),Sk(99,`--font-family-text-support`),Kg()(),Qc(100,`td`),Sk(101,`Família tipográfica usada no texto de suporte`),Kg(),Qc(102,`td`)(103,`code`),Sk(104,`var(--font-family-theme)`),Kg()()(),Qc(105,`tr`)(106,`td`)(107,`code`),Sk(108,`--text-color-text-support`),Kg()(),Qc(109,`td`),Sk(110,`Cor da fonte no texto de suporte`),Kg(),Qc(111,`td`)(112,`code`),Sk(113,`var(--color-neutral-dark-90)`),Kg()()(),Qc(114,`tr`)(115,`td`)(116,`strong`),Sk(117,`UPLOAD CONTENT`),Kg()(),vu(118,`td`)(119,`td`),Kg(),Qc(120,`tr`)(121,`td`)(122,`code`),Sk(123,`--background-color-content`),Kg(),Sk(124,` \xA0`),Kg(),Qc(125,`td`),Sk(126,`Cor de fundo`),Kg(),Qc(127,`td`)(128,`code`),Sk(129,`var(--color-neutral-light-10)`),Kg()()(),Qc(130,`tr`)(131,`td`)(132,`code`),Sk(133,`--border-color-content`),Kg()(),Qc(134,`td`),Sk(135,`Cor da borda`),Kg(),Qc(136,`td`)(137,`code`),Sk(138,`var(--color-neutral-light-20)`),Kg()()(),Qc(139,`tr`)(140,`td`)(141,`code`),Sk(142,`--border-radius-content`),Kg()(),Qc(143,`td`),Sk(144,`Contém o valor do raio dos cantos do elemento`),Kg(),Qc(145,`td`)(146,`code`),Sk(147,`var(--border-radius-md)`),Kg()()(),Qc(148,`tr`)(149,`td`)(150,`code`),Sk(151,`--text-color-file-name`),Kg()(),Qc(152,`td`),Sk(153,`Cor do texto do nome do arquivo`),Kg(),Qc(154,`td`)(155,`code`),Sk(156,`var(--color-neutral-dark-90)`),Kg()()(),Qc(157,`tr`)(158,`td`)(159,`code`),Sk(160,`--font-family-file-name`),Kg()(),Qc(161,`td`),Sk(162,`Família tipográfica usada no texto do arquivo`),Kg(),Qc(163,`td`)(164,`code`),Sk(165,`var(--font-family-theme)`),Kg()()(),Qc(166,`tr`)(167,`td`)(168,`code`),Sk(169,`--text-color-info-bar`),Kg()(),Qc(170,`td`),Sk(171,`Cor do texto de informação`),Kg(),Qc(172,`td`)(173,`code`),Sk(174,`var(--color-neutral-mid-60)`),Kg()()(),Qc(175,`tr`)(176,`td`)(177,`code`),Sk(178,`--font-family-info-bar`),Kg()(),Qc(179,`td`),Sk(180,`Família tipográfica usada no texto de informação`),Kg(),Qc(181,`td`)(182,`code`),Sk(183,`var(--font-family-theme)`),Kg()()(),Qc(184,`tr`)(185,`td`)(186,`strong`),Sk(187,`ERROR STATE`),Kg()(),vu(188,`td`)(189,`td`),Kg(),Qc(190,`tr`)(191,`td`)(192,`code`),Sk(193,`--background-color-content-error`),Kg()(),Qc(194,`td`),Sk(195,`Cor de fundo do container de erro`),Kg(),Qc(196,`td`)(197,`code`),Sk(198,`var(--color-neutral-light-00)`),Kg()()(),Qc(199,`tr`)(200,`td`)(201,`code`),Sk(202,`--border-color-content-error`),Kg()(),Qc(203,`td`),Sk(204,`Cor da borda do container de erro`),Kg(),Qc(205,`td`)(206,`code`),Sk(207,`var(--color-feedback-negative-base)`),Kg()()(),Qc(208,`tr`)(209,`td`)(210,`code`),Sk(211,`--text-color-error`),Kg()(),Qc(212,`td`),Sk(213,`Cor do texto do container de erro`),Kg(),Qc(214,`td`)(215,`code`),Sk(216,`var(--color-feedback-negative-dark)`),Kg()()(),Qc(217,`tr`)(218,`td`)(219,`code`),Sk(220,`--color-icon-error`),Kg()(),Qc(221,`td`),Sk(222,`Cor do ícone no estado de erro`),Kg(),Qc(223,`td`)(224,`code`),Sk(225,`var(--color-feedback-negative-base)`),Kg()()(),Qc(226,`tr`)(227,`td`)(228,`code`),Sk(229,`--font-family-error`),Kg()(),Qc(230,`td`),Sk(231,`Família tipográfica usada no texto de erro`),Kg(),Qc(232,`td`)(233,`code`),Sk(234,`var(--font-family-theme)`),Kg()()(),Qc(235,`tr`)(236,`td`)(237,`strong`),Sk(238,`UPLOADED STATE`),Kg()(),vu(239,`td`)(240,`td`),Kg(),Qc(241,`tr`)(242,`td`)(243,`code`),Sk(244,`--background-color-content-uploaded`),Kg()(),Qc(245,`td`),Sk(246,`Cor de fundo do container com status de enviado`),Kg(),Qc(247,`td`)(248,`code`),Sk(249,`var(--color-neutral-light-00)`),Kg()()(),Qc(250,`tr`)(251,`td`)(252,`code`),Sk(253,`--border-color-content-uploaded`),Kg()(),Qc(254,`td`),Sk(255,`Cor da borda do container com status de enviado`),Kg(),Qc(256,`td`)(257,`code`),Sk(258,`var(--color-neutral-light-20)`),Kg()()(),Qc(259,`tr`)(260,`td`)(261,`strong`),Sk(262,`INTERACTIVE STATE`),Kg()(),vu(263,`td`)(264,`td`),Kg(),Qc(265,`tr`)(266,`td`)(267,`code`),Sk(268,`--text-color-file-name-interactive`),Kg()(),Qc(269,`td`),Sk(270,`Cor do texto do nome do arquivo quando interativo`),Kg(),Qc(271,`td`)(272,`code`),Sk(273,`var(--color-action-default)`),Kg()()(),Qc(274,`tr`)(275,`td`)(276,`strong`),Sk(277,`THUMBNAIL`),Kg()(),vu(278,`td`)(279,`td`),Kg(),Qc(280,`tr`)(281,`td`)(282,`code`),Sk(283,`--color-icon-thumbnail`),Kg()(),Qc(284,`td`),Sk(285,`Cor do ícone na thumbnail`),Kg(),Qc(286,`td`)(287,`code`),Sk(288,`var(--color-action-default)`),Kg()()(),Qc(289,`tr`)(290,`td`)(291,`code`),Sk(292,`--border-width-thumbnail`),Kg()(),Qc(293,`td`),Sk(294,`Tamanho da fonte na thumbnail`),Kg(),Qc(295,`td`)(296,`code`),Sk(297,`var(--border-width-sm)`),Kg()()(),Qc(298,`tr`)(299,`td`)(300,`code`),Sk(301,`--border-radius-thumbnail`),Kg()(),Qc(302,`td`),Sk(303,`Contém o valor do raio dos cantos na thumbnail`),Kg(),Qc(304,`td`)(305,`code`),Sk(306,`var(--border-radius-md)`),Kg()()(),Qc(307,`tr`)(308,`td`)(309,`code`),Sk(310,`--background-color-thumbnail`),Kg()(),Qc(311,`td`),Sk(312,`Cor de fundo na thumbnail`),Kg(),Qc(313,`td`)(314,`code`),Sk(315,`var(--color-neutral-light-05)`),Kg()()(),Qc(316,`tr`)(317,`td`)(318,`strong`),Sk(319,`Focused`),Kg()(),vu(320,`td`)(321,`td`),Kg(),Qc(322,`tr`)(323,`td`)(324,`code`),Sk(325,`--outline-color-focused`),Kg()(),Qc(326,`td`),Sk(327,`Cor do outline do estado de focus`),Kg(),Qc(328,`td`)(329,`code`),Sk(330,`var(--color-action-focus)`),Kg()()()()()(),Qc(331,`div`,7)(332,`h4`,8),Sk(333,`Seletor`),Kg(),Qc(334,`pre`,9),Sk(335,`<po-upload
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
`),Kg()(),Qc(336,`h4`,10),Sk(337,`Propriedades`),Kg(),Qc(338,`table`,11)(339,`tr`,12)(340,`th`,13),Sk(341,`Nome`),Kg(),Qc(342,`th`,13),Sk(343,`Tipo`),Kg(),Qc(344,`th`,13),Sk(345,`Padrão`),Kg(),Qc(346,`th`,13),Sk(347,`Descrição`),Kg()(),Qc(348,`tr`,14)(349,`td`,15)(350,`div`,16)(351,`span`,17),Sk(352,` (p-additional-help)`),vu(353,`br`),Kg()(),Qc(354,`div`,18),Sk(355,`Deprecated`),Kg()(),Qc(356,`td`,19)(357,`code`,20),Sk(358,`EventEmitter`),Kg()(),Qc(359,`td`,21),Sk(360,`-`),Kg(),Qc(361,`td`,22)(362,`em`)(363,`strong`),Sk(364,`(opcional)`),Kg()(),Qc(365,`p`),Sk(366,`Evento disparado ao clicar no ícone de ajuda adicional.`),Kg(),Qc(367,`blockquote`)(368,`p`),Sk(369,`Essa propriedade está `),Qc(370,`strong`),Sk(371,`depreciada`),Kg(),Sk(372,` e será removida na versão `),Qc(373,`code`),Sk(374,`23.x.x`),Kg(),Sk(375,`. Recomendamos utilizar a propriedade `),Qc(376,`code`),Sk(377,`p-helper`),Kg(),Sk(378,` que oferece mais recursos e flexibilidade.`),Kg()()()(),Qc(379,`tr`,23)(380,`td`,15)(381,`div`,24)(382,`span`,25),Sk(383,` p-additional-help-tooltip`),vu(384,`br`),Kg()(),Qc(385,`div`,18),Sk(386,`Deprecated`),Kg()(),Qc(387,`td`,19)(388,`code`,26),Sk(389,`string`),Kg()(),Qc(390,`td`,21),Sk(391,`-`),Kg(),Qc(392,`td`,22)(393,`em`)(394,`strong`),Sk(395,`(opcional)`),Kg()(),Qc(396,`p`),Sk(397,`Exibe um ícone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente `),Qc(398,`code`),Sk(399,`po-helper`),Kg(),Sk(400,`.
`),Qc(401,`strong`),Sk(402,`Como boa prática, indica-se utilizar um texto com até 140 caracteres.`),Kg()(),Qc(403,`blockquote`)(404,`p`),Sk(405,`Requer um recuo mínimo de 8px se o componente estiver próximo à lateral da tela.`),Kg()(),Qc(406,`blockquote`)(407,`p`),Sk(408,`Essa propriedade está `),Qc(409,`strong`),Sk(410,`depreciada`),Kg(),Sk(411,` e será removida na versão `),Qc(412,`code`),Sk(413,`23.x.x`),Kg(),Sk(414,`. Recomendamos utilizar a propriedade `),Qc(415,`code`),Sk(416,`p-helper`),Kg(),Sk(417,` que oferece mais recursos e flexibilidade.`),Kg()()()(),Qc(418,`tr`,27)(419,`td`,15)(420,`div`,24)(421,`span`,25),Sk(422,` p-append-in-body`),vu(423,`br`),Kg()()(),Qc(424,`td`,19)(425,`code`,28),Sk(426,`boolean`),Kg()(),Qc(427,`td`,21)(428,`p`)(429,`code`),Sk(430,`false`),Kg()()(),Qc(431,`td`,22)(432,`em`)(433,`strong`),Sk(434,`(opcional)`),Kg()(),Qc(435,`p`),Sk(436,`Define que o popover (`),Qc(437,`code`),Sk(438,`p-helper`),Kg(),Sk(439,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o dentro do componente. Essa
op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow escondido, garantindo o
posicionamento correto do tooltip pr\xF3ximo ao elemento.`),Kg(),Qc(440,`blockquote`)(441,`p`),Sk(442,`Quando utilizado com `),Qc(443,`code`),Sk(444,`p-helper`),Kg(),Sk(445,`, leitores de tela como o NVDA podem não ler o conteúdo do popover.`),Kg()()()(),Qc(446,`tr`,29)(447,`td`,15)(448,`div`,24)(449,`span`,25),Sk(450,` p-auto-focus`),vu(451,`br`),Kg()()(),Qc(452,`td`,19)(453,`code`,28),Sk(454,`boolean`),Kg()(),Qc(455,`td`,21)(456,`p`)(457,`code`),Sk(458,`false`),Kg()()(),Qc(459,`td`,22)(460,`em`)(461,`strong`),Sk(462,`(opcional)`),Kg()(),Qc(463,`p`),Sk(464,`Aplica foco no elemento ao ser iniciado.`),Kg(),Qc(465,`blockquote`)(466,`p`),Sk(467,`Caso mais de um elemento seja configurado com essa propriedade, apenas o último elemento declarado com ela terá o foco.`),Kg()()()(),Qc(468,`tr`,30)(469,`td`,15)(470,`div`,24)(471,`span`,25),Sk(472,` p-auto-upload`),vu(473,`br`),Kg()()(),Qc(474,`td`,19)(475,`code`,28),Sk(476,`boolean`),Kg()(),Qc(477,`td`,21)(478,`p`)(479,`code`),Sk(480,`false`),Kg()()(),Qc(481,`td`,22)(482,`em`)(483,`strong`),Sk(484,`(opcional)`),Kg()(),Qc(485,`p`),Sk(486,`Define se o envio do arquivo será automático ao selecionar o mesmo.`),Kg(),Qc(487,`blockquote`)(488,`p`),Sk(489,`Esta propriedade funciona somente se a propriedade `),Qc(490,`code`),Sk(491,`p-url`),Kg(),Sk(492,` tiver um valor atribuído.`),Kg()()()(),Qc(493,`tr`,31)(494,`td`,15)(495,`div`,24)(496,`span`,25),Sk(497,` p-compact-label`),vu(498,`br`),Kg()()(),Qc(499,`td`,19)(500,`code`,28),Sk(501,`boolean`),Kg()(),Qc(502,`td`,21)(503,`p`)(504,`code`),Sk(505,`false`),Kg()()(),Qc(506,`td`,22)(507,`em`)(508,`strong`),Sk(509,`(opcional)`),Kg()(),Qc(510,`p`),Sk(511,`Define se o título do campo será exibido de forma compacta.`),Kg(),Qc(512,`p`),Sk(513,`Quando habilitado (`),Qc(514,`code`),Sk(515,`true`),Kg(),Sk(516,`), o modo compacto afeta o conjunto composto por:`),Kg(),Qc(517,`ul`)(518,`li`)(519,`code`),Sk(520,`po-label`),Kg()(),Qc(521,`li`)(522,`code`),Sk(523,`p-requirement (showRequired)`),Kg()(),Qc(524,`li`)(525,`code`),Sk(526,`po-helper`),Kg()()(),Qc(527,`p`),Sk(528,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),Kg(),Qc(529,`p`),Sk(530,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),Kg(),Qc(531,`ul`)(532,`li`)(533,`code`),Sk(534,`--field-container-title-justify`),Kg()(),Qc(535,`li`)(536,`code`),Sk(537,`--field-container-title-flex`),Kg()()(),Qc(538,`p`),Sk(539,`Exemplo:`),Kg(),Qc(540,`pre`)(541,`code`),Sk(542,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),Kg()(),Qc(543,`p`),Sk(544,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),Kg()()(),Qc(545,`tr`,32)(546,`td`,15)(547,`div`,24)(548,`span`,25),Sk(549,` p-custom-action`),vu(550,`br`),Kg()()(),Qc(551,`td`,19)(552,`code`,33),Sk(553,`PoProgressAction`),Kg()(),Qc(554,`td`,21),Sk(555,`-`),Kg(),Qc(556,`td`,22)(557,`em`)(558,`strong`),Sk(559,`(opcional)`),Kg()(),Qc(560,`p`),Sk(561,`Define uma ação personalizada no componente `),Qc(562,`code`),Sk(563,`po-upload`),Kg(),Sk(564,`, adicionando um bot\xE3o no canto inferior direito
de cada barra de progresso associada aos arquivos enviados ou em envio.`),Kg(),Qc(565,`p`),Sk(566,`A ação deve implementar a interface `),Qc(567,`strong`),Sk(568,`PoProgressAction`),Kg(),Sk(569,`, permitindo configurar propriedades como:`),Kg(),Qc(570,`ul`)(571,`li`)(572,`code`),Sk(573,`label`),Kg(),Sk(574,`: Texto do botão.`),Kg(),Qc(575,`li`)(576,`code`),Sk(577,`icon`),Kg(),Sk(578,`: Ícone a ser exibido no botão.`),Kg(),Qc(579,`li`)(580,`code`),Sk(581,`type`),Kg(),Sk(582,`: Tipo de botão (ex.: `),Qc(583,`code`),Sk(584,`danger`),Kg(),Sk(585,` ou `),Qc(586,`code`),Sk(587,`default`),Kg(),Sk(588,`).`),Kg(),Qc(589,`li`)(590,`code`),Sk(591,`disabled`),Kg(),Sk(592,`: Indica se o botão deve estar desabilitado.`),Kg(),Qc(593,`li`)(594,`code`),Sk(595,`visible`),Kg(),Sk(596,`: Indica se o botão deve estar visível.`),Kg()(),Qc(597,`p`)(598,`strong`),Sk(599,`Exemplo de uso:`),Kg()(),Qc(600,`pre`)(601,`code`,34),Sk(602,`<po-upload
 [p-custom-action]="customAction"
 (p-custom-action-click)="onCustomActionClick($event)">
</po-upload>
`),Kg()(),Qc(603,`pre`)(604,`code`,35),Sk(605,`customAction: PoProgressAction = {
  label: 'Baixar',
  icon: 'an an-download',
  type: 'default',
  visible: true
};

onCustomActionClick(file: PoUploadFile) {
  console.log(\`A\xE7\xE3o personalizada clicada para o arquivo: \${file.name}\`);
}
`),Kg()()()(),Qc(606,`tr`,36)(607,`td`,15)(608,`div`,16)(609,`span`,17),Sk(610,` (p-custom-action-click)`),vu(611,`br`),Kg()()(),Qc(612,`td`,19)(613,`code`,20),Sk(614,`EventEmitter`),Kg()(),Qc(615,`td`,21),Sk(616,`-`),Kg(),Qc(617,`td`,22)(618,`em`)(619,`strong`),Sk(620,`(opcional)`),Kg()(),Qc(621,`p`),Sk(622,`Evento emitido ao clicar na ação personalizada configurada no `),Qc(623,`code`),Sk(624,`p-custom-action`),Kg(),Sk(625,`.`),Kg(),Qc(626,`p`),Sk(627,`O evento retorna o arquivo associado \xE0 barra de progresso onde a a\xE7\xE3o foi clicada,
permitindo executar opera\xE7\xF5es espec\xEDficas para aquele arquivo.`),Kg(),Qc(628,`p`)(629,`strong`),Sk(630,`Exemplo de uso:`),Kg()(),Qc(631,`pre`)(632,`code`,34),Sk(633,`<po-upload
 [p-custom-action]="customAction"
 (p-custom-action-click)="onCustomActionClick($event)">
</po-upload>
`),Kg()(),Qc(634,`pre`)(635,`code`,35),Sk(636,`customAction: PoProgressAction = {
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
`),Kg()()()(),Qc(637,`tr`,37)(638,`td`,15)(639,`div`,24)(640,`span`,25),Sk(641,` p-custom-modal-actions`),vu(642,`br`),Kg()()(),Qc(643,`td`,19)(644,`code`,38),Sk(645,`Array<PoModalAction>`),Kg()(),Qc(646,`td`,21),Sk(647,`-`),Kg(),Qc(648,`td`,22)(649,`em`)(650,`strong`),Sk(651,`(opcional)`),Kg()(),Qc(652,`p`),Sk(653,`Define uma ou duas a\xE7\xF5es personalizadas do modal de pr\xE9-visualiza\xE7\xE3o, adicionando um bot\xE3o ou dois bot\xF5es no canto inferior direito
do modal.`),Kg(),Qc(654,`p`),Sk(655,`A ação deve implementar a interface `),Qc(656,`strong`),Sk(657,`PoModalAction`),Kg(),Sk(658,`, permitindo configurar propriedades como:`),Kg(),Qc(659,`ul`)(660,`li`)(661,`code`),Sk(662,`label`),Kg(),Sk(663,`: Texto do botão.`),Kg(),Qc(664,`li`)(665,`code`),Sk(666,`action`),Kg(),Sk(667,`: Ícone a ser exibido no botão.`),Kg(),Qc(668,`li`)(669,`code`),Sk(670,`danger`),Kg(),Sk(671,`: Define a propriedade `),Qc(672,`code`),Sk(673,`p-danger`),Kg(),Sk(674,` do botão.`),Kg(),Qc(675,`li`)(676,`code`),Sk(677,`disabled`),Kg(),Sk(678,`: Indica se o botão deve estar desabilitado.`),Kg(),Qc(679,`li`)(680,`code`),Sk(681,`visible`),Kg(),Sk(682,`: Indica se o botão deve estar visível.`),Kg()(),Qc(683,`p`)(684,`strong`),Sk(685,`Exemplo de uso:`),Kg()(),Qc(686,`pre`)(687,`code`,34),Sk(688,`<po-upload
 [p-custom-modal-actions]="customActions"
</po-upload>
`),Kg()(),Qc(689,`pre`)(690,`code`,35),Sk(691,`customActions:  Array<PoModalAction> = [
 { label: 'Confirmar', action: this.confirmModal.bind(this) },
 { label: 'Cancelar', action: this.closeModal.bind(this) }
];
`),Kg()()()(),Qc(692,`tr`,39)(693,`td`,15)(694,`div`,24)(695,`span`,25),Sk(696,` p-directory`),vu(697,`br`),Kg()()(),Qc(698,`td`,19)(699,`code`,28),Sk(700,`boolean`),Kg()(),Qc(701,`td`,21)(702,`p`)(703,`code`),Sk(704,`false`),Kg()()(),Qc(705,`td`,22)(706,`em`)(707,`strong`),Sk(708,`(opcional)`),Kg()(),Qc(709,`p`),Sk(710,`Permite a seleção de diretórios contendo um ou mais arquivos para envio.`),Kg(),Qc(711,`blockquote`)(712,`p`),Sk(713,`A habilitação desta propriedade se restringe apenas à seleção de diretórios.`),Kg()(),Qc(714,`blockquote`)(715,`p`),Sk(716,`Definição não suportada pelo browser `),Qc(717,`strong`),Sk(718,`Internet Explorer`),Kg(),Sk(719,`, todavia será possível a seleção de arquivos padrão.`),Kg()()()(),Qc(720,`tr`,40)(721,`td`,15)(722,`div`,24)(723,`span`,25),Sk(724,` p-disabled`),vu(725,`br`),Kg()()(),Qc(726,`td`,19)(727,`code`,28),Sk(728,`boolean`),Kg()(),Qc(729,`td`,21),Sk(730,`-`),Kg(),Qc(731,`td`,22)(732,`em`)(733,`strong`),Sk(734,`(opcional)`),Kg()(),Qc(735,`p`),Sk(736,`Indica que o campo será desabilitado.`),Kg()()(),Qc(737,`tr`,41)(738,`td`,15)(739,`div`,24)(740,`span`,25),Sk(741,` p-disabled-remove-file`),vu(742,`br`),Kg()()(),Qc(743,`td`,19)(744,`code`,28),Sk(745,`boolean`),Kg()(),Qc(746,`td`,21)(747,`p`)(748,`code`),Sk(749,`false`),Kg()()(),Qc(750,`td`,22)(751,`em`)(752,`strong`),Sk(753,`(opcional)`),Kg()(),Qc(754,`p`),Sk(755,`Desabilita botão de remover o(s) arquivo(s) selecionado(s).`),Kg()()(),Qc(756,`tr`,42)(757,`td`,15)(758,`div`,24)(759,`span`,25),Sk(760,` p-drag-drop`),vu(761,`br`),Kg()()(),Qc(762,`td`,19)(763,`code`,28),Sk(764,`boolean`),Kg()(),Qc(765,`td`,21)(766,`p`)(767,`code`),Sk(768,`false`),Kg()()(),Qc(769,`td`,22)(770,`em`)(771,`strong`),Sk(772,`(opcional)`),Kg()(),Qc(773,`p`),Sk(774,`Exibe a \xE1rea onde \xE9 poss\xEDvel arrastar e selecionar os arquivos. Quando estiver definida, omite o bot\xE3o para sele\xE7\xE3o de arquivos
automaticamente.`),Kg(),Qc(775,`blockquote`)(776,`p`),Sk(777,`Recomendamos utilizar apenas um `),Qc(778,`code`),Sk(779,`po-upload`),Kg(),Sk(780,` com esta funcionalidade por tela.`),Kg()()()(),Qc(781,`tr`,43)(782,`td`,15)(783,`div`,24)(784,`span`,25),Sk(785,` p-drag-drop-height`),vu(786,`br`),Kg()()(),Qc(787,`td`,19)(788,`code`,44),Sk(789,`number`),Kg()(),Qc(790,`td`,21)(791,`p`)(792,`code`),Sk(793,`320`),Kg()()(),Qc(794,`td`,22)(795,`em`)(796,`strong`),Sk(797,`(opcional)`),Kg()(),Qc(798,`p`),Sk(799,`Define em `),Qc(800,`em`),Sk(801,`pixels`),Kg(),Sk(802,` a altura da área onde podem ser arrastados os arquivos. A altura mínima aceita é `),Qc(803,`code`),Sk(804,`160px`),Kg(),Sk(805,`.`),Kg(),Qc(806,`blockquote`)(807,`p`),Sk(808,`Esta propriedade funciona somente se a propriedade `),Qc(809,`code`),Sk(810,`p-drag-drop`),Kg(),Sk(811,` estiver habilitada.`),Kg()()()(),Qc(812,`tr`,45)(813,`td`,15)(814,`div`,24)(815,`span`,25),Sk(816,` p-restrictions`),vu(817,`br`),Kg()()(),Qc(818,`td`,19)(819,`code`,46),Sk(820,`PoUploadFileRestrictions`),Kg()(),Qc(821,`td`,21),Sk(822,`-`),Kg(),Qc(823,`td`,22)(824,`em`)(825,`strong`),Sk(826,`(opcional)`),Kg()(),Qc(827,`p`),Sk(828,`Objeto que segue a definição da interface `),Qc(829,`code`),Sk(830,`PoUploadFileRestrictions`),Kg(),Sk(831,`,
que possibilita definir tamanho m\xE1ximo/m\xEDnimo e extens\xE3o dos arquivos permitidos.`),Kg()()(),Qc(832,`tr`,47)(833,`td`,15)(834,`div`,24)(835,`span`,25),Sk(836,` p-form-field`),vu(837,`br`),Kg()()(),Qc(838,`td`,19)(839,`code`,26),Sk(840,`string`),Kg()(),Qc(841,`td`,21)(842,`p`)(843,`code`),Sk(844,`files`),Kg()()(),Qc(845,`td`,22)(846,`em`)(847,`strong`),Sk(848,`(opcional)`),Kg()(),Qc(849,`p`),Sk(850,`Nome do campo de formulário que será enviado para o serviço informado na propriedade `),Qc(851,`code`),Sk(852,`p-url`),Kg(),Sk(853,`.`),Kg()()(),Qc(854,`tr`,48)(855,`td`,15)(856,`div`,24)(857,`span`,25),Sk(858,` p-headers`),vu(859,`br`),Kg()()(),Qc(860,`td`,19)(861,`code`,49),Sk(862,`{ [name: string]: string `),Kg(),Qc(863,`code`,50),Sk(864,` Array<string>;
}`),Kg()(),Qc(865,`td`,21),Sk(866,`-`),Kg(),Qc(867,`td`,22)(868,`p`),Sk(869,`Objeto que contém os cabeçalhos que será enviado na requisição dos arquivos.`),Kg()()(),Qc(870,`tr`,51)(871,`td`,15)(872,`div`,24)(873,`span`,25),Sk(874,` p-help`),vu(875,`br`),Kg()()(),Qc(876,`td`,19)(877,`code`,26),Sk(878,`string`),Kg()(),Qc(879,`td`,21),Sk(880,`-`),Kg(),Qc(881,`td`,22)(882,`em`)(883,`strong`),Sk(884,`(opcional)`),Kg()(),Qc(885,`p`),Sk(886,`Texto de apoio para o campo.`),Kg()()(),Qc(887,`tr`,52)(888,`td`,15)(889,`div`,24)(890,`span`,25),Sk(891,` p-hide-restrictions-info`),vu(892,`br`),Kg()()(),Qc(893,`td`,19)(894,`code`,28),Sk(895,`boolean`),Kg()(),Qc(896,`td`,21)(897,`p`)(898,`code`),Sk(899,`false`),Kg()()(),Qc(900,`td`,22)(901,`em`)(902,`strong`),Sk(903,`(opcional)`),Kg()(),Qc(904,`p`),Sk(905,`Oculta visualmente as informações de restrições para o upload.`),Kg()()(),Qc(906,`tr`,53)(907,`td`,15)(908,`div`,24)(909,`span`,25),Sk(910,` p-hide-select-button`),vu(911,`br`),Kg()()(),Qc(912,`td`,19)(913,`code`,28),Sk(914,`boolean`),Kg()(),Qc(915,`td`,21)(916,`p`)(917,`code`),Sk(918,`false`),Kg()()(),Qc(919,`td`,22)(920,`em`)(921,`strong`),Sk(922,`(opcional)`),Kg()(),Qc(923,`p`),Sk(924,`Omite o botão de seleção de arquivos.`),Kg(),Qc(925,`blockquote`)(926,`p`),Sk(927,`Caso o valor definido seja `),Qc(928,`code`),Sk(929,`true`),Kg(),Sk(930,`, caber\xE1 ao desenvolvedor a responsabilidade
pela chamada do m\xE9todo `),Qc(931,`code`),Sk(932,`selectFiles()`),Kg(),Sk(933,` para seleção de arquivos.`),Kg()()()(),Qc(934,`tr`,54)(935,`td`,15)(936,`div`,24)(937,`span`,25),Sk(938,` p-hide-send-button`),vu(939,`br`),Kg()()(),Qc(940,`td`,19)(941,`code`,28),Sk(942,`boolean`),Kg()(),Qc(943,`td`,21)(944,`p`)(945,`code`),Sk(946,`false`),Kg()()(),Qc(947,`td`,22)(948,`em`)(949,`strong`),Sk(950,`(opcional)`),Kg()(),Qc(951,`p`),Sk(952,`Omite o botão de envio de arquivos.`),Kg(),Qc(953,`blockquote`)(954,`p`),Sk(955,`Caso o valor definido seja `),Qc(956,`code`),Sk(957,`true`),Kg(),Sk(958,`, caber\xE1 ao desenvolvedor a responsabilidade
pela chamada do m\xE9todo `),Qc(959,`code`),Sk(960,`sendFiles()`),Kg(),Sk(961,` para envio do(s) arquivo(s) selecionado(s).`),Kg()()()(),Qc(962,`tr`,55)(963,`td`,15)(964,`div`,24)(965,`span`,25),Sk(966,` p-multiple`),vu(967,`br`),Kg()()(),Qc(968,`td`,19)(969,`code`,28),Sk(970,`boolean`),Kg()(),Qc(971,`td`,21),Sk(972,`-`),Kg(),Qc(973,`td`,22)(974,`em`)(975,`strong`),Sk(976,`(opcional)`),Kg()(),Qc(977,`p`),Sk(978,`Define se pode selecionar mais de um arquivo.`),Kg(),Qc(979,`blockquote`)(980,`p`),Sk(981,`Se utilizada a `),Qc(982,`code`),Sk(983,`p-directory`),Kg(),Sk(984,`, habilita-se automaticamente esta propriedade.`),Kg()()()(),Qc(985,`tr`,56)(986,`td`,15)(987,`div`,16)(988,`span`,17),Sk(989,` (p-keydown)`),vu(990,`br`),Kg()()(),Qc(991,`td`,19)(992,`code`,20),Sk(993,`EventEmitter`),Kg()(),Qc(994,`td`,21),Sk(995,`-`),Kg(),Qc(996,`td`,22)(997,`em`)(998,`strong`),Sk(999,`(opcional)`),Kg()(),Qc(1e3,`p`),Sk(1001,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),Qc(1002,`code`),Sk(1003,`KeyboardEvent`),Kg(),Sk(1004,` com informações sobre a tecla.`),Kg()()(),Qc(1005,`tr`,57)(1006,`td`,15)(1007,`div`,24)(1008,`span`,25),Sk(1009,` p-label`),vu(1010,`br`),Kg()()(),Qc(1011,`td`,19)(1012,`code`,26),Sk(1013,`string`),Kg()(),Qc(1014,`td`,21),Sk(1015,`-`),Kg(),Qc(1016,`td`,22)(1017,`em`)(1018,`strong`),Sk(1019,`(opcional)`),Kg()(),Qc(1020,`p`),Sk(1021,`Rótulo do campo.`),Kg()()(),Qc(1022,`tr`,58)(1023,`td`,15)(1024,`div`,24)(1025,`span`,25),Sk(1026,` p-label-text-wrap`),vu(1027,`br`),Kg()()(),Qc(1028,`td`,19)(1029,`code`,28),Sk(1030,`boolean`),Kg()(),Qc(1031,`td`,21)(1032,`p`)(1033,`code`),Sk(1034,`false`),Kg()()(),Qc(1035,`td`,22)(1036,`em`)(1037,`strong`),Sk(1038,`(opcional)`),Kg()(),Qc(1039,`p`),Sk(1040,`Habilita a quebra automática do texto da propriedade `),Qc(1041,`code`),Sk(1042,`p-label`),Kg(),Sk(1043,`. Quando `),Qc(1044,`code`),Sk(1045,`p-label-text-wrap`),Kg(),Sk(1046,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),Kg()()(),Qc(1047,`tr`,59)(1048,`td`,15)(1049,`div`,24)(1050,`span`,25),Sk(1051,` p-literals`),vu(1052,`br`),Kg()()(),Qc(1053,`td`,19)(1054,`code`,60),Sk(1055,`PoUploadLiterals`),Kg()(),Qc(1056,`td`,21),Sk(1057,`-`),Kg(),Qc(1058,`td`,22)(1059,`em`)(1060,`strong`),Sk(1061,`(opcional)`),Kg()(),Qc(1062,`p`),Sk(1063,`Objeto com as literais usadas no `),Qc(1064,`code`),Sk(1065,`po-upload`),Kg(),Sk(1066,`.`),Kg(),Qc(1067,`p`),Sk(1068,`Existem duas maneiras de customizar o componente:`),Kg(),Qc(1069,`ul`)(1070,`li`),Sk(1071,`passando um objeto implementando a interface `),Qc(1072,`code`),Sk(1073,`PoUploadLiterals`),Kg(),Sk(1074,` com todas as literais disponíveis;`),Kg(),Qc(1075,`li`),Sk(1076,`passando apenas as literais que deseja customizar:`),Qc(1077,`pre`)(1078,`code`),Sk(1079,`const customLiterals: PoUploadLiterals = {
  folders: 'Pastas',
  selectFile: 'Buscar arquivo',
  startSending: 'Enviar'
};
`),Kg()()()(),Qc(1080,`p`),Sk(1081,`E para carregar as literais customizadas, basta apenas passar o objeto para o componente:`),Kg(),Qc(1082,`pre`)(1083,`code`),Sk(1084,`<po-upload
  [p-literals]="customLiterals">
</po-upload>
`),Kg()(),Qc(1085,`blockquote`)(1086,`p`),Sk(1087,`O objeto padrão de literais será traduzido de acordo com o idioma do `),Qc(1088,`em`),Sk(1089,`browser`),Kg(),Sk(1090,` (pt, en, es, ru).`),Kg()()()(),Qc(1091,`tr`,61)(1092,`td`,15)(1093,`div`,24)(1094,`span`,25),Sk(1095,` p-loading`),vu(1096,`br`),Kg()()(),Qc(1097,`td`,19)(1098,`code`,28),Sk(1099,`boolean`),Kg()(),Qc(1100,`td`,21)(1101,`p`)(1102,`code`),Sk(1103,`false`),Kg()()(),Qc(1104,`td`,22)(1105,`em`)(1106,`strong`),Sk(1107,`(opcional)`),Kg()(),Qc(1108,`p`),Sk(1109,`Exibe um ícone de carregamento no botão `),Qc(1110,`code`),Sk(1111,`Selecionar arquivo`),Kg(),Sk(1112,`, à esquerda do texto, sinalizando que uma operação está\xA0em andamento.`),Kg(),Qc(1113,`blockquote`)(1114,`p`),Sk(1115,`Incompatível com `),Qc(1116,`code`),Sk(1117,`p-drag-drop`),Kg(),Sk(1118,` e `),Qc(1119,`code`),Sk(1120,`p-hide-select-button`),Kg(),Sk(1121,`, pois o estado de loading depende da exibição do botão `),Qc(1122,`code`),Sk(1123,`Selecionar arquivo`),Kg(),Sk(1124,`.`),Kg()()()(),Qc(1125,`tr`,62)(1126,`td`,15)(1127,`div`,24)(1128,`span`,25),Sk(1129,` name`),vu(1130,`br`),Kg()()(),Qc(1131,`td`,19)(1132,`code`,26),Sk(1133,`string`),Kg()(),Qc(1134,`td`,21),Sk(1135,`-`),Kg(),Qc(1136,`td`,22)(1137,`p`),Sk(1138,`Define o valor do atributo `),Qc(1139,`code`),Sk(1140,`name`),Kg(),Sk(1141,` do componente.`),Kg()()(),Qc(1142,`tr`,63)(1143,`td`,15)(1144,`div`,16)(1145,`span`,17),Sk(1146,` (ngModelChange)`),vu(1147,`br`),Kg()()(),Qc(1148,`td`,19)(1149,`code`,20),Sk(1150,`EventEmitter`),Kg()(),Qc(1151,`td`,21),Sk(1152,`-`),Kg(),Qc(1153,`td`,22)(1154,`em`)(1155,`strong`),Sk(1156,`(opcional)`),Kg()(),Qc(1157,`p`),Sk(1158,`Função para atualizar o ngModel do componente, necessário quando não for utilizado dentro da `),Qc(1159,`em`),Sk(1160,`tag`),Kg(),Qc(1161,`code`),Sk(1162,`form`),Kg(),Sk(1163,`.`),Kg(),Qc(1164,`p`),Sk(1165,`Na versão 12.2.0 do Angular a verificação `),Qc(1166,`code`),Sk(1167,`strictTemplates`),Kg(),Sk(1168,` vem true como default. Portanto, para utilizar
two-way binding no componente deve se utilizar da seguinte forma:`),Kg(),Qc(1169,`pre`)(1170,`code`),Sk(1171,`<po-upload ... [ngModel]="UploadModel" (ngModelChange)="uploadModel = $event"> </po-upload>
`),Kg()()()(),Qc(1172,`tr`,64)(1173,`td`,15)(1174,`div`,16)(1175,`span`,17),Sk(1176,` (p-cancel)`),vu(1177,`br`),Kg()()(),Qc(1178,`td`,19)(1179,`code`,20),Sk(1180,`EventEmitter`),Kg()(),Qc(1181,`td`,21),Sk(1182,`-`),Kg(),Qc(1183,`td`,22)(1184,`em`)(1185,`strong`),Sk(1186,`(opcional)`),Kg()(),Qc(1187,`p`),Sk(1188,`Evento será disparado ao clicar no ícone de fechar.`),Kg(),Qc(1189,`blockquote`)(1190,`p`),Sk(1191,`Por parâmetro será passado o objeto do arquivo.`),Kg()()()(),Qc(1192,`tr`,65)(1193,`td`,15)(1194,`div`,16)(1195,`span`,17),Sk(1196,` (p-error)`),vu(1197,`br`),Kg()()(),Qc(1198,`td`,19)(1199,`code`,20),Sk(1200,`EventEmitter`),Kg()(),Qc(1201,`td`,21),Sk(1202,`-`),Kg(),Qc(1203,`td`,22)(1204,`em`)(1205,`strong`),Sk(1206,`(opcional)`),Kg()(),Qc(1207,`p`),Sk(1208,`Evento será disparado quando ocorrer algum erro no envio do arquivo.`),Kg(),Qc(1209,`blockquote`)(1210,`p`),Sk(1211,`Por parâmetro será passado o objeto do retorno que é do tipo `),Qc(1212,`code`),Sk(1213,`HttpErrorResponse`),Kg(),Sk(1214,`.`),Kg()()()(),Qc(1215,`tr`,66)(1216,`td`,15)(1217,`div`,16)(1218,`span`,17),Sk(1219,` (p-open-modal-preview)`),vu(1220,`br`),Kg()()(),Qc(1221,`td`,19)(1222,`code`,20),Sk(1223,`EventEmitter`),Kg()(),Qc(1224,`td`,21),Sk(1225,`-`),Kg(),Qc(1226,`td`,22)(1227,`em`)(1228,`strong`),Sk(1229,`(opcional)`),Kg()(),Qc(1230,`p`),Sk(1231,`Evento será disparado ao abrir o modal de pré-visualização.`),Kg(),Qc(1232,`blockquote`)(1233,`p`),Sk(1234,`Por parâmetro será passado o objeto do arquivo.`),Kg()()()(),Qc(1235,`tr`,67)(1236,`td`,15)(1237,`div`,16)(1238,`span`,17),Sk(1239,` (p-remove)`),vu(1240,`br`),Kg()()(),Qc(1241,`td`,19)(1242,`code`,20),Sk(1243,`EventEmitter`),Kg()(),Qc(1244,`td`,21),Sk(1245,`-`),Kg(),Qc(1246,`td`,22)(1247,`em`)(1248,`strong`),Sk(1249,`(opcional)`),Kg()(),Qc(1250,`p`),Sk(1251,`Evento será disparado ao clicar no ícone de remover.`),Kg(),Qc(1252,`blockquote`)(1253,`p`),Sk(1254,`Por parâmetro será passado o objeto do arquivo.`),Kg()()()(),Qc(1255,`tr`,68)(1256,`td`,15)(1257,`div`,16)(1258,`span`,17),Sk(1259,` (p-success)`),vu(1260,`br`),Kg()()(),Qc(1261,`td`,19)(1262,`code`,20),Sk(1263,`EventEmitter`),Kg()(),Qc(1264,`td`,21),Sk(1265,`-`),Kg(),Qc(1266,`td`,22)(1267,`em`)(1268,`strong`),Sk(1269,`(opcional)`),Kg()(),Qc(1270,`p`),Sk(1271,`Evento será disparado quando o envio do arquivo for realizado com sucesso.`),Kg(),Qc(1272,`blockquote`)(1273,`p`),Sk(1274,`Por parâmetro será passado o objeto do retorno que é do tipo `),Qc(1275,`code`),Sk(1276,`HttpResponse`),Kg(),Sk(1277,`.`),Kg()()()(),Qc(1278,`tr`,69)(1279,`td`,15)(1280,`div`,16)(1281,`span`,17),Sk(1282,` (p-upload)`),vu(1283,`br`),Kg()()(),Qc(1284,`td`,19)(1285,`code`,20),Sk(1286,`EventEmitter`),Kg()(),Qc(1287,`td`,21),Sk(1288,`-`),Kg(),Qc(1289,`td`,22)(1290,`em`)(1291,`strong`),Sk(1292,`(opcional)`),Kg()(),Qc(1293,`p`),Sk(1294,`Fun\xE7\xE3o que ser\xE1 executada no momento de realizar o envio do arquivo,
onde ser\xE1 poss\xEDvel adicionar informa\xE7\xF5es ao par\xE2metro que ser\xE1 enviado na requisi\xE7\xE3o.
\xC9 passado por par\xE2metro um objeto com o arquivo e as propriedades data e extraFormData,
que ser\xE3o enviadas em conjunto com o arquivo na requisi\xE7\xE3o, por exemplo:`),Kg(),Qc(1295,`blockquote`)(1296,`p`),Sk(1297,`data, nesta propriedade pode ser informado algum dado`),Kg()(),Qc(1298,`pre`)(1299,`code`),Sk(1300,`event.data = {id: 'id do usu\xE1rio'};
`),Kg()(),Qc(1301,`blockquote`)(1302,`p`),Sk(1303,`extraFormData, nesta propriedade pode ser informado algum dado solicitado pela API
que n\xE3o possa estar no objeto `),Qc(1304,`code`),Sk(1305,`data`),Kg(),Sk(1306,`, assim o conte\xFAdo sar\xE1 extra\xEDdo do objeto e
enviado como par\xE2metro`),Kg()(),Qc(1307,`pre`)(1308,`code`),Sk(1309,`event.extraFormData = {id: 'id do usu\xE1rio'};
`),Kg()()()(),Qc(1310,`tr`,70)(1311,`td`,15)(1312,`div`,24)(1313,`span`,25),Sk(1314,` p-optional`),vu(1315,`br`),Kg()()(),Qc(1316,`td`,19)(1317,`code`,28),Sk(1318,`boolean`),Kg()(),Qc(1319,`td`,21)(1320,`p`)(1321,`code`),Sk(1322,`false`),Kg()()(),Qc(1323,`td`,22)(1324,`em`)(1325,`strong`),Sk(1326,`(opcional)`),Kg()(),Qc(1327,`p`),Sk(1328,`Define se a indicação de campo opcional será exibida.`),Kg(),Qc(1329,`blockquote`)(1330,`p`),Sk(1331,`Não será exibida a indicação se:`),Kg()(),Qc(1332,`ul`)(1333,`li`),Sk(1334,`O campo conter `),Qc(1335,`code`),Sk(1336,`p-required`),Kg(),Sk(1337,`;`),Kg(),Qc(1338,`li`),Sk(1339,`Não possuir `),Qc(1340,`code`),Sk(1341,`p-help`),Kg(),Sk(1342,` e/ou `),Qc(1343,`code`),Sk(1344,`p-label`),Kg(),Sk(1345,`.`),Kg()()()(),Qc(1346,`tr`,71)(1347,`td`,15)(1348,`div`,24)(1349,`span`,25),Sk(1350,` p-helper`),vu(1351,`br`),Kg()()(),Qc(1352,`td`,19)(1353,`code`,72),Sk(1354,`PoHelperOptions `),Kg(),Qc(1355,`code`,26),Sk(1356,` string`),Kg()(),Qc(1357,`td`,21),Sk(1358,`-`),Kg(),Qc(1359,`td`,22)(1360,`em`)(1361,`strong`),Sk(1362,`(opcional)`),Kg()(),Qc(1363,`p`),Sk(1364,`Define as opções do componente de ajuda (po-helper) que será exibido ao lado do label quando a propriedade `),Qc(1365,`code`),Sk(1366,`p-label`),Kg(),Sk(1367,` for definida, ou, ao lado do componente na ausência da propriedade `),Qc(1368,`code`),Sk(1369,`p-label`),Kg(),Sk(1370,`.`),Kg(),Qc(1371,`blockquote`)(1372,`p`),Sk(1373,`Para mais informações acesse: `),Qc(1374,`a`,73),Sk(1375,`https://po-ui.io/documentation/po-helper`),Kg(),Sk(1376,`.`),Kg()(),Qc(1377,`blockquote`)(1378,`p`),Sk(1379,`Ao configurar esta propriedade, o antigo ícone de ajuda adicional (`),Qc(1380,`code`),Sk(1381,`p-additional-help-tooltip`),Kg(),Sk(1382,` e `),Qc(1383,`code`),Sk(1384,`p-additional-help`),Kg(),Sk(1385,`) será ignorado.`),Kg()()()(),Qc(1386,`tr`,74)(1387,`td`,15)(1388,`div`,24)(1389,`span`,25),Sk(1390,` p-required`),vu(1391,`br`),Kg()()(),Qc(1392,`td`,19)(1393,`code`,28),Sk(1394,`boolean`),Kg()(),Qc(1395,`td`,21)(1396,`p`)(1397,`code`),Sk(1398,`false`),Kg()()(),Qc(1399,`td`,22)(1400,`em`)(1401,`strong`),Sk(1402,`(opcional)`),Kg()(),Qc(1403,`p`),Sk(1404,`Define que o campo será obrigatório.`),Kg()()(),Qc(1405,`tr`,75)(1406,`td`,15)(1407,`div`,24)(1408,`span`,25),Sk(1409,` p-required-url`),vu(1410,`br`),Kg()()(),Qc(1411,`td`,19)(1412,`code`,28),Sk(1413,`boolean`),Kg()(),Qc(1414,`td`,21)(1415,`p`)(1416,`code`),Sk(1417,`true`),Kg()()(),Qc(1418,`td`,22)(1419,`em`)(1420,`strong`),Sk(1421,`(opcional)`),Kg()(),Qc(1422,`p`),Sk(1423,`Define se a propriedade `),Qc(1424,`code`),Sk(1425,`p-url`),Kg(),Sk(1426,` é obrigatória.`),Kg(),Qc(1427,`p`),Sk(1428,`Caso a propriedade seja definida como `),Qc(1429,`code`),Sk(1430,`false`),Kg(),Sk(1431,`:`),Kg(),Qc(1432,`ul`)(1433,`li`),Sk(1434,`o botão de "Selecionar arquivo" ficará habilitado mesmo sem a propriedade `),Qc(1435,`code`),Sk(1436,`p-url`),Kg(),Sk(1437,` definida.`),Kg(),Qc(1438,`li`),Sk(1439,`o botão "Iniciar envio" ficará oculto até que a propriedade `),Qc(1440,`code`),Sk(1441,`p-url`),Kg(),Sk(1442,` seja definida.`),Kg()(),Qc(1443,`blockquote`)(1444,`p`),Sk(1445,`Se utilizada com a propriedade `),Qc(1446,`code`),Sk(1447,`p-auto-upload`),Kg(),Sk(1448,` definida como `),Qc(1449,`code`),Sk(1450,`true`),Kg(),Sk(1451,` será necessário definir a propriedade `),Qc(1452,`code`),Sk(1453,`p-url`),Kg(),Sk(1454,`.`),Kg()()()(),Qc(1455,`tr`,76)(1456,`td`,15)(1457,`div`,24)(1458,`span`,25),Sk(1459,` p-show-required`),vu(1460,`br`),Kg()()(),Qc(1461,`td`,19)(1462,`code`,28),Sk(1463,`boolean`),Kg()(),Qc(1464,`td`,21),Sk(1465,`-`),Kg(),Qc(1466,`td`,22)(1467,`p`),Sk(1468,`Define se a indicação de campo obrigatório será exibida.`),Kg(),Qc(1469,`blockquote`)(1470,`p`),Sk(1471,`Não será exibida a indicação se:`),Kg()(),Qc(1472,`ul`)(1473,`li`),Sk(1474,`Não possuir `),Qc(1475,`code`),Sk(1476,`p-help`),Kg(),Sk(1477,` e/ou `),Qc(1478,`code`),Sk(1479,`p-label`),Kg(),Sk(1480,`.`),Kg()()()(),Qc(1481,`tr`,77)(1482,`td`,15)(1483,`div`,24)(1484,`span`,25),Sk(1485,` p-show-thumbnail`),vu(1486,`br`),Kg()()(),Qc(1487,`td`,19)(1488,`code`,28),Sk(1489,`boolean`),Kg()(),Qc(1490,`td`,21)(1491,`p`)(1492,`code`),Sk(1493,`true`),Kg()()(),Qc(1494,`td`,22)(1495,`em`)(1496,`strong`),Sk(1497,`(opcional)`),Kg()(),Qc(1498,`p`),Sk(1499,`Exibe a pré-visualização de imagens ao anexá-las.`),Kg(),Qc(1500,`blockquote`)(1501,`p`),Sk(1502,`Propriedade funciona apenas em arquivos de formato de imagem (`),Qc(1503,`code`),Sk(1504,`.png`),Kg(),Sk(1505,`, `),Qc(1506,`code`),Sk(1507,`.jpg`),Kg(),Sk(1508,`, `),Qc(1509,`code`),Sk(1510,`.jpeg`),Kg(),Sk(1511,` e `),Qc(1512,`code`),Sk(1513,`.gif`),Kg(),Sk(1514,`).
Ser\xE1 ignorada em outros tipos de arquivo.`),Kg()()()(),Qc(1515,`tr`,78)(1516,`td`,15)(1517,`div`,24)(1518,`span`,25),Sk(1519,` p-size`),vu(1520,`br`),Kg()()(),Qc(1521,`td`,19)(1522,`code`,26),Sk(1523,`string`),Kg()(),Qc(1524,`td`,21)(1525,`p`)(1526,`code`),Sk(1527,`medium`),Kg()()(),Qc(1528,`td`,22)(1529,`em`)(1530,`strong`),Sk(1531,`(opcional)`),Kg()(),Qc(1532,`p`),Sk(1533,`Define o tamanho e as ações do componente:`),Kg(),Qc(1534,`ul`)(1535,`li`)(1536,`code`),Sk(1537,`small`),Kg(),Sk(1538,`: altura do button como 32px (disponível apenas para acessibilidade AA).`),Kg(),Qc(1539,`li`)(1540,`code`),Sk(1541,`medium`),Kg(),Sk(1542,`: altura do button como 44px.`),Kg()(),Qc(1543,`blockquote`)(1544,`p`),Sk(1545,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Qc(1546,`code`),Sk(1547,`medium`),Kg(),Sk(1548,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Qc(1549,`a`,79),Sk(1550,`po-theme`),Kg(),Sk(1551,`.`),Kg()()()(),Qc(1552,`tr`,80)(1553,`td`,15)(1554,`div`,24)(1555,`span`,25),Sk(1556,` p-url`),vu(1557,`br`),Kg()()(),Qc(1558,`td`,19)(1559,`code`,26),Sk(1560,`string`),Kg()(),Qc(1561,`td`,21),Sk(1562,`-`),Kg(),Qc(1563,`td`,22)(1564,`p`),Sk(1565,`URL que deve ser feita a requisição com os arquivos selecionados.`),Kg()()()(),Qc(1566,`h3`,10),Sk(1567,`Métodos`),Kg(),Qc(1568,`table`,81)(1569,`tr`,82)(1570,`th`,83)(1571,`div`,24)(1572,`h4`)(1573,`span`,25),Sk(1574,` clear `),Kg()()()()(),Qc(1575,`tr`,22)(1576,`td`,22)(1577,`p`),Sk(1578,`Método responsável por `),Qc(1579,`strong`),Sk(1580,`limpar`),Kg(),Sk(1581,` o(s) arquivo(s) selecionado(s).`),Kg()()()(),vu(1582,`br`),Qc(1583,`table`,84)(1584,`tr`,82)(1585,`th`,83)(1586,`div`,24)(1587,`h4`)(1588,`span`,25),Sk(1589,` focus `),Kg()()()()(),Qc(1590,`tr`,22)(1591,`td`,22)(1592,`p`),Sk(1593,`Função que atribui foco ao componente.`),Kg(),Qc(1594,`p`),Sk(1595,`Para utilizá-la é necessário ter a instância do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:`),Kg(),Qc(1596,`pre`)(1597,`code`),Sk(1598,`import { PoUploadComponent } from '@po-ui/ng-components';

...

@ViewChild(PoUploadComponent, { static: true }) upload: PoUploadComponent;

focusUpload() {
  this.upload.focus();
}
`),Kg()()()()(),vu(1599,`br`),Qc(1600,`table`,85)(1601,`tr`,82)(1602,`th`,83)(1603,`div`,24)(1604,`h4`)(1605,`span`,25),Sk(1606,` closeModal `),Kg()()()()(),Qc(1607,`tr`,22)(1608,`td`,22)(1609,`p`),Sk(1610,`Método responsável por fechar o modal.`),Kg()()()(),vu(1611,`br`),Qc(1612,`table`,86)(1613,`tr`,82)(1614,`th`,83)(1615,`div`,24)(1616,`h4`)(1617,`span`,25),Sk(1618,` selectFiles `),Kg()()()()(),Qc(1619,`tr`,22)(1620,`td`,22)(1621,`p`),Sk(1622,`Método responsável por `),Qc(1623,`strong`),Sk(1624,`abrir`),Kg(),Sk(1625,` a janela para seleção de arquivo(s).`),Kg()()()(),vu(1626,`br`),Qc(1627,`table`,87)(1628,`tr`,82)(1629,`th`,83)(1630,`div`,24)(1631,`h4`)(1632,`span`,25),Sk(1633,` sendFiles `),Kg()()()()(),Qc(1634,`tr`,22)(1635,`td`,22)(1636,`p`),Sk(1637,`Método responsável por `),Qc(1638,`strong`),Sk(1639,`enviar`),Kg(),Sk(1640,` o(s) arquivo(s) selecionado(s).`),Kg()()()(),vu(1641,`br`),Qc(1642,`table`,88)(1643,`tr`,82)(1644,`th`,83)(1645,`div`,24)(1646,`h4`)(1647,`span`,25),Sk(1648,` showAdditionalHelp `),Kg()()()()(),Qc(1649,`tr`,22)(1650,`td`,22)(1651,`p`),Sk(1652,`Método que exibe `),Qc(1653,`code`),Sk(1654,`p-helper`),Kg(),Sk(1655,` ou executa a ação definida em `),Qc(1656,`code`),Sk(1657,`p-helper{eventOnClick}`),Kg(),Sk(1658,` ou em `),Qc(1659,`code`),Sk(1660,`p-additionalHelp`),Kg(),Sk(1661,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),Qc(1662,`code`),Sk(1663,`p-keydown`),Kg(),Sk(1664,`.`),Kg(),Qc(1665,`blockquote`)(1666,`p`),Sk(1667,`Exibe ou oculta o conteúdo do componente `),Qc(1668,`code`),Sk(1669,`po-helper`),Kg(),Sk(1670,` quando o componente estiver com foco.`),Kg()(),Qc(1671,`pre`)(1672,`code`),Sk(1673,`//Exemplo com p-label e p-helper
<po-upload
 #upload
 ...
 p-label="Label do upload"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, upload)"
></po-upload>
`),Kg()(),Qc(1674,`pre`)(1675,`code`),Sk(1676,`...
onKeyDown(event: KeyboardEvent, inp: PoUploadComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),Kg()()()()(),vu(1677,`br`),Qc(1678,`h3`),Sk(1679,`Interfaces`),Kg(),Qc(1680,`h4`,89)(1681,`code`,5),Sk(1682,`PoUploadFileRestrictions`),Kg()(),Qc(1683,`div`,2)(1684,`p`),Sk(1685,`Interface que define as restri\xE7\xF5es dos arquivos a serem selecionados com base em regras predefinidas
para o seu tamanho, extens\xE3o e quantidade.`),Kg()(),Qc(1686,`h4`,10),Sk(1687,`Propriedades`),Kg(),Qc(1688,`table`,11)(1689,`tr`,12)(1690,`th`,13),Sk(1691,`Nome`),Kg(),Qc(1692,`th`,13),Sk(1693,`Tipo`),Kg(),Qc(1694,`th`,13),Sk(1695,`Descrição`),Kg()(),Qc(1696,`tr`,90)(1697,`td`,15)(1698,`div`,24)(1699,`span`,25),Sk(1700,` allowedExtensions`),vu(1701,`br`),Kg()()(),Qc(1702,`td`,19)(1703,`code`,91),Sk(1704,`Array<string>`),Kg()(),Qc(1705,`td`,22)(1706,`em`)(1707,`strong`),Sk(1708,`(opcional)`),Kg()(),Qc(1709,`p`),Sk(1710,`Extensões permitidas de arquivos que serão enviados ao servidor, devendo ser informada uma coleção de extensões, por exemplo:`),Kg(),Qc(1711,`pre`)(1712,`code`),Sk(1713,`allowedExtensions = ['.png', '.jpg', '.pdf'];
`),Kg()()()(),Qc(1714,`tr`,92)(1715,`td`,15)(1716,`div`,24)(1717,`span`,25),Sk(1718,` maxFileSize`),vu(1719,`br`),Kg()()(),Qc(1720,`td`,19)(1721,`code`,44),Sk(1722,`number`),Kg()(),Qc(1723,`td`,22)(1724,`em`)(1725,`strong`),Sk(1726,`(opcional)`),Kg()(),Qc(1727,`p`),Sk(1728,`Tamanho máximo do arquivo a ser enviado ao servidor.`),Kg(),Qc(1729,`p`),Sk(1730,`Deve ser informado um valor em `),Qc(1731,`em`),Sk(1732,`bytes`),Kg(),Sk(1733,`, por exemplo: `),Qc(1734,`code`),Sk(1735,`31457280`),Kg(),Sk(1736,` (30MB).`),Kg(),Qc(1737,`blockquote`)(1738,`p`),Sk(1739,`Por padrão o valor é `),Qc(1740,`code`),Sk(1741,`30 MB`),Kg(),Sk(1742,`.`),Kg()()()(),Qc(1743,`tr`,93)(1744,`td`,15)(1745,`div`,24)(1746,`span`,25),Sk(1747,` maxFiles`),vu(1748,`br`),Kg()()(),Qc(1749,`td`,19)(1750,`code`,44),Sk(1751,`number`),Kg()(),Qc(1752,`td`,22)(1753,`em`)(1754,`strong`),Sk(1755,`(opcional)`),Kg()(),Qc(1756,`p`),Sk(1757,`Quantidade máxima de arquivos para o `),Qc(1758,`em`),Sk(1759,`upload`),Kg(),Sk(1760,`.`),Kg(),Qc(1761,`blockquote`)(1762,`p`),Sk(1763,`Esta propriedade será válida somente se a propriedade `),Qc(1764,`code`),Sk(1765,`p-multiple`),Kg(),Sk(1766,` estiver habilitada e seu valor for maior do que zero.`),Kg()()()(),Qc(1767,`tr`,94)(1768,`td`,15)(1769,`div`,24)(1770,`span`,25),Sk(1771,` minFileSize`),vu(1772,`br`),Kg()()(),Qc(1773,`td`,19)(1774,`code`,44),Sk(1775,`number`),Kg()(),Qc(1776,`td`,22)(1777,`em`)(1778,`strong`),Sk(1779,`(opcional)`),Kg()(),Qc(1780,`p`),Sk(1781,`Tamanho mínimo em `),Qc(1782,`em`),Sk(1783,`bytes`),Kg(),Sk(1784,` do arquivo que será enviado ao servidor.`),Kg(),Qc(1785,`blockquote`)(1786,`p`),Sk(1787,`Por padrão o valor é `),Qc(1788,`code`),Sk(1789,`0`),Kg(),Sk(1790,`.`),Kg()()()()(),Qc(1791,`h4`,95)(1792,`code`,5),Sk(1793,`PoUploadLiterals`),Kg()(),Qc(1794,`div`,2)(1795,`p`),Sk(1796,`Interface para definição das literais usadas no `),Qc(1797,`code`),Sk(1798,`po-upload`),Kg(),Sk(1799,`.`),Kg()(),Qc(1800,`h4`,10),Sk(1801,`Propriedades`),Kg(),Qc(1802,`table`,11)(1803,`tr`,12)(1804,`th`,13),Sk(1805,`Nome`),Kg(),Qc(1806,`th`,13),Sk(1807,`Tipo`),Kg(),Qc(1808,`th`,13),Sk(1809,`Descrição`),Kg()(),Qc(1810,`tr`,96)(1811,`td`,15)(1812,`div`,24)(1813,`span`,25),Sk(1814,` close`),vu(1815,`br`),Kg()()(),Qc(1816,`td`,19)(1817,`code`,26),Sk(1818,`string`),Kg()(),Qc(1819,`td`,22)(1820,`em`)(1821,`strong`),Sk(1822,`(opcional)`),Kg()(),Qc(1823,`p`),Sk(1824,`Texto do leitor de tela ao focar no ícone de fechar.`),Kg()()(),Qc(1825,`tr`,97)(1826,`td`,15)(1827,`div`,24)(1828,`span`,25),Sk(1829,` continue`),vu(1830,`br`),Kg()()(),Qc(1831,`td`,19)(1832,`code`,26),Sk(1833,`string`),Kg()(),Qc(1834,`td`,22)(1835,`em`)(1836,`strong`),Sk(1837,`(opcional)`),Kg()(),Qc(1838,`p`),Sk(1839,`Texto do botão padrão do modal de pré-visualizar.`),Kg()()(),Qc(1840,`tr`,98)(1841,`td`,15)(1842,`div`,24)(1843,`span`,25),Sk(1844,` doneText`),vu(1845,`br`),Kg()()(),Qc(1846,`td`,19)(1847,`code`,26),Sk(1848,`string`),Kg()(),Qc(1849,`td`,22)(1850,`em`)(1851,`strong`),Sk(1852,`(opcional)`),Kg()(),Qc(1853,`p`),Sk(1854,`Texto a ser exibido no container de informação quando o estado for de sucesso.`),Kg()()(),Qc(1855,`tr`,99)(1856,`td`,15)(1857,`div`,24)(1858,`span`,25),Sk(1859,` dragFilesHere`),vu(1860,`br`),Kg()()(),Qc(1861,`td`,19)(1862,`code`,26),Sk(1863,`string`),Kg()(),Qc(1864,`td`,22)(1865,`em`)(1866,`strong`),Sk(1867,`(opcional)`),Kg()(),Qc(1868,`p`),Sk(1869,`Texto indicativo para a área onde os arquivos devem ser arrastados quando utilizada a propriedade `),Qc(1870,`code`),Sk(1871,`p-drag-drop`),Kg(),Sk(1872,`.`),Kg()()(),Qc(1873,`tr`,100)(1874,`td`,15)(1875,`div`,24)(1876,`span`,25),Sk(1877,` dragFoldersHere`),vu(1878,`br`),Kg()()(),Qc(1879,`td`,19)(1880,`code`,26),Sk(1881,`string`),Kg()(),Qc(1882,`td`,22)(1883,`em`)(1884,`strong`),Sk(1885,`(opcional)`),Kg()(),Qc(1886,`p`),Sk(1887,`Texto indicativo para a área onde os diretórios devem ser arrastados quando utilizada a propriedade `),Qc(1888,`code`),Sk(1889,`p-drag-drop`),Kg(),Sk(1890,`.`),Kg()()(),Qc(1891,`tr`,101)(1892,`td`,15)(1893,`div`,24)(1894,`span`,25),Sk(1895,` dropFilesHere`),vu(1896,`br`),Kg()()(),Qc(1897,`td`,19)(1898,`code`,26),Sk(1899,`string`),Kg()(),Qc(1900,`td`,22)(1901,`em`)(1902,`strong`),Sk(1903,`(opcional)`),Kg()(),Qc(1904,`p`),Sk(1905,`Texto indicativo para a área onde os arquivos devem ser soltos quando utilizada a propriedade `),Qc(1906,`code`),Sk(1907,`p-drag-drop`),Kg()()()(),Qc(1908,`tr`,102)(1909,`td`,15)(1910,`div`,24)(1911,`span`,25),Sk(1912,` dropFoldersHere`),vu(1913,`br`),Kg()()(),Qc(1914,`td`,19)(1915,`code`,26),Sk(1916,`string`),Kg()(),Qc(1917,`td`,22)(1918,`em`)(1919,`strong`),Sk(1920,`(opcional)`),Kg()(),Qc(1921,`p`),Sk(1922,`Texto indicativo para a área onde os diretórios devem ser soltos quando utilizada a propriedade `),Qc(1923,`code`),Sk(1924,`p-drag-drop`),Kg(),Sk(1925,`.`),Kg()()(),Qc(1926,`tr`,103)(1927,`td`,15)(1928,`div`,24)(1929,`span`,25),Sk(1930,` errorOccurred`),vu(1931,`br`),Kg()()(),Qc(1932,`td`,19)(1933,`code`,26),Sk(1934,`string`),Kg()(),Qc(1935,`td`,22)(1936,`em`)(1937,`strong`),Sk(1938,`(opcional)`),Kg()(),Qc(1939,`p`),Sk(1940,`Texto a ser exibido quando ocorrer erro no envio do arquivo.`),Kg()()(),Qc(1941,`tr`,104)(1942,`td`,15)(1943,`div`,24)(1944,`span`,25),Sk(1945,` files`),vu(1946,`br`),Kg()()(),Qc(1947,`td`,19)(1948,`code`,26),Sk(1949,`string`),Kg()(),Qc(1950,`td`,22)(1951,`em`)(1952,`strong`),Sk(1953,`(opcional)`),Kg()(),Qc(1954,`p`),Sk(1955,`Parâmetro `),Qc(1956,`em`),Sk(1957,`files`),Kg(),Sk(1958,` para o texto de exibição quando arrastado um arquivo para um local inválido com a opção de `),Qc(1959,`em`),Sk(1960,`dragDrop`),Kg(),Sk(1961,`.`),Kg()()(),Qc(1962,`tr`,105)(1963,`td`,15)(1964,`div`,24)(1965,`span`,25),Sk(1966,` folders`),vu(1967,`br`),Kg()()(),Qc(1968,`td`,19)(1969,`code`,26),Sk(1970,`string`),Kg()(),Qc(1971,`td`,22)(1972,`em`)(1973,`strong`),Sk(1974,`(opcional)`),Kg()(),Qc(1975,`p`),Sk(1976,`Parâmetro `),Qc(1977,`em`),Sk(1978,`folders`),Kg(),Sk(1979,` para o texto de exibição quando arrastado um arquivo para um local inválido com a opção de `),Qc(1980,`em`),Sk(1981,`dragDrop`),Kg(),Sk(1982,`.`),Kg()()(),Qc(1983,`tr`,106)(1984,`td`,15)(1985,`div`,24)(1986,`span`,25),Sk(1987,` invalidDropArea`),vu(1988,`br`),Kg()()(),Qc(1989,`td`,19)(1990,`code`,26),Sk(1991,`string`),Kg()(),Qc(1992,`td`,22)(1993,`em`)(1994,`strong`),Sk(1995,`(opcional)`),Kg()(),Qc(1996,`p`),Sk(1997,`Texto exibido caso o usuário arrastar um arquivo para um local inválido ao utilizar a opção de `),Qc(1998,`em`),Sk(1999,`dragDrop`),Kg(),Sk(2e3,`.`),Kg()()(),Qc(2001,`tr`,107)(2002,`td`,15)(2003,`div`,24)(2004,`span`,25),Sk(2005,` preview`),vu(2006,`br`),Kg()()(),Qc(2007,`td`,19)(2008,`code`,26),Sk(2009,`string`),Kg()(),Qc(2010,`td`,22)(2011,`em`)(2012,`strong`),Sk(2013,`(opcional)`),Kg()(),Qc(2014,`p`),Sk(2015,`Título do modal de pré-visualizar.`),Kg()()(),Qc(2016,`tr`,108)(2017,`td`,15)(2018,`div`,24)(2019,`span`,25),Sk(2020,` selectFile`),vu(2021,`br`),Kg()()(),Qc(2022,`td`,19)(2023,`code`,26),Sk(2024,`string`),Kg()(),Qc(2025,`td`,22)(2026,`em`)(2027,`strong`),Sk(2028,`(opcional)`),Kg()(),Qc(2029,`p`),Sk(2030,`Texto exibido no label do botão de seleção dos arquivos.`),Kg()()(),Qc(2031,`tr`,109)(2032,`td`,15)(2033,`div`,24)(2034,`span`,25),Sk(2035,` selectFiles`),vu(2036,`br`),Kg()()(),Qc(2037,`td`,19)(2038,`code`,26),Sk(2039,`string`),Kg()(),Qc(2040,`td`,22)(2041,`em`)(2042,`strong`),Sk(2043,`(opcional)`),Kg()(),Qc(2044,`p`),Sk(2045,`Texto exibido no label do botão de seleção dos arquivos ao utilizar a propriedade `),Qc(2046,`code`),Sk(2047,`p-multiple`),Kg(),Sk(2048,`.`),Kg()()(),Qc(2049,`tr`,110)(2050,`td`,15)(2051,`div`,24)(2052,`span`,25),Sk(2053,` selectFilesOnComputer`),vu(2054,`br`),Kg()()(),Qc(2055,`td`,19)(2056,`code`,26),Sk(2057,`string`),Kg()(),Qc(2058,`td`,22)(2059,`em`)(2060,`strong`),Sk(2061,`(opcional)`),Kg()(),Qc(2062,`p`),Sk(2063,`Texto utilizado para indicar a possibilidade de sele\xE7\xE3o de arquivos na \xE1rea onde podem ser arrastados os arquivos
ao utilizar a op\xE7\xE3o de `),Qc(2064,`em`),Sk(2065,`dragDrop`),Kg(),Sk(2066,`.`),Kg()()(),Qc(2067,`tr`,111)(2068,`td`,15)(2069,`div`,24)(2070,`span`,25),Sk(2071,` selectFolder`),vu(2072,`br`),Kg()()(),Qc(2073,`td`,19)(2074,`code`,26),Sk(2075,`string`),Kg()(),Qc(2076,`td`,22)(2077,`em`)(2078,`strong`),Sk(2079,`(opcional)`),Kg()(),Qc(2080,`p`),Sk(2081,`Texto exibido no label do botão de seleção dos arquivos ao utilizar a propriedade `),Qc(2082,`code`),Sk(2083,`p-directory`),Kg(),Sk(2084,`.`),Kg()()(),Qc(2085,`tr`,112)(2086,`td`,15)(2087,`div`,24)(2088,`span`,25),Sk(2089,` selectFolderOnComputer`),vu(2090,`br`),Kg()()(),Qc(2091,`td`,19)(2092,`code`,26),Sk(2093,`string`),Kg()(),Qc(2094,`td`,22)(2095,`em`)(2096,`strong`),Sk(2097,`(opcional)`),Kg()(),Qc(2098,`p`),Sk(2099,`Texto utilizado para indicar a possibilidade de sele\xE7\xE3o de diret\xF3rio na \xE1rea onde podem ser arrastados os arquivos
ao utilizar a op\xE7\xE3o de `),Qc(2100,`em`),Sk(2101,`dragDrop`),Kg(),Sk(2102,`.`),Kg()()(),Qc(2103,`tr`,113)(2104,`td`,15)(2105,`div`,24)(2106,`span`,25),Sk(2107,` sentWithSuccess`),vu(2108,`br`),Kg()()(),Qc(2109,`td`,19)(2110,`code`,26),Sk(2111,`string`),Kg()(),Qc(2112,`td`,22)(2113,`em`)(2114,`strong`),Sk(2115,`(opcional)`),Kg()(),Qc(2116,`p`),Sk(2117,`Texto a ser exibido quando o envio do arquivo for realizado com sucesso.`),Kg()()(),Qc(2118,`tr`,114)(2119,`td`,15)(2120,`div`,24)(2121,`span`,25),Sk(2122,` startSending`),vu(2123,`br`),Kg()()(),Qc(2124,`td`,19)(2125,`code`,26),Sk(2126,`string`),Kg()(),Qc(2127,`td`,22)(2128,`em`)(2129,`strong`),Sk(2130,`(opcional)`),Kg()(),Qc(2131,`p`),Sk(2132,`Texto exibido no label do botão para iniciar o envio dos arquivos.`),Kg()()(),Qc(2133,`tr`,115)(2134,`td`,15)(2135,`div`,24)(2136,`span`,25),Sk(2137,` thumbnail`),vu(2138,`br`),Kg()()(),Qc(2139,`td`,19)(2140,`code`,26),Sk(2141,`string`),Kg()(),Qc(2142,`td`,22)(2143,`em`)(2144,`strong`),Sk(2145,`(opcional)`),Kg()(),Qc(2146,`p`),Sk(2147,`Texto do leitor da miniatura da imagem.`),Kg()()(),Qc(2148,`tr`,116)(2149,`td`,15)(2150,`div`,24)(2151,`span`,25),Sk(2152,` tryAgain`),vu(2153,`br`),Kg()()(),Qc(2154,`td`,19)(2155,`code`,26),Sk(2156,`string`),Kg()(),Qc(2157,`td`,22)(2158,`em`)(2159,`strong`),Sk(2160,`(opcional)`),Kg()(),Qc(2161,`p`),Sk(2162,`Texto de Tente novamente ao ocorrer erro ao enviar.`),Kg()()(),Qc(2163,`tr`,117)(2164,`td`,15)(2165,`div`,24)(2166,`span`,25),Sk(2167,` uploadingText`),vu(2168,`br`),Kg()()(),Qc(2169,`td`,19)(2170,`code`,26),Sk(2171,`string`),Kg()(),Qc(2172,`td`,22)(2173,`em`)(2174,`strong`),Sk(2175,`(opcional)`),Kg()(),Qc(2176,`p`),Sk(2177,`Texto a ser exibido no container de informação quando o estado for enviando.`),Kg()()()(),Qc(2178,`h4`,118)(2179,`code`,5),Sk(2180,`PoProgressAction`),Kg()(),Qc(2181,`div`,2)(2182,`p`),Sk(2183,`Interface para as ações dos componentes po-progress e po-upload.`),Kg()(),Qc(2184,`h4`,10),Sk(2185,`Propriedades`),Kg(),Qc(2186,`table`,11)(2187,`tr`,12)(2188,`th`,13),Sk(2189,`Nome`),Kg(),Qc(2190,`th`,13),Sk(2191,`Tipo`),Kg(),Qc(2192,`th`,13),Sk(2193,`Descrição`),Kg()(),Qc(2194,`tr`,119)(2195,`td`,15)(2196,`div`,24)(2197,`span`,25),Sk(2198,` disabled`),vu(2199,`br`),Kg()()(),Qc(2200,`td`,19)(2201,`code`,28),Sk(2202,`boolean `),Kg(),Qc(2203,`code`,120),Sk(2204,` Function`),Kg()(),Qc(2205,`td`,22)(2206,`em`)(2207,`strong`),Sk(2208,`(opcional)`),Kg()(),Qc(2209,`p`),Sk(2210,`Função que deve retornar um booleano para habilitar ou desabilitar a ação para o registro selecionado.`),Kg(),Qc(2211,`p`),Sk(2212,`Também é possível informar diretamente um valor booleano que vai habilitar ou desabilitar a ação para todos os registros.`),Kg()()(),Qc(2213,`tr`,121)(2214,`td`,15)(2215,`div`,24)(2216,`span`,25),Sk(2217,` icon`),vu(2218,`br`),Kg()()(),Qc(2219,`td`,19)(2220,`code`,26),Sk(2221,`string `),Kg(),Qc(2222,`code`,122),Sk(2223,` TemplateRef<void>`),Kg()(),Qc(2224,`td`,22)(2225,`em`)(2226,`strong`),Sk(2227,`(opcional)`),Kg()(),Qc(2228,`p`),Sk(2229,`Define um ícone que será exibido ao lado esquerdo do rótulo.`),Kg(),Qc(2230,`p`),Sk(2231,`É possível usar qualquer um dos ícones da `),Qc(2232,`a`,123),Sk(2233,`Biblioteca de ícones`),Kg(),Sk(2234,`. conforme exemplo abaixo:`),Kg(),Qc(2235,`pre`)(2236,`code`),Sk(2237,`<po-component
 [p-property]="[{ label: 'PHOSPHOR ICON', icon: 'an an-newspaper' }]">
</po-component>
`),Kg()(),Qc(2238,`p`),Sk(2239,`Também é possível utilizar outras fontes de ícones, por exemplo a biblioteca Font Awesome, da seguinte forma:`),Kg(),Qc(2240,`pre`)(2241,`code`),Sk(2242,`<po-component
 [p-property]="[{ label: 'FA ICON', icon: 'fa fa-icon-podcast' }]">
</po-component>
`),Kg()(),Qc(2243,`p`),Sk(2244,`Outra opção seria a customização do ícone através do `),Qc(2245,`code`),Sk(2246,`TemplateRef`),Kg(),Sk(2247,`, conforme exemplo abaixo:
component.html:`),Kg(),Qc(2248,`pre`)(2249,`code`),Sk(2250,`<ng-template #iconTemplate>
  <ion-icon name="heart"></ion-icon>
</ng-template>

<po-component [p-property]="myProperty"></po-component>
`),Kg()(),Qc(2251,`p`),Sk(2252,`component.ts:`),Kg(),Qc(2253,`pre`)(2254,`code`),Sk(2255,`@ViewChild('iconTemplate', { static: true } ) iconTemplate : TemplateRef<void>;

myProperty = [
 {
   label: 'FA ICON',
   icon: this.iconTemplate
 }
];
`),Kg()()()(),Qc(2256,`tr`,124)(2257,`td`,15)(2258,`div`,24)(2259,`span`,25),Sk(2260,` label`),vu(2261,`br`),Kg()()(),Qc(2262,`td`,19)(2263,`code`,26),Sk(2264,`string`),Kg()(),Qc(2265,`td`,22)(2266,`em`)(2267,`strong`),Sk(2268,`(opcional)`),Kg()(),Qc(2269,`p`),Sk(2270,`Rótulo da ação.`),Kg()()(),Qc(2271,`tr`,125)(2272,`td`,15)(2273,`div`,24)(2274,`span`,25),Sk(2275,` type`),vu(2276,`br`),Kg()()(),Qc(2277,`td`,19)(2278,`code`,26),Sk(2279,`string`),Kg()(),Qc(2280,`td`,22)(2281,`em`)(2282,`strong`),Sk(2283,`(opcional)`),Kg()(),Qc(2284,`p`),Sk(2285,`Define a cor do item, sendo `),Qc(2286,`code`),Sk(2287,`default`),Kg(),Sk(2288,` o padrão.`),Kg(),Qc(2289,`p`),Sk(2290,`Valores válidos:`),Kg(),Qc(2291,`ul`)(2292,`li`)(2293,`code`),Sk(2294,`default`),Kg()(),Qc(2295,`li`)(2296,`code`),Sk(2297,`danger`),Kg(),Sk(2298,` - indicado para ações exclusivas (excluir, sair).`),Kg()()()(),Qc(2299,`tr`,126)(2300,`td`,15)(2301,`div`,24)(2302,`span`,25),Sk(2303,` visible`),vu(2304,`br`),Kg()()(),Qc(2305,`td`,19)(2306,`code`,28),Sk(2307,`boolean `),Kg(),Qc(2308,`code`,120),Sk(2309,` Function`),Kg()(),Qc(2310,`td`,22)(2311,`em`)(2312,`strong`),Sk(2313,`(opcional)`),Kg()(),Qc(2314,`p`),Sk(2315,`Define se a ação será visível.`),Kg(),Qc(2316,`blockquote`)(2317,`p`),Sk(2318,`Caso o valor não seja especificado a ação será visível.`),Kg()(),Qc(2319,`p`),Sk(2320,`Opções para tornar a ação visível ou não:`),Kg(),Qc(2321,`ul`)(2322,`li`)(2323,`p`),Sk(2324,`Função que deve retornar um booleano.`),Kg()(),Qc(2325,`li`)(2326,`p`),Sk(2327,`Informar diretamente um valor booleano.`),Kg()()()()()()())},dependencies:[P],encapsulation:2,changeDetection:1})}return a})();function ft(a,ae){if(a&1){let p=YO();Qc(0,`po-tab`,4),vt$1(`p-click`,function(){B_(p);let i=ek();return U_(i.changeTab(`web`))}),vu(1,`sample-po-upload-basic-view`)(2,`sample-po-upload-labs-view`)(3,`sample-po-upload-resume-view`)(4,`sample-po-upload-rs-view`)(5,`sample-po-upload-download-view`)(6,`sample-po-upload-preview-view`),Kg()}if(a&2){let p=ek();Rb(`p-active`,p.activeTab===`web`)}}var vt=[{path:``,component:(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=6;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(p,r){this.route=p,this.router=r}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(p=>{let r=p.view;this.hidePoWebSample=this.samplesLength===0,this.activeTab=this.hidePoWebSample?`doc`:r||`web`})}changeTab(p){this.router.navigate([],{queryParams:{view:p},queryParamsHandling:`merge`}),this.activeTab=p}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(r){return new(r||a)(I(ar),I(An))};static ɵcmp=Jn({type:a,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:3,consts:[[`p-title`,`Upload`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Exemplos`,3,`p-active`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-active`]],template:function(r,i){r&1&&(Qc(0,`po-page-default`,0)(1,`po-tabs`,1),FO(2,ft,7,1,`po-tab`,2),Qc(3,`po-tab`,3),vt$1(`p-click`,function(){return i.changeTab(`doc`)}),vu(4,`sample-po-upload-doc`),Kg()()()),r&2&&(Rb(`p-actions`,i.actions),wg(2),VO(i.hidePoWebSample?-1:2),wg(),Rb(`p-active`,i.activeTab===`doc`))},dependencies:[Mze,tre,are,Te,ke,Ae,ze,Ve,Oe,Be],encapsulation:2,changeDetection:1})}return a})()}];var We=(()=>{class a{static ɵfac=function(r){return new(r||a)};static ɵmod=ge({type:a});static ɵinj=de({imports:[GV.forChild(vt),GV]})}return a})();var gn=(()=>{class a{static ɵfac=function(r){return new(r||a)};static ɵmod=ge({type:a});static ɵinj=de({imports:[M,We]})}return a})();export{gn as DocPoUploadModule};