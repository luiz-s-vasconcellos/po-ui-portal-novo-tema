import{$r as RK,Ai as Zn,Br as MK,C as G4,Ca as o0,Ci as Xx,Ga as vo,Ia as rg,Ii as ab,Jr as Ok,Ka as vx,La as sb,Li as b,Mi as __,Mn as ure,Nr as I1,Oa as pe,Pa as r0,Qa as xF,Ra as uO,Sa as nu,Sn as ri,Tr as Fx,Ua as v_,Ut as ea,Xa as wg,_r as Dx,_t as Vze,aa as ir,ai as SO,ca as jc,di as UE,f as Bl,fr as DO,ha as lO,ii as SK,io as yo,ir as Ax,li as TO,ln as lre,mt as V4,oa as iu,oi as Sn,ri as SF,rr as Ag,sr as Bx,tt as Qte,wt as Xoe,x as Ff,ya as mt,yi as Wk,za as ue$1}from"./chunk-CtaZqRb_.js";import{n as P,t as M}from"./main-ZQ7GH27Y.js";var ce=(()=>{class i{static ɵfac=function(l){return new(l||i)};static ɵcmp=Zn({type:i,selectors:[[`sample-po-checkbox-basic`]],standalone:!1,decls:1,vars:0,consts:[[`name`,`checkbox`,`p-label`,`PO Checkbox`]],template:function(l,o){l&1&&nu(0,`po-checkbox`,0)},dependencies:[Bl],encapsulation:2,changeDetection:1})}return i})();var fe=i=>({"docs-sample-code-tabs":i});var se=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||i)};static ɵcmp=Zn({type:i,selectors:[[`sample-po-checkbox-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,o){l&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),lO(3,`PO Checkbox Basic`),wg(),jc(4,`a`,2),mt(`click`,function(){return o.toggleSampleCodeTabs()}),nu(5,`span`),lO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),lO(12,`sample-po-checkbox-basic/sample-po-checkbox-basic.component.html`),wg(),jc(13,`pre`,7),lO(14,`<po-checkbox name="checkbox" p-label="PO Checkbox"> </po-checkbox>
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),lO(18,`sample-po-checkbox-basic/sample-po-checkbox-basic.component.ts`),wg(),jc(19,`pre`,9),lO(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-checkbox-basic',
  templateUrl: './sample-po-checkbox-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoCheckboxBasicComponent {}
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-checkbox-basic`),wg(),nu(23,`hr`)),l&2&&(rg(5),Xx(`po-icon `+o.sampleCodeButtonIcon),rg(),Ag(` `,o.sampleCodeButtonLabel),rg(),UE(`ngClass`,DO(4,fe,o.hideSampleCodeTabs)))},dependencies:[Ok,P,lre,ure,ce],encapsulation:2,changeDetection:1})}return i})();var ue=(()=>{class i{helperText;checkbox;disabled;help;size;event;label;labelTextWrap;compactLabel;sizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`},{label:`large`,value:`large`}];ngOnInit(){this.restore()}changeEvent(m){this.event=m}restore(){this.helperText=``,this.checkbox=void 0,this.disabled=!1,this.event=void 0,this.help=``,this.label=void 0,this.size=`medium`,this.compactLabel=!1}static ɵfac=function(l){return new(l||i)};static ɵcmp=Zn({type:i,selectors:[[`sample-po-checkbox-labs`]],standalone:!1,decls:19,vars:20,consts:[[`f`,`ngForm`],[`name`,`checkbox`,3,`ngModelChange`,`p-change`,`p-change-model`,`p-keydown`,`ngModel`,`p-helper`,`p-disabled`,`p-help`,`p-label`,`p-size`,`p-label-text-wrap`,`p-compact-label`],[1,`po-row`],[`p-label`,`Model`,1,`po-md-6`,3,`p-value`],[`p-label`,`Event`,1,`po-md-6`,3,`p-value`],[`name`,`label`,`p-label`,`Label`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`help`,`p-clean`,``,`p-label`,`Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`helperText`,`p-clean`,``,`p-label`,`Additional Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`disabled`,`p-label`,`Disabled`,1,`po-sm-3`,3,`ngModelChange`,`ngModel`],[`name`,`labelTextWrap`,`p-label`,`Label Text Wrap`,1,`po-sm-3`,3,`ngModelChange`,`ngModel`],[`name`,`compactLabel`,`p-label`,`Compact Label`,1,`po-sm-3`,3,`ngModelChange`,`ngModel`],[`name`,`size`,`p-columns`,`4`,`p-label`,`Size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`]],template:function(l,o){if(l&1){let d=Ax();jc(0,`po-checkbox`,1),r0(),ab(`ngModelChange`,function(r){return v_(d),uO(o.checkbox,r)||(o.checkbox=r),__(r)}),mt(`p-change`,function(){return o.changeEvent(`p-change`)})(`p-change-model`,function(){return o.changeEvent(`p-change-model`)})(`p-keydown`,function(){return o.changeEvent(`p-keydown`)}),wg(),nu(1,`po-divider`),jc(2,`div`,2),nu(3,`po-info`,3),SO(4,`json`),nu(5,`po-info`,4),wg(),nu(6,`po-divider`),jc(7,`form`,null,0)(9,`div`,2)(10,`po-input`,5),r0(),ab(`ngModelChange`,function(r){return v_(d),uO(o.label,r)||(o.label=r),__(r)}),wg(),jc(11,`po-input`,6),r0(),ab(`ngModelChange`,function(r){return v_(d),uO(o.help,r)||(o.help=r),__(r)}),wg(),jc(12,`po-input`,7),r0(),ab(`ngModelChange`,function(r){return v_(d),uO(o.helperText,r)||(o.helperText=r),__(r)}),wg(),jc(13,`po-switch`,8),r0(),ab(`ngModelChange`,function(r){return v_(d),uO(o.disabled,r)||(o.disabled=r),__(r)}),wg(),jc(14,`po-switch`,9),r0(),ab(`ngModelChange`,function(r){return v_(d),uO(o.labelTextWrap,r)||(o.labelTextWrap=r),__(r)}),wg(),jc(15,`po-switch`,10),r0(),ab(`ngModelChange`,function(r){return v_(d),uO(o.compactLabel,r)||(o.compactLabel=r),__(r)}),wg(),jc(16,`po-radio-group`,11),r0(),ab(`ngModelChange`,function(r){return v_(d),uO(o.size,r)||(o.size=r),__(r)}),wg()(),jc(17,`div`,2)(18,`po-button`,12),mt(`p-click`,function(){return o.restore()}),wg()()()}l&2&&(sb(`ngModel`,o.checkbox),UE(`p-helper`,o.helperText)(`p-disabled`,o.disabled)(`p-help`,o.help)(`p-label`,o.label)(`p-size`,o.size)(`p-label-text-wrap`,o.labelTextWrap)(`p-compact-label`,o.compactLabel),o0(),rg(3),UE(`p-value`,TO(4,18,o.checkbox)),rg(2),UE(`p-value`,o.event),rg(5),sb(`ngModel`,o.label),o0(),rg(),sb(`ngModel`,o.help),o0(),rg(),sb(`ngModel`,o.helperText),o0(),rg(),sb(`ngModel`,o.disabled),o0(),rg(),sb(`ngModel`,o.labelTextWrap),o0(),rg(),sb(`ngModel`,o.compactLabel),o0(),rg(),sb(`ngModel`,o.size),UE(`p-options`,o.sizeOptions),o0())},dependencies:[RK,SK,MK,xF,SF,ri,Ff,Bl,G4,Qte,V4,Xoe,Wk],encapsulation:2,changeDetection:1})}return i})();var we=i=>({"docs-sample-code-tabs":i});var he=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||i)};static ɵcmp=Zn({type:i,selectors:[[`sample-po-checkbox-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,o){l&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),lO(3,`PO Checkbox Labs`),wg(),jc(4,`a`,2),mt(`click`,function(){return o.toggleSampleCodeTabs()}),nu(5,`span`),lO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),lO(12,`sample-po-checkbox-labs/sample-po-checkbox-labs.component.html`),wg(),jc(13,`pre`,7),lO(14,`<po-checkbox
  name="checkbox"
  [(ngModel)]="checkbox"
  [p-helper]="helperText"
  [p-disabled]="disabled"
  [p-help]="help"
  [p-label]="label"
  [p-size]="size"
  (p-change)="changeEvent('p-change')"
  (p-change-model)="changeEvent('p-change-model')"
  (p-keydown)="changeEvent('p-keydown')"
  [p-label-text-wrap]="labelTextWrap"
  [p-compact-label]="compactLabel"
>
</po-checkbox>

<po-divider></po-divider>

<div class="po-row">
  <po-info class="po-md-6" p-label="Model" [p-value]="checkbox | json"> </po-info>

  <po-info class="po-md-6" p-label="Event" [p-value]="event"> </po-info>
</div>

<po-divider></po-divider>

<form #f="ngForm">
  <div class="po-row">
    <po-input class="po-md-6" name="label" [(ngModel)]="label" p-label="Label"> </po-input>

    <po-input class="po-md-6" name="help" [(ngModel)]="help" p-clean p-label="Help"> </po-input>

    <po-input class="po-md-6" name="helperText" [(ngModel)]="helperText" p-clean p-label="Additional Help"> </po-input>

    <po-switch class="po-sm-3" name="disabled" [(ngModel)]="disabled" p-label="Disabled"> </po-switch>
    <po-switch class="po-sm-3" name="labelTextWrap" [(ngModel)]="labelTextWrap" p-label="Label Text Wrap"> </po-switch>
    <po-switch class="po-sm-3" name="compactLabel" [(ngModel)]="compactLabel" p-label="Compact Label"> </po-switch>

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
  </div>

  <div class="po-row">
    <po-button class="po-lg-3 po-md-6" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</form>
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),lO(18,`sample-po-checkbox-labs/sample-po-checkbox-labs.component.ts`),wg(),jc(19,`pre`,9),lO(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { PoRadioGroupOption } from '@po-ui/ng-components';
@Component({
  selector: 'sample-po-checkbox-labs',
  templateUrl: './sample-po-checkbox-labs.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoCheckboxLabsComponent implements OnInit {
  helperText: string;
  checkbox: boolean | null;
  disabled: boolean;
  help: string;
  size: string;
  event: string;
  label: string;
  labelTextWrap: boolean;
  compactLabel: boolean;

  sizeOptions: Array<PoRadioGroupOption> = [
    { label: 'small', value: 'small' },
    { label: 'medium', value: 'medium' },
    { label: 'large', value: 'large' }
  ];

  ngOnInit() {
    this.restore();
  }

  changeEvent(event: string) {
    this.event = event;
  }

  restore() {
    this.helperText = '';
    this.checkbox = undefined;
    this.disabled = false;
    this.event = undefined;
    this.help = '';
    this.label = undefined;
    this.size = 'medium';
    this.compactLabel = false;
  }
}
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-checkbox-labs`),wg(),nu(23,`hr`)),l&2&&(rg(5),Xx(`po-icon `+o.sampleCodeButtonIcon),rg(),Ag(` `,o.sampleCodeButtonLabel),rg(),UE(`ngClass`,DO(4,we,o.hideSampleCodeTabs)))},dependencies:[Ok,P,lre,ure,ue],encapsulation:2,changeDetection:1})}return i})();var be=(()=>{class i{modalTerm;acceptance=!1;primaryAction={action:()=>{this.modalTerm.close()},disabled:!0,label:`Confirm`};static ɵfac=function(l){return new(l||i)};static ɵcmp=Zn({type:i,selectors:[[`sample-po-checkbox-acceptance-term`]],viewQuery:function(l,o){if(l&1&&iu(ea,7),l&2){let d;yo(d=vo())&&(o.modalTerm=d.first)}},standalone:!1,decls:23,vars:2,consts:[[`modalTerm`,``],[`p-label`,`View term`,3,`p-click`],[`p-title`,`Acceptance Term`,3,`p-primary-action`],[1,`po-row`],[1,`po-sm-12`],[1,`po-font-text-large-bold`],[1,`po-row`,`po-p-1`],[`name`,`acceptance`,`p-label`,`I have read and agree to the terms of service and privacy`,3,`ngModelChange`,`p-change`,`ngModel`]],template:function(l,o){if(l&1){let d=Ax();jc(0,`po-button`,1),mt(`p-click`,function(){v_(d);let r=Bx(2);return __(r.open())}),wg(),jc(1,`po-modal`,2,0)(3,`div`,3)(4,`div`,4)(5,`h3`,5),lO(6,`MIT License`),wg()(),jc(7,`div`,4)(8,`h4`),lO(9,`Copyright (c) 2019 PO UI`),wg()(),nu(10,`po-divider`,4),jc(11,`div`,4)(12,`p`),lO(13,` Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions: `),wg(),nu(14,`br`),jc(15,`p`),lO(16,` The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software. `),wg(),nu(17,`br`),jc(18,`p`),lO(19,` THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE. `),wg()()(),nu(20,`po-divider`),jc(21,`div`,6)(22,`po-checkbox`,7),r0(),ab(`ngModelChange`,function(r){return v_(d),uO(o.acceptance,r)||(o.acceptance=r),__(r)}),mt(`p-change`,function(){return o.primaryAction.disabled=!o.acceptance}),wg()()()}l&2&&(rg(),UE(`p-primary-action`,o.primaryAction),rg(21),sb(`ngModel`,o.acceptance),o0())},dependencies:[SK,xF,ri,Ff,Bl,ea],encapsulation:2,changeDetection:1})}return i})();var _e=i=>({"docs-sample-code-tabs":i});var Ee=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||i)};static ɵcmp=Zn({type:i,selectors:[[`sample-po-checkbox-acceptance-term-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,o){l&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),lO(3,`PO Checkbox - Acceptance Term`),wg(),jc(4,`a`,2),mt(`click`,function(){return o.toggleSampleCodeTabs()}),nu(5,`span`),lO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),lO(12,`sample-po-checkbox-acceptance-term/sample-po-checkbox-acceptance-term.component.html`),wg(),jc(13,`pre`,7),lO(14,`<po-button p-label="View term" (p-click)="modalTerm.open()"> </po-button>

<po-modal #modalTerm p-title="Acceptance Term" [p-primary-action]="primaryAction">
  <div class="po-row">
    <div class="po-sm-12">
      <h3 class="po-font-text-large-bold">MIT License</h3>
    </div>

    <div class="po-sm-12">
      <h4>Copyright (c) 2019 PO UI</h4>
    </div>

    <po-divider class="po-sm-12"></po-divider>

    <div class="po-sm-12">
      <p>
        Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated
        documentation files (the "Software"), to deal in the Software without restriction, including without limitation
        the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and
        to permit persons to whom the Software is furnished to do so, subject to the following conditions:
      </p>
      <br />
      <p>
        The above copyright notice and this permission notice shall be included in all copies or substantial portions of
        the Software.
      </p>
      <br />
      <p>
        THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO
        THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
        AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF
        CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
        DEALINGS IN THE SOFTWARE.
      </p>
    </div>
  </div>

  <po-divider></po-divider>

  <div class="po-row po-p-1">
    <po-checkbox
      name="acceptance"
      [(ngModel)]="acceptance"
      p-label="I have read and agree to the terms of service and privacy"
      (p-change)="primaryAction.disabled = !acceptance"
    >
    </po-checkbox>
  </div>
</po-modal>
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),lO(18,`sample-po-checkbox-acceptance-term/sample-po-checkbox-acceptance-term.component.ts`),wg(),jc(19,`pre`,9),lO(20,`import { Component, ViewChild, ChangeDetectionStrategy } from '@angular/core';

import { PoModalAction, PoModalComponent } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-checkbox-acceptance-term',
  templateUrl: './sample-po-checkbox-acceptance-term.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoCheckboxAcceptanceTermComponent {
  @ViewChild(PoModalComponent, { static: true }) modalTerm: PoModalComponent;

  acceptance: boolean = false;

  primaryAction: PoModalAction = {
    action: () => {
      this.modalTerm.close();
    },
    disabled: true,
    label: 'Confirm'
  };
}
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-checkbox-acceptance-term`),wg(),nu(23,`hr`)),l&2&&(rg(5),Xx(`po-icon `+o.sampleCodeButtonIcon),rg(),Ag(` `,o.sampleCodeButtonLabel),rg(),UE(`ngClass`,DO(4,_e,o.hideSampleCodeTabs)))},dependencies:[Ok,P,lre,ure,be],encapsulation:2,changeDetection:1})}return i})();var xe=(()=>{class i{static ɵfac=function(l){return new(l||i)};static ɵcmp=Zn({type:i,selectors:[[`sample-po-checkbox-doc`]],standalone:!1,decls:735,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://www.w3.org/WAI/WCAG21/Understanding/name-role-value`],[`href`,`https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance-enhanced`],[`href`,`https://www.w3.org/WAI/WCAG21/Understanding/use-of-color`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[1,`docs-api-deprecated-marker`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[`pan`,``,1,`docs-api-property-type`,`string`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`pan`,``,1,`docs-api-property-type`,`PoHelperOptions`],[`href`,`https://po-ui.io/documentation/po-helper`],[`href`,`https://po-ui.io/documentation/po-theme`],[1,`docs-api-method-table`],[`colspan`,`2`,1,`docs-api-properties-name-cell`]],template:function(l,o){l&1&&(jc(0,`div`,0)(1,`p`,1)(2,`code`),lO(3,`import { PoFieldModule } from '@po-ui/ng-components';`),wg()(),jc(4,`div`,2)(5,`p`),lO(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-timepicker, po-upload, po-url e po-search-ai.`),wg(),jc(7,`blockquote`)(8,`p`),lO(9,`Não esqueça de importar o módulo `),jc(10,`code`),lO(11,`FormsModule`),wg(),lO(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),jc(13,`code`),lO(14,`ReactiveFormsModule`),wg(),lO(15,`, ambos nativos do Angular.`),wg()()(),jc(16,`h3`,3),lO(17,`Componente`),wg(),jc(18,`h4`,4)(19,`code`,5),lO(20,`PoCheckboxComponent`),wg()(),jc(21,`div`,2)(22,`p`),lO(23,`O componente `),jc(24,`code`),lO(25,`po-checkbox`),wg(),lO(26,` exibe uma caixa de op\xE7\xE3o com um texto ao lado, na qual \xE9 poss\xEDvel marcar e desmarcar atrav\xE9s tanto
no `),jc(27,`em`),lO(28,`click`),wg(),lO(29,` do `),jc(30,`em`),lO(31,`mouse`),wg(),lO(32,` quanto por meio da tecla `),jc(33,`em`),lO(34,`space`),wg(),lO(35,` quando estiver com foco.`),wg(),jc(36,`p`),lO(37,`Cada op\xE7\xE3o poder\xE1 receber um estado de marcado, desmarcado, indeterminado/mixed e desabilitado, como tamb\xE9m uma a\xE7\xE3o que ser\xE1 disparada quando
ocorrer mudan\xE7as do valor.`),wg(),jc(38,`blockquote`)(39,`p`),lO(40,`O `),jc(41,`em`),lO(42,`model`),wg(),lO(43,` deste componente aceitará valores igual à `),jc(44,`code`),lO(45,`true`),wg(),lO(46,`, `),jc(47,`code`),lO(48,`false`),wg(),lO(49,` ou `),jc(50,`code`),lO(51,`null`),wg(),lO(52,` para quando for indeterminado/mixed.`),wg()(),jc(53,`p`)(54,`strong`),lO(55,`Acessibilidade tratada no componente:`),wg()(),jc(56,`p`),lO(57,`Algumas diretrizes de acessibilidade já são tratadas no componente, internamente, e não podem ser alteradas pelo proprietário do conteúdo. São elas:`),wg(),jc(58,`ul`)(59,`li`),lO(60,`O componente foi desenvolvido utilizando controles padrões HTML para permitir a identificação do mesmo na interface por tecnologias assistivas. `),jc(61,`a`,6),lO(62,`WCAG 4.1.2: Name, Role, Value`),wg()(),jc(63,`li`),lO(64,`A área do foco precisar ter uma espessura de pelo menos 2 pixels CSS e o foco não pode ficar escondido por outros elementos da tela. `),jc(65,`a`,7),lO(66,`WCAG 2.4.12: Focus Appearance`),wg()(),jc(67,`li`),lO(68,`A cor não deve ser o único meio para diferenciar o componente do seu estado marcado e desmarcado. `),jc(69,`a`,8),lO(70,`WGAG 1.4.1: Use of Color, 3.2.4: Consistent Identification`),wg()()(),jc(71,`h4`),lO(72,`Tokens customizáveis`),wg(),jc(73,`p`),lO(74,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),wg(),jc(75,`blockquote`)(76,`p`),lO(77,`Para maiores informações, acesse o guia `),jc(78,`a`,9),lO(79,`Personalizando o Tema Padrão com Tokens CSS`),wg(),lO(80,`.`),wg()(),jc(81,`table`)(82,`thead`)(83,`tr`)(84,`th`),lO(85,`Propriedade`),wg(),jc(86,`th`),lO(87,`Descrição`),wg(),jc(88,`th`),lO(89,`Valor Padrão`),wg()()(),jc(90,`tbody`)(91,`tr`)(92,`td`)(93,`strong`),lO(94,`Default Values`),wg()(),nu(95,`td`)(96,`td`),wg(),jc(97,`tr`)(98,`td`)(99,`code`),lO(100,`--border-color`),wg()(),jc(101,`td`),lO(102,`Cor da borda`),wg(),jc(103,`td`)(104,`code`),lO(105,`var(--color-neutral-dark-70)`),wg()()(),jc(106,`tr`)(107,`td`)(108,`code`),lO(109,`--color-unchecked`),wg()(),jc(110,`td`),lO(111,`Cor quando não selecionado`),wg(),jc(112,`td`)(113,`code`),lO(114,`var(--color-neutral-light-00)`),wg()()(),jc(115,`tr`)(116,`td`)(117,`code`),lO(118,`--color-checked`),wg()(),jc(119,`td`),lO(120,`Cor quando selecionado`),wg(),jc(121,`td`)(122,`code`),lO(123,`var(--color-action-default)`),wg()()(),jc(124,`tr`)(125,`td`)(126,`code`),lO(127,`--field-container-title-justify`),wg()(),jc(128,`td`),lO(129,`Alinhamento horizontal do título (`),jc(130,`code`),lO(131,`justify-content`),wg(),lO(132,`)`),wg(),jc(133,`td`)(134,`code`),lO(135,`space-between`),wg()()(),jc(136,`tr`)(137,`td`)(138,`code`),lO(139,`--field-container-title-flex`),wg()(),jc(140,`td`),lO(141,`Flex do título (`),jc(142,`code`),lO(143,`flex`),wg(),lO(144,`)`),wg(),jc(145,`td`)(146,`code`),lO(147,`1 auto`),wg()()(),jc(148,`tr`)(149,`td`)(150,`strong`),lO(151,`Hover`),wg()(),nu(152,`td`)(153,`td`),wg(),jc(154,`tr`)(155,`td`)(156,`code`),lO(157,`--color-hover`),wg()(),jc(158,`td`),lO(159,`Cor principal no estado hover`),wg(),jc(160,`td`)(161,`code`),lO(162,`var(--color-action-hover)`),wg()()(),jc(163,`tr`)(164,`td`)(165,`code`),lO(166,`--shadow-color-hover`),wg()(),jc(167,`td`),lO(168,`Cor da sombra no estado hover`),wg(),jc(169,`td`)(170,`code`),lO(171,`var(--color-brand-01-lighter)`),wg()()(),jc(172,`tr`)(173,`td`)(174,`strong`),lO(175,`Focused`),wg()(),nu(176,`td`)(177,`td`),wg(),jc(178,`tr`)(179,`td`)(180,`code`),lO(181,`--outline-color-focused`),wg()(),jc(182,`td`),lO(183,`Cor do outline do estado de focus`),wg(),jc(184,`td`)(185,`code`),lO(186,`var(--color-action-focus)`),wg()()(),jc(187,`tr`)(188,`td`)(189,`strong`),lO(190,`Disabled`),wg()(),nu(191,`td`)(192,`td`),wg(),jc(193,`tr`)(194,`td`)(195,`code`),lO(196,`--color-unchecked-disabled`),wg(),lO(197,` \xA0`),wg(),jc(198,`td`),lO(199,`Cor pricipal quando não selecionado no estado disabled\xA0`),wg(),jc(200,`td`)(201,`code`),lO(202,`var(--color-action-disabled)`),wg()()(),jc(203,`tr`)(204,`td`)(205,`code`),lO(206,`--color-checked-disabled`),wg(),lO(207,` \xA0`),wg(),jc(208,`td`),lO(209,`Cor pricipal quando selecionado no estado disabled`),wg(),jc(210,`td`)(211,`code`),lO(212,`var(--color-neutral-dark-70)`),wg()()()()()(),jc(213,`div`,10)(214,`h4`,11),lO(215,`Seletor`),wg(),jc(216,`pre`,12),lO(217,`<po-checkbox
    (p-additional-help)="EventEmitter"
    p-additional-help-tooltip="string"
    p-append-in-body="boolean"
    p-auto-focus="boolean"
    (p-blur)="EventEmitter"
    (p-change)="EventEmitter"
    (p-change-model)="EventEmitter"
    p-compact-label="boolean"
    p-disabled="boolean"
    p-help="string"
    (p-keydown)="EventEmitter"
    p-label="string"
    p-label-text-wrap="boolean"
    name="string"
    p-helper="PoHelperOptions | string"
    p-size="string" >
</po-checkbox>
`),wg()(),jc(218,`h4`,13),lO(219,`Propriedades`),wg(),jc(220,`table`,14)(221,`tr`,15)(222,`th`,16),lO(223,`Nome`),wg(),jc(224,`th`,16),lO(225,`Tipo`),wg(),jc(226,`th`,16),lO(227,`Padrão`),wg(),jc(228,`th`,16),lO(229,`Descrição`),wg()(),jc(230,`tr`,17)(231,`td`,18)(232,`div`,19)(233,`span`,20),lO(234,` (p-additional-help)`),nu(235,`br`),wg()(),jc(236,`div`,21),lO(237,`Deprecated`),wg()(),jc(238,`td`,22)(239,`code`,23),lO(240,`EventEmitter`),wg()(),jc(241,`td`,24),lO(242,`-`),wg(),jc(243,`td`,25)(244,`em`)(245,`strong`),lO(246,`(opcional)`),wg()(),jc(247,`p`),lO(248,`Evento disparado ao clicar no ícone de ajuda adicional.`),wg(),jc(249,`blockquote`)(250,`p`),lO(251,`Essa propriedade está `),jc(252,`strong`),lO(253,`depreciada`),wg(),lO(254,` e será removida na versão `),jc(255,`code`),lO(256,`23.x.x`),wg(),lO(257,`. Recomendamos utilizar a propriedade `),jc(258,`code`),lO(259,`p-helper`),wg(),lO(260,` que oferece mais recursos e flexibilidade.`),wg()()()(),jc(261,`tr`,17)(262,`td`,18)(263,`div`,26)(264,`span`,27),lO(265,` p-additional-help-tooltip`),nu(266,`br`),wg()(),jc(267,`div`,21),lO(268,`Deprecated`),wg()(),jc(269,`td`,22)(270,`code`,28),lO(271,`string`),wg()(),jc(272,`td`,24),lO(273,`-`),wg(),jc(274,`td`,25)(275,`em`)(276,`strong`),lO(277,`(opcional)`),wg()(),jc(278,`p`),lO(279,`Exibe um ícone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente `),jc(280,`code`),lO(281,`po-helper`),wg(),lO(282,`.
`),jc(283,`strong`),lO(284,`Como boa prática, indica-se utilizar um texto com até 140 caracteres.`),wg()(),jc(285,`blockquote`)(286,`p`),lO(287,`Requer um recuo mínimo de 8px se o componente estiver próximo à lateral da tela.`),wg()(),jc(288,`blockquote`)(289,`p`),lO(290,`Essa propriedade está `),jc(291,`strong`),lO(292,`depreciada`),wg(),lO(293,` e será removida na versão `),jc(294,`code`),lO(295,`23.x.x`),wg(),lO(296,`. Recomendamos utilizar a propriedade `),jc(297,`code`),lO(298,`p-helper`),wg(),lO(299,` que oferece mais recursos e flexibilidade.`),wg()()()(),jc(300,`tr`,17)(301,`td`,18)(302,`div`,26)(303,`span`,27),lO(304,` p-append-in-body`),nu(305,`br`),wg()()(),jc(306,`td`,22)(307,`code`,29),lO(308,`boolean`),wg()(),jc(309,`td`,24)(310,`p`)(311,`code`),lO(312,`false`),wg()()(),jc(313,`td`,25)(314,`em`)(315,`strong`),lO(316,`(opcional)`),wg()(),jc(317,`p`),lO(318,`Define que o popover (`),jc(319,`code`),lO(320,`p-helper`),wg(),lO(321,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o dentro do componente. Essa
op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow escondido, garantindo o
posicionamento correto do tooltip pr\xF3ximo ao elemento.`),wg(),jc(322,`blockquote`)(323,`p`),lO(324,`Quando utilizado com `),jc(325,`code`),lO(326,`p-helper`),wg(),lO(327,`, leitores de tela como o NVDA podem não ler o conteúdo do popover.`),wg()()()(),jc(328,`tr`,17)(329,`td`,18)(330,`div`,26)(331,`span`,27),lO(332,` p-auto-focus`),nu(333,`br`),wg()()(),jc(334,`td`,22)(335,`code`,29),lO(336,`boolean`),wg()(),jc(337,`td`,24)(338,`p`)(339,`code`),lO(340,`false`),wg()()(),jc(341,`td`,25)(342,`em`)(343,`strong`),lO(344,`(opcional)`),wg()(),jc(345,`p`),lO(346,`Aplica foco no elemento ao ser iniciado.`),wg(),jc(347,`blockquote`)(348,`p`),lO(349,`Caso mais de um elemento seja configurado com essa propriedade, apenas o último elemento declarado com ela terá o foco.`),wg()()()(),jc(350,`tr`,17)(351,`td`,18)(352,`div`,19)(353,`span`,20),lO(354,` (p-blur)`),nu(355,`br`),wg()()(),jc(356,`td`,22)(357,`code`,23),lO(358,`EventEmitter`),wg()(),jc(359,`td`,24),lO(360,`-`),wg(),jc(361,`td`,25)(362,`em`)(363,`strong`),lO(364,`(opcional)`),wg()(),jc(365,`p`),lO(366,`Evento disparado ao sair do campo.`),wg()()(),jc(367,`tr`,17)(368,`td`,18)(369,`div`,19)(370,`span`,20),lO(371,` (p-change)`),nu(372,`br`),wg()()(),jc(373,`td`,22)(374,`code`,23),lO(375,`EventEmitter`),wg()(),jc(376,`td`,24),lO(377,`-`),wg(),jc(378,`td`,25)(379,`em`)(380,`strong`),lO(381,`(opcional)`),wg()(),jc(382,`p`),lO(383,`Evento disparado quando o valor do `),jc(384,`em`),lO(385,`checkbox`),wg(),lO(386,` for alterado.`),wg()()(),jc(387,`tr`,17)(388,`td`,18)(389,`div`,19)(390,`span`,20),lO(391,` (p-change-model)`),nu(392,`br`),wg()()(),jc(393,`td`,22)(394,`code`,23),lO(395,`EventEmitter`),wg()(),jc(396,`td`,24),lO(397,`-`),wg(),jc(398,`td`,25)(399,`em`)(400,`strong`),lO(401,`(opcional)`),wg()(),jc(402,`p`),lO(403,`Evento disparado sempre que o valor do model \xE9 alterado, seja por intera\xE7\xE3o do usu\xE1rio
ou por atualiza\xE7\xE3o program\xE1tica (ex: `),jc(404,`code`),lO(405,`setValue`),wg(),lO(406,`, `),jc(407,`code`),lO(408,`patchValue`),wg(),lO(409,`, carregamento assíncrono).`),wg(),jc(410,`p`),lO(411,`Diferentemente do `),jc(412,`code`),lO(413,`p-change`),wg(),lO(414,`, que \xE9 disparado apenas por intera\xE7\xE3o do usu\xE1rio,
o `),jc(415,`code`),lO(416,`p-change-model`),wg(),lO(417,` cobre todos os cenários de alteração de valor.`),wg(),jc(418,`p`),lO(419,`Não emite quando o novo valor é idêntico ao anterior (deduplicação automática).`),wg()()(),jc(420,`tr`,17)(421,`td`,18)(422,`div`,26)(423,`span`,27),lO(424,` p-compact-label`),nu(425,`br`),wg()()(),jc(426,`td`,22)(427,`code`,29),lO(428,`boolean`),wg()(),jc(429,`td`,24)(430,`p`)(431,`code`),lO(432,`false`),wg()()(),jc(433,`td`,25)(434,`em`)(435,`strong`),lO(436,`(opcional)`),wg()(),jc(437,`p`),lO(438,`Define se o título do campo será exibido de forma compacta.`),wg(),jc(439,`p`),lO(440,`Quando habilitado (`),jc(441,`code`),lO(442,`true`),wg(),lO(443,`), o modo compacto afeta o conjunto composto por:`),wg(),jc(444,`ul`)(445,`li`)(446,`code`),lO(447,`po-label`),wg()(),jc(448,`li`)(449,`code`),lO(450,`p-requirement (showRequired)`),wg()(),jc(451,`li`)(452,`code`),lO(453,`po-helper`),wg()()(),jc(454,`p`),lO(455,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),wg(),jc(456,`p`),lO(457,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),wg(),jc(458,`ul`)(459,`li`)(460,`code`),lO(461,`--field-container-title-justify`),wg()(),jc(462,`li`)(463,`code`),lO(464,`--field-container-title-flex`),wg()()(),jc(465,`p`),lO(466,`Exemplo:`),wg(),jc(467,`pre`)(468,`code`),lO(469,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),wg()(),jc(470,`p`),lO(471,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),wg()()(),jc(472,`tr`,17)(473,`td`,18)(474,`div`,26)(475,`span`,27),lO(476,` p-disabled`),nu(477,`br`),wg()()(),jc(478,`td`,22)(479,`code`,29),lO(480,`boolean`),wg()(),jc(481,`td`,24)(482,`p`)(483,`code`),lO(484,`false`),wg()()(),jc(485,`td`,25)(486,`em`)(487,`strong`),lO(488,`(opcional)`),wg()(),jc(489,`p`),lO(490,`Define o estado do `),jc(491,`em`),lO(492,`checkbox`),wg(),lO(493,` como desabilitado.`),wg()()(),jc(494,`tr`,17)(495,`td`,18)(496,`div`,26)(497,`span`,27),lO(498,` p-help`),nu(499,`br`),wg()()(),jc(500,`td`,22)(501,`code`,28),lO(502,`string`),wg()(),jc(503,`td`,24),lO(504,`-`),wg(),jc(505,`td`,25)(506,`em`)(507,`strong`),lO(508,`(opcional)`),wg()(),jc(509,`p`),lO(510,`Texto de apoio do campo`),wg()()(),jc(511,`tr`,17)(512,`td`,18)(513,`div`,19)(514,`span`,20),lO(515,` (p-keydown)`),nu(516,`br`),wg()()(),jc(517,`td`,22)(518,`code`,23),lO(519,`EventEmitter`),wg()(),jc(520,`td`,24),lO(521,`-`),wg(),jc(522,`td`,25)(523,`em`)(524,`strong`),lO(525,`(opcional)`),wg()(),jc(526,`p`),lO(527,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),jc(528,`code`),lO(529,`KeyboardEvent`),wg(),lO(530,` com informações sobre a tecla.`),wg()()(),jc(531,`tr`,17)(532,`td`,18)(533,`div`,26)(534,`span`,27),lO(535,` p-label`),nu(536,`br`),wg()()(),jc(537,`td`,22)(538,`code`,28),lO(539,`string`),wg()(),jc(540,`td`,24),lO(541,`-`),wg(),jc(542,`td`,25)(543,`em`)(544,`strong`),lO(545,`(opcional)`),wg()(),jc(546,`p`),lO(547,`Texto de exibição do `),jc(548,`em`),lO(549,`checkbox`),wg(),lO(550,`.`),wg()()(),jc(551,`tr`,17)(552,`td`,18)(553,`div`,26)(554,`span`,27),lO(555,` p-label-text-wrap`),nu(556,`br`),wg()()(),jc(557,`td`,22)(558,`code`,29),lO(559,`boolean`),wg()(),jc(560,`td`,24)(561,`p`)(562,`code`),lO(563,`false`),wg()()(),jc(564,`td`,25)(565,`em`)(566,`strong`),lO(567,`(opcional)`),wg()(),jc(568,`p`),lO(569,`Habilita a quebra automática do texto da propriedade `),jc(570,`code`),lO(571,`p-label`),wg(),lO(572,`. Quando `),jc(573,`code`),lO(574,`p-label-text-wrap`),wg(),lO(575,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),wg()()(),jc(576,`tr`,17)(577,`td`,18)(578,`div`,26)(579,`span`,27),lO(580,` name`),nu(581,`br`),wg()()(),jc(582,`td`,22)(583,`code`,28),lO(584,`string`),wg()(),jc(585,`td`,24),lO(586,`-`),wg(),jc(587,`td`,25)(588,`p`),lO(589,`Define o nome do `),jc(590,`em`),lO(591,`checkbox`),wg(),lO(592,`.`),wg()()(),jc(593,`tr`,17)(594,`td`,18)(595,`div`,26)(596,`span`,27),lO(597,` p-helper`),nu(598,`br`),wg()()(),jc(599,`td`,22)(600,`code`,30),lO(601,`PoHelperOptions `),wg(),jc(602,`code`,28),lO(603,` string`),wg()(),jc(604,`td`,24),lO(605,`-`),wg(),jc(606,`td`,25)(607,`em`)(608,`strong`),lO(609,`(opcional)`),wg()(),jc(610,`p`),lO(611,`Define as opções do componente de ajuda (po-helper) que será exibido ao lado do label quando a propriedade `),jc(612,`code`),lO(613,`p-label`),wg(),lO(614,` for definida, ou, ao lado do componente na ausência da propriedade `),jc(615,`code`),lO(616,`p-label`),wg(),lO(617,`.`),wg(),jc(618,`blockquote`)(619,`p`),lO(620,`Para mais informações acesse: `),jc(621,`a`,31),lO(622,`https://po-ui.io/documentation/po-helper`),wg(),lO(623,`.`),wg()(),jc(624,`blockquote`)(625,`p`),lO(626,`Ao configurar esta propriedade, o antigo ícone de ajuda adicional (`),jc(627,`code`),lO(628,`p-additional-help-tooltip`),wg(),lO(629,` e `),jc(630,`code`),lO(631,`p-additional-help`),wg(),lO(632,`) será ignorado.`),wg()()()(),jc(633,`tr`,17)(634,`td`,18)(635,`div`,26)(636,`span`,27),lO(637,` p-size`),nu(638,`br`),wg()()(),jc(639,`td`,22)(640,`code`,28),lO(641,`string`),wg()(),jc(642,`td`,24)(643,`p`)(644,`code`),lO(645,`medium`),wg()()(),jc(646,`td`,25)(647,`em`)(648,`strong`),lO(649,`(opcional)`),wg()(),jc(650,`p`),lO(651,`Define o tamanho da caixa de seleção do componente:`),wg(),jc(652,`ul`)(653,`li`)(654,`code`),lO(655,`small`),wg(),lO(656,`: 16x16 (disponível apenas para acessibilidade AA).`),wg(),jc(657,`li`)(658,`code`),lO(659,`medium`),wg(),lO(660,`: 24x24.`),wg(),jc(661,`li`)(662,`code`),lO(663,`large`),wg(),lO(664,`: 32x32.`),wg()(),jc(665,`blockquote`)(666,`p`),lO(667,`Caso a acessibilidade AA não esteja configurada, o tamanho `),jc(668,`code`),lO(669,`medium`),wg(),lO(670,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),jc(671,`a`,32),lO(672,`po-theme`),wg(),lO(673,`.`),wg()()()()(),jc(674,`h3`,13),lO(675,`Métodos`),wg(),jc(676,`table`,33)(677,`tr`,17)(678,`th`,34)(679,`div`,26)(680,`h4`)(681,`span`,27),lO(682,` focus `),wg()()()()(),jc(683,`tr`,25)(684,`td`,25)(685,`p`),lO(686,`Função que atribui foco ao `),jc(687,`em`),lO(688,`checkbox`),wg(),lO(689,`.`),wg(),jc(690,`p`),lO(691,`Para utilizá-la é necessário capturar a referência do componente no DOM através do `),jc(692,`code`),lO(693,`ViewChild`),wg(),lO(694,`, como por exemplo:`),wg(),jc(695,`pre`)(696,`code`),lO(697,`...
import { ViewChild } from '@angular/core';
import { PoCheckboxComponent } from '@po-ui/ng-components';

...

@ViewChild(PoCheckboxComponent, { static: true }) checkbox: PoCheckboxComponent;

focusCheckbox() {
  this.checkbox.focus();
}
`),wg()()()()(),nu(698,`br`),jc(699,`table`,33)(700,`tr`,17)(701,`th`,34)(702,`div`,26)(703,`h4`)(704,`span`,27),lO(705,` showAdditionalHelp `),wg()()()()(),jc(706,`tr`,25)(707,`td`,25)(708,`p`),lO(709,`Método que exibe `),jc(710,`code`),lO(711,`p-helper`),wg(),lO(712,` ou executa a ação definida em `),jc(713,`code`),lO(714,`p-helper{eventOnClick}`),wg(),lO(715,` ou em `),jc(716,`code`),lO(717,`p-additionalHelp`),wg(),lO(718,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),jc(719,`code`),lO(720,`p-keydown`),wg(),lO(721,`.`),wg(),jc(722,`blockquote`)(723,`p`),lO(724,`Exibe ou oculta o conteúdo do componente `),jc(725,`code`),lO(726,`po-helper`),wg(),lO(727,` quando o componente estiver com foco.`),wg()(),jc(728,`pre`)(729,`code`),lO(730,`//Exemplo com label e p-helper
<po-checkbox
 #checkbox
 ...
 p-label="Label do checkbox"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, checkbox)"
></po-checkbox>
`),wg()(),jc(731,`pre`)(732,`code`),lO(733,`...
onKeyDown(event: KeyboardEvent, inp: PoCheckboxComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),wg()()()()(),nu(734,`br`),wg())},dependencies:[P],encapsulation:2,changeDetection:1})}return i})();function Me(i,Ie){if(i&1){let m=Ax();jc(0,`po-tab`,4),mt(`p-click`,function(){v_(m);let o=Fx();return __(o.changeTab(`web`))}),nu(1,`sample-po-checkbox-basic-view`)(2,`sample-po-checkbox-labs-view`)(3,`sample-po-checkbox-acceptance-term-view`),wg()}if(i&2){let m=Fx();UE(`p-active`,m.activeTab===`web`)}}var Oe=[{path:``,component:(()=>{class i{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(m,l){this.route=m,this.router=l}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(m=>{let l=m.view;this.activeTab=l||(this.samplesLength>0?`web`:`doc`),this.hidePoWebSample=this.samplesLength===0})}changeTab(m){this.router.navigate([],{queryParams:{view:m},queryParamsHandling:`merge`}),this.activeTab=m}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(l){return new(l||i)(b(ir),b(Sn))};static ɵcmp=Zn({type:i,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:3,consts:[[`p-title`,`Checkbox`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Exemplos`,3,`p-active`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-active`]],template:function(l,o){l&1&&(jc(0,`po-page-default`,0)(1,`po-tabs`,1),vx(2,Me,4,1,`po-tab`,2),jc(3,`po-tab`,3),mt(`p-click`,function(){return o.changeTab(`doc`)}),nu(4,`sample-po-checkbox-doc`),wg()()()),l&2&&(UE(`p-actions`,o.actions),rg(2),Dx(o.hidePoWebSample?-1:2),rg(),UE(`p-active`,o.activeTab===`doc`))},dependencies:[Vze,lre,ure,se,he,Ee,xe],encapsulation:2,changeDetection:1})}return i})()}];var ge=(()=>{class i{static ɵfac=function(l){return new(l||i)};static ɵmod=pe({type:i});static ɵinj=ue$1({imports:[I1.forChild(Oe),I1]})}return i})();var it=(()=>{class i{static ɵfac=function(l){return new(l||i)};static ɵmod=pe({type:i});static ɵinj=ue$1({imports:[M,ge]})}return i})();export{it as DocPoCheckboxModule};