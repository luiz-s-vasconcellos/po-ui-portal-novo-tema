import{m as P,p as M}from"./main-OAHE3DMQ.js";import{Ba as q0,Bn as yae,Br as Kb,Ci as U_,Cn as sie,Dn as tre,Er as GV,Ft as are,G as Nf,Gi as _t,Hi as Zb,Ht as d4,Ia as p,Ir as Jc,Ji as ar,Ki as _u,Lr as Jn,Lt as c4,M as I4,Mi as WL,Mt as Zte,Pr as I,Qn as AZ,Tr as G0,Vr as Kg,W as Mze,Wr as LO,Ya as tk,_a as jO,_i as RZ,ar as B_,ca as ge$1,ea as de$1,er as Ab,fn as oi,it as Ru,ja as nm,jr as H_,li as QL,qr as Mk,ro as wg,so as xZ,tn as j4,tr as An,va as j_,vi as Rk,zr as KO}from"./chunk-CTJH0VS3.js";import{n as s,t as r}from"./chunk-zystk1pz.js";var de=(()=>{class o{onClick(){alert(`Po Button!`)}static ɵfac=function(i){return new(i||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-button-basic`]],standalone:!1,decls:1,vars:0,consts:[[`p-label`,`PO Button`,3,`p-click`]],template:function(i,a){i&1&&(Jc(0,`po-button`,0),_t(`p-click`,function(){return a.onClick()}),Kg())},dependencies:[oi],encapsulation:2,changeDetection:1})}return o})();var pe=(()=>{class o{static ɵfac=function(i){return new(i||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-button-basic-view`]],standalone:!1,decls:24,vars:0,consts:[[`id`,`sample-po-button-basic`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`data-tour`,`sample-tabs`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-button-basic/sample-po-button-basic.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-button-basic/sample-po-button-basic.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`]],template:function(i,a){i&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Mk(3,`PO Button Basic`),Kg()(),Jc(4,`div`,2)(5,`po-tabs`,3)(6,`po-tab`,4)(7,`div`,5),_u(8,`sample-po-button-basic`),Kg()(),Jc(9,`po-tab`,6)(10,`div`)(11,`label`,7),Mk(12,`sample-po-button-basic/sample-po-button-basic.component.html`),Kg(),Jc(13,`div`,8)(14,`pre`,9),Mk(15,`<po-button p-label="PO Button" (p-click)="onClick()"> </po-button>
`),Kg()()()(),Jc(16,`po-tab`,10)(17,`div`)(18,`label`,7),Mk(19,`sample-po-button-basic/sample-po-button-basic.component.ts`),Kg(),Jc(20,`div`,11)(21,`pre`,12),Mk(22,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-button-basic',
  templateUrl: './sample-po-button-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoButtonBasicComponent {
  onClick() {
    alert('Po Button!');
  }
}
`),Kg()()()()()(),_u(23,`hr`))},dependencies:[P,tre,are,de],encapsulation:2,changeDetection:1})}return o})();var se=(()=>{class o{poDialog=p(sie);label;kind;icon;size;properties;type;propertiesOptions=[{value:`disabled`,label:`Disabled`},{value:`loading`,label:`Loading`},{value:`danger`,label:`Danger`}];iconsOptions=[{label:`an an-newspaper`,value:`an an-newspaper`},{label:`an an-calendar-dots`,value:`an an-calendar-dots`},{label:`an an-user`,value:`an an-user`},{label:`fa fa-podcast`,value:`fa fa-podcast`}];kindsOptions=[{label:`primary`,value:`primary`},{label:`secondary`,value:`secondary`},{label:`tertiary`,value:`tertiary`},{label:`glow`,value:`glow`}];kindsWithoutDanger=[`tertiary`,`glow`];sizesOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`},{label:`large`,value:`large`}];typeOptions=[{label:`button`,value:d4.Button},{label:`submit`,value:d4.Submit},{label:`reset`,value:d4.Reset}];ngOnInit(){this.restore()}buttonClick(){this.poDialog.alert({title:`PO Button`,message:`Hello PO World!!!`})}propertiesChange(r$1){let i=!!r$1&&this.properties.includes(`danger`);this.setKindsWithoutDangerDisabled(i),this.sizesOptions[0]=s(r({},this.sizesOptions[0]),{disabled:!1}),this.sizesOptions[1]=s(r({},this.sizesOptions[1]),{disabled:!1})}verifyDisabled(r){let i=[...this.propertiesOptions];this.kindsWithoutDanger.includes(r)?(i[2]={value:`danger`,label:`Danger`,disabled:!0},this.propertiesOptions=i):(i[2]={value:`danger`,label:`Danger`,disabled:!1},this.propertiesOptions=i)}restore(){this.label=void 0,this.kind=`secondary`,this.size=`medium`,this.icon=void 0,this.type=d4.Button,this.properties=[],this.setKindsWithoutDangerDisabled(!1),this.sizesOptions[0]=s(r({},this.sizesOptions[0]),{disabled:!1}),this.sizesOptions[1]=s(r({},this.sizesOptions[1]),{disabled:!1})}setKindsWithoutDangerDisabled(r$2){this.kindsOptions=this.kindsOptions.map(i=>this.kindsWithoutDanger.includes(i.value)?s(r({},i),{disabled:r$2}):i)}static ɵfac=function(i){return new(i||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-button-labs`]],standalone:!1,decls:14,vars:19,consts:[[`f`,`ngForm`],[1,`po-row`],[1,`po-sm-12`,3,`p-click`,`p-disabled`,`p-icon`,`p-label`,`p-loading`,`p-size`,`p-danger`,`p-kind`,`p-type`],[`name`,`label`,`p-clean`,``,`p-label`,`Label`,1,`po-lg-6`,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`properties`,`p-columns`,`4`,`p-label`,`Properties`,1,`po-lg-12`,3,`ngModelChange`,`p-change`,`ngModel`,`p-options`],[`name`,`icon`,`p-columns`,`4`,`p-label`,`Icon`,1,`po-lg-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`kind`,`p-columns`,`4`,`p-label`,`Kind`,1,`po-lg-12`,3,`ngModelChange`,`p-change`,`ngModel`,`p-options`],[`name`,`type`,`p-columns`,`4`,`p-label`,`Type`,1,`po-lg-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`size`,`p-columns`,`4`,`p-label`,`Size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-lg-12`,3,`ngModelChange`,`p-change`,`ngModel`,`p-options`],[`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`]],template:function(i,a){if(i&1){let x=KO();Jc(0,`div`,1)(1,`po-button`,2),_t(`p-click`,function(){return a.buttonClick()}),Kg()(),_u(2,`po-divider`),Jc(3,`form`,null,0)(5,`div`,1)(6,`po-input`,3),G0(),Zb(`ngModelChange`,function(d){return U_(x),Rk(a.label,d)||(a.label=d),H_(d)}),Kg()(),Jc(7,`po-checkbox-group`,4),G0(),Zb(`ngModelChange`,function(d){return U_(x),Rk(a.properties,d)||(a.properties=d),H_(d)}),_t(`p-change`,function(d){return a.propertiesChange(d)}),Kg(),Jc(8,`po-radio-group`,5),G0(),Zb(`ngModelChange`,function(d){return U_(x),Rk(a.icon,d)||(a.icon=d),H_(d)}),Kg(),Jc(9,`po-radio-group`,6),G0(),Zb(`ngModelChange`,function(d){return U_(x),Rk(a.kind,d)||(a.kind=d),H_(d)}),_t(`p-change`,function(d){return a.verifyDisabled(d)}),Kg(),Jc(10,`po-radio-group`,7),G0(),Zb(`ngModelChange`,function(d){return U_(x),Rk(a.type,d)||(a.type=d),H_(d)}),Kg(),Jc(11,`po-radio-group`,8),G0(),Zb(`ngModelChange`,function(d){return U_(x),Rk(a.size,d)||(a.size=d),H_(d)}),_t(`p-change`,function(d){return a.verifyDisabled(d)}),Kg(),Jc(12,`div`,1)(13,`po-button`,9),_t(`p-click`,function(){return a.restore()}),Kg()()()}i&2&&(wg(),Ab(`p-disabled`,a.properties.includes(`disabled`))(`p-icon`,a.icon)(`p-label`,a.label)(`p-loading`,a.properties.includes(`loading`))(`p-size`,a.size)(`p-danger`,a.properties.includes(`danger`))(`p-kind`,a.kind)(`p-type`,a.type),wg(5),Kb(`ngModel`,a.label),q0(),wg(),Kb(`ngModel`,a.properties),Ab(`p-options`,a.propertiesOptions),q0(),wg(),Kb(`ngModel`,a.icon),Ab(`p-options`,a.iconsOptions),q0(),wg(),Kb(`ngModel`,a.kind),Ab(`p-options`,a.kindsOptions),q0(),wg(),Kb(`ngModel`,a.type),Ab(`p-options`,a.typeOptions),q0(),wg(),Kb(`ngModel`,a.size),Ab(`p-options`,a.sizesOptions),q0())},dependencies:[xZ,RZ,AZ,QL,WL,oi,Nf,I4,j4,Zte],encapsulation:2,changeDetection:1})}return o})();var me=(()=>{class o{static ɵfac=function(i){return new(i||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-button-labs-view`]],standalone:!1,decls:24,vars:0,consts:[[`id`,`sample-po-button-labs`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`data-tour`,`sample-tabs`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-button-labs/sample-po-button-labs.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-button-labs/sample-po-button-labs.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`]],template:function(i,a){i&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Mk(3,`PO Button Labs`),Kg()(),Jc(4,`div`,2)(5,`po-tabs`,3)(6,`po-tab`,4)(7,`div`,5),_u(8,`sample-po-button-labs`),Kg()(),Jc(9,`po-tab`,6)(10,`div`)(11,`label`,7),Mk(12,`sample-po-button-labs/sample-po-button-labs.component.html`),Kg(),Jc(13,`div`,8)(14,`pre`,9),Mk(15,`<div class="po-row">
  <po-button
    class="po-sm-12"
    [p-disabled]="properties.includes('disabled')"
    [p-icon]="icon"
    [p-label]="label"
    [p-loading]="properties.includes('loading')"
    [p-size]="size"
    [p-danger]="properties.includes('danger')"
    [p-kind]="kind"
    (p-click)="buttonClick()"
    [p-type]="type"
  >
  </po-button>
</div>

<po-divider />

<form #f="ngForm">
  <div class="po-row">
    <po-input class="po-lg-6 po-md-6" name="label" [(ngModel)]="label" p-clean p-label="Label"> </po-input>
  </div>

  <po-checkbox-group
    class="po-lg-12"
    name="properties"
    [(ngModel)]="properties"
    p-columns="4"
    p-label="Properties"
    [p-options]="propertiesOptions"
    (p-change)="propertiesChange($event)"
  >
  </po-checkbox-group>

  <po-radio-group
    class="po-lg-12"
    name="icon"
    [(ngModel)]="icon"
    p-columns="4"
    p-label="Icon"
    [p-options]="iconsOptions"
  >
  </po-radio-group>

  <po-radio-group
    class="po-lg-12"
    name="kind"
    [(ngModel)]="kind"
    p-columns="4"
    p-label="Kind"
    [p-options]="kindsOptions"
    (p-change)="verifyDisabled($event)"
  >
  </po-radio-group>

  <po-radio-group
    class="po-lg-12"
    name="type"
    [(ngModel)]="type"
    p-columns="4"
    p-label="Type"
    [p-options]="typeOptions"
  >
  </po-radio-group>

  <po-radio-group
    class="po-lg-12"
    name="size"
    [(ngModel)]="size"
    p-columns="4"
    p-label="Size"
    p-help="Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme)."
    [p-options]="sizesOptions"
    (p-change)="verifyDisabled($event)"
  >
  </po-radio-group>

  <div class="po-row">
    <po-button class="po-lg-3 po-md-6" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</form>
`),Kg()()()(),Jc(16,`po-tab`,10)(17,`div`)(18,`label`,7),Mk(19,`sample-po-button-labs/sample-po-button-labs.component.ts`),Kg(),Jc(20,`div`,11)(21,`pre`,12),Mk(22,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

import { PoCheckboxGroupOption, PoRadioGroupOption, PoDialogService, PoButtonType } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-button-labs',
  templateUrl: './sample-po-button-labs.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoButtonLabsComponent implements OnInit {
  private poDialog = inject(PoDialogService);

  label: string;
  kind: string;
  icon: string;
  size: string;
  properties: Array<string>;
  type: string;

  propertiesOptions: Array<PoCheckboxGroupOption> = [
    { value: 'disabled', label: 'Disabled' },
    { value: 'loading', label: 'Loading' },
    { value: 'danger', label: 'Danger' }
  ];

  iconsOptions: Array<PoRadioGroupOption> = [
    { label: 'an an-newspaper', value: 'an an-newspaper' },
    { label: 'an an-calendar-dots', value: 'an an-calendar-dots' },
    { label: 'an an-user', value: 'an an-user' },
    { label: 'fa fa-podcast', value: 'fa fa-podcast' }
  ];

  kindsOptions: Array<PoRadioGroupOption> = [
    { label: 'primary', value: 'primary' },
    { label: 'secondary', value: 'secondary' },
    { label: 'tertiary', value: 'tertiary' },
    { label: 'glow', value: 'glow' }
  ];

  // Estilos que n\xE3o suportam a propriedade danger.
  private readonly kindsWithoutDanger: Array<string> = ['tertiary', 'glow'];

  sizesOptions: Array<PoRadioGroupOption> = [
    { label: 'small', value: 'small' },
    { label: 'medium', value: 'medium' },
    { label: 'large', value: 'large' }
  ];

  typeOptions: Array<PoRadioGroupOption> = [
    { label: 'button', value: PoButtonType.Button },
    { label: 'submit', value: PoButtonType.Submit },
    { label: 'reset', value: PoButtonType.Reset }
  ];

  ngOnInit() {
    this.restore();
  }

  buttonClick() {
    this.poDialog.alert({ title: 'PO Button', message: 'Hello PO World!!!' });
  }

  propertiesChange(event) {
    const hasDanger = !!event && this.properties.includes('danger');

    this.setKindsWithoutDangerDisabled(hasDanger);
    this.sizesOptions[0] = { ...this.sizesOptions[0], disabled: false };
    this.sizesOptions[1] = { ...this.sizesOptions[1], disabled: false };
  }

  verifyDisabled(event) {
    const value = [...this.propertiesOptions];

    if (this.kindsWithoutDanger.includes(event)) {
      value[2] = { value: 'danger', label: 'Danger', disabled: true };
      this.propertiesOptions = value;
    } else {
      value[2] = { value: 'danger', label: 'Danger', disabled: false };
      this.propertiesOptions = value;
    }
  }

  restore() {
    this.label = undefined;
    this.kind = 'secondary';
    this.size = 'medium';
    this.icon = undefined;
    this.type = PoButtonType.Button;
    this.properties = [];
    this.setKindsWithoutDangerDisabled(false);
    this.sizesOptions[0] = { ...this.sizesOptions[0], disabled: false };
    this.sizesOptions[1] = { ...this.sizesOptions[1], disabled: false };
  }

  private setKindsWithoutDangerDisabled(disabled: boolean) {
    this.kindsOptions = this.kindsOptions.map(option =>
      this.kindsWithoutDanger.includes(option.value as string) ? { ...option, disabled } : option
    );
  }
}
`),Kg()()()()()(),_u(23,`hr`))},dependencies:[P,tre,are,se],encapsulation:2,changeDetection:1})}return o})();function ve(o,G){if(o&1){let r=KO();Jc(0,`div`,0),_u(1,`po-avatar`,2),Jc(2,`div`,3)(3,`span`,4),Mk(4),Kg(),Jc(5,`span`,5),Mk(6),Kg(),Jc(7,`span`,5),Mk(8),Kg()()(),Jc(9,`div`,0)(10,`po-button`,6),_t(`p-click`,function(){U_(r);let a=tk();return H_(a.notification(`added`,`success`))}),Kg(),Jc(11,`po-button`,7),_t(`p-click`,function(){U_(r);let a=tk();return H_(a.notification(`ignored`,`warning`))}),Kg(),Jc(12,`po-button`,8),_t(`p-click`,function(){U_(r);let a=tk();return H_(a.notification(`blocked`,`information`))}),Kg()()}if(o&2){let r=tk();wg(),Ab(`p-src`,r.userAvatar),wg(3),nm(` `,r.currentFriend.name,` `),wg(2),nm(` `,r.currentFriend.mutualFriends,` mutual friends `),wg(2),nm(` Resides in `,r.currentFriend.reside,` `)}}function Ce(o,G){o&1&&(Jc(0,`div`,0)(1,`span`,9),Mk(2,`Congratulations TOTVS, no more requests!`),Kg()())}var ce=(()=>{class o{poNotification=p(Ru);currentFriend;userAvatar=`https://lorempixel.com/144/144/`;newFriends=[{name:`Mr. Dev PO`,mutualFriends:`7`,reside:`Mountain View, CA`},{name:`Mr. AI PO`,mutualFriends:`99+`,reside:`New York City, NY`},{name:`Mr. UX PO`,mutualFriends:`14`,reside:`Los Angeles, CA`}];indexFriend=0;ngOnInit(){this.setCurrentFriend(0)}notification(r,i){this.poNotification[i](`User ${r} successfully!`),this.indexFriend++,this.setCurrentFriend(this.indexFriend)}setCurrentFriend(r){this.currentFriend=this.newFriends[r]}static ɵfac=function(i){return new(i||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-button-social-network`]],standalone:!1,decls:4,vars:1,consts:[[1,`po-row`],[`p-title`,`Friend Request`,1,`po-lg-6`],[`p-size`,`lg`,1,`po-md-4`,3,`p-src`],[1,`po-md-8`],[1,`po-sm-12`,`po-font-subtitle`],[1,`po-sm-12`,`po-font-text`],[`p-icon`,`fa fa-check-circle`,`p-label`,`Confirm`,1,`po-md-4`,3,`p-click`],[`p-icon`,`fa fa-eye-slash`,`p-label`,`Ignore`,1,`po-md-4`,3,`p-click`],[`p-icon`,`fa fa-ban`,`p-label`,`Block`,1,`po-md-4`,3,`p-click`],[1,`po-lg-8`,`po-font-subtitle`]],template:function(i,a){i&1&&(Jc(0,`div`,0)(1,`po-widget`,1),LO(2,ve,13,4)(3,Ce,3,0,`div`,0),Kg()()),i&2&&(wg(2),jO(a.currentFriend?2:3))},dependencies:[c4,oi,yae],encapsulation:2,changeDetection:1})}return o})();var ue=(()=>{class o{static ɵfac=function(i){return new(i||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-button-social-network-view`]],standalone:!1,decls:42,vars:0,consts:[[`id`,`sample-po-button-social-network`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`data-tour`,`sample-tabs`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-button-social-network/sample-po-button-social-network.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-button-social-network/sample-po-button-social-network.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`]],template:function(i,a){i&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Mk(3,`PO Button Social Network`),Kg()(),Jc(4,`div`,2)(5,`po-tabs`,3)(6,`po-tab`,4)(7,`div`,5),_u(8,`sample-po-button-social-network`),Kg()(),Jc(9,`po-tab`,6)(10,`div`)(11,`label`,7),Mk(12,`sample-po-button-social-network/sample-po-button-social-network.component.html`),Kg(),Jc(13,`div`,8)(14,`pre`,9),Mk(15,`<div class="po-row">
  <po-widget class="po-lg-6" p-title="Friend Request">
    @if (currentFriend) {
      <div class="po-row">
        <po-avatar class="po-md-4" p-size="lg" [p-src]="userAvatar"> </po-avatar>
        <div class="po-md-8">
          <span class="po-sm-12 po-font-subtitle">
            `),Jc(16,`span`),B_(),Mk(17,`{{`),j_(),Kg(),Mk(18,` currentFriend.name `),Jc(19,`span`),B_(),Mk(20,`}}`),j_(),Kg(),Mk(21,`
          </span>
          <span class="po-sm-12 po-font-text"> `),Jc(22,`span`),B_(),Mk(23,`{{`),j_(),Kg(),Mk(24,` currentFriend.mutualFriends `),Jc(25,`span`),B_(),Mk(26,`}}`),j_(),Kg(),Mk(27,` mutual friends </span>
          <span class="po-sm-12 po-font-text"> Resides in `),Jc(28,`span`),B_(),Mk(29,`{{`),j_(),Kg(),Mk(30,` currentFriend.reside `),Jc(31,`span`),B_(),Mk(32,`}}`),j_(),Kg(),Mk(33,` </span>
        </div>
      </div>
      <div class="po-row">
        <po-button
          class="po-md-4"
          p-icon="fa fa-check-circle"
          p-label="Confirm"
          (p-click)="notification('added', 'success')"
        ></po-button>
        <po-button
          class="po-md-4"
          p-icon="fa fa-eye-slash"
          p-label="Ignore"
          (p-click)="notification('ignored', 'warning')"
        ></po-button>
        <po-button
          class="po-md-4"
          p-icon="fa fa-ban"
          p-label="Block"
          (p-click)="notification('blocked', 'information')"
        ></po-button>
      </div>
    } @else {
      <div class="po-row">
        <span class="po-lg-8 po-font-subtitle">Congratulations TOTVS, no more requests!</span>
      </div>
    }
  </po-widget>
</div>
`),Kg()()()(),Jc(34,`po-tab`,10)(35,`div`)(36,`label`,7),Mk(37,`sample-po-button-social-network/sample-po-button-social-network.component.ts`),Kg(),Jc(38,`div`,11)(39,`pre`,12),Mk(40,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

import { PoNotificationService } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-button-social-network',
  templateUrl: './sample-po-button-social-network.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoButtonSocialNetworkComponent implements OnInit {
  private poNotification = inject(PoNotificationService);

  currentFriend: object;
  userAvatar: string = 'https://lorempixel.com/144/144/';

  public readonly newFriends: Array<object> = [
    { name: 'Mr. Dev PO', mutualFriends: '7', reside: 'Mountain View, CA' },
    { name: 'Mr. AI PO', mutualFriends: '99+', reside: 'New York City, NY' },
    { name: 'Mr. UX PO', mutualFriends: '14', reside: 'Los Angeles, CA' }
  ];

  private indexFriend: number = 0;

  ngOnInit() {
    this.setCurrentFriend(0);
  }

  notification(action: string, notificationType: string) {
    this.poNotification[notificationType](\`User \${action} successfully!\`);

    this.indexFriend++;
    this.setCurrentFriend(this.indexFriend);
  }

  private setCurrentFriend(index: number) {
    this.currentFriend = this.newFriends[index];
  }
}
`),Kg()()()()()(),_u(41,`hr`))},dependencies:[P,tre,are,ce],encapsulation:2,changeDetection:1})}return o})();var be=(()=>{class o{router=p(An);openDoc(r){this.router.navigate([`/documentation`,r],{queryParams:{view:`doc`}})}static ɵfac=function(i){return new(i||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-button-doc`]],standalone:!1,decls:950,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[`id`,`class-po-button-component`,1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://www.w3.org/WAI/ARIA/apg/#keyboard-interaction-3`],[`href`,`https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance-enhanced`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[`id`,`prop-p-aria-label`,1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`string`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`id`,`event-p-click`,1,`docs-api-properties-row`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[`id`,`prop-p-danger`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`id`,`prop-p-disabled`,1,`docs-api-properties-row`],[`id`,`prop-p-icon`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`TemplateRef<void>`],[`href`,`https://po-ui.io/icons`],[`id`,`prop-p-kind`,1,`docs-api-properties-row`],[`id`,`prop-p-label`,1,`docs-api-properties-row`],[`id`,`prop-p-loading`,1,`docs-api-properties-row`],[`id`,`prop-p-size`,1,`docs-api-properties-row`],[`href`,`https://po-ui.io/documentation/po-theme`],[`id`,`prop-p-tabindex`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`number`],[`id`,`prop-p-type`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoButtonType`],[`id`,`method-focus`,1,`docs-api-method-table`],[1,`docs-api-properties-row`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[`id`,`enum-po-button-kind`,1,`docs-api-class-name`],[`id`,`enum-po-button-kind-primary`,1,`docs-api-properties-row`],[`id`,`enum-po-button-kind-secondary`,1,`docs-api-properties-row`],[`id`,`enum-po-button-kind-tertiary`,1,`docs-api-properties-row`],[`id`,`enum-po-button-kind-glow`,1,`docs-api-properties-row`],[`id`,`enum-po-button-type`,1,`docs-api-class-name`],[`id`,`enum-po-button-type-submit`,1,`docs-api-properties-row`],[`id`,`enum-po-button-type-button`,1,`docs-api-properties-row`],[`id`,`enum-po-button-type-reset`,1,`docs-api-properties-row`]],template:function(i,a){i&1&&(Jc(0,`div`,0)(1,`p`,1)(2,`code`),Mk(3,`import { PoButtonModule } from '@po-ui/ng-components';`),Kg()(),Jc(4,`div`,2)(5,`p`),Mk(6,`Módulo do componente po-button.`),Kg()(),Jc(7,`h3`,3),Mk(8,`Componente`),Kg(),Jc(9,`h4`,4)(10,`code`,5),Mk(11,`PoButtonComponent`),Kg()(),Jc(12,`div`,2)(13,`p`),Mk(14,`O `),Jc(15,`code`),Mk(16,`po-button`),Kg(),Mk(17,` permite que o usuário execute ações predefinidas pelo desenvolvedor.`),Kg(),Jc(18,`p`),Mk(19,`Através dos tipos, é possível identificar a importância de cada ação.`),Kg(),Jc(20,`h4`),Mk(21,`Boas práticas`),Kg(),Jc(22,`ul`)(23,`li`),Mk(24,`Evite `),Jc(25,`code`),Mk(26,`labels`),Kg(),Mk(27,` extensos que quebram o layout do `),Jc(28,`code`),Mk(29,`po-button`),Kg(),Mk(30,`, use `),Jc(31,`code`),Mk(32,`labels`),Kg(),Mk(33,` diretos, curtos e intuitivos.`),Kg(),Jc(34,`li`),Mk(35,`Utilize apenas um `),Jc(36,`code`),Mk(37,`po-button`),Kg(),Mk(38,` configurado como `),Jc(39,`code`),Mk(40,`primary`),Kg(),Mk(41,` por página.`),Kg(),Jc(42,`li`),Mk(43,`Para ações irreversíveis use sempre a propriedade `),Jc(44,`code`),Mk(45,`p-danger`),Kg(),Mk(46,`.`),Kg()(),Jc(47,`h4`),Mk(48,`Acessibilidade tratada no componente`),Kg(),Jc(49,`p`),Mk(50,`Algumas diretrizes de acessibilidade já são tratadas no componente, internamente, e não podem ser alteradas pelo proprietário do conteúdo. São elas:`),Kg(),Jc(51,`ul`)(52,`li`),Mk(53,`Quando em foco, o botão é ativado usando as teclas de Espaço e Enter do teclado. `),Jc(54,`a`,6),Mk(55,`W3C WAI-ARIA 3.5 Button - Keyboard Interaction`),Kg()(),Jc(56,`li`),Mk(57,`A área do foco precisar ter uma espessura de pelo menos 2 pixels CSS e o foco não pode ficar escondido por outros elementos da tela. `),Jc(58,`a`,7),Mk(59,`WCAG 2.4.12: Focus Appearance`),Kg()()(),Jc(60,`h4`),Mk(61,`Tokens customizáveis`),Kg(),Jc(62,`p`),Mk(63,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),Kg(),Jc(64,`blockquote`)(65,`p`),Mk(66,`Para maiores informações, acesse o guia `),Jc(67,`a`,8),Mk(68,`Personalizando o Tema Padrão com Tokens CSS`),Kg(),Mk(69,`.`),Kg()(),Jc(70,`table`)(71,`thead`)(72,`tr`)(73,`th`),Mk(74,`Propriedade`),Kg(),Jc(75,`th`),Mk(76,`Descrição`),Kg(),Jc(77,`th`),Mk(78,`Valor Padrão`),Kg()()(),Jc(79,`tbody`)(80,`tr`)(81,`td`)(82,`code`),Mk(83,`--font-family`),Kg()(),Jc(84,`td`),Mk(85,`Família tipográfica usada`),Kg(),Jc(86,`td`)(87,`code`),Mk(88,`var(--font-family-theme)`),Kg()()(),Jc(89,`tr`)(90,`td`)(91,`code`),Mk(92,`--font-size`),Kg()(),Jc(93,`td`),Mk(94,`Tamanho da fonte`),Kg(),Jc(95,`td`)(96,`code`),Mk(97,`var(--font-size-default)`),Kg()()(),Jc(98,`tr`)(99,`td`)(100,`code`),Mk(101,`--font-weight`),Kg()(),Jc(102,`td`),Mk(103,`Peso da fonte`),Kg(),Jc(104,`td`)(105,`code`),Mk(106,`var(--font-weight-bold)`),Kg()()(),Jc(107,`tr`)(108,`td`)(109,`code`),Mk(110,`--line-height`),Kg()(),Jc(111,`td`),Mk(112,`Tamanho da label`),Kg(),Jc(113,`td`)(114,`code`),Mk(115,`var(--line-height-none)`),Kg()()(),Jc(116,`tr`)(117,`td`)(118,`code`),Mk(119,`--border-radius`),Kg()(),Jc(120,`td`),Mk(121,`Contém o valor do raio dos cantos do elemento\xA0`),Kg(),Jc(122,`td`)(123,`code`),Mk(124,`var(--border-radius-md)`),Kg()()(),Jc(125,`tr`)(126,`td`)(127,`code`),Mk(128,`--border-width`),Kg()(),Jc(129,`td`),Mk(130,`Contém o valor da largura dos cantos do elemento\xA0`),Kg(),Jc(131,`td`)(132,`code`),Mk(133,`var(--border-width-md)`),Kg()()(),Jc(134,`tr`)(135,`td`)(136,`code`),Mk(137,`--padding`),Kg()(),Jc(138,`td`),Mk(139,`Preenchimento`),Kg(),Jc(140,`td`)(141,`code`),Mk(142,`0 1em`),Kg()()(),Jc(143,`tr`)(144,`td`)(145,`strong`),Mk(146,`Danger`),Kg()(),_u(147,`td`)(148,`td`),Kg(),Jc(149,`tr`)(150,`td`)(151,`code`),Mk(152,`--text-color-danger`),Kg()(),Jc(153,`td`),Mk(154,`Cor do texto no estado danger`),Kg(),Jc(155,`td`)(156,`code`),Mk(157,`var(--color-neutral-light-00)`),Kg()()(),Jc(158,`tr`)(159,`td`)(160,`code`),Mk(161,`--color-button-danger`),Kg()(),Jc(162,`td`),Mk(163,`Cor do botão no estado danger`),Kg(),Jc(164,`td`)(165,`code`),Mk(166,`var(--color-feedback-negative-dark)`),Kg()()(),Jc(167,`tr`)(168,`td`)(169,`code`),Mk(170,`--color-danger-hover`),Kg()(),Jc(171,`td`),Mk(172,`Cor de hover no estado danger`),Kg(),Jc(173,`td`)(174,`code`),Mk(175,`var(--color-feedback-negative-darker)`),Kg()()(),Jc(176,`tr`)(177,`td`)(178,`code`),Mk(179,`--color-danger-pressed`),Kg()(),Jc(180,`td`),Mk(181,`Cor pressionada no estado danger`),Kg(),Jc(182,`td`)(183,`code`),Mk(184,`var(--color-feedback-negative-darkest)`),Kg()()(),Jc(185,`tr`)(186,`td`)(187,`code`),Mk(188,`--background-danger-hover`),Kg()(),Jc(189,`td`),Mk(190,`Cor de background de hover no estado danger`),Kg(),Jc(191,`td`)(192,`code`),Mk(193,`var(--color-feedback-negative-lighter)`),Kg()()(),Jc(194,`tr`)(195,`td`)(196,`code`),Mk(197,`--border-color-danger-hover`),Kg()(),Jc(198,`td`),Mk(199,`Cor da borda de hover no estado danger`),Kg(),Jc(200,`td`)(201,`code`),Mk(202,`var(--color-feedback-negative-darkest)`),Kg()()(),Jc(203,`tr`)(204,`td`)(205,`code`),Mk(206,`--background-danger-pressed`),Kg()(),Jc(207,`td`),Mk(208,`Cor de background pressionado no estado danger`),Kg(),Jc(209,`td`)(210,`code`),Mk(211,`var(--color-feedback-negative-light)`),Kg()()(),Jc(212,`tr`)(213,`td`)(214,`code`),Mk(215,`--background-color-button-danger`),Kg(),Mk(216,`\xA0`),Kg(),Jc(217,`td`),Mk(218,`Cor de background do botão no estado danger`),Kg(),Jc(219,`td`)(220,`code`),Mk(221,`var(--color-transparent)`),Kg()()(),Jc(222,`tr`)(223,`td`)(224,`strong`),Mk(225,`Default Values`),Kg()(),_u(226,`td`)(227,`td`),Kg(),Jc(228,`tr`)(229,`td`)(230,`code`),Mk(231,`--text-color`),Kg()(),Jc(232,`td`),Mk(233,`Cor do texto`),Kg(),Jc(234,`td`)(235,`code`),Mk(236,`var(--color-neutral-light-00)`),Kg()()(),Jc(237,`tr`)(238,`td`)(239,`code`),Mk(240,`--color`),Kg()(),Jc(241,`td`),Mk(242,`Cor principal do botão`),Kg(),Jc(243,`td`)(244,`code`),Mk(245,`var(--color-action-default)`),Kg()()(),Jc(246,`tr`)(247,`td`)(248,`code`),Mk(249,`--background-color`),Kg()(),Jc(250,`td`),Mk(251,`Cor de background`),Kg(),Jc(252,`td`)(253,`code`),Mk(254,`var(--color-transparent)`),Kg()()(),Jc(255,`tr`)(256,`td`)(257,`code`),Mk(258,`--border-color`),Kg()(),Jc(259,`td`),Mk(260,`Cor da borda`),Kg(),Jc(261,`td`)(262,`code`),Mk(263,`var(--color-transparent)`),Kg()()(),Jc(264,`tr`)(265,`td`)(266,`code`),Mk(267,`--shadow`),Kg()(),Jc(268,`td`),Mk(269,`Contém o valor da sombra do elemento`),Kg(),Jc(270,`td`)(271,`code`),Mk(272,`var(--shadow-none)`),Kg()()(),Jc(273,`tr`)(274,`td`)(275,`strong`),Mk(276,`Hover`),Kg()(),_u(277,`td`)(278,`td`),Kg(),Jc(279,`tr`)(280,`td`)(281,`code`),Mk(282,`--color-hover`),Kg()(),Jc(283,`td`),Mk(284,`Cor principal no estado hover`),Kg(),Jc(285,`td`)(286,`code`),Mk(287,`var(--color-action-hover)`),Kg()()(),Jc(288,`tr`)(289,`td`)(290,`code`),Mk(291,`--background-hover`),Kg()(),Jc(292,`td`),Mk(293,`Cor de background no estado hover`),Kg(),Jc(294,`td`)(295,`code`),Mk(296,`var(--color-brand-01-lighter)`),Kg()()(),Jc(297,`tr`)(298,`td`)(299,`code`),Mk(300,`--border-color-hover`),Kg()(),Jc(301,`td`),Mk(302,`Cor da borda no estado hover`),Kg(),Jc(303,`td`)(304,`code`),Mk(305,`var(--color-brand-01-darkest)`),Kg()()(),Jc(306,`tr`)(307,`td`)(308,`strong`),Mk(309,`Focused`),Kg()(),_u(310,`td`)(311,`td`),Kg(),Jc(312,`tr`)(313,`td`)(314,`code`),Mk(315,`--outline-color-focused`),Kg()(),Jc(316,`td`),Mk(317,`Cor do outline do estado de focus`),Kg(),Jc(318,`td`)(319,`code`),Mk(320,`var(--color-action-focus)`),Kg()()(),Jc(321,`tr`)(322,`td`)(323,`strong`),Mk(324,`Pressed`),Kg()(),_u(325,`td`)(326,`td`),Kg(),Jc(327,`tr`)(328,`td`)(329,`code`),Mk(330,`--color-pressed`),Kg()(),Jc(331,`td`),Mk(332,`Cor principal no estado de pressionado`),Kg(),Jc(333,`td`)(334,`code`),Mk(335,`var(--color-action-pressed)`),Kg()()(),Jc(336,`tr`)(337,`td`)(338,`code`),Mk(339,`--background-pressed`),Kg()(),Jc(340,`td`),Mk(341,`Cor de background no estado de pressionado\xA0`),Kg(),Jc(342,`td`)(343,`code`),Mk(344,`var(--color-brand-01-light)`),Kg()()(),Jc(345,`tr`)(346,`td`)(347,`strong`),Mk(348,`Disabled`),Kg()(),_u(349,`td`)(350,`td`),Kg(),Jc(351,`tr`)(352,`td`)(353,`code`),Mk(354,`--text-color-disabled`),Kg()(),Jc(355,`td`),Mk(356,`Cor do texto no estado disabled`),Kg(),Jc(357,`td`)(358,`code`),Mk(359,`var(--color-neutral-dark-70)`),Kg()()(),Jc(360,`tr`)(361,`td`)(362,`code`),Mk(363,`--color-disabled`),Kg()(),Jc(364,`td`),Mk(365,`Cor principal no estado disabled`),Kg(),Jc(366,`td`)(367,`code`),Mk(368,`var(--color-action-disabled)`),Kg()()(),Jc(369,`tr`)(370,`td`)(371,`code`),Mk(372,`--background-color-disabled`),Kg()(),Jc(373,`td`),Mk(374,`Cor de background no estado disabled`),Kg(),Jc(375,`td`)(376,`code`),Mk(377,`var(--color-transparent)`),Kg()()(),Jc(378,`tr`)(379,`td`)(380,`strong`),Mk(381,`Glow`),Kg(),Mk(382,` (`),Jc(383,`code`),Mk(384,`p-kind="glow"`),Kg(),Mk(385,`)`),Kg(),_u(386,`td`)(387,`td`),Kg(),Jc(388,`tr`)(389,`td`)(390,`code`),Mk(391,`--color-glow-highlight`),Kg()(),Jc(392,`td`),Mk(393,`Cor do reflexo no estado hover`),Kg(),Jc(394,`td`)(395,`code`),Mk(396,`var(--color-brand-01-light)`),Kg()()(),Jc(397,`tr`)(398,`td`)(399,`code`),Mk(400,`--color-glow-ring`),Kg()(),Jc(401,`td`),Mk(402,`Cor do brilho da borda e do brilho interno (hover)`),Kg(),Jc(403,`td`)(404,`code`),Mk(405,`var(--color-neutral-light-00)`),Kg()()(),Jc(406,`tr`)(407,`td`)(408,`code`),Mk(409,`--glow-animation-duration`),Kg()(),Jc(410,`td`),Mk(411,`Duração de uma volta completa do brilho`),Kg(),Jc(412,`td`)(413,`code`),Mk(414,`3200ms`),Kg()()(),Jc(415,`tr`)(416,`td`)(417,`code`),Mk(418,`--glow-transition-duration`),Kg()(),Jc(419,`td`),Mk(420,`Duração da transição entre estados`),Kg(),Jc(421,`td`)(422,`code`),Mk(423,`var(--duration-extra-slow)`),Kg()()(),Jc(424,`tr`)(425,`td`)(426,`code`),Mk(427,`--glow-transition-timing`),Kg()(),Jc(428,`td`),Mk(429,`Curva de aceleração da transição entre estados`),Kg(),Jc(430,`td`)(431,`code`),Mk(432,`var(--timing-exiting)`),Kg()()()()(),Jc(433,`blockquote`)(434,`p`),Mk(435,`No estilo `),Jc(436,`code`),Mk(437,`glow`),Kg(),Mk(438,`, o botão reutiliza os tokens `),Jc(439,`code`),Mk(440,`--color`),Kg(),Mk(441,`, `),Jc(442,`code`),Mk(443,`--text-color`),Kg(),Mk(444,`, `),Jc(445,`code`),Mk(446,`--color-hover`),Kg(),Mk(447,`, `),Jc(448,`code`),Mk(449,`--color-pressed`),Kg(),Mk(450,` e
`),Jc(451,`code`),Mk(452,`--border-width`),Kg(),Mk(453,`. O brilho percorre a borda com velocidade constante via `),Jc(454,`code`),Mk(455,`offset-path`),Kg(),Mk(456,`. Em navegadores sem
suporte a `),Jc(457,`code`),Mk(458,`offset-path`),Kg(),Mk(459,` com formas b\xE1sicas (Chrome < 116, Firefox < 122 e Safari < 18), \xE9 exibido um gradiente
girando no centro do bot\xE3o.`),Kg()(),Jc(460,`blockquote`)(461,`p`),Mk(462,`No estilo `),Jc(463,`code`),Mk(464,`glow`),Kg(),Mk(465,`, a anima\xE7\xE3o \xE9 interrompida quando o bot\xE3o est\xE1 desabilitado ou em carregamento,
e tamb\xE9m quando o sistema operacional do usu\xE1rio solicita redu\xE7\xE3o de movimento (`),Jc(466,`code`),Mk(467,`prefers-reduced-motion`),Kg(),Mk(468,`).`),Kg()(),Jc(469,`blockquote`)(470,`p`),Mk(471,`No tema escuro, `),Jc(472,`code`),Mk(473,`--color-glow-ring`),Kg(),Mk(474,` usa `),Jc(475,`code`),Mk(476,`var(--color-neutral-dark-95)`),Kg(),Mk(477,`, para que o brilho
continue claro apesar da invers\xE3o da escala neutra. `),Kg()()(),Jc(478,`div`,9)(479,`h4`,10),Mk(480,`Seletor`),Kg(),Jc(481,`pre`,11),Mk(482,`<po-button
    p-aria-label="string"
    (p-click)="EventEmitter"
    p-danger="boolean"
    p-disabled="boolean"
    p-icon="string | TemplateRef<void>"
    p-kind="string"
    p-label="string"
    p-loading="boolean"
    p-size="string"
    p-tabindex="number | string"
    p-type="PoButtonType" >
</po-button>
`),Kg()(),Jc(483,`h4`,12),Mk(484,`Propriedades`),Kg(),Jc(485,`table`,13)(486,`tr`,14)(487,`th`,15),Mk(488,`Nome`),Kg(),Jc(489,`th`,15),Mk(490,`Tipo`),Kg(),Jc(491,`th`,15),Mk(492,`Padrão`),Kg(),Jc(493,`th`,15),Mk(494,`Descrição`),Kg()(),Jc(495,`tr`,16)(496,`td`,17)(497,`div`,18)(498,`span`,19),Mk(499,` p-aria-label`),_u(500,`br`),Kg()()(),Jc(501,`td`,20)(502,`code`,21),Mk(503,`string`),Kg()(),Jc(504,`td`,22),Mk(505,`-`),Kg(),Jc(506,`td`,23)(507,`em`)(508,`strong`),Mk(509,`(opcional)`),Kg()(),Jc(510,`p`),Mk(511,`Define um `),Jc(512,`code`),Mk(513,`aria-label`),Kg(),Mk(514,` para o `),Jc(515,`code`),Mk(516,`po-button`),Kg(),Mk(517,`.`),Kg(),Jc(518,`p`),Mk(519,`Caso esta propriedade não seja informada será considerada a label do botão.`),Kg(),Jc(520,`blockquote`)(521,`p`),Mk(522,`Em caso de botões com apenas ícone a atribuição de valor à esta propriedade é muito importante para acessibilidade.`),Kg()()()(),Jc(523,`tr`,24)(524,`td`,17)(525,`div`,25)(526,`span`,26),Mk(527,` (p-click)`),_u(528,`br`),Kg()()(),Jc(529,`td`,20)(530,`code`,27),Mk(531,`EventEmitter`),Kg()(),Jc(532,`td`,22),Mk(533,`-`),Kg(),Jc(534,`td`,23)(535,`p`),Mk(536,`Ação que será executada quando o usuário clicar sobre o `),Jc(537,`code`),Mk(538,`po-button`),Kg(),Mk(539,`.`),Kg()()(),Jc(540,`tr`,28)(541,`td`,17)(542,`div`,18)(543,`span`,19),Mk(544,` p-danger`),_u(545,`br`),Kg()()(),Jc(546,`td`,20)(547,`code`,29),Mk(548,`boolean`),Kg()(),Jc(549,`td`,22),Mk(550,`-`),Kg(),Jc(551,`td`,23)(552,`em`)(553,`strong`),Mk(554,`(opcional)`),Kg()(),Jc(555,`p`),Mk(556,`Deve ser usado em ações irreversíveis que o usuário precisa ter cuidado ao executá-la, como a exclusão de um registro.`),Kg(),Jc(557,`blockquote`)(558,`p`),Mk(559,`A propriedade será inativada ao utilizar `),Jc(560,`code`),Mk(561,`p-kind="tertiary"`),Kg(),Mk(562,` ou `),Jc(563,`code`),Mk(564,`p-kind="glow"`),Kg(),Mk(565,`.`),Kg()()()(),Jc(566,`tr`,30)(567,`td`,17)(568,`div`,18)(569,`span`,19),Mk(570,` p-disabled`),_u(571,`br`),Kg()()(),Jc(572,`td`,20)(573,`code`,29),Mk(574,`boolean`),Kg()(),Jc(575,`td`,22)(576,`p`)(577,`code`),Mk(578,`false`),Kg()()(),Jc(579,`td`,23)(580,`em`)(581,`strong`),Mk(582,`(opcional)`),Kg()(),Jc(583,`p`),Mk(584,`Desabilita o `),Jc(585,`code`),Mk(586,`po-button`),Kg(),Mk(587,` e não permite que o usuário interaja com o mesmo.`),Kg()()(),Jc(588,`tr`,31)(589,`td`,17)(590,`div`,18)(591,`span`,19),Mk(592,` p-icon`),_u(593,`br`),Kg()()(),Jc(594,`td`,20)(595,`code`,21),Mk(596,`string `),Kg(),Jc(597,`code`,32),Mk(598,` TemplateRef<void>`),Kg()(),Jc(599,`td`,22),Mk(600,`-`),Kg(),Jc(601,`td`,23)(602,`em`)(603,`strong`),Mk(604,`(opcional)`),Kg()(),Jc(605,`p`),Mk(606,`Ícone exibido ao lado esquerdo do label do botão.`),Kg(),Jc(607,`p`),Mk(608,`É possível usar qualquer um dos ícones da `),Jc(609,`a`,33),Mk(610,`Biblioteca de ícones`),Kg(),Mk(611,`, conforme exemplo:`),Kg(),Jc(612,`pre`)(613,`code`),Mk(614,`<po-button p-icon="an an-user" p-label="PO button"></po-button>
`),Kg()(),Jc(615,`p`),Mk(616,`Também é possível utilizar outras fontes de ícones, por exemplo a biblioteca `),Jc(617,`em`),Mk(618,`Font Awesome`),Kg(),Mk(619,`, desde que a biblioteca
esteja carregada no projeto:`),Kg(),Jc(620,`pre`)(621,`code`),Mk(622,`<po-button p-icon="fa fa-podcast" p-label="PO button"></po-button>
`),Kg()(),Jc(623,`p`),Mk(624,`Outra opção seria a customização do ícone através do `),Jc(625,`code`),Mk(626,`TemplateRef`),Kg(),Mk(627,`, conforme exemplo abaixo:`),Kg(),Jc(628,`pre`)(629,`code`),Mk(630,`<po-button [p-icon]="template" p-label="button template ionic"></po-button>

<ng-template #template>
 <ion-icon style="font-size: inherit" name="heart"></ion-icon>
</ng-template>
`),Kg()(),Jc(631,`blockquote`)(632,`p`),Mk(633,`Para o ícone enquadrar corretamente, deve-se utilizar `),Jc(634,`code`),Mk(635,`font-size: inherit`),Kg(),Mk(636,` caso o ícone utilizado não aplique-o.`),Kg()()()(),Jc(637,`tr`,34)(638,`td`,17)(639,`div`,18)(640,`span`,19),Mk(641,` p-kind`),_u(642,`br`),Kg()()(),Jc(643,`td`,20)(644,`code`,21),Mk(645,`string`),Kg()(),Jc(646,`td`,22)(647,`p`)(648,`code`),Mk(649,`secondary`),Kg()()(),Jc(650,`td`,23)(651,`em`)(652,`strong`),Mk(653,`(opcional)`),Kg()(),Jc(654,`p`),Mk(655,`Define o estilo visual do componente conforme valores especificados no enum `),Jc(656,`code`),Mk(657,`PoButtonKind`),Kg(),Mk(658,`:`),Kg(),Jc(659,`ul`)(660,`li`)(661,`code`),Mk(662,`primary`),Kg(),Mk(663,`: destaca o botão, sendo recomendado para ações principais.`),Kg(),Jc(664,`li`)(665,`code`),Mk(666,`secondary`),Kg(),Mk(667,`: estilo padrão, ideal para ações secundárias.`),Kg(),Jc(668,`li`)(669,`code`),Mk(670,`tertiary`),Kg(),Mk(671,`: exibe o botão sem preenchimento no fundo, indicado para ações opcionais.`),Kg(),Jc(672,`li`)(673,`code`),Mk(674,`glow`),Kg(),Mk(675,`: exibe o bot\xE3o em formato de p\xEDlula com um brilho animado percorrendo a borda, indicado para destacar
uma chamada para a\xE7\xE3o. Deve ser usado com modera\xE7\xE3o, preferencialmente em apenas um bot\xE3o por p\xE1gina.`),Kg()(),Jc(676,`blockquote`)(677,`p`),Mk(678,`O estilo `),Jc(679,`code`),Mk(680,`glow`),Kg(),Mk(681,` é incompatível com a propriedade `),Jc(682,`code`),Mk(683,`p-danger`),Kg(),Mk(684,`.`),Kg()()()(),Jc(685,`tr`,35)(686,`td`,17)(687,`div`,18)(688,`span`,19),Mk(689,` p-label`),_u(690,`br`),Kg()()(),Jc(691,`td`,20)(692,`code`,21),Mk(693,`string`),Kg()(),Jc(694,`td`,22),Mk(695,`-`),Kg(),Jc(696,`td`,23)(697,`em`)(698,`strong`),Mk(699,`(opcional)`),Kg()(),Jc(700,`p`),Mk(701,`Label do botão.`),Kg()()(),Jc(702,`tr`,36)(703,`td`,17)(704,`div`,18)(705,`span`,19),Mk(706,` p-loading`),_u(707,`br`),Kg()()(),Jc(708,`td`,20)(709,`code`,29),Mk(710,`boolean`),Kg()(),Jc(711,`td`,22)(712,`p`)(713,`code`),Mk(714,`false`),Kg()()(),Jc(715,`td`,23)(716,`em`)(717,`strong`),Mk(718,`(opcional)`),Kg()(),Jc(719,`p`),Mk(720,`Exibe um ícone de carregamento à esquerda do `),Jc(721,`em`),Mk(722,`label`),Kg(),Mk(723,` do botão.`),Kg(),Jc(724,`blockquote`)(725,`p`),Mk(726,`Quando esta propriedade estiver habilitada, desabilitará o botão.`),Kg()()()(),Jc(727,`tr`,37)(728,`td`,17)(729,`div`,18)(730,`span`,19),Mk(731,` p-size`),_u(732,`br`),Kg()()(),Jc(733,`td`,20)(734,`code`,21),Mk(735,`string`),Kg()(),Jc(736,`td`,22)(737,`p`)(738,`code`),Mk(739,`medium`),Kg()()(),Jc(740,`td`,23)(741,`em`)(742,`strong`),Mk(743,`(opcional)`),Kg()(),Jc(744,`p`),Mk(745,`Define o tamanho do componente:`),Kg(),Jc(746,`ul`)(747,`li`)(748,`code`),Mk(749,`small`),Kg(),Mk(750,`: altura de 32px (disponível apenas para acessibilidade AA).`),Kg(),Jc(751,`li`)(752,`code`),Mk(753,`medium`),Kg(),Mk(754,`: altura de 44px.`),Kg(),Jc(755,`li`)(756,`code`),Mk(757,`large`),Kg(),Mk(758,`: altura de 56px.`),Kg()(),Jc(759,`blockquote`)(760,`p`),Mk(761,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Jc(762,`code`),Mk(763,`medium`),Kg(),Mk(764,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Jc(765,`a`,38),Mk(766,`po-theme`),Kg(),Mk(767,`.`),Kg()()()(),Jc(768,`tr`,39)(769,`td`,17)(770,`div`,18)(771,`span`,19),Mk(772,` p-tabindex`),_u(773,`br`),Kg()()(),Jc(774,`td`,20)(775,`code`,40),Mk(776,`number `),Kg(),Jc(777,`code`,21),Mk(778,` string`),Kg()(),Jc(779,`td`,22),Mk(780,`-`),Kg(),Jc(781,`td`,23)(782,`em`)(783,`strong`),Mk(784,`(opcional)`),Kg()(),Jc(785,`p`),Mk(786,`Define o `),Jc(787,`code`),Mk(788,`tabindex`),Kg(),Mk(789,` do elemento `),Jc(790,`code`),Mk(791,`<button>`),Kg(),Mk(792,` nativo interno.`),Kg(),Jc(793,`p`),Mk(794,`Use `),Jc(795,`code`),Mk(796,`[tabindex]="-1"`),Kg(),Mk(797,` para remover o botão da ordem de foco do teclado.`),Kg()()(),Jc(798,`tr`,41)(799,`td`,17)(800,`div`,18)(801,`span`,19),Mk(802,` p-type`),_u(803,`br`),Kg()()(),Jc(804,`td`,20)(805,`code`,42),Mk(806,`PoButtonType`),Kg()(),Jc(807,`td`,22)(808,`p`)(809,`code`),Mk(810,`PoButtonType.Button`),Kg()()(),Jc(811,`td`,23)(812,`em`)(813,`strong`),Mk(814,`(opcional)`),Kg()(),Jc(815,`p`),Mk(816,`Define o tipo do botão.`),Kg()()()(),Jc(817,`h3`,12),Mk(818,`Métodos`),Kg(),Jc(819,`table`,43)(820,`tr`,44)(821,`th`,45)(822,`div`,18)(823,`h4`)(824,`span`,19),Mk(825,` focus `),Kg()()()()(),Jc(826,`tr`,23)(827,`td`,23)(828,`p`),Mk(829,`Função que atribui foco ao componente.`),Kg(),Jc(830,`p`),Mk(831,`Para utilizá-la é necessário ter a instância do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:`),Kg(),Jc(832,`pre`)(833,`code`),Mk(834,`import { PoButtonComponent } from '@po-ui/ng-components';

...

@ViewChild(PoButtonComponent, { static: true }) button: PoButtonComponent;

focusButton() {
  this.button.focus();
}
`),Kg()()()()(),_u(835,`br`),Jc(836,`h3`),Mk(837,`Enums`),Kg(),Jc(838,`h4`,46)(839,`code`,5),Mk(840,`PoButtonKind`),Kg()(),Jc(841,`div`,2)(842,`p`),Mk(843,`Estilos disponíveis do button.`),Kg()(),Jc(844,`h4`,12),Mk(845,`Propriedades`),Kg(),Jc(846,`table`,13)(847,`tr`,14)(848,`th`,15),Mk(849,`Nome`),Kg(),Jc(850,`th`,15),Mk(851,`Descrição`),Kg()(),Jc(852,`tr`,47)(853,`td`,17)(854,`div`,18)(855,`span`,19),Mk(856,` primary`),_u(857,`br`),Kg()()(),Jc(858,`td`,23)(859,`p`),Mk(860,`Estilo primário, usado para ações principais que requerem maior destaque.`),Kg()()(),Jc(861,`tr`,48)(862,`td`,17)(863,`div`,18)(864,`span`,19),Mk(865,` secondary`),_u(866,`br`),Kg()()(),Jc(867,`td`,23)(868,`p`),Mk(869,`Estilo secundário, usado como padrão, para ações comuns.`),Kg()()(),Jc(870,`tr`,49)(871,`td`,17)(872,`div`,18)(873,`span`,19),Mk(874,` tertiary`),_u(875,`br`),Kg()()(),Jc(876,`td`,23)(877,`p`),Mk(878,`Estilo terciário, ideal para ações menos importantes, sem fundo preenchido.`),Kg()()(),Jc(879,`tr`,50)(880,`td`,17)(881,`div`,18)(882,`span`,19),Mk(883,` glow`),_u(884,`br`),Kg()()(),Jc(885,`td`,23)(886,`p`),Mk(887,`Estilo com brilho animado que percorre a borda do botão, usado para destacar uma chamada para ação.`),Kg(),Jc(888,`blockquote`)(889,`p`),Mk(890,`Incompatível com a propriedade `),Jc(891,`code`),Mk(892,`p-danger`),Kg(),Mk(893,`.`),Kg()()()()(),Jc(894,`h4`,51)(895,`code`,5),Mk(896,`PoButtonType`),Kg()(),Jc(897,`div`,2)(898,`p`),Mk(899,`Enumeração que define os tipos possíveis para o `),Jc(900,`code`),Mk(901,`PoButtonComponent`),Kg(),Mk(902,`. Estes tipos est\xE3o relacionados ao comportamento
do bot\xE3o quando utilizado dentro de um formul\xE1rio HTML.`),Kg()(),Jc(903,`h4`,12),Mk(904,`Propriedades`),Kg(),Jc(905,`table`,13)(906,`tr`,14)(907,`th`,15),Mk(908,`Nome`),Kg(),Jc(909,`th`,15),Mk(910,`Descrição`),Kg()(),Jc(911,`tr`,52)(912,`td`,17)(913,`div`,18)(914,`span`,19),Mk(915,` Submit`),_u(916,`br`),Kg()()(),Jc(917,`td`,23)(918,`p`),Mk(919,`Define o botão como do tipo `),Jc(920,`code`),Mk(921,`submit`),Kg(),Mk(922,`. Quando clicado, o formul\xE1rio \xE9 enviado automaticamente,
disparando o evento `),Jc(923,`code`),Mk(924,`submit`),Kg(),Mk(925,`.`),Kg()()(),Jc(926,`tr`,53)(927,`td`,17)(928,`div`,18)(929,`span`,19),Mk(930,` Button`),_u(931,`br`),Kg()()(),Jc(932,`td`,23)(933,`p`),Mk(934,`Define o botão como do tipo `),Jc(935,`code`),Mk(936,`button`),Kg(),Mk(937,`. Este tipo de bot\xE3o n\xE3o possui comportamento padr\xE3o associado
e \xE9 utilizado principalmente para a\xE7\xF5es program\xE1ticas como cliques e disparos de eventos customizados.`),Kg()()(),Jc(938,`tr`,54)(939,`td`,17)(940,`div`,18)(941,`span`,19),Mk(942,` Reset`),_u(943,`br`),Kg()()(),Jc(944,`td`,23)(945,`p`),Mk(946,`Define o botão como do tipo `),Jc(947,`code`),Mk(948,`reset`),Kg(),Mk(949,`. Quando clicado, redefine os campos do formul\xE1rio ao qual pertence
para seus valores iniciais.`),Kg()()()()())},dependencies:[P],encapsulation:2,changeDetection:1})}return o})();function Pe(o,G){if(o&1&&(Jc(0,`div`,1),_u(1,`sample-po-button-basic-view`)(2,`sample-po-button-labs-view`)(3,`sample-po-button-social-network-view`),Kg()),o&2){let r=tk();Ab(`hidden`,r.activeTab!==`web`)}}var De=[{path:``,component:(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;title=`Button`;actions=[];toWeb={label:`Ver exemplos`,icon:`an an-browsers`,action:()=>this.changeTab(`web`)};toDoc={label:`Ver documentação`,icon:`an an-file-text`,action:()=>this.changeTab(`doc`)};back={label:`Voltar`,icon:`an an-arrow-left`,action:this.goBack.bind(this)};constructor(r,i){this.route=r,this.router=i}goBack(){this.router.navigate([`documentation`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let i=r.view;this.hidePoWebSample=this.samplesLength===0,this.activeTab=this.hidePoWebSample?`doc`:i||`web`,this.title=`Button · `+(this.activeTab===`web`?`Exemplos`:`Documentação`),this.actions=this.hidePoWebSample?[this.back]:[this.activeTab===`web`?this.toDoc:this.toWeb,this.back]})}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:`merge`})}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(i){return new(i||o)(I(ar),I(An))};static ɵcmp=Jn({type:o,selectors:[[`ng-component`]],standalone:!1,decls:4,vars:4,consts:[[`data-tour`,`component-page`,3,`p-title`,`p-actions`],[`data-tour-mode`,`web`,3,`hidden`],[`data-tour-mode`,`doc`,3,`hidden`]],template:function(i,a){i&1&&(Jc(0,`po-page-default`,0),LO(1,Pe,4,1,`div`,1),Jc(2,`div`,2),_u(3,`sample-po-button-doc`),Kg()()),i&2&&(Ab(`p-title`,a.title)(`p-actions`,a.actions),wg(),jO(a.hidePoWebSample?-1:1),wg(),Ab(`hidden`,a.activeTab!==`doc`))},dependencies:[Mze,pe,me,ue,be],encapsulation:2,changeDetection:1})}return o})()}];var ge=(()=>{class o{static ɵfac=function(i){return new(i||o)};static ɵmod=ge$1({type:o});static ɵinj=de$1({imports:[GV.forChild(De),GV]})}return o})();var mt=(()=>{class o{static ɵfac=function(i){return new(i||o)};static ɵmod=ge$1({type:o});static ɵinj=de$1({imports:[M,ge]})}return o})();export{mt as DocPoButtonModule};