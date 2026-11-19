import{m as P,p as M}from"./main-DMA7KEAR.js";import{Ar as I,At as Zte,F as Joe,G as Nf,Hr as Lk,Ii as WL,Ir as Kb,L as Koe,Lr as Kg,Oi as VO,Pi as W0,Pn as tre,Pr as Jn,Pt as are,Qa as tm,Qr as OZ,Ta as jk,Ti as U_,Ui as YO,Va as p,Vi as Xm,W as Mze,Wi as Yb,Wr as MZ,Zi as ar,ar as An,bi as TZ,bn as oi,ci as QP,cr as B_,da as gk,gi as Rb,go as z0,ha as i1,io as vu,j as I4,ji as Vk,li as Qc,na as de,oo as wg,qi as ZL,ro as vt,rr as AZ,sa as ek,si as QL,sn as j4,tt as R4,ua as ge$1,va as ik,vi as Sk,wr as GV,xi as Tk,xr as FO}from"./chunk-DtUf9FxZ.js";var _e=()=>({label:`Option 1`,value:`1`});var Pe=()=>({label:`Option 2`,value:`2`});var Te=(i,Z)=>[i,Z];var ue=(()=>{class i{static ɵfac=function(r){return new(r||i)};static ɵcmp=Jn({type:i,selectors:[[`sample-po-radio-group-basic`]],standalone:!1,decls:1,vars:6,consts:[[`name`,`radioGroupBasic`,`p-label`,`PO Radio Group`,3,`p-options`]],template:function(r,n){r&1&&vu(0,`po-radio-group`,0),r&2&&Rb(`p-options`,jk(3,Te,Lk(1,_e),Lk(2,Pe)))},dependencies:[Zte],encapsulation:2,changeDetection:1})}return i})();var Re=i=>({"docs-sample-code-tabs":i});var ge=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||i)};static ɵcmp=Jn({type:i,selectors:[[`sample-po-radio-group-basic-view`]],standalone:!1,decls:26,vars:6,consts:[[`id`,`sample-po-radio-group-basic`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`data-file`,`sample-po-radio-group-basic/sample-po-radio-group-basic.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-radio-group-basic/sample-po-radio-group-basic.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,n){r&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Radio Group Basic`),Kg(),Qc(4,`a`,2),vt(`click`,function(){return n.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-radio-group-basic/sample-po-radio-group-basic.component.html`),Kg(),Qc(13,`div`,7)(14,`pre`,8),Sk(15,`<po-radio-group
  name="radioGroupBasic"
  p-label="PO Radio Group"
  [p-options]="[
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' }
  ]"
>
</po-radio-group>
`),Kg()()()(),Qc(16,`po-tab`,9)(17,`div`)(18,`label`,6),Sk(19,`sample-po-radio-group-basic/sample-po-radio-group-basic.component.ts`),Kg(),Qc(20,`div`,10)(21,`pre`,11),Sk(22,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-radio-group-basic',
  templateUrl: './sample-po-radio-group-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoRadioGroupBasicComponent {}
`),Kg()()()()()(),Qc(23,`div`,12),vu(24,`sample-po-radio-group-basic`),Kg(),vu(25,`hr`)),r&2&&(wg(5),gk(`po-icon `+n.sampleCodeButtonIcon),wg(),tm(` `,n.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,Re,n.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,ue],encapsulation:2,changeDetection:1})}return i})();var be=(()=>{class i{helperText;columns;event;help;label;option;options;properties;radioGroup;fieldErrorMessage;size;columnOptions=[{label:`1 column`,value:1},{label:`2 columns`,value:2},{label:`3 columns`,value:3},{label:`4 columns`,value:4}];propertiesOptions=[{value:`disabled`,label:`Disabled`},{value:`optional`,label:`Optional`},{value:`required`,label:`Required`},{value:`showRequired`,label:`Show Required`},{value:`errorLimit`,label:`Limit Error Message`},{value:`labelTextWrap`,label:`Label Text Wrap`},{value:`compactLabel`,label:`Compact Label`}];sizesOptions=[{label:`Small`,value:`small`},{label:`Medium`,value:`medium`},{label:`Large`,value:`large`}];ngOnInit(){this.restore()}addOption(){this.options.push(this.option),this.option=this.getNewOption()}changeEvent(d){this.event=d}restore(){this.helperText=``,this.event=``,this.radioGroup=void 0,this.properties=[],this.fieldErrorMessage=``,this.size=`medium`,this.option=this.getNewOption(),this.options=[]}getNewOption(){return{label:void 0,value:void 0}}static ɵfac=function(r){return new(r||i)};static ɵcmp=Jn({type:i,selectors:[[`sample-po-radio-group-labs`]],standalone:!1,decls:26,vars:31,consts:[[`optionForm`,`ngForm`],[`propertiesForm`,`ngForm`],[`name`,`radioGroupLabs`,3,`ngModelChange`,`p-change`,`p-change-model`,`p-keydown`,`ngModel`,`p-helper`,`p-columns`,`p-disabled`,`p-help`,`p-label`,`p-optional`,`p-options`,`p-required`,`p-field-error-message`,`p-show-required`,`p-size`,`p-error-limit`,`p-label-text-wrap`,`p-compact-label`],[1,`po-row`],[`p-label`,`Model`,1,`po-md-6`,3,`p-value`],[`p-label`,`Event`,1,`po-md-6`,3,`p-value`],[`name`,`optionLabel`,`p-label`,`Option Label`,`p-required`,``,1,`po-md-6`,`po-lg-4`,3,`ngModelChange`,`ngModel`],[`name`,`optionValue`,`p-label`,`Option Value`,`p-required`,``,1,`po-md-6`,`po-lg-4`,3,`ngModelChange`,`ngModel`],[`name`,`optionDisabled`,`p-label`,`Option Disabled`,1,`po-lg-4`,3,`ngModelChange`,`ngModel`],[`p-label`,`Add Option`,1,`po-md-6`,`po-lg-3`,3,`p-click`,`p-disabled`],[`name`,`label`,`p-clean`,``,`p-label`,`Label`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`help`,`p-clean`,``,`p-label`,`Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`helperText`,`p-clean`,``,`p-label`,`Additional Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`fieldErrorMessage`,`p-clean`,``,`p-label`,`Field Error Message`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`columns`,`p-columns`,`4`,`p-label`,`Columns`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`properties`,`p-columns`,`4`,`p-label`,`Properties`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`size`,`p-columns`,`4`,`p-label`,`Size`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`click`]],template:function(r,n){if(r&1){let s=YO();Qc(0,`po-radio-group`,2),z0(),Kb(`ngModelChange`,function(l){return B_(s),Tk(n.radioGroup,l)||(n.radioGroup=l),U_(l)}),vt(`p-change`,function(){return n.changeEvent(`p-change`)})(`p-change-model`,function(){return n.changeEvent(`p-change-model`)})(`p-keydown`,function(){return n.changeEvent(`p-keydown`)}),Kg(),vu(1,`po-divider`),Qc(2,`div`,3),vu(3,`po-info`,4)(4,`po-info`,5),Kg(),vu(5,`po-divider`),Qc(6,`form`,null,0)(8,`div`,3)(9,`po-input`,6),z0(),Kb(`ngModelChange`,function(l){return B_(s),Tk(n.option.label,l)||(n.option.label=l),U_(l)}),Kg(),Qc(10,`po-input`,7),z0(),Kb(`ngModelChange`,function(l){return B_(s),Tk(n.option.value,l)||(n.option.value=l),U_(l)}),Kg(),Qc(11,`po-switch`,8),z0(),Kb(`ngModelChange`,function(l){return B_(s),Tk(n.option.disabled,l)||(n.option.disabled=l),U_(l)}),Kg()(),Qc(12,`div`,3)(13,`po-button`,9),vt(`p-click`,function(){B_(s);let l=ik(7);return n.addOption(),U_(l.reset())}),Kg()()(),vu(14,`po-divider`),Qc(15,`form`,null,1)(17,`po-input`,10),z0(),Kb(`ngModelChange`,function(l){return B_(s),Tk(n.label,l)||(n.label=l),U_(l)}),Kg(),Qc(18,`po-input`,11),z0(),Kb(`ngModelChange`,function(l){return B_(s),Tk(n.help,l)||(n.help=l),U_(l)}),Kg(),Qc(19,`po-input`,12),z0(),Kb(`ngModelChange`,function(l){return B_(s),Tk(n.helperText,l)||(n.helperText=l),U_(l)}),Kg(),Qc(20,`po-input`,13),z0(),Kb(`ngModelChange`,function(l){return B_(s),Tk(n.fieldErrorMessage,l)||(n.fieldErrorMessage=l),U_(l)}),Kg(),Qc(21,`po-radio-group`,14),z0(),Kb(`ngModelChange`,function(l){return B_(s),Tk(n.columns,l)||(n.columns=l),U_(l)}),Kg(),Qc(22,`po-checkbox-group`,15),z0(),Kb(`ngModelChange`,function(l){return B_(s),Tk(n.properties,l)||(n.properties=l),U_(l)}),Kg(),Qc(23,`po-radio-group`,16),z0(),Kb(`ngModelChange`,function(l){return B_(s),Tk(n.size,l)||(n.size=l),U_(l)}),Kg(),Qc(24,`div`,3)(25,`po-button`,17),vt(`click`,function(){return B_(s),ik(16).reset(),U_(n.restore())}),Kg()()()}if(r&2){let s=ik(7);Yb(`ngModel`,n.radioGroup),Rb(`p-helper`,n.helperText)(`p-columns`,n.columns)(`p-disabled`,n.properties.includes(`disabled`))(`p-help`,n.help)(`p-label`,n.label)(`p-optional`,n.properties.includes(`optional`))(`p-options`,n.options)(`p-required`,n.properties.includes(`required`))(`p-field-error-message`,n.fieldErrorMessage)(`p-show-required`,n.properties.includes(`showRequired`))(`p-size`,n.size)(`p-error-limit`,n.properties?.includes(`errorLimit`))(`p-label-text-wrap`,n.properties?.includes(`labelTextWrap`))(`p-compact-label`,n.properties?.includes(`compactLabel`)),W0(),wg(3),Rb(`p-value`,n.radioGroup),wg(),Rb(`p-value`,n.event),wg(5),Yb(`ngModel`,n.option.label),W0(),wg(),Yb(`ngModel`,n.option.value),W0(),wg(),Yb(`ngModel`,n.option.disabled),W0(),wg(2),Rb(`p-disabled`,s.invalid),wg(4),Yb(`ngModel`,n.label),W0(),wg(),Yb(`ngModel`,n.help),W0(),wg(),Yb(`ngModel`,n.helperText),W0(),wg(),Yb(`ngModel`,n.fieldErrorMessage),W0(),wg(),Yb(`ngModel`,n.columns),Rb(`p-options`,n.columnOptions),W0(),wg(),Yb(`ngModel`,n.properties),Rb(`p-options`,n.propertiesOptions),W0(),wg(),Yb(`ngModel`,n.size),Rb(`p-options`,n.sizesOptions),W0()}},dependencies:[AZ,MZ,TZ,QL,WL,oi,Nf,I4,j4,Zte,R4,Joe],encapsulation:2,changeDetection:1})}return i})();var Fe=i=>({"docs-sample-code-tabs":i});var he=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||i)};static ɵcmp=Jn({type:i,selectors:[[`sample-po-radio-group-labs-view`]],standalone:!1,decls:26,vars:6,consts:[[`id`,`sample-po-radio-group-labs`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`data-file`,`sample-po-radio-group-labs/sample-po-radio-group-labs.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-radio-group-labs/sample-po-radio-group-labs.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,n){r&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Radio Group Labs`),Kg(),Qc(4,`a`,2),vt(`click`,function(){return n.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-radio-group-labs/sample-po-radio-group-labs.component.html`),Kg(),Qc(13,`div`,7)(14,`pre`,8),Sk(15,`<po-radio-group
  name="radioGroupLabs"
  [(ngModel)]="radioGroup"
  [p-helper]="helperText"
  [p-columns]="columns"
  [p-disabled]="properties.includes('disabled')"
  [p-help]="help"
  [p-label]="label"
  [p-optional]="properties.includes('optional')"
  [p-options]="options"
  [p-required]="properties.includes('required')"
  [p-field-error-message]="fieldErrorMessage"
  [p-show-required]="properties.includes('showRequired')"
  [p-size]="size"
  (p-change)="changeEvent('p-change')"
  (p-change-model)="changeEvent('p-change-model')"
  (p-keydown)="changeEvent('p-keydown')"
  [p-error-limit]="properties?.includes('errorLimit')"
  [p-label-text-wrap]="properties?.includes('labelTextWrap')"
  [p-compact-label]="properties?.includes('compactLabel')"
>
</po-radio-group>

<po-divider />

<div class="po-row">
  <po-info class="po-md-6" p-label="Model" [p-value]="radioGroup"> </po-info>

  <po-info class="po-md-6" p-label="Event" [p-value]="event"> </po-info>
</div>

<po-divider />

<form #optionForm="ngForm">
  <div class="po-row">
    <po-input class="po-md-6 po-lg-4" name="optionLabel" [(ngModel)]="option.label" p-label="Option Label" p-required>
    </po-input>

    <po-input class="po-md-6 po-lg-4" name="optionValue" [(ngModel)]="option.value" p-label="Option Value" p-required>
    </po-input>

    <po-switch class="po-lg-4" name="optionDisabled" [(ngModel)]="option.disabled" p-label="Option Disabled">
    </po-switch>
  </div>

  <div class="po-row">
    <po-button
      class="po-md-6 po-lg-3"
      p-label="Add Option"
      [p-disabled]="optionForm.invalid"
      (p-click)="addOption(); optionForm.reset()"
    >
    </po-button>
  </div>
</form>

<po-divider />

<form #propertiesForm="ngForm">
  <po-input class="po-md-6" name="label" [(ngModel)]="label" p-clean p-label="Label"> </po-input>

  <po-input class="po-md-6" name="help" [(ngModel)]="help" p-clean p-label="Help"> </po-input>

  <po-input class="po-md-6" name="helperText" [(ngModel)]="helperText" p-clean p-label="Additional Help"> </po-input>

  <po-input
    class="po-md-6"
    name="fieldErrorMessage"
    [(ngModel)]="fieldErrorMessage"
    p-clean
    p-label="Field Error Message"
  >
  </po-input>

  <po-radio-group
    class="po-md-12"
    name="columns"
    [(ngModel)]="columns"
    p-columns="4"
    p-label="Columns"
    [p-options]="columnOptions"
  >
  </po-radio-group>

  <po-checkbox-group
    class="po-md-12"
    name="properties"
    [(ngModel)]="properties"
    p-columns="4"
    p-label="Properties"
    [p-options]="propertiesOptions"
  >
  </po-checkbox-group>
  <po-radio-group
    class="po-md-12"
    name="size"
    [(ngModel)]="size"
    p-columns="4"
    p-label="Size"
    [p-options]="sizesOptions"
  >
  </po-radio-group>

  <div class="po-row">
    <po-button class="po-lg-3 po-md-6" p-label="Sample Restore" (click)="propertiesForm.reset(); restore()">
    </po-button>
  </div>
</form>
`),Kg()()()(),Qc(16,`po-tab`,9)(17,`div`)(18,`label`,6),Sk(19,`sample-po-radio-group-labs/sample-po-radio-group-labs.component.ts`),Kg(),Qc(20,`div`,10)(21,`pre`,11),Sk(22,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { PoCheckboxGroupOption, PoRadioGroupOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-radio-group-labs',
  templateUrl: './sample-po-radio-group-labs.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoRadioGroupLabsComponent implements OnInit {
  helperText: string;
  columns: number;
  event: string;
  help: string;
  label: string;
  option: PoRadioGroupOption;
  options: Array<PoRadioGroupOption>;
  properties: Array<string>;
  radioGroup: string;
  fieldErrorMessage: string;
  size: string;

  readonly columnOptions: Array<PoRadioGroupOption> = [
    { label: '1 column', value: 1 },
    { label: '2 columns', value: 2 },
    { label: '3 columns', value: 3 },
    { label: '4 columns', value: 4 }
  ];

  readonly propertiesOptions: Array<PoCheckboxGroupOption> = [
    { value: 'disabled', label: 'Disabled' },
    { value: 'optional', label: 'Optional' },
    { value: 'required', label: 'Required' },
    { value: 'showRequired', label: 'Show Required' },
    { value: 'errorLimit', label: 'Limit Error Message' },
    { value: 'labelTextWrap', label: 'Label Text Wrap' },
    { value: 'compactLabel', label: 'Compact Label' }
  ];

  readonly sizesOptions: Array<PoRadioGroupOption> = [
    { label: 'Small', value: 'small' },
    { label: 'Medium', value: 'medium' },
    { label: 'Large', value: 'large' }
  ];

  ngOnInit() {
    this.restore();
  }

  addOption() {
    this.options.push(this.option);
    this.option = this.getNewOption();
  }

  changeEvent(event: string) {
    this.event = event;
  }

  restore() {
    this.helperText = '';
    this.event = '';
    this.radioGroup = undefined;
    this.properties = [];
    this.fieldErrorMessage = '';
    this.size = 'medium';
    this.option = this.getNewOption();
    this.options = [];
  }

  private getNewOption(): PoRadioGroupOption {
    return {
      label: undefined,
      value: undefined
    };
  }
}
`),Kg()()()()()(),Qc(23,`div`,12),vu(24,`sample-po-radio-group-labs`),Kg(),vu(25,`hr`)),r&2&&(wg(5),gk(`po-icon `+n.sampleCodeButtonIcon),wg(),tm(` `,n.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,Fe,n.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,be],encapsulation:2,changeDetection:1})}return i})();var Se=(()=>{class i{language=`es`;original=``;translated=``;languageOptions=[{label:`Spanish`,value:`es`},{label:`English`,value:`en`}];optionsList=[{value:`1`,label:`Olá`},{value:`2`,label:`Tchau`},{value:`3`,label:`Estrangeiro`},{value:`4`,label:`Alinhamento`},{value:`5`,label:`Visão`},{value:`6`,label:`Livro`}];wordsOptions=[{id:`1`,en:`Hello`,es:`Hola`},{id:`2`,en:`Bye`,es:`Hasta luego`},{id:`3`,en:`Foreign`,es:`Extranjero`},{id:`4`,en:`Alignment`,es:`Alineación`},{id:`5`,en:`Vision`,es:`Vista`},{id:`6`,en:`Book`,es:`Libro`}];changeLanguage(d){let r=this.wordsOptions.find(n=>n.id===this.original);r&&(this.translated=r[d||this.language])}static ɵfac=function(r){return new(r||i)};static ɵcmp=Jn({type:i,selectors:[[`sample-po-radio-group-translator`]],standalone:!1,decls:6,vars:5,consts:[[`f`,`ngForm`],[1,`po-row`],[`name`,`language`,`p-label`,`Select a Language`,`p-required`,``,1,`po-lg-4`,3,`ngModelChange`,`p-change`,`ngModel`,`p-options`],[`name`,`original`,`p-label`,`Original Text (Portuguese)`,`p-required`,``,1,`po-lg-4`,3,`ngModelChange`,`p-change`,`ngModel`,`p-options`],[`name`,`translated`,`p-label`,`Translated Text`,`p-readonly`,``,`p-required`,``,1,`po-lg-4`,3,`ngModelChange`,`ngModel`]],template:function(r,n){if(r&1){let s=YO();Qc(0,`form`,null,0)(2,`div`,1)(3,`po-radio-group`,2),z0(),Kb(`ngModelChange`,function(l){return B_(s),Tk(n.language,l)||(n.language=l),U_(l)}),vt(`p-change`,function(l){return n.changeLanguage(l)}),Kg(),Qc(4,`po-select`,3),z0(),Kb(`ngModelChange`,function(l){return B_(s),Tk(n.original,l)||(n.original=l),U_(l)}),vt(`p-change`,function(l){return n.changeLanguage(l)}),Kg(),Qc(5,`po-input`,4),z0(),Kb(`ngModelChange`,function(l){return B_(s),Tk(n.translated,l)||(n.translated=l),U_(l)}),Kg()()()}r&2&&(wg(3),Yb(`ngModel`,n.language),Rb(`p-options`,n.languageOptions),W0(),wg(),Yb(`ngModel`,n.original),Rb(`p-options`,n.optionsList),W0(),wg(),Yb(`ngModel`,n.translated),W0())},dependencies:[AZ,MZ,TZ,QL,WL,j4,Zte,Koe],encapsulation:2,changeDetection:1})}return i})();var Oe=i=>({"docs-sample-code-tabs":i});var xe=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||i)};static ɵcmp=Jn({type:i,selectors:[[`sample-po-radio-group-translator-view`]],standalone:!1,decls:26,vars:6,consts:[[`id`,`sample-po-radio-group-translator`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`data-file`,`sample-po-radio-group-translator/sample-po-radio-group-translator.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-radio-group-translator/sample-po-radio-group-translator.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,n){r&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Radio Group - Translator`),Kg(),Qc(4,`a`,2),vt(`click`,function(){return n.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-radio-group-translator/sample-po-radio-group-translator.component.html`),Kg(),Qc(13,`div`,7)(14,`pre`,8),Sk(15,`<form #f="ngForm">
  <div class="po-row">
    <po-radio-group
      class="po-lg-4"
      name="language"
      [(ngModel)]="language"
      p-label="Select a Language"
      p-required
      [p-options]="languageOptions"
      (p-change)="changeLanguage($event)"
    >
    </po-radio-group>

    <po-select
      class="po-lg-4"
      name="original"
      [(ngModel)]="original"
      p-label="Original Text (Portuguese)"
      p-required
      [p-options]="optionsList"
      (p-change)="changeLanguage($event)"
    >
    </po-select>

    <po-input
      class="po-lg-4"
      name="translated"
      [(ngModel)]="translated"
      p-label="Translated Text"
      p-readonly
      p-required
    >
    </po-input>
  </div>
</form>
`),Kg()()()(),Qc(16,`po-tab`,9)(17,`div`)(18,`label`,6),Sk(19,`sample-po-radio-group-translator/sample-po-radio-group-translator.component.ts`),Kg(),Qc(20,`div`,10)(21,`pre`,11),Sk(22,`import { Component, ChangeDetectionStrategy } from '@angular/core';

import { PoRadioGroupOption, PoSelectOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-radio-group-translator',
  templateUrl: './sample-po-radio-group-translator.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoRadioGroupTranslatorComponent {
  language: string = 'es';
  original: string = '';
  translated: string = '';

  readonly languageOptions: Array<PoRadioGroupOption> = [
    { label: 'Spanish', value: 'es' },
    { label: 'English', value: 'en' }
  ];

  readonly optionsList: Array<PoSelectOption> = [
    { value: '1', label: 'Ol\xE1' },
    { value: '2', label: 'Tchau' },
    { value: '3', label: 'Estrangeiro' },
    { value: '4', label: 'Alinhamento' },
    { value: '5', label: 'Vis\xE3o' },
    { value: '6', label: 'Livro' }
  ];

  readonly wordsOptions: Array<any> = [
    { id: '1', en: 'Hello', es: 'Hola' },
    { id: '2', en: 'Bye', es: 'Hasta luego' },
    { id: '3', en: 'Foreign', es: 'Extranjero' },
    { id: '4', en: 'Alignment', es: 'Alineaci\xF3n' },
    { id: '5', en: 'Vision', es: 'Vista' },
    { id: '6', en: 'Book', es: 'Libro' }
  ];

  changeLanguage(value) {
    const word = this.wordsOptions.find(item => item.id === this.original);

    if (word) {
      this.translated = word[value || this.language];
    }
  }
}
`),Kg()()()()()(),Qc(23,`div`,12),vu(24,`sample-po-radio-group-translator`),Kg(),vu(25,`hr`)),r&2&&(wg(5),gk(`po-icon `+n.sampleCodeButtonIcon),wg(),tm(` `,n.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,Oe,n.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,Se],encapsulation:2,changeDetection:1})}return i})();var fe=(()=>{class i{formBuilder=p(OZ);translatorForm;languageOptions=[{label:`Spanish`,value:`es`},{label:`English`,value:`en`}];optionsList=[{value:`1`,label:`Olá`},{value:`2`,label:`Tchau`},{value:`3`,label:`Estrangeiro`},{value:`4`,label:`Alinhamento`},{value:`5`,label:`Visão`},{value:`6`,label:`Livro`}];wordsOptions=[{id:`1`,en:`Hello`,es:`Hola`},{id:`2`,en:`Bye`,es:`Hasta luego`},{id:`3`,en:`Foreign`,es:`Extranjero`},{id:`4`,en:`Alignment`,es:`Alineación`},{id:`5`,en:`Vision`,es:`Vista`},{id:`6`,en:`Book`,es:`Libro`}];ngOnInit(){this.translatorForm=this.formBuilder.group({language:[`es`,Xm.required],original:[void 0,Xm.required],translated:[void 0,Xm.required]})}changeLanguage(){let d=this.translatorForm.value.language,r=this.translatorForm.value.original,n=this.wordsOptions.find(s=>s.id===r);n&&this.translatorForm.patchValue({translated:n[d]})}static ɵfac=function(r){return new(r||i)};static ɵcmp=Jn({type:i,selectors:[[`sample-po-radio-group-translator-reactive-form`]],standalone:!1,decls:5,vars:3,consts:[[3,`formGroup`],[1,`po-row`],[`name`,`language`,`formControlName`,`language`,`p-label`,`Select a Language`,`p-required`,``,1,`po-lg-4`,3,`p-change`,`p-options`],[`name`,`original`,`formControlName`,`original`,`p-label`,`Original Text (Portuguese)`,`p-required`,``,1,`po-lg-4`,3,`p-change`,`p-options`],[`name`,`translated`,`formControlName`,`translated`,`p-label`,`Translated Text`,`p-readonly`,``,`p-required`,``,1,`po-lg-4`]],template:function(r,n){r&1&&(Qc(0,`form`,0)(1,`div`,1)(2,`po-radio-group`,2),z0(),vt(`p-change`,function(){return n.changeLanguage()}),Kg(),Qc(3,`po-select`,3),z0(),vt(`p-change`,function(){return n.changeLanguage()}),Kg(),Qc(4,`po-input`,4),z0(),Kg()()()),r&2&&(Rb(`formGroup`,n.translatorForm),wg(2),Rb(`p-options`,n.languageOptions),W0(),wg(),Rb(`p-options`,n.optionsList),W0(),wg(),W0())},dependencies:[AZ,MZ,TZ,ZL,i1,j4,Zte,Koe],encapsulation:2,changeDetection:1})}return i})();var Ae=i=>({"docs-sample-code-tabs":i});var ve=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||i)};static ɵcmp=Jn({type:i,selectors:[[`sample-po-radio-group-translator-reactive-form-view`]],standalone:!1,decls:26,vars:6,consts:[[`id`,`sample-po-radio-group-translator-reactive-form`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`data-file`,`sample-po-radio-group-translator-reactive-form/sample-po-radio-group-translator-reactive-form.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-radio-group-translator-reactive-form/sample-po-radio-group-translator-reactive-form.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,n){r&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Radio Group - Translator Reactive Form`),Kg(),Qc(4,`a`,2),vt(`click`,function(){return n.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-radio-group-translator-reactive-form/sample-po-radio-group-translator-reactive-form.component.html`),Kg(),Qc(13,`div`,7)(14,`pre`,8),Sk(15,`<form [formGroup]="translatorForm">
  <div class="po-row">
    <po-radio-group
      class="po-lg-4"
      name="language"
      formControlName="language"
      p-label="Select a Language"
      p-required
      [p-options]="languageOptions"
      (p-change)="changeLanguage()"
    >
    </po-radio-group>

    <po-select
      class="po-lg-4"
      name="original"
      formControlName="original"
      p-label="Original Text (Portuguese)"
      p-required
      [p-options]="optionsList"
      (p-change)="changeLanguage()"
    >
    </po-select>

    <po-input
      class="po-lg-4"
      name="translated"
      formControlName="translated"
      p-label="Translated Text"
      p-readonly
      p-required
    >
    </po-input>
  </div>
</form>
`),Kg()()()(),Qc(16,`po-tab`,9)(17,`div`)(18,`label`,6),Sk(19,`sample-po-radio-group-translator-reactive-form/sample-po-radio-group-translator-reactive-form.component.ts`),Kg(),Qc(20,`div`,10)(21,`pre`,11),Sk(22,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

import { PoRadioGroupOption, PoSelectOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-radio-group-translator-reactive-form',
  templateUrl: './sample-po-radio-group-translator-reactive-form.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoRadioGroupTranslatorReactiveFormComponent implements OnInit {
  private formBuilder = inject(UntypedFormBuilder);

  translatorForm: UntypedFormGroup;

  readonly languageOptions: Array<PoRadioGroupOption> = [
    { label: 'Spanish', value: 'es' },
    { label: 'English', value: 'en' }
  ];

  readonly optionsList: Array<PoSelectOption> = [
    { value: '1', label: 'Ol\xE1' },
    { value: '2', label: 'Tchau' },
    { value: '3', label: 'Estrangeiro' },
    { value: '4', label: 'Alinhamento' },
    { value: '5', label: 'Vis\xE3o' },
    { value: '6', label: 'Livro' }
  ];

  readonly wordsOptions: Array<any> = [
    { id: '1', en: 'Hello', es: 'Hola' },
    { id: '2', en: 'Bye', es: 'Hasta luego' },
    { id: '3', en: 'Foreign', es: 'Extranjero' },
    { id: '4', en: 'Alignment', es: 'Alineaci\xF3n' },
    { id: '5', en: 'Vision', es: 'Vista' },
    { id: '6', en: 'Book', es: 'Libro' }
  ];

  ngOnInit() {
    this.translatorForm = this.formBuilder.group({
      language: ['es', Validators.required],
      original: [undefined, Validators.required],
      translated: [undefined, Validators.required]
    });
  }

  changeLanguage() {
    const language = this.translatorForm.value.language;
    const original = this.translatorForm.value.original;

    const word = this.wordsOptions.find(item => item.id === original);

    if (word) {
      this.translatorForm.patchValue({
        translated: word[language]
      });
    }
  }
}
`),Kg()()()()()(),Qc(23,`div`,12),vu(24,`sample-po-radio-group-translator-reactive-form`),Kg(),vu(25,`hr`)),r&2&&(wg(5),gk(`po-icon `+n.sampleCodeButtonIcon),wg(),tm(` `,n.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,Ae,n.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,fe],encapsulation:2,changeDetection:1})}return i})();var Ce=(()=>{class i{router=p(An);openDoc(d){this.router.navigate([`/documentation`,d],{queryParams:{view:`doc`}})}static ɵfac=function(r){return new(r||i)};static ɵcmp=Jn({type:i,selectors:[[`sample-po-radio-group-doc`]],standalone:!1,decls:971,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[`id`,`class-po-radio-group-component`,1,`docs-api-class-name`],[1,`doc-code`],[`href`,`/documentation/po-combo`],[`href`,`/documentation/po-select`],[`href`,`/documentation/po-checkbox-group`],[`href`,`https://www.w3.org/WAI/WCAG21/Understanding/name-role-value`],[`href`,`https://www.w3.org/WAI/WCAG21/Understanding/use-of-color`],[`href`,`https://www.w3.org/TR/wai-aria-practices-1.1/#keyboard-interaction-3`],[`href`,`https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance-enhanced`],[`href`,`https://doc.animaliads.io/docs/components/radio`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[`id`,`event-p-additional-help`,1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[1,`docs-api-deprecated-marker`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`id`,`prop-p-additional-help-tooltip`,1,`docs-api-properties-row`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[`pan`,``,1,`docs-api-property-type`,`string`],[`id`,`prop-p-append-in-body`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`id`,`prop-p-auto-focus`,1,`docs-api-properties-row`],[`id`,`event-p-change`,1,`docs-api-properties-row`],[`id`,`event-p-change-model`,1,`docs-api-properties-row`],[`id`,`prop-p-columns`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`number`],[`id`,`prop-p-compact-label`,1,`docs-api-properties-row`],[`id`,`prop-p-disabled`,1,`docs-api-properties-row`],[`id`,`prop-p-error-limit`,1,`docs-api-properties-row`],[`id`,`prop-p-field-error-message`,1,`docs-api-properties-row`],[`id`,`prop-p-help`,1,`docs-api-properties-row`],[`id`,`event-p-keydown`,1,`docs-api-properties-row`],[`id`,`prop-p-label`,1,`docs-api-properties-row`],[`id`,`prop-p-label-text-wrap`,1,`docs-api-properties-row`],[`id`,`prop-name`,1,`docs-api-properties-row`],[`id`,`prop-p-optional`,1,`docs-api-properties-row`],[`id`,`prop-p-options`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoRadioGroupOption[]`],[`id`,`prop-p-helper`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoHelperOptions`],[`href`,`https://po-ui.io/documentation/po-helper`],[`id`,`prop-p-required`,1,`docs-api-properties-row`],[`id`,`prop-p-show-required`,1,`docs-api-properties-row`],[`id`,`prop-p-size`,1,`docs-api-properties-row`],[`href`,`https://po-ui.io/documentation/po-theme`],[`id`,`method-focus`,1,`docs-api-method-table`],[1,`docs-api-properties-row`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[`id`,`method-showAdditionalHelp`,1,`docs-api-method-table`],[`id`,`interface-po-radio-group-option`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-radio-group-option-disabled`,1,`docs-api-properties-row`],[`id`,`interface-po-radio-group-option-label`,1,`docs-api-properties-row`],[`id`,`interface-po-radio-group-option-value`,1,`docs-api-properties-row`]],template:function(r,n){r&1&&(Qc(0,`div`,0)(1,`p`,1)(2,`code`),Sk(3,`import { PoFieldModule } from '@po-ui/ng-components';`),Kg()(),Qc(4,`div`,2)(5,`p`),Sk(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-timepicker, po-upload, po-url e po-search-ai.`),Kg(),Qc(7,`blockquote`)(8,`p`),Sk(9,`Não esqueça de importar o módulo `),Qc(10,`code`),Sk(11,`FormsModule`),Kg(),Sk(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),Qc(13,`code`),Sk(14,`ReactiveFormsModule`),Kg(),Sk(15,`, ambos nativos do Angular.`),Kg()()(),Qc(16,`h3`,3),Sk(17,`Componente`),Kg(),Qc(18,`h4`,4)(19,`code`,5),Sk(20,`PoRadioGroupComponent`),Kg()(),Qc(21,`div`,2)(22,`p`),Sk(23,`O componente `),Qc(24,`code`),Sk(25,`po-radio-group`),Kg(),Sk(26,` deve ser utilizado para disponibilizar m\xFAltiplas op\xE7\xF5es ao usu\xE1rio, permitindo a ele que
selecione apenas uma delas. Seu uso \xE9 recomendado para um n\xFAmero pequeno de op\xE7\xF5es, caso contr\xE1rio, recomenda-se o uso
do `),Qc(27,`a`,6)(28,`strong`),Sk(29,`po-combo`),Kg()(),Sk(30,` ou `),Qc(31,`a`,7)(32,`strong`),Sk(33,`po-select`),Kg()(),Sk(34,`.`),Kg(),Qc(35,`p`),Sk(36,`Este n\xE3o \xE9 um componente de multisele\xE7\xE3o, se for este o caso, deve-se utilizar o
`),Qc(37,`a`,8)(38,`strong`),Sk(39,`po-checkbox-group`),Kg()(),Sk(40,`.`),Kg(),Qc(41,`blockquote`)(42,`p`),Sk(43,`Ao passar um valor para o `),Qc(44,`em`),Sk(45,`model`),Kg(),Sk(46,` que não esteja na lista de opções, o mesmo será definido como `),Qc(47,`code`),Sk(48,`undefined`),Kg(),Sk(49,`.`),Kg()(),Qc(50,`h4`),Sk(51,`Acessibilidade tratada no componente interno `),Qc(52,`code`),Sk(53,`po-radio`),Kg(),Sk(54,`:`),Kg(),Qc(55,`p`),Sk(56,`Algumas diretrizes de acessibilidade já são tratadas no componente, internamente, e não podem ser alteradas pelo proprietário do conteúdo. São elas:`),Kg(),Qc(57,`ul`)(58,`li`),Sk(59,`O componente foi desenvolvido utilizando controles padrões HTML para permitir a identificação do mesmo na interface por tecnologias assistivas. `),Qc(60,`a`,9),Sk(61,`WCAG 4.1.2: Name, Role, Value`),Kg()(),Qc(62,`li`),Sk(63,`A cor não deve ser o único meio para diferenciar o radio button normal do selecionado, por isso deve-se manter uma diferença visual entre os estados. `),Qc(64,`a`,10),Sk(65,`WGAG 1.4.1: Use of Color, 3.2.4: Consistent Identification`),Kg()(),Qc(66,`li`),Sk(67,`Quando em foco, o componente é ativado usando as teclas de Espaço e Enter do teclado. `),Qc(68,`a`,11),Sk(69,`W3C WAI-ARIA 3.5 Button - Keyboard Interaction`),Kg()(),Qc(70,`li`),Sk(71,`A área do foco precisar ter uma espessura de pelo menos 2 pixels CSS e o foco não pode ficar escondido por outros elementos da tela. `),Qc(72,`a`,12),Sk(73,`(WCAG 2.4.12: Focus Appearance`),Kg()()(),Qc(74,`p`),Sk(75,`Conforme documentação em: `),Qc(76,`a`,13),Sk(77,`https://doc.animaliads.io/docs/components/radio`),Kg()(),Qc(78,`h4`),Sk(79,`Tokens customizáveis`),Kg(),Qc(80,`p`),Sk(81,`É possível alterar o estilo do componente usando os seguintes tokens (CSS): `),vu(82,`br`),Sk(83,`
Obs: No componente Radio Group, a customiza\xE7\xE3o ocorre principalmente nos elementos `),Qc(84,`code`),Sk(85,`po-radio`),Kg(),Sk(86,` que compõem o grupo de opções. `),vu(87,`br`),Sk(88,`
Portanto, ao aplicar estilos customizados, \xE9 importante focar na customiza\xE7\xE3o dos elementos `),Qc(89,`code`),Sk(90,`po-radio`),Kg(),Sk(91,` em vez do próprio `),Qc(92,`code`),Sk(93,`po-radio-group`),Kg(),Sk(94,`.`),Kg(),Qc(95,`blockquote`)(96,`p`),Sk(97,`Para maiores informações, acesse o guia `),Qc(98,`a`,14),Sk(99,`Personalizando o Tema Padrão com Tokens CSS`),Kg(),Sk(100,`.`),Kg()(),Qc(101,`table`)(102,`thead`)(103,`tr`)(104,`th`),Sk(105,`Propriedade`),Kg(),Qc(106,`th`),Sk(107,`Descrição`),Kg(),Qc(108,`th`),Sk(109,`Valor Padrão`),Kg()()(),Qc(110,`tbody`)(111,`tr`)(112,`td`)(113,`strong`),Sk(114,`Default Values`),Kg()(),vu(115,`td`)(116,`td`),Kg(),Qc(117,`tr`)(118,`td`)(119,`code`),Sk(120,`--border-color`),Kg()(),Qc(121,`td`),Sk(122,`Cor da borda`),Kg(),Qc(123,`td`)(124,`code`),Sk(125,`var(--color-neutral-dark-70)`),Kg()()(),Qc(126,`tr`)(127,`td`)(128,`code`),Sk(129,`--field-container-title-justify`),Kg()(),Qc(130,`td`),Sk(131,`Alinhamento horizontal do título (`),Qc(132,`code`),Sk(133,`justify-content`),Kg(),Sk(134,`)`),Kg(),Qc(135,`td`)(136,`code`),Sk(137,`space-between`),Kg()()(),Qc(138,`tr`)(139,`td`)(140,`code`),Sk(141,`--field-container-title-flex`),Kg()(),Qc(142,`td`),Sk(143,`Flex do título (`),Qc(144,`code`),Sk(145,`flex`),Kg(),Sk(146,`)`),Kg(),Qc(147,`td`)(148,`code`),Sk(149,`1 auto`),Kg()()(),Qc(150,`tr`)(151,`td`)(152,`strong`),Sk(153,`Hover`),Kg()(),vu(154,`td`)(155,`td`),Kg(),Qc(156,`tr`)(157,`td`)(158,`code`),Sk(159,`--shadow-color-hover`),Kg()(),Qc(160,`td`),Sk(161,`Cor da sombra no estado hover`),Kg(),Qc(162,`td`)(163,`code`),Sk(164,`var(--color-brand-01-lighter)`),Kg()()(),Qc(165,`tr`)(166,`td`)(167,`code`),Sk(168,`--color-hover`),Kg()(),Qc(169,`td`),Sk(170,`Cor principal no estado hover`),Kg(),Qc(171,`td`)(172,`code`),Sk(173,`var(--color-brand-01-dark)`),Kg()()(),Qc(174,`tr`)(175,`td`)(176,`strong`),Sk(177,`Focused`),Kg()(),vu(178,`td`)(179,`td`),Kg(),Qc(180,`tr`)(181,`td`)(182,`code`),Sk(183,`--outline-color-focused`),Kg()(),Qc(184,`td`),Sk(185,`Cor do outline do estado de focus`),Kg(),Qc(186,`td`)(187,`code`),Sk(188,`var(--color-brand-01-darkest)`),Kg()()(),Qc(189,`tr`)(190,`td`)(191,`strong`),Sk(192,`checked`),Kg()(),vu(193,`td`)(194,`td`),Kg(),Qc(195,`tr`)(196,`td`)(197,`code`),Sk(198,`--color-unchecked`),Kg()(),Qc(199,`td`),Sk(200,`Cor quando não selecionado`),Kg(),Qc(201,`td`)(202,`code`),Sk(203,`var(--color-neutral-light-00)`),Kg()()(),Qc(204,`tr`)(205,`td`)(206,`code`),Sk(207,`--color-checked`),Kg()(),Qc(208,`td`),Sk(209,`Cor quando selecionado`),Kg(),Qc(210,`td`)(211,`code`),Sk(212,`var(--color-action-default)`),Kg()()(),Qc(213,`tr`)(214,`td`)(215,`strong`),Sk(216,`Disabled`),Kg()(),vu(217,`td`)(218,`td`),Kg(),Qc(219,`tr`)(220,`td`)(221,`code`),Sk(222,`--color-unchecked-disabled`),Kg()(),Qc(223,`td`),Sk(224,`Cor pricipal quando não selecionado no estado disabled`),Kg(),Qc(225,`td`)(226,`code`),Sk(227,`var(--color-neutral-light-30)`),Kg()()(),Qc(228,`tr`)(229,`td`)(230,`code`),Sk(231,`--color-checked-disabled`),Kg()(),Qc(232,`td`),Sk(233,`Cor pricipal quando selecionado no estado disabled`),Kg(),Qc(234,`td`)(235,`code`),Sk(236,`var(--color-neutral-dark-70)`),Kg()()()()()(),Qc(237,`div`,15)(238,`h4`,16),Sk(239,`Seletor`),Kg(),Qc(240,`pre`,17),Sk(241,`<po-radio-group
    (p-additional-help)="EventEmitter"
    p-additional-help-tooltip="string"
    p-append-in-body="boolean"
    p-auto-focus="boolean"
    (p-change)="EventEmitter"
    (p-change-model)="EventEmitter"
    p-columns="number"
    p-compact-label="boolean"
    p-disabled="boolean"
    p-error-limit="boolean"
    p-field-error-message="string"
    p-help="string"
    (p-keydown)="EventEmitter"
    p-label="string"
    p-label-text-wrap="boolean"
    name="string"
    p-optional="boolean"
    p-options="PoRadioGroupOption[]"
    p-helper="PoHelperOptions | string"
    p-required="boolean"
    p-show-required="boolean"
    p-size="string" >
</po-radio-group>
`),Kg()(),Qc(242,`h4`,18),Sk(243,`Propriedades`),Kg(),Qc(244,`table`,19)(245,`tr`,20)(246,`th`,21),Sk(247,`Nome`),Kg(),Qc(248,`th`,21),Sk(249,`Tipo`),Kg(),Qc(250,`th`,21),Sk(251,`Padrão`),Kg(),Qc(252,`th`,21),Sk(253,`Descrição`),Kg()(),Qc(254,`tr`,22)(255,`td`,23)(256,`div`,24)(257,`span`,25),Sk(258,` (p-additional-help)`),vu(259,`br`),Kg()(),Qc(260,`div`,26),Sk(261,`Deprecated`),Kg()(),Qc(262,`td`,27)(263,`code`,28),Sk(264,`EventEmitter`),Kg()(),Qc(265,`td`,29),Sk(266,`-`),Kg(),Qc(267,`td`,30)(268,`em`)(269,`strong`),Sk(270,`(opcional)`),Kg()(),Qc(271,`p`),Sk(272,`Evento disparado ao clicar no ícone de ajuda adicional.`),Kg(),Qc(273,`blockquote`)(274,`p`),Sk(275,`Essa propriedade está `),Qc(276,`strong`),Sk(277,`depreciada`),Kg(),Sk(278,` e será removida na versão `),Qc(279,`code`),Sk(280,`23.x.x`),Kg(),Sk(281,`. Recomendamos utilizar a propriedade `),Qc(282,`code`),Sk(283,`p-helper`),Kg(),Sk(284,` que oferece mais recursos e flexibilidade.`),Kg()()()(),Qc(285,`tr`,31)(286,`td`,23)(287,`div`,32)(288,`span`,33),Sk(289,` p-additional-help-tooltip`),vu(290,`br`),Kg()(),Qc(291,`div`,26),Sk(292,`Deprecated`),Kg()(),Qc(293,`td`,27)(294,`code`,34),Sk(295,`string`),Kg()(),Qc(296,`td`,29),Sk(297,`-`),Kg(),Qc(298,`td`,30)(299,`em`)(300,`strong`),Sk(301,`(opcional)`),Kg()(),Qc(302,`p`),Sk(303,`Exibe um ícone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente `),Qc(304,`code`),Sk(305,`po-helper`),Kg(),Sk(306,`.
`),Qc(307,`strong`),Sk(308,`Como boa prática, indica-se utilizar um texto com até 140 caracteres.`),Kg()(),Qc(309,`blockquote`)(310,`p`),Sk(311,`Requer um recuo mínimo de 8px se o componente estiver próximo à lateral da tela.`),Kg()(),Qc(312,`blockquote`)(313,`p`),Sk(314,`Essa propriedade está `),Qc(315,`strong`),Sk(316,`depreciada`),Kg(),Sk(317,` e será removida na versão `),Qc(318,`code`),Sk(319,`23.x.x`),Kg(),Sk(320,`. Recomendamos utilizar a propriedade `),Qc(321,`code`),Sk(322,`p-helper`),Kg(),Sk(323,` que oferece mais recursos e flexibilidade.`),Kg()()()(),Qc(324,`tr`,35)(325,`td`,23)(326,`div`,32)(327,`span`,33),Sk(328,` p-append-in-body`),vu(329,`br`),Kg()()(),Qc(330,`td`,27)(331,`code`,36),Sk(332,`boolean`),Kg()(),Qc(333,`td`,29)(334,`p`)(335,`code`),Sk(336,`false`),Kg()()(),Qc(337,`td`,30)(338,`em`)(339,`strong`),Sk(340,`(opcional)`),Kg()(),Qc(341,`p`),Sk(342,`Define que o popover (`),Qc(343,`code`),Sk(344,`p-helper`),Kg(),Sk(345,` e/ou `),Qc(346,`code`),Sk(347,`p-error-limit`),Kg(),Sk(348,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o
dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow
escondido, garantindo o posicionamento correto do tooltip pr\xF3ximo ao elemento.`),Kg(),Qc(349,`blockquote`)(350,`p`),Sk(351,`Quando utilizado com `),Qc(352,`code`),Sk(353,`p-helper`),Kg(),Sk(354,`, leitores de tela como o NVDA podem não ler o conteúdo do popover.`),Kg()()()(),Qc(355,`tr`,37)(356,`td`,23)(357,`div`,32)(358,`span`,33),Sk(359,` p-auto-focus`),vu(360,`br`),Kg()()(),Qc(361,`td`,27)(362,`code`,36),Sk(363,`boolean`),Kg()(),Qc(364,`td`,29)(365,`p`)(366,`code`),Sk(367,`false`),Kg()()(),Qc(368,`td`,30)(369,`em`)(370,`strong`),Sk(371,`(opcional)`),Kg()(),Qc(372,`p`),Sk(373,`Aplica foco no elemento ao ser iniciado.`),Kg(),Qc(374,`blockquote`)(375,`p`),Sk(376,`Caso mais de um elemento seja configurado com essa propriedade, apenas o último elemento declarado com ela terá o foco.`),Kg()()()(),Qc(377,`tr`,38)(378,`td`,23)(379,`div`,24)(380,`span`,25),Sk(381,` (p-change)`),vu(382,`br`),Kg()()(),Qc(383,`td`,27)(384,`code`,28),Sk(385,`EventEmitter`),Kg()(),Qc(386,`td`,29),Sk(387,`-`),Kg(),Qc(388,`td`,30)(389,`em`)(390,`strong`),Sk(391,`(opcional)`),Kg()(),Qc(392,`p`),Sk(393,`Evento ao alterar valor do campo.`),Kg()()(),Qc(394,`tr`,39)(395,`td`,23)(396,`div`,24)(397,`span`,25),Sk(398,` (p-change-model)`),vu(399,`br`),Kg()()(),Qc(400,`td`,27)(401,`code`,28),Sk(402,`EventEmitter`),Kg()(),Qc(403,`td`,29),Sk(404,`-`),Kg(),Qc(405,`td`,30)(406,`em`)(407,`strong`),Sk(408,`(opcional)`),Kg()(),Qc(409,`p`),Sk(410,`Evento disparado sempre que o valor do model \xE9 alterado, seja por intera\xE7\xE3o do usu\xE1rio
ou por atualiza\xE7\xE3o program\xE1tica (ex: `),Qc(411,`code`),Sk(412,`setValue`),Kg(),Sk(413,`, `),Qc(414,`code`),Sk(415,`patchValue`),Kg(),Sk(416,`, carregamento assíncrono).`),Kg(),Qc(417,`p`),Sk(418,`Diferentemente do `),Qc(419,`code`),Sk(420,`p-change`),Kg(),Sk(421,`, que \xE9 disparado apenas por intera\xE7\xE3o do usu\xE1rio,
o `),Qc(422,`code`),Sk(423,`p-change-model`),Kg(),Sk(424,` cobre todos os cenários de alteração de valor.`),Kg(),Qc(425,`p`),Sk(426,`Não emite quando o novo valor é idêntico ao anterior (deduplicação automática).`),Kg()()(),Qc(427,`tr`,40)(428,`td`,23)(429,`div`,32)(430,`span`,33),Sk(431,` p-columns`),vu(432,`br`),Kg()()(),Qc(433,`td`,27)(434,`code`,41),Sk(435,`number`),Kg()(),Qc(436,`td`,29)(437,`p`)(438,`code`),Sk(439,`2`),Kg()()(),Qc(440,`td`,30)(441,`em`)(442,`strong`),Sk(443,`(opcional)`),Kg()(),Qc(444,`p`),Sk(445,`Define a quantidade de colunas para exibição das opções.`),Kg(),Qc(446,`p`)(447,`strong`),Sk(448,`Considerações:`),Kg()(),Qc(449,`ul`)(450,`li`),Sk(451,`É possível exibir as opções entre `),Qc(452,`code`),Sk(453,`1`),Kg(),Sk(454,` e `),Qc(455,`code`),Sk(456,`4`),Kg(),Sk(457,` colunas.`),Kg(),Qc(458,`li`),Sk(459,`O número máximo de colunas é invariável nas seguintes resoluções:`),Qc(460,`ul`)(461,`li`)(462,`code`),Sk(463,`sm`),Kg(),Sk(464,`: `),Qc(465,`code`),Sk(466,`1`),Kg()(),Qc(467,`li`)(468,`code`),Sk(469,`md`),Kg(),Sk(470,`: `),Qc(471,`code`),Sk(472,`2`),Kg()()()()()()(),Qc(473,`tr`,42)(474,`td`,23)(475,`div`,32)(476,`span`,33),Sk(477,` p-compact-label`),vu(478,`br`),Kg()()(),Qc(479,`td`,27)(480,`code`,36),Sk(481,`boolean`),Kg()(),Qc(482,`td`,29)(483,`p`)(484,`code`),Sk(485,`false`),Kg()()(),Qc(486,`td`,30)(487,`em`)(488,`strong`),Sk(489,`(opcional)`),Kg()(),Qc(490,`p`),Sk(491,`Define se o título do campo será exibido de forma compacta.`),Kg(),Qc(492,`p`),Sk(493,`Quando habilitado (`),Qc(494,`code`),Sk(495,`true`),Kg(),Sk(496,`), o modo compacto afeta o conjunto composto por:`),Kg(),Qc(497,`ul`)(498,`li`)(499,`code`),Sk(500,`po-label`),Kg()(),Qc(501,`li`)(502,`code`),Sk(503,`p-requirement (showRequired)`),Kg()(),Qc(504,`li`)(505,`code`),Sk(506,`po-helper`),Kg()()(),Qc(507,`p`),Sk(508,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),Kg(),Qc(509,`p`),Sk(510,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),Kg(),Qc(511,`ul`)(512,`li`)(513,`code`),Sk(514,`--field-container-title-justify`),Kg()(),Qc(515,`li`)(516,`code`),Sk(517,`--field-container-title-flex`),Kg()()(),Qc(518,`p`),Sk(519,`Exemplo:`),Kg(),Qc(520,`pre`)(521,`code`),Sk(522,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),Kg()(),Qc(523,`p`),Sk(524,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),Kg()()(),Qc(525,`tr`,43)(526,`td`,23)(527,`div`,32)(528,`span`,33),Sk(529,` p-disabled`),vu(530,`br`),Kg()()(),Qc(531,`td`,27)(532,`code`,36),Sk(533,`boolean`),Kg()(),Qc(534,`td`,29)(535,`p`)(536,`code`),Sk(537,`false`),Kg()()(),Qc(538,`td`,30)(539,`em`)(540,`strong`),Sk(541,`(opcional)`),Kg()(),Qc(542,`p`),Sk(543,`Indica que o campo será desabilitado.`),Kg()()(),Qc(544,`tr`,44)(545,`td`,23)(546,`div`,32)(547,`span`,33),Sk(548,` p-error-limit`),vu(549,`br`),Kg()()(),Qc(550,`td`,27)(551,`code`,36),Sk(552,`boolean`),Kg()(),Qc(553,`td`,29)(554,`p`)(555,`code`),Sk(556,`false`),Kg()()(),Qc(557,`td`,30)(558,`em`)(559,`strong`),Sk(560,`(opcional)`),Kg()(),Qc(561,`p`),Sk(562,`Limita a exibição da mensagem de erro a duas linhas e exibe um tooltip com o texto completo.`),Kg(),Qc(563,`blockquote`)(564,`p`),Sk(565,`Caso essa propriedade seja definida como `),Qc(566,`code`),Sk(567,`true`),Kg(),Sk(568,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),Kg()()()(),Qc(569,`tr`,45)(570,`td`,23)(571,`div`,32)(572,`span`,33),Sk(573,` p-field-error-message`),vu(574,`br`),Kg()()(),Qc(575,`td`,27)(576,`code`,34),Sk(577,`string`),Kg()(),Qc(578,`td`,29),Sk(579,`-`),Kg(),Qc(580,`td`,30)(581,`em`)(582,`strong`),Sk(583,`(opcional)`),Kg()(),Qc(584,`p`),Sk(585,`Exibe a mensagem setada se o campo estiver vazio e for requerido.`),Kg(),Qc(586,`blockquote`)(587,`p`),Sk(588,`Necessário que a propriedade `),Qc(589,`code`),Sk(590,`p-required`),Kg(),Sk(591,` esteja habilitada.`),Kg()()()(),Qc(592,`tr`,46)(593,`td`,23)(594,`div`,32)(595,`span`,33),Sk(596,` p-help`),vu(597,`br`),Kg()()(),Qc(598,`td`,27)(599,`code`,34),Sk(600,`string`),Kg()(),Qc(601,`td`,29),Sk(602,`-`),Kg(),Qc(603,`td`,30)(604,`em`)(605,`strong`),Sk(606,`(opcional)`),Kg()(),Qc(607,`p`),Sk(608,`Texto de apoio do campo.`),Kg()()(),Qc(609,`tr`,47)(610,`td`,23)(611,`div`,24)(612,`span`,25),Sk(613,` (p-keydown)`),vu(614,`br`),Kg()()(),Qc(615,`td`,27)(616,`code`,28),Sk(617,`EventEmitter`),Kg()(),Qc(618,`td`,29),Sk(619,`-`),Kg(),Qc(620,`td`,30)(621,`em`)(622,`strong`),Sk(623,`(opcional)`),Kg()(),Qc(624,`p`),Sk(625,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),Qc(626,`code`),Sk(627,`KeyboardEvent`),Kg(),Sk(628,` com informações sobre a tecla.`),Kg()()(),Qc(629,`tr`,48)(630,`td`,23)(631,`div`,32)(632,`span`,33),Sk(633,` p-label`),vu(634,`br`),Kg()()(),Qc(635,`td`,27)(636,`code`,34),Sk(637,`string`),Kg()(),Qc(638,`td`,29),Sk(639,`-`),Kg(),Qc(640,`td`,30)(641,`em`)(642,`strong`),Sk(643,`(opcional)`),Kg()(),Qc(644,`p`),Sk(645,`Label do campo.`),Kg()()(),Qc(646,`tr`,49)(647,`td`,23)(648,`div`,32)(649,`span`,33),Sk(650,` p-label-text-wrap`),vu(651,`br`),Kg()()(),Qc(652,`td`,27)(653,`code`,36),Sk(654,`boolean`),Kg()(),Qc(655,`td`,29)(656,`p`)(657,`code`),Sk(658,`false`),Kg()()(),Qc(659,`td`,30)(660,`em`)(661,`strong`),Sk(662,`(opcional)`),Kg()(),Qc(663,`p`),Sk(664,`Habilita a quebra automática do texto da propriedade `),Qc(665,`code`),Sk(666,`p-label`),Kg(),Sk(667,`. Quando `),Qc(668,`code`),Sk(669,`p-label-text-wrap`),Kg(),Sk(670,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),Kg()()(),Qc(671,`tr`,50)(672,`td`,23)(673,`div`,32)(674,`span`,33),Sk(675,` name`),vu(676,`br`),Kg()()(),Qc(677,`td`,27)(678,`code`,34),Sk(679,`string`),Kg()(),Qc(680,`td`,29),Sk(681,`-`),Kg(),Qc(682,`td`,30)(683,`p`),Sk(684,`Nome das opções.`),Kg()()(),Qc(685,`tr`,51)(686,`td`,23)(687,`div`,32)(688,`span`,33),Sk(689,` p-optional`),vu(690,`br`),Kg()()(),Qc(691,`td`,27)(692,`code`,36),Sk(693,`boolean`),Kg()(),Qc(694,`td`,29)(695,`p`)(696,`code`),Sk(697,`false`),Kg()()(),Qc(698,`td`,30)(699,`em`)(700,`strong`),Sk(701,`(opcional)`),Kg()(),Qc(702,`p`),Sk(703,`Define se a indicação de campo opcional será exibida.`),Kg(),Qc(704,`blockquote`)(705,`p`),Sk(706,`Não será exibida a indicação se:`),Kg()(),Qc(707,`ul`)(708,`li`),Sk(709,`O campo conter `),Qc(710,`code`),Sk(711,`p-required`),Kg(),Sk(712,`;`),Kg(),Qc(713,`li`),Sk(714,`Não possuir `),Qc(715,`code`),Sk(716,`p-help`),Kg(),Sk(717,` e/ou `),Qc(718,`code`),Sk(719,`p-label`),Kg(),Sk(720,`.`),Kg()()()(),Qc(721,`tr`,52)(722,`td`,23)(723,`div`,32)(724,`span`,33),Sk(725,` p-options`),vu(726,`br`),Kg()()(),Qc(727,`td`,27)(728,`code`,53),Sk(729,`PoRadioGroupOption[]`),Kg()(),Qc(730,`td`,29),Sk(731,`-`),Kg(),Qc(732,`td`,30)(733,`p`),Sk(734,`Lista de op\xE7\xF5es que ser\xE3o exibidas.
Nesta propriedade deve ser definido um array de objetos que implementam a interface PoRadioGroupOption.`),Kg()()(),Qc(735,`tr`,54)(736,`td`,23)(737,`div`,32)(738,`span`,33),Sk(739,` p-helper`),vu(740,`br`),Kg()()(),Qc(741,`td`,27)(742,`code`,55),Sk(743,`PoHelperOptions `),Kg(),Qc(744,`code`,34),Sk(745,` string`),Kg()(),Qc(746,`td`,29),Sk(747,`-`),Kg(),Qc(748,`td`,30)(749,`em`)(750,`strong`),Sk(751,`(opcional)`),Kg()(),Qc(752,`p`),Sk(753,`Define as opções do componente de ajuda (po-helper) que será exibido ao lado do label quando a propriedade `),Qc(754,`code`),Sk(755,`p-label`),Kg(),Sk(756,` for definida, ou, ao lado do componente na ausência da propriedade `),Qc(757,`code`),Sk(758,`p-label`),Kg(),Sk(759,`.`),Kg(),Qc(760,`blockquote`)(761,`p`),Sk(762,`Para mais informações acesse: `),Qc(763,`a`,56),Sk(764,`https://po-ui.io/documentation/po-helper`),Kg(),Sk(765,`.`),Kg()(),Qc(766,`blockquote`)(767,`p`),Sk(768,`Ao configurar esta propriedade, o antigo ícone de ajuda adicional (`),Qc(769,`code`),Sk(770,`p-additional-help-tooltip`),Kg(),Sk(771,` e `),Qc(772,`code`),Sk(773,`p-additional-help`),Kg(),Sk(774,`) será ignorado.`),Kg()()()(),Qc(775,`tr`,57)(776,`td`,23)(777,`div`,32)(778,`span`,33),Sk(779,` p-required`),vu(780,`br`),Kg()()(),Qc(781,`td`,27)(782,`code`,36),Sk(783,`boolean`),Kg()(),Qc(784,`td`,29)(785,`p`)(786,`code`),Sk(787,`false`),Kg()()(),Qc(788,`td`,30)(789,`em`)(790,`strong`),Sk(791,`(opcional)`),Kg()(),Qc(792,`p`),Sk(793,`Define que o campo será obrigatório.`),Kg()()(),Qc(794,`tr`,58)(795,`td`,23)(796,`div`,32)(797,`span`,33),Sk(798,` p-show-required`),vu(799,`br`),Kg()()(),Qc(800,`td`,27)(801,`code`,36),Sk(802,`boolean`),Kg()(),Qc(803,`td`,29),Sk(804,`-`),Kg(),Qc(805,`td`,30)(806,`p`),Sk(807,`Define se a indicação de campo obrigatório será exibida.`),Kg(),Qc(808,`blockquote`)(809,`p`),Sk(810,`Não será exibida a indicação se:`),Kg()(),Qc(811,`ul`)(812,`li`),Sk(813,`Não possuir `),Qc(814,`code`),Sk(815,`p-help`),Kg(),Sk(816,` e/ou `),Qc(817,`code`),Sk(818,`p-label`),Kg(),Sk(819,`.`),Kg()()()(),Qc(820,`tr`,59)(821,`td`,23)(822,`div`,32)(823,`span`,33),Sk(824,` p-size`),vu(825,`br`),Kg()()(),Qc(826,`td`,27)(827,`code`,34),Sk(828,`string`),Kg()(),Qc(829,`td`,29)(830,`p`)(831,`code`),Sk(832,`medium`),Kg()()(),Qc(833,`td`,30)(834,`em`)(835,`strong`),Sk(836,`(opcional)`),Kg()(),Qc(837,`p`),Sk(838,`Define o tamanho dos radios do componente:`),Kg(),Qc(839,`ul`)(840,`li`)(841,`code`),Sk(842,`small`),Kg(),Sk(843,`: 16x16 (disponível apenas para acessibilidade AA).`),Kg(),Qc(844,`li`)(845,`code`),Sk(846,`medium`),Kg(),Sk(847,`: 24x24.`),Kg()(),Qc(848,`blockquote`)(849,`p`),Sk(850,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Qc(851,`code`),Sk(852,`medium`),Kg(),Sk(853,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Qc(854,`a`,60),Sk(855,`po-theme`),Kg(),Sk(856,`.`),Kg()()()()(),Qc(857,`h3`,18),Sk(858,`Métodos`),Kg(),Qc(859,`table`,61)(860,`tr`,62)(861,`th`,63)(862,`div`,32)(863,`h4`)(864,`span`,33),Sk(865,` focus `),Kg()()()()(),Qc(866,`tr`,30)(867,`td`,30)(868,`p`),Sk(869,`Função que atribui foco ao componente.`),Kg(),Qc(870,`p`),Sk(871,`Para utilizá-la é necessário ter a instância do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:`),Kg(),Qc(872,`pre`)(873,`code`),Sk(874,`import { PoRadioGroupComponent } from '@po-ui/ng-components';

...

@ViewChild(PoRadioGroupComponent, { static: true }) radio: PoRadioGroupComponent;

focusRadio() {
  this.radio.focus();
}
`),Kg()()()()(),vu(875,`br`),Qc(876,`table`,64)(877,`tr`,62)(878,`th`,63)(879,`div`,32)(880,`h4`)(881,`span`,33),Sk(882,` showAdditionalHelp `),Kg()()()()(),Qc(883,`tr`,30)(884,`td`,30)(885,`p`),Sk(886,`Método que exibe `),Qc(887,`code`),Sk(888,`p-helper`),Kg(),Sk(889,` ou executa a ação definida em `),Qc(890,`code`),Sk(891,`p-helper{eventOnClick}`),Kg(),Sk(892,` ou em `),Qc(893,`code`),Sk(894,`p-additionalHelp`),Kg(),Sk(895,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),Qc(896,`code`),Sk(897,`p-keydown`),Kg(),Sk(898,`.`),Kg(),Qc(899,`blockquote`)(900,`p`),Sk(901,`Exibe ou oculta o conteúdo do componente `),Qc(902,`code`),Sk(903,`po-helper`),Kg(),Sk(904,` quando o componente estiver com foco.`),Kg()(),Qc(905,`pre`)(906,`code`),Sk(907,`// Exemplo com p-label e p-helper
<po-radio-group
 #radioGroup
 ...
 p-label="Label do radioGroup"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, radioGroup)"
></po-radio-group>
`),Kg()(),Qc(908,`pre`)(909,`code`),Sk(910,`...
onKeyDown(event: KeyboardEvent, inp: PoRadioGroupComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),Kg()()()()(),vu(911,`br`),Qc(912,`h3`),Sk(913,`Interfaces`),Kg(),Qc(914,`h4`,65)(915,`code`,5),Sk(916,`PoRadioGroupOption`),Kg()(),Qc(917,`div`,2)(918,`p`),Sk(919,`Interface para as ações do componente po-radio-group.`),Kg()(),Qc(920,`h4`,18),Sk(921,`Propriedades`),Kg(),Qc(922,`table`,19)(923,`tr`,20)(924,`th`,21),Sk(925,`Nome`),Kg(),Qc(926,`th`,21),Sk(927,`Tipo`),Kg(),Qc(928,`th`,21),Sk(929,`Descrição`),Kg()(),Qc(930,`tr`,66)(931,`td`,23)(932,`div`,32)(933,`span`,33),Sk(934,` disabled`),vu(935,`br`),Kg()()(),Qc(936,`td`,27)(937,`code`,36),Sk(938,`boolean`),Kg()(),Qc(939,`td`,30)(940,`em`)(941,`strong`),Sk(942,`(opcional)`),Kg()(),Qc(943,`p`),Sk(944,`Desabilita o radio.`),Kg()()(),Qc(945,`tr`,67)(946,`td`,23)(947,`div`,32)(948,`span`,33),Sk(949,` label`),vu(950,`br`),Kg()()(),Qc(951,`td`,27)(952,`code`,34),Sk(953,`string`),Kg()(),Qc(954,`td`,30)(955,`p`),Sk(956,`Texto do radio.`),Kg()()(),Qc(957,`tr`,68)(958,`td`,23)(959,`div`,32)(960,`span`,33),Sk(961,` value`),vu(962,`br`),Kg()()(),Qc(963,`td`,27)(964,`code`,34),Sk(965,`string `),Kg(),Qc(966,`code`,41),Sk(967,` number`),Kg()(),Qc(968,`td`,30)(969,`p`),Sk(970,`Valor do radio.`),Kg()()()()())},dependencies:[P],encapsulation:2,changeDetection:1})}return i})();function ze(i,Z){if(i&1){let d=YO();Qc(0,`po-tab`,4),vt(`p-click`,function(){B_(d);let n=ek();return U_(n.changeTab(`web`))}),vu(1,`sample-po-radio-group-basic-view`)(2,`sample-po-radio-group-labs-view`)(3,`sample-po-radio-group-translator-view`)(4,`sample-po-radio-group-translator-reactive-form-view`),Kg()}if(i&2){let d=ek();Rb(`p-active`,d.activeTab===`web`)}}var Ne=[{path:``,component:(()=>{class i{route;router;sub;hidePoWebSample=!0;samplesLength=4;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(d,r){this.route=d,this.router=r}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(d=>{let r=d.view;this.hidePoWebSample=this.samplesLength===0,this.activeTab=this.hidePoWebSample?`doc`:r||`web`})}changeTab(d){this.router.navigate([],{queryParams:{view:d},queryParamsHandling:`merge`}),this.activeTab=d}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(r){return new(r||i)(I(ar),I(An))};static ɵcmp=Jn({type:i,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:3,consts:[[`p-title`,`Radio Group`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Exemplos`,3,`p-active`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-active`]],template:function(r,n){r&1&&(Qc(0,`po-page-default`,0)(1,`po-tabs`,1),FO(2,ze,5,1,`po-tab`,2),Qc(3,`po-tab`,3),vt(`p-click`,function(){return n.changeTab(`doc`)}),vu(4,`sample-po-radio-group-doc`),Kg()()()),r&2&&(Rb(`p-actions`,n.actions),wg(2),VO(n.hidePoWebSample?-1:2),wg(),Rb(`p-active`,n.activeTab===`doc`))},dependencies:[Mze,tre,are,ge,he,xe,ve,Ce],encapsulation:2,changeDetection:1})}return i})()}];var ye=(()=>{class i{static ɵfac=function(r){return new(r||i)};static ɵmod=ge$1({type:i});static ɵinj=de({imports:[GV.forChild(Ne),GV]})}return i})();var yt=(()=>{class i{static ɵfac=function(r){return new(r||i)};static ɵmod=ge$1({type:i});static ɵinj=de({imports:[M,ye]})}return i})();export{yt as DocPoRadioGroupModule};