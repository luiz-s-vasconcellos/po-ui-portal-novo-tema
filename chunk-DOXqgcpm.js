import{m as P,p as M}from"./main-RBGX2DMP.js";import{$a as tm,An as sie,Ar as I,At as Zte,Ca as j_,G as Nf,Gi as Yb,Ha as p,Ii as WL,Ir as Kb,It as bae,Kt as d4,Lr as Kg,Oi as VO,Pi as W0,Pn as tre,Pr as Jn,Pt as are,Qi as ar,Ti as U_,Vt as c4,W as Mze,Wi as YO,Wr as MZ,_o as z0,ao as vu,ar as An,bi as TZ,bn as oi,ca as ek,cr as B_,da as ge$1,gi as Rb,io as vt,j as I4,ki as V_,li as Qc,ra as de$1,rr as AZ,rt as Ru,si as QL,sn as j4,so as wg,vi as Sk,wr as GV,xi as Tk,xr as FO}from"./chunk-BQDTQO8h.js";import{n as s,t as r}from"./chunk-zystk1pz.js";var de=(()=>{class o{onClick(){alert(`Po Button!`)}static ɵfac=function(i){return new(i||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-button-basic`]],standalone:!1,decls:1,vars:0,consts:[[`p-label`,`PO Button`,3,`p-click`]],template:function(i,a){i&1&&(Qc(0,`po-button`,0),vt(`p-click`,function(){return a.onClick()}),Kg())},dependencies:[oi],encapsulation:2,changeDetection:1})}return o})();var pe=(()=>{class o{static ɵfac=function(i){return new(i||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-button-basic-view`]],standalone:!1,decls:24,vars:0,consts:[[`id`,`sample-po-button-basic`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-button-basic/sample-po-button-basic.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-button-basic/sample-po-button-basic.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`]],template:function(i,a){i&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Button Basic`),Kg()(),Qc(4,`div`)(5,`po-tabs`,2)(6,`po-tab`,3)(7,`div`,4),vu(8,`sample-po-button-basic`),Kg()(),Qc(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-button-basic/sample-po-button-basic.component.html`),Kg(),Qc(13,`div`,7)(14,`pre`,8),Sk(15,`<po-button p-label="PO Button" (p-click)="onClick()"> </po-button>
`),Kg()()()(),Qc(16,`po-tab`,9)(17,`div`)(18,`label`,6),Sk(19,`sample-po-button-basic/sample-po-button-basic.component.ts`),Kg(),Qc(20,`div`,10)(21,`pre`,11),Sk(22,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),Kg()()()()()(),vu(23,`hr`))},dependencies:[P,tre,are,de],encapsulation:2,changeDetection:1})}return o})();var se=(()=>{class o{poDialog=p(sie);label;kind;icon;size;properties;type;propertiesOptions=[{value:`disabled`,label:`Disabled`},{value:`loading`,label:`Loading`},{value:`danger`,label:`Danger`}];iconsOptions=[{label:`an an-newspaper`,value:`an an-newspaper`},{label:`an an-calendar-dots`,value:`an an-calendar-dots`},{label:`an an-user`,value:`an an-user`},{label:`fa fa-podcast`,value:`fa fa-podcast`}];kindsOptions=[{label:`primary`,value:`primary`},{label:`secondary`,value:`secondary`},{label:`tertiary`,value:`tertiary`},{label:`glow`,value:`glow`}];kindsWithoutDanger=[`tertiary`,`glow`];sizesOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`},{label:`large`,value:`large`}];typeOptions=[{label:`button`,value:d4.Button},{label:`submit`,value:d4.Submit},{label:`reset`,value:d4.Reset}];ngOnInit(){this.restore()}buttonClick(){this.poDialog.alert({title:`PO Button`,message:`Hello PO World!!!`})}propertiesChange(r$1){let i=!!r$1&&this.properties.includes(`danger`);this.setKindsWithoutDangerDisabled(i),this.sizesOptions[0]=s(r({},this.sizesOptions[0]),{disabled:!1}),this.sizesOptions[1]=s(r({},this.sizesOptions[1]),{disabled:!1})}verifyDisabled(r){let i=[...this.propertiesOptions];this.kindsWithoutDanger.includes(r)?(i[2]={value:`danger`,label:`Danger`,disabled:!0},this.propertiesOptions=i):(i[2]={value:`danger`,label:`Danger`,disabled:!1},this.propertiesOptions=i)}restore(){this.label=void 0,this.kind=`secondary`,this.size=`medium`,this.icon=void 0,this.type=d4.Button,this.properties=[],this.setKindsWithoutDangerDisabled(!1),this.sizesOptions[0]=s(r({},this.sizesOptions[0]),{disabled:!1}),this.sizesOptions[1]=s(r({},this.sizesOptions[1]),{disabled:!1})}setKindsWithoutDangerDisabled(r$2){this.kindsOptions=this.kindsOptions.map(i=>this.kindsWithoutDanger.includes(i.value)?s(r({},i),{disabled:r$2}):i)}static ɵfac=function(i){return new(i||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-button-labs`]],standalone:!1,decls:14,vars:19,consts:[[`f`,`ngForm`],[1,`po-row`],[1,`po-sm-12`,3,`p-click`,`p-disabled`,`p-icon`,`p-label`,`p-loading`,`p-size`,`p-danger`,`p-kind`,`p-type`],[`name`,`label`,`p-clean`,``,`p-label`,`Label`,1,`po-lg-6`,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`properties`,`p-columns`,`4`,`p-label`,`Properties`,1,`po-lg-12`,3,`ngModelChange`,`p-change`,`ngModel`,`p-options`],[`name`,`icon`,`p-columns`,`4`,`p-label`,`Icon`,1,`po-lg-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`kind`,`p-columns`,`4`,`p-label`,`Kind`,1,`po-lg-12`,3,`ngModelChange`,`p-change`,`ngModel`,`p-options`],[`name`,`type`,`p-columns`,`4`,`p-label`,`Type`,1,`po-lg-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`size`,`p-columns`,`4`,`p-label`,`Size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-lg-12`,3,`ngModelChange`,`p-change`,`ngModel`,`p-options`],[`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`]],template:function(i,a){if(i&1){let x=YO();Qc(0,`div`,1)(1,`po-button`,2),vt(`p-click`,function(){return a.buttonClick()}),Kg()(),vu(2,`po-divider`),Qc(3,`form`,null,0)(5,`div`,1)(6,`po-input`,3),z0(),Kb(`ngModelChange`,function(d){return B_(x),Tk(a.label,d)||(a.label=d),U_(d)}),Kg()(),Qc(7,`po-checkbox-group`,4),z0(),Kb(`ngModelChange`,function(d){return B_(x),Tk(a.properties,d)||(a.properties=d),U_(d)}),vt(`p-change`,function(d){return a.propertiesChange(d)}),Kg(),Qc(8,`po-radio-group`,5),z0(),Kb(`ngModelChange`,function(d){return B_(x),Tk(a.icon,d)||(a.icon=d),U_(d)}),Kg(),Qc(9,`po-radio-group`,6),z0(),Kb(`ngModelChange`,function(d){return B_(x),Tk(a.kind,d)||(a.kind=d),U_(d)}),vt(`p-change`,function(d){return a.verifyDisabled(d)}),Kg(),Qc(10,`po-radio-group`,7),z0(),Kb(`ngModelChange`,function(d){return B_(x),Tk(a.type,d)||(a.type=d),U_(d)}),Kg(),Qc(11,`po-radio-group`,8),z0(),Kb(`ngModelChange`,function(d){return B_(x),Tk(a.size,d)||(a.size=d),U_(d)}),vt(`p-change`,function(d){return a.verifyDisabled(d)}),Kg(),Qc(12,`div`,1)(13,`po-button`,9),vt(`p-click`,function(){return a.restore()}),Kg()()()}i&2&&(wg(),Rb(`p-disabled`,a.properties.includes(`disabled`))(`p-icon`,a.icon)(`p-label`,a.label)(`p-loading`,a.properties.includes(`loading`))(`p-size`,a.size)(`p-danger`,a.properties.includes(`danger`))(`p-kind`,a.kind)(`p-type`,a.type),wg(5),Yb(`ngModel`,a.label),W0(),wg(),Yb(`ngModel`,a.properties),Rb(`p-options`,a.propertiesOptions),W0(),wg(),Yb(`ngModel`,a.icon),Rb(`p-options`,a.iconsOptions),W0(),wg(),Yb(`ngModel`,a.kind),Rb(`p-options`,a.kindsOptions),W0(),wg(),Yb(`ngModel`,a.type),Rb(`p-options`,a.typeOptions),W0(),wg(),Yb(`ngModel`,a.size),Rb(`p-options`,a.sizesOptions),W0())},dependencies:[AZ,MZ,TZ,QL,WL,oi,Nf,I4,j4,Zte],encapsulation:2,changeDetection:1})}return o})();var me=(()=>{class o{static ɵfac=function(i){return new(i||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-button-labs-view`]],standalone:!1,decls:24,vars:0,consts:[[`id`,`sample-po-button-labs`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-button-labs/sample-po-button-labs.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-button-labs/sample-po-button-labs.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`]],template:function(i,a){i&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Button Labs`),Kg()(),Qc(4,`div`)(5,`po-tabs`,2)(6,`po-tab`,3)(7,`div`,4),vu(8,`sample-po-button-labs`),Kg()(),Qc(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-button-labs/sample-po-button-labs.component.html`),Kg(),Qc(13,`div`,7)(14,`pre`,8),Sk(15,`<div class="po-row">
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
`),Kg()()()(),Qc(16,`po-tab`,9)(17,`div`)(18,`label`,6),Sk(19,`sample-po-button-labs/sample-po-button-labs.component.ts`),Kg(),Qc(20,`div`,10)(21,`pre`,11),Sk(22,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),Kg()()()()()(),vu(23,`hr`))},dependencies:[P,tre,are,se],encapsulation:2,changeDetection:1})}return o})();function ve(o,G){if(o&1){let r=YO();Qc(0,`div`,0),vu(1,`po-avatar`,2),Qc(2,`div`,3)(3,`span`,4),Sk(4),Kg(),Qc(5,`span`,5),Sk(6),Kg(),Qc(7,`span`,5),Sk(8),Kg()()(),Qc(9,`div`,0)(10,`po-button`,6),vt(`p-click`,function(){B_(r);let a=ek();return U_(a.notification(`added`,`success`))}),Kg(),Qc(11,`po-button`,7),vt(`p-click`,function(){B_(r);let a=ek();return U_(a.notification(`ignored`,`warning`))}),Kg(),Qc(12,`po-button`,8),vt(`p-click`,function(){B_(r);let a=ek();return U_(a.notification(`blocked`,`information`))}),Kg()()}if(o&2){let r=ek();wg(),Rb(`p-src`,r.userAvatar),wg(3),tm(` `,r.currentFriend.name,` `),wg(2),tm(` `,r.currentFriend.mutualFriends,` mutual friends `),wg(2),tm(` Resides in `,r.currentFriend.reside,` `)}}function Ce(o,G){o&1&&(Qc(0,`div`,0)(1,`span`,9),Sk(2,`Congratulations TOTVS, no more requests!`),Kg()())}var ce=(()=>{class o{poNotification=p(Ru);currentFriend;userAvatar=`https://lorempixel.com/144/144/`;newFriends=[{name:`Mr. Dev PO`,mutualFriends:`7`,reside:`Mountain View, CA`},{name:`Mr. AI PO`,mutualFriends:`99+`,reside:`New York City, NY`},{name:`Mr. UX PO`,mutualFriends:`14`,reside:`Los Angeles, CA`}];indexFriend=0;ngOnInit(){this.setCurrentFriend(0)}notification(r,i){this.poNotification[i](`User ${r} successfully!`),this.indexFriend++,this.setCurrentFriend(this.indexFriend)}setCurrentFriend(r){this.currentFriend=this.newFriends[r]}static ɵfac=function(i){return new(i||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-button-social-network`]],standalone:!1,decls:4,vars:1,consts:[[1,`po-row`],[`p-title`,`Friend Request`,1,`po-lg-6`],[`p-size`,`lg`,1,`po-md-4`,3,`p-src`],[1,`po-md-8`],[1,`po-sm-12`,`po-font-subtitle`],[1,`po-sm-12`,`po-font-text`],[`p-icon`,`fa fa-check-circle`,`p-label`,`Confirm`,1,`po-md-4`,3,`p-click`],[`p-icon`,`fa fa-eye-slash`,`p-label`,`Ignore`,1,`po-md-4`,3,`p-click`],[`p-icon`,`fa fa-ban`,`p-label`,`Block`,1,`po-md-4`,3,`p-click`],[1,`po-lg-8`,`po-font-subtitle`]],template:function(i,a){i&1&&(Qc(0,`div`,0)(1,`po-widget`,1),FO(2,ve,13,4)(3,Ce,3,0,`div`,0),Kg()()),i&2&&(wg(2),VO(a.currentFriend?2:3))},dependencies:[c4,oi,bae],encapsulation:2,changeDetection:1})}return o})();var ue=(()=>{class o{static ɵfac=function(i){return new(i||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-button-social-network-view`]],standalone:!1,decls:42,vars:0,consts:[[`id`,`sample-po-button-social-network`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-button-social-network/sample-po-button-social-network.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-button-social-network/sample-po-button-social-network.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`]],template:function(i,a){i&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Button Social Network`),Kg()(),Qc(4,`div`)(5,`po-tabs`,2)(6,`po-tab`,3)(7,`div`,4),vu(8,`sample-po-button-social-network`),Kg()(),Qc(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-button-social-network/sample-po-button-social-network.component.html`),Kg(),Qc(13,`div`,7)(14,`pre`,8),Sk(15,`<div class="po-row">
  <po-widget class="po-lg-6" p-title="Friend Request">
    @if (currentFriend) {
      <div class="po-row">
        <po-avatar class="po-md-4" p-size="lg" [p-src]="userAvatar"> </po-avatar>
        <div class="po-md-8">
          <span class="po-sm-12 po-font-subtitle">
            `),Qc(16,`span`),j_(),Sk(17,`{{`),V_(),Kg(),Sk(18,` currentFriend.name `),Qc(19,`span`),j_(),Sk(20,`}}`),V_(),Kg(),Sk(21,`
          </span>
          <span class="po-sm-12 po-font-text"> `),Qc(22,`span`),j_(),Sk(23,`{{`),V_(),Kg(),Sk(24,` currentFriend.mutualFriends `),Qc(25,`span`),j_(),Sk(26,`}}`),V_(),Kg(),Sk(27,` mutual friends </span>
          <span class="po-sm-12 po-font-text"> Resides in `),Qc(28,`span`),j_(),Sk(29,`{{`),V_(),Kg(),Sk(30,` currentFriend.reside `),Qc(31,`span`),j_(),Sk(32,`}}`),V_(),Kg(),Sk(33,` </span>
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
`),Kg()()()(),Qc(34,`po-tab`,9)(35,`div`)(36,`label`,6),Sk(37,`sample-po-button-social-network/sample-po-button-social-network.component.ts`),Kg(),Qc(38,`div`,10)(39,`pre`,11),Sk(40,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),Kg()()()()()(),vu(41,`hr`))},dependencies:[P,tre,are,ce],encapsulation:2,changeDetection:1})}return o})();var be=(()=>{class o{router=p(An);openDoc(r){this.router.navigate([`/documentation`,r],{queryParams:{view:`doc`}})}static ɵfac=function(i){return new(i||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-button-doc`]],standalone:!1,decls:950,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[`id`,`class-po-button-component`,1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://www.w3.org/WAI/ARIA/apg/#keyboard-interaction-3`],[`href`,`https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance-enhanced`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[`id`,`prop-p-aria-label`,1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`string`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`id`,`event-p-click`,1,`docs-api-properties-row`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[`id`,`prop-p-danger`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`id`,`prop-p-disabled`,1,`docs-api-properties-row`],[`id`,`prop-p-icon`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`TemplateRef<void>`],[`href`,`https://po-ui.io/icons`],[`id`,`prop-p-kind`,1,`docs-api-properties-row`],[`id`,`prop-p-label`,1,`docs-api-properties-row`],[`id`,`prop-p-loading`,1,`docs-api-properties-row`],[`id`,`prop-p-size`,1,`docs-api-properties-row`],[`href`,`https://po-ui.io/documentation/po-theme`],[`id`,`prop-p-tabindex`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`number`],[`id`,`prop-p-type`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoButtonType`],[`id`,`method-focus`,1,`docs-api-method-table`],[1,`docs-api-properties-row`],[`colspan`,`2`,1,`docs-api-properties-name-cell`],[`id`,`enum-po-button-kind`,1,`docs-api-class-name`],[`id`,`enum-po-button-kind-primary`,1,`docs-api-properties-row`],[`id`,`enum-po-button-kind-secondary`,1,`docs-api-properties-row`],[`id`,`enum-po-button-kind-tertiary`,1,`docs-api-properties-row`],[`id`,`enum-po-button-kind-glow`,1,`docs-api-properties-row`],[`id`,`enum-po-button-type`,1,`docs-api-class-name`],[`id`,`enum-po-button-type-submit`,1,`docs-api-properties-row`],[`id`,`enum-po-button-type-button`,1,`docs-api-properties-row`],[`id`,`enum-po-button-type-reset`,1,`docs-api-properties-row`]],template:function(i,a){i&1&&(Qc(0,`div`,0)(1,`p`,1)(2,`code`),Sk(3,`import { PoButtonModule } from '@po-ui/ng-components';`),Kg()(),Qc(4,`div`,2)(5,`p`),Sk(6,`Módulo do componente po-button.`),Kg()(),Qc(7,`h3`,3),Sk(8,`Componente`),Kg(),Qc(9,`h4`,4)(10,`code`,5),Sk(11,`PoButtonComponent`),Kg()(),Qc(12,`div`,2)(13,`p`),Sk(14,`O `),Qc(15,`code`),Sk(16,`po-button`),Kg(),Sk(17,` permite que o usuário execute ações predefinidas pelo desenvolvedor.`),Kg(),Qc(18,`p`),Sk(19,`Através dos tipos, é possível identificar a importância de cada ação.`),Kg(),Qc(20,`h4`),Sk(21,`Boas práticas`),Kg(),Qc(22,`ul`)(23,`li`),Sk(24,`Evite `),Qc(25,`code`),Sk(26,`labels`),Kg(),Sk(27,` extensos que quebram o layout do `),Qc(28,`code`),Sk(29,`po-button`),Kg(),Sk(30,`, use `),Qc(31,`code`),Sk(32,`labels`),Kg(),Sk(33,` diretos, curtos e intuitivos.`),Kg(),Qc(34,`li`),Sk(35,`Utilize apenas um `),Qc(36,`code`),Sk(37,`po-button`),Kg(),Sk(38,` configurado como `),Qc(39,`code`),Sk(40,`primary`),Kg(),Sk(41,` por página.`),Kg(),Qc(42,`li`),Sk(43,`Para ações irreversíveis use sempre a propriedade `),Qc(44,`code`),Sk(45,`p-danger`),Kg(),Sk(46,`.`),Kg()(),Qc(47,`h4`),Sk(48,`Acessibilidade tratada no componente`),Kg(),Qc(49,`p`),Sk(50,`Algumas diretrizes de acessibilidade já são tratadas no componente, internamente, e não podem ser alteradas pelo proprietário do conteúdo. São elas:`),Kg(),Qc(51,`ul`)(52,`li`),Sk(53,`Quando em foco, o botão é ativado usando as teclas de Espaço e Enter do teclado. `),Qc(54,`a`,6),Sk(55,`W3C WAI-ARIA 3.5 Button - Keyboard Interaction`),Kg()(),Qc(56,`li`),Sk(57,`A área do foco precisar ter uma espessura de pelo menos 2 pixels CSS e o foco não pode ficar escondido por outros elementos da tela. `),Qc(58,`a`,7),Sk(59,`WCAG 2.4.12: Focus Appearance`),Kg()()(),Qc(60,`h4`),Sk(61,`Tokens customizáveis`),Kg(),Qc(62,`p`),Sk(63,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),Kg(),Qc(64,`blockquote`)(65,`p`),Sk(66,`Para maiores informações, acesse o guia `),Qc(67,`a`,8),Sk(68,`Personalizando o Tema Padrão com Tokens CSS`),Kg(),Sk(69,`.`),Kg()(),Qc(70,`table`)(71,`thead`)(72,`tr`)(73,`th`),Sk(74,`Propriedade`),Kg(),Qc(75,`th`),Sk(76,`Descrição`),Kg(),Qc(77,`th`),Sk(78,`Valor Padrão`),Kg()()(),Qc(79,`tbody`)(80,`tr`)(81,`td`)(82,`code`),Sk(83,`--font-family`),Kg()(),Qc(84,`td`),Sk(85,`Família tipográfica usada`),Kg(),Qc(86,`td`)(87,`code`),Sk(88,`var(--font-family-theme)`),Kg()()(),Qc(89,`tr`)(90,`td`)(91,`code`),Sk(92,`--font-size`),Kg()(),Qc(93,`td`),Sk(94,`Tamanho da fonte`),Kg(),Qc(95,`td`)(96,`code`),Sk(97,`var(--font-size-default)`),Kg()()(),Qc(98,`tr`)(99,`td`)(100,`code`),Sk(101,`--font-weight`),Kg()(),Qc(102,`td`),Sk(103,`Peso da fonte`),Kg(),Qc(104,`td`)(105,`code`),Sk(106,`var(--font-weight-bold)`),Kg()()(),Qc(107,`tr`)(108,`td`)(109,`code`),Sk(110,`--line-height`),Kg()(),Qc(111,`td`),Sk(112,`Tamanho da label`),Kg(),Qc(113,`td`)(114,`code`),Sk(115,`var(--line-height-none)`),Kg()()(),Qc(116,`tr`)(117,`td`)(118,`code`),Sk(119,`--border-radius`),Kg()(),Qc(120,`td`),Sk(121,`Contém o valor do raio dos cantos do elemento\xA0`),Kg(),Qc(122,`td`)(123,`code`),Sk(124,`var(--border-radius-md)`),Kg()()(),Qc(125,`tr`)(126,`td`)(127,`code`),Sk(128,`--border-width`),Kg()(),Qc(129,`td`),Sk(130,`Contém o valor da largura dos cantos do elemento\xA0`),Kg(),Qc(131,`td`)(132,`code`),Sk(133,`var(--border-width-md)`),Kg()()(),Qc(134,`tr`)(135,`td`)(136,`code`),Sk(137,`--padding`),Kg()(),Qc(138,`td`),Sk(139,`Preenchimento`),Kg(),Qc(140,`td`)(141,`code`),Sk(142,`0 1em`),Kg()()(),Qc(143,`tr`)(144,`td`)(145,`strong`),Sk(146,`Danger`),Kg()(),vu(147,`td`)(148,`td`),Kg(),Qc(149,`tr`)(150,`td`)(151,`code`),Sk(152,`--text-color-danger`),Kg()(),Qc(153,`td`),Sk(154,`Cor do texto no estado danger`),Kg(),Qc(155,`td`)(156,`code`),Sk(157,`var(--color-neutral-light-00)`),Kg()()(),Qc(158,`tr`)(159,`td`)(160,`code`),Sk(161,`--color-button-danger`),Kg()(),Qc(162,`td`),Sk(163,`Cor do botão no estado danger`),Kg(),Qc(164,`td`)(165,`code`),Sk(166,`var(--color-feedback-negative-dark)`),Kg()()(),Qc(167,`tr`)(168,`td`)(169,`code`),Sk(170,`--color-danger-hover`),Kg()(),Qc(171,`td`),Sk(172,`Cor de hover no estado danger`),Kg(),Qc(173,`td`)(174,`code`),Sk(175,`var(--color-feedback-negative-darker)`),Kg()()(),Qc(176,`tr`)(177,`td`)(178,`code`),Sk(179,`--color-danger-pressed`),Kg()(),Qc(180,`td`),Sk(181,`Cor pressionada no estado danger`),Kg(),Qc(182,`td`)(183,`code`),Sk(184,`var(--color-feedback-negative-darkest)`),Kg()()(),Qc(185,`tr`)(186,`td`)(187,`code`),Sk(188,`--background-danger-hover`),Kg()(),Qc(189,`td`),Sk(190,`Cor de background de hover no estado danger`),Kg(),Qc(191,`td`)(192,`code`),Sk(193,`var(--color-feedback-negative-lighter)`),Kg()()(),Qc(194,`tr`)(195,`td`)(196,`code`),Sk(197,`--border-color-danger-hover`),Kg()(),Qc(198,`td`),Sk(199,`Cor da borda de hover no estado danger`),Kg(),Qc(200,`td`)(201,`code`),Sk(202,`var(--color-feedback-negative-darkest)`),Kg()()(),Qc(203,`tr`)(204,`td`)(205,`code`),Sk(206,`--background-danger-pressed`),Kg()(),Qc(207,`td`),Sk(208,`Cor de background pressionado no estado danger`),Kg(),Qc(209,`td`)(210,`code`),Sk(211,`var(--color-feedback-negative-light)`),Kg()()(),Qc(212,`tr`)(213,`td`)(214,`code`),Sk(215,`--background-color-button-danger`),Kg(),Sk(216,`\xA0`),Kg(),Qc(217,`td`),Sk(218,`Cor de background do botão no estado danger`),Kg(),Qc(219,`td`)(220,`code`),Sk(221,`var(--color-transparent)`),Kg()()(),Qc(222,`tr`)(223,`td`)(224,`strong`),Sk(225,`Default Values`),Kg()(),vu(226,`td`)(227,`td`),Kg(),Qc(228,`tr`)(229,`td`)(230,`code`),Sk(231,`--text-color`),Kg()(),Qc(232,`td`),Sk(233,`Cor do texto`),Kg(),Qc(234,`td`)(235,`code`),Sk(236,`var(--color-neutral-light-00)`),Kg()()(),Qc(237,`tr`)(238,`td`)(239,`code`),Sk(240,`--color`),Kg()(),Qc(241,`td`),Sk(242,`Cor principal do botão`),Kg(),Qc(243,`td`)(244,`code`),Sk(245,`var(--color-action-default)`),Kg()()(),Qc(246,`tr`)(247,`td`)(248,`code`),Sk(249,`--background-color`),Kg()(),Qc(250,`td`),Sk(251,`Cor de background`),Kg(),Qc(252,`td`)(253,`code`),Sk(254,`var(--color-transparent)`),Kg()()(),Qc(255,`tr`)(256,`td`)(257,`code`),Sk(258,`--border-color`),Kg()(),Qc(259,`td`),Sk(260,`Cor da borda`),Kg(),Qc(261,`td`)(262,`code`),Sk(263,`var(--color-transparent)`),Kg()()(),Qc(264,`tr`)(265,`td`)(266,`code`),Sk(267,`--shadow`),Kg()(),Qc(268,`td`),Sk(269,`Contém o valor da sombra do elemento`),Kg(),Qc(270,`td`)(271,`code`),Sk(272,`var(--shadow-none)`),Kg()()(),Qc(273,`tr`)(274,`td`)(275,`strong`),Sk(276,`Hover`),Kg()(),vu(277,`td`)(278,`td`),Kg(),Qc(279,`tr`)(280,`td`)(281,`code`),Sk(282,`--color-hover`),Kg()(),Qc(283,`td`),Sk(284,`Cor principal no estado hover`),Kg(),Qc(285,`td`)(286,`code`),Sk(287,`var(--color-action-hover)`),Kg()()(),Qc(288,`tr`)(289,`td`)(290,`code`),Sk(291,`--background-hover`),Kg()(),Qc(292,`td`),Sk(293,`Cor de background no estado hover`),Kg(),Qc(294,`td`)(295,`code`),Sk(296,`var(--color-brand-01-lighter)`),Kg()()(),Qc(297,`tr`)(298,`td`)(299,`code`),Sk(300,`--border-color-hover`),Kg()(),Qc(301,`td`),Sk(302,`Cor da borda no estado hover`),Kg(),Qc(303,`td`)(304,`code`),Sk(305,`var(--color-brand-01-darkest)`),Kg()()(),Qc(306,`tr`)(307,`td`)(308,`strong`),Sk(309,`Focused`),Kg()(),vu(310,`td`)(311,`td`),Kg(),Qc(312,`tr`)(313,`td`)(314,`code`),Sk(315,`--outline-color-focused`),Kg()(),Qc(316,`td`),Sk(317,`Cor do outline do estado de focus`),Kg(),Qc(318,`td`)(319,`code`),Sk(320,`var(--color-action-focus)`),Kg()()(),Qc(321,`tr`)(322,`td`)(323,`strong`),Sk(324,`Pressed`),Kg()(),vu(325,`td`)(326,`td`),Kg(),Qc(327,`tr`)(328,`td`)(329,`code`),Sk(330,`--color-pressed`),Kg()(),Qc(331,`td`),Sk(332,`Cor principal no estado de pressionado`),Kg(),Qc(333,`td`)(334,`code`),Sk(335,`var(--color-action-pressed)`),Kg()()(),Qc(336,`tr`)(337,`td`)(338,`code`),Sk(339,`--background-pressed`),Kg()(),Qc(340,`td`),Sk(341,`Cor de background no estado de pressionado\xA0`),Kg(),Qc(342,`td`)(343,`code`),Sk(344,`var(--color-brand-01-light)`),Kg()()(),Qc(345,`tr`)(346,`td`)(347,`strong`),Sk(348,`Disabled`),Kg()(),vu(349,`td`)(350,`td`),Kg(),Qc(351,`tr`)(352,`td`)(353,`code`),Sk(354,`--text-color-disabled`),Kg()(),Qc(355,`td`),Sk(356,`Cor do texto no estado disabled`),Kg(),Qc(357,`td`)(358,`code`),Sk(359,`var(--color-neutral-dark-70)`),Kg()()(),Qc(360,`tr`)(361,`td`)(362,`code`),Sk(363,`--color-disabled`),Kg()(),Qc(364,`td`),Sk(365,`Cor principal no estado disabled`),Kg(),Qc(366,`td`)(367,`code`),Sk(368,`var(--color-action-disabled)`),Kg()()(),Qc(369,`tr`)(370,`td`)(371,`code`),Sk(372,`--background-color-disabled`),Kg()(),Qc(373,`td`),Sk(374,`Cor de background no estado disabled`),Kg(),Qc(375,`td`)(376,`code`),Sk(377,`var(--color-transparent)`),Kg()()(),Qc(378,`tr`)(379,`td`)(380,`strong`),Sk(381,`Glow`),Kg(),Sk(382,` (`),Qc(383,`code`),Sk(384,`p-kind="glow"`),Kg(),Sk(385,`)`),Kg(),vu(386,`td`)(387,`td`),Kg(),Qc(388,`tr`)(389,`td`)(390,`code`),Sk(391,`--color-glow-highlight`),Kg()(),Qc(392,`td`),Sk(393,`Cor do reflexo no estado hover`),Kg(),Qc(394,`td`)(395,`code`),Sk(396,`var(--color-brand-01-light)`),Kg()()(),Qc(397,`tr`)(398,`td`)(399,`code`),Sk(400,`--color-glow-ring`),Kg()(),Qc(401,`td`),Sk(402,`Cor do brilho da borda e do brilho interno (hover)`),Kg(),Qc(403,`td`)(404,`code`),Sk(405,`var(--color-neutral-light-00)`),Kg()()(),Qc(406,`tr`)(407,`td`)(408,`code`),Sk(409,`--glow-animation-duration`),Kg()(),Qc(410,`td`),Sk(411,`Duração de uma volta completa do brilho`),Kg(),Qc(412,`td`)(413,`code`),Sk(414,`3200ms`),Kg()()(),Qc(415,`tr`)(416,`td`)(417,`code`),Sk(418,`--glow-transition-duration`),Kg()(),Qc(419,`td`),Sk(420,`Duração da transição entre estados`),Kg(),Qc(421,`td`)(422,`code`),Sk(423,`var(--duration-extra-slow)`),Kg()()(),Qc(424,`tr`)(425,`td`)(426,`code`),Sk(427,`--glow-transition-timing`),Kg()(),Qc(428,`td`),Sk(429,`Curva de aceleração da transição entre estados`),Kg(),Qc(430,`td`)(431,`code`),Sk(432,`var(--timing-exiting)`),Kg()()()()(),Qc(433,`blockquote`)(434,`p`),Sk(435,`No estilo `),Qc(436,`code`),Sk(437,`glow`),Kg(),Sk(438,`, o botão reutiliza os tokens `),Qc(439,`code`),Sk(440,`--color`),Kg(),Sk(441,`, `),Qc(442,`code`),Sk(443,`--text-color`),Kg(),Sk(444,`, `),Qc(445,`code`),Sk(446,`--color-hover`),Kg(),Sk(447,`, `),Qc(448,`code`),Sk(449,`--color-pressed`),Kg(),Sk(450,` e
`),Qc(451,`code`),Sk(452,`--border-width`),Kg(),Sk(453,`. O brilho percorre a borda com velocidade constante via `),Qc(454,`code`),Sk(455,`offset-path`),Kg(),Sk(456,`. Em navegadores sem
suporte a `),Qc(457,`code`),Sk(458,`offset-path`),Kg(),Sk(459,` com formas b\xE1sicas (Chrome < 116, Firefox < 122 e Safari < 18), \xE9 exibido um gradiente
girando no centro do bot\xE3o.`),Kg()(),Qc(460,`blockquote`)(461,`p`),Sk(462,`No estilo `),Qc(463,`code`),Sk(464,`glow`),Kg(),Sk(465,`, a anima\xE7\xE3o \xE9 interrompida quando o bot\xE3o est\xE1 desabilitado ou em carregamento,
e tamb\xE9m quando o sistema operacional do usu\xE1rio solicita redu\xE7\xE3o de movimento (`),Qc(466,`code`),Sk(467,`prefers-reduced-motion`),Kg(),Sk(468,`).`),Kg()(),Qc(469,`blockquote`)(470,`p`),Sk(471,`No tema escuro, `),Qc(472,`code`),Sk(473,`--color-glow-ring`),Kg(),Sk(474,` usa `),Qc(475,`code`),Sk(476,`var(--color-neutral-dark-95)`),Kg(),Sk(477,`, para que o brilho
continue claro apesar da invers\xE3o da escala neutra. `),Kg()()(),Qc(478,`div`,9)(479,`h4`,10),Sk(480,`Seletor`),Kg(),Qc(481,`pre`,11),Sk(482,`<po-button
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
`),Kg()(),Qc(483,`h4`,12),Sk(484,`Propriedades`),Kg(),Qc(485,`table`,13)(486,`tr`,14)(487,`th`,15),Sk(488,`Nome`),Kg(),Qc(489,`th`,15),Sk(490,`Tipo`),Kg(),Qc(491,`th`,15),Sk(492,`Padrão`),Kg(),Qc(493,`th`,15),Sk(494,`Descrição`),Kg()(),Qc(495,`tr`,16)(496,`td`,17)(497,`div`,18)(498,`span`,19),Sk(499,` p-aria-label`),vu(500,`br`),Kg()()(),Qc(501,`td`,20)(502,`code`,21),Sk(503,`string`),Kg()(),Qc(504,`td`,22),Sk(505,`-`),Kg(),Qc(506,`td`,23)(507,`em`)(508,`strong`),Sk(509,`(opcional)`),Kg()(),Qc(510,`p`),Sk(511,`Define um `),Qc(512,`code`),Sk(513,`aria-label`),Kg(),Sk(514,` para o `),Qc(515,`code`),Sk(516,`po-button`),Kg(),Sk(517,`.`),Kg(),Qc(518,`p`),Sk(519,`Caso esta propriedade não seja informada será considerada a label do botão.`),Kg(),Qc(520,`blockquote`)(521,`p`),Sk(522,`Em caso de botões com apenas ícone a atribuição de valor à esta propriedade é muito importante para acessibilidade.`),Kg()()()(),Qc(523,`tr`,24)(524,`td`,17)(525,`div`,25)(526,`span`,26),Sk(527,` (p-click)`),vu(528,`br`),Kg()()(),Qc(529,`td`,20)(530,`code`,27),Sk(531,`EventEmitter`),Kg()(),Qc(532,`td`,22),Sk(533,`-`),Kg(),Qc(534,`td`,23)(535,`p`),Sk(536,`Ação que será executada quando o usuário clicar sobre o `),Qc(537,`code`),Sk(538,`po-button`),Kg(),Sk(539,`.`),Kg()()(),Qc(540,`tr`,28)(541,`td`,17)(542,`div`,18)(543,`span`,19),Sk(544,` p-danger`),vu(545,`br`),Kg()()(),Qc(546,`td`,20)(547,`code`,29),Sk(548,`boolean`),Kg()(),Qc(549,`td`,22),Sk(550,`-`),Kg(),Qc(551,`td`,23)(552,`em`)(553,`strong`),Sk(554,`(opcional)`),Kg()(),Qc(555,`p`),Sk(556,`Deve ser usado em ações irreversíveis que o usuário precisa ter cuidado ao executá-la, como a exclusão de um registro.`),Kg(),Qc(557,`blockquote`)(558,`p`),Sk(559,`A propriedade será inativada ao utilizar `),Qc(560,`code`),Sk(561,`p-kind="tertiary"`),Kg(),Sk(562,` ou `),Qc(563,`code`),Sk(564,`p-kind="glow"`),Kg(),Sk(565,`.`),Kg()()()(),Qc(566,`tr`,30)(567,`td`,17)(568,`div`,18)(569,`span`,19),Sk(570,` p-disabled`),vu(571,`br`),Kg()()(),Qc(572,`td`,20)(573,`code`,29),Sk(574,`boolean`),Kg()(),Qc(575,`td`,22)(576,`p`)(577,`code`),Sk(578,`false`),Kg()()(),Qc(579,`td`,23)(580,`em`)(581,`strong`),Sk(582,`(opcional)`),Kg()(),Qc(583,`p`),Sk(584,`Desabilita o `),Qc(585,`code`),Sk(586,`po-button`),Kg(),Sk(587,` e não permite que o usuário interaja com o mesmo.`),Kg()()(),Qc(588,`tr`,31)(589,`td`,17)(590,`div`,18)(591,`span`,19),Sk(592,` p-icon`),vu(593,`br`),Kg()()(),Qc(594,`td`,20)(595,`code`,21),Sk(596,`string `),Kg(),Qc(597,`code`,32),Sk(598,` TemplateRef<void>`),Kg()(),Qc(599,`td`,22),Sk(600,`-`),Kg(),Qc(601,`td`,23)(602,`em`)(603,`strong`),Sk(604,`(opcional)`),Kg()(),Qc(605,`p`),Sk(606,`Ícone exibido ao lado esquerdo do label do botão.`),Kg(),Qc(607,`p`),Sk(608,`É possível usar qualquer um dos ícones da `),Qc(609,`a`,33),Sk(610,`Biblioteca de ícones`),Kg(),Sk(611,`, conforme exemplo:`),Kg(),Qc(612,`pre`)(613,`code`),Sk(614,`<po-button p-icon="an an-user" p-label="PO button"></po-button>
`),Kg()(),Qc(615,`p`),Sk(616,`Também é possível utilizar outras fontes de ícones, por exemplo a biblioteca `),Qc(617,`em`),Sk(618,`Font Awesome`),Kg(),Sk(619,`, desde que a biblioteca
esteja carregada no projeto:`),Kg(),Qc(620,`pre`)(621,`code`),Sk(622,`<po-button p-icon="fa fa-podcast" p-label="PO button"></po-button>
`),Kg()(),Qc(623,`p`),Sk(624,`Outra opção seria a customização do ícone através do `),Qc(625,`code`),Sk(626,`TemplateRef`),Kg(),Sk(627,`, conforme exemplo abaixo:`),Kg(),Qc(628,`pre`)(629,`code`),Sk(630,`<po-button [p-icon]="template" p-label="button template ionic"></po-button>

<ng-template #template>
 <ion-icon style="font-size: inherit" name="heart"></ion-icon>
</ng-template>
`),Kg()(),Qc(631,`blockquote`)(632,`p`),Sk(633,`Para o ícone enquadrar corretamente, deve-se utilizar `),Qc(634,`code`),Sk(635,`font-size: inherit`),Kg(),Sk(636,` caso o ícone utilizado não aplique-o.`),Kg()()()(),Qc(637,`tr`,34)(638,`td`,17)(639,`div`,18)(640,`span`,19),Sk(641,` p-kind`),vu(642,`br`),Kg()()(),Qc(643,`td`,20)(644,`code`,21),Sk(645,`string`),Kg()(),Qc(646,`td`,22)(647,`p`)(648,`code`),Sk(649,`secondary`),Kg()()(),Qc(650,`td`,23)(651,`em`)(652,`strong`),Sk(653,`(opcional)`),Kg()(),Qc(654,`p`),Sk(655,`Define o estilo visual do componente conforme valores especificados no enum `),Qc(656,`code`),Sk(657,`PoButtonKind`),Kg(),Sk(658,`:`),Kg(),Qc(659,`ul`)(660,`li`)(661,`code`),Sk(662,`primary`),Kg(),Sk(663,`: destaca o botão, sendo recomendado para ações principais.`),Kg(),Qc(664,`li`)(665,`code`),Sk(666,`secondary`),Kg(),Sk(667,`: estilo padrão, ideal para ações secundárias.`),Kg(),Qc(668,`li`)(669,`code`),Sk(670,`tertiary`),Kg(),Sk(671,`: exibe o botão sem preenchimento no fundo, indicado para ações opcionais.`),Kg(),Qc(672,`li`)(673,`code`),Sk(674,`glow`),Kg(),Sk(675,`: exibe o bot\xE3o em formato de p\xEDlula com um brilho animado percorrendo a borda, indicado para destacar
uma chamada para a\xE7\xE3o. Deve ser usado com modera\xE7\xE3o, preferencialmente em apenas um bot\xE3o por p\xE1gina.`),Kg()(),Qc(676,`blockquote`)(677,`p`),Sk(678,`O estilo `),Qc(679,`code`),Sk(680,`glow`),Kg(),Sk(681,` é incompatível com a propriedade `),Qc(682,`code`),Sk(683,`p-danger`),Kg(),Sk(684,`.`),Kg()()()(),Qc(685,`tr`,35)(686,`td`,17)(687,`div`,18)(688,`span`,19),Sk(689,` p-label`),vu(690,`br`),Kg()()(),Qc(691,`td`,20)(692,`code`,21),Sk(693,`string`),Kg()(),Qc(694,`td`,22),Sk(695,`-`),Kg(),Qc(696,`td`,23)(697,`em`)(698,`strong`),Sk(699,`(opcional)`),Kg()(),Qc(700,`p`),Sk(701,`Label do botão.`),Kg()()(),Qc(702,`tr`,36)(703,`td`,17)(704,`div`,18)(705,`span`,19),Sk(706,` p-loading`),vu(707,`br`),Kg()()(),Qc(708,`td`,20)(709,`code`,29),Sk(710,`boolean`),Kg()(),Qc(711,`td`,22)(712,`p`)(713,`code`),Sk(714,`false`),Kg()()(),Qc(715,`td`,23)(716,`em`)(717,`strong`),Sk(718,`(opcional)`),Kg()(),Qc(719,`p`),Sk(720,`Exibe um ícone de carregamento à esquerda do `),Qc(721,`em`),Sk(722,`label`),Kg(),Sk(723,` do botão.`),Kg(),Qc(724,`blockquote`)(725,`p`),Sk(726,`Quando esta propriedade estiver habilitada, desabilitará o botão.`),Kg()()()(),Qc(727,`tr`,37)(728,`td`,17)(729,`div`,18)(730,`span`,19),Sk(731,` p-size`),vu(732,`br`),Kg()()(),Qc(733,`td`,20)(734,`code`,21),Sk(735,`string`),Kg()(),Qc(736,`td`,22)(737,`p`)(738,`code`),Sk(739,`medium`),Kg()()(),Qc(740,`td`,23)(741,`em`)(742,`strong`),Sk(743,`(opcional)`),Kg()(),Qc(744,`p`),Sk(745,`Define o tamanho do componente:`),Kg(),Qc(746,`ul`)(747,`li`)(748,`code`),Sk(749,`small`),Kg(),Sk(750,`: altura de 32px (disponível apenas para acessibilidade AA).`),Kg(),Qc(751,`li`)(752,`code`),Sk(753,`medium`),Kg(),Sk(754,`: altura de 44px.`),Kg(),Qc(755,`li`)(756,`code`),Sk(757,`large`),Kg(),Sk(758,`: altura de 56px.`),Kg()(),Qc(759,`blockquote`)(760,`p`),Sk(761,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Qc(762,`code`),Sk(763,`medium`),Kg(),Sk(764,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Qc(765,`a`,38),Sk(766,`po-theme`),Kg(),Sk(767,`.`),Kg()()()(),Qc(768,`tr`,39)(769,`td`,17)(770,`div`,18)(771,`span`,19),Sk(772,` p-tabindex`),vu(773,`br`),Kg()()(),Qc(774,`td`,20)(775,`code`,40),Sk(776,`number `),Kg(),Qc(777,`code`,21),Sk(778,` string`),Kg()(),Qc(779,`td`,22),Sk(780,`-`),Kg(),Qc(781,`td`,23)(782,`em`)(783,`strong`),Sk(784,`(opcional)`),Kg()(),Qc(785,`p`),Sk(786,`Define o `),Qc(787,`code`),Sk(788,`tabindex`),Kg(),Sk(789,` do elemento `),Qc(790,`code`),Sk(791,`<button>`),Kg(),Sk(792,` nativo interno.`),Kg(),Qc(793,`p`),Sk(794,`Use `),Qc(795,`code`),Sk(796,`[tabindex]="-1"`),Kg(),Sk(797,` para remover o botão da ordem de foco do teclado.`),Kg()()(),Qc(798,`tr`,41)(799,`td`,17)(800,`div`,18)(801,`span`,19),Sk(802,` p-type`),vu(803,`br`),Kg()()(),Qc(804,`td`,20)(805,`code`,42),Sk(806,`PoButtonType`),Kg()(),Qc(807,`td`,22)(808,`p`)(809,`code`),Sk(810,`PoButtonType.Button`),Kg()()(),Qc(811,`td`,23)(812,`em`)(813,`strong`),Sk(814,`(opcional)`),Kg()(),Qc(815,`p`),Sk(816,`Define o tipo do botão.`),Kg()()()(),Qc(817,`h3`,12),Sk(818,`Métodos`),Kg(),Qc(819,`table`,43)(820,`tr`,44)(821,`th`,45)(822,`div`,18)(823,`h4`)(824,`span`,19),Sk(825,` focus `),Kg()()()()(),Qc(826,`tr`,23)(827,`td`,23)(828,`p`),Sk(829,`Função que atribui foco ao componente.`),Kg(),Qc(830,`p`),Sk(831,`Para utilizá-la é necessário ter a instância do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:`),Kg(),Qc(832,`pre`)(833,`code`),Sk(834,`import { PoButtonComponent } from '@po-ui/ng-components';

...

@ViewChild(PoButtonComponent, { static: true }) button: PoButtonComponent;

focusButton() {
  this.button.focus();
}
`),Kg()()()()(),vu(835,`br`),Qc(836,`h3`),Sk(837,`Enums`),Kg(),Qc(838,`h4`,46)(839,`code`,5),Sk(840,`PoButtonKind`),Kg()(),Qc(841,`div`,2)(842,`p`),Sk(843,`Estilos disponíveis do button.`),Kg()(),Qc(844,`h4`,12),Sk(845,`Propriedades`),Kg(),Qc(846,`table`,13)(847,`tr`,14)(848,`th`,15),Sk(849,`Nome`),Kg(),Qc(850,`th`,15),Sk(851,`Descrição`),Kg()(),Qc(852,`tr`,47)(853,`td`,17)(854,`div`,18)(855,`span`,19),Sk(856,` primary`),vu(857,`br`),Kg()()(),Qc(858,`td`,23)(859,`p`),Sk(860,`Estilo primário, usado para ações principais que requerem maior destaque.`),Kg()()(),Qc(861,`tr`,48)(862,`td`,17)(863,`div`,18)(864,`span`,19),Sk(865,` secondary`),vu(866,`br`),Kg()()(),Qc(867,`td`,23)(868,`p`),Sk(869,`Estilo secundário, usado como padrão, para ações comuns.`),Kg()()(),Qc(870,`tr`,49)(871,`td`,17)(872,`div`,18)(873,`span`,19),Sk(874,` tertiary`),vu(875,`br`),Kg()()(),Qc(876,`td`,23)(877,`p`),Sk(878,`Estilo terciário, ideal para ações menos importantes, sem fundo preenchido.`),Kg()()(),Qc(879,`tr`,50)(880,`td`,17)(881,`div`,18)(882,`span`,19),Sk(883,` glow`),vu(884,`br`),Kg()()(),Qc(885,`td`,23)(886,`p`),Sk(887,`Estilo com brilho animado que percorre a borda do botão, usado para destacar uma chamada para ação.`),Kg(),Qc(888,`blockquote`)(889,`p`),Sk(890,`Incompatível com a propriedade `),Qc(891,`code`),Sk(892,`p-danger`),Kg(),Sk(893,`.`),Kg()()()()(),Qc(894,`h4`,51)(895,`code`,5),Sk(896,`PoButtonType`),Kg()(),Qc(897,`div`,2)(898,`p`),Sk(899,`Enumeração que define os tipos possíveis para o `),Qc(900,`code`),Sk(901,`PoButtonComponent`),Kg(),Sk(902,`. Estes tipos est\xE3o relacionados ao comportamento
do bot\xE3o quando utilizado dentro de um formul\xE1rio HTML.`),Kg()(),Qc(903,`h4`,12),Sk(904,`Propriedades`),Kg(),Qc(905,`table`,13)(906,`tr`,14)(907,`th`,15),Sk(908,`Nome`),Kg(),Qc(909,`th`,15),Sk(910,`Descrição`),Kg()(),Qc(911,`tr`,52)(912,`td`,17)(913,`div`,18)(914,`span`,19),Sk(915,` Submit`),vu(916,`br`),Kg()()(),Qc(917,`td`,23)(918,`p`),Sk(919,`Define o botão como do tipo `),Qc(920,`code`),Sk(921,`submit`),Kg(),Sk(922,`. Quando clicado, o formul\xE1rio \xE9 enviado automaticamente,
disparando o evento `),Qc(923,`code`),Sk(924,`submit`),Kg(),Sk(925,`.`),Kg()()(),Qc(926,`tr`,53)(927,`td`,17)(928,`div`,18)(929,`span`,19),Sk(930,` Button`),vu(931,`br`),Kg()()(),Qc(932,`td`,23)(933,`p`),Sk(934,`Define o botão como do tipo `),Qc(935,`code`),Sk(936,`button`),Kg(),Sk(937,`. Este tipo de bot\xE3o n\xE3o possui comportamento padr\xE3o associado
e \xE9 utilizado principalmente para a\xE7\xF5es program\xE1ticas como cliques e disparos de eventos customizados.`),Kg()()(),Qc(938,`tr`,54)(939,`td`,17)(940,`div`,18)(941,`span`,19),Sk(942,` Reset`),vu(943,`br`),Kg()()(),Qc(944,`td`,23)(945,`p`),Sk(946,`Define o botão como do tipo `),Qc(947,`code`),Sk(948,`reset`),Kg(),Sk(949,`. Quando clicado, redefine os campos do formul\xE1rio ao qual pertence
para seus valores iniciais.`),Kg()()()()())},dependencies:[P],encapsulation:2,changeDetection:1})}return o})();function Pe(o,G){if(o&1&&(Qc(0,`div`,1),vu(1,`sample-po-button-basic-view`)(2,`sample-po-button-labs-view`)(3,`sample-po-button-social-network-view`),Kg()),o&2){let r=ek();Rb(`hidden`,r.activeTab!==`web`)}}var De=[{path:``,component:(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;title=`Button`;actions=[];toWeb={label:`Ver exemplos`,icon:`an an-browsers`,action:()=>this.changeTab(`web`)};toDoc={label:`Ver documentação`,icon:`an an-file-text`,action:()=>this.changeTab(`doc`)};back={label:`Voltar`,icon:`an an-arrow-left`,action:this.goBack.bind(this)};constructor(r,i){this.route=r,this.router=i}goBack(){this.router.navigate([`documentation`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let i=r.view;this.hidePoWebSample=this.samplesLength===0,this.activeTab=this.hidePoWebSample?`doc`:i||`web`,this.title=`Button · `+(this.activeTab===`web`?`Exemplos`:`Documentação`),this.actions=this.hidePoWebSample?[this.back]:[this.activeTab===`web`?this.toDoc:this.toWeb,this.back]})}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:`merge`})}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(i){return new(i||o)(I(ar),I(An))};static ɵcmp=Jn({type:o,selectors:[[`ng-component`]],standalone:!1,decls:4,vars:4,consts:[[3,`p-title`,`p-actions`],[3,`hidden`]],template:function(i,a){i&1&&(Qc(0,`po-page-default`,0),FO(1,Pe,4,1,`div`,1),Qc(2,`div`,1),vu(3,`sample-po-button-doc`),Kg()()),i&2&&(Rb(`p-title`,a.title)(`p-actions`,a.actions),wg(),VO(a.hidePoWebSample?-1:1),wg(),Rb(`hidden`,a.activeTab!==`doc`))},dependencies:[Mze,pe,me,ue,be],encapsulation:2,changeDetection:1})}return o})()}];var ge=(()=>{class o{static ɵfac=function(i){return new(i||o)};static ɵmod=ge$1({type:o});static ɵinj=de$1({imports:[GV.forChild(De),GV]})}return o})();var mt=(()=>{class o{static ɵfac=function(i){return new(i||o)};static ɵmod=ge$1({type:o});static ɵinj=de$1({imports:[M,ge]})}return o})();export{mt as DocPoButtonModule};