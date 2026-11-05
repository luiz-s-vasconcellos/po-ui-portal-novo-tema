import{$i as h,$n as AF,$t as fne,A as Hoe,At as _f,B as L4,Cn as oi,Ct as Yoe,Da as pe,Fa as rg,Fi as ab,Ga as vx,H as Lf,Ha as v_,Ia as sb,Ii as b,La as uO,Ln as w4,Mr as I1,Mt as _s,Na as r0,Qr as RK,Ra as ue,Sa as o0,Si as Xx,T as Gte,Xt as ere,Ya as wg,Za as xF,Zn as $F,Zt as fae,ai as Sn,dr as DO,gr as Dx,hi as VF,ht as U4,ia as ir,ji as __,ki as Zn,ma as lO,mt as Tze,ni as SF,nr as Ag,qr as Ok,ri as SK,rr as Ax,rt as Qae,sa as jc,tn as g5,ui as UE,va as mt,vn as nb,wr as Fx,xa as nu,xt as Woe,zr as MK}from"./chunk-VuVfKKNQ.js";import{n as P,t as M}from"./main-CK5CTZT7.js";var be=(()=>{class o{static ɵfac=function(l){return new(l||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-progress-basic`]],standalone:!1,decls:8,vars:3,consts:[[`p-title`,`Bar`],[3,`p-value`],[1,`po-mt-1`],[`p-title`,`Circle`,1,`po-mt-2`],[`p-shape`,`circle`,3,`p-value`,`p-radius`]],template:function(l,i){l&1&&(jc(0,`div`)(1,`po-widget`,0),nu(2,`po-progress`,1),wg()(),jc(3,`div`,2)(4,`po-widget`,3),nu(5,`po-progress`,4),jc(6,`div`,2),lO(7,`Para adequação do layout, o valor mínimo de p-radius é 24px.`),wg()()()),l&2&&(rg(2),UE(`p-value`,25),rg(3),UE(`p-value`,25)(`p-radius`,24))},dependencies:[fne,fae],encapsulation:2,changeDetection:1})}return o})();var Te=o=>({"docs-sample-code-tabs":o});var Se=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-progress-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,i){l&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),lO(3,`PO Progress Basic`),wg(),jc(4,`a`,2),mt(`click`,function(){return i.toggleSampleCodeTabs()}),nu(5,`span`),lO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),lO(12,`sample-po-progress-basic/sample-po-progress-basic.component.html`),wg(),jc(13,`pre`,7),lO(14,`<div>
  <po-widget p-title="Bar">
    <po-progress [p-value]="25"></po-progress>
  </po-widget>
</div>

<div class="po-mt-1">
  <po-widget p-title="Circle" class="po-mt-2">
    <po-progress [p-value]="25" p-shape="circle" [p-radius]="24"></po-progress>
    <div class="po-mt-1">Para adequa\xE7\xE3o do layout, o valor m\xEDnimo de p-radius \xE9 24px.</div>
  </po-widget>
</div>
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),lO(18,`sample-po-progress-basic/sample-po-progress-basic.component.ts`),wg(),jc(19,`pre`,9),lO(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-progress-basic',
  templateUrl: './sample-po-progress-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoProgressBasicComponent {}
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-progress-basic`),wg(),nu(23,`hr`)),l&2&&(rg(5),Xx(`po-icon `+i.sampleCodeButtonIcon),rg(),Ag(` `,i.sampleCodeButtonLabel),rg(),UE(`ngClass`,DO(4,Te,i.hideSampleCodeTabs)))},dependencies:[Ok,P,Qae,ere,be],encapsulation:2,changeDetection:1})}return o})();function Oe(o,N){if(o&1&&(jc(0,`po-widget`,3),nu(1,`po-info`,15),wg()),o&2){let r=Fx();rg(),UE(`p-value`,r.event)}}function Ae(o,N){if(o&1&&(jc(0,`div`)(1,`po-widget`,21)(2,`form`,22)(3,`po-input`,23),r0(),wg(),jc(4,`po-select`,24),r0(),wg(),jc(5,`po-select`,25),r0(),wg(),jc(6,`po-switch`,26),r0(),wg(),jc(7,`po-switch`,27),r0(),wg()()()()),o&2){let r=Fx(2);rg(2),UE(`formGroup`,r.actionForm),rg(),o0(),rg(),UE(`p-options`,r.iconOptions),o0(),rg(),UE(`p-options`,r.typeOptions),o0(),rg(),o0(),rg(),o0()}}function ze(o,N){if(o&1){let r=Ax();jc(0,`po-select`,16),r0(),ab(`ngModelChange`,function(i){v_(r);let m=Fx();return uO(m.infoIcon,i)||(m.infoIcon=i),__(i)}),wg(),jc(1,`po-input`,17),r0(),ab(`ngModelChange`,function(i){v_(r);let m=Fx();return uO(m.text,i)||(m.text=i),__(i)}),wg(),jc(2,`po-input`,18),r0(),ab(`ngModelChange`,function(i){v_(r);let m=Fx();return uO(m.info,i)||(m.info=i),__(i)}),wg(),jc(3,`po-radio-group`,19),r0(),ab(`ngModelChange`,function(i){v_(r);let m=Fx();return uO(m.sizeActions,i)||(m.sizeActions=i),__(i)}),wg(),jc(4,`po-switch`,20),r0(),ab(`ngModelChange`,function(i){v_(r);let m=Fx();return uO(m.showAction,i)||(m.showAction=i),__(i)}),wg(),vx(5,Ae,8,3,`div`)}if(o&2){let r=Fx();sb(`ngModel`,r.infoIcon),UE(`p-options`,r.infoIconsOptions),o0(),rg(),sb(`ngModel`,r.text),o0(),rg(),sb(`ngModel`,r.info),o0(),rg(),sb(`ngModel`,r.sizeActions),UE(`p-options`,r.sizeActionsOptions),o0(),rg(),sb(`ngModel`,r.showAction),o0(),rg(),Dx(r.showAction?5:-1)}}function Ve(o,N){if(o&1){let r=Ax();jc(0,`po-number`,28),r0(),ab(`ngModelChange`,function(i){v_(r);let m=Fx();return uO(m.radius,i)||(m.radius=i),__(i)}),wg()}if(o&2){let r=Fx();sb(`ngModel`,r.radius),o0()}}var he=(()=>{class o{fb=h($F);event;info;infoIcon;disabledCancel;indeterminate;showPercentage;status=_s.Default;size=nb.large;shape=_f.bar;radius;text;value;action;actionForm;showAction;properties;sizeActions;infoIconsOptions=[{label:`an an-warning-circle`,value:`an an-warning-circle`},{label:`an an-check`,value:`an an-check`},{label:`an an-user`,value:`an an-user`},{label:`an an-cloud-slash`,value:`an an-cloud-slash`}];statusOptions=[{label:`Default`,value:_s.Default},{label:`Success`,value:_s.Success},{label:`Error`,value:_s.Error}];sizeOptions=[{label:`Medium`,value:nb.medium},{label:`Large`,value:nb.large}];shapeOptions=[{label:`Bar`,value:_f.bar},{label:`Circle`,value:_f.circle}];sizeActionsOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];typeOptions=[{label:`Danger`,value:`danger`},{label:`Default`,value:`default`}];iconOptions=[{value:`an an-download`,label:`an an-download`},{value:`an an-Server`,label:`an an-Server`},{value:`an an-upload`,label:`an an-upload`},{value:`an an-share`,label:`an an-share`}];actionOptions=[{label:`Disabled`,value:`disabled`},{label:`Visible`,value:`visible`}];allPropertiesOptions=[{value:`disabledCancel`,label:`Disabled cancel`},{value:`indeterminate`,label:`Indeterminate`},{value:`showPercentage`,label:`Show percentage`}];propertiesOptions=[...this.allPropertiesOptions];constructor(){this.initializeActionForm()}onShapeChange(r){this.restore(r),r===`circle`?this.propertiesOptions=this.allPropertiesOptions.filter(l=>l.value!==`disabledCancel`):this.propertiesOptions=[...this.allPropertiesOptions]}initializeActionForm(){this.actionForm=this.fb.group({label:[``],icon:[``],type:[`default`],visible:[!0],disabled:[!1]})}ngOnInit(){this.restore(),this.actionForm.valueChanges.subscribe(r=>{this.updateAction(r)})}updateAction(r){this.action=r}onEvent(r){this.event=r}restore(r){this.event=void 0,this.info=void 0,this.infoIcon=void 0,this.disabledCancel=!1,this.indeterminate=!1,this.showPercentage=!1,this.status=_s.Default,this.text=void 0,this.value=void 0,this.size=nb.large,this.radius=void 0,this.actionForm.reset({type:`default`,visible:!0}),this.action={label:``,type:`default`},this.showAction=!1,this.properties=[],this.sizeActions=`medium`,r||(this.propertiesOptions=[...this.allPropertiesOptions],this.shape=_f.bar)}static ɵfac=function(l){return new(l||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-progress-labs`]],standalone:!1,decls:17,vars:25,consts:[[`progressBarPropertiesForm`,`ngForm`],[1,`sample-progress-grid`],[3,`p-custom-action-click`,`p-cancel`,`p-retry`,`p-disabled-cancel`,`p-indeterminate`,`p-show-percentage`,`p-info`,`p-info-icon`,`p-status`,`p-text`,`p-value`,`p-size`,`p-shape`,`p-radius`,`p-size-actions`,`p-custom-action`],[`p-title`,`Events`],[`p-title`,`Properties`],[1,`po-sm-12`,`po-md-12`,`po-lg-12`,`po-xl-12`],[`name`,`shape`,`p-label`,`Shape`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`p-change`,`ngModel`,`p-options`],[1,`po-sm-12`,`po-md-12`,`po-lg-12`,`po-xl-12`,`po-mt-2`],[`name`,`value`,`p-clean`,``,`p-label`,`Value`,`p-max`,`100`,`p-min`,`0`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`],[`name`,`Size`,`p-label`,`Size`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`Status`,`p-label`,`Status`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`radius`,`p-clean`,``,`p-label`,`Radius`,`p-help`,`Para adequação do layout, o valor mínimo de p-radius é 24px.`,`p-min`,`24`,1,`po-md-6`,`po-lg-3`,3,`ngModel`],[`name`,`properties`,`p-columns`,`4`,`p-label`,`Properties`,1,`po-md-12`,`po-mt-2`,3,`ngModelChange`,`ngModel`,`p-options`],[1,`po-row`],[`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`],[3,`p-value`],[`name`,`infoIcon`,`p-label`,`Info icon`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`text`,`p-clean`,``,`p-label`,`Label`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`info`,`p-clean`,``,`p-label`,`Info`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`sizeActions`,`p-columns`,`4`,`p-label`,`Size actions`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,`po-mb-2`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`addAction`,`p-label`,`Add Action Button`,1,`po-md-3`,3,`ngModelChange`,`ngModel`],[`p-title`,`Action Button`],[1,`po-row`,3,`formGroup`],[`formControlName`,`label`,`p-label`,`Label`,1,`po-md-6`,`po-lg-4`],[`formControlName`,`icon`,`p-label`,`Icon`,1,`po-md-6`,`po-lg-3`,3,`p-options`],[`formControlName`,`type`,`p-label`,`Type`,1,`po-md-6`,`po-lg-3`,3,`p-options`],[`formControlName`,`disabled`,`p-label`,`Disabled`,1,`po-md-3`,`po-lg-2`],[`formControlName`,`visible`,`p-label`,`Visible`,1,`po-md-3`,`po-lg-2`],[`name`,`radius`,`p-clean`,``,`p-label`,`Radius`,`p-help`,`Para adequação do layout, o valor mínimo de p-radius é 24px.`,`p-min`,`24`,1,`po-md-6`,`po-lg-3`,3,`ngModelChange`,`ngModel`]],template:function(l,i){if(l&1){let m=Ax();jc(0,`div`,1)(1,`po-progress`,2),mt(`p-custom-action-click`,function(){return i.onEvent(`p-custom-action-click`)})(`p-cancel`,function(){return i.onEvent(`p-cancel`)})(`p-retry`,function(){return i.onEvent(`p-retry`)}),wg(),vx(2,Oe,2,1,`po-widget`,3),jc(3,`po-widget`,4)(4,`form`,null,0)(6,`div`,5)(7,`po-radio-group`,6),r0(),ab(`ngModelChange`,function(d){return v_(m),uO(i.shape,d)||(i.shape=d),__(d)}),mt(`p-change`,function(d){return i.onShapeChange(d)}),wg()(),jc(8,`div`,7)(9,`po-number`,8),r0(),ab(`ngModelChange`,function(d){return v_(m),uO(i.value,d)||(i.value=d),__(d)}),wg(),jc(10,`po-select`,9),r0(),ab(`ngModelChange`,function(d){return v_(m),uO(i.size,d)||(i.size=d),__(d)}),wg(),jc(11,`po-select`,10),r0(),ab(`ngModelChange`,function(d){return v_(m),uO(i.status,d)||(i.status=d),__(d)}),wg(),vx(12,ze,6,8),vx(13,Ve,1,1,`po-number`,11),jc(14,`po-checkbox-group`,12),r0(),ab(`ngModelChange`,function(d){return v_(m),uO(i.properties,d)||(i.properties=d),__(d)}),wg()()()(),jc(15,`div`,13)(16,`po-button`,14),mt(`p-click`,function(){return i.restore()}),wg()()()}l&2&&(rg(),UE(`p-disabled-cancel`,i.properties.includes(`disabledCancel`))(`p-indeterminate`,i.properties.includes(`indeterminate`))(`p-show-percentage`,i.properties.includes(`showPercentage`))(`p-info`,i.info)(`p-info-icon`,i.infoIcon)(`p-status`,i.status)(`p-text`,i.text)(`p-value`,i.value)(`p-size`,i.size)(`p-shape`,i.shape)(`p-radius`,i.radius)(`p-size-actions`,i.sizeActions)(`p-custom-action`,i.action),rg(),Dx(i.shape===`bar`?2:-1),rg(5),sb(`ngModel`,i.shape),UE(`p-options`,i.shapeOptions),o0(),rg(2),sb(`ngModel`,i.value),o0(),rg(),sb(`ngModel`,i.size),UE(`p-options`,i.sizeOptions),o0(),rg(),sb(`ngModel`,i.status),UE(`p-options`,i.statusOptions),o0(),rg(),Dx(i.shape===`bar`?12:-1),rg(),Dx(i.shape===`circle`?13:-1),rg(),sb(`ngModel`,i.properties),UE(`p-options`,i.propertiesOptions),o0())},dependencies:[RK,SK,MK,xF,SF,AF,VF,oi,w4,U4,Hoe,Gte,Woe,L4,Yoe,fne,fae],styles:[`.sample-progress-grid[_ngcontent-%COMP%]{display:grid;gap:16px}`],changeDetection:1})}return o})();var qe=o=>({"docs-sample-code-tabs":o});var xe=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-progress-labs-view`]],standalone:!1,decls:30,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[`p-label`,`CSS`],[`appCodeHighlight`,``,1,`css`],[1,`docs-sample-container`]],template:function(l,i){l&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),lO(3,`PO Progress Labs`),wg(),jc(4,`a`,2),mt(`click`,function(){return i.toggleSampleCodeTabs()}),nu(5,`span`),lO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),lO(12,`sample-po-progress-labs/sample-po-progress-labs.component.html`),wg(),jc(13,`pre`,7),lO(14,`<div class="sample-progress-grid">
  <po-progress
    [p-disabled-cancel]="properties.includes('disabledCancel')"
    [p-indeterminate]="properties.includes('indeterminate')"
    [p-show-percentage]="properties.includes('showPercentage')"
    [p-info]="info"
    [p-info-icon]="infoIcon"
    [p-status]="status"
    [p-text]="text"
    [p-value]="value"
    [p-size]="size"
    [p-shape]="shape"
    [p-radius]="radius"
    [p-size-actions]="sizeActions"
    [p-custom-action]="action"
    (p-custom-action-click)="onEvent('p-custom-action-click')"
    (p-cancel)="onEvent('p-cancel')"
    (p-retry)="onEvent('p-retry')"
  />

  @if (shape === 'bar') {
    <po-widget p-title="Events">
      <po-info [p-value]="event" />
    </po-widget>
  }

  <po-widget p-title="Properties">
    <form #progressBarPropertiesForm="ngForm">
      <div class="po-sm-12 po-md-12 po-lg-12 po-xl-12">
        <po-radio-group
          class="po-md-6 po-lg-3"
          name="shape"
          [(ngModel)]="shape"
          p-label="Shape"
          [p-options]="shapeOptions"
          (p-change)="onShapeChange($event)"
        >
        </po-radio-group>
      </div>

      <div class="po-sm-12 po-md-12 po-lg-12 po-xl-12 po-mt-2">
        <po-number
          class="po-md-6 po-lg-3"
          name="value"
          [(ngModel)]="value"
          p-clean
          p-label="Value"
          p-max="100"
          p-min="0"
        />

        <po-select class="po-md-6 po-lg-3" name="Size" p-label="Size" [(ngModel)]="size" [p-options]="sizeOptions" />

        <po-select
          class="po-md-6 po-lg-3"
          name="Status"
          p-label="Status"
          [(ngModel)]="status"
          [p-options]="statusOptions"
        />

        @if (shape === 'bar') {
          <po-select
            class="po-md-6 po-lg-3"
            name="infoIcon"
            [(ngModel)]="infoIcon"
            p-label="Info icon"
            [p-options]="infoIconsOptions"
          />

          <po-input class="po-md-6" name="text" [(ngModel)]="text" p-clean p-label="Label" />

          <po-input class="po-md-6" name="info" [(ngModel)]="info" p-clean p-label="Info" />

          <po-radio-group
            class="po-md-12 po-mb-2"
            name="sizeActions"
            [(ngModel)]="sizeActions"
            p-columns="4"
            p-label="Size actions"
            p-help="Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme)."
            [p-options]="sizeActionsOptions"
          >
          </po-radio-group>

          <po-switch class="po-md-3" name="addAction" [(ngModel)]="showAction" p-label="Add Action Button" />

          @if (showAction) {
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
        }

        @if (shape === 'circle') {
          <po-number
            class="po-md-6 po-lg-3"
            name="radius"
            [(ngModel)]="radius"
            p-clean
            p-label="Radius"
            p-help="Para adequa\xE7\xE3o do layout, o valor m\xEDnimo de p-radius \xE9 24px."
            p-min="24"
          />
        }

        <po-checkbox-group
          class="po-md-12 po-mt-2"
          name="properties"
          [(ngModel)]="properties"
          p-columns="4"
          p-label="Properties"
          [p-options]="propertiesOptions"
        >
        </po-checkbox-group>
      </div>
    </form>
  </po-widget>

  <div class="po-row">
    <po-button class="po-lg-3 po-md-6" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</div>
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),lO(18,`sample-po-progress-labs/sample-po-progress-labs.component.ts`),wg(),jc(19,`pre`,9),lO(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import {
  PoCheckboxGroupOption,
  PoProgressStatus,
  PoRadioGroupOption,
  PoProgressSize,
  PoProgressShape,
  PoProgressAction,
  PoSelectOption
} from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-progress-labs',
  templateUrl: './sample-po-progress-labs.component.html',
  styleUrls: ['./sample-po-progress-labs.component.css'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoProgressLabsComponent implements OnInit {
  private fb = inject(FormBuilder);

  event: any;
  info: string;
  infoIcon: string;
  disabledCancel: boolean;
  indeterminate: boolean;
  showPercentage: boolean;
  status: PoProgressStatus = PoProgressStatus.Default;
  size: PoProgressSize = PoProgressSize.large;
  shape: PoProgressShape = PoProgressShape.bar;
  radius: number;
  text: string;
  value: number;
  action: PoProgressAction;
  actionForm: FormGroup;
  showAction: false;
  properties: Array<string>;
  sizeActions: string;

  infoIconsOptions: Array<PoRadioGroupOption> = [
    { label: 'an an-warning-circle', value: 'an an-warning-circle' },
    { label: 'an an-check', value: 'an an-check' },
    { label: 'an an-user', value: 'an an-user' },
    { label: 'an an-cloud-slash', value: 'an an-cloud-slash' }
  ];

  statusOptions: Array<PoRadioGroupOption> = [
    { label: 'Default', value: PoProgressStatus.Default },
    { label: 'Success', value: PoProgressStatus.Success },
    { label: 'Error', value: PoProgressStatus.Error }
  ];

  sizeOptions: Array<PoRadioGroupOption> = [
    { label: 'Medium', value: PoProgressSize.medium },
    { label: 'Large', value: PoProgressSize.large }
  ];

  shapeOptions: Array<PoRadioGroupOption> = [
    { label: 'Bar', value: PoProgressShape.bar },
    { label: 'Circle', value: PoProgressShape.circle }
  ];

  sizeActionsOptions: Array<PoRadioGroupOption> = [
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

  public readonly actionOptions: Array<PoCheckboxGroupOption> = [
    { label: 'Disabled', value: 'disabled' },
    { label: 'Visible', value: 'visible' }
  ];

  private readonly allPropertiesOptions: Array<PoCheckboxGroupOption> = [
    { value: 'disabledCancel', label: 'Disabled cancel' },
    { value: 'indeterminate', label: 'Indeterminate' },
    { value: 'showPercentage', label: 'Show percentage' }
  ];

  public propertiesOptions: Array<PoCheckboxGroupOption> = [...this.allPropertiesOptions];

  constructor() {
    this.initializeActionForm();
  }

  onShapeChange(value: string): void {
    this.restore(value);

    if (value === 'circle') {
      this.propertiesOptions = this.allPropertiesOptions.filter(property => property.value !== 'disabledCancel');
    } else {
      this.propertiesOptions = [...this.allPropertiesOptions];
    }
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

  onEvent(event) {
    this.event = event;
  }

  restore(shape?: string) {
    this.event = undefined;
    this.info = undefined;
    this.infoIcon = undefined;
    this.disabledCancel = false;
    this.indeterminate = false;
    this.showPercentage = false;
    this.status = PoProgressStatus.Default;
    this.text = undefined;
    this.value = undefined;
    this.size = PoProgressSize.large;
    this.radius = undefined;
    this.actionForm.reset({ type: 'default', visible: true });
    this.action = { label: '', type: 'default' };
    this.showAction = false;
    this.properties = [];
    this.sizeActions = 'medium';

    if (!shape) {
      this.propertiesOptions = [...this.allPropertiesOptions];
      this.shape = PoProgressShape.bar;
    }
  }
}
`),wg()()(),jc(21,`po-tab`,10)(22,`div`)(23,`label`,6),lO(24,`sample-po-progress-labs/sample-po-progress-labs.component.css`),wg(),jc(25,`pre`,11),lO(26,`.sample-progress-grid {
  display: grid;
  gap: 16px;
}
`),wg()()()()(),jc(27,`div`,12),nu(28,`sample-po-progress-labs`),wg(),nu(29,`hr`)),l&2&&(rg(5),Xx(`po-icon `+i.sampleCodeButtonIcon),rg(),Ag(` `,i.sampleCodeButtonLabel),rg(),UE(`ngClass`,DO(4,qe,i.hideSampleCodeTabs)))},dependencies:[Ok,P,Qae,ere,he],encapsulation:2,changeDetection:1})}return o})();var ve=(()=>{class o{buttonDisabled;progressBarValue=0;publication=`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sodales, metus quis gravida dignissim, justo eros interdum
    metus, lacinia mollis lorem nunc vel nibh. Donec odio turpis, malesuada quis enim eu, varius vulputate magna. Donec efficitur, nibh et
    ultricies lacinia, nunc metus viverra nisl, ut ultricies augue nibh nec nisi. Nunc elit arcu, auctor ac diam vel, tempus vehicula
    Pellentesque dignissim eros urna, nec vehicula nulla sagittis et. Aliquam nec elit justo. Curabitur sed consequat augue. Etiam ultrices
    lectus a mauris fringilla, sit amet imperdiet purus vulputate.`;get progressBarInfo(){return`${this.progressBarValue}/100`}finishEdition(){this.buttonDisabled=!0}updatePublication(){let r=setInterval(()=>{this.progressBarValue>=100?(clearInterval(r),this.finishEdition()):this.progressBarValue++},20)}static ɵfac=function(l){return new(l||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-progress-publication`]],standalone:!1,decls:7,vars:4,consts:[[`p-title`,`Edit publication`],[1,`po-row`],[1,`po-md-9`,3,`ngModelChange`,`ngModel`],[1,`po-md-9`],[`p-text`,`Loading update`,1,`po-md-9`,3,`p-value`,`p-show-percentage`],[`p-label`,`Update publication`,3,`p-click`,`p-disabled`]],template:function(l,i){l&1&&(jc(0,`po-page-default`,0)(1,`div`,1)(2,`po-rich-text`,2),r0(),ab(`ngModelChange`,function(C){return uO(i.publication,C)||(i.publication=C),C}),wg(),nu(3,`po-divider`,3)(4,`po-progress`,4),wg(),jc(5,`div`,1)(6,`po-button`,5),mt(`p-click`,function(){return i.updatePublication()}),wg()()()),l&2&&(rg(2),sb(`ngModel`,i.publication),o0(),rg(2),UE(`p-value`,i.progressBarValue)(`p-show-percentage`,!0),rg(2),UE(`p-disabled`,i.buttonDisabled))},dependencies:[SK,xF,oi,Lf,g5,Tze,fne],encapsulation:2,changeDetection:1})}return o})();var Ie=o=>({"docs-sample-code-tabs":o});var fe=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-progress-publication-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(l,i){l&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),lO(3,`PO Progress - Publication`),wg(),jc(4,`a`,2),mt(`click`,function(){return i.toggleSampleCodeTabs()}),nu(5,`span`),lO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),lO(12,`sample-po-progress-publication/sample-po-progress-publication.component.html`),wg(),jc(13,`pre`,7),lO(14,`<po-page-default p-title="Edit publication">
  <div class="po-row">
    <po-rich-text class="po-md-9" [(ngModel)]="publication"></po-rich-text>

    <po-divider class="po-md-9"></po-divider>

    <po-progress class="po-md-9" p-text="Loading update" [p-value]="progressBarValue" [p-show-percentage]="true">
    </po-progress>
  </div>

  <div class="po-row">
    <po-button p-label="Update publication" [p-disabled]="buttonDisabled" (p-click)="updatePublication()"> </po-button>
  </div>
</po-page-default>
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),lO(18,`sample-po-progress-publication/sample-po-progress-publication.component.ts`),wg(),jc(19,`pre`,9),lO(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-progress-publication',
  templateUrl: './sample-po-progress-publication.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoProgressPublicationComponent {
  buttonDisabled: boolean;
  progressBarValue = 0;
  publication: string = \`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sodales, metus quis gravida dignissim, justo eros interdum
    metus, lacinia mollis lorem nunc vel nibh. Donec odio turpis, malesuada quis enim eu, varius vulputate magna. Donec efficitur, nibh et
    ultricies lacinia, nunc metus viverra nisl, ut ultricies augue nibh nec nisi. Nunc elit arcu, auctor ac diam vel, tempus vehicula
    Pellentesque dignissim eros urna, nec vehicula nulla sagittis et. Aliquam nec elit justo. Curabitur sed consequat augue. Etiam ultrices
    lectus a mauris fringilla, sit amet imperdiet purus vulputate.\`;

  get progressBarInfo() {
    return \`\${this.progressBarValue}/100\`;
  }

  finishEdition() {
    this.buttonDisabled = true;
  }

  updatePublication() {
    const interval = setInterval(() => {
      if (this.progressBarValue >= 100) {
        clearInterval(interval);

        this.finishEdition();
      } else {
        this.progressBarValue++;
      }
    }, 20);
  }
}
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-progress-publication`),wg(),nu(23,`hr`)),l&2&&(rg(5),Xx(`po-icon `+i.sampleCodeButtonIcon),rg(),Ag(` `,i.sampleCodeButtonLabel),rg(),UE(`ngClass`,DO(4,Ie,i.hideSampleCodeTabs)))},dependencies:[Ok,P,Qae,ere,ve],encapsulation:2,changeDetection:1})}return o})();var Ce=(()=>{class o{minRadius=24;value=65;static ɵfac=function(l){return new(l||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-progress-circle`]],standalone:!1,decls:99,vars:2,consts:[[1,`container`],[`p-title`,`Regra de Adequação de Layout`],[1,`line-height`],[1,`po-font-text-large-bold`],[1,`po-text-large`],[`p-title`,`Exemplo Básico - Radius Mínimo (24px)`],[1,`po-row`,`po-align-items-center`],[1,`po-md-6`,`po-lg-4`,`po-center`],[`p-shape`,`circle`,`p-show-percentage`,`true`,`p-radius`,`24`,3,`p-value`],[1,`po-md-6`,`po-lg-8`],[1,`po-font-text`],[`p-title`,`Com Radius Maior (60px)`],[`p-shape`,`circle`,`p-show-percentage`,`true`,`p-radius`,`60`,3,`p-value`],[`p-title`,`Com Status Error (Radius 24px)`],[`p-shape`,`circle`,`p-value`,`50`,`p-status`,`error`,`p-radius`,`24`],[`p-title`,`Modo Indeterminado`],[`p-shape`,`circle`,`p-indeterminate`,`true`,`p-radius`,`30`],[`p-title`,`Comparação Visual - Diferentes Status`],[1,`po-row`,`row`],[1,`po-md-3`,`po-center`,`items`],[1,`po-font-text-large-bold`,`po-mb-1`],[`p-shape`,`circle`,`p-value`,`100`,`p-status`,`success`,`p-show-percentage`,`true`,`p-radius`,`25`],[`p-shape`,`circle`,`p-value`,`50`,`p-status`,`warning`,`p-show-percentage`,`true`,`p-radius`,`25`],[`p-shape`,`circle`,`p-value`,`0`,`p-status`,`error`,`p-show-percentage`,`true`,`p-radius`,`25`],[`p-shape`,`circle`,`p-value`,`75`,`p-show-percentage`,`true`,`p-radius`,`25`]],template:function(l,i){l&1&&(jc(0,`div`,0)(1,`po-widget`,1)(2,`div`,2)(3,`p`,3),lO(4,`📏 Para adequação do layout, o valor mínimo de p-radius é 24px.`),wg(),jc(5,`p`,4),lO(6,` O raio mínimo de 24px é necessário para evitar colisão entre o conteúdo central (porcentagem ou ícone de erro) e a borda do círculo. Valores menores podem causar sobreposição visual dos elementos. `),wg()()(),jc(7,`po-widget`,5)(8,`div`,6)(9,`div`,7),nu(10,`po-progress`,8),wg(),jc(11,`div`,9)(12,`p`)(13,`strong`),lO(14,`Configuração:`),wg()(),jc(15,`ul`)(16,`li`),lO(17,`p-shape="circle"`),wg(),jc(18,`li`),lO(19,`p-value="65"`),wg(),jc(20,`li`),lO(21,`p-show-percentage="true"`),wg(),jc(22,`li`),lO(23,`p-radius="24" (valor mínimo permitido)`),wg()(),jc(24,`p`,10),lO(25,`A porcentagem é exibida no centro sem colisão com a borda do círculo.`),wg()()()(),jc(26,`po-widget`,11)(27,`div`,6)(28,`div`,7),nu(29,`po-progress`,12),wg(),jc(30,`div`,9)(31,`p`)(32,`strong`),lO(33,`Configuração:`),wg()(),jc(34,`ul`)(35,`li`),lO(36,`p-shape="circle"`),wg(),jc(37,`li`),lO(38,`p-value="65"`),wg(),jc(39,`li`),lO(40,`p-show-percentage="true"`),wg(),jc(41,`li`),lO(42,`p-radius="60" (valor maior)`),wg()(),jc(43,`p`,10),lO(44,` Maior espaço disponível para o conteúdo central. Recomendado para melhor visualização. `),wg()()()(),jc(45,`po-widget`,13)(46,`div`,6)(47,`div`,7),nu(48,`po-progress`,14),wg(),jc(49,`div`,9)(50,`p`)(51,`strong`),lO(52,`Configuração:`),wg()(),jc(53,`ul`)(54,`li`),lO(55,`p-shape="circle"`),wg(),jc(56,`li`),lO(57,`p-value="50"`),wg(),jc(58,`li`),lO(59,`p-status="error"`),wg(),jc(60,`li`),lO(61,`p-radius="24" (valor mínimo)`),wg()(),jc(62,`p`,10),lO(63,`Ícone de erro exibido no centro. O radius mínimo de 24px evita sobreposição.`),wg()()()(),jc(64,`po-widget`,15)(65,`div`,6)(66,`div`,7),nu(67,`po-progress`,16),wg(),jc(68,`div`,9)(69,`p`)(70,`strong`),lO(71,`Configuração:`),wg()(),jc(72,`ul`)(73,`li`),lO(74,`p-shape="circle"`),wg(),jc(75,`li`),lO(76,`p-indeterminate="true"`),wg(),jc(77,`li`),lO(78,`p-radius="30"`),wg()(),jc(79,`p`,10),lO(80,`Animação contínua para indicar progresso em andamento.`),wg()()()(),jc(81,`po-widget`,17)(82,`div`,18)(83,`div`,19)(84,`p`,20),lO(85,`Success`),wg(),nu(86,`po-progress`,21),wg(),jc(87,`div`,19)(88,`p`,20),lO(89,`Warning`),wg(),nu(90,`po-progress`,22),wg(),jc(91,`div`,19)(92,`p`,20),lO(93,`Error`),wg(),nu(94,`po-progress`,23),wg(),jc(95,`div`,19)(96,`p`,20),lO(97,`Default`),wg(),nu(98,`po-progress`,24),wg()()()()),l&2&&(rg(10),UE(`p-value`,i.value),rg(19),UE(`p-value`,i.value))},dependencies:[fne,fae],styles:[`.container[_ngcontent-%COMP%]{display:grid;gap:24px;padding:16px}.line-height[_ngcontent-%COMP%]{line-height:1.6}.row[_ngcontent-%COMP%]{text-align:center;gap:16px}.items[_ngcontent-%COMP%]{display:flex;align-items:center;flex-direction:column}`],changeDetection:1})}return o})();var Re=o=>({"docs-sample-code-tabs":o});var Pe=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(l){return new(l||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-progress-circle-view`]],standalone:!1,decls:30,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[`p-label`,`CSS`],[`appCodeHighlight`,``,1,`css`],[1,`docs-sample-container`]],template:function(l,i){l&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),lO(3,`PO Progress Circle`),wg(),jc(4,`a`,2),mt(`click`,function(){return i.toggleSampleCodeTabs()}),nu(5,`span`),lO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),lO(12,`sample-po-progress-circle/sample-po-progress-circle.component.html`),wg(),jc(13,`pre`,7),lO(14,`<div class="container">
  <po-widget p-title="Regra de Adequa\xE7\xE3o de Layout">
    <div class="line-height">
      <p class="po-font-text-large-bold">\u{1F4CF} Para adequa\xE7\xE3o do layout, o valor m\xEDnimo de p-radius \xE9 24px.</p>
      <p class="po-text-large">
        O raio m\xEDnimo de 24px \xE9 necess\xE1rio para evitar colis\xE3o entre o conte\xFAdo central (porcentagem ou \xEDcone de erro) e
        a borda do c\xEDrculo. Valores menores podem causar sobreposi\xE7\xE3o visual dos elementos.
      </p>
    </div>
  </po-widget>

  <po-widget p-title="Exemplo B\xE1sico - Radius M\xEDnimo (24px)">
    <div class="po-row po-align-items-center">
      <div class="po-md-6 po-lg-4 po-center">
        <po-progress p-shape="circle" [p-value]="value" p-show-percentage="true" p-radius="24"></po-progress>
      </div>
      <div class="po-md-6 po-lg-8">
        <p><strong>Configura\xE7\xE3o:</strong></p>
        <ul>
          <li>p-shape="circle"</li>
          <li>p-value="65"</li>
          <li>p-show-percentage="true"</li>
          <li>p-radius="24" (valor m\xEDnimo permitido)</li>
        </ul>
        <p class="po-font-text">A porcentagem \xE9 exibida no centro sem colis\xE3o com a borda do c\xEDrculo.</p>
      </div>
    </div>
  </po-widget>

  <po-widget p-title="Com Radius Maior (60px)">
    <div class="po-row po-align-items-center">
      <div class="po-md-6 po-lg-4 po-center">
        <po-progress p-shape="circle" [p-value]="value" p-show-percentage="true" p-radius="60"></po-progress>
      </div>
      <div class="po-md-6 po-lg-8">
        <p><strong>Configura\xE7\xE3o:</strong></p>
        <ul>
          <li>p-shape="circle"</li>
          <li>p-value="65"</li>
          <li>p-show-percentage="true"</li>
          <li>p-radius="60" (valor maior)</li>
        </ul>
        <p class="po-font-text">
          Maior espa\xE7o dispon\xEDvel para o conte\xFAdo central. Recomendado para melhor visualiza\xE7\xE3o.
        </p>
      </div>
    </div>
  </po-widget>

  <po-widget p-title="Com Status Error (Radius 24px)">
    <div class="po-row po-align-items-center">
      <div class="po-md-6 po-lg-4 po-center">
        <po-progress p-shape="circle" p-value="50" p-status="error" p-radius="24"></po-progress>
      </div>
      <div class="po-md-6 po-lg-8">
        <p><strong>Configura\xE7\xE3o:</strong></p>
        <ul>
          <li>p-shape="circle"</li>
          <li>p-value="50"</li>
          <li>p-status="error"</li>
          <li>p-radius="24" (valor m\xEDnimo)</li>
        </ul>
        <p class="po-font-text">\xCDcone de erro exibido no centro. O radius m\xEDnimo de 24px evita sobreposi\xE7\xE3o.</p>
      </div>
    </div>
  </po-widget>

  <po-widget p-title="Modo Indeterminado">
    <div class="po-row po-align-items-center">
      <div class="po-md-6 po-lg-4 po-center">
        <po-progress p-shape="circle" p-indeterminate="true" p-radius="30"></po-progress>
      </div>
      <div class="po-md-6 po-lg-8">
        <p><strong>Configura\xE7\xE3o:</strong></p>
        <ul>
          <li>p-shape="circle"</li>
          <li>p-indeterminate="true"</li>
          <li>p-radius="30"</li>
        </ul>
        <p class="po-font-text">Anima\xE7\xE3o cont\xEDnua para indicar progresso em andamento.</p>
      </div>
    </div>
  </po-widget>

  <po-widget p-title="Compara\xE7\xE3o Visual - Diferentes Status">
    <div class="po-row row">
      <div class="po-md-3 po-center items">
        <p class="po-font-text-large-bold po-mb-1">Success</p>
        <po-progress
          p-shape="circle"
          p-value="100"
          p-status="success"
          p-show-percentage="true"
          p-radius="25"
        ></po-progress>
      </div>
      <div class="po-md-3 po-center items">
        <p class="po-font-text-large-bold po-mb-1">Warning</p>
        <po-progress
          p-shape="circle"
          p-value="50"
          p-status="warning"
          p-show-percentage="true"
          p-radius="25"
        ></po-progress>
      </div>
      <div class="po-md-3 po-center items">
        <p class="po-font-text-large-bold po-mb-1">Error</p>
        <po-progress p-shape="circle" p-value="0" p-status="error" p-show-percentage="true" p-radius="25"></po-progress>
      </div>
      <div class="po-md-3 po-center items">
        <p class="po-font-text-large-bold po-mb-1">Default</p>
        <po-progress p-shape="circle" p-value="75" p-show-percentage="true" p-radius="25"></po-progress>
      </div>
    </div>
  </po-widget>
</div>
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),lO(18,`sample-po-progress-circle/sample-po-progress-circle.component.ts`),wg(),jc(19,`pre`,9),lO(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-progress-circle',
  templateUrl: './sample-po-progress-circle.component.html',
  styleUrls: ['./sample-po-progress-circle.component.css'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoProgressCircleComponent {
  minRadius = 24;
  value = 65;
}
`),wg()()(),jc(21,`po-tab`,10)(22,`div`)(23,`label`,6),lO(24,`sample-po-progress-circle/sample-po-progress-circle.component.css`),wg(),jc(25,`pre`,11),lO(26,`.container {
  display: grid;
  gap: 24px;
  padding: 16px;
}

.line-height {
  line-height: 1.6;
}

.row {
  text-align: center;
  gap: 16px;
}

.items {
  display: flex;
  align-items: center;
  flex-direction: column;
}
`),wg()()()()(),jc(27,`div`,12),nu(28,`sample-po-progress-circle`),wg(),nu(29,`hr`)),l&2&&(rg(5),Xx(`po-icon `+i.sampleCodeButtonIcon),rg(),Ag(` `,i.sampleCodeButtonLabel),rg(),UE(`ngClass`,DO(4,Re,i.hideSampleCodeTabs)))},dependencies:[Ok,P,Qae,ere,Ce],encapsulation:2,changeDetection:1})}return o})();var we=(()=>{class o{static ɵfac=function(l){return new(l||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-progress-doc`]],standalone:!1,decls:966,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`string`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[`pan`,``,1,`docs-api-property-type`,`PoProgressAction`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`pan`,``,1,`docs-api-property-type`,`TemplateRef<void>`],[`pan`,``,1,`docs-api-property-type`,`number`],[`href`,`https://po-ui.io/documentation/po-theme`],[`pan`,``,1,`docs-api-property-type`,`PoProgressStatus`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`Function`],[`href`,`https://po-ui.io/icons`]],template:function(l,i){l&1&&(jc(0,`div`,0)(1,`p`,1)(2,`code`),lO(3,`import { PoProgressModule } from '@po-ui/ng-components';`),wg()(),jc(4,`div`,2)(5,`p`),lO(6,`Módulo do componente `),jc(7,`code`),lO(8,`po-progress`),wg(),lO(9,`.`),wg()(),jc(10,`h3`,3),lO(11,`Componente`),wg(),jc(12,`h4`,4)(13,`code`,5),lO(14,`PoProgressComponent`),wg()(),jc(15,`div`,2)(16,`p`),lO(17,`Componente de barra de progresso que possibilita exibir visualmente o progresso/carregamento de uma tarefa.`),wg(),jc(18,`p`),lO(19,`Este componente pode ser utilizado no `),jc(20,`em`),lO(21,`upload`),wg(),lO(22,` de arquivos, uma atualização no sistema ou o processamento de uma imagem.`),wg(),jc(23,`h4`),lO(24,`Tokens customizáveis`),wg(),jc(25,`p`),lO(26,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),wg(),jc(27,`blockquote`)(28,`p`),lO(29,`Para maiores informações, acesse o guia `),jc(30,`a`,6),lO(31,`Personalizando o Tema Padrão com Tokens CSS`),wg(),lO(32,`.`),wg()(),jc(33,`table`)(34,`thead`)(35,`tr`)(36,`th`),lO(37,`Propriedade`),wg(),jc(38,`th`),lO(39,`Descrição`),wg(),jc(40,`th`),lO(41,`Valor Padrão`),wg()()(),jc(42,`tbody`)(43,`tr`)(44,`td`)(45,`strong`),lO(46,`Default Values`),wg()(),nu(47,`td`)(48,`td`),wg(),jc(49,`tr`)(50,`td`)(51,`code`),lO(52,`--font-family`),wg()(),jc(53,`td`),lO(54,`Família tipográfica usada`),wg(),jc(55,`td`)(56,`code`),lO(57,`var(--font-family-theme)`),wg()()(),jc(58,`tr`)(59,`td`)(60,`code`),lO(61,`--text-color`),wg()(),jc(62,`td`),lO(63,`Cor do texto`),wg(),jc(64,`td`)(65,`code`),lO(66,`var(--color-neutral-dark-90)`),wg()()(),jc(67,`tr`)(68,`td`)(69,`strong`),lO(70,`Error`),wg()(),nu(71,`td`)(72,`td`),wg(),jc(73,`tr`)(74,`td`)(75,`code`),lO(76,`--text-color-error`),wg()(),jc(77,`td`),lO(78,`Cor do texto no estado error`),wg(),jc(79,`td`)(80,`code`),lO(81,`var(--color-feedback-negative-dark)`),wg()()(),jc(82,`tr`)(83,`td`)(84,`code`),lO(85,`--color-icon-error`),wg()(),jc(86,`td`),lO(87,`Cor do ícone no estado error`),wg(),jc(88,`td`)(89,`code`),lO(90,`var(--color-feedback-negative-dark)`),wg()()(),jc(91,`tr`)(92,`td`)(93,`strong`),lO(94,`po-progress-bar`),wg()(),nu(95,`td`)(96,`td`),wg(),jc(97,`tr`)(98,`td`)(99,`code`),lO(100,`--background-color-tray`),wg()(),jc(101,`td`),lO(102,`Cor do background`),wg(),jc(103,`td`)(104,`code`),lO(105,`var(--color-brand-01-lightest)`),wg()()(),jc(106,`tr`)(107,`td`)(108,`code`),lO(109,`--background-color-indicator`),wg()(),jc(110,`td`),lO(111,`Cor do background do indicador`),wg(),jc(112,`td`)(113,`code`),lO(114,`var(--color-action-default)`),wg()()(),jc(115,`tr`)(116,`td`)(117,`strong`),lO(118,`po-progress-circle`),wg()(),nu(119,`td`)(120,`td`),wg(),jc(121,`tr`)(122,`td`)(123,`code`),lO(124,`--background-color-tray`),wg()(),jc(125,`td`),lO(126,`Cor do background`),wg(),jc(127,`td`)(128,`code`),lO(129,`var(--color-brand-01-lightest)`),wg()()(),jc(130,`tr`)(131,`td`)(132,`code`),lO(133,`--background-color-indicator`),wg()(),jc(134,`td`),lO(135,`Cor do background do indicador`),wg(),jc(136,`td`)(137,`code`),lO(138,`var(--color-action-default)`),wg()()()()()(),jc(139,`div`,7)(140,`h4`,8),lO(141,`Seletor`),wg(),jc(142,`pre`,9),lO(143,`<po-progress
    p-aria-label="string"
    (p-cancel)="EventEmitter"
    p-custom-action="PoProgressAction"
    (p-custom-action-click)="EventEmitter"
    p-disabled-cancel="boolean"
    p-indeterminate="boolean"
    p-info="string"
    p-info-icon="string | TemplateRef<void>"
    p-radius="number"
    (p-retry)="EventEmitter"
    p-shape="string"
    p-show-percentage="boolean"
    p-size="string"
    p-size-actions="string"
    p-status="PoProgressStatus"
    p-text="string"
    p-value="number" >
</po-progress>
`),wg()(),jc(144,`h4`,10),lO(145,`Propriedades`),wg(),jc(146,`table`,11)(147,`tr`,12)(148,`th`,13),lO(149,`Nome`),wg(),jc(150,`th`,13),lO(151,`Tipo`),wg(),jc(152,`th`,13),lO(153,`Padrão`),wg(),jc(154,`th`,13),lO(155,`Descrição`),wg()(),jc(156,`tr`,14)(157,`td`,15)(158,`div`,16)(159,`span`,17),lO(160,` p-aria-label`),nu(161,`br`),wg()()(),jc(162,`td`,18)(163,`code`,19),lO(164,`string`),wg()(),jc(165,`td`,20),lO(166,`-`),wg(),jc(167,`td`,21)(168,`em`)(169,`strong`),lO(170,`(opcional)`),wg()(),jc(171,`p`),lO(172,`Define um nome acessível para o elemento com `),jc(173,`code`),lO(174,`role="progressbar"`),wg(),lO(175,`.`),wg(),jc(176,`p`),lO(177,`Quando não informado, o componente utiliza o valor de `),jc(178,`code`),lO(179,`p-text`),wg(),lO(180,` como alternativa, se disponível.`),wg()()(),jc(181,`tr`,14)(182,`td`,15)(183,`div`,22)(184,`span`,23),lO(185,` (p-cancel)`),nu(186,`br`),wg()()(),jc(187,`td`,18)(188,`code`,24),lO(189,`EventEmitter`),wg()(),jc(190,`td`,20),lO(191,`-`),wg(),jc(192,`td`,21)(193,`em`)(194,`strong`),lO(195,`(opcional)`),wg()(),jc(196,`p`),lO(197,`Evento que será disparado ao clicar no ícone de cancelamento ("x") na parte inferior da barra de progresso.`),wg(),jc(198,`p`),lO(199,`Ao ser disparado, a função receberá como parâmetro o status atual da barra de progresso.`),wg(),jc(200,`blockquote`)(201,`p`),lO(202,`Se nenhuma função for passada para o evento ou a barra de progresso estiver com o status `),jc(203,`code`),lO(204,`PoProgressStatus.Success`),wg(),lO(205,`,
o \xEDcone de cancelamento n\xE3o ser\xE1 exibido.`),wg()(),jc(206,`blockquote`)(207,`p`),lO(208,`Não compatível com `),jc(209,`code`),lO(210,`p-shape="circle"`),wg(),lO(211,`.`),wg()()()(),jc(212,`tr`,14)(213,`td`,15)(214,`div`,16)(215,`span`,17),lO(216,` p-custom-action`),nu(217,`br`),wg()()(),jc(218,`td`,18)(219,`code`,25),lO(220,`PoProgressAction`),wg()(),jc(221,`td`,20),lO(222,`-`),wg(),jc(223,`td`,21)(224,`em`)(225,`strong`),lO(226,`(opcional)`),wg()(),jc(227,`p`),lO(228,`Permite definir uma ação personalizada no componente `),jc(229,`code`),lO(230,`po-progress`),wg(),lO(231,`, exibindo um bot\xE3o no canto inferior direito
da barra de progresso. A a\xE7\xE3o deve implementar a interface `),jc(232,`strong`),lO(233,`PoProgressAction`),wg(),lO(234,`, possibilitando configurar:`),wg(),jc(235,`ul`)(236,`li`)(237,`strong`)(238,`code`),lO(239,`label`),wg()(),lO(240,`: Texto exibido no botão (opcional).`),wg(),jc(241,`li`)(242,`strong`)(243,`code`),lO(244,`icon`),wg()(),lO(245,`: Ícone exibido no botão (opcional).`),wg(),jc(246,`li`)(247,`strong`)(248,`code`),lO(249,`type`),wg()(),lO(250,`: Tipo do botão (`),jc(251,`code`),lO(252,`default`),wg(),lO(253,` ou `),jc(254,`code`),lO(255,`danger`),wg(),lO(256,`) para indicar a intenção da ação (opcional).`),wg(),jc(257,`li`)(258,`strong`)(259,`code`),lO(260,`disabled`),wg()(),lO(261,`: Indica se o botão deve estar desabilitado (opcional).`),wg(),jc(262,`li`)(263,`strong`)(264,`code`),lO(265,`visible`),wg()(),lO(266,`: Determina se o botão será exibido. Pode ser um valor booleano ou uma função que retorna um booleano (opcional).`),wg()(),jc(267,`blockquote`)(268,`p`),lO(269,`Não compatível com `),jc(270,`code`),lO(271,`p-shape="circle"`),wg(),lO(272,`.`),wg()()()(),jc(273,`tr`,14)(274,`td`,15)(275,`div`,22)(276,`span`,23),lO(277,` (p-custom-action-click)`),nu(278,`br`),wg()()(),jc(279,`td`,18)(280,`code`,24),lO(281,`EventEmitter`),wg()(),jc(282,`td`,20),lO(283,`-`),wg(),jc(284,`td`,21)(285,`em`)(286,`strong`),lO(287,`(opcional)`),wg()(),jc(288,`p`),lO(289,`Evento emitido quando o botão definido em `),jc(290,`code`),lO(291,`p-custom-action`),wg(),lO(292,` \xE9 clicado. Este evento retorna informa\xE7\xF5es
relacionadas \xE0 barra de progresso ou ao arquivo/processo associado, permitindo executar a\xE7\xF5es espec\xEDficas.`),wg(),jc(293,`blockquote`)(294,`p`),lO(295,`Não compatível com `),jc(296,`code`),lO(297,`p-shape="circle"`),wg(),lO(298,`.`),wg()()()(),jc(299,`tr`,14)(300,`td`,15)(301,`div`,16)(302,`span`,17),lO(303,` p-disabled-cancel`),nu(304,`br`),wg()()(),jc(305,`td`,18)(306,`code`,26),lO(307,`boolean`),wg()(),jc(308,`td`,20)(309,`p`)(310,`code`),lO(311,`false`),wg()()(),jc(312,`td`,21)(313,`em`)(314,`strong`),lO(315,`(opcional)`),wg()(),jc(316,`p`),lO(317,`Desabilita botão de cancelamento na parte inferior da barra de progresso.`),wg(),jc(318,`blockquote`)(319,`p`),lO(320,`Se nenhuma função for passada para o evento `),jc(321,`code`),lO(322,`(p-cancel)`),wg(),lO(323,` ou a barra de progresso estiver com o status `),jc(324,`code`),lO(325,`PoProgressStatus.Success`),wg(),lO(326,`,
o \xEDcone de cancelamento n\xE3o ser\xE1 exibido.`),wg()(),jc(327,`blockquote`)(328,`p`),lO(329,`Não compatível com `),jc(330,`code`),lO(331,`p-shape="circle"`),wg(),lO(332,`.`),wg()()()(),jc(333,`tr`,14)(334,`td`,15)(335,`div`,16)(336,`span`,17),lO(337,` p-indeterminate`),nu(338,`br`),wg()()(),jc(339,`td`,18)(340,`code`,26),lO(341,`boolean`),wg()(),jc(342,`td`,20)(343,`p`)(344,`code`),lO(345,`false`),wg()()(),jc(346,`td`,21)(347,`em`)(348,`strong`),lO(349,`(opcional)`),wg()(),jc(350,`p`),lO(351,`Habilita o modo indeterminado na barra de progresso, que mostra uma animação fixa sem um valor estabelecido.`),wg(),jc(352,`p`),lO(353,`Esta opção pode ser utilizada quando não souber quanto tempo levará para que um processo seja concluído.`),wg(),jc(354,`blockquote`)(355,`p`),lO(356,`Caso esta propriedade e a `),jc(357,`code`),lO(358,`p-value`),wg(),lO(359,` seja habilitada, a propriedade `),jc(360,`code`),lO(361,`p-value`),wg(),lO(362,` será ignorada.`),wg()()()(),jc(363,`tr`,14)(364,`td`,15)(365,`div`,16)(366,`span`,17),lO(367,` p-info`),nu(368,`br`),wg()()(),jc(369,`td`,18)(370,`code`,19),lO(371,`string`),wg()(),jc(372,`td`,20),lO(373,`-`),wg(),jc(374,`td`,21)(375,`em`)(376,`strong`),lO(377,`(opcional)`),wg()(),jc(378,`p`),lO(379,`Informação adicional que aparecerá abaixo da barra de progresso ao lado direito.`),wg(),jc(380,`blockquote`)(381,`p`),lO(382,`Não compatível com `),jc(383,`code`),lO(384,`p-shape="circle"`),wg(),lO(385,`.`),wg()()()(),jc(386,`tr`,14)(387,`td`,15)(388,`div`,16)(389,`span`,17),lO(390,` p-info-icon`),nu(391,`br`),wg()()(),jc(392,`td`,18)(393,`code`,19),lO(394,`string `),wg(),jc(395,`code`,27),lO(396,` TemplateRef<void>`),wg()(),jc(397,`td`,20),lO(398,`-`),wg(),jc(399,`td`,21)(400,`em`)(401,`strong`),lO(402,`(opcional)`),wg()(),jc(403,`p`),lO(404,`Ícone que aparecerá ao lado do texto da propriedade `),jc(405,`code`),lO(406,`p-info`),wg(),lO(407,`.`),wg(),jc(408,`p`),lO(409,`Exemplo: `),jc(410,`code`),lO(411,`an an-check`),wg(),lO(412,`.`),wg(),jc(413,`blockquote`)(414,`p`),lO(415,`Não compatível com `),jc(416,`code`),lO(417,`p-shape="circle"`),wg(),lO(418,`.`),wg()()()(),jc(419,`tr`,14)(420,`td`,15)(421,`div`,16)(422,`span`,17),lO(423,` p-radius`),nu(424,`br`),wg()()(),jc(425,`td`,18)(426,`code`,28),lO(427,`number`),wg()(),jc(428,`td`,20)(429,`p`)(430,`code`),lO(431,`45`),wg(),lO(432,` (automático)`),wg()(),jc(433,`td`,21)(434,`em`)(435,`strong`),lO(436,`(opcional)`),wg()(),jc(437,`p`),lO(438,`Define o raio do c\xEDrculo SVG em pixels. Permite ao usu\xE1rio customizar o tamanho
do indicador circular ao utilizar `),jc(439,`code`),lO(440,`p-shape="circle"`),wg(),lO(441,`.`),wg(),jc(442,`blockquote`)(443,`p`),lO(444,`O valor mínimo aceito é `),jc(445,`strong`),lO(446,`24`),wg(),lO(447,`.`),wg()(),jc(448,`blockquote`)(449,`p`),lO(450,`Quando n\xE3o informado, o componente calcula o raio automaticamente a partir do container pai.
Caso o container pai n\xE3o possua dimens\xF5es definidas, o valor padr\xE3o de `),jc(451,`strong`),lO(452,`45`),wg(),lO(453,` será utilizado.`),wg()(),jc(454,`blockquote`)(455,`p`),lO(456,`Não compatível com `),jc(457,`code`),lO(458,`p-shape="bar"`),wg(),lO(459,`.`),wg()()()(),jc(460,`tr`,14)(461,`td`,15)(462,`div`,22)(463,`span`,23),lO(464,` (p-retry)`),nu(465,`br`),wg()()(),jc(466,`td`,18)(467,`code`,24),lO(468,`EventEmitter`),wg()(),jc(469,`td`,20),lO(470,`-`),wg(),jc(471,`td`,21)(472,`em`)(473,`strong`),lO(474,`(opcional)`),wg()(),jc(475,`p`),lO(476,`Evento que será disparado ao clicar no ícone de tentar novamente na parte inferior da barra de progresso.`),wg(),jc(477,`blockquote`)(478,`p`),lO(479,`o \xEDcone ser\xE1 exibido apenas se informar uma fun\xE7\xE3o neste evento e o status da barra de progresso for
`),jc(480,`code`),lO(481,`PoProgressStatus.Error`),wg(),lO(482,`.`),wg()(),jc(483,`blockquote`)(484,`p`),lO(485,`Não compatível com `),jc(486,`code`),lO(487,`p-shape="circle"`),wg(),lO(488,`.`),wg()()()(),jc(489,`tr`,14)(490,`td`,15)(491,`div`,16)(492,`span`,17),lO(493,` p-shape`),nu(494,`br`),wg()()(),jc(495,`td`,18)(496,`code`,19),lO(497,`string`),wg()(),jc(498,`td`,20)(499,`p`)(500,`code`),lO(501,`bar`),wg()()(),jc(502,`td`,21)(503,`em`)(504,`strong`),lO(505,`(opcional)`),wg()(),jc(506,`p`),lO(507,`Define o formato visual do componente de progresso.`),wg(),jc(508,`p`),lO(509,`Valores válidos:`),wg(),jc(510,`ul`)(511,`li`)(512,`code`),lO(513,`bar`),wg(),lO(514,`: exibe o progresso em formato de barra.`),wg(),jc(515,`li`)(516,`code`),lO(517,`circle`),wg(),lO(518,`: exibe o progresso em formato circular.`),wg()()()(),jc(519,`tr`,14)(520,`td`,15)(521,`div`,16)(522,`span`,17),lO(523,` p-show-percentage`),nu(524,`br`),wg()()(),jc(525,`td`,18)(526,`code`,26),lO(527,`boolean`),wg()(),jc(528,`td`,20)(529,`p`)(530,`code`),lO(531,`false`),wg()()(),jc(532,`td`,21)(533,`em`)(534,`strong`),lO(535,`(opcional)`),wg()(),jc(536,`p`),lO(537,`Ativa a exibição da porcentagem atual da barra de progresso.`),wg(),jc(538,`blockquote`)(539,`p`),lO(540,`Se utilizada no `),jc(541,`code`),lO(542,`p-shape="circle"`),wg(),lO(543,` e o status estiver como `),jc(544,`code`),lO(545,`error`),wg(),lO(546,`, a porcentagem não será exibida.`),wg()()()(),jc(547,`tr`,14)(548,`td`,15)(549,`div`,16)(550,`span`,17),lO(551,` p-size`),nu(552,`br`),wg()()(),jc(553,`td`,18)(554,`code`,19),lO(555,`string`),wg()(),jc(556,`td`,20)(557,`p`)(558,`code`),lO(559,`large`),wg()()(),jc(560,`td`,21)(561,`em`)(562,`strong`),lO(563,`(opcional)`),wg()(),jc(564,`p`),lO(565,`Define a expessura da barra de progresso.`),wg(),jc(566,`p`),lO(567,`Valores válidos:`),wg(),jc(568,`ul`)(569,`li`),lO(570,`medium`),wg(),jc(571,`li`),lO(572,`large`),wg()()()(),jc(573,`tr`,14)(574,`td`,15)(575,`div`,16)(576,`span`,17),lO(577,` p-size-actions`),nu(578,`br`),wg()()(),jc(579,`td`,18)(580,`code`,19),lO(581,`string`),wg()(),jc(582,`td`,20)(583,`p`)(584,`code`),lO(585,`medium`),wg()()(),jc(586,`td`,21)(587,`em`)(588,`strong`),lO(589,`(opcional)`),wg()(),jc(590,`p`),lO(591,`Define o tamanho das ações no componente com excessão da barra de progresso que pode ser ajustada através da propriedade `),jc(592,`code`),lO(593,`p-size`),wg(),lO(594,`:`),wg(),jc(595,`ul`)(596,`li`)(597,`code`),lO(598,`small`),wg(),lO(599,`: aplica a medida small de cada componente (disponível apenas para acessibilidade AA).`),wg(),jc(600,`li`)(601,`code`),lO(602,`medium`),wg(),lO(603,`: aplica a medida medium de cada componente.`),wg()(),jc(604,`blockquote`)(605,`p`),lO(606,`Caso a acessibilidade AA não esteja configurada, o tamanho `),jc(607,`code`),lO(608,`medium`),wg(),lO(609,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),jc(610,`a`,29),lO(611,`po-theme`),wg(),lO(612,`.`),wg()(),jc(613,`blockquote`)(614,`p`),lO(615,`Não compatível com `),jc(616,`code`),lO(617,`p-shape="circle"`),wg(),lO(618,`.`),wg()()()(),jc(619,`tr`,14)(620,`td`,15)(621,`div`,16)(622,`span`,17),lO(623,` p-status`),nu(624,`br`),wg()()(),jc(625,`td`,18)(626,`code`,30),lO(627,`PoProgressStatus`),wg()(),jc(628,`td`,20)(629,`p`)(630,`code`),lO(631,`PoProgressStatus.Default`),wg()()(),jc(632,`td`,21)(633,`em`)(634,`strong`),lO(635,`(opcional)`),wg()(),jc(636,`p`),lO(637,`Status da barra de progresso que indicar\xE1 visualmente ao usu\xE1rio
o andamento, por exemplo, se a mesma foi conclu\xEDda com sucesso.`),wg()()(),jc(638,`tr`,14)(639,`td`,15)(640,`div`,16)(641,`span`,17),lO(642,` p-text`),nu(643,`br`),wg()()(),jc(644,`td`,18)(645,`code`,19),lO(646,`string`),wg()(),jc(647,`td`,20),lO(648,`-`),wg(),jc(649,`td`,21)(650,`em`)(651,`strong`),lO(652,`(opcional)`),wg()(),jc(653,`p`),lO(654,`Texto principal que aparecerá abaixo da barra de progresso no lado esquerdo.`),wg(),jc(655,`blockquote`)(656,`p`),lO(657,`Não compatível com `),jc(658,`code`),lO(659,`p-shape="circle"`),wg(),lO(660,`.`),wg()()()(),jc(661,`tr`,14)(662,`td`,15)(663,`div`,16)(664,`span`,17),lO(665,` p-value`),nu(666,`br`),wg()()(),jc(667,`td`,18)(668,`code`,28),lO(669,`number`),wg()(),jc(670,`td`,20)(671,`p`)(672,`code`),lO(673,`0`),wg()()(),jc(674,`td`,21)(675,`em`)(676,`strong`),lO(677,`(opcional)`),wg()(),jc(678,`p`),lO(679,`Valor que representará o progresso.`),wg(),jc(680,`blockquote`)(681,`p`),lO(682,`Os valores aceitos são números inteiros de `),jc(683,`code`),lO(684,`0`),wg(),lO(685,` à `),jc(686,`code`),lO(687,`100`),wg(),lO(688,`.`),wg()()()()(),jc(689,`h3`),lO(690,`Interfaces`),wg(),jc(691,`h4`,31)(692,`code`,5),lO(693,`PoProgressAction`),wg()(),jc(694,`div`,2)(695,`p`),lO(696,`Interface para as ações dos componentes po-progress e po-upload.`),wg()(),jc(697,`h4`,10),lO(698,`Propriedades`),wg(),jc(699,`table`,11)(700,`tr`,12)(701,`th`,13),lO(702,`Nome`),wg(),jc(703,`th`,13),lO(704,`Tipo`),wg(),jc(705,`th`,13),lO(706,`Descrição`),wg()(),jc(707,`tr`,14)(708,`td`,15)(709,`div`,16)(710,`span`,17),lO(711,` disabled`),nu(712,`br`),wg()()(),jc(713,`td`,18)(714,`code`,26),lO(715,`boolean `),wg(),jc(716,`code`,32),lO(717,` Function`),wg()(),jc(718,`td`,21)(719,`em`)(720,`strong`),lO(721,`(opcional)`),wg()(),jc(722,`p`),lO(723,`Função que deve retornar um booleano para habilitar ou desabilitar a ação para o registro selecionado.`),wg(),jc(724,`p`),lO(725,`Também é possível informar diretamente um valor booleano que vai habilitar ou desabilitar a ação para todos os registros.`),wg()()(),jc(726,`tr`,14)(727,`td`,15)(728,`div`,16)(729,`span`,17),lO(730,` icon`),nu(731,`br`),wg()()(),jc(732,`td`,18)(733,`code`,19),lO(734,`string `),wg(),jc(735,`code`,27),lO(736,` TemplateRef<void>`),wg()(),jc(737,`td`,21)(738,`em`)(739,`strong`),lO(740,`(opcional)`),wg()(),jc(741,`p`),lO(742,`Define um ícone que será exibido ao lado esquerdo do rótulo.`),wg(),jc(743,`p`),lO(744,`É possível usar qualquer um dos ícones da `),jc(745,`a`,33),lO(746,`Biblioteca de ícones`),wg(),lO(747,`. conforme exemplo abaixo:`),wg(),jc(748,`pre`)(749,`code`),lO(750,`<po-component
 [p-property]="[{ label: 'PHOSPHOR ICON', icon: 'an an-newspaper' }]">
</po-component>
`),wg()(),jc(751,`p`),lO(752,`Também é possível utilizar outras fontes de ícones, por exemplo a biblioteca Font Awesome, da seguinte forma:`),wg(),jc(753,`pre`)(754,`code`),lO(755,`<po-component
 [p-property]="[{ label: 'FA ICON', icon: 'fa fa-icon-podcast' }]">
</po-component>
`),wg()(),jc(756,`p`),lO(757,`Outra opção seria a customização do ícone através do `),jc(758,`code`),lO(759,`TemplateRef`),wg(),lO(760,`, conforme exemplo abaixo:
component.html:`),wg(),jc(761,`pre`)(762,`code`),lO(763,`<ng-template #iconTemplate>
  <ion-icon name="heart"></ion-icon>
</ng-template>

<po-component [p-property]="myProperty"></po-component>
`),wg()(),jc(764,`p`),lO(765,`component.ts:`),wg(),jc(766,`pre`)(767,`code`),lO(768,`@ViewChild('iconTemplate', { static: true } ) iconTemplate : TemplateRef<void>;

myProperty = [
 {
   label: 'FA ICON',
   icon: this.iconTemplate
 }
];
`),wg()()()(),jc(769,`tr`,14)(770,`td`,15)(771,`div`,16)(772,`span`,17),lO(773,` label`),nu(774,`br`),wg()()(),jc(775,`td`,18)(776,`code`,19),lO(777,`string`),wg()(),jc(778,`td`,21)(779,`em`)(780,`strong`),lO(781,`(opcional)`),wg()(),jc(782,`p`),lO(783,`Rótulo da ação.`),wg()()(),jc(784,`tr`,14)(785,`td`,15)(786,`div`,16)(787,`span`,17),lO(788,` type`),nu(789,`br`),wg()()(),jc(790,`td`,18)(791,`code`,19),lO(792,`string`),wg()(),jc(793,`td`,21)(794,`em`)(795,`strong`),lO(796,`(opcional)`),wg()(),jc(797,`p`),lO(798,`Define a cor do item, sendo `),jc(799,`code`),lO(800,`default`),wg(),lO(801,` o padrão.`),wg(),jc(802,`p`),lO(803,`Valores válidos:`),wg(),jc(804,`ul`)(805,`li`)(806,`code`),lO(807,`default`),wg()(),jc(808,`li`)(809,`code`),lO(810,`danger`),wg(),lO(811,` - indicado para ações exclusivas (excluir, sair).`),wg()()()(),jc(812,`tr`,14)(813,`td`,15)(814,`div`,16)(815,`span`,17),lO(816,` visible`),nu(817,`br`),wg()()(),jc(818,`td`,18)(819,`code`,26),lO(820,`boolean `),wg(),jc(821,`code`,32),lO(822,` Function`),wg()(),jc(823,`td`,21)(824,`em`)(825,`strong`),lO(826,`(opcional)`),wg()(),jc(827,`p`),lO(828,`Define se a ação será visível.`),wg(),jc(829,`blockquote`)(830,`p`),lO(831,`Caso o valor não seja especificado a ação será visível.`),wg()(),jc(832,`p`),lO(833,`Opções para tornar a ação visível ou não:`),wg(),jc(834,`ul`)(835,`li`)(836,`p`),lO(837,`Função que deve retornar um booleano.`),wg()(),jc(838,`li`)(839,`p`),lO(840,`Informar diretamente um valor booleano.`),wg()()()()()(),jc(841,`h3`),lO(842,`Enums`),wg(),jc(843,`h4`,4)(844,`code`,5),lO(845,`PoProgressShape`),wg()(),jc(846,`div`,2)(847,`p`),lO(848,`Enum `),jc(849,`code`),lO(850,`PoProgressShape`),wg(),lO(851,` para definir o formato visual do componente de progresso.`),wg()(),jc(852,`h4`,10),lO(853,`Propriedades`),wg(),jc(854,`table`,11)(855,`tr`,12)(856,`th`,13),lO(857,`Nome`),wg(),jc(858,`th`,13),lO(859,`Descrição`),wg()(),jc(860,`tr`,14)(861,`td`,15)(862,`div`,16)(863,`span`,17),lO(864,` bar`),nu(865,`br`),wg()()(),jc(866,`td`,21)(867,`p`),lO(868,`Formato barra de progresso (padrão).`),wg()()(),jc(869,`tr`,14)(870,`td`,15)(871,`div`,16)(872,`span`,17),lO(873,` circle`),nu(874,`br`),wg()()(),jc(875,`td`,21)(876,`p`),lO(877,`Formato circular de progresso.`),wg()()()(),jc(878,`h4`,4)(879,`code`,5),lO(880,`PoProgressSize`),wg()(),jc(881,`div`,2)(882,`p`),lO(883,`Enum para configurar a expessura (`),jc(884,`code`),lO(885,`p-size`),wg(),lO(886,`) da barra de progresso do componente.`),wg()(),jc(887,`h4`,10),lO(888,`Propriedades`),wg(),jc(889,`table`,11)(890,`tr`,12)(891,`th`,13),lO(892,`Nome`),wg(),jc(893,`th`,13),lO(894,`Descrição`),wg()(),jc(895,`tr`,14)(896,`td`,15)(897,`div`,16)(898,`span`,17),lO(899,` medium`),nu(900,`br`),wg()()(),jc(901,`td`,21)(902,`p`),lO(903,`Tamanho médio com 4px.`),wg()()(),jc(904,`tr`,14)(905,`td`,15)(906,`div`,16)(907,`span`,17),lO(908,` large`),nu(909,`br`),wg()()(),jc(910,`td`,21)(911,`p`),lO(912,`Tamanho grande com 8px.`),wg()()()(),jc(913,`h4`,4)(914,`code`,5),lO(915,`PoProgressStatus`),wg()(),jc(916,`div`,2)(917,`p`),lO(918,`Enum `),jc(919,`code`),lO(920,`PoProgressStatus`),wg(),lO(921,` para os status de barra de progresso.`),wg()(),jc(922,`h4`,10),lO(923,`Propriedades`),wg(),jc(924,`table`,11)(925,`tr`,12)(926,`th`,13),lO(927,`Nome`),wg(),jc(928,`th`,13),lO(929,`Descrição`),wg()(),jc(930,`tr`,14)(931,`td`,15)(932,`div`,16)(933,`span`,17),lO(934,` Default`),nu(935,`br`),wg()()(),jc(936,`td`,21)(937,`p`),lO(938,`Define o status `),jc(939,`code`),lO(940,`default`),wg(),lO(941,` para a barra de progresso.`),wg()()(),jc(942,`tr`,14)(943,`td`,15)(944,`div`,16)(945,`span`,17),lO(946,` Error`),nu(947,`br`),wg()()(),jc(948,`td`,21)(949,`p`),lO(950,`Define o status de `),jc(951,`code`),lO(952,`error`),wg(),lO(953,` para a barra de progresso.`),wg()()(),jc(954,`tr`,14)(955,`td`,15)(956,`div`,16)(957,`span`,17),lO(958,` Success`),nu(959,`br`),wg()()(),jc(960,`td`,21)(961,`p`),lO(962,`Define o status de `),jc(963,`code`),lO(964,`success`),wg(),lO(965,` para a barra de progresso.`),wg()()()()())},dependencies:[P],encapsulation:2,changeDetection:1})}return o})();function Ge(o,N){if(o&1){let r=Ax();jc(0,`po-tab`,4),mt(`p-click`,function(){v_(r);let i=Fx();return __(i.changeTab(`web`))}),nu(1,`sample-po-progress-basic-view`)(2,`sample-po-progress-labs-view`)(3,`sample-po-progress-publication-view`)(4,`sample-po-progress-circle-view`),wg()}if(o&2){let r=Fx();UE(`p-active`,r.activeTab===`web`)}}var Ue=[{path:``,component:(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=4;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(r,l){this.route=r,this.router=l}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let l=r.view;this.activeTab=l||(this.samplesLength>0?`web`:`doc`),this.hidePoWebSample=this.samplesLength===0})}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:`merge`}),this.activeTab=r}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(l){return new(l||o)(b(ir),b(Sn))};static ɵcmp=Zn({type:o,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:3,consts:[[`p-title`,`Progress`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Exemplos`,3,`p-active`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-active`]],template:function(l,i){l&1&&(jc(0,`po-page-default`,0)(1,`po-tabs`,1),vx(2,Ge,5,1,`po-tab`,2),jc(3,`po-tab`,3),mt(`p-click`,function(){return i.changeTab(`doc`)}),nu(4,`sample-po-progress-doc`),wg()()()),l&2&&(UE(`p-actions`,i.actions),rg(2),Dx(i.hidePoWebSample?-1:2),rg(),UE(`p-active`,i.activeTab===`doc`))},dependencies:[Tze,Qae,ere,Se,xe,fe,Pe,we],encapsulation:2,changeDetection:1})}return o})()}];var De=(()=>{class o{static ɵfac=function(l){return new(l||o)};static ɵmod=pe({type:o});static ɵinj=ue({imports:[I1.forChild(Ue),I1]})}return o})();var yt=(()=>{class o{static ɵfac=function(l){return new(l||o)};static ɵmod=pe({type:o});static ɵinj=ue({imports:[M,De]})}return o})();export{yt as DocPoProgressModule};