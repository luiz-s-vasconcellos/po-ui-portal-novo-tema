import{m as P,p as M}from"./main-5NWS7DIP.js";import{$i as ar,Ar as G0,At as Zte,Ci as Rk,F as Joe,Fn as tre,Ga as q0,Gr as Kb,Hr as Jn,Ir as H_,Ki as ZL,Kr as Kg,L as Koe,Li as WL,Ni as Vk,Oi as U_,Pt as are,Qr as Mk,Ra as ok,Sa as jO,Si as RZ,U as Mze,Va as p,Vr as Jc,W as Nf,Wr as KO,Xi as _t,Yr as LO,Zi as _u,aa as de$1,ar as Ab,bn as oi,co as wg,eo as tk,fo as xZ,j as I4,jr as GV,li as PZ,mi as QL,or as An,pa as ge$1,pr as Bk,qi as Zb,rr as AZ,sn as j4,tt as R4,va as i1,yi as Qm,zr as I}from"./chunk-DdK63a0t.js";var fe=()=>({label:`Option 1`,value:`1`});var ve=()=>({label:`Option 2`,value:`2`});var Ce=(i,U)=>[i,U];var pe=(()=>{class i{static ɵfac=function(l){return new(l||i)};static ɵcmp=Jn({type:i,selectors:[[`sample-po-radio-group-basic`]],standalone:!1,decls:1,vars:6,consts:[[`name`,`radioGroupBasic`,`p-label`,`PO Radio Group`,3,`p-options`]],template:function(l,n){l&1&&_u(0,`po-radio-group`,0),l&2&&Ab(`p-options`,Bk(3,Ce,Vk(1,fe),Vk(2,ve)))},dependencies:[Zte],encapsulation:2,changeDetection:1})}return i})();var de=(()=>{class i{static ɵfac=function(l){return new(l||i)};static ɵcmp=Jn({type:i,selectors:[[`sample-po-radio-group-basic-view`]],standalone:!1,decls:24,vars:0,consts:[[`id`,`sample-po-radio-group-basic`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`data-tour`,`sample-tabs`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-radio-group-basic/sample-po-radio-group-basic.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-radio-group-basic/sample-po-radio-group-basic.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`]],template:function(l,n){l&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Mk(3,`PO Radio Group Basic`),Kg()(),Jc(4,`div`,2)(5,`po-tabs`,3)(6,`po-tab`,4)(7,`div`,5),_u(8,`sample-po-radio-group-basic`),Kg()(),Jc(9,`po-tab`,6)(10,`div`)(11,`label`,7),Mk(12,`sample-po-radio-group-basic/sample-po-radio-group-basic.component.html`),Kg(),Jc(13,`div`,8)(14,`pre`,9),Mk(15,`<po-radio-group
  name="radioGroupBasic"
  p-label="PO Radio Group"
  [p-options]="[
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' }
  ]"
>
</po-radio-group>
`),Kg()()()(),Jc(16,`po-tab`,10)(17,`div`)(18,`label`,7),Mk(19,`sample-po-radio-group-basic/sample-po-radio-group-basic.component.ts`),Kg(),Jc(20,`div`,11)(21,`pre`,12),Mk(22,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-radio-group-basic',
  templateUrl: './sample-po-radio-group-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoRadioGroupBasicComponent {}
`),Kg()()()()()(),_u(23,`hr`))},dependencies:[P,tre,are,pe],encapsulation:2,changeDetection:1})}return i})();var se=(()=>{class i{helperText;columns;event;help;label;option;options;properties;radioGroup;fieldErrorMessage;size;columnOptions=[{label:`1 column`,value:1},{label:`2 columns`,value:2},{label:`3 columns`,value:3},{label:`4 columns`,value:4}];propertiesOptions=[{value:`disabled`,label:`Disabled`},{value:`optional`,label:`Optional`},{value:`required`,label:`Required`},{value:`showRequired`,label:`Show Required`},{value:`errorLimit`,label:`Limit Error Message`},{value:`labelTextWrap`,label:`Label Text Wrap`},{value:`compactLabel`,label:`Compact Label`}];sizesOptions=[{label:`Small`,value:`small`},{label:`Medium`,value:`medium`},{label:`Large`,value:`large`}];ngOnInit(){this.restore()}addOption(){this.options.push(this.option),this.option=this.getNewOption()}changeEvent(p){this.event=p}restore(){this.helperText=``,this.event=``,this.radioGroup=void 0,this.properties=[],this.fieldErrorMessage=``,this.size=`medium`,this.option=this.getNewOption(),this.options=[]}getNewOption(){return{label:void 0,value:void 0}}static ɵfac=function(l){return new(l||i)};static ɵcmp=Jn({type:i,selectors:[[`sample-po-radio-group-labs`]],standalone:!1,decls:26,vars:31,consts:[[`optionForm`,`ngForm`],[`propertiesForm`,`ngForm`],[`name`,`radioGroupLabs`,3,`ngModelChange`,`p-change`,`p-change-model`,`p-keydown`,`ngModel`,`p-helper`,`p-columns`,`p-disabled`,`p-help`,`p-label`,`p-optional`,`p-options`,`p-required`,`p-field-error-message`,`p-show-required`,`p-size`,`p-error-limit`,`p-label-text-wrap`,`p-compact-label`],[1,`po-row`],[`p-label`,`Model`,1,`po-md-6`,3,`p-value`],[`p-label`,`Event`,1,`po-md-6`,3,`p-value`],[`name`,`optionLabel`,`p-label`,`Option Label`,`p-required`,``,1,`po-md-6`,`po-lg-4`,3,`ngModelChange`,`ngModel`],[`name`,`optionValue`,`p-label`,`Option Value`,`p-required`,``,1,`po-md-6`,`po-lg-4`,3,`ngModelChange`,`ngModel`],[`name`,`optionDisabled`,`p-label`,`Option Disabled`,1,`po-lg-4`,3,`ngModelChange`,`ngModel`],[`p-label`,`Add Option`,1,`po-md-6`,`po-lg-3`,3,`p-click`,`p-disabled`],[`name`,`label`,`p-clean`,``,`p-label`,`Label`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`help`,`p-clean`,``,`p-label`,`Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`helperText`,`p-clean`,``,`p-label`,`Additional Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`fieldErrorMessage`,`p-clean`,``,`p-label`,`Field Error Message`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`columns`,`p-columns`,`4`,`p-label`,`Columns`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`properties`,`p-columns`,`4`,`p-label`,`Properties`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`size`,`p-columns`,`4`,`p-label`,`Size`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`click`]],template:function(l,n){if(l&1){let m=KO();Jc(0,`po-radio-group`,2),G0(),Zb(`ngModelChange`,function(a){return U_(m),Rk(n.radioGroup,a)||(n.radioGroup=a),H_(a)}),_t(`p-change`,function(){return n.changeEvent(`p-change`)})(`p-change-model`,function(){return n.changeEvent(`p-change-model`)})(`p-keydown`,function(){return n.changeEvent(`p-keydown`)}),Kg(),_u(1,`po-divider`),Jc(2,`div`,3),_u(3,`po-info`,4)(4,`po-info`,5),Kg(),_u(5,`po-divider`),Jc(6,`form`,null,0)(8,`div`,3)(9,`po-input`,6),G0(),Zb(`ngModelChange`,function(a){return U_(m),Rk(n.option.label,a)||(n.option.label=a),H_(a)}),Kg(),Jc(10,`po-input`,7),G0(),Zb(`ngModelChange`,function(a){return U_(m),Rk(n.option.value,a)||(n.option.value=a),H_(a)}),Kg(),Jc(11,`po-switch`,8),G0(),Zb(`ngModelChange`,function(a){return U_(m),Rk(n.option.disabled,a)||(n.option.disabled=a),H_(a)}),Kg()(),Jc(12,`div`,3)(13,`po-button`,9),_t(`p-click`,function(){U_(m);let a=ok(7);return n.addOption(),H_(a.reset())}),Kg()()(),_u(14,`po-divider`),Jc(15,`form`,null,1)(17,`po-input`,10),G0(),Zb(`ngModelChange`,function(a){return U_(m),Rk(n.label,a)||(n.label=a),H_(a)}),Kg(),Jc(18,`po-input`,11),G0(),Zb(`ngModelChange`,function(a){return U_(m),Rk(n.help,a)||(n.help=a),H_(a)}),Kg(),Jc(19,`po-input`,12),G0(),Zb(`ngModelChange`,function(a){return U_(m),Rk(n.helperText,a)||(n.helperText=a),H_(a)}),Kg(),Jc(20,`po-input`,13),G0(),Zb(`ngModelChange`,function(a){return U_(m),Rk(n.fieldErrorMessage,a)||(n.fieldErrorMessage=a),H_(a)}),Kg(),Jc(21,`po-radio-group`,14),G0(),Zb(`ngModelChange`,function(a){return U_(m),Rk(n.columns,a)||(n.columns=a),H_(a)}),Kg(),Jc(22,`po-checkbox-group`,15),G0(),Zb(`ngModelChange`,function(a){return U_(m),Rk(n.properties,a)||(n.properties=a),H_(a)}),Kg(),Jc(23,`po-radio-group`,16),G0(),Zb(`ngModelChange`,function(a){return U_(m),Rk(n.size,a)||(n.size=a),H_(a)}),Kg(),Jc(24,`div`,3)(25,`po-button`,17),_t(`click`,function(){return U_(m),ok(16).reset(),H_(n.restore())}),Kg()()()}if(l&2){let m=ok(7);Kb(`ngModel`,n.radioGroup),Ab(`p-helper`,n.helperText)(`p-columns`,n.columns)(`p-disabled`,n.properties.includes(`disabled`))(`p-help`,n.help)(`p-label`,n.label)(`p-optional`,n.properties.includes(`optional`))(`p-options`,n.options)(`p-required`,n.properties.includes(`required`))(`p-field-error-message`,n.fieldErrorMessage)(`p-show-required`,n.properties.includes(`showRequired`))(`p-size`,n.size)(`p-error-limit`,n.properties?.includes(`errorLimit`))(`p-label-text-wrap`,n.properties?.includes(`labelTextWrap`))(`p-compact-label`,n.properties?.includes(`compactLabel`)),q0(),wg(3),Ab(`p-value`,n.radioGroup),wg(),Ab(`p-value`,n.event),wg(5),Kb(`ngModel`,n.option.label),q0(),wg(),Kb(`ngModel`,n.option.value),q0(),wg(),Kb(`ngModel`,n.option.disabled),q0(),wg(2),Ab(`p-disabled`,m.invalid),wg(4),Kb(`ngModel`,n.label),q0(),wg(),Kb(`ngModel`,n.help),q0(),wg(),Kb(`ngModel`,n.helperText),q0(),wg(),Kb(`ngModel`,n.fieldErrorMessage),q0(),wg(),Kb(`ngModel`,n.columns),Ab(`p-options`,n.columnOptions),q0(),wg(),Kb(`ngModel`,n.properties),Ab(`p-options`,n.propertiesOptions),q0(),wg(),Kb(`ngModel`,n.size),Ab(`p-options`,n.sizesOptions),q0()}},dependencies:[xZ,RZ,AZ,QL,WL,oi,Nf,I4,j4,Zte,R4,Joe],encapsulation:2,changeDetection:1})}return i})();var ue=(()=>{class i{static ɵfac=function(l){return new(l||i)};static ɵcmp=Jn({type:i,selectors:[[`sample-po-radio-group-labs-view`]],standalone:!1,decls:24,vars:0,consts:[[`id`,`sample-po-radio-group-labs`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`data-tour`,`sample-tabs`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-radio-group-labs/sample-po-radio-group-labs.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-radio-group-labs/sample-po-radio-group-labs.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`]],template:function(l,n){l&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Mk(3,`PO Radio Group Labs`),Kg()(),Jc(4,`div`,2)(5,`po-tabs`,3)(6,`po-tab`,4)(7,`div`,5),_u(8,`sample-po-radio-group-labs`),Kg()(),Jc(9,`po-tab`,6)(10,`div`)(11,`label`,7),Mk(12,`sample-po-radio-group-labs/sample-po-radio-group-labs.component.html`),Kg(),Jc(13,`div`,8)(14,`pre`,9),Mk(15,`<po-radio-group
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
`),Kg()()()(),Jc(16,`po-tab`,10)(17,`div`)(18,`label`,7),Mk(19,`sample-po-radio-group-labs/sample-po-radio-group-labs.component.ts`),Kg(),Jc(20,`div`,11)(21,`pre`,12),Mk(22,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),Kg()()()()()(),_u(23,`hr`))},dependencies:[P,tre,are,se],encapsulation:2,changeDetection:1})}return i})();var ce=(()=>{class i{language=`es`;original=``;translated=``;languageOptions=[{label:`Spanish`,value:`es`},{label:`English`,value:`en`}];optionsList=[{value:`1`,label:`Olá`},{value:`2`,label:`Tchau`},{value:`3`,label:`Estrangeiro`},{value:`4`,label:`Alinhamento`},{value:`5`,label:`Visão`},{value:`6`,label:`Livro`}];wordsOptions=[{id:`1`,en:`Hello`,es:`Hola`},{id:`2`,en:`Bye`,es:`Hasta luego`},{id:`3`,en:`Foreign`,es:`Extranjero`},{id:`4`,en:`Alignment`,es:`Alineación`},{id:`5`,en:`Vision`,es:`Vista`},{id:`6`,en:`Book`,es:`Libro`}];changeLanguage(p){let l=this.wordsOptions.find(n=>n.id===this.original);l&&(this.translated=l[p||this.language])}static ɵfac=function(l){return new(l||i)};static ɵcmp=Jn({type:i,selectors:[[`sample-po-radio-group-translator`]],standalone:!1,decls:6,vars:5,consts:[[`f`,`ngForm`],[1,`po-row`],[`name`,`language`,`p-label`,`Select a Language`,`p-required`,``,1,`po-lg-4`,3,`ngModelChange`,`p-change`,`ngModel`,`p-options`],[`name`,`original`,`p-label`,`Original Text (Portuguese)`,`p-required`,``,1,`po-lg-4`,3,`ngModelChange`,`p-change`,`ngModel`,`p-options`],[`name`,`translated`,`p-label`,`Translated Text`,`p-readonly`,``,`p-required`,``,1,`po-lg-4`,3,`ngModelChange`,`ngModel`]],template:function(l,n){if(l&1){let m=KO();Jc(0,`form`,null,0)(2,`div`,1)(3,`po-radio-group`,2),G0(),Zb(`ngModelChange`,function(a){return U_(m),Rk(n.language,a)||(n.language=a),H_(a)}),_t(`p-change`,function(a){return n.changeLanguage(a)}),Kg(),Jc(4,`po-select`,3),G0(),Zb(`ngModelChange`,function(a){return U_(m),Rk(n.original,a)||(n.original=a),H_(a)}),_t(`p-change`,function(a){return n.changeLanguage(a)}),Kg(),Jc(5,`po-input`,4),G0(),Zb(`ngModelChange`,function(a){return U_(m),Rk(n.translated,a)||(n.translated=a),H_(a)}),Kg()()()}l&2&&(wg(3),Kb(`ngModel`,n.language),Ab(`p-options`,n.languageOptions),q0(),wg(),Kb(`ngModel`,n.original),Ab(`p-options`,n.optionsList),q0(),wg(),Kb(`ngModel`,n.translated),q0())},dependencies:[xZ,RZ,AZ,QL,WL,j4,Zte,Koe],encapsulation:2,changeDetection:1})}return i})();var ge=(()=>{class i{static ɵfac=function(l){return new(l||i)};static ɵcmp=Jn({type:i,selectors:[[`sample-po-radio-group-translator-view`]],standalone:!1,decls:24,vars:0,consts:[[`id`,`sample-po-radio-group-translator`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`data-tour`,`sample-tabs`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-radio-group-translator/sample-po-radio-group-translator.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-radio-group-translator/sample-po-radio-group-translator.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`]],template:function(l,n){l&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Mk(3,`PO Radio Group - Translator`),Kg()(),Jc(4,`div`,2)(5,`po-tabs`,3)(6,`po-tab`,4)(7,`div`,5),_u(8,`sample-po-radio-group-translator`),Kg()(),Jc(9,`po-tab`,6)(10,`div`)(11,`label`,7),Mk(12,`sample-po-radio-group-translator/sample-po-radio-group-translator.component.html`),Kg(),Jc(13,`div`,8)(14,`pre`,9),Mk(15,`<form #f="ngForm">
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
`),Kg()()()(),Jc(16,`po-tab`,10)(17,`div`)(18,`label`,7),Mk(19,`sample-po-radio-group-translator/sample-po-radio-group-translator.component.ts`),Kg(),Jc(20,`div`,11)(21,`pre`,12),Mk(22,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),Kg()()()()()(),_u(23,`hr`))},dependencies:[P,tre,are,ce],encapsulation:2,changeDetection:1})}return i})();var Ee=(()=>{class i{formBuilder=p(PZ);translatorForm;languageOptions=[{label:`Spanish`,value:`es`},{label:`English`,value:`en`}];optionsList=[{value:`1`,label:`Olá`},{value:`2`,label:`Tchau`},{value:`3`,label:`Estrangeiro`},{value:`4`,label:`Alinhamento`},{value:`5`,label:`Visão`},{value:`6`,label:`Livro`}];wordsOptions=[{id:`1`,en:`Hello`,es:`Hola`},{id:`2`,en:`Bye`,es:`Hasta luego`},{id:`3`,en:`Foreign`,es:`Extranjero`},{id:`4`,en:`Alignment`,es:`Alineación`},{id:`5`,en:`Vision`,es:`Vista`},{id:`6`,en:`Book`,es:`Libro`}];ngOnInit(){this.translatorForm=this.formBuilder.group({language:[`es`,Qm.required],original:[void 0,Qm.required],translated:[void 0,Qm.required]})}changeLanguage(){let p=this.translatorForm.value.language,l=this.translatorForm.value.original,n=this.wordsOptions.find(m=>m.id===l);n&&this.translatorForm.patchValue({translated:n[p]})}static ɵfac=function(l){return new(l||i)};static ɵcmp=Jn({type:i,selectors:[[`sample-po-radio-group-translator-reactive-form`]],standalone:!1,decls:5,vars:3,consts:[[3,`formGroup`],[1,`po-row`],[`name`,`language`,`formControlName`,`language`,`p-label`,`Select a Language`,`p-required`,``,1,`po-lg-4`,3,`p-change`,`p-options`],[`name`,`original`,`formControlName`,`original`,`p-label`,`Original Text (Portuguese)`,`p-required`,``,1,`po-lg-4`,3,`p-change`,`p-options`],[`name`,`translated`,`formControlName`,`translated`,`p-label`,`Translated Text`,`p-readonly`,``,`p-required`,``,1,`po-lg-4`]],template:function(l,n){l&1&&(Jc(0,`form`,0)(1,`div`,1)(2,`po-radio-group`,2),G0(),_t(`p-change`,function(){return n.changeLanguage()}),Kg(),Jc(3,`po-select`,3),G0(),_t(`p-change`,function(){return n.changeLanguage()}),Kg(),Jc(4,`po-input`,4),G0(),Kg()()()),l&2&&(Ab(`formGroup`,n.translatorForm),wg(2),Ab(`p-options`,n.languageOptions),q0(),wg(),Ab(`p-options`,n.optionsList),q0(),wg(),q0())},dependencies:[xZ,RZ,AZ,ZL,i1,j4,Zte,Koe],encapsulation:2,changeDetection:1})}return i})();var be=(()=>{class i{static ɵfac=function(l){return new(l||i)};static ɵcmp=Jn({type:i,selectors:[[`sample-po-radio-group-translator-reactive-form-view`]],standalone:!1,decls:24,vars:0,consts:[[`id`,`sample-po-radio-group-translator-reactive-form`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`data-tour`,`sample-tabs`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-radio-group-translator-reactive-form/sample-po-radio-group-translator-reactive-form.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-radio-group-translator-reactive-form/sample-po-radio-group-translator-reactive-form.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`]],template:function(l,n){l&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Mk(3,`PO Radio Group - Translator Reactive Form`),Kg()(),Jc(4,`div`,2)(5,`po-tabs`,3)(6,`po-tab`,4)(7,`div`,5),_u(8,`sample-po-radio-group-translator-reactive-form`),Kg()(),Jc(9,`po-tab`,6)(10,`div`)(11,`label`,7),Mk(12,`sample-po-radio-group-translator-reactive-form/sample-po-radio-group-translator-reactive-form.component.html`),Kg(),Jc(13,`div`,8)(14,`pre`,9),Mk(15,`<form [formGroup]="translatorForm">
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
`),Kg()()()(),Jc(16,`po-tab`,10)(17,`div`)(18,`label`,7),Mk(19,`sample-po-radio-group-translator-reactive-form/sample-po-radio-group-translator-reactive-form.component.ts`),Kg(),Jc(20,`div`,11)(21,`pre`,12),Mk(22,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),Kg()()()()()(),_u(23,`hr`))},dependencies:[P,tre,are,Ee],encapsulation:2,changeDetection:1})}return i})();var Se=(()=>{class i{router=p(An);openDoc(p){this.router.navigate([`/documentation`,p],{queryParams:{view:`doc`}})}static ɵfac=function(l){return new(l||i)};static ɵcmp=Jn({type:i,selectors:[[`sample-po-radio-group-doc`]],standalone:!1,decls:971,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[`id`,`class-po-radio-group-component`,1,`docs-api-class-name`],[1,`doc-code`],[`href`,`/documentation/po-combo`],[`href`,`/documentation/po-select`],[`href`,`/documentation/po-checkbox-group`],[`href`,`https://www.w3.org/WAI/WCAG21/Understanding/name-role-value`],[`href`,`https://www.w3.org/WAI/WCAG21/Understanding/use-of-color`],[`href`,`https://www.w3.org/TR/wai-aria-practices-1.1/#keyboard-interaction-3`],[`href`,`https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance-enhanced`],[`href`,`https://doc.animaliads.io/docs/components/radio`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[`id`,`event-p-additional-help`,1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[1,`docs-api-deprecated-marker`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`id`,`prop-p-additional-help-tooltip`,1,`docs-api-properties-row`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[`pan`,``,1,`docs-api-property-type`,`string`],[`id`,`prop-p-append-in-body`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`id`,`prop-p-auto-focus`,1,`docs-api-properties-row`],[`id`,`event-p-change`,1,`docs-api-properties-row`],[`id`,`event-p-change-model`,1,`docs-api-properties-row`],[`id`,`prop-p-columns`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`number`],[`id`,`prop-p-compact-label`,1,`docs-api-properties-row`],[`id`,`prop-p-disabled`,1,`docs-api-properties-row`],[`id`,`prop-p-error-limit`,1,`docs-api-properties-row`],[`id`,`prop-p-field-error-message`,1,`docs-api-properties-row`],[`id`,`prop-p-help`,1,`docs-api-properties-row`],[`id`,`event-p-keydown`,1,`docs-api-properties-row`],[`id`,`prop-p-label`,1,`docs-api-properties-row`],[`id`,`prop-p-label-text-wrap`,1,`docs-api-properties-row`],[`id`,`prop-name`,1,`docs-api-properties-row`],[`id`,`prop-p-optional`,1,`docs-api-properties-row`],[`id`,`prop-p-options`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoRadioGroupOption[]`],[`id`,`prop-p-helper`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoHelperOptions`],[`href`,`https://po-ui.io/documentation/po-helper`],[`id`,`prop-p-required`,1,`docs-api-properties-row`],[`id`,`prop-p-show-required`,1,`docs-api-properties-row`],[`id`,`prop-p-size`,1,`docs-api-properties-row`],[`href`,`https://po-ui.io/documentation/po-theme`],[`id`,`method-focus`,1,`docs-api-method-table`],[1,`docs-api-properties-row`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[`id`,`method-showAdditionalHelp`,1,`docs-api-method-table`],[`id`,`interface-po-radio-group-option`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-radio-group-option-disabled`,1,`docs-api-properties-row`],[`id`,`interface-po-radio-group-option-label`,1,`docs-api-properties-row`],[`id`,`interface-po-radio-group-option-value`,1,`docs-api-properties-row`]],template:function(l,n){l&1&&(Jc(0,`div`,0)(1,`p`,1)(2,`code`),Mk(3,`import { PoFieldModule } from '@po-ui/ng-components';`),Kg()(),Jc(4,`div`,2)(5,`p`),Mk(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-timepicker, po-upload, po-url e po-search-ai.`),Kg(),Jc(7,`blockquote`)(8,`p`),Mk(9,`Não esqueça de importar o módulo `),Jc(10,`code`),Mk(11,`FormsModule`),Kg(),Mk(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),Jc(13,`code`),Mk(14,`ReactiveFormsModule`),Kg(),Mk(15,`, ambos nativos do Angular.`),Kg()()(),Jc(16,`h3`,3),Mk(17,`Componente`),Kg(),Jc(18,`h4`,4)(19,`code`,5),Mk(20,`PoRadioGroupComponent`),Kg()(),Jc(21,`div`,2)(22,`p`),Mk(23,`O componente `),Jc(24,`code`),Mk(25,`po-radio-group`),Kg(),Mk(26,` deve ser utilizado para disponibilizar m\xFAltiplas op\xE7\xF5es ao usu\xE1rio, permitindo a ele que
selecione apenas uma delas. Seu uso \xE9 recomendado para um n\xFAmero pequeno de op\xE7\xF5es, caso contr\xE1rio, recomenda-se o uso
do `),Jc(27,`a`,6)(28,`strong`),Mk(29,`po-combo`),Kg()(),Mk(30,` ou `),Jc(31,`a`,7)(32,`strong`),Mk(33,`po-select`),Kg()(),Mk(34,`.`),Kg(),Jc(35,`p`),Mk(36,`Este n\xE3o \xE9 um componente de multisele\xE7\xE3o, se for este o caso, deve-se utilizar o
`),Jc(37,`a`,8)(38,`strong`),Mk(39,`po-checkbox-group`),Kg()(),Mk(40,`.`),Kg(),Jc(41,`blockquote`)(42,`p`),Mk(43,`Ao passar um valor para o `),Jc(44,`em`),Mk(45,`model`),Kg(),Mk(46,` que não esteja na lista de opções, o mesmo será definido como `),Jc(47,`code`),Mk(48,`undefined`),Kg(),Mk(49,`.`),Kg()(),Jc(50,`h4`),Mk(51,`Acessibilidade tratada no componente interno `),Jc(52,`code`),Mk(53,`po-radio`),Kg(),Mk(54,`:`),Kg(),Jc(55,`p`),Mk(56,`Algumas diretrizes de acessibilidade já são tratadas no componente, internamente, e não podem ser alteradas pelo proprietário do conteúdo. São elas:`),Kg(),Jc(57,`ul`)(58,`li`),Mk(59,`O componente foi desenvolvido utilizando controles padrões HTML para permitir a identificação do mesmo na interface por tecnologias assistivas. `),Jc(60,`a`,9),Mk(61,`WCAG 4.1.2: Name, Role, Value`),Kg()(),Jc(62,`li`),Mk(63,`A cor não deve ser o único meio para diferenciar o radio button normal do selecionado, por isso deve-se manter uma diferença visual entre os estados. `),Jc(64,`a`,10),Mk(65,`WGAG 1.4.1: Use of Color, 3.2.4: Consistent Identification`),Kg()(),Jc(66,`li`),Mk(67,`Quando em foco, o componente é ativado usando as teclas de Espaço e Enter do teclado. `),Jc(68,`a`,11),Mk(69,`W3C WAI-ARIA 3.5 Button - Keyboard Interaction`),Kg()(),Jc(70,`li`),Mk(71,`A área do foco precisar ter uma espessura de pelo menos 2 pixels CSS e o foco não pode ficar escondido por outros elementos da tela. `),Jc(72,`a`,12),Mk(73,`(WCAG 2.4.12: Focus Appearance`),Kg()()(),Jc(74,`p`),Mk(75,`Conforme documentação em: `),Jc(76,`a`,13),Mk(77,`https://doc.animaliads.io/docs/components/radio`),Kg()(),Jc(78,`h4`),Mk(79,`Tokens customizáveis`),Kg(),Jc(80,`p`),Mk(81,`É possível alterar o estilo do componente usando os seguintes tokens (CSS): `),_u(82,`br`),Mk(83,`
Obs: No componente Radio Group, a customiza\xE7\xE3o ocorre principalmente nos elementos `),Jc(84,`code`),Mk(85,`po-radio`),Kg(),Mk(86,` que compõem o grupo de opções. `),_u(87,`br`),Mk(88,`
Portanto, ao aplicar estilos customizados, \xE9 importante focar na customiza\xE7\xE3o dos elementos `),Jc(89,`code`),Mk(90,`po-radio`),Kg(),Mk(91,` em vez do próprio `),Jc(92,`code`),Mk(93,`po-radio-group`),Kg(),Mk(94,`.`),Kg(),Jc(95,`blockquote`)(96,`p`),Mk(97,`Para maiores informações, acesse o guia `),Jc(98,`a`,14),Mk(99,`Personalizando o Tema Padrão com Tokens CSS`),Kg(),Mk(100,`.`),Kg()(),Jc(101,`table`)(102,`thead`)(103,`tr`)(104,`th`),Mk(105,`Propriedade`),Kg(),Jc(106,`th`),Mk(107,`Descrição`),Kg(),Jc(108,`th`),Mk(109,`Valor Padrão`),Kg()()(),Jc(110,`tbody`)(111,`tr`)(112,`td`)(113,`strong`),Mk(114,`Default Values`),Kg()(),_u(115,`td`)(116,`td`),Kg(),Jc(117,`tr`)(118,`td`)(119,`code`),Mk(120,`--border-color`),Kg()(),Jc(121,`td`),Mk(122,`Cor da borda`),Kg(),Jc(123,`td`)(124,`code`),Mk(125,`var(--color-neutral-dark-70)`),Kg()()(),Jc(126,`tr`)(127,`td`)(128,`code`),Mk(129,`--field-container-title-justify`),Kg()(),Jc(130,`td`),Mk(131,`Alinhamento horizontal do título (`),Jc(132,`code`),Mk(133,`justify-content`),Kg(),Mk(134,`)`),Kg(),Jc(135,`td`)(136,`code`),Mk(137,`space-between`),Kg()()(),Jc(138,`tr`)(139,`td`)(140,`code`),Mk(141,`--field-container-title-flex`),Kg()(),Jc(142,`td`),Mk(143,`Flex do título (`),Jc(144,`code`),Mk(145,`flex`),Kg(),Mk(146,`)`),Kg(),Jc(147,`td`)(148,`code`),Mk(149,`1 auto`),Kg()()(),Jc(150,`tr`)(151,`td`)(152,`strong`),Mk(153,`Hover`),Kg()(),_u(154,`td`)(155,`td`),Kg(),Jc(156,`tr`)(157,`td`)(158,`code`),Mk(159,`--shadow-color-hover`),Kg()(),Jc(160,`td`),Mk(161,`Cor da sombra no estado hover`),Kg(),Jc(162,`td`)(163,`code`),Mk(164,`var(--color-brand-01-lighter)`),Kg()()(),Jc(165,`tr`)(166,`td`)(167,`code`),Mk(168,`--color-hover`),Kg()(),Jc(169,`td`),Mk(170,`Cor principal no estado hover`),Kg(),Jc(171,`td`)(172,`code`),Mk(173,`var(--color-brand-01-dark)`),Kg()()(),Jc(174,`tr`)(175,`td`)(176,`strong`),Mk(177,`Focused`),Kg()(),_u(178,`td`)(179,`td`),Kg(),Jc(180,`tr`)(181,`td`)(182,`code`),Mk(183,`--outline-color-focused`),Kg()(),Jc(184,`td`),Mk(185,`Cor do outline do estado de focus`),Kg(),Jc(186,`td`)(187,`code`),Mk(188,`var(--color-brand-01-darkest)`),Kg()()(),Jc(189,`tr`)(190,`td`)(191,`strong`),Mk(192,`checked`),Kg()(),_u(193,`td`)(194,`td`),Kg(),Jc(195,`tr`)(196,`td`)(197,`code`),Mk(198,`--color-unchecked`),Kg()(),Jc(199,`td`),Mk(200,`Cor quando não selecionado`),Kg(),Jc(201,`td`)(202,`code`),Mk(203,`var(--color-neutral-light-00)`),Kg()()(),Jc(204,`tr`)(205,`td`)(206,`code`),Mk(207,`--color-checked`),Kg()(),Jc(208,`td`),Mk(209,`Cor quando selecionado`),Kg(),Jc(210,`td`)(211,`code`),Mk(212,`var(--color-action-default)`),Kg()()(),Jc(213,`tr`)(214,`td`)(215,`strong`),Mk(216,`Disabled`),Kg()(),_u(217,`td`)(218,`td`),Kg(),Jc(219,`tr`)(220,`td`)(221,`code`),Mk(222,`--color-unchecked-disabled`),Kg()(),Jc(223,`td`),Mk(224,`Cor pricipal quando não selecionado no estado disabled`),Kg(),Jc(225,`td`)(226,`code`),Mk(227,`var(--color-neutral-light-30)`),Kg()()(),Jc(228,`tr`)(229,`td`)(230,`code`),Mk(231,`--color-checked-disabled`),Kg()(),Jc(232,`td`),Mk(233,`Cor pricipal quando selecionado no estado disabled`),Kg(),Jc(234,`td`)(235,`code`),Mk(236,`var(--color-neutral-dark-70)`),Kg()()()()()(),Jc(237,`div`,15)(238,`h4`,16),Mk(239,`Seletor`),Kg(),Jc(240,`pre`,17),Mk(241,`<po-radio-group
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
`),Kg()(),Jc(242,`h4`,18),Mk(243,`Propriedades`),Kg(),Jc(244,`table`,19)(245,`tr`,20)(246,`th`,21),Mk(247,`Nome`),Kg(),Jc(248,`th`,21),Mk(249,`Tipo`),Kg(),Jc(250,`th`,21),Mk(251,`Padrão`),Kg(),Jc(252,`th`,21),Mk(253,`Descrição`),Kg()(),Jc(254,`tr`,22)(255,`td`,23)(256,`div`,24)(257,`span`,25),Mk(258,` (p-additional-help)`),_u(259,`br`),Kg()(),Jc(260,`div`,26),Mk(261,`Deprecated`),Kg()(),Jc(262,`td`,27)(263,`code`,28),Mk(264,`EventEmitter`),Kg()(),Jc(265,`td`,29),Mk(266,`-`),Kg(),Jc(267,`td`,30)(268,`em`)(269,`strong`),Mk(270,`(opcional)`),Kg()(),Jc(271,`p`),Mk(272,`Evento disparado ao clicar no ícone de ajuda adicional.`),Kg(),Jc(273,`blockquote`)(274,`p`),Mk(275,`Essa propriedade está `),Jc(276,`strong`),Mk(277,`depreciada`),Kg(),Mk(278,` e será removida na versão `),Jc(279,`code`),Mk(280,`23.x.x`),Kg(),Mk(281,`. Recomendamos utilizar a propriedade `),Jc(282,`code`),Mk(283,`p-helper`),Kg(),Mk(284,` que oferece mais recursos e flexibilidade.`),Kg()()()(),Jc(285,`tr`,31)(286,`td`,23)(287,`div`,32)(288,`span`,33),Mk(289,` p-additional-help-tooltip`),_u(290,`br`),Kg()(),Jc(291,`div`,26),Mk(292,`Deprecated`),Kg()(),Jc(293,`td`,27)(294,`code`,34),Mk(295,`string`),Kg()(),Jc(296,`td`,29),Mk(297,`-`),Kg(),Jc(298,`td`,30)(299,`em`)(300,`strong`),Mk(301,`(opcional)`),Kg()(),Jc(302,`p`),Mk(303,`Exibe um ícone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente `),Jc(304,`code`),Mk(305,`po-helper`),Kg(),Mk(306,`.
`),Jc(307,`strong`),Mk(308,`Como boa prática, indica-se utilizar um texto com até 140 caracteres.`),Kg()(),Jc(309,`blockquote`)(310,`p`),Mk(311,`Requer um recuo mínimo de 8px se o componente estiver próximo à lateral da tela.`),Kg()(),Jc(312,`blockquote`)(313,`p`),Mk(314,`Essa propriedade está `),Jc(315,`strong`),Mk(316,`depreciada`),Kg(),Mk(317,` e será removida na versão `),Jc(318,`code`),Mk(319,`23.x.x`),Kg(),Mk(320,`. Recomendamos utilizar a propriedade `),Jc(321,`code`),Mk(322,`p-helper`),Kg(),Mk(323,` que oferece mais recursos e flexibilidade.`),Kg()()()(),Jc(324,`tr`,35)(325,`td`,23)(326,`div`,32)(327,`span`,33),Mk(328,` p-append-in-body`),_u(329,`br`),Kg()()(),Jc(330,`td`,27)(331,`code`,36),Mk(332,`boolean`),Kg()(),Jc(333,`td`,29)(334,`p`)(335,`code`),Mk(336,`false`),Kg()()(),Jc(337,`td`,30)(338,`em`)(339,`strong`),Mk(340,`(opcional)`),Kg()(),Jc(341,`p`),Mk(342,`Define que o popover (`),Jc(343,`code`),Mk(344,`p-helper`),Kg(),Mk(345,` e/ou `),Jc(346,`code`),Mk(347,`p-error-limit`),Kg(),Mk(348,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o
dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow
escondido, garantindo o posicionamento correto do tooltip pr\xF3ximo ao elemento.`),Kg(),Jc(349,`blockquote`)(350,`p`),Mk(351,`Quando utilizado com `),Jc(352,`code`),Mk(353,`p-helper`),Kg(),Mk(354,`, leitores de tela como o NVDA podem não ler o conteúdo do popover.`),Kg()()()(),Jc(355,`tr`,37)(356,`td`,23)(357,`div`,32)(358,`span`,33),Mk(359,` p-auto-focus`),_u(360,`br`),Kg()()(),Jc(361,`td`,27)(362,`code`,36),Mk(363,`boolean`),Kg()(),Jc(364,`td`,29)(365,`p`)(366,`code`),Mk(367,`false`),Kg()()(),Jc(368,`td`,30)(369,`em`)(370,`strong`),Mk(371,`(opcional)`),Kg()(),Jc(372,`p`),Mk(373,`Aplica foco no elemento ao ser iniciado.`),Kg(),Jc(374,`blockquote`)(375,`p`),Mk(376,`Caso mais de um elemento seja configurado com essa propriedade, apenas o último elemento declarado com ela terá o foco.`),Kg()()()(),Jc(377,`tr`,38)(378,`td`,23)(379,`div`,24)(380,`span`,25),Mk(381,` (p-change)`),_u(382,`br`),Kg()()(),Jc(383,`td`,27)(384,`code`,28),Mk(385,`EventEmitter`),Kg()(),Jc(386,`td`,29),Mk(387,`-`),Kg(),Jc(388,`td`,30)(389,`em`)(390,`strong`),Mk(391,`(opcional)`),Kg()(),Jc(392,`p`),Mk(393,`Evento ao alterar valor do campo.`),Kg()()(),Jc(394,`tr`,39)(395,`td`,23)(396,`div`,24)(397,`span`,25),Mk(398,` (p-change-model)`),_u(399,`br`),Kg()()(),Jc(400,`td`,27)(401,`code`,28),Mk(402,`EventEmitter`),Kg()(),Jc(403,`td`,29),Mk(404,`-`),Kg(),Jc(405,`td`,30)(406,`em`)(407,`strong`),Mk(408,`(opcional)`),Kg()(),Jc(409,`p`),Mk(410,`Evento disparado sempre que o valor do model \xE9 alterado, seja por intera\xE7\xE3o do usu\xE1rio
ou por atualiza\xE7\xE3o program\xE1tica (ex: `),Jc(411,`code`),Mk(412,`setValue`),Kg(),Mk(413,`, `),Jc(414,`code`),Mk(415,`patchValue`),Kg(),Mk(416,`, carregamento assíncrono).`),Kg(),Jc(417,`p`),Mk(418,`Diferentemente do `),Jc(419,`code`),Mk(420,`p-change`),Kg(),Mk(421,`, que \xE9 disparado apenas por intera\xE7\xE3o do usu\xE1rio,
o `),Jc(422,`code`),Mk(423,`p-change-model`),Kg(),Mk(424,` cobre todos os cenários de alteração de valor.`),Kg(),Jc(425,`p`),Mk(426,`Não emite quando o novo valor é idêntico ao anterior (deduplicação automática).`),Kg()()(),Jc(427,`tr`,40)(428,`td`,23)(429,`div`,32)(430,`span`,33),Mk(431,` p-columns`),_u(432,`br`),Kg()()(),Jc(433,`td`,27)(434,`code`,41),Mk(435,`number`),Kg()(),Jc(436,`td`,29)(437,`p`)(438,`code`),Mk(439,`2`),Kg()()(),Jc(440,`td`,30)(441,`em`)(442,`strong`),Mk(443,`(opcional)`),Kg()(),Jc(444,`p`),Mk(445,`Define a quantidade de colunas para exibição das opções.`),Kg(),Jc(446,`p`)(447,`strong`),Mk(448,`Considerações:`),Kg()(),Jc(449,`ul`)(450,`li`),Mk(451,`É possível exibir as opções entre `),Jc(452,`code`),Mk(453,`1`),Kg(),Mk(454,` e `),Jc(455,`code`),Mk(456,`4`),Kg(),Mk(457,` colunas.`),Kg(),Jc(458,`li`),Mk(459,`O número máximo de colunas é invariável nas seguintes resoluções:`),Jc(460,`ul`)(461,`li`)(462,`code`),Mk(463,`sm`),Kg(),Mk(464,`: `),Jc(465,`code`),Mk(466,`1`),Kg()(),Jc(467,`li`)(468,`code`),Mk(469,`md`),Kg(),Mk(470,`: `),Jc(471,`code`),Mk(472,`2`),Kg()()()()()()(),Jc(473,`tr`,42)(474,`td`,23)(475,`div`,32)(476,`span`,33),Mk(477,` p-compact-label`),_u(478,`br`),Kg()()(),Jc(479,`td`,27)(480,`code`,36),Mk(481,`boolean`),Kg()(),Jc(482,`td`,29)(483,`p`)(484,`code`),Mk(485,`false`),Kg()()(),Jc(486,`td`,30)(487,`em`)(488,`strong`),Mk(489,`(opcional)`),Kg()(),Jc(490,`p`),Mk(491,`Define se o título do campo será exibido de forma compacta.`),Kg(),Jc(492,`p`),Mk(493,`Quando habilitado (`),Jc(494,`code`),Mk(495,`true`),Kg(),Mk(496,`), o modo compacto afeta o conjunto composto por:`),Kg(),Jc(497,`ul`)(498,`li`)(499,`code`),Mk(500,`po-label`),Kg()(),Jc(501,`li`)(502,`code`),Mk(503,`p-requirement (showRequired)`),Kg()(),Jc(504,`li`)(505,`code`),Mk(506,`po-helper`),Kg()()(),Jc(507,`p`),Mk(508,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),Kg(),Jc(509,`p`),Mk(510,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),Kg(),Jc(511,`ul`)(512,`li`)(513,`code`),Mk(514,`--field-container-title-justify`),Kg()(),Jc(515,`li`)(516,`code`),Mk(517,`--field-container-title-flex`),Kg()()(),Jc(518,`p`),Mk(519,`Exemplo:`),Kg(),Jc(520,`pre`)(521,`code`),Mk(522,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),Kg()(),Jc(523,`p`),Mk(524,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),Kg()()(),Jc(525,`tr`,43)(526,`td`,23)(527,`div`,32)(528,`span`,33),Mk(529,` p-disabled`),_u(530,`br`),Kg()()(),Jc(531,`td`,27)(532,`code`,36),Mk(533,`boolean`),Kg()(),Jc(534,`td`,29)(535,`p`)(536,`code`),Mk(537,`false`),Kg()()(),Jc(538,`td`,30)(539,`em`)(540,`strong`),Mk(541,`(opcional)`),Kg()(),Jc(542,`p`),Mk(543,`Indica que o campo será desabilitado.`),Kg()()(),Jc(544,`tr`,44)(545,`td`,23)(546,`div`,32)(547,`span`,33),Mk(548,` p-error-limit`),_u(549,`br`),Kg()()(),Jc(550,`td`,27)(551,`code`,36),Mk(552,`boolean`),Kg()(),Jc(553,`td`,29)(554,`p`)(555,`code`),Mk(556,`false`),Kg()()(),Jc(557,`td`,30)(558,`em`)(559,`strong`),Mk(560,`(opcional)`),Kg()(),Jc(561,`p`),Mk(562,`Limita a exibição da mensagem de erro a duas linhas e exibe um tooltip com o texto completo.`),Kg(),Jc(563,`blockquote`)(564,`p`),Mk(565,`Caso essa propriedade seja definida como `),Jc(566,`code`),Mk(567,`true`),Kg(),Mk(568,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),Kg()()()(),Jc(569,`tr`,45)(570,`td`,23)(571,`div`,32)(572,`span`,33),Mk(573,` p-field-error-message`),_u(574,`br`),Kg()()(),Jc(575,`td`,27)(576,`code`,34),Mk(577,`string`),Kg()(),Jc(578,`td`,29),Mk(579,`-`),Kg(),Jc(580,`td`,30)(581,`em`)(582,`strong`),Mk(583,`(opcional)`),Kg()(),Jc(584,`p`),Mk(585,`Exibe a mensagem setada se o campo estiver vazio e for requerido.`),Kg(),Jc(586,`blockquote`)(587,`p`),Mk(588,`Necessário que a propriedade `),Jc(589,`code`),Mk(590,`p-required`),Kg(),Mk(591,` esteja habilitada.`),Kg()()()(),Jc(592,`tr`,46)(593,`td`,23)(594,`div`,32)(595,`span`,33),Mk(596,` p-help`),_u(597,`br`),Kg()()(),Jc(598,`td`,27)(599,`code`,34),Mk(600,`string`),Kg()(),Jc(601,`td`,29),Mk(602,`-`),Kg(),Jc(603,`td`,30)(604,`em`)(605,`strong`),Mk(606,`(opcional)`),Kg()(),Jc(607,`p`),Mk(608,`Texto de apoio do campo.`),Kg()()(),Jc(609,`tr`,47)(610,`td`,23)(611,`div`,24)(612,`span`,25),Mk(613,` (p-keydown)`),_u(614,`br`),Kg()()(),Jc(615,`td`,27)(616,`code`,28),Mk(617,`EventEmitter`),Kg()(),Jc(618,`td`,29),Mk(619,`-`),Kg(),Jc(620,`td`,30)(621,`em`)(622,`strong`),Mk(623,`(opcional)`),Kg()(),Jc(624,`p`),Mk(625,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),Jc(626,`code`),Mk(627,`KeyboardEvent`),Kg(),Mk(628,` com informações sobre a tecla.`),Kg()()(),Jc(629,`tr`,48)(630,`td`,23)(631,`div`,32)(632,`span`,33),Mk(633,` p-label`),_u(634,`br`),Kg()()(),Jc(635,`td`,27)(636,`code`,34),Mk(637,`string`),Kg()(),Jc(638,`td`,29),Mk(639,`-`),Kg(),Jc(640,`td`,30)(641,`em`)(642,`strong`),Mk(643,`(opcional)`),Kg()(),Jc(644,`p`),Mk(645,`Label do campo.`),Kg()()(),Jc(646,`tr`,49)(647,`td`,23)(648,`div`,32)(649,`span`,33),Mk(650,` p-label-text-wrap`),_u(651,`br`),Kg()()(),Jc(652,`td`,27)(653,`code`,36),Mk(654,`boolean`),Kg()(),Jc(655,`td`,29)(656,`p`)(657,`code`),Mk(658,`false`),Kg()()(),Jc(659,`td`,30)(660,`em`)(661,`strong`),Mk(662,`(opcional)`),Kg()(),Jc(663,`p`),Mk(664,`Habilita a quebra automática do texto da propriedade `),Jc(665,`code`),Mk(666,`p-label`),Kg(),Mk(667,`. Quando `),Jc(668,`code`),Mk(669,`p-label-text-wrap`),Kg(),Mk(670,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),Kg()()(),Jc(671,`tr`,50)(672,`td`,23)(673,`div`,32)(674,`span`,33),Mk(675,` name`),_u(676,`br`),Kg()()(),Jc(677,`td`,27)(678,`code`,34),Mk(679,`string`),Kg()(),Jc(680,`td`,29),Mk(681,`-`),Kg(),Jc(682,`td`,30)(683,`p`),Mk(684,`Nome das opções.`),Kg()()(),Jc(685,`tr`,51)(686,`td`,23)(687,`div`,32)(688,`span`,33),Mk(689,` p-optional`),_u(690,`br`),Kg()()(),Jc(691,`td`,27)(692,`code`,36),Mk(693,`boolean`),Kg()(),Jc(694,`td`,29)(695,`p`)(696,`code`),Mk(697,`false`),Kg()()(),Jc(698,`td`,30)(699,`em`)(700,`strong`),Mk(701,`(opcional)`),Kg()(),Jc(702,`p`),Mk(703,`Define se a indicação de campo opcional será exibida.`),Kg(),Jc(704,`blockquote`)(705,`p`),Mk(706,`Não será exibida a indicação se:`),Kg()(),Jc(707,`ul`)(708,`li`),Mk(709,`O campo conter `),Jc(710,`code`),Mk(711,`p-required`),Kg(),Mk(712,`;`),Kg(),Jc(713,`li`),Mk(714,`Não possuir `),Jc(715,`code`),Mk(716,`p-help`),Kg(),Mk(717,` e/ou `),Jc(718,`code`),Mk(719,`p-label`),Kg(),Mk(720,`.`),Kg()()()(),Jc(721,`tr`,52)(722,`td`,23)(723,`div`,32)(724,`span`,33),Mk(725,` p-options`),_u(726,`br`),Kg()()(),Jc(727,`td`,27)(728,`code`,53),Mk(729,`PoRadioGroupOption[]`),Kg()(),Jc(730,`td`,29),Mk(731,`-`),Kg(),Jc(732,`td`,30)(733,`p`),Mk(734,`Lista de op\xE7\xF5es que ser\xE3o exibidas.
Nesta propriedade deve ser definido um array de objetos que implementam a interface PoRadioGroupOption.`),Kg()()(),Jc(735,`tr`,54)(736,`td`,23)(737,`div`,32)(738,`span`,33),Mk(739,` p-helper`),_u(740,`br`),Kg()()(),Jc(741,`td`,27)(742,`code`,55),Mk(743,`PoHelperOptions `),Kg(),Jc(744,`code`,34),Mk(745,` string`),Kg()(),Jc(746,`td`,29),Mk(747,`-`),Kg(),Jc(748,`td`,30)(749,`em`)(750,`strong`),Mk(751,`(opcional)`),Kg()(),Jc(752,`p`),Mk(753,`Define as opções do componente de ajuda (po-helper) que será exibido ao lado do label quando a propriedade `),Jc(754,`code`),Mk(755,`p-label`),Kg(),Mk(756,` for definida, ou, ao lado do componente na ausência da propriedade `),Jc(757,`code`),Mk(758,`p-label`),Kg(),Mk(759,`.`),Kg(),Jc(760,`blockquote`)(761,`p`),Mk(762,`Para mais informações acesse: `),Jc(763,`a`,56),Mk(764,`https://po-ui.io/documentation/po-helper`),Kg(),Mk(765,`.`),Kg()(),Jc(766,`blockquote`)(767,`p`),Mk(768,`Ao configurar esta propriedade, o antigo ícone de ajuda adicional (`),Jc(769,`code`),Mk(770,`p-additional-help-tooltip`),Kg(),Mk(771,` e `),Jc(772,`code`),Mk(773,`p-additional-help`),Kg(),Mk(774,`) será ignorado.`),Kg()()()(),Jc(775,`tr`,57)(776,`td`,23)(777,`div`,32)(778,`span`,33),Mk(779,` p-required`),_u(780,`br`),Kg()()(),Jc(781,`td`,27)(782,`code`,36),Mk(783,`boolean`),Kg()(),Jc(784,`td`,29)(785,`p`)(786,`code`),Mk(787,`false`),Kg()()(),Jc(788,`td`,30)(789,`em`)(790,`strong`),Mk(791,`(opcional)`),Kg()(),Jc(792,`p`),Mk(793,`Define que o campo será obrigatório.`),Kg()()(),Jc(794,`tr`,58)(795,`td`,23)(796,`div`,32)(797,`span`,33),Mk(798,` p-show-required`),_u(799,`br`),Kg()()(),Jc(800,`td`,27)(801,`code`,36),Mk(802,`boolean`),Kg()(),Jc(803,`td`,29),Mk(804,`-`),Kg(),Jc(805,`td`,30)(806,`p`),Mk(807,`Define se a indicação de campo obrigatório será exibida.`),Kg(),Jc(808,`blockquote`)(809,`p`),Mk(810,`Não será exibida a indicação se:`),Kg()(),Jc(811,`ul`)(812,`li`),Mk(813,`Não possuir `),Jc(814,`code`),Mk(815,`p-help`),Kg(),Mk(816,` e/ou `),Jc(817,`code`),Mk(818,`p-label`),Kg(),Mk(819,`.`),Kg()()()(),Jc(820,`tr`,59)(821,`td`,23)(822,`div`,32)(823,`span`,33),Mk(824,` p-size`),_u(825,`br`),Kg()()(),Jc(826,`td`,27)(827,`code`,34),Mk(828,`string`),Kg()(),Jc(829,`td`,29)(830,`p`)(831,`code`),Mk(832,`medium`),Kg()()(),Jc(833,`td`,30)(834,`em`)(835,`strong`),Mk(836,`(opcional)`),Kg()(),Jc(837,`p`),Mk(838,`Define o tamanho dos radios do componente:`),Kg(),Jc(839,`ul`)(840,`li`)(841,`code`),Mk(842,`small`),Kg(),Mk(843,`: 16x16 (disponível apenas para acessibilidade AA).`),Kg(),Jc(844,`li`)(845,`code`),Mk(846,`medium`),Kg(),Mk(847,`: 24x24.`),Kg()(),Jc(848,`blockquote`)(849,`p`),Mk(850,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Jc(851,`code`),Mk(852,`medium`),Kg(),Mk(853,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Jc(854,`a`,60),Mk(855,`po-theme`),Kg(),Mk(856,`.`),Kg()()()()(),Jc(857,`h3`,18),Mk(858,`Métodos`),Kg(),Jc(859,`table`,61)(860,`tr`,62)(861,`th`,63)(862,`div`,32)(863,`h4`)(864,`span`,33),Mk(865,` focus `),Kg()()()()(),Jc(866,`tr`,30)(867,`td`,30)(868,`p`),Mk(869,`Função que atribui foco ao componente.`),Kg(),Jc(870,`p`),Mk(871,`Para utilizá-la é necessário ter a instância do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:`),Kg(),Jc(872,`pre`)(873,`code`),Mk(874,`import { PoRadioGroupComponent } from '@po-ui/ng-components';

...

@ViewChild(PoRadioGroupComponent, { static: true }) radio: PoRadioGroupComponent;

focusRadio() {
  this.radio.focus();
}
`),Kg()()()()(),_u(875,`br`),Jc(876,`table`,64)(877,`tr`,62)(878,`th`,63)(879,`div`,32)(880,`h4`)(881,`span`,33),Mk(882,` showAdditionalHelp `),Kg()()()()(),Jc(883,`tr`,30)(884,`td`,30)(885,`p`),Mk(886,`Método que exibe `),Jc(887,`code`),Mk(888,`p-helper`),Kg(),Mk(889,` ou executa a ação definida em `),Jc(890,`code`),Mk(891,`p-helper{eventOnClick}`),Kg(),Mk(892,` ou em `),Jc(893,`code`),Mk(894,`p-additionalHelp`),Kg(),Mk(895,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),Jc(896,`code`),Mk(897,`p-keydown`),Kg(),Mk(898,`.`),Kg(),Jc(899,`blockquote`)(900,`p`),Mk(901,`Exibe ou oculta o conteúdo do componente `),Jc(902,`code`),Mk(903,`po-helper`),Kg(),Mk(904,` quando o componente estiver com foco.`),Kg()(),Jc(905,`pre`)(906,`code`),Mk(907,`// Exemplo com p-label e p-helper
<po-radio-group
 #radioGroup
 ...
 p-label="Label do radioGroup"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, radioGroup)"
></po-radio-group>
`),Kg()(),Jc(908,`pre`)(909,`code`),Mk(910,`...
onKeyDown(event: KeyboardEvent, inp: PoRadioGroupComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),Kg()()()()(),_u(911,`br`),Jc(912,`h3`),Mk(913,`Interfaces`),Kg(),Jc(914,`h4`,65)(915,`code`,5),Mk(916,`PoRadioGroupOption`),Kg()(),Jc(917,`div`,2)(918,`p`),Mk(919,`Interface para as ações do componente po-radio-group.`),Kg()(),Jc(920,`h4`,18),Mk(921,`Propriedades`),Kg(),Jc(922,`table`,19)(923,`tr`,20)(924,`th`,21),Mk(925,`Nome`),Kg(),Jc(926,`th`,21),Mk(927,`Tipo`),Kg(),Jc(928,`th`,21),Mk(929,`Descrição`),Kg()(),Jc(930,`tr`,66)(931,`td`,23)(932,`div`,32)(933,`span`,33),Mk(934,` disabled`),_u(935,`br`),Kg()()(),Jc(936,`td`,27)(937,`code`,36),Mk(938,`boolean`),Kg()(),Jc(939,`td`,30)(940,`em`)(941,`strong`),Mk(942,`(opcional)`),Kg()(),Jc(943,`p`),Mk(944,`Desabilita o radio.`),Kg()()(),Jc(945,`tr`,67)(946,`td`,23)(947,`div`,32)(948,`span`,33),Mk(949,` label`),_u(950,`br`),Kg()()(),Jc(951,`td`,27)(952,`code`,34),Mk(953,`string`),Kg()(),Jc(954,`td`,30)(955,`p`),Mk(956,`Texto do radio.`),Kg()()(),Jc(957,`tr`,68)(958,`td`,23)(959,`div`,32)(960,`span`,33),Mk(961,` value`),_u(962,`br`),Kg()()(),Jc(963,`td`,27)(964,`code`,34),Mk(965,`string `),Kg(),Jc(966,`code`,41),Mk(967,` number`),Kg()(),Jc(968,`td`,30)(969,`p`),Mk(970,`Valor do radio.`),Kg()()()()())},dependencies:[P],encapsulation:2,changeDetection:1})}return i})();function Fe(i,U){if(i&1&&(Jc(0,`div`,1),_u(1,`sample-po-radio-group-basic-view`)(2,`sample-po-radio-group-labs-view`)(3,`sample-po-radio-group-translator-view`)(4,`sample-po-radio-group-translator-reactive-form-view`),Kg()),i&2){let p=tk();Ab(`hidden`,p.activeTab!==`web`)}}var qe=[{path:``,component:(()=>{class i{route;router;sub;hidePoWebSample=!0;samplesLength=4;activeTab=`doc`;title=`Radio Group`;actions=[];toWeb={label:`Ver exemplos`,icon:`an an-browsers`,action:()=>this.changeTab(`web`)};toDoc={label:`Ver documentação`,icon:`an an-file-text`,action:()=>this.changeTab(`doc`)};back={label:`Voltar`,icon:`an an-arrow-left`,action:this.goBack.bind(this)};constructor(p,l){this.route=p,this.router=l}goBack(){this.router.navigate([`documentation`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(p=>{let l=p.view;this.hidePoWebSample=this.samplesLength===0,this.activeTab=this.hidePoWebSample?`doc`:l||`web`,this.title=`Radio Group · `+(this.activeTab===`web`?`Exemplos`:`Documentação`),this.actions=this.hidePoWebSample?[this.back]:[this.activeTab===`web`?this.toDoc:this.toWeb,this.back]})}changeTab(p){this.router.navigate([],{queryParams:{view:p},queryParamsHandling:`merge`})}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(l){return new(l||i)(I(ar),I(An))};static ɵcmp=Jn({type:i,selectors:[[`ng-component`]],standalone:!1,decls:4,vars:4,consts:[[`data-tour`,`component-page`,3,`p-title`,`p-actions`],[3,`hidden`]],template:function(l,n){l&1&&(Jc(0,`po-page-default`,0),LO(1,Fe,5,1,`div`,1),Jc(2,`div`,1),_u(3,`sample-po-radio-group-doc`),Kg()()),l&2&&(Ab(`p-title`,n.title)(`p-actions`,n.actions),wg(),jO(n.hidePoWebSample?-1:1),wg(),Ab(`hidden`,n.activeTab!==`doc`))},dependencies:[Mze,de,ue,ge,be,Se],encapsulation:2,changeDetection:1})}return i})()}];var xe=(()=>{class i{static ɵfac=function(l){return new(l||i)};static ɵmod=ge$1({type:i});static ɵinj=de$1({imports:[GV.forChild(qe),GV]})}return i})();var Et=(()=>{class i{static ɵfac=function(l){return new(l||i)};static ɵmod=ge$1({type:i});static ɵinj=de$1({imports:[M,xe]})}return i})();export{Et as DocPoRadioGroupModule};