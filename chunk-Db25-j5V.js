import{m as P,p as M}from"./main-RWBWY5VM.js";import{$r as No,$t as ia,A as Goe,Ai as Vt,Ba as q0,Bn as yae,Br as Kb,Ci as U_,Dn as tre,E as G4,Er as GV,Ft as are,G as Nf,Gi as _t,Hi as Zb,I as Joe,Ia as p,Ir as Jc,Ji as ar,Ki as _u,Lr as Jn,M as I4,Mi as WL,Mt as Zte,Na as ok,O as Gae,Oi as Vk,Pi as Wk,Pr as I,Qi as dF,Qn as AZ,R as Koe,T as Fze,Tr as G0,Vi as ZL,Vr as Kg,W as Mze,Wr as LO,Ya as tk,Yi as c1,_a as jO,_i as RZ,ca as ge,do as xo,ea as de,er as Ab,fn as oi,fr as Cu,gt as Tt,it as Ru,jr as H_,jt as Zoe,li as QL,nt as R4,pa as i1,qr as Mk,ro as wg,so as xZ,t as $4,tn as j4,tr as An,ui as QP,vi as Rk,xa as jk,zi as Yk,zr as KO}from"./chunk-CTJH0VS3.js";var _e=(()=>{class l{static ɵfac=function(r){return new(r||l)};static ɵcmp=Jn({type:l,selectors:[[`sample-po-upload-basic`]],standalone:!1,decls:1,vars:0,consts:[[`name`,`upload`,`p-label`,`PO Upload`,`p-url`,`https://po-sample-api.onrender.com/v1/uploads/addFile`]],template:function(r,i){r&1&&_u(0,`po-upload`,0)},dependencies:[$4],encapsulation:2,changeDetection:1})}return l})();var Pe=(()=>{class l{static ɵfac=function(r){return new(r||l)};static ɵcmp=Jn({type:l,selectors:[[`sample-po-upload-basic-view`]],standalone:!1,decls:24,vars:0,consts:[[`id`,`sample-po-upload-basic`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`data-tour`,`sample-tabs`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-upload-basic/sample-po-upload-basic.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-upload-basic/sample-po-upload-basic.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`]],template:function(r,i){r&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Mk(3,`PO Upload Basic`),Kg()(),Jc(4,`div`,2)(5,`po-tabs`,3)(6,`po-tab`,4)(7,`div`,5),_u(8,`sample-po-upload-basic`),Kg()(),Jc(9,`po-tab`,6)(10,`div`)(11,`label`,7),Mk(12,`sample-po-upload-basic/sample-po-upload-basic.component.html`),Kg(),Jc(13,`div`,8)(14,`pre`,9),Mk(15,`<po-upload name="upload" p-label="PO Upload" p-url="https://po-sample-api.onrender.com/v1/uploads/addFile"> </po-upload>
`),Kg()()()(),Jc(16,`po-tab`,10)(17,`div`)(18,`label`,7),Mk(19,`sample-po-upload-basic/sample-po-upload-basic.component.ts`),Kg(),Jc(20,`div`,11)(21,`pre`,12),Mk(22,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-upload-basic',
  templateUrl: 'sample-po-upload-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoUploadBasicComponent {}
`),Kg()()()()()(),_u(23,`hr`))},dependencies:[P,tre,are,_e],encapsulation:2,changeDetection:1})}return l})();function He(l,te){if(l&1&&(Jc(0,`div`)(1,`po-widget`,22)(2,`form`,23)(3,`po-input`,24),G0(),Kg(),Jc(4,`po-select`,25),G0(),Kg(),Jc(5,`po-select`,26),G0(),Kg(),Jc(6,`po-switch`,27),G0(),Kg(),Jc(7,`po-switch`,28),G0(),Kg()()()()),l&2){let d=tk();wg(2),Ab(`formGroup`,d.actionForm),wg(),q0(),wg(),Ab(`p-options`,d.iconOptions),q0(),wg(),Ab(`p-options`,d.typeOptions),q0(),wg(),q0(),wg(),q0()}}var Fe=(()=>{class l{fb=p(c1);helperText;allowedExtensions;customLiterals;dragDropHeight;event;formField;help;label;literals;modalActions;maxFiles;maxSize;minSize;properties;restrictions;upload;url;headers;headersLabs;action;customModalActions;actionForm;size;propertiesOptions=[{value:`autoupload`,label:`Automatic upload`},{value:`directory`,label:`Directory`},{value:`disabled`,label:`Disabled`},{value:`disabledRemoveFile`,label:`Disabled Remove File`},{value:`dragDrop`,label:`Drag Drop`},{value:`requiredUrl`,label:`required Url`},{value:`multiple`,label:`Multiple upload`},{value:`optional`,label:`Optional`},{value:`required`,label:`Required`},{value:`showRequired`,label:`Show Required`},{value:`restrictionsInfo`,label:`Hide Restrictions Info`},{value:`selectButton`,label:`Hide Select Files Button`},{value:`sendButton`,label:`Hide Send Files Button`},{value:`showCustomAction`,label:`Add Custom Action to Progress`},{value:`labelTextWrap`,label:`Label Text Wrap`},{value:`compactLabel`,label:`Compact Label`},{value:`showThumbnail`,label:`Show Thumbnail`},{value:`loading`,label:`Loading`}];sizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];typeOptions=[{label:`Danger`,value:`danger`},{label:`Default`,value:`default`}];iconOptions=[{value:`an an-download`,label:`an an-download`},{value:`an an-Server`,label:`an an-Server`},{value:`an an-upload`,label:`an an-upload`},{value:`an an-share`,label:`an an-share`}];constructor(){this.initializeActionForm()}initializeActionForm(){this.actionForm=this.fb.group({label:[``],icon:[``],type:[`default`],visible:[!0],disabled:[!1]})}ngOnInit(){this.restore(),this.actionForm.valueChanges.subscribe(d=>{this.updateAction(d)})}updateAction(d){this.action=d}changeEvent(d){this.event=d}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals)}catch(d){this.customLiterals=void 0}}changeModalActions(){try{this.customModalActions=JSON.parse(this.modalActions)}catch(d){this.customModalActions=void 0}}onChangeHeaders(d){try{this.headers=JSON.parse(d)}catch(r){this.headers=void 0}}onChangeExtension(){let d=this.allowedExtensions.split(`,`).map(r=>r.trim());this.restrictions=Object.assign({},this.restrictions,{allowedExtensions:d})}onChangeMaxFiles(d){this.restrictions=Object.assign({},this.restrictions,{maxFiles:d})}onChangeMaxSize(d){this.restrictions=Object.assign({},this.restrictions,{maxFileSize:this.getValueInBytes(d)})}onChangeMinSize(d){this.restrictions=Object.assign({},this.restrictions,{minFileSize:this.getValueInBytes(d)})}restore(){this.helperText=``,this.allowedExtensions=void 0,this.customLiterals=void 0,this.dragDropHeight=void 0,this.event=void 0,this.formField=void 0,this.label=void 0,this.help=void 0,this.literals=``,this.modalActions=``,this.maxFiles=void 0,this.maxSize=void 0,this.minSize=void 0,this.properties=[],this.restrictions={},this.upload=void 0,this.url=`https://po-sample-api.onrender.com/v1/uploads/addFile`,this.headers=void 0,this.headersLabs=void 0,this.actionForm.reset({type:`default`,visible:!0}),this.action={label:``,type:`default`},this.customModalActions=[],this.size=`medium`}getValueInBytes(d){return 1048576*d}static ɵfac=function(r){return new(r||l)};static ɵcmp=Jn({type:l,selectors:[[`sample-po-upload-labs`]],standalone:!1,decls:29,vars:53,consts:[[`fRestrictions`,`ngForm`],[`name`,`upload`,3,`ngModelChange`,`p-custom-action-click`,`p-error`,`p-keydown`,`p-success`,`p-upload`,`p-open-modal-preview`,`p-remove`,`ngModel`,`p-helper`,`p-auto-upload`,`p-directory`,`p-disabled`,`p-required-url`,`p-disabled-remove-file`,`p-drag-drop`,`p-drag-drop-height`,`p-form-field`,`p-help`,`p-hide-select-button`,`p-hide-restrictions-info`,`p-hide-send-button`,`p-label`,`p-literals`,`p-loading`,`p-multiple`,`p-optional`,`p-required`,`p-show-required`,`p-show-thumbnail`,`p-restrictions`,`p-size`,`p-url`,`p-headers`,`p-custom-action`,`p-label-text-wrap`,`p-compact-label`,`p-custom-modal-actions`],[1,`po-row`],[`p-label`,`Model`,1,`po-md-6`,3,`p-value`],[`p-label`,`Event`,1,`po-md-6`,3,`p-value`],[`name`,`allowedExtensions`,`p-help`,`Digite as extensões permitidas separadas por vírgula`,`p-label`,`Allowed Extensions`,`p-placeholder`,`.png, .jpeg, .jpg`,1,`po-md-6`,3,`ngModelChange`,`p-change`,`ngModel`],[`name`,`maxFiles`,`p-clean`,``,`p-help`,`Requer p-multiple habilitado`,`p-label`,`Max Files`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`p-change`,`ngModel`],[`name`,`dragDropHeight`,`p-clean`,``,`p-help`,`Altura da área de arrastar e soltar`,`p-label`,`Drag Drop Height`,`p-min`,`160`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`name`,`minSize`,`p-clean`,``,`p-help`,`Em megabytes`,`p-label`,`Min File Size`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`p-change`,`ngModel`],[`name`,`maxSize`,`p-clean`,``,`p-help`,`Em megabytes`,`p-label`,`Max File Size`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`p-change`,`ngModel`],[`name`,`label`,`p-clean`,``,`p-label`,`Label`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`help`,`p-clean`,``,`p-label`,`Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`helperText`,`p-clean`,``,`p-label`,`Additional Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`formField`,`p-clean`,``,`p-label`,`Form Field`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`url`,`p-clean`,``,`p-label`,`URL`,`p-required`,``,1,`po-md-12`,`po-lg-6`,3,`ngModelChange`,`ngModel`],[`name`,`headers`,`p-help`,`Ex.: {"Authorization": "12312414"}`,`p-label`,`Headers`,1,`po-md-12`,`po-lg-6`,3,`ngModelChange`,`p-change`,`ngModel`],[`name`,`literals`,`p-help`,`Ex.: {"selectFile": "Select file", "deleteFile": "Delete file", "cancel": "Cancel sending"}`,`p-label`,`Literals`,1,`po-md-12`,`po-lg-6`,3,`ngModelChange`,`p-change`,`ngModel`],[`name`,`customModalActions`,`p-help`,`Ex.: [{"label": "Label", "disabled": false}]`,`p-label`,`Custom Modal Actions`,1,`po-md-12`,`po-lg-6`,3,`ngModelChange`,`p-change`,`ngModel`,`p-disabled`],[`name`,`properties`,`p-columns`,`4`,`p-help`,`Select any options`,`p-label`,`Properties`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`size`,`p-columns`,`4`,`p-label`,`Size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[1,`po-row`,`po-mt-1`],[`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`],[`p-title`,`Action Button`],[1,`po-row`,3,`formGroup`],[`formControlName`,`label`,`p-label`,`Label`,1,`po-md-6`,`po-lg-4`],[`formControlName`,`icon`,`p-label`,`Icon`,1,`po-md-6`,`po-lg-3`,3,`p-options`],[`formControlName`,`type`,`p-label`,`Type`,1,`po-md-6`,`po-lg-3`,3,`p-options`],[`formControlName`,`disabled`,`p-label`,`Disabled`,1,`po-md-3`,`po-lg-2`],[`formControlName`,`visible`,`p-label`,`Visible`,1,`po-md-3`,`po-lg-2`]],template:function(r,i){if(r&1){let s=KO();Jc(0,`po-upload`,1),G0(),Zb(`ngModelChange`,function(a){return U_(s),Rk(i.upload,a)||(i.upload=a),H_(a)}),_t(`p-custom-action-click`,function(){return i.changeEvent(`p-custom-action-click`)})(`p-error`,function(){return i.changeEvent(`p-error`)})(`p-keydown`,function(){return i.changeEvent(`p-keydown`)})(`p-success`,function(){return i.changeEvent(`p-success`)})(`p-upload`,function(){return i.changeEvent(`p-upload`)})(`p-upload`,function(){return i.changeEvent(`p-upload`)})(`p-open-modal-preview`,function(){return i.changeEvent(`p-open-modal-preview`)})(`p-remove`,function(){return i.changeEvent(`p-remove`)}),Kg(),_u(1,`po-divider`),Jc(2,`div`,2),_u(3,`po-info`,3),Wk(4,`json`),_u(5,`po-info`,4),Kg(),_u(6,`po-divider`),Jc(7,`div`,2)(8,`form`,null,0)(10,`po-input`,5),G0(),Zb(`ngModelChange`,function(a){return U_(s),Rk(i.allowedExtensions,a)||(i.allowedExtensions=a),H_(a)}),_t(`p-change`,function(){return i.onChangeExtension()}),Kg(),Jc(11,`po-number`,6),G0(),Zb(`ngModelChange`,function(a){return U_(s),Rk(i.maxFiles,a)||(i.maxFiles=a),H_(a)}),_t(`p-change`,function(){return i.onChangeMaxFiles(i.maxFiles)}),Kg(),Jc(12,`po-number`,7),G0(),Zb(`ngModelChange`,function(a){return U_(s),Rk(i.dragDropHeight,a)||(i.dragDropHeight=a),H_(a)}),Kg(),Jc(13,`po-number`,8),G0(),Zb(`ngModelChange`,function(a){return U_(s),Rk(i.minSize,a)||(i.minSize=a),H_(a)}),_t(`p-change`,function(){return i.onChangeMinSize(i.minSize)}),Kg(),Jc(14,`po-number`,9),G0(),Zb(`ngModelChange`,function(a){return U_(s),Rk(i.maxSize,a)||(i.maxSize=a),H_(a)}),_t(`p-change`,function(){return i.onChangeMaxSize(i.maxSize)}),Kg(),_u(15,`po-divider`),Jc(16,`po-input`,10),G0(),Zb(`ngModelChange`,function(a){return U_(s),Rk(i.label,a)||(i.label=a),H_(a)}),Kg(),Jc(17,`po-input`,11),G0(),Zb(`ngModelChange`,function(a){return U_(s),Rk(i.help,a)||(i.help=a),H_(a)}),Kg(),Jc(18,`po-input`,12),G0(),Zb(`ngModelChange`,function(a){return U_(s),Rk(i.helperText,a)||(i.helperText=a),H_(a)}),Kg(),Jc(19,`po-input`,13),G0(),Zb(`ngModelChange`,function(a){return U_(s),Rk(i.formField,a)||(i.formField=a),H_(a)}),Kg(),Jc(20,`po-input`,14),G0(),Zb(`ngModelChange`,function(a){return U_(s),Rk(i.url,a)||(i.url=a),H_(a)}),Kg(),Jc(21,`po-input`,15),G0(),Zb(`ngModelChange`,function(a){return U_(s),Rk(i.headersLabs,a)||(i.headersLabs=a),H_(a)}),_t(`p-change`,function(a){return i.onChangeHeaders(a)}),Kg(),Jc(22,`po-input`,16),G0(),Zb(`ngModelChange`,function(a){return U_(s),Rk(i.literals,a)||(i.literals=a),H_(a)}),_t(`p-change`,function(){return i.changeLiterals()}),Kg(),Jc(23,`po-input`,17),G0(),Zb(`ngModelChange`,function(a){return U_(s),Rk(i.modalActions,a)||(i.modalActions=a),H_(a)}),_t(`p-change`,function(){return i.changeModalActions()}),Kg(),Jc(24,`po-checkbox-group`,18),G0(),Zb(`ngModelChange`,function(a){return U_(s),Rk(i.properties,a)||(i.properties=a),H_(a)}),Kg(),LO(25,He,8,3,`div`),Jc(26,`po-radio-group`,19),G0(),Zb(`ngModelChange`,function(a){return U_(s),Rk(i.size,a)||(i.size=a),H_(a)}),Kg(),Jc(27,`div`,20)(28,`po-button`,21),_t(`p-click`,function(){return i.restore()}),Kg()()()()}r&2&&(Kb(`ngModel`,i.upload),Ab(`p-helper`,i.helperText)(`p-auto-upload`,i.properties.includes(`autoupload`))(`p-directory`,i.properties.includes(`directory`))(`p-disabled`,i.properties.includes(`disabled`))(`p-required-url`,i.properties.includes(`requiredUrl`))(`p-disabled-remove-file`,i.properties.includes(`disabledRemoveFile`))(`p-drag-drop`,i.properties.includes(`dragDrop`))(`p-drag-drop-height`,i.dragDropHeight)(`p-form-field`,i.formField)(`p-help`,i.help)(`p-hide-select-button`,i.properties.includes(`selectButton`))(`p-hide-restrictions-info`,i.properties.includes(`restrictionsInfo`))(`p-hide-send-button`,i.properties.includes(`sendButton`))(`p-label`,i.label)(`p-literals`,i.customLiterals)(`p-loading`,i.properties.includes(`loading`))(`p-multiple`,i.properties.includes(`multiple`))(`p-optional`,i.properties.includes(`optional`))(`p-required`,i.properties.includes(`required`))(`p-show-required`,i.properties.includes(`showRequired`))(`p-show-thumbnail`,i.properties.includes(`showThumbnail`))(`p-restrictions`,i.restrictions)(`p-size`,i.size)(`p-url`,i.url)(`p-headers`,i.headers)(`p-custom-action`,i.action)(`p-label-text-wrap`,i.properties?.includes(`labelTextWrap`))(`p-compact-label`,i.properties?.includes(`compactLabel`))(`p-custom-modal-actions`,i.customModalActions),q0(),wg(3),Ab(`p-value`,Yk(4,51,i.upload)),wg(2),Ab(`p-value`,i.event),wg(5),Kb(`ngModel`,i.allowedExtensions),q0(),wg(),Kb(`ngModel`,i.maxFiles),q0(),wg(),Kb(`ngModel`,i.dragDropHeight),q0(),wg(),Kb(`ngModel`,i.minSize),q0(),wg(),Kb(`ngModel`,i.maxSize),q0(),wg(2),Kb(`ngModel`,i.label),q0(),wg(),Kb(`ngModel`,i.help),q0(),wg(),Kb(`ngModel`,i.helperText),q0(),wg(),Kb(`ngModel`,i.formField),q0(),wg(),Kb(`ngModel`,i.url),q0(),wg(),Kb(`ngModel`,i.headersLabs),q0(),wg(),Kb(`ngModel`,i.literals),q0(),wg(),Kb(`ngModel`,i.modalActions),Ab(`p-disabled`,!i.properties.includes(`showThumbnail`)),q0(),wg(),Kb(`ngModel`,i.properties),Ab(`p-options`,i.propertiesOptions),q0(),wg(),jO(i.properties.includes(`showCustomAction`)?25:-1),wg(),Kb(`ngModel`,i.size),Ab(`p-options`,i.sizeOptions),q0())},dependencies:[xZ,RZ,AZ,QL,WL,ZL,i1,oi,Nf,I4,j4,Goe,Zte,Koe,R4,$4,Joe,yae,dF],encapsulation:2,changeDetection:1})}return l})();var Me=(()=>{class l{static ɵfac=function(r){return new(r||l)};static ɵcmp=Jn({type:l,selectors:[[`sample-po-upload-labs-view`]],standalone:!1,decls:24,vars:0,consts:[[`id`,`sample-po-upload-labs`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`data-tour`,`sample-tabs`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-upload-labs/sample-po-upload-labs.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-upload-labs/sample-po-upload-labs.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`]],template:function(r,i){r&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Mk(3,`PO Upload Labs`),Kg()(),Jc(4,`div`,2)(5,`po-tabs`,3)(6,`po-tab`,4)(7,`div`,5),_u(8,`sample-po-upload-labs`),Kg()(),Jc(9,`po-tab`,6)(10,`div`)(11,`label`,7),Mk(12,`sample-po-upload-labs/sample-po-upload-labs.component.html`),Kg(),Jc(13,`div`,8)(14,`pre`,9),Mk(15,`<po-upload
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
`),Kg()()()(),Jc(16,`po-tab`,10)(17,`div`)(18,`label`,7),Mk(19,`sample-po-upload-labs/sample-po-upload-labs.component.ts`),Kg(),Jc(20,`div`,11)(21,`pre`,12),Mk(22,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),Kg()()()()()(),_u(23,`hr`))},dependencies:[P,tre,are,Fe],encapsulation:2,changeDetection:1})}return l})();var Ge=[`formOpportunity`];var Je=()=>({maxFileSize:`204800`});var qe=(()=>{class l{poNotification=p(Ru);formOpportunity;biograph;linkedin;name;resume;uploadedResume;ngOnInit(){this.uploadedResume=!1}apply(){this.formOpportunity.reset(),this.uploadedResume=!1,this.poNotification.success(`You were applied successfully`)}resumeUploadError(){this.uploadedResume=!1}resumeUploadSuccess(){this.uploadedResume=!0}static ɵfac=function(r){return new(r||l)};static ɵcmp=Jn({type:l,selectors:[[`sample-po-upload-resume`]],viewQuery:function(r,i){if(r&1&&Cu(Ge,7),r&2){let s;No(s=xo())&&(i.formOpportunity=s.first)}},standalone:!1,decls:12,vars:7,consts:[[`formOpportunity`,`ngForm`],[1,`po-row`],[`name`,`name`,`p-clean`,``,`p-label`,`Full Name`,`p-required`,``,1,`po-md-12`,3,`ngModelChange`,`ngModel`],[`name`,`biograph`,`p-label`,`Biograph`,`p-required`,``,1,`po-md-12`,3,`ngModelChange`,`ngModel`],[`name`,`linkedin`,`p-clean`,``,`p-label`,`LinkedIn URL`,1,`po-md-12`,3,`ngModelChange`,`ngModel`],[`name`,`resume`,`p-label`,`Resume`,`p-required`,``,`p-url`,`https://po-sample-api.onrender.com/v1/uploads/addFile`,1,`po-md-12`,3,`ngModelChange`,`p-error`,`p-success`,`ngModel`,`p-restrictions`],[`p-label`,`Apply`,1,`po-md-4`,3,`p-click`,`p-disabled`]],template:function(r,i){if(r&1){let s=KO();Jc(0,`form`,null,0)(2,`div`,1)(3,`po-input`,2),G0(),Zb(`ngModelChange`,function(a){return U_(s),Rk(i.name,a)||(i.name=a),H_(a)}),Kg()(),Jc(4,`div`,1)(5,`po-textarea`,3),G0(),Zb(`ngModelChange`,function(a){return U_(s),Rk(i.biograph,a)||(i.biograph=a),H_(a)}),Kg()(),Jc(6,`div`,1)(7,`po-url`,4),G0(),Zb(`ngModelChange`,function(a){return U_(s),Rk(i.linkedin,a)||(i.linkedin=a),H_(a)}),Kg()(),Jc(8,`div`,1)(9,`po-upload`,5),G0(),Zb(`ngModelChange`,function(a){return U_(s),Rk(i.resume,a)||(i.resume=a),H_(a)}),_t(`p-error`,function(){return i.resumeUploadError()})(`p-success`,function(){return i.resumeUploadSuccess()}),Kg()(),Jc(10,`div`,1)(11,`po-button`,6),_t(`p-click`,function(){return i.apply()}),Kg()()()}if(r&2){let s=ok(1);wg(3),Kb(`ngModel`,i.name),q0(),wg(2),Kb(`ngModel`,i.biograph),q0(),wg(2),Kb(`ngModel`,i.linkedin),q0(),wg(2),Kb(`ngModel`,i.resume),Ab(`p-restrictions`,Vk(6,Je)),q0(),wg(2),Ab(`p-disabled`,s.invalid||!i.uploadedResume)}},dependencies:[xZ,RZ,AZ,QL,WL,oi,j4,Zoe,$4,G4],encapsulation:2,changeDetection:1})}return l})();var Ue=(()=>{class l{static ɵfac=function(r){return new(r||l)};static ɵcmp=Jn({type:l,selectors:[[`sample-po-upload-resume-view`]],standalone:!1,decls:24,vars:0,consts:[[`id`,`sample-po-upload-resume`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`data-tour`,`sample-tabs`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-upload-resume/sample-po-upload-resume.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-upload-resume/sample-po-upload-resume.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`]],template:function(r,i){r&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Mk(3,`PO Upload - Resume`),Kg()(),Jc(4,`div`,2)(5,`po-tabs`,3)(6,`po-tab`,4)(7,`div`,5),_u(8,`sample-po-upload-resume`),Kg()(),Jc(9,`po-tab`,6)(10,`div`)(11,`label`,7),Mk(12,`sample-po-upload-resume/sample-po-upload-resume.component.html`),Kg(),Jc(13,`div`,8)(14,`pre`,9),Mk(15,`<form #formOpportunity="ngForm">
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
`),Kg()()()(),Jc(16,`po-tab`,10)(17,`div`)(18,`label`,7),Mk(19,`sample-po-upload-resume/sample-po-upload-resume.component.ts`),Kg(),Jc(20,`div`,11)(21,`pre`,12),Mk(22,`import { Component, OnInit, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),Kg()()()()()(),_u(23,`hr`))},dependencies:[P,tre,are,qe],encapsulation:2,changeDetection:1})}return l})();var Xe=[`upload`];var Ze=[`stepper`];var $e=[`submitForm`];var et=[`sucessData`];var tt=l=>({"po-invisible":l});function nt(l,te){if(l&1){let d=KO();Jc(0,`div`,8)(1,`div`,9)(2,`p`,11),Mk(3,`Confirm informations`),Kg()(),_u(4,`po-info`,28)(5,`po-info`,29)(6,`po-info`,30),Jc(7,`po-button`,31),_t(`p-click`,function(){U_(d);let i=tk();return H_(i.confirmSubmit())}),Kg()()}if(l&2){let d=tk();wg(4),Ab(`p-value`,d.project[0].name||`N/D`),wg(),Ab(`p-value`,d.title||`N/D`),wg(),Ab(`p-value`,d.description||`N/D`)}}var Te=(()=>{class l{upload;stepper;submitForm;sucessData;confirm={action:()=>{this.sucessData.close()},label:`Return`};description;project=[];restrictions={allowedExtensions:[`.zip`,`.7z`,`.tar`,`.wim`]};title;ngOnInit(){this.newSubmit()}canSubmitProject(){return!!(this.project&&this.project.length)&&this.title&&this.description}confirmSubmit(){this.sucessData.open(),this.newSubmit(),this.stepper.first()}submitProject(){this.upload.sendFiles(),this.stepper.next()}newSubmit(){this.project=[],this.title=void 0,this.description=void 0}static ɵfac=function(r){return new(r||l)};static ɵcmp=Jn({type:l,selectors:[[`sample-po-upload-rs`]],viewQuery:function(r,i){if(r&1&&Cu(Xe,7)(Ze,7)($e,7)(et,7),r&2){let s;No(s=xo())&&(i.upload=s.first),No(s=xo())&&(i.stepper=s.first),No(s=xo())&&(i.submitForm=s.first),No(s=xo())&&(i.sucessData=s.first)}},standalone:!1,decls:47,vars:15,consts:[[`stepper`,``],[`submitForm`,`ngForm`],[`upload`,``],[`sucessData`,``],[1,`po-row`],[`p-orientation`,`vertical`,`p-step-icons`,``,`p-step-size`,`42`,1,`po-lg-10`,`po-offset-lg-2`,`po-offset-xl-2`],[`p-label`,`Welcome`],[`p-title`,`Realize & Show`,1,`po-lg-8`,`po-mt-2`],[1,`tht-row`],[1,`po-sm-12`],[1,`po-font-title`],[1,`po-font-text-large`],[`p-label`,`Yes!`,`p-kind`,`primary`,1,`po-sm-12`,`po-mt-2`,3,`p-click`],[`p-label`,`Submit`,3,`p-can-active-next-step`],[1,`po-lg-10`],[1,`po-font-subtitle`],[1,`po-font-text-small-bold`],[1,`po-font-title`,`po-lg-2`],[`p-icon`,`an an-cloud-arrow-up`,1,`po-clickable`,3,`click`],[`p-icon`,`an an-fill an-x-circle`,1,`po-clickable`,3,`click`,`ngClass`],[1,`po-sm-12`,`po-mt-3`,`po-font-text-bold`],[`name`,`project`,`p-hide-select-button`,``,`p-hide-send-button`,``,`p-required`,``,`p-url`,`https://po-sample-api.onrender.com/v1/uploads/addFile`,1,`po-sm-12`,3,`ngModelChange`,`ngModel`,`p-restrictions`],[`name`,`title`,`p-label`,`Title`,`p-placeholder`,`Be creative`,`p-required`,``,1,`po-sm-12`,3,`ngModelChange`,`ngModel`,`p-disabled`],[`name`,`description`,`p-label`,`Description`,`p-maxlength`,`140`,`p-placeholder`,`Resume on few words`,`p-required`,``,1,`po-sm-12`,3,`ngModelChange`,`ngModel`,`p-disabled`],[`p-label`,`Done`,1,`po-sm-12`,`po-mt-2`,3,`p-click`,`p-disabled`],[`p-label`,`Confirm`],[`p-title`,`Confirmation`,3,`p-primary-action`],[1,`po-sm-12`,`po-font-title`],[`p-label`,`File name`,1,`po-md-4`,3,`p-value`],[`p-label`,`Title`,1,`po-md-4`,3,`p-value`],[`p-label`,`Description`,1,`po-md-4`,3,`p-value`],[`p-label`,`Confirm`,1,`po-sm-12`,`po-mt-2`,`po-mb-2`,3,`p-click`]],template:function(r,i){if(r&1){let s=KO();Jc(0,`div`,4)(1,`po-stepper`,5,0)(3,`po-step`,6)(4,`po-widget`,7)(5,`div`,8)(6,`div`,9)(7,`h1`,10),Mk(8,`Welcome, TOTVS!`),Kg(),Jc(9,`p`,11),Mk(10,`Let's submit your project?`),Kg()()(),Jc(11,`div`,8)(12,`po-button`,12),_t(`p-click`,function(){U_(s);let a=ok(2);return H_(a.next())}),Kg()()()(),Jc(13,`po-step`,13)(14,`po-widget`,7)(15,`form`,null,1)(17,`div`,4)(18,`div`,14)(19,`div`,4)(20,`p`,15),Mk(21,`Please, select your project:`),Kg()(),Jc(22,`div`,4)(23,`p`,16),Mk(24,`*Upload a zip file containing your project.`),Kg()()(),Jc(25,`div`,17)(26,`po-icon`,18),_t(`click`,function(){U_(s);let a=ok(32);return H_(a.selectFiles())}),Kg(),Jc(27,`po-icon`,19),_t(`click`,function(){U_(s);let a=ok(32);return H_(a.clear())}),Kg()()(),Jc(28,`div`,4)(29,`label`,20),Mk(30,`Attached`),Kg(),Jc(31,`po-upload`,21,2),G0(),Zb(`ngModelChange`,function(a){return U_(s),Rk(i.project,a)||(i.project=a),H_(a)}),Kg()(),Jc(33,`div`,4)(34,`po-input`,22),G0(),Zb(`ngModelChange`,function(a){return U_(s),Rk(i.title,a)||(i.title=a),H_(a)}),Kg()(),Jc(35,`div`,4)(36,`po-textarea`,23),G0(),Zb(`ngModelChange`,function(a){return U_(s),Rk(i.description,a)||(i.description=a),H_(a)}),Kg()(),Jc(37,`div`,8)(38,`po-button`,24),_t(`p-click`,function(){return i.submitProject()}),Kg()()()()(),Jc(39,`po-step`,25)(40,`po-widget`,7),LO(41,nt,8,3,`div`,8),Kg()()()(),Jc(42,`po-modal`,26,3)(44,`div`,4)(45,`p`,27),Mk(46,`Project successfully submited!`),Kg()()()}r&2&&(wg(13),Ab(`p-can-active-next-step`,i.canSubmitProject.bind(i)),wg(14),Ab(`ngClass`,jk(13,tt,i.project.length<1)),wg(2),Vt(`po-invisible`,i.project.length<1),wg(2),Kb(`ngModel`,i.project),Ab(`p-restrictions`,i.restrictions),q0(),wg(3),Kb(`ngModel`,i.title),Ab(`p-disabled`,i.project.length<1),q0(),wg(2),Kb(`ngModel`,i.description),Ab(`p-disabled`,i.project.length<1),q0(),wg(2),Ab(`p-disabled`,i.canSubmitProject()),wg(3),jO(i.canSubmitProject()?41:-1),wg(),Ab(`p-primary-action`,i.confirm))},dependencies:[QP,xZ,RZ,AZ,QL,WL,oi,j4,Zoe,$4,Tt,Joe,ia,Gae,Fze,yae],encapsulation:2,changeDetection:1})}return l})();var ke=(()=>{class l{static ɵfac=function(r){return new(r||l)};static ɵcmp=Jn({type:l,selectors:[[`sample-po-upload-rs-view`]],standalone:!1,decls:24,vars:0,consts:[[`id`,`sample-po-upload-rs`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`data-tour`,`sample-tabs`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-upload-rs/sample-po-upload-rs.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-upload-rs/sample-po-upload-rs.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`]],template:function(r,i){r&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Mk(3,`PO Upload - Realize & Show`),Kg()(),Jc(4,`div`,2)(5,`po-tabs`,3)(6,`po-tab`,4)(7,`div`,5),_u(8,`sample-po-upload-rs`),Kg()(),Jc(9,`po-tab`,6)(10,`div`)(11,`label`,7),Mk(12,`sample-po-upload-rs/sample-po-upload-rs.component.html`),Kg(),Jc(13,`div`,8)(14,`pre`,9),Mk(15,`<div class="po-row">
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
`),Kg()()()(),Jc(16,`po-tab`,10)(17,`div`)(18,`label`,7),Mk(19,`sample-po-upload-rs/sample-po-upload-rs.component.ts`),Kg(),Jc(20,`div`,11)(21,`pre`,12),Mk(22,`import { Component, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';
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
`),Kg()()()()()(),_u(23,`hr`))},dependencies:[P,tre,are,Te],encapsulation:2,changeDetection:1})}return l})();var Ae=(()=>{class l{customAction={icon:`an an-download`,type:`default`,visible:!1};uploadSuccess(){this.customAction.visible=!0}onCustomActionClick(d){if(!d.rawFile){console.error(`Arquivo inválido ou não encontrado.`);return}this.downloadFile(d.rawFile)}downloadFile(d){let r=URL.createObjectURL(d),i=document.createElement(`a`);i.href=r,i.download=d.name,i.style.display=`none`,document.body.appendChild(i),i.click(),document.body.removeChild(i),URL.revokeObjectURL(r)}static ɵfac=function(r){return new(r||l)};static ɵcmp=Jn({type:l,selectors:[[`sample-po-upload-download`]],standalone:!1,decls:1,vars:2,consts:[[`name`,`upload`,`p-url`,`https://po-sample-api.onrender.com/v1/uploads/addFile`,3,`p-custom-action-click`,`p-success`,`p-custom-action`,`p-multiple`]],template:function(r,i){r&1&&(Jc(0,`po-upload`,0),_t(`p-custom-action-click`,function(p){return i.onCustomActionClick(p)})(`p-success`,function(){return i.uploadSuccess()}),Kg()),r&2&&Ab(`p-custom-action`,i.customAction)(`p-multiple`,!0)},dependencies:[$4],encapsulation:2,changeDetection:1})}return l})();var ze=(()=>{class l{static ɵfac=function(r){return new(r||l)};static ɵcmp=Jn({type:l,selectors:[[`sample-po-upload-download-view`]],standalone:!1,decls:24,vars:0,consts:[[`id`,`sample-po-upload-download`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`data-tour`,`sample-tabs`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-upload-download/sample-po-upload-download.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-upload-download/sample-po-upload-download.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`]],template:function(r,i){r&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Mk(3,`PO Upload - with Download Button`),Kg()(),Jc(4,`div`,2)(5,`po-tabs`,3)(6,`po-tab`,4)(7,`div`,5),_u(8,`sample-po-upload-download`),Kg()(),Jc(9,`po-tab`,6)(10,`div`)(11,`label`,7),Mk(12,`sample-po-upload-download/sample-po-upload-download.component.html`),Kg(),Jc(13,`div`,8)(14,`pre`,9),Mk(15,`<po-upload
  name="upload"
  p-url="https://po-sample-api.onrender.com/v1/uploads/addFile"
  [p-custom-action]="customAction"
  (p-custom-action-click)="onCustomActionClick($event)"
  [p-multiple]="true"
  (p-success)="uploadSuccess()"
></po-upload>
`),Kg()()()(),Jc(16,`po-tab`,10)(17,`div`)(18,`label`,7),Mk(19,`sample-po-upload-download/sample-po-upload-download.component.ts`),Kg(),Jc(20,`div`,11)(21,`pre`,12),Mk(22,`import { Component, ChangeDetectionStrategy } from '@angular/core';
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
`),Kg()()()()()(),_u(23,`hr`))},dependencies:[P,tre,are,Ae],encapsulation:2,changeDetection:1})}return l})();var rt=()=>[`.png`,`.jpg`,`.jpeg`,`.gif`];var dt=l=>({allowedExtensions:l,maxFiles:5,maxFileSize:2057280});var Le=(()=>{class l{static ɵfac=function(r){return new(r||l)};static ɵcmp=Jn({type:l,selectors:[[`sample-po-upload-preview`]],standalone:!1,decls:1,vars:6,consts:[[`name`,`upload`,`p-label`,`PO Upload com Pré-visualização`,`p-url`,`https://po-sample-api.onrender.com/v1/uploads/addFile`,3,`p-restrictions`,`p-show-thumbnail`,`p-multiple`]],template:function(r,i){r&1&&_u(0,`po-upload`,0),r&2&&Ab(`p-restrictions`,jk(4,dt,Vk(3,rt)))(`p-show-thumbnail`,!0)(`p-multiple`,!0)},dependencies:[$4],encapsulation:2,changeDetection:1})}return l})();var Re=(()=>{class l{static ɵfac=function(r){return new(r||l)};static ɵcmp=Jn({type:l,selectors:[[`sample-po-upload-preview-view`]],standalone:!1,decls:24,vars:0,consts:[[`id`,`sample-po-upload-preview`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`data-tour`,`sample-tabs`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-upload-preview/sample-po-upload-preview.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-upload-preview/sample-po-upload-preview.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`]],template:function(r,i){r&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Mk(3,`PO Upload - with Preview`),Kg()(),Jc(4,`div`,2)(5,`po-tabs`,3)(6,`po-tab`,4)(7,`div`,5),_u(8,`sample-po-upload-preview`),Kg()(),Jc(9,`po-tab`,6)(10,`div`)(11,`label`,7),Mk(12,`sample-po-upload-preview/sample-po-upload-preview.component.html`),Kg(),Jc(13,`div`,8)(14,`pre`,9),Mk(15,`<po-upload
  name="upload"
  p-label="PO Upload com Pr\xE9-visualiza\xE7\xE3o"
  p-url="https://po-sample-api.onrender.com/v1/uploads/addFile"
  [p-restrictions]="{ allowedExtensions: ['.png', '.jpg', '.jpeg', '.gif'], maxFiles: 5, maxFileSize: 2057280 }"
  [p-show-thumbnail]="true"
  [p-multiple]="true"
></po-upload>
`),Kg()()()(),Jc(16,`po-tab`,10)(17,`div`)(18,`label`,7),Mk(19,`sample-po-upload-preview/sample-po-upload-preview.component.ts`),Kg(),Jc(20,`div`,11)(21,`pre`,12),Mk(22,`import { Component, ChangeDetectionStrategy } from '@angular/core';
import { PoProgressAction } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-upload-preview',
  templateUrl: 'sample-po-upload-preview.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoUploadPreviewComponent {}
`),Kg()()()()()(),_u(23,`hr`))},dependencies:[P,tre,are,Le],encapsulation:2,changeDetection:1})}return l})();var je=(()=>{class l{router=p(An);openDoc(d){this.router.navigate([`/documentation`,d],{queryParams:{view:`doc`}})}static ɵfac=function(r){return new(r||l)};static ɵcmp=Jn({type:l,selectors:[[`sample-po-upload-doc`]],standalone:!1,decls:2328,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[`id`,`class-po-upload-component`,1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[`id`,`event-p-additional-help`,1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[1,`docs-api-deprecated-marker`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`id`,`prop-p-additional-help-tooltip`,1,`docs-api-properties-row`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[`pan`,``,1,`docs-api-property-type`,`string`],[`id`,`prop-p-append-in-body`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`id`,`prop-p-auto-focus`,1,`docs-api-properties-row`],[`id`,`prop-p-auto-upload`,1,`docs-api-properties-row`],[`id`,`prop-p-compact-label`,1,`docs-api-properties-row`],[`id`,`prop-p-custom-action`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoProgressAction`],[1,`language-html`],[1,`language-typescript`],[`id`,`event-p-custom-action-click`,1,`docs-api-properties-row`],[`id`,`prop-p-custom-modal-actions`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`Array<PoModalAction>`],[`id`,`prop-p-directory`,1,`docs-api-properties-row`],[`id`,`prop-p-disabled`,1,`docs-api-properties-row`],[`id`,`prop-p-disabled-remove-file`,1,`docs-api-properties-row`],[`id`,`prop-p-drag-drop`,1,`docs-api-properties-row`],[`id`,`prop-p-drag-drop-height`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`number`],[`id`,`prop-p-restrictions`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoUploadFileRestrictions`],[`id`,`prop-p-form-field`,1,`docs-api-properties-row`],[`id`,`prop-p-headers`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`{`,`[name:`,`string]:`,`string`],[`pan`,``,1,`docs-api-property-type`,`Array<string>;`,`}`],[`id`,`prop-p-help`,1,`docs-api-properties-row`],[`id`,`prop-p-hide-restrictions-info`,1,`docs-api-properties-row`],[`id`,`prop-p-hide-select-button`,1,`docs-api-properties-row`],[`id`,`prop-p-hide-send-button`,1,`docs-api-properties-row`],[`id`,`prop-p-multiple`,1,`docs-api-properties-row`],[`id`,`event-p-keydown`,1,`docs-api-properties-row`],[`id`,`prop-p-label`,1,`docs-api-properties-row`],[`id`,`prop-p-label-text-wrap`,1,`docs-api-properties-row`],[`id`,`prop-p-literals`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoUploadLiterals`],[`id`,`prop-p-loading`,1,`docs-api-properties-row`],[`id`,`prop-name`,1,`docs-api-properties-row`],[`id`,`event-ngModelChange`,1,`docs-api-properties-row`],[`id`,`event-p-cancel`,1,`docs-api-properties-row`],[`id`,`event-p-error`,1,`docs-api-properties-row`],[`id`,`event-p-open-modal-preview`,1,`docs-api-properties-row`],[`id`,`event-p-remove`,1,`docs-api-properties-row`],[`id`,`event-p-success`,1,`docs-api-properties-row`],[`id`,`event-p-upload`,1,`docs-api-properties-row`],[`id`,`prop-p-optional`,1,`docs-api-properties-row`],[`id`,`prop-p-helper`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoHelperOptions`],[`href`,`https://po-ui.io/documentation/po-helper`],[`id`,`prop-p-required`,1,`docs-api-properties-row`],[`id`,`prop-p-required-url`,1,`docs-api-properties-row`],[`id`,`prop-p-show-required`,1,`docs-api-properties-row`],[`id`,`prop-p-show-thumbnail`,1,`docs-api-properties-row`],[`id`,`prop-p-size`,1,`docs-api-properties-row`],[`href`,`https://po-ui.io/documentation/po-theme`],[`id`,`prop-p-url`,1,`docs-api-properties-row`],[`id`,`method-clear`,1,`docs-api-method-table`],[1,`docs-api-properties-row`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[`id`,`method-focus`,1,`docs-api-method-table`],[`id`,`method-closeModal`,1,`docs-api-method-table`],[`id`,`method-selectFiles`,1,`docs-api-method-table`],[`id`,`method-sendFiles`,1,`docs-api-method-table`],[`id`,`method-showAdditionalHelp`,1,`docs-api-method-table`],[`id`,`interface-po-upload-file-restrictions`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-upload-file-restrictions-allowed-extensions`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`Array<string>`],[`id`,`interface-po-upload-file-restrictions-max-file-size`,1,`docs-api-properties-row`],[`id`,`interface-po-upload-file-restrictions-max-files`,1,`docs-api-properties-row`],[`id`,`interface-po-upload-file-restrictions-min-file-size`,1,`docs-api-properties-row`],[`id`,`interface-po-upload-literals`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-upload-literals-close`,1,`docs-api-properties-row`],[`id`,`interface-po-upload-literals-continue`,1,`docs-api-properties-row`],[`id`,`interface-po-upload-literals-done-text`,1,`docs-api-properties-row`],[`id`,`interface-po-upload-literals-drag-files-here`,1,`docs-api-properties-row`],[`id`,`interface-po-upload-literals-drag-folders-here`,1,`docs-api-properties-row`],[`id`,`interface-po-upload-literals-drop-files-here`,1,`docs-api-properties-row`],[`id`,`interface-po-upload-literals-drop-folders-here`,1,`docs-api-properties-row`],[`id`,`interface-po-upload-literals-error-occurred`,1,`docs-api-properties-row`],[`id`,`interface-po-upload-literals-files`,1,`docs-api-properties-row`],[`id`,`interface-po-upload-literals-folders`,1,`docs-api-properties-row`],[`id`,`interface-po-upload-literals-invalid-drop-area`,1,`docs-api-properties-row`],[`id`,`interface-po-upload-literals-preview`,1,`docs-api-properties-row`],[`id`,`interface-po-upload-literals-select-file`,1,`docs-api-properties-row`],[`id`,`interface-po-upload-literals-select-files`,1,`docs-api-properties-row`],[`id`,`interface-po-upload-literals-select-files-on-computer`,1,`docs-api-properties-row`],[`id`,`interface-po-upload-literals-select-folder`,1,`docs-api-properties-row`],[`id`,`interface-po-upload-literals-select-folder-on-computer`,1,`docs-api-properties-row`],[`id`,`interface-po-upload-literals-sent-with-success`,1,`docs-api-properties-row`],[`id`,`interface-po-upload-literals-start-sending`,1,`docs-api-properties-row`],[`id`,`interface-po-upload-literals-thumbnail`,1,`docs-api-properties-row`],[`id`,`interface-po-upload-literals-try-again`,1,`docs-api-properties-row`],[`id`,`interface-po-upload-literals-uploading-text`,1,`docs-api-properties-row`],[`id`,`interface-po-progress-action`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-progress-action-disabled`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`Function`],[`id`,`interface-po-progress-action-icon`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`TemplateRef<void>`],[`href`,`https://po-ui.io/icons`],[`id`,`interface-po-progress-action-label`,1,`docs-api-properties-row`],[`id`,`interface-po-progress-action-type`,1,`docs-api-properties-row`],[`id`,`interface-po-progress-action-visible`,1,`docs-api-properties-row`]],template:function(r,i){r&1&&(Jc(0,`div`,0)(1,`p`,1)(2,`code`),Mk(3,`import { PoFieldModule } from '@po-ui/ng-components';`),Kg()(),Jc(4,`div`,2)(5,`p`),Mk(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-timepicker, po-upload, po-url e po-search-ai.`),Kg(),Jc(7,`blockquote`)(8,`p`),Mk(9,`Não esqueça de importar o módulo `),Jc(10,`code`),Mk(11,`FormsModule`),Kg(),Mk(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),Jc(13,`code`),Mk(14,`ReactiveFormsModule`),Kg(),Mk(15,`, ambos nativos do Angular.`),Kg()()(),Jc(16,`h3`,3),Mk(17,`Componente`),Kg(),Jc(18,`h4`,4)(19,`code`,5),Mk(20,`PoUploadComponent`),Kg()(),Jc(21,`div`,2)(22,`p`),Mk(23,`O componente `),Jc(24,`code`),Mk(25,`po-upload`),Kg(),Mk(26,` permite que o usu\xE1rio envie arquivo(s) ao servidor e acompanhe o progresso.
Este componente tamb\xE9m possibilita algumas configura\xE7\xF5es como: \u2013 Envio de diret\xF3rios, onde ele acessa o diret\xF3rio selecionado assim como seus sub-diret\xF3rios;`),Kg(),Jc(27,`ul`)(28,`li`),Mk(29,`Múltipla seleção, onde o usuário pode enviar mais de um arquivo ao servidor.`),Kg(),Jc(30,`li`),Mk(31,`Auto envio, onde o arquivo \xE9 enviado imediatamente ap\xF3s a sele\xE7\xE3o do usu\xE1rio, n\xE3o necessitando que o usu\xE1rio
clique em enviar.`),Kg(),Jc(32,`li`),Mk(33,`Restrições de formatos de arquivo e tamanho.`),Kg(),Jc(34,`li`),Mk(35,`Função de sucesso que será disparada quando os arquivos forem enviados com sucesso.`),Kg(),Jc(36,`li`),Mk(37,`Função de erro que será disparada quando houver erro no envio dos arquivos.`),Kg(),Jc(38,`li`),Mk(39,`Permite habilitar uma área onde os arquivos podem ser arrastados.`),Kg()(),Jc(40,`h4`),Mk(41,`Tokens customizáveis`),Kg(),Jc(42,`p`),Mk(43,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),Kg(),Jc(44,`blockquote`)(45,`p`),Mk(46,`Para maiores informações, acesse o guia `),Jc(47,`a`,6),Mk(48,`Personalizando o Tema Padrão com Tokens CSS`),Kg(),Mk(49,`.`),Kg()(),Jc(50,`table`)(51,`thead`)(52,`tr`)(53,`th`),Mk(54,`Propriedade`),Kg(),Jc(55,`th`),Mk(56,`Descrição`),Kg(),Jc(57,`th`),Mk(58,`Valor Padrão`),Kg()()(),Jc(59,`tbody`)(60,`tr`)(61,`td`)(62,`strong`),Mk(63,`FIELD CONTAINER`),Kg()(),_u(64,`td`)(65,`td`),Kg(),Jc(66,`tr`)(67,`td`)(68,`code`),Mk(69,`--field-container-title-justify`),Kg()(),Jc(70,`td`),Mk(71,`Alinhamento horizontal do título (`),Jc(72,`code`),Mk(73,`justify-content`),Kg(),Mk(74,`)`),Kg(),Jc(75,`td`)(76,`code`),Mk(77,`space-between`),Kg()()(),Jc(78,`tr`)(79,`td`)(80,`code`),Mk(81,`--field-container-title-flex`),Kg()(),Jc(82,`td`),Mk(83,`Flex do título (`),Jc(84,`code`),Mk(85,`flex`),Kg(),Mk(86,`)`),Kg(),Jc(87,`td`)(88,`code`),Mk(89,`1 auto`),Kg()()(),Jc(90,`tr`)(91,`td`)(92,`strong`),Mk(93,`TEXT SUPPORT`),Kg()(),_u(94,`td`)(95,`td`),Kg(),Jc(96,`tr`)(97,`td`)(98,`code`),Mk(99,`--font-family-text-support`),Kg()(),Jc(100,`td`),Mk(101,`Família tipográfica usada no texto de suporte`),Kg(),Jc(102,`td`)(103,`code`),Mk(104,`var(--font-family-theme)`),Kg()()(),Jc(105,`tr`)(106,`td`)(107,`code`),Mk(108,`--text-color-text-support`),Kg()(),Jc(109,`td`),Mk(110,`Cor da fonte no texto de suporte`),Kg(),Jc(111,`td`)(112,`code`),Mk(113,`var(--color-neutral-dark-90)`),Kg()()(),Jc(114,`tr`)(115,`td`)(116,`strong`),Mk(117,`UPLOAD CONTENT`),Kg()(),_u(118,`td`)(119,`td`),Kg(),Jc(120,`tr`)(121,`td`)(122,`code`),Mk(123,`--background-color-content`),Kg(),Mk(124,` \xA0`),Kg(),Jc(125,`td`),Mk(126,`Cor de fundo`),Kg(),Jc(127,`td`)(128,`code`),Mk(129,`var(--color-neutral-light-10)`),Kg()()(),Jc(130,`tr`)(131,`td`)(132,`code`),Mk(133,`--border-color-content`),Kg()(),Jc(134,`td`),Mk(135,`Cor da borda`),Kg(),Jc(136,`td`)(137,`code`),Mk(138,`var(--color-neutral-light-20)`),Kg()()(),Jc(139,`tr`)(140,`td`)(141,`code`),Mk(142,`--border-radius-content`),Kg()(),Jc(143,`td`),Mk(144,`Contém o valor do raio dos cantos do elemento`),Kg(),Jc(145,`td`)(146,`code`),Mk(147,`var(--border-radius-md)`),Kg()()(),Jc(148,`tr`)(149,`td`)(150,`code`),Mk(151,`--text-color-file-name`),Kg()(),Jc(152,`td`),Mk(153,`Cor do texto do nome do arquivo`),Kg(),Jc(154,`td`)(155,`code`),Mk(156,`var(--color-neutral-dark-90)`),Kg()()(),Jc(157,`tr`)(158,`td`)(159,`code`),Mk(160,`--font-family-file-name`),Kg()(),Jc(161,`td`),Mk(162,`Família tipográfica usada no texto do arquivo`),Kg(),Jc(163,`td`)(164,`code`),Mk(165,`var(--font-family-theme)`),Kg()()(),Jc(166,`tr`)(167,`td`)(168,`code`),Mk(169,`--text-color-info-bar`),Kg()(),Jc(170,`td`),Mk(171,`Cor do texto de informação`),Kg(),Jc(172,`td`)(173,`code`),Mk(174,`var(--color-neutral-mid-60)`),Kg()()(),Jc(175,`tr`)(176,`td`)(177,`code`),Mk(178,`--font-family-info-bar`),Kg()(),Jc(179,`td`),Mk(180,`Família tipográfica usada no texto de informação`),Kg(),Jc(181,`td`)(182,`code`),Mk(183,`var(--font-family-theme)`),Kg()()(),Jc(184,`tr`)(185,`td`)(186,`strong`),Mk(187,`ERROR STATE`),Kg()(),_u(188,`td`)(189,`td`),Kg(),Jc(190,`tr`)(191,`td`)(192,`code`),Mk(193,`--background-color-content-error`),Kg()(),Jc(194,`td`),Mk(195,`Cor de fundo do container de erro`),Kg(),Jc(196,`td`)(197,`code`),Mk(198,`var(--color-neutral-light-00)`),Kg()()(),Jc(199,`tr`)(200,`td`)(201,`code`),Mk(202,`--border-color-content-error`),Kg()(),Jc(203,`td`),Mk(204,`Cor da borda do container de erro`),Kg(),Jc(205,`td`)(206,`code`),Mk(207,`var(--color-feedback-negative-base)`),Kg()()(),Jc(208,`tr`)(209,`td`)(210,`code`),Mk(211,`--text-color-error`),Kg()(),Jc(212,`td`),Mk(213,`Cor do texto do container de erro`),Kg(),Jc(214,`td`)(215,`code`),Mk(216,`var(--color-feedback-negative-dark)`),Kg()()(),Jc(217,`tr`)(218,`td`)(219,`code`),Mk(220,`--color-icon-error`),Kg()(),Jc(221,`td`),Mk(222,`Cor do ícone no estado de erro`),Kg(),Jc(223,`td`)(224,`code`),Mk(225,`var(--color-feedback-negative-base)`),Kg()()(),Jc(226,`tr`)(227,`td`)(228,`code`),Mk(229,`--font-family-error`),Kg()(),Jc(230,`td`),Mk(231,`Família tipográfica usada no texto de erro`),Kg(),Jc(232,`td`)(233,`code`),Mk(234,`var(--font-family-theme)`),Kg()()(),Jc(235,`tr`)(236,`td`)(237,`strong`),Mk(238,`UPLOADED STATE`),Kg()(),_u(239,`td`)(240,`td`),Kg(),Jc(241,`tr`)(242,`td`)(243,`code`),Mk(244,`--background-color-content-uploaded`),Kg()(),Jc(245,`td`),Mk(246,`Cor de fundo do container com status de enviado`),Kg(),Jc(247,`td`)(248,`code`),Mk(249,`var(--color-neutral-light-00)`),Kg()()(),Jc(250,`tr`)(251,`td`)(252,`code`),Mk(253,`--border-color-content-uploaded`),Kg()(),Jc(254,`td`),Mk(255,`Cor da borda do container com status de enviado`),Kg(),Jc(256,`td`)(257,`code`),Mk(258,`var(--color-neutral-light-20)`),Kg()()(),Jc(259,`tr`)(260,`td`)(261,`strong`),Mk(262,`INTERACTIVE STATE`),Kg()(),_u(263,`td`)(264,`td`),Kg(),Jc(265,`tr`)(266,`td`)(267,`code`),Mk(268,`--text-color-file-name-interactive`),Kg()(),Jc(269,`td`),Mk(270,`Cor do texto do nome do arquivo quando interativo`),Kg(),Jc(271,`td`)(272,`code`),Mk(273,`var(--color-action-default)`),Kg()()(),Jc(274,`tr`)(275,`td`)(276,`strong`),Mk(277,`THUMBNAIL`),Kg()(),_u(278,`td`)(279,`td`),Kg(),Jc(280,`tr`)(281,`td`)(282,`code`),Mk(283,`--color-icon-thumbnail`),Kg()(),Jc(284,`td`),Mk(285,`Cor do ícone na thumbnail`),Kg(),Jc(286,`td`)(287,`code`),Mk(288,`var(--color-action-default)`),Kg()()(),Jc(289,`tr`)(290,`td`)(291,`code`),Mk(292,`--border-width-thumbnail`),Kg()(),Jc(293,`td`),Mk(294,`Tamanho da fonte na thumbnail`),Kg(),Jc(295,`td`)(296,`code`),Mk(297,`var(--border-width-sm)`),Kg()()(),Jc(298,`tr`)(299,`td`)(300,`code`),Mk(301,`--border-radius-thumbnail`),Kg()(),Jc(302,`td`),Mk(303,`Contém o valor do raio dos cantos na thumbnail`),Kg(),Jc(304,`td`)(305,`code`),Mk(306,`var(--border-radius-md)`),Kg()()(),Jc(307,`tr`)(308,`td`)(309,`code`),Mk(310,`--background-color-thumbnail`),Kg()(),Jc(311,`td`),Mk(312,`Cor de fundo na thumbnail`),Kg(),Jc(313,`td`)(314,`code`),Mk(315,`var(--color-neutral-light-05)`),Kg()()(),Jc(316,`tr`)(317,`td`)(318,`strong`),Mk(319,`Focused`),Kg()(),_u(320,`td`)(321,`td`),Kg(),Jc(322,`tr`)(323,`td`)(324,`code`),Mk(325,`--outline-color-focused`),Kg()(),Jc(326,`td`),Mk(327,`Cor do outline do estado de focus`),Kg(),Jc(328,`td`)(329,`code`),Mk(330,`var(--color-action-focus)`),Kg()()()()()(),Jc(331,`div`,7)(332,`h4`,8),Mk(333,`Seletor`),Kg(),Jc(334,`pre`,9),Mk(335,`<po-upload
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
`),Kg()(),Jc(336,`h4`,10),Mk(337,`Propriedades`),Kg(),Jc(338,`table`,11)(339,`tr`,12)(340,`th`,13),Mk(341,`Nome`),Kg(),Jc(342,`th`,13),Mk(343,`Tipo`),Kg(),Jc(344,`th`,13),Mk(345,`Padrão`),Kg(),Jc(346,`th`,13),Mk(347,`Descrição`),Kg()(),Jc(348,`tr`,14)(349,`td`,15)(350,`div`,16)(351,`span`,17),Mk(352,` (p-additional-help)`),_u(353,`br`),Kg()(),Jc(354,`div`,18),Mk(355,`Deprecated`),Kg()(),Jc(356,`td`,19)(357,`code`,20),Mk(358,`EventEmitter`),Kg()(),Jc(359,`td`,21),Mk(360,`-`),Kg(),Jc(361,`td`,22)(362,`em`)(363,`strong`),Mk(364,`(opcional)`),Kg()(),Jc(365,`p`),Mk(366,`Evento disparado ao clicar no ícone de ajuda adicional.`),Kg(),Jc(367,`blockquote`)(368,`p`),Mk(369,`Essa propriedade está `),Jc(370,`strong`),Mk(371,`depreciada`),Kg(),Mk(372,` e será removida na versão `),Jc(373,`code`),Mk(374,`23.x.x`),Kg(),Mk(375,`. Recomendamos utilizar a propriedade `),Jc(376,`code`),Mk(377,`p-helper`),Kg(),Mk(378,` que oferece mais recursos e flexibilidade.`),Kg()()()(),Jc(379,`tr`,23)(380,`td`,15)(381,`div`,24)(382,`span`,25),Mk(383,` p-additional-help-tooltip`),_u(384,`br`),Kg()(),Jc(385,`div`,18),Mk(386,`Deprecated`),Kg()(),Jc(387,`td`,19)(388,`code`,26),Mk(389,`string`),Kg()(),Jc(390,`td`,21),Mk(391,`-`),Kg(),Jc(392,`td`,22)(393,`em`)(394,`strong`),Mk(395,`(opcional)`),Kg()(),Jc(396,`p`),Mk(397,`Exibe um ícone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente `),Jc(398,`code`),Mk(399,`po-helper`),Kg(),Mk(400,`.
`),Jc(401,`strong`),Mk(402,`Como boa prática, indica-se utilizar um texto com até 140 caracteres.`),Kg()(),Jc(403,`blockquote`)(404,`p`),Mk(405,`Requer um recuo mínimo de 8px se o componente estiver próximo à lateral da tela.`),Kg()(),Jc(406,`blockquote`)(407,`p`),Mk(408,`Essa propriedade está `),Jc(409,`strong`),Mk(410,`depreciada`),Kg(),Mk(411,` e será removida na versão `),Jc(412,`code`),Mk(413,`23.x.x`),Kg(),Mk(414,`. Recomendamos utilizar a propriedade `),Jc(415,`code`),Mk(416,`p-helper`),Kg(),Mk(417,` que oferece mais recursos e flexibilidade.`),Kg()()()(),Jc(418,`tr`,27)(419,`td`,15)(420,`div`,24)(421,`span`,25),Mk(422,` p-append-in-body`),_u(423,`br`),Kg()()(),Jc(424,`td`,19)(425,`code`,28),Mk(426,`boolean`),Kg()(),Jc(427,`td`,21)(428,`p`)(429,`code`),Mk(430,`false`),Kg()()(),Jc(431,`td`,22)(432,`em`)(433,`strong`),Mk(434,`(opcional)`),Kg()(),Jc(435,`p`),Mk(436,`Define que o popover (`),Jc(437,`code`),Mk(438,`p-helper`),Kg(),Mk(439,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o dentro do componente. Essa
op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow escondido, garantindo o
posicionamento correto do tooltip pr\xF3ximo ao elemento.`),Kg(),Jc(440,`blockquote`)(441,`p`),Mk(442,`Quando utilizado com `),Jc(443,`code`),Mk(444,`p-helper`),Kg(),Mk(445,`, leitores de tela como o NVDA podem não ler o conteúdo do popover.`),Kg()()()(),Jc(446,`tr`,29)(447,`td`,15)(448,`div`,24)(449,`span`,25),Mk(450,` p-auto-focus`),_u(451,`br`),Kg()()(),Jc(452,`td`,19)(453,`code`,28),Mk(454,`boolean`),Kg()(),Jc(455,`td`,21)(456,`p`)(457,`code`),Mk(458,`false`),Kg()()(),Jc(459,`td`,22)(460,`em`)(461,`strong`),Mk(462,`(opcional)`),Kg()(),Jc(463,`p`),Mk(464,`Aplica foco no elemento ao ser iniciado.`),Kg(),Jc(465,`blockquote`)(466,`p`),Mk(467,`Caso mais de um elemento seja configurado com essa propriedade, apenas o último elemento declarado com ela terá o foco.`),Kg()()()(),Jc(468,`tr`,30)(469,`td`,15)(470,`div`,24)(471,`span`,25),Mk(472,` p-auto-upload`),_u(473,`br`),Kg()()(),Jc(474,`td`,19)(475,`code`,28),Mk(476,`boolean`),Kg()(),Jc(477,`td`,21)(478,`p`)(479,`code`),Mk(480,`false`),Kg()()(),Jc(481,`td`,22)(482,`em`)(483,`strong`),Mk(484,`(opcional)`),Kg()(),Jc(485,`p`),Mk(486,`Define se o envio do arquivo será automático ao selecionar o mesmo.`),Kg(),Jc(487,`blockquote`)(488,`p`),Mk(489,`Esta propriedade funciona somente se a propriedade `),Jc(490,`code`),Mk(491,`p-url`),Kg(),Mk(492,` tiver um valor atribuído.`),Kg()()()(),Jc(493,`tr`,31)(494,`td`,15)(495,`div`,24)(496,`span`,25),Mk(497,` p-compact-label`),_u(498,`br`),Kg()()(),Jc(499,`td`,19)(500,`code`,28),Mk(501,`boolean`),Kg()(),Jc(502,`td`,21)(503,`p`)(504,`code`),Mk(505,`false`),Kg()()(),Jc(506,`td`,22)(507,`em`)(508,`strong`),Mk(509,`(opcional)`),Kg()(),Jc(510,`p`),Mk(511,`Define se o título do campo será exibido de forma compacta.`),Kg(),Jc(512,`p`),Mk(513,`Quando habilitado (`),Jc(514,`code`),Mk(515,`true`),Kg(),Mk(516,`), o modo compacto afeta o conjunto composto por:`),Kg(),Jc(517,`ul`)(518,`li`)(519,`code`),Mk(520,`po-label`),Kg()(),Jc(521,`li`)(522,`code`),Mk(523,`p-requirement (showRequired)`),Kg()(),Jc(524,`li`)(525,`code`),Mk(526,`po-helper`),Kg()()(),Jc(527,`p`),Mk(528,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),Kg(),Jc(529,`p`),Mk(530,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),Kg(),Jc(531,`ul`)(532,`li`)(533,`code`),Mk(534,`--field-container-title-justify`),Kg()(),Jc(535,`li`)(536,`code`),Mk(537,`--field-container-title-flex`),Kg()()(),Jc(538,`p`),Mk(539,`Exemplo:`),Kg(),Jc(540,`pre`)(541,`code`),Mk(542,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),Kg()(),Jc(543,`p`),Mk(544,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),Kg()()(),Jc(545,`tr`,32)(546,`td`,15)(547,`div`,24)(548,`span`,25),Mk(549,` p-custom-action`),_u(550,`br`),Kg()()(),Jc(551,`td`,19)(552,`code`,33),Mk(553,`PoProgressAction`),Kg()(),Jc(554,`td`,21),Mk(555,`-`),Kg(),Jc(556,`td`,22)(557,`em`)(558,`strong`),Mk(559,`(opcional)`),Kg()(),Jc(560,`p`),Mk(561,`Define uma ação personalizada no componente `),Jc(562,`code`),Mk(563,`po-upload`),Kg(),Mk(564,`, adicionando um bot\xE3o no canto inferior direito
de cada barra de progresso associada aos arquivos enviados ou em envio.`),Kg(),Jc(565,`p`),Mk(566,`A ação deve implementar a interface `),Jc(567,`strong`),Mk(568,`PoProgressAction`),Kg(),Mk(569,`, permitindo configurar propriedades como:`),Kg(),Jc(570,`ul`)(571,`li`)(572,`code`),Mk(573,`label`),Kg(),Mk(574,`: Texto do botão.`),Kg(),Jc(575,`li`)(576,`code`),Mk(577,`icon`),Kg(),Mk(578,`: Ícone a ser exibido no botão.`),Kg(),Jc(579,`li`)(580,`code`),Mk(581,`type`),Kg(),Mk(582,`: Tipo de botão (ex.: `),Jc(583,`code`),Mk(584,`danger`),Kg(),Mk(585,` ou `),Jc(586,`code`),Mk(587,`default`),Kg(),Mk(588,`).`),Kg(),Jc(589,`li`)(590,`code`),Mk(591,`disabled`),Kg(),Mk(592,`: Indica se o botão deve estar desabilitado.`),Kg(),Jc(593,`li`)(594,`code`),Mk(595,`visible`),Kg(),Mk(596,`: Indica se o botão deve estar visível.`),Kg()(),Jc(597,`p`)(598,`strong`),Mk(599,`Exemplo de uso:`),Kg()(),Jc(600,`pre`)(601,`code`,34),Mk(602,`<po-upload
 [p-custom-action]="customAction"
 (p-custom-action-click)="onCustomActionClick($event)">
</po-upload>
`),Kg()(),Jc(603,`pre`)(604,`code`,35),Mk(605,`customAction: PoProgressAction = {
  label: 'Baixar',
  icon: 'an an-download',
  type: 'default',
  visible: true
};

onCustomActionClick(file: PoUploadFile) {
  console.log(\`A\xE7\xE3o personalizada clicada para o arquivo: \${file.name}\`);
}
`),Kg()()()(),Jc(606,`tr`,36)(607,`td`,15)(608,`div`,16)(609,`span`,17),Mk(610,` (p-custom-action-click)`),_u(611,`br`),Kg()()(),Jc(612,`td`,19)(613,`code`,20),Mk(614,`EventEmitter`),Kg()(),Jc(615,`td`,21),Mk(616,`-`),Kg(),Jc(617,`td`,22)(618,`em`)(619,`strong`),Mk(620,`(opcional)`),Kg()(),Jc(621,`p`),Mk(622,`Evento emitido ao clicar na ação personalizada configurada no `),Jc(623,`code`),Mk(624,`p-custom-action`),Kg(),Mk(625,`.`),Kg(),Jc(626,`p`),Mk(627,`O evento retorna o arquivo associado \xE0 barra de progresso onde a a\xE7\xE3o foi clicada,
permitindo executar opera\xE7\xF5es espec\xEDficas para aquele arquivo.`),Kg(),Jc(628,`p`)(629,`strong`),Mk(630,`Exemplo de uso:`),Kg()(),Jc(631,`pre`)(632,`code`,34),Mk(633,`<po-upload
 [p-custom-action]="customAction"
 (p-custom-action-click)="onCustomActionClick($event)">
</po-upload>
`),Kg()(),Jc(634,`pre`)(635,`code`,35),Mk(636,`customAction: PoProgressAction = {
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
`),Kg()()()(),Jc(637,`tr`,37)(638,`td`,15)(639,`div`,24)(640,`span`,25),Mk(641,` p-custom-modal-actions`),_u(642,`br`),Kg()()(),Jc(643,`td`,19)(644,`code`,38),Mk(645,`Array<PoModalAction>`),Kg()(),Jc(646,`td`,21),Mk(647,`-`),Kg(),Jc(648,`td`,22)(649,`em`)(650,`strong`),Mk(651,`(opcional)`),Kg()(),Jc(652,`p`),Mk(653,`Define uma ou duas a\xE7\xF5es personalizadas do modal de pr\xE9-visualiza\xE7\xE3o, adicionando um bot\xE3o ou dois bot\xF5es no canto inferior direito
do modal.`),Kg(),Jc(654,`p`),Mk(655,`A ação deve implementar a interface `),Jc(656,`strong`),Mk(657,`PoModalAction`),Kg(),Mk(658,`, permitindo configurar propriedades como:`),Kg(),Jc(659,`ul`)(660,`li`)(661,`code`),Mk(662,`label`),Kg(),Mk(663,`: Texto do botão.`),Kg(),Jc(664,`li`)(665,`code`),Mk(666,`action`),Kg(),Mk(667,`: Ícone a ser exibido no botão.`),Kg(),Jc(668,`li`)(669,`code`),Mk(670,`danger`),Kg(),Mk(671,`: Define a propriedade `),Jc(672,`code`),Mk(673,`p-danger`),Kg(),Mk(674,` do botão.`),Kg(),Jc(675,`li`)(676,`code`),Mk(677,`disabled`),Kg(),Mk(678,`: Indica se o botão deve estar desabilitado.`),Kg(),Jc(679,`li`)(680,`code`),Mk(681,`visible`),Kg(),Mk(682,`: Indica se o botão deve estar visível.`),Kg()(),Jc(683,`p`)(684,`strong`),Mk(685,`Exemplo de uso:`),Kg()(),Jc(686,`pre`)(687,`code`,34),Mk(688,`<po-upload
 [p-custom-modal-actions]="customActions"
</po-upload>
`),Kg()(),Jc(689,`pre`)(690,`code`,35),Mk(691,`customActions:  Array<PoModalAction> = [
 { label: 'Confirmar', action: this.confirmModal.bind(this) },
 { label: 'Cancelar', action: this.closeModal.bind(this) }
];
`),Kg()()()(),Jc(692,`tr`,39)(693,`td`,15)(694,`div`,24)(695,`span`,25),Mk(696,` p-directory`),_u(697,`br`),Kg()()(),Jc(698,`td`,19)(699,`code`,28),Mk(700,`boolean`),Kg()(),Jc(701,`td`,21)(702,`p`)(703,`code`),Mk(704,`false`),Kg()()(),Jc(705,`td`,22)(706,`em`)(707,`strong`),Mk(708,`(opcional)`),Kg()(),Jc(709,`p`),Mk(710,`Permite a seleção de diretórios contendo um ou mais arquivos para envio.`),Kg(),Jc(711,`blockquote`)(712,`p`),Mk(713,`A habilitação desta propriedade se restringe apenas à seleção de diretórios.`),Kg()(),Jc(714,`blockquote`)(715,`p`),Mk(716,`Definição não suportada pelo browser `),Jc(717,`strong`),Mk(718,`Internet Explorer`),Kg(),Mk(719,`, todavia será possível a seleção de arquivos padrão.`),Kg()()()(),Jc(720,`tr`,40)(721,`td`,15)(722,`div`,24)(723,`span`,25),Mk(724,` p-disabled`),_u(725,`br`),Kg()()(),Jc(726,`td`,19)(727,`code`,28),Mk(728,`boolean`),Kg()(),Jc(729,`td`,21),Mk(730,`-`),Kg(),Jc(731,`td`,22)(732,`em`)(733,`strong`),Mk(734,`(opcional)`),Kg()(),Jc(735,`p`),Mk(736,`Indica que o campo será desabilitado.`),Kg()()(),Jc(737,`tr`,41)(738,`td`,15)(739,`div`,24)(740,`span`,25),Mk(741,` p-disabled-remove-file`),_u(742,`br`),Kg()()(),Jc(743,`td`,19)(744,`code`,28),Mk(745,`boolean`),Kg()(),Jc(746,`td`,21)(747,`p`)(748,`code`),Mk(749,`false`),Kg()()(),Jc(750,`td`,22)(751,`em`)(752,`strong`),Mk(753,`(opcional)`),Kg()(),Jc(754,`p`),Mk(755,`Desabilita botão de remover o(s) arquivo(s) selecionado(s).`),Kg()()(),Jc(756,`tr`,42)(757,`td`,15)(758,`div`,24)(759,`span`,25),Mk(760,` p-drag-drop`),_u(761,`br`),Kg()()(),Jc(762,`td`,19)(763,`code`,28),Mk(764,`boolean`),Kg()(),Jc(765,`td`,21)(766,`p`)(767,`code`),Mk(768,`false`),Kg()()(),Jc(769,`td`,22)(770,`em`)(771,`strong`),Mk(772,`(opcional)`),Kg()(),Jc(773,`p`),Mk(774,`Exibe a \xE1rea onde \xE9 poss\xEDvel arrastar e selecionar os arquivos. Quando estiver definida, omite o bot\xE3o para sele\xE7\xE3o de arquivos
automaticamente.`),Kg(),Jc(775,`blockquote`)(776,`p`),Mk(777,`Recomendamos utilizar apenas um `),Jc(778,`code`),Mk(779,`po-upload`),Kg(),Mk(780,` com esta funcionalidade por tela.`),Kg()()()(),Jc(781,`tr`,43)(782,`td`,15)(783,`div`,24)(784,`span`,25),Mk(785,` p-drag-drop-height`),_u(786,`br`),Kg()()(),Jc(787,`td`,19)(788,`code`,44),Mk(789,`number`),Kg()(),Jc(790,`td`,21)(791,`p`)(792,`code`),Mk(793,`320`),Kg()()(),Jc(794,`td`,22)(795,`em`)(796,`strong`),Mk(797,`(opcional)`),Kg()(),Jc(798,`p`),Mk(799,`Define em `),Jc(800,`em`),Mk(801,`pixels`),Kg(),Mk(802,` a altura da área onde podem ser arrastados os arquivos. A altura mínima aceita é `),Jc(803,`code`),Mk(804,`160px`),Kg(),Mk(805,`.`),Kg(),Jc(806,`blockquote`)(807,`p`),Mk(808,`Esta propriedade funciona somente se a propriedade `),Jc(809,`code`),Mk(810,`p-drag-drop`),Kg(),Mk(811,` estiver habilitada.`),Kg()()()(),Jc(812,`tr`,45)(813,`td`,15)(814,`div`,24)(815,`span`,25),Mk(816,` p-restrictions`),_u(817,`br`),Kg()()(),Jc(818,`td`,19)(819,`code`,46),Mk(820,`PoUploadFileRestrictions`),Kg()(),Jc(821,`td`,21),Mk(822,`-`),Kg(),Jc(823,`td`,22)(824,`em`)(825,`strong`),Mk(826,`(opcional)`),Kg()(),Jc(827,`p`),Mk(828,`Objeto que segue a definição da interface `),Jc(829,`code`),Mk(830,`PoUploadFileRestrictions`),Kg(),Mk(831,`,
que possibilita definir tamanho m\xE1ximo/m\xEDnimo e extens\xE3o dos arquivos permitidos.`),Kg()()(),Jc(832,`tr`,47)(833,`td`,15)(834,`div`,24)(835,`span`,25),Mk(836,` p-form-field`),_u(837,`br`),Kg()()(),Jc(838,`td`,19)(839,`code`,26),Mk(840,`string`),Kg()(),Jc(841,`td`,21)(842,`p`)(843,`code`),Mk(844,`files`),Kg()()(),Jc(845,`td`,22)(846,`em`)(847,`strong`),Mk(848,`(opcional)`),Kg()(),Jc(849,`p`),Mk(850,`Nome do campo de formulário que será enviado para o serviço informado na propriedade `),Jc(851,`code`),Mk(852,`p-url`),Kg(),Mk(853,`.`),Kg()()(),Jc(854,`tr`,48)(855,`td`,15)(856,`div`,24)(857,`span`,25),Mk(858,` p-headers`),_u(859,`br`),Kg()()(),Jc(860,`td`,19)(861,`code`,49),Mk(862,`{ [name: string]: string `),Kg(),Jc(863,`code`,50),Mk(864,` Array<string>;
}`),Kg()(),Jc(865,`td`,21),Mk(866,`-`),Kg(),Jc(867,`td`,22)(868,`p`),Mk(869,`Objeto que contém os cabeçalhos que será enviado na requisição dos arquivos.`),Kg()()(),Jc(870,`tr`,51)(871,`td`,15)(872,`div`,24)(873,`span`,25),Mk(874,` p-help`),_u(875,`br`),Kg()()(),Jc(876,`td`,19)(877,`code`,26),Mk(878,`string`),Kg()(),Jc(879,`td`,21),Mk(880,`-`),Kg(),Jc(881,`td`,22)(882,`em`)(883,`strong`),Mk(884,`(opcional)`),Kg()(),Jc(885,`p`),Mk(886,`Texto de apoio para o campo.`),Kg()()(),Jc(887,`tr`,52)(888,`td`,15)(889,`div`,24)(890,`span`,25),Mk(891,` p-hide-restrictions-info`),_u(892,`br`),Kg()()(),Jc(893,`td`,19)(894,`code`,28),Mk(895,`boolean`),Kg()(),Jc(896,`td`,21)(897,`p`)(898,`code`),Mk(899,`false`),Kg()()(),Jc(900,`td`,22)(901,`em`)(902,`strong`),Mk(903,`(opcional)`),Kg()(),Jc(904,`p`),Mk(905,`Oculta visualmente as informações de restrições para o upload.`),Kg()()(),Jc(906,`tr`,53)(907,`td`,15)(908,`div`,24)(909,`span`,25),Mk(910,` p-hide-select-button`),_u(911,`br`),Kg()()(),Jc(912,`td`,19)(913,`code`,28),Mk(914,`boolean`),Kg()(),Jc(915,`td`,21)(916,`p`)(917,`code`),Mk(918,`false`),Kg()()(),Jc(919,`td`,22)(920,`em`)(921,`strong`),Mk(922,`(opcional)`),Kg()(),Jc(923,`p`),Mk(924,`Omite o botão de seleção de arquivos.`),Kg(),Jc(925,`blockquote`)(926,`p`),Mk(927,`Caso o valor definido seja `),Jc(928,`code`),Mk(929,`true`),Kg(),Mk(930,`, caber\xE1 ao desenvolvedor a responsabilidade
pela chamada do m\xE9todo `),Jc(931,`code`),Mk(932,`selectFiles()`),Kg(),Mk(933,` para seleção de arquivos.`),Kg()()()(),Jc(934,`tr`,54)(935,`td`,15)(936,`div`,24)(937,`span`,25),Mk(938,` p-hide-send-button`),_u(939,`br`),Kg()()(),Jc(940,`td`,19)(941,`code`,28),Mk(942,`boolean`),Kg()(),Jc(943,`td`,21)(944,`p`)(945,`code`),Mk(946,`false`),Kg()()(),Jc(947,`td`,22)(948,`em`)(949,`strong`),Mk(950,`(opcional)`),Kg()(),Jc(951,`p`),Mk(952,`Omite o botão de envio de arquivos.`),Kg(),Jc(953,`blockquote`)(954,`p`),Mk(955,`Caso o valor definido seja `),Jc(956,`code`),Mk(957,`true`),Kg(),Mk(958,`, caber\xE1 ao desenvolvedor a responsabilidade
pela chamada do m\xE9todo `),Jc(959,`code`),Mk(960,`sendFiles()`),Kg(),Mk(961,` para envio do(s) arquivo(s) selecionado(s).`),Kg()()()(),Jc(962,`tr`,55)(963,`td`,15)(964,`div`,24)(965,`span`,25),Mk(966,` p-multiple`),_u(967,`br`),Kg()()(),Jc(968,`td`,19)(969,`code`,28),Mk(970,`boolean`),Kg()(),Jc(971,`td`,21),Mk(972,`-`),Kg(),Jc(973,`td`,22)(974,`em`)(975,`strong`),Mk(976,`(opcional)`),Kg()(),Jc(977,`p`),Mk(978,`Define se pode selecionar mais de um arquivo.`),Kg(),Jc(979,`blockquote`)(980,`p`),Mk(981,`Se utilizada a `),Jc(982,`code`),Mk(983,`p-directory`),Kg(),Mk(984,`, habilita-se automaticamente esta propriedade.`),Kg()()()(),Jc(985,`tr`,56)(986,`td`,15)(987,`div`,16)(988,`span`,17),Mk(989,` (p-keydown)`),_u(990,`br`),Kg()()(),Jc(991,`td`,19)(992,`code`,20),Mk(993,`EventEmitter`),Kg()(),Jc(994,`td`,21),Mk(995,`-`),Kg(),Jc(996,`td`,22)(997,`em`)(998,`strong`),Mk(999,`(opcional)`),Kg()(),Jc(1e3,`p`),Mk(1001,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),Jc(1002,`code`),Mk(1003,`KeyboardEvent`),Kg(),Mk(1004,` com informações sobre a tecla.`),Kg()()(),Jc(1005,`tr`,57)(1006,`td`,15)(1007,`div`,24)(1008,`span`,25),Mk(1009,` p-label`),_u(1010,`br`),Kg()()(),Jc(1011,`td`,19)(1012,`code`,26),Mk(1013,`string`),Kg()(),Jc(1014,`td`,21),Mk(1015,`-`),Kg(),Jc(1016,`td`,22)(1017,`em`)(1018,`strong`),Mk(1019,`(opcional)`),Kg()(),Jc(1020,`p`),Mk(1021,`Rótulo do campo.`),Kg()()(),Jc(1022,`tr`,58)(1023,`td`,15)(1024,`div`,24)(1025,`span`,25),Mk(1026,` p-label-text-wrap`),_u(1027,`br`),Kg()()(),Jc(1028,`td`,19)(1029,`code`,28),Mk(1030,`boolean`),Kg()(),Jc(1031,`td`,21)(1032,`p`)(1033,`code`),Mk(1034,`false`),Kg()()(),Jc(1035,`td`,22)(1036,`em`)(1037,`strong`),Mk(1038,`(opcional)`),Kg()(),Jc(1039,`p`),Mk(1040,`Habilita a quebra automática do texto da propriedade `),Jc(1041,`code`),Mk(1042,`p-label`),Kg(),Mk(1043,`. Quando `),Jc(1044,`code`),Mk(1045,`p-label-text-wrap`),Kg(),Mk(1046,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),Kg()()(),Jc(1047,`tr`,59)(1048,`td`,15)(1049,`div`,24)(1050,`span`,25),Mk(1051,` p-literals`),_u(1052,`br`),Kg()()(),Jc(1053,`td`,19)(1054,`code`,60),Mk(1055,`PoUploadLiterals`),Kg()(),Jc(1056,`td`,21),Mk(1057,`-`),Kg(),Jc(1058,`td`,22)(1059,`em`)(1060,`strong`),Mk(1061,`(opcional)`),Kg()(),Jc(1062,`p`),Mk(1063,`Objeto com as literais usadas no `),Jc(1064,`code`),Mk(1065,`po-upload`),Kg(),Mk(1066,`.`),Kg(),Jc(1067,`p`),Mk(1068,`Existem duas maneiras de customizar o componente:`),Kg(),Jc(1069,`ul`)(1070,`li`),Mk(1071,`passando um objeto implementando a interface `),Jc(1072,`code`),Mk(1073,`PoUploadLiterals`),Kg(),Mk(1074,` com todas as literais disponíveis;`),Kg(),Jc(1075,`li`),Mk(1076,`passando apenas as literais que deseja customizar:`),Jc(1077,`pre`)(1078,`code`),Mk(1079,`const customLiterals: PoUploadLiterals = {
  folders: 'Pastas',
  selectFile: 'Buscar arquivo',
  startSending: 'Enviar'
};
`),Kg()()()(),Jc(1080,`p`),Mk(1081,`E para carregar as literais customizadas, basta apenas passar o objeto para o componente:`),Kg(),Jc(1082,`pre`)(1083,`code`),Mk(1084,`<po-upload
  [p-literals]="customLiterals">
</po-upload>
`),Kg()(),Jc(1085,`blockquote`)(1086,`p`),Mk(1087,`O objeto padrão de literais será traduzido de acordo com o idioma do `),Jc(1088,`em`),Mk(1089,`browser`),Kg(),Mk(1090,` (pt, en, es, ru).`),Kg()()()(),Jc(1091,`tr`,61)(1092,`td`,15)(1093,`div`,24)(1094,`span`,25),Mk(1095,` p-loading`),_u(1096,`br`),Kg()()(),Jc(1097,`td`,19)(1098,`code`,28),Mk(1099,`boolean`),Kg()(),Jc(1100,`td`,21)(1101,`p`)(1102,`code`),Mk(1103,`false`),Kg()()(),Jc(1104,`td`,22)(1105,`em`)(1106,`strong`),Mk(1107,`(opcional)`),Kg()(),Jc(1108,`p`),Mk(1109,`Exibe um ícone de carregamento no botão `),Jc(1110,`code`),Mk(1111,`Selecionar arquivo`),Kg(),Mk(1112,`, à esquerda do texto, sinalizando que uma operação está\xA0em andamento.`),Kg(),Jc(1113,`blockquote`)(1114,`p`),Mk(1115,`Incompatível com `),Jc(1116,`code`),Mk(1117,`p-drag-drop`),Kg(),Mk(1118,` e `),Jc(1119,`code`),Mk(1120,`p-hide-select-button`),Kg(),Mk(1121,`, pois o estado de loading depende da exibição do botão `),Jc(1122,`code`),Mk(1123,`Selecionar arquivo`),Kg(),Mk(1124,`.`),Kg()()()(),Jc(1125,`tr`,62)(1126,`td`,15)(1127,`div`,24)(1128,`span`,25),Mk(1129,` name`),_u(1130,`br`),Kg()()(),Jc(1131,`td`,19)(1132,`code`,26),Mk(1133,`string`),Kg()(),Jc(1134,`td`,21),Mk(1135,`-`),Kg(),Jc(1136,`td`,22)(1137,`p`),Mk(1138,`Define o valor do atributo `),Jc(1139,`code`),Mk(1140,`name`),Kg(),Mk(1141,` do componente.`),Kg()()(),Jc(1142,`tr`,63)(1143,`td`,15)(1144,`div`,16)(1145,`span`,17),Mk(1146,` (ngModelChange)`),_u(1147,`br`),Kg()()(),Jc(1148,`td`,19)(1149,`code`,20),Mk(1150,`EventEmitter`),Kg()(),Jc(1151,`td`,21),Mk(1152,`-`),Kg(),Jc(1153,`td`,22)(1154,`em`)(1155,`strong`),Mk(1156,`(opcional)`),Kg()(),Jc(1157,`p`),Mk(1158,`Função para atualizar o ngModel do componente, necessário quando não for utilizado dentro da `),Jc(1159,`em`),Mk(1160,`tag`),Kg(),Jc(1161,`code`),Mk(1162,`form`),Kg(),Mk(1163,`.`),Kg(),Jc(1164,`p`),Mk(1165,`Na versão 12.2.0 do Angular a verificação `),Jc(1166,`code`),Mk(1167,`strictTemplates`),Kg(),Mk(1168,` vem true como default. Portanto, para utilizar
two-way binding no componente deve se utilizar da seguinte forma:`),Kg(),Jc(1169,`pre`)(1170,`code`),Mk(1171,`<po-upload ... [ngModel]="UploadModel" (ngModelChange)="uploadModel = $event"> </po-upload>
`),Kg()()()(),Jc(1172,`tr`,64)(1173,`td`,15)(1174,`div`,16)(1175,`span`,17),Mk(1176,` (p-cancel)`),_u(1177,`br`),Kg()()(),Jc(1178,`td`,19)(1179,`code`,20),Mk(1180,`EventEmitter`),Kg()(),Jc(1181,`td`,21),Mk(1182,`-`),Kg(),Jc(1183,`td`,22)(1184,`em`)(1185,`strong`),Mk(1186,`(opcional)`),Kg()(),Jc(1187,`p`),Mk(1188,`Evento será disparado ao clicar no ícone de fechar.`),Kg(),Jc(1189,`blockquote`)(1190,`p`),Mk(1191,`Por parâmetro será passado o objeto do arquivo.`),Kg()()()(),Jc(1192,`tr`,65)(1193,`td`,15)(1194,`div`,16)(1195,`span`,17),Mk(1196,` (p-error)`),_u(1197,`br`),Kg()()(),Jc(1198,`td`,19)(1199,`code`,20),Mk(1200,`EventEmitter`),Kg()(),Jc(1201,`td`,21),Mk(1202,`-`),Kg(),Jc(1203,`td`,22)(1204,`em`)(1205,`strong`),Mk(1206,`(opcional)`),Kg()(),Jc(1207,`p`),Mk(1208,`Evento será disparado quando ocorrer algum erro no envio do arquivo.`),Kg(),Jc(1209,`blockquote`)(1210,`p`),Mk(1211,`Por parâmetro será passado o objeto do retorno que é do tipo `),Jc(1212,`code`),Mk(1213,`HttpErrorResponse`),Kg(),Mk(1214,`.`),Kg()()()(),Jc(1215,`tr`,66)(1216,`td`,15)(1217,`div`,16)(1218,`span`,17),Mk(1219,` (p-open-modal-preview)`),_u(1220,`br`),Kg()()(),Jc(1221,`td`,19)(1222,`code`,20),Mk(1223,`EventEmitter`),Kg()(),Jc(1224,`td`,21),Mk(1225,`-`),Kg(),Jc(1226,`td`,22)(1227,`em`)(1228,`strong`),Mk(1229,`(opcional)`),Kg()(),Jc(1230,`p`),Mk(1231,`Evento será disparado ao abrir o modal de pré-visualização.`),Kg(),Jc(1232,`blockquote`)(1233,`p`),Mk(1234,`Por parâmetro será passado o objeto do arquivo.`),Kg()()()(),Jc(1235,`tr`,67)(1236,`td`,15)(1237,`div`,16)(1238,`span`,17),Mk(1239,` (p-remove)`),_u(1240,`br`),Kg()()(),Jc(1241,`td`,19)(1242,`code`,20),Mk(1243,`EventEmitter`),Kg()(),Jc(1244,`td`,21),Mk(1245,`-`),Kg(),Jc(1246,`td`,22)(1247,`em`)(1248,`strong`),Mk(1249,`(opcional)`),Kg()(),Jc(1250,`p`),Mk(1251,`Evento será disparado ao clicar no ícone de remover.`),Kg(),Jc(1252,`blockquote`)(1253,`p`),Mk(1254,`Por parâmetro será passado o objeto do arquivo.`),Kg()()()(),Jc(1255,`tr`,68)(1256,`td`,15)(1257,`div`,16)(1258,`span`,17),Mk(1259,` (p-success)`),_u(1260,`br`),Kg()()(),Jc(1261,`td`,19)(1262,`code`,20),Mk(1263,`EventEmitter`),Kg()(),Jc(1264,`td`,21),Mk(1265,`-`),Kg(),Jc(1266,`td`,22)(1267,`em`)(1268,`strong`),Mk(1269,`(opcional)`),Kg()(),Jc(1270,`p`),Mk(1271,`Evento será disparado quando o envio do arquivo for realizado com sucesso.`),Kg(),Jc(1272,`blockquote`)(1273,`p`),Mk(1274,`Por parâmetro será passado o objeto do retorno que é do tipo `),Jc(1275,`code`),Mk(1276,`HttpResponse`),Kg(),Mk(1277,`.`),Kg()()()(),Jc(1278,`tr`,69)(1279,`td`,15)(1280,`div`,16)(1281,`span`,17),Mk(1282,` (p-upload)`),_u(1283,`br`),Kg()()(),Jc(1284,`td`,19)(1285,`code`,20),Mk(1286,`EventEmitter`),Kg()(),Jc(1287,`td`,21),Mk(1288,`-`),Kg(),Jc(1289,`td`,22)(1290,`em`)(1291,`strong`),Mk(1292,`(opcional)`),Kg()(),Jc(1293,`p`),Mk(1294,`Fun\xE7\xE3o que ser\xE1 executada no momento de realizar o envio do arquivo,
onde ser\xE1 poss\xEDvel adicionar informa\xE7\xF5es ao par\xE2metro que ser\xE1 enviado na requisi\xE7\xE3o.
\xC9 passado por par\xE2metro um objeto com o arquivo e as propriedades data e extraFormData,
que ser\xE3o enviadas em conjunto com o arquivo na requisi\xE7\xE3o, por exemplo:`),Kg(),Jc(1295,`blockquote`)(1296,`p`),Mk(1297,`data, nesta propriedade pode ser informado algum dado`),Kg()(),Jc(1298,`pre`)(1299,`code`),Mk(1300,`event.data = {id: 'id do usu\xE1rio'};
`),Kg()(),Jc(1301,`blockquote`)(1302,`p`),Mk(1303,`extraFormData, nesta propriedade pode ser informado algum dado solicitado pela API
que n\xE3o possa estar no objeto `),Jc(1304,`code`),Mk(1305,`data`),Kg(),Mk(1306,`, assim o conte\xFAdo sar\xE1 extra\xEDdo do objeto e
enviado como par\xE2metro`),Kg()(),Jc(1307,`pre`)(1308,`code`),Mk(1309,`event.extraFormData = {id: 'id do usu\xE1rio'};
`),Kg()()()(),Jc(1310,`tr`,70)(1311,`td`,15)(1312,`div`,24)(1313,`span`,25),Mk(1314,` p-optional`),_u(1315,`br`),Kg()()(),Jc(1316,`td`,19)(1317,`code`,28),Mk(1318,`boolean`),Kg()(),Jc(1319,`td`,21)(1320,`p`)(1321,`code`),Mk(1322,`false`),Kg()()(),Jc(1323,`td`,22)(1324,`em`)(1325,`strong`),Mk(1326,`(opcional)`),Kg()(),Jc(1327,`p`),Mk(1328,`Define se a indicação de campo opcional será exibida.`),Kg(),Jc(1329,`blockquote`)(1330,`p`),Mk(1331,`Não será exibida a indicação se:`),Kg()(),Jc(1332,`ul`)(1333,`li`),Mk(1334,`O campo conter `),Jc(1335,`code`),Mk(1336,`p-required`),Kg(),Mk(1337,`;`),Kg(),Jc(1338,`li`),Mk(1339,`Não possuir `),Jc(1340,`code`),Mk(1341,`p-help`),Kg(),Mk(1342,` e/ou `),Jc(1343,`code`),Mk(1344,`p-label`),Kg(),Mk(1345,`.`),Kg()()()(),Jc(1346,`tr`,71)(1347,`td`,15)(1348,`div`,24)(1349,`span`,25),Mk(1350,` p-helper`),_u(1351,`br`),Kg()()(),Jc(1352,`td`,19)(1353,`code`,72),Mk(1354,`PoHelperOptions `),Kg(),Jc(1355,`code`,26),Mk(1356,` string`),Kg()(),Jc(1357,`td`,21),Mk(1358,`-`),Kg(),Jc(1359,`td`,22)(1360,`em`)(1361,`strong`),Mk(1362,`(opcional)`),Kg()(),Jc(1363,`p`),Mk(1364,`Define as opções do componente de ajuda (po-helper) que será exibido ao lado do label quando a propriedade `),Jc(1365,`code`),Mk(1366,`p-label`),Kg(),Mk(1367,` for definida, ou, ao lado do componente na ausência da propriedade `),Jc(1368,`code`),Mk(1369,`p-label`),Kg(),Mk(1370,`.`),Kg(),Jc(1371,`blockquote`)(1372,`p`),Mk(1373,`Para mais informações acesse: `),Jc(1374,`a`,73),Mk(1375,`https://po-ui.io/documentation/po-helper`),Kg(),Mk(1376,`.`),Kg()(),Jc(1377,`blockquote`)(1378,`p`),Mk(1379,`Ao configurar esta propriedade, o antigo ícone de ajuda adicional (`),Jc(1380,`code`),Mk(1381,`p-additional-help-tooltip`),Kg(),Mk(1382,` e `),Jc(1383,`code`),Mk(1384,`p-additional-help`),Kg(),Mk(1385,`) será ignorado.`),Kg()()()(),Jc(1386,`tr`,74)(1387,`td`,15)(1388,`div`,24)(1389,`span`,25),Mk(1390,` p-required`),_u(1391,`br`),Kg()()(),Jc(1392,`td`,19)(1393,`code`,28),Mk(1394,`boolean`),Kg()(),Jc(1395,`td`,21)(1396,`p`)(1397,`code`),Mk(1398,`false`),Kg()()(),Jc(1399,`td`,22)(1400,`em`)(1401,`strong`),Mk(1402,`(opcional)`),Kg()(),Jc(1403,`p`),Mk(1404,`Define que o campo será obrigatório.`),Kg()()(),Jc(1405,`tr`,75)(1406,`td`,15)(1407,`div`,24)(1408,`span`,25),Mk(1409,` p-required-url`),_u(1410,`br`),Kg()()(),Jc(1411,`td`,19)(1412,`code`,28),Mk(1413,`boolean`),Kg()(),Jc(1414,`td`,21)(1415,`p`)(1416,`code`),Mk(1417,`true`),Kg()()(),Jc(1418,`td`,22)(1419,`em`)(1420,`strong`),Mk(1421,`(opcional)`),Kg()(),Jc(1422,`p`),Mk(1423,`Define se a propriedade `),Jc(1424,`code`),Mk(1425,`p-url`),Kg(),Mk(1426,` é obrigatória.`),Kg(),Jc(1427,`p`),Mk(1428,`Caso a propriedade seja definida como `),Jc(1429,`code`),Mk(1430,`false`),Kg(),Mk(1431,`:`),Kg(),Jc(1432,`ul`)(1433,`li`),Mk(1434,`o botão de "Selecionar arquivo" ficará habilitado mesmo sem a propriedade `),Jc(1435,`code`),Mk(1436,`p-url`),Kg(),Mk(1437,` definida.`),Kg(),Jc(1438,`li`),Mk(1439,`o botão "Iniciar envio" ficará oculto até que a propriedade `),Jc(1440,`code`),Mk(1441,`p-url`),Kg(),Mk(1442,` seja definida.`),Kg()(),Jc(1443,`blockquote`)(1444,`p`),Mk(1445,`Se utilizada com a propriedade `),Jc(1446,`code`),Mk(1447,`p-auto-upload`),Kg(),Mk(1448,` definida como `),Jc(1449,`code`),Mk(1450,`true`),Kg(),Mk(1451,` será necessário definir a propriedade `),Jc(1452,`code`),Mk(1453,`p-url`),Kg(),Mk(1454,`.`),Kg()()()(),Jc(1455,`tr`,76)(1456,`td`,15)(1457,`div`,24)(1458,`span`,25),Mk(1459,` p-show-required`),_u(1460,`br`),Kg()()(),Jc(1461,`td`,19)(1462,`code`,28),Mk(1463,`boolean`),Kg()(),Jc(1464,`td`,21),Mk(1465,`-`),Kg(),Jc(1466,`td`,22)(1467,`p`),Mk(1468,`Define se a indicação de campo obrigatório será exibida.`),Kg(),Jc(1469,`blockquote`)(1470,`p`),Mk(1471,`Não será exibida a indicação se:`),Kg()(),Jc(1472,`ul`)(1473,`li`),Mk(1474,`Não possuir `),Jc(1475,`code`),Mk(1476,`p-help`),Kg(),Mk(1477,` e/ou `),Jc(1478,`code`),Mk(1479,`p-label`),Kg(),Mk(1480,`.`),Kg()()()(),Jc(1481,`tr`,77)(1482,`td`,15)(1483,`div`,24)(1484,`span`,25),Mk(1485,` p-show-thumbnail`),_u(1486,`br`),Kg()()(),Jc(1487,`td`,19)(1488,`code`,28),Mk(1489,`boolean`),Kg()(),Jc(1490,`td`,21)(1491,`p`)(1492,`code`),Mk(1493,`true`),Kg()()(),Jc(1494,`td`,22)(1495,`em`)(1496,`strong`),Mk(1497,`(opcional)`),Kg()(),Jc(1498,`p`),Mk(1499,`Exibe a pré-visualização de imagens ao anexá-las.`),Kg(),Jc(1500,`blockquote`)(1501,`p`),Mk(1502,`Propriedade funciona apenas em arquivos de formato de imagem (`),Jc(1503,`code`),Mk(1504,`.png`),Kg(),Mk(1505,`, `),Jc(1506,`code`),Mk(1507,`.jpg`),Kg(),Mk(1508,`, `),Jc(1509,`code`),Mk(1510,`.jpeg`),Kg(),Mk(1511,` e `),Jc(1512,`code`),Mk(1513,`.gif`),Kg(),Mk(1514,`).
Ser\xE1 ignorada em outros tipos de arquivo.`),Kg()()()(),Jc(1515,`tr`,78)(1516,`td`,15)(1517,`div`,24)(1518,`span`,25),Mk(1519,` p-size`),_u(1520,`br`),Kg()()(),Jc(1521,`td`,19)(1522,`code`,26),Mk(1523,`string`),Kg()(),Jc(1524,`td`,21)(1525,`p`)(1526,`code`),Mk(1527,`medium`),Kg()()(),Jc(1528,`td`,22)(1529,`em`)(1530,`strong`),Mk(1531,`(opcional)`),Kg()(),Jc(1532,`p`),Mk(1533,`Define o tamanho e as ações do componente:`),Kg(),Jc(1534,`ul`)(1535,`li`)(1536,`code`),Mk(1537,`small`),Kg(),Mk(1538,`: altura do button como 32px (disponível apenas para acessibilidade AA).`),Kg(),Jc(1539,`li`)(1540,`code`),Mk(1541,`medium`),Kg(),Mk(1542,`: altura do button como 44px.`),Kg()(),Jc(1543,`blockquote`)(1544,`p`),Mk(1545,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Jc(1546,`code`),Mk(1547,`medium`),Kg(),Mk(1548,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Jc(1549,`a`,79),Mk(1550,`po-theme`),Kg(),Mk(1551,`.`),Kg()()()(),Jc(1552,`tr`,80)(1553,`td`,15)(1554,`div`,24)(1555,`span`,25),Mk(1556,` p-url`),_u(1557,`br`),Kg()()(),Jc(1558,`td`,19)(1559,`code`,26),Mk(1560,`string`),Kg()(),Jc(1561,`td`,21),Mk(1562,`-`),Kg(),Jc(1563,`td`,22)(1564,`p`),Mk(1565,`URL que deve ser feita a requisição com os arquivos selecionados.`),Kg()()()(),Jc(1566,`h3`,10),Mk(1567,`Métodos`),Kg(),Jc(1568,`table`,81)(1569,`tr`,82)(1570,`th`,83)(1571,`div`,24)(1572,`h4`)(1573,`span`,25),Mk(1574,` clear `),Kg()()()()(),Jc(1575,`tr`,22)(1576,`td`,22)(1577,`p`),Mk(1578,`Método responsável por `),Jc(1579,`strong`),Mk(1580,`limpar`),Kg(),Mk(1581,` o(s) arquivo(s) selecionado(s).`),Kg()()()(),_u(1582,`br`),Jc(1583,`table`,84)(1584,`tr`,82)(1585,`th`,83)(1586,`div`,24)(1587,`h4`)(1588,`span`,25),Mk(1589,` focus `),Kg()()()()(),Jc(1590,`tr`,22)(1591,`td`,22)(1592,`p`),Mk(1593,`Função que atribui foco ao componente.`),Kg(),Jc(1594,`p`),Mk(1595,`Para utilizá-la é necessário ter a instância do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:`),Kg(),Jc(1596,`pre`)(1597,`code`),Mk(1598,`import { PoUploadComponent } from '@po-ui/ng-components';

...

@ViewChild(PoUploadComponent, { static: true }) upload: PoUploadComponent;

focusUpload() {
  this.upload.focus();
}
`),Kg()()()()(),_u(1599,`br`),Jc(1600,`table`,85)(1601,`tr`,82)(1602,`th`,83)(1603,`div`,24)(1604,`h4`)(1605,`span`,25),Mk(1606,` closeModal `),Kg()()()()(),Jc(1607,`tr`,22)(1608,`td`,22)(1609,`p`),Mk(1610,`Método responsável por fechar o modal.`),Kg()()()(),_u(1611,`br`),Jc(1612,`table`,86)(1613,`tr`,82)(1614,`th`,83)(1615,`div`,24)(1616,`h4`)(1617,`span`,25),Mk(1618,` selectFiles `),Kg()()()()(),Jc(1619,`tr`,22)(1620,`td`,22)(1621,`p`),Mk(1622,`Método responsável por `),Jc(1623,`strong`),Mk(1624,`abrir`),Kg(),Mk(1625,` a janela para seleção de arquivo(s).`),Kg()()()(),_u(1626,`br`),Jc(1627,`table`,87)(1628,`tr`,82)(1629,`th`,83)(1630,`div`,24)(1631,`h4`)(1632,`span`,25),Mk(1633,` sendFiles `),Kg()()()()(),Jc(1634,`tr`,22)(1635,`td`,22)(1636,`p`),Mk(1637,`Método responsável por `),Jc(1638,`strong`),Mk(1639,`enviar`),Kg(),Mk(1640,` o(s) arquivo(s) selecionado(s).`),Kg()()()(),_u(1641,`br`),Jc(1642,`table`,88)(1643,`tr`,82)(1644,`th`,83)(1645,`div`,24)(1646,`h4`)(1647,`span`,25),Mk(1648,` showAdditionalHelp `),Kg()()()()(),Jc(1649,`tr`,22)(1650,`td`,22)(1651,`p`),Mk(1652,`Método que exibe `),Jc(1653,`code`),Mk(1654,`p-helper`),Kg(),Mk(1655,` ou executa a ação definida em `),Jc(1656,`code`),Mk(1657,`p-helper{eventOnClick}`),Kg(),Mk(1658,` ou em `),Jc(1659,`code`),Mk(1660,`p-additionalHelp`),Kg(),Mk(1661,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),Jc(1662,`code`),Mk(1663,`p-keydown`),Kg(),Mk(1664,`.`),Kg(),Jc(1665,`blockquote`)(1666,`p`),Mk(1667,`Exibe ou oculta o conteúdo do componente `),Jc(1668,`code`),Mk(1669,`po-helper`),Kg(),Mk(1670,` quando o componente estiver com foco.`),Kg()(),Jc(1671,`pre`)(1672,`code`),Mk(1673,`//Exemplo com p-label e p-helper
<po-upload
 #upload
 ...
 p-label="Label do upload"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, upload)"
></po-upload>
`),Kg()(),Jc(1674,`pre`)(1675,`code`),Mk(1676,`...
onKeyDown(event: KeyboardEvent, inp: PoUploadComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),Kg()()()()(),_u(1677,`br`),Jc(1678,`h3`),Mk(1679,`Interfaces`),Kg(),Jc(1680,`h4`,89)(1681,`code`,5),Mk(1682,`PoUploadFileRestrictions`),Kg()(),Jc(1683,`div`,2)(1684,`p`),Mk(1685,`Interface que define as restri\xE7\xF5es dos arquivos a serem selecionados com base em regras predefinidas
para o seu tamanho, extens\xE3o e quantidade.`),Kg()(),Jc(1686,`h4`,10),Mk(1687,`Propriedades`),Kg(),Jc(1688,`table`,11)(1689,`tr`,12)(1690,`th`,13),Mk(1691,`Nome`),Kg(),Jc(1692,`th`,13),Mk(1693,`Tipo`),Kg(),Jc(1694,`th`,13),Mk(1695,`Descrição`),Kg()(),Jc(1696,`tr`,90)(1697,`td`,15)(1698,`div`,24)(1699,`span`,25),Mk(1700,` allowedExtensions`),_u(1701,`br`),Kg()()(),Jc(1702,`td`,19)(1703,`code`,91),Mk(1704,`Array<string>`),Kg()(),Jc(1705,`td`,22)(1706,`em`)(1707,`strong`),Mk(1708,`(opcional)`),Kg()(),Jc(1709,`p`),Mk(1710,`Extensões permitidas de arquivos que serão enviados ao servidor, devendo ser informada uma coleção de extensões, por exemplo:`),Kg(),Jc(1711,`pre`)(1712,`code`),Mk(1713,`allowedExtensions = ['.png', '.jpg', '.pdf'];
`),Kg()()()(),Jc(1714,`tr`,92)(1715,`td`,15)(1716,`div`,24)(1717,`span`,25),Mk(1718,` maxFileSize`),_u(1719,`br`),Kg()()(),Jc(1720,`td`,19)(1721,`code`,44),Mk(1722,`number`),Kg()(),Jc(1723,`td`,22)(1724,`em`)(1725,`strong`),Mk(1726,`(opcional)`),Kg()(),Jc(1727,`p`),Mk(1728,`Tamanho máximo do arquivo a ser enviado ao servidor.`),Kg(),Jc(1729,`p`),Mk(1730,`Deve ser informado um valor em `),Jc(1731,`em`),Mk(1732,`bytes`),Kg(),Mk(1733,`, por exemplo: `),Jc(1734,`code`),Mk(1735,`31457280`),Kg(),Mk(1736,` (30MB).`),Kg(),Jc(1737,`blockquote`)(1738,`p`),Mk(1739,`Por padrão o valor é `),Jc(1740,`code`),Mk(1741,`30 MB`),Kg(),Mk(1742,`.`),Kg()()()(),Jc(1743,`tr`,93)(1744,`td`,15)(1745,`div`,24)(1746,`span`,25),Mk(1747,` maxFiles`),_u(1748,`br`),Kg()()(),Jc(1749,`td`,19)(1750,`code`,44),Mk(1751,`number`),Kg()(),Jc(1752,`td`,22)(1753,`em`)(1754,`strong`),Mk(1755,`(opcional)`),Kg()(),Jc(1756,`p`),Mk(1757,`Quantidade máxima de arquivos para o `),Jc(1758,`em`),Mk(1759,`upload`),Kg(),Mk(1760,`.`),Kg(),Jc(1761,`blockquote`)(1762,`p`),Mk(1763,`Esta propriedade será válida somente se a propriedade `),Jc(1764,`code`),Mk(1765,`p-multiple`),Kg(),Mk(1766,` estiver habilitada e seu valor for maior do que zero.`),Kg()()()(),Jc(1767,`tr`,94)(1768,`td`,15)(1769,`div`,24)(1770,`span`,25),Mk(1771,` minFileSize`),_u(1772,`br`),Kg()()(),Jc(1773,`td`,19)(1774,`code`,44),Mk(1775,`number`),Kg()(),Jc(1776,`td`,22)(1777,`em`)(1778,`strong`),Mk(1779,`(opcional)`),Kg()(),Jc(1780,`p`),Mk(1781,`Tamanho mínimo em `),Jc(1782,`em`),Mk(1783,`bytes`),Kg(),Mk(1784,` do arquivo que será enviado ao servidor.`),Kg(),Jc(1785,`blockquote`)(1786,`p`),Mk(1787,`Por padrão o valor é `),Jc(1788,`code`),Mk(1789,`0`),Kg(),Mk(1790,`.`),Kg()()()()(),Jc(1791,`h4`,95)(1792,`code`,5),Mk(1793,`PoUploadLiterals`),Kg()(),Jc(1794,`div`,2)(1795,`p`),Mk(1796,`Interface para definição das literais usadas no `),Jc(1797,`code`),Mk(1798,`po-upload`),Kg(),Mk(1799,`.`),Kg()(),Jc(1800,`h4`,10),Mk(1801,`Propriedades`),Kg(),Jc(1802,`table`,11)(1803,`tr`,12)(1804,`th`,13),Mk(1805,`Nome`),Kg(),Jc(1806,`th`,13),Mk(1807,`Tipo`),Kg(),Jc(1808,`th`,13),Mk(1809,`Descrição`),Kg()(),Jc(1810,`tr`,96)(1811,`td`,15)(1812,`div`,24)(1813,`span`,25),Mk(1814,` close`),_u(1815,`br`),Kg()()(),Jc(1816,`td`,19)(1817,`code`,26),Mk(1818,`string`),Kg()(),Jc(1819,`td`,22)(1820,`em`)(1821,`strong`),Mk(1822,`(opcional)`),Kg()(),Jc(1823,`p`),Mk(1824,`Texto do leitor de tela ao focar no ícone de fechar.`),Kg()()(),Jc(1825,`tr`,97)(1826,`td`,15)(1827,`div`,24)(1828,`span`,25),Mk(1829,` continue`),_u(1830,`br`),Kg()()(),Jc(1831,`td`,19)(1832,`code`,26),Mk(1833,`string`),Kg()(),Jc(1834,`td`,22)(1835,`em`)(1836,`strong`),Mk(1837,`(opcional)`),Kg()(),Jc(1838,`p`),Mk(1839,`Texto do botão padrão do modal de pré-visualizar.`),Kg()()(),Jc(1840,`tr`,98)(1841,`td`,15)(1842,`div`,24)(1843,`span`,25),Mk(1844,` doneText`),_u(1845,`br`),Kg()()(),Jc(1846,`td`,19)(1847,`code`,26),Mk(1848,`string`),Kg()(),Jc(1849,`td`,22)(1850,`em`)(1851,`strong`),Mk(1852,`(opcional)`),Kg()(),Jc(1853,`p`),Mk(1854,`Texto a ser exibido no container de informação quando o estado for de sucesso.`),Kg()()(),Jc(1855,`tr`,99)(1856,`td`,15)(1857,`div`,24)(1858,`span`,25),Mk(1859,` dragFilesHere`),_u(1860,`br`),Kg()()(),Jc(1861,`td`,19)(1862,`code`,26),Mk(1863,`string`),Kg()(),Jc(1864,`td`,22)(1865,`em`)(1866,`strong`),Mk(1867,`(opcional)`),Kg()(),Jc(1868,`p`),Mk(1869,`Texto indicativo para a área onde os arquivos devem ser arrastados quando utilizada a propriedade `),Jc(1870,`code`),Mk(1871,`p-drag-drop`),Kg(),Mk(1872,`.`),Kg()()(),Jc(1873,`tr`,100)(1874,`td`,15)(1875,`div`,24)(1876,`span`,25),Mk(1877,` dragFoldersHere`),_u(1878,`br`),Kg()()(),Jc(1879,`td`,19)(1880,`code`,26),Mk(1881,`string`),Kg()(),Jc(1882,`td`,22)(1883,`em`)(1884,`strong`),Mk(1885,`(opcional)`),Kg()(),Jc(1886,`p`),Mk(1887,`Texto indicativo para a área onde os diretórios devem ser arrastados quando utilizada a propriedade `),Jc(1888,`code`),Mk(1889,`p-drag-drop`),Kg(),Mk(1890,`.`),Kg()()(),Jc(1891,`tr`,101)(1892,`td`,15)(1893,`div`,24)(1894,`span`,25),Mk(1895,` dropFilesHere`),_u(1896,`br`),Kg()()(),Jc(1897,`td`,19)(1898,`code`,26),Mk(1899,`string`),Kg()(),Jc(1900,`td`,22)(1901,`em`)(1902,`strong`),Mk(1903,`(opcional)`),Kg()(),Jc(1904,`p`),Mk(1905,`Texto indicativo para a área onde os arquivos devem ser soltos quando utilizada a propriedade `),Jc(1906,`code`),Mk(1907,`p-drag-drop`),Kg()()()(),Jc(1908,`tr`,102)(1909,`td`,15)(1910,`div`,24)(1911,`span`,25),Mk(1912,` dropFoldersHere`),_u(1913,`br`),Kg()()(),Jc(1914,`td`,19)(1915,`code`,26),Mk(1916,`string`),Kg()(),Jc(1917,`td`,22)(1918,`em`)(1919,`strong`),Mk(1920,`(opcional)`),Kg()(),Jc(1921,`p`),Mk(1922,`Texto indicativo para a área onde os diretórios devem ser soltos quando utilizada a propriedade `),Jc(1923,`code`),Mk(1924,`p-drag-drop`),Kg(),Mk(1925,`.`),Kg()()(),Jc(1926,`tr`,103)(1927,`td`,15)(1928,`div`,24)(1929,`span`,25),Mk(1930,` errorOccurred`),_u(1931,`br`),Kg()()(),Jc(1932,`td`,19)(1933,`code`,26),Mk(1934,`string`),Kg()(),Jc(1935,`td`,22)(1936,`em`)(1937,`strong`),Mk(1938,`(opcional)`),Kg()(),Jc(1939,`p`),Mk(1940,`Texto a ser exibido quando ocorrer erro no envio do arquivo.`),Kg()()(),Jc(1941,`tr`,104)(1942,`td`,15)(1943,`div`,24)(1944,`span`,25),Mk(1945,` files`),_u(1946,`br`),Kg()()(),Jc(1947,`td`,19)(1948,`code`,26),Mk(1949,`string`),Kg()(),Jc(1950,`td`,22)(1951,`em`)(1952,`strong`),Mk(1953,`(opcional)`),Kg()(),Jc(1954,`p`),Mk(1955,`Parâmetro `),Jc(1956,`em`),Mk(1957,`files`),Kg(),Mk(1958,` para o texto de exibição quando arrastado um arquivo para um local inválido com a opção de `),Jc(1959,`em`),Mk(1960,`dragDrop`),Kg(),Mk(1961,`.`),Kg()()(),Jc(1962,`tr`,105)(1963,`td`,15)(1964,`div`,24)(1965,`span`,25),Mk(1966,` folders`),_u(1967,`br`),Kg()()(),Jc(1968,`td`,19)(1969,`code`,26),Mk(1970,`string`),Kg()(),Jc(1971,`td`,22)(1972,`em`)(1973,`strong`),Mk(1974,`(opcional)`),Kg()(),Jc(1975,`p`),Mk(1976,`Parâmetro `),Jc(1977,`em`),Mk(1978,`folders`),Kg(),Mk(1979,` para o texto de exibição quando arrastado um arquivo para um local inválido com a opção de `),Jc(1980,`em`),Mk(1981,`dragDrop`),Kg(),Mk(1982,`.`),Kg()()(),Jc(1983,`tr`,106)(1984,`td`,15)(1985,`div`,24)(1986,`span`,25),Mk(1987,` invalidDropArea`),_u(1988,`br`),Kg()()(),Jc(1989,`td`,19)(1990,`code`,26),Mk(1991,`string`),Kg()(),Jc(1992,`td`,22)(1993,`em`)(1994,`strong`),Mk(1995,`(opcional)`),Kg()(),Jc(1996,`p`),Mk(1997,`Texto exibido caso o usuário arrastar um arquivo para um local inválido ao utilizar a opção de `),Jc(1998,`em`),Mk(1999,`dragDrop`),Kg(),Mk(2e3,`.`),Kg()()(),Jc(2001,`tr`,107)(2002,`td`,15)(2003,`div`,24)(2004,`span`,25),Mk(2005,` preview`),_u(2006,`br`),Kg()()(),Jc(2007,`td`,19)(2008,`code`,26),Mk(2009,`string`),Kg()(),Jc(2010,`td`,22)(2011,`em`)(2012,`strong`),Mk(2013,`(opcional)`),Kg()(),Jc(2014,`p`),Mk(2015,`Título do modal de pré-visualizar.`),Kg()()(),Jc(2016,`tr`,108)(2017,`td`,15)(2018,`div`,24)(2019,`span`,25),Mk(2020,` selectFile`),_u(2021,`br`),Kg()()(),Jc(2022,`td`,19)(2023,`code`,26),Mk(2024,`string`),Kg()(),Jc(2025,`td`,22)(2026,`em`)(2027,`strong`),Mk(2028,`(opcional)`),Kg()(),Jc(2029,`p`),Mk(2030,`Texto exibido no label do botão de seleção dos arquivos.`),Kg()()(),Jc(2031,`tr`,109)(2032,`td`,15)(2033,`div`,24)(2034,`span`,25),Mk(2035,` selectFiles`),_u(2036,`br`),Kg()()(),Jc(2037,`td`,19)(2038,`code`,26),Mk(2039,`string`),Kg()(),Jc(2040,`td`,22)(2041,`em`)(2042,`strong`),Mk(2043,`(opcional)`),Kg()(),Jc(2044,`p`),Mk(2045,`Texto exibido no label do botão de seleção dos arquivos ao utilizar a propriedade `),Jc(2046,`code`),Mk(2047,`p-multiple`),Kg(),Mk(2048,`.`),Kg()()(),Jc(2049,`tr`,110)(2050,`td`,15)(2051,`div`,24)(2052,`span`,25),Mk(2053,` selectFilesOnComputer`),_u(2054,`br`),Kg()()(),Jc(2055,`td`,19)(2056,`code`,26),Mk(2057,`string`),Kg()(),Jc(2058,`td`,22)(2059,`em`)(2060,`strong`),Mk(2061,`(opcional)`),Kg()(),Jc(2062,`p`),Mk(2063,`Texto utilizado para indicar a possibilidade de sele\xE7\xE3o de arquivos na \xE1rea onde podem ser arrastados os arquivos
ao utilizar a op\xE7\xE3o de `),Jc(2064,`em`),Mk(2065,`dragDrop`),Kg(),Mk(2066,`.`),Kg()()(),Jc(2067,`tr`,111)(2068,`td`,15)(2069,`div`,24)(2070,`span`,25),Mk(2071,` selectFolder`),_u(2072,`br`),Kg()()(),Jc(2073,`td`,19)(2074,`code`,26),Mk(2075,`string`),Kg()(),Jc(2076,`td`,22)(2077,`em`)(2078,`strong`),Mk(2079,`(opcional)`),Kg()(),Jc(2080,`p`),Mk(2081,`Texto exibido no label do botão de seleção dos arquivos ao utilizar a propriedade `),Jc(2082,`code`),Mk(2083,`p-directory`),Kg(),Mk(2084,`.`),Kg()()(),Jc(2085,`tr`,112)(2086,`td`,15)(2087,`div`,24)(2088,`span`,25),Mk(2089,` selectFolderOnComputer`),_u(2090,`br`),Kg()()(),Jc(2091,`td`,19)(2092,`code`,26),Mk(2093,`string`),Kg()(),Jc(2094,`td`,22)(2095,`em`)(2096,`strong`),Mk(2097,`(opcional)`),Kg()(),Jc(2098,`p`),Mk(2099,`Texto utilizado para indicar a possibilidade de sele\xE7\xE3o de diret\xF3rio na \xE1rea onde podem ser arrastados os arquivos
ao utilizar a op\xE7\xE3o de `),Jc(2100,`em`),Mk(2101,`dragDrop`),Kg(),Mk(2102,`.`),Kg()()(),Jc(2103,`tr`,113)(2104,`td`,15)(2105,`div`,24)(2106,`span`,25),Mk(2107,` sentWithSuccess`),_u(2108,`br`),Kg()()(),Jc(2109,`td`,19)(2110,`code`,26),Mk(2111,`string`),Kg()(),Jc(2112,`td`,22)(2113,`em`)(2114,`strong`),Mk(2115,`(opcional)`),Kg()(),Jc(2116,`p`),Mk(2117,`Texto a ser exibido quando o envio do arquivo for realizado com sucesso.`),Kg()()(),Jc(2118,`tr`,114)(2119,`td`,15)(2120,`div`,24)(2121,`span`,25),Mk(2122,` startSending`),_u(2123,`br`),Kg()()(),Jc(2124,`td`,19)(2125,`code`,26),Mk(2126,`string`),Kg()(),Jc(2127,`td`,22)(2128,`em`)(2129,`strong`),Mk(2130,`(opcional)`),Kg()(),Jc(2131,`p`),Mk(2132,`Texto exibido no label do botão para iniciar o envio dos arquivos.`),Kg()()(),Jc(2133,`tr`,115)(2134,`td`,15)(2135,`div`,24)(2136,`span`,25),Mk(2137,` thumbnail`),_u(2138,`br`),Kg()()(),Jc(2139,`td`,19)(2140,`code`,26),Mk(2141,`string`),Kg()(),Jc(2142,`td`,22)(2143,`em`)(2144,`strong`),Mk(2145,`(opcional)`),Kg()(),Jc(2146,`p`),Mk(2147,`Texto do leitor da miniatura da imagem.`),Kg()()(),Jc(2148,`tr`,116)(2149,`td`,15)(2150,`div`,24)(2151,`span`,25),Mk(2152,` tryAgain`),_u(2153,`br`),Kg()()(),Jc(2154,`td`,19)(2155,`code`,26),Mk(2156,`string`),Kg()(),Jc(2157,`td`,22)(2158,`em`)(2159,`strong`),Mk(2160,`(opcional)`),Kg()(),Jc(2161,`p`),Mk(2162,`Texto de Tente novamente ao ocorrer erro ao enviar.`),Kg()()(),Jc(2163,`tr`,117)(2164,`td`,15)(2165,`div`,24)(2166,`span`,25),Mk(2167,` uploadingText`),_u(2168,`br`),Kg()()(),Jc(2169,`td`,19)(2170,`code`,26),Mk(2171,`string`),Kg()(),Jc(2172,`td`,22)(2173,`em`)(2174,`strong`),Mk(2175,`(opcional)`),Kg()(),Jc(2176,`p`),Mk(2177,`Texto a ser exibido no container de informação quando o estado for enviando.`),Kg()()()(),Jc(2178,`h4`,118)(2179,`code`,5),Mk(2180,`PoProgressAction`),Kg()(),Jc(2181,`div`,2)(2182,`p`),Mk(2183,`Interface para as ações dos componentes po-progress e po-upload.`),Kg()(),Jc(2184,`h4`,10),Mk(2185,`Propriedades`),Kg(),Jc(2186,`table`,11)(2187,`tr`,12)(2188,`th`,13),Mk(2189,`Nome`),Kg(),Jc(2190,`th`,13),Mk(2191,`Tipo`),Kg(),Jc(2192,`th`,13),Mk(2193,`Descrição`),Kg()(),Jc(2194,`tr`,119)(2195,`td`,15)(2196,`div`,24)(2197,`span`,25),Mk(2198,` disabled`),_u(2199,`br`),Kg()()(),Jc(2200,`td`,19)(2201,`code`,28),Mk(2202,`boolean `),Kg(),Jc(2203,`code`,120),Mk(2204,` Function`),Kg()(),Jc(2205,`td`,22)(2206,`em`)(2207,`strong`),Mk(2208,`(opcional)`),Kg()(),Jc(2209,`p`),Mk(2210,`Função que deve retornar um booleano para habilitar ou desabilitar a ação para o registro selecionado.`),Kg(),Jc(2211,`p`),Mk(2212,`Também é possível informar diretamente um valor booleano que vai habilitar ou desabilitar a ação para todos os registros.`),Kg()()(),Jc(2213,`tr`,121)(2214,`td`,15)(2215,`div`,24)(2216,`span`,25),Mk(2217,` icon`),_u(2218,`br`),Kg()()(),Jc(2219,`td`,19)(2220,`code`,26),Mk(2221,`string `),Kg(),Jc(2222,`code`,122),Mk(2223,` TemplateRef<void>`),Kg()(),Jc(2224,`td`,22)(2225,`em`)(2226,`strong`),Mk(2227,`(opcional)`),Kg()(),Jc(2228,`p`),Mk(2229,`Define um ícone que será exibido ao lado esquerdo do rótulo.`),Kg(),Jc(2230,`p`),Mk(2231,`É possível usar qualquer um dos ícones da `),Jc(2232,`a`,123),Mk(2233,`Biblioteca de ícones`),Kg(),Mk(2234,`. conforme exemplo abaixo:`),Kg(),Jc(2235,`pre`)(2236,`code`),Mk(2237,`<po-component
 [p-property]="[{ label: 'PHOSPHOR ICON', icon: 'an an-newspaper' }]">
</po-component>
`),Kg()(),Jc(2238,`p`),Mk(2239,`Também é possível utilizar outras fontes de ícones, por exemplo a biblioteca Font Awesome, da seguinte forma:`),Kg(),Jc(2240,`pre`)(2241,`code`),Mk(2242,`<po-component
 [p-property]="[{ label: 'FA ICON', icon: 'fa fa-icon-podcast' }]">
</po-component>
`),Kg()(),Jc(2243,`p`),Mk(2244,`Outra opção seria a customização do ícone através do `),Jc(2245,`code`),Mk(2246,`TemplateRef`),Kg(),Mk(2247,`, conforme exemplo abaixo:
component.html:`),Kg(),Jc(2248,`pre`)(2249,`code`),Mk(2250,`<ng-template #iconTemplate>
  <ion-icon name="heart"></ion-icon>
</ng-template>

<po-component [p-property]="myProperty"></po-component>
`),Kg()(),Jc(2251,`p`),Mk(2252,`component.ts:`),Kg(),Jc(2253,`pre`)(2254,`code`),Mk(2255,`@ViewChild('iconTemplate', { static: true } ) iconTemplate : TemplateRef<void>;

myProperty = [
 {
   label: 'FA ICON',
   icon: this.iconTemplate
 }
];
`),Kg()()()(),Jc(2256,`tr`,124)(2257,`td`,15)(2258,`div`,24)(2259,`span`,25),Mk(2260,` label`),_u(2261,`br`),Kg()()(),Jc(2262,`td`,19)(2263,`code`,26),Mk(2264,`string`),Kg()(),Jc(2265,`td`,22)(2266,`em`)(2267,`strong`),Mk(2268,`(opcional)`),Kg()(),Jc(2269,`p`),Mk(2270,`Rótulo da ação.`),Kg()()(),Jc(2271,`tr`,125)(2272,`td`,15)(2273,`div`,24)(2274,`span`,25),Mk(2275,` type`),_u(2276,`br`),Kg()()(),Jc(2277,`td`,19)(2278,`code`,26),Mk(2279,`string`),Kg()(),Jc(2280,`td`,22)(2281,`em`)(2282,`strong`),Mk(2283,`(opcional)`),Kg()(),Jc(2284,`p`),Mk(2285,`Define a cor do item, sendo `),Jc(2286,`code`),Mk(2287,`default`),Kg(),Mk(2288,` o padrão.`),Kg(),Jc(2289,`p`),Mk(2290,`Valores válidos:`),Kg(),Jc(2291,`ul`)(2292,`li`)(2293,`code`),Mk(2294,`default`),Kg()(),Jc(2295,`li`)(2296,`code`),Mk(2297,`danger`),Kg(),Mk(2298,` - indicado para ações exclusivas (excluir, sair).`),Kg()()()(),Jc(2299,`tr`,126)(2300,`td`,15)(2301,`div`,24)(2302,`span`,25),Mk(2303,` visible`),_u(2304,`br`),Kg()()(),Jc(2305,`td`,19)(2306,`code`,28),Mk(2307,`boolean `),Kg(),Jc(2308,`code`,120),Mk(2309,` Function`),Kg()(),Jc(2310,`td`,22)(2311,`em`)(2312,`strong`),Mk(2313,`(opcional)`),Kg()(),Jc(2314,`p`),Mk(2315,`Define se a ação será visível.`),Kg(),Jc(2316,`blockquote`)(2317,`p`),Mk(2318,`Caso o valor não seja especificado a ação será visível.`),Kg()(),Jc(2319,`p`),Mk(2320,`Opções para tornar a ação visível ou não:`),Kg(),Jc(2321,`ul`)(2322,`li`)(2323,`p`),Mk(2324,`Função que deve retornar um booleano.`),Kg()(),Jc(2325,`li`)(2326,`p`),Mk(2327,`Informar diretamente um valor booleano.`),Kg()()()()()()())},dependencies:[P],encapsulation:2,changeDetection:1})}return l})();function ct(l,te){if(l&1&&(Jc(0,`div`,1),_u(1,`sample-po-upload-basic-view`)(2,`sample-po-upload-labs-view`)(3,`sample-po-upload-resume-view`)(4,`sample-po-upload-rs-view`)(5,`sample-po-upload-download-view`)(6,`sample-po-upload-preview-view`),Kg()),l&2){let d=tk();Ab(`hidden`,d.activeTab!==`web`)}}var ut=[{path:``,component:(()=>{class l{route;router;sub;hidePoWebSample=!0;samplesLength=6;activeTab=`doc`;title=`Upload`;actions=[];toWeb={label:`Ver exemplos`,icon:`an an-browsers`,action:()=>this.changeTab(`web`)};toDoc={label:`Ver documentação`,icon:`an an-file-text`,action:()=>this.changeTab(`doc`)};back={label:`Voltar`,icon:`an an-arrow-left`,action:this.goBack.bind(this)};constructor(d,r){this.route=d,this.router=r}goBack(){this.router.navigate([`documentation`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(d=>{let r=d.view;this.hidePoWebSample=this.samplesLength===0,this.activeTab=this.hidePoWebSample?`doc`:r||`web`,this.title=`Upload · `+(this.activeTab===`web`?`Exemplos`:`Documentação`),this.actions=this.hidePoWebSample?[this.back]:[this.activeTab===`web`?this.toDoc:this.toWeb,this.back]})}changeTab(d){this.router.navigate([],{queryParams:{view:d},queryParamsHandling:`merge`})}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(r){return new(r||l)(I(ar),I(An))};static ɵcmp=Jn({type:l,selectors:[[`ng-component`]],standalone:!1,decls:4,vars:4,consts:[[`data-tour`,`component-page`,3,`p-title`,`p-actions`],[`data-tour-mode`,`web`,3,`hidden`],[`data-tour-mode`,`doc`,3,`hidden`]],template:function(r,i){r&1&&(Jc(0,`po-page-default`,0),LO(1,ct,7,1,`div`,1),Jc(2,`div`,2),_u(3,`sample-po-upload-doc`),Kg()()),r&2&&(Ab(`p-title`,i.title)(`p-actions`,i.actions),wg(),jO(i.hidePoWebSample?-1:1),wg(),Ab(`hidden`,i.activeTab!==`doc`))},dependencies:[Mze,Pe,Me,Ue,ke,ze,Re,je],encapsulation:2,changeDetection:1})}return l})()}];var Oe=(()=>{class l{static ɵfac=function(r){return new(r||l)};static ɵmod=ge({type:l});static ɵinj=de({imports:[GV.forChild(ut),GV]})}return l})();var pn=(()=>{class l{static ɵfac=function(r){return new(r||l)};static ɵmod=ge({type:l});static ɵinj=de({imports:[M,Oe]})}return l})();export{pn as DocPoUploadModule};