import{n as P,t as M}from"./main-G4GMLTOQ.js";import{$ as R4,Aa as qk,Ei as WV,Fr as Jc,H as Mze,Hi as ar,Hr as Kk,Ia as sk,Ii as ZO,Ji as eF,Li as Zb,Mi as Y0,Mn as tre,Mt as are,Nr as Ig,Oa as qL,Or as H_,Ot as Zte,P as Joe,Pr as JL,Ri as Zg,Rr as Jn,Ti as W0,U as Nf,Vi as _u,Vr as Kb,Yr as NZ,Zn as $_,Zr as No,an as j4,cr as Bk,ea as ge$1,eo as xo,er as Ab,fi as RZ,gi as Tk,hi as TZ,ir as BO,jr as I,no as yk,nr as An,pr as Cu,qa as vt,qi as de,rn as ia,ta as hF,tr as Ak,va as nk,vn as oi,vt as Ul,xi as VO,ya as nm}from"./chunk-BJubg121.js";var ce=(()=>{class i{static ɵfac=function(l){return new(l||i)};static ɵcmp=Jn({type:i,selectors:[[`sample-po-checkbox-basic`]],standalone:!1,decls:1,vars:0,consts:[[`name`,`checkbox`,`p-label`,`PO Checkbox`]],template:function(l,o){l&1&&_u(0,`po-checkbox`,0)},dependencies:[Ul],encapsulation:2,changeDetection:1})}return i})();var fe=i=>({"docs-sample-code-tabs":i});var se=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||i)};static ɵcmp=Jn({type:i,selectors:[[`sample-po-checkbox-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,o){l&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Checkbox Basic`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return o.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-checkbox-basic/sample-po-checkbox-basic.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<po-checkbox name="checkbox" p-label="PO Checkbox"> </po-checkbox>
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-checkbox-basic/sample-po-checkbox-basic.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-checkbox-basic',
  templateUrl: './sample-po-checkbox-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoCheckboxBasicComponent {}
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-checkbox-basic`),Zg(),_u(23,`hr`)),l&2&&(Ig(5),yk(`po-icon `+o.sampleCodeButtonIcon),Ig(),nm(` `,o.sampleCodeButtonLabel),Ig(),Ab(`ngClass`,Bk(4,fe,o.hideSampleCodeTabs)))},dependencies:[eF,P,tre,are,ce],encapsulation:2,changeDetection:1})}return i})();var ue=(()=>{class i{helperText;checkbox;disabled;help;size;event;label;labelTextWrap;compactLabel;sizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`},{label:`large`,value:`large`}];ngOnInit(){this.restore()}changeEvent(m){this.event=m}restore(){this.helperText=``,this.checkbox=void 0,this.disabled=!1,this.event=void 0,this.help=``,this.label=void 0,this.size=`medium`,this.compactLabel=!1}static ɵfac=function(l){return new(l||i)};static ɵcmp=Jn({type:i,selectors:[[`sample-po-checkbox-labs`]],standalone:!1,decls:19,vars:20,consts:[[`f`,`ngForm`],[`name`,`checkbox`,3,`ngModelChange`,`p-change`,`p-change-model`,`p-keydown`,`ngModel`,`p-helper`,`p-disabled`,`p-help`,`p-label`,`p-size`,`p-label-text-wrap`,`p-compact-label`],[1,`po-row`],[`p-label`,`Model`,1,`po-md-6`,3,`p-value`],[`p-label`,`Event`,1,`po-md-6`,3,`p-value`],[`name`,`label`,`p-label`,`Label`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`help`,`p-clean`,``,`p-label`,`Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`helperText`,`p-clean`,``,`p-label`,`Additional Help`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`disabled`,`p-label`,`Disabled`,1,`po-sm-3`,3,`ngModelChange`,`ngModel`],[`name`,`labelTextWrap`,`p-label`,`Label Text Wrap`,1,`po-sm-3`,3,`ngModelChange`,`ngModel`],[`name`,`compactLabel`,`p-label`,`Compact Label`,1,`po-sm-3`,3,`ngModelChange`,`ngModel`],[`name`,`size`,`p-columns`,`4`,`p-label`,`Size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`]],template:function(l,o){if(l&1){let d=ZO();Jc(0,`po-checkbox`,1),W0(),Zb(`ngModelChange`,function(r){return H_(d),Ak(o.checkbox,r)||(o.checkbox=r),$_(r)}),vt(`p-change`,function(){return o.changeEvent(`p-change`)})(`p-change-model`,function(){return o.changeEvent(`p-change-model`)})(`p-keydown`,function(){return o.changeEvent(`p-keydown`)}),Zg(),_u(1,`po-divider`),Jc(2,`div`,2),_u(3,`po-info`,3),qk(4,`json`),_u(5,`po-info`,4),Zg(),_u(6,`po-divider`),Jc(7,`form`,null,0)(9,`div`,2)(10,`po-input`,5),W0(),Zb(`ngModelChange`,function(r){return H_(d),Ak(o.label,r)||(o.label=r),$_(r)}),Zg(),Jc(11,`po-input`,6),W0(),Zb(`ngModelChange`,function(r){return H_(d),Ak(o.help,r)||(o.help=r),$_(r)}),Zg(),Jc(12,`po-input`,7),W0(),Zb(`ngModelChange`,function(r){return H_(d),Ak(o.helperText,r)||(o.helperText=r),$_(r)}),Zg(),Jc(13,`po-switch`,8),W0(),Zb(`ngModelChange`,function(r){return H_(d),Ak(o.disabled,r)||(o.disabled=r),$_(r)}),Zg(),Jc(14,`po-switch`,9),W0(),Zb(`ngModelChange`,function(r){return H_(d),Ak(o.labelTextWrap,r)||(o.labelTextWrap=r),$_(r)}),Zg(),Jc(15,`po-switch`,10),W0(),Zb(`ngModelChange`,function(r){return H_(d),Ak(o.compactLabel,r)||(o.compactLabel=r),$_(r)}),Zg(),Jc(16,`po-radio-group`,11),W0(),Zb(`ngModelChange`,function(r){return H_(d),Ak(o.size,r)||(o.size=r),$_(r)}),Zg()(),Jc(17,`div`,2)(18,`po-button`,12),vt(`p-click`,function(){return o.restore()}),Zg()()()}l&2&&(Kb(`ngModel`,o.checkbox),Ab(`p-helper`,o.helperText)(`p-disabled`,o.disabled)(`p-help`,o.help)(`p-label`,o.label)(`p-size`,o.size)(`p-label-text-wrap`,o.labelTextWrap)(`p-compact-label`,o.compactLabel),Y0(),Ig(3),Ab(`p-value`,Kk(4,18,o.checkbox)),Ig(2),Ab(`p-value`,o.event),Ig(5),Kb(`ngModel`,o.label),Y0(),Ig(),Kb(`ngModel`,o.help),Y0(),Ig(),Kb(`ngModel`,o.helperText),Y0(),Ig(),Kb(`ngModel`,o.disabled),Y0(),Ig(),Kb(`ngModel`,o.labelTextWrap),Y0(),Ig(),Kb(`ngModel`,o.compactLabel),Y0(),Ig(),Kb(`ngModel`,o.size),Ab(`p-options`,o.sizeOptions),Y0())},dependencies:[NZ,TZ,RZ,JL,qL,oi,Nf,Ul,j4,Zte,R4,Joe,hF],encapsulation:2,changeDetection:1})}return i})();var we=i=>({"docs-sample-code-tabs":i});var he=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||i)};static ɵcmp=Jn({type:i,selectors:[[`sample-po-checkbox-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,o){l&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Checkbox Labs`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return o.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-checkbox-labs/sample-po-checkbox-labs.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<po-checkbox
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
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-checkbox-labs/sample-po-checkbox-labs.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
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
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-checkbox-labs`),Zg(),_u(23,`hr`)),l&2&&(Ig(5),yk(`po-icon `+o.sampleCodeButtonIcon),Ig(),nm(` `,o.sampleCodeButtonLabel),Ig(),Ab(`ngClass`,Bk(4,we,o.hideSampleCodeTabs)))},dependencies:[eF,P,tre,are,ue],encapsulation:2,changeDetection:1})}return i})();var be=(()=>{class i{modalTerm;acceptance=!1;primaryAction={action:()=>{this.modalTerm.close()},disabled:!0,label:`Confirm`};static ɵfac=function(l){return new(l||i)};static ɵcmp=Jn({type:i,selectors:[[`sample-po-checkbox-acceptance-term`]],viewQuery:function(l,o){if(l&1&&Cu(ia,7),l&2){let d;No(d=xo())&&(o.modalTerm=d.first)}},standalone:!1,decls:23,vars:2,consts:[[`modalTerm`,``],[`p-label`,`View term`,3,`p-click`],[`p-title`,`Acceptance Term`,3,`p-primary-action`],[1,`po-row`],[1,`po-sm-12`],[1,`po-font-text-large-bold`],[1,`po-row`,`po-p-1`],[`name`,`acceptance`,`p-label`,`I have read and agree to the terms of service and privacy`,3,`ngModelChange`,`p-change`,`ngModel`]],template:function(l,o){if(l&1){let d=ZO();Jc(0,`po-button`,1),vt(`p-click`,function(){H_(d);let r=sk(2);return $_(r.open())}),Zg(),Jc(1,`po-modal`,2,0)(3,`div`,3)(4,`div`,4)(5,`h3`,5),Tk(6,`MIT License`),Zg()(),Jc(7,`div`,4)(8,`h4`),Tk(9,`Copyright (c) 2019 PO UI`),Zg()(),_u(10,`po-divider`,4),Jc(11,`div`,4)(12,`p`),Tk(13,` Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions: `),Zg(),_u(14,`br`),Jc(15,`p`),Tk(16,` The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software. `),Zg(),_u(17,`br`),Jc(18,`p`),Tk(19,` THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE. `),Zg()()(),_u(20,`po-divider`),Jc(21,`div`,6)(22,`po-checkbox`,7),W0(),Zb(`ngModelChange`,function(r){return H_(d),Ak(o.acceptance,r)||(o.acceptance=r),$_(r)}),vt(`p-change`,function(){return o.primaryAction.disabled=!o.acceptance}),Zg()()()}l&2&&(Ig(),Ab(`p-primary-action`,o.primaryAction),Ig(21),Kb(`ngModel`,o.acceptance),Y0())},dependencies:[TZ,JL,oi,Nf,Ul,ia],encapsulation:2,changeDetection:1})}return i})();var _e=i=>({"docs-sample-code-tabs":i});var Ee=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||i)};static ɵcmp=Jn({type:i,selectors:[[`sample-po-checkbox-acceptance-term-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,o){l&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Checkbox - Acceptance Term`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return o.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-checkbox-acceptance-term/sample-po-checkbox-acceptance-term.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<po-button p-label="View term" (p-click)="modalTerm.open()"> </po-button>

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
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-checkbox-acceptance-term/sample-po-checkbox-acceptance-term.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, ViewChild, ChangeDetectionStrategy } from '@angular/core';

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
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-checkbox-acceptance-term`),Zg(),_u(23,`hr`)),l&2&&(Ig(5),yk(`po-icon `+o.sampleCodeButtonIcon),Ig(),nm(` `,o.sampleCodeButtonLabel),Ig(),Ab(`ngClass`,Bk(4,_e,o.hideSampleCodeTabs)))},dependencies:[eF,P,tre,are,be],encapsulation:2,changeDetection:1})}return i})();var xe=(()=>{class i{static ɵfac=function(l){return new(l||i)};static ɵcmp=Jn({type:i,selectors:[[`sample-po-checkbox-doc`]],standalone:!1,decls:735,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://www.w3.org/WAI/WCAG21/Understanding/name-role-value`],[`href`,`https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance-enhanced`],[`href`,`https://www.w3.org/WAI/WCAG21/Understanding/use-of-color`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[1,`docs-api-deprecated-marker`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[`pan`,``,1,`docs-api-property-type`,`string`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`pan`,``,1,`docs-api-property-type`,`PoHelperOptions`],[`href`,`https://po-ui.io/documentation/po-helper`],[`href`,`https://po-ui.io/documentation/po-theme`],[1,`docs-api-method-table`],[`colspan`,`2`,1,`docs-api-properties-name-cell`]],template:function(l,o){l&1&&(Jc(0,`div`,0)(1,`p`,1)(2,`code`),Tk(3,`import { PoFieldModule } from '@po-ui/ng-components';`),Zg()(),Jc(4,`div`,2)(5,`p`),Tk(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-timepicker, po-upload, po-url e po-search-ai.`),Zg(),Jc(7,`blockquote`)(8,`p`),Tk(9,`Não esqueça de importar o módulo `),Jc(10,`code`),Tk(11,`FormsModule`),Zg(),Tk(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),Jc(13,`code`),Tk(14,`ReactiveFormsModule`),Zg(),Tk(15,`, ambos nativos do Angular.`),Zg()()(),Jc(16,`h3`,3),Tk(17,`Componente`),Zg(),Jc(18,`h4`,4)(19,`code`,5),Tk(20,`PoCheckboxComponent`),Zg()(),Jc(21,`div`,2)(22,`p`),Tk(23,`O componente `),Jc(24,`code`),Tk(25,`po-checkbox`),Zg(),Tk(26,` exibe uma caixa de op\xE7\xE3o com um texto ao lado, na qual \xE9 poss\xEDvel marcar e desmarcar atrav\xE9s tanto
no `),Jc(27,`em`),Tk(28,`click`),Zg(),Tk(29,` do `),Jc(30,`em`),Tk(31,`mouse`),Zg(),Tk(32,` quanto por meio da tecla `),Jc(33,`em`),Tk(34,`space`),Zg(),Tk(35,` quando estiver com foco.`),Zg(),Jc(36,`p`),Tk(37,`Cada op\xE7\xE3o poder\xE1 receber um estado de marcado, desmarcado, indeterminado/mixed e desabilitado, como tamb\xE9m uma a\xE7\xE3o que ser\xE1 disparada quando
ocorrer mudan\xE7as do valor.`),Zg(),Jc(38,`blockquote`)(39,`p`),Tk(40,`O `),Jc(41,`em`),Tk(42,`model`),Zg(),Tk(43,` deste componente aceitará valores igual à `),Jc(44,`code`),Tk(45,`true`),Zg(),Tk(46,`, `),Jc(47,`code`),Tk(48,`false`),Zg(),Tk(49,` ou `),Jc(50,`code`),Tk(51,`null`),Zg(),Tk(52,` para quando for indeterminado/mixed.`),Zg()(),Jc(53,`p`)(54,`strong`),Tk(55,`Acessibilidade tratada no componente:`),Zg()(),Jc(56,`p`),Tk(57,`Algumas diretrizes de acessibilidade já são tratadas no componente, internamente, e não podem ser alteradas pelo proprietário do conteúdo. São elas:`),Zg(),Jc(58,`ul`)(59,`li`),Tk(60,`O componente foi desenvolvido utilizando controles padrões HTML para permitir a identificação do mesmo na interface por tecnologias assistivas. `),Jc(61,`a`,6),Tk(62,`WCAG 4.1.2: Name, Role, Value`),Zg()(),Jc(63,`li`),Tk(64,`A área do foco precisar ter uma espessura de pelo menos 2 pixels CSS e o foco não pode ficar escondido por outros elementos da tela. `),Jc(65,`a`,7),Tk(66,`WCAG 2.4.12: Focus Appearance`),Zg()(),Jc(67,`li`),Tk(68,`A cor não deve ser o único meio para diferenciar o componente do seu estado marcado e desmarcado. `),Jc(69,`a`,8),Tk(70,`WGAG 1.4.1: Use of Color, 3.2.4: Consistent Identification`),Zg()()(),Jc(71,`h4`),Tk(72,`Tokens customizáveis`),Zg(),Jc(73,`p`),Tk(74,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),Zg(),Jc(75,`blockquote`)(76,`p`),Tk(77,`Para maiores informações, acesse o guia `),Jc(78,`a`,9),Tk(79,`Personalizando o Tema Padrão com Tokens CSS`),Zg(),Tk(80,`.`),Zg()(),Jc(81,`table`)(82,`thead`)(83,`tr`)(84,`th`),Tk(85,`Propriedade`),Zg(),Jc(86,`th`),Tk(87,`Descrição`),Zg(),Jc(88,`th`),Tk(89,`Valor Padrão`),Zg()()(),Jc(90,`tbody`)(91,`tr`)(92,`td`)(93,`strong`),Tk(94,`Default Values`),Zg()(),_u(95,`td`)(96,`td`),Zg(),Jc(97,`tr`)(98,`td`)(99,`code`),Tk(100,`--border-color`),Zg()(),Jc(101,`td`),Tk(102,`Cor da borda`),Zg(),Jc(103,`td`)(104,`code`),Tk(105,`var(--color-neutral-dark-70)`),Zg()()(),Jc(106,`tr`)(107,`td`)(108,`code`),Tk(109,`--color-unchecked`),Zg()(),Jc(110,`td`),Tk(111,`Cor quando não selecionado`),Zg(),Jc(112,`td`)(113,`code`),Tk(114,`var(--color-neutral-light-00)`),Zg()()(),Jc(115,`tr`)(116,`td`)(117,`code`),Tk(118,`--color-checked`),Zg()(),Jc(119,`td`),Tk(120,`Cor quando selecionado`),Zg(),Jc(121,`td`)(122,`code`),Tk(123,`var(--color-action-default)`),Zg()()(),Jc(124,`tr`)(125,`td`)(126,`code`),Tk(127,`--field-container-title-justify`),Zg()(),Jc(128,`td`),Tk(129,`Alinhamento horizontal do título (`),Jc(130,`code`),Tk(131,`justify-content`),Zg(),Tk(132,`)`),Zg(),Jc(133,`td`)(134,`code`),Tk(135,`space-between`),Zg()()(),Jc(136,`tr`)(137,`td`)(138,`code`),Tk(139,`--field-container-title-flex`),Zg()(),Jc(140,`td`),Tk(141,`Flex do título (`),Jc(142,`code`),Tk(143,`flex`),Zg(),Tk(144,`)`),Zg(),Jc(145,`td`)(146,`code`),Tk(147,`1 auto`),Zg()()(),Jc(148,`tr`)(149,`td`)(150,`strong`),Tk(151,`Hover`),Zg()(),_u(152,`td`)(153,`td`),Zg(),Jc(154,`tr`)(155,`td`)(156,`code`),Tk(157,`--color-hover`),Zg()(),Jc(158,`td`),Tk(159,`Cor principal no estado hover`),Zg(),Jc(160,`td`)(161,`code`),Tk(162,`var(--color-action-hover)`),Zg()()(),Jc(163,`tr`)(164,`td`)(165,`code`),Tk(166,`--shadow-color-hover`),Zg()(),Jc(167,`td`),Tk(168,`Cor da sombra no estado hover`),Zg(),Jc(169,`td`)(170,`code`),Tk(171,`var(--color-brand-01-lighter)`),Zg()()(),Jc(172,`tr`)(173,`td`)(174,`strong`),Tk(175,`Focused`),Zg()(),_u(176,`td`)(177,`td`),Zg(),Jc(178,`tr`)(179,`td`)(180,`code`),Tk(181,`--outline-color-focused`),Zg()(),Jc(182,`td`),Tk(183,`Cor do outline do estado de focus`),Zg(),Jc(184,`td`)(185,`code`),Tk(186,`var(--color-action-focus)`),Zg()()(),Jc(187,`tr`)(188,`td`)(189,`strong`),Tk(190,`Disabled`),Zg()(),_u(191,`td`)(192,`td`),Zg(),Jc(193,`tr`)(194,`td`)(195,`code`),Tk(196,`--color-unchecked-disabled`),Zg(),Tk(197,` \xA0`),Zg(),Jc(198,`td`),Tk(199,`Cor pricipal quando não selecionado no estado disabled\xA0`),Zg(),Jc(200,`td`)(201,`code`),Tk(202,`var(--color-action-disabled)`),Zg()()(),Jc(203,`tr`)(204,`td`)(205,`code`),Tk(206,`--color-checked-disabled`),Zg(),Tk(207,` \xA0`),Zg(),Jc(208,`td`),Tk(209,`Cor pricipal quando selecionado no estado disabled`),Zg(),Jc(210,`td`)(211,`code`),Tk(212,`var(--color-neutral-dark-70)`),Zg()()()()()(),Jc(213,`div`,10)(214,`h4`,11),Tk(215,`Seletor`),Zg(),Jc(216,`pre`,12),Tk(217,`<po-checkbox
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
`),Zg()(),Jc(218,`h4`,13),Tk(219,`Propriedades`),Zg(),Jc(220,`table`,14)(221,`tr`,15)(222,`th`,16),Tk(223,`Nome`),Zg(),Jc(224,`th`,16),Tk(225,`Tipo`),Zg(),Jc(226,`th`,16),Tk(227,`Padrão`),Zg(),Jc(228,`th`,16),Tk(229,`Descrição`),Zg()(),Jc(230,`tr`,17)(231,`td`,18)(232,`div`,19)(233,`span`,20),Tk(234,` (p-additional-help)`),_u(235,`br`),Zg()(),Jc(236,`div`,21),Tk(237,`Deprecated`),Zg()(),Jc(238,`td`,22)(239,`code`,23),Tk(240,`EventEmitter`),Zg()(),Jc(241,`td`,24),Tk(242,`-`),Zg(),Jc(243,`td`,25)(244,`em`)(245,`strong`),Tk(246,`(opcional)`),Zg()(),Jc(247,`p`),Tk(248,`Evento disparado ao clicar no ícone de ajuda adicional.`),Zg(),Jc(249,`blockquote`)(250,`p`),Tk(251,`Essa propriedade está `),Jc(252,`strong`),Tk(253,`depreciada`),Zg(),Tk(254,` e será removida na versão `),Jc(255,`code`),Tk(256,`23.x.x`),Zg(),Tk(257,`. Recomendamos utilizar a propriedade `),Jc(258,`code`),Tk(259,`p-helper`),Zg(),Tk(260,` que oferece mais recursos e flexibilidade.`),Zg()()()(),Jc(261,`tr`,17)(262,`td`,18)(263,`div`,26)(264,`span`,27),Tk(265,` p-additional-help-tooltip`),_u(266,`br`),Zg()(),Jc(267,`div`,21),Tk(268,`Deprecated`),Zg()(),Jc(269,`td`,22)(270,`code`,28),Tk(271,`string`),Zg()(),Jc(272,`td`,24),Tk(273,`-`),Zg(),Jc(274,`td`,25)(275,`em`)(276,`strong`),Tk(277,`(opcional)`),Zg()(),Jc(278,`p`),Tk(279,`Exibe um ícone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente `),Jc(280,`code`),Tk(281,`po-helper`),Zg(),Tk(282,`.
`),Jc(283,`strong`),Tk(284,`Como boa prática, indica-se utilizar um texto com até 140 caracteres.`),Zg()(),Jc(285,`blockquote`)(286,`p`),Tk(287,`Requer um recuo mínimo de 8px se o componente estiver próximo à lateral da tela.`),Zg()(),Jc(288,`blockquote`)(289,`p`),Tk(290,`Essa propriedade está `),Jc(291,`strong`),Tk(292,`depreciada`),Zg(),Tk(293,` e será removida na versão `),Jc(294,`code`),Tk(295,`23.x.x`),Zg(),Tk(296,`. Recomendamos utilizar a propriedade `),Jc(297,`code`),Tk(298,`p-helper`),Zg(),Tk(299,` que oferece mais recursos e flexibilidade.`),Zg()()()(),Jc(300,`tr`,17)(301,`td`,18)(302,`div`,26)(303,`span`,27),Tk(304,` p-append-in-body`),_u(305,`br`),Zg()()(),Jc(306,`td`,22)(307,`code`,29),Tk(308,`boolean`),Zg()(),Jc(309,`td`,24)(310,`p`)(311,`code`),Tk(312,`false`),Zg()()(),Jc(313,`td`,25)(314,`em`)(315,`strong`),Tk(316,`(opcional)`),Zg()(),Jc(317,`p`),Tk(318,`Define que o popover (`),Jc(319,`code`),Tk(320,`p-helper`),Zg(),Tk(321,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o dentro do componente. Essa
op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow escondido, garantindo o
posicionamento correto do tooltip pr\xF3ximo ao elemento.`),Zg(),Jc(322,`blockquote`)(323,`p`),Tk(324,`Quando utilizado com `),Jc(325,`code`),Tk(326,`p-helper`),Zg(),Tk(327,`, leitores de tela como o NVDA podem não ler o conteúdo do popover.`),Zg()()()(),Jc(328,`tr`,17)(329,`td`,18)(330,`div`,26)(331,`span`,27),Tk(332,` p-auto-focus`),_u(333,`br`),Zg()()(),Jc(334,`td`,22)(335,`code`,29),Tk(336,`boolean`),Zg()(),Jc(337,`td`,24)(338,`p`)(339,`code`),Tk(340,`false`),Zg()()(),Jc(341,`td`,25)(342,`em`)(343,`strong`),Tk(344,`(opcional)`),Zg()(),Jc(345,`p`),Tk(346,`Aplica foco no elemento ao ser iniciado.`),Zg(),Jc(347,`blockquote`)(348,`p`),Tk(349,`Caso mais de um elemento seja configurado com essa propriedade, apenas o último elemento declarado com ela terá o foco.`),Zg()()()(),Jc(350,`tr`,17)(351,`td`,18)(352,`div`,19)(353,`span`,20),Tk(354,` (p-blur)`),_u(355,`br`),Zg()()(),Jc(356,`td`,22)(357,`code`,23),Tk(358,`EventEmitter`),Zg()(),Jc(359,`td`,24),Tk(360,`-`),Zg(),Jc(361,`td`,25)(362,`em`)(363,`strong`),Tk(364,`(opcional)`),Zg()(),Jc(365,`p`),Tk(366,`Evento disparado ao sair do campo.`),Zg()()(),Jc(367,`tr`,17)(368,`td`,18)(369,`div`,19)(370,`span`,20),Tk(371,` (p-change)`),_u(372,`br`),Zg()()(),Jc(373,`td`,22)(374,`code`,23),Tk(375,`EventEmitter`),Zg()(),Jc(376,`td`,24),Tk(377,`-`),Zg(),Jc(378,`td`,25)(379,`em`)(380,`strong`),Tk(381,`(opcional)`),Zg()(),Jc(382,`p`),Tk(383,`Evento disparado quando o valor do `),Jc(384,`em`),Tk(385,`checkbox`),Zg(),Tk(386,` for alterado.`),Zg()()(),Jc(387,`tr`,17)(388,`td`,18)(389,`div`,19)(390,`span`,20),Tk(391,` (p-change-model)`),_u(392,`br`),Zg()()(),Jc(393,`td`,22)(394,`code`,23),Tk(395,`EventEmitter`),Zg()(),Jc(396,`td`,24),Tk(397,`-`),Zg(),Jc(398,`td`,25)(399,`em`)(400,`strong`),Tk(401,`(opcional)`),Zg()(),Jc(402,`p`),Tk(403,`Evento disparado sempre que o valor do model \xE9 alterado, seja por intera\xE7\xE3o do usu\xE1rio
ou por atualiza\xE7\xE3o program\xE1tica (ex: `),Jc(404,`code`),Tk(405,`setValue`),Zg(),Tk(406,`, `),Jc(407,`code`),Tk(408,`patchValue`),Zg(),Tk(409,`, carregamento assíncrono).`),Zg(),Jc(410,`p`),Tk(411,`Diferentemente do `),Jc(412,`code`),Tk(413,`p-change`),Zg(),Tk(414,`, que \xE9 disparado apenas por intera\xE7\xE3o do usu\xE1rio,
o `),Jc(415,`code`),Tk(416,`p-change-model`),Zg(),Tk(417,` cobre todos os cenários de alteração de valor.`),Zg(),Jc(418,`p`),Tk(419,`Não emite quando o novo valor é idêntico ao anterior (deduplicação automática).`),Zg()()(),Jc(420,`tr`,17)(421,`td`,18)(422,`div`,26)(423,`span`,27),Tk(424,` p-compact-label`),_u(425,`br`),Zg()()(),Jc(426,`td`,22)(427,`code`,29),Tk(428,`boolean`),Zg()(),Jc(429,`td`,24)(430,`p`)(431,`code`),Tk(432,`false`),Zg()()(),Jc(433,`td`,25)(434,`em`)(435,`strong`),Tk(436,`(opcional)`),Zg()(),Jc(437,`p`),Tk(438,`Define se o título do campo será exibido de forma compacta.`),Zg(),Jc(439,`p`),Tk(440,`Quando habilitado (`),Jc(441,`code`),Tk(442,`true`),Zg(),Tk(443,`), o modo compacto afeta o conjunto composto por:`),Zg(),Jc(444,`ul`)(445,`li`)(446,`code`),Tk(447,`po-label`),Zg()(),Jc(448,`li`)(449,`code`),Tk(450,`p-requirement (showRequired)`),Zg()(),Jc(451,`li`)(452,`code`),Tk(453,`po-helper`),Zg()()(),Jc(454,`p`),Tk(455,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),Zg(),Jc(456,`p`),Tk(457,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),Zg(),Jc(458,`ul`)(459,`li`)(460,`code`),Tk(461,`--field-container-title-justify`),Zg()(),Jc(462,`li`)(463,`code`),Tk(464,`--field-container-title-flex`),Zg()()(),Jc(465,`p`),Tk(466,`Exemplo:`),Zg(),Jc(467,`pre`)(468,`code`),Tk(469,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),Zg()(),Jc(470,`p`),Tk(471,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),Zg()()(),Jc(472,`tr`,17)(473,`td`,18)(474,`div`,26)(475,`span`,27),Tk(476,` p-disabled`),_u(477,`br`),Zg()()(),Jc(478,`td`,22)(479,`code`,29),Tk(480,`boolean`),Zg()(),Jc(481,`td`,24)(482,`p`)(483,`code`),Tk(484,`false`),Zg()()(),Jc(485,`td`,25)(486,`em`)(487,`strong`),Tk(488,`(opcional)`),Zg()(),Jc(489,`p`),Tk(490,`Define o estado do `),Jc(491,`em`),Tk(492,`checkbox`),Zg(),Tk(493,` como desabilitado.`),Zg()()(),Jc(494,`tr`,17)(495,`td`,18)(496,`div`,26)(497,`span`,27),Tk(498,` p-help`),_u(499,`br`),Zg()()(),Jc(500,`td`,22)(501,`code`,28),Tk(502,`string`),Zg()(),Jc(503,`td`,24),Tk(504,`-`),Zg(),Jc(505,`td`,25)(506,`em`)(507,`strong`),Tk(508,`(opcional)`),Zg()(),Jc(509,`p`),Tk(510,`Texto de apoio do campo`),Zg()()(),Jc(511,`tr`,17)(512,`td`,18)(513,`div`,19)(514,`span`,20),Tk(515,` (p-keydown)`),_u(516,`br`),Zg()()(),Jc(517,`td`,22)(518,`code`,23),Tk(519,`EventEmitter`),Zg()(),Jc(520,`td`,24),Tk(521,`-`),Zg(),Jc(522,`td`,25)(523,`em`)(524,`strong`),Tk(525,`(opcional)`),Zg()(),Jc(526,`p`),Tk(527,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),Jc(528,`code`),Tk(529,`KeyboardEvent`),Zg(),Tk(530,` com informações sobre a tecla.`),Zg()()(),Jc(531,`tr`,17)(532,`td`,18)(533,`div`,26)(534,`span`,27),Tk(535,` p-label`),_u(536,`br`),Zg()()(),Jc(537,`td`,22)(538,`code`,28),Tk(539,`string`),Zg()(),Jc(540,`td`,24),Tk(541,`-`),Zg(),Jc(542,`td`,25)(543,`em`)(544,`strong`),Tk(545,`(opcional)`),Zg()(),Jc(546,`p`),Tk(547,`Texto de exibição do `),Jc(548,`em`),Tk(549,`checkbox`),Zg(),Tk(550,`.`),Zg()()(),Jc(551,`tr`,17)(552,`td`,18)(553,`div`,26)(554,`span`,27),Tk(555,` p-label-text-wrap`),_u(556,`br`),Zg()()(),Jc(557,`td`,22)(558,`code`,29),Tk(559,`boolean`),Zg()(),Jc(560,`td`,24)(561,`p`)(562,`code`),Tk(563,`false`),Zg()()(),Jc(564,`td`,25)(565,`em`)(566,`strong`),Tk(567,`(opcional)`),Zg()(),Jc(568,`p`),Tk(569,`Habilita a quebra automática do texto da propriedade `),Jc(570,`code`),Tk(571,`p-label`),Zg(),Tk(572,`. Quando `),Jc(573,`code`),Tk(574,`p-label-text-wrap`),Zg(),Tk(575,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),Zg()()(),Jc(576,`tr`,17)(577,`td`,18)(578,`div`,26)(579,`span`,27),Tk(580,` name`),_u(581,`br`),Zg()()(),Jc(582,`td`,22)(583,`code`,28),Tk(584,`string`),Zg()(),Jc(585,`td`,24),Tk(586,`-`),Zg(),Jc(587,`td`,25)(588,`p`),Tk(589,`Define o nome do `),Jc(590,`em`),Tk(591,`checkbox`),Zg(),Tk(592,`.`),Zg()()(),Jc(593,`tr`,17)(594,`td`,18)(595,`div`,26)(596,`span`,27),Tk(597,` p-helper`),_u(598,`br`),Zg()()(),Jc(599,`td`,22)(600,`code`,30),Tk(601,`PoHelperOptions `),Zg(),Jc(602,`code`,28),Tk(603,` string`),Zg()(),Jc(604,`td`,24),Tk(605,`-`),Zg(),Jc(606,`td`,25)(607,`em`)(608,`strong`),Tk(609,`(opcional)`),Zg()(),Jc(610,`p`),Tk(611,`Define as opções do componente de ajuda (po-helper) que será exibido ao lado do label quando a propriedade `),Jc(612,`code`),Tk(613,`p-label`),Zg(),Tk(614,` for definida, ou, ao lado do componente na ausência da propriedade `),Jc(615,`code`),Tk(616,`p-label`),Zg(),Tk(617,`.`),Zg(),Jc(618,`blockquote`)(619,`p`),Tk(620,`Para mais informações acesse: `),Jc(621,`a`,31),Tk(622,`https://po-ui.io/documentation/po-helper`),Zg(),Tk(623,`.`),Zg()(),Jc(624,`blockquote`)(625,`p`),Tk(626,`Ao configurar esta propriedade, o antigo ícone de ajuda adicional (`),Jc(627,`code`),Tk(628,`p-additional-help-tooltip`),Zg(),Tk(629,` e `),Jc(630,`code`),Tk(631,`p-additional-help`),Zg(),Tk(632,`) será ignorado.`),Zg()()()(),Jc(633,`tr`,17)(634,`td`,18)(635,`div`,26)(636,`span`,27),Tk(637,` p-size`),_u(638,`br`),Zg()()(),Jc(639,`td`,22)(640,`code`,28),Tk(641,`string`),Zg()(),Jc(642,`td`,24)(643,`p`)(644,`code`),Tk(645,`medium`),Zg()()(),Jc(646,`td`,25)(647,`em`)(648,`strong`),Tk(649,`(opcional)`),Zg()(),Jc(650,`p`),Tk(651,`Define o tamanho da caixa de seleção do componente:`),Zg(),Jc(652,`ul`)(653,`li`)(654,`code`),Tk(655,`small`),Zg(),Tk(656,`: 16x16 (disponível apenas para acessibilidade AA).`),Zg(),Jc(657,`li`)(658,`code`),Tk(659,`medium`),Zg(),Tk(660,`: 24x24.`),Zg(),Jc(661,`li`)(662,`code`),Tk(663,`large`),Zg(),Tk(664,`: 32x32.`),Zg()(),Jc(665,`blockquote`)(666,`p`),Tk(667,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Jc(668,`code`),Tk(669,`medium`),Zg(),Tk(670,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Jc(671,`a`,32),Tk(672,`po-theme`),Zg(),Tk(673,`.`),Zg()()()()(),Jc(674,`h3`,13),Tk(675,`Métodos`),Zg(),Jc(676,`table`,33)(677,`tr`,17)(678,`th`,34)(679,`div`,26)(680,`h4`)(681,`span`,27),Tk(682,` focus `),Zg()()()()(),Jc(683,`tr`,25)(684,`td`,25)(685,`p`),Tk(686,`Função que atribui foco ao `),Jc(687,`em`),Tk(688,`checkbox`),Zg(),Tk(689,`.`),Zg(),Jc(690,`p`),Tk(691,`Para utilizá-la é necessário capturar a referência do componente no DOM através do `),Jc(692,`code`),Tk(693,`ViewChild`),Zg(),Tk(694,`, como por exemplo:`),Zg(),Jc(695,`pre`)(696,`code`),Tk(697,`...
import { ViewChild } from '@angular/core';
import { PoCheckboxComponent } from '@po-ui/ng-components';

...

@ViewChild(PoCheckboxComponent, { static: true }) checkbox: PoCheckboxComponent;

focusCheckbox() {
  this.checkbox.focus();
}
`),Zg()()()()(),_u(698,`br`),Jc(699,`table`,33)(700,`tr`,17)(701,`th`,34)(702,`div`,26)(703,`h4`)(704,`span`,27),Tk(705,` showAdditionalHelp `),Zg()()()()(),Jc(706,`tr`,25)(707,`td`,25)(708,`p`),Tk(709,`Método que exibe `),Jc(710,`code`),Tk(711,`p-helper`),Zg(),Tk(712,` ou executa a ação definida em `),Jc(713,`code`),Tk(714,`p-helper{eventOnClick}`),Zg(),Tk(715,` ou em `),Jc(716,`code`),Tk(717,`p-additionalHelp`),Zg(),Tk(718,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),Jc(719,`code`),Tk(720,`p-keydown`),Zg(),Tk(721,`.`),Zg(),Jc(722,`blockquote`)(723,`p`),Tk(724,`Exibe ou oculta o conteúdo do componente `),Jc(725,`code`),Tk(726,`po-helper`),Zg(),Tk(727,` quando o componente estiver com foco.`),Zg()(),Jc(728,`pre`)(729,`code`),Tk(730,`//Exemplo com label e p-helper
<po-checkbox
 #checkbox
 ...
 p-label="Label do checkbox"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, checkbox)"
></po-checkbox>
`),Zg()(),Jc(731,`pre`)(732,`code`),Tk(733,`...
onKeyDown(event: KeyboardEvent, inp: PoCheckboxComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),Zg()()()()(),_u(734,`br`),Zg())},dependencies:[P],encapsulation:2,changeDetection:1})}return i})();function Me(i,Ie){if(i&1){let m=ZO();Jc(0,`po-tab`,4),vt(`p-click`,function(){H_(m);let o=nk();return $_(o.changeTab(`web`))}),_u(1,`sample-po-checkbox-basic-view`)(2,`sample-po-checkbox-labs-view`)(3,`sample-po-checkbox-acceptance-term-view`),Zg()}if(i&2){let m=nk();Ab(`p-active`,m.activeTab===`web`)}}var Oe=[{path:``,component:(()=>{class i{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(m,l){this.route=m,this.router=l}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(m=>{let l=m.view;this.hidePoWebSample=this.samplesLength===0,this.activeTab=this.hidePoWebSample?`doc`:l||`web`})}changeTab(m){this.router.navigate([],{queryParams:{view:m},queryParamsHandling:`merge`}),this.activeTab=m}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(l){return new(l||i)(I(ar),I(An))};static ɵcmp=Jn({type:i,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:3,consts:[[`p-title`,`Checkbox`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Exemplos`,3,`p-active`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-active`]],template:function(l,o){l&1&&(Jc(0,`po-page-default`,0)(1,`po-tabs`,1),VO(2,Me,4,1,`po-tab`,2),Jc(3,`po-tab`,3),vt(`p-click`,function(){return o.changeTab(`doc`)}),_u(4,`sample-po-checkbox-doc`),Zg()()()),l&2&&(Ab(`p-actions`,o.actions),Ig(2),BO(o.hidePoWebSample?-1:2),Ig(),Ab(`p-active`,o.activeTab===`doc`))},dependencies:[Mze,tre,are,se,he,Ee,xe],encapsulation:2,changeDetection:1})}return i})()}];var ge=(()=>{class i{static ɵfac=function(l){return new(l||i)};static ɵmod=ge$1({type:i});static ɵinj=de({imports:[WV.forChild(Oe),WV]})}return i})();var it=(()=>{class i{static ɵfac=function(l){return new(l||i)};static ɵmod=ge$1({type:i});static ɵinj=de({imports:[M,ge]})}return i})();export{it as DocPoCheckboxModule};