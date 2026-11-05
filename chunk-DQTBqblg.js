import{n as s,t as r}from"./chunk-zystk1pz.js";import{$i as h,Cn as oi,Da as pe$1,Fa as rg,Fi as ab,Ga as vx,H as Lf,Ha as v_,Ia as sb,Ii as b,La as uO,Ln as w4,Mr as I1,Na as r0,On as r4,Pt as a4,Qr as RK,Ra as ue$1,Sa as o0,Si as Xx,T as Gte,Xt as ere,Ya as wg,Za as xF,Zt as fae,ai as Sn,b as Fu,cn as iie,dr as DO,gr as Dx,ht as U4,ia as ir,ji as __,ki as Zn,ma as lO,mt as Tze,ni as SF,nr as Ag,qr as Ok,ri as SK,rr as Ax,rt as Qae,sa as jc,ui as UE,va as mt,wr as Fx,xa as nu,zr as MK}from"./chunk-VuVfKKNQ.js";import{n as P,t as M}from"./main-CK5CTZT7.js";var me=(()=>{class o{onClick(){alert(`Po Button!`)}static ɵfac=function(a){return new(a||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-button-basic`]],standalone:!1,decls:1,vars:0,consts:[[`p-label`,`PO Button`,3,`p-click`]],template:function(a,i){a&1&&(jc(0,`po-button`,0),mt(`p-click`,function(){return i.onClick()}),wg())},dependencies:[oi],encapsulation:2,changeDetection:1})}return o})();var ve=o=>({"docs-sample-code-tabs":o});var pe=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-button-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,i){a&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),lO(3,`PO Button Basic`),wg(),jc(4,`a`,2),mt(`click`,function(){return i.toggleSampleCodeTabs()}),nu(5,`span`),lO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),lO(12,`sample-po-button-basic/sample-po-button-basic.component.html`),wg(),jc(13,`pre`,7),lO(14,`<po-button p-label="PO Button" (p-click)="onClick()"> </po-button>
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),lO(18,`sample-po-button-basic/sample-po-button-basic.component.ts`),wg(),jc(19,`pre`,9),lO(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-button-basic`),wg(),nu(23,`hr`)),a&2&&(rg(5),Xx(`po-icon `+i.sampleCodeButtonIcon),rg(),Ag(` `,i.sampleCodeButtonLabel),rg(),UE(`ngClass`,DO(4,ve,i.hideSampleCodeTabs)))},dependencies:[Ok,P,Qae,ere,me],encapsulation:2,changeDetection:1})}return o})();var ce=(()=>{class o{poDialog=h(iie);label;kind;icon;size;properties;type;propertiesOptions=[{value:`disabled`,label:`Disabled`},{value:`loading`,label:`Loading`},{value:`danger`,label:`Danger`}];iconsOptions=[{label:`an an-newspaper`,value:`an an-newspaper`},{label:`an an-calendar-dots`,value:`an an-calendar-dots`},{label:`an an-user`,value:`an an-user`},{label:`fa fa-podcast`,value:`fa fa-podcast`}];kindsOptions=[{label:`primary`,value:`primary`},{label:`secondary`,value:`secondary`},{label:`tertiary`,value:`tertiary`},{label:`glow`,value:`glow`}];kindsWithoutDanger=[`tertiary`,`glow`];sizesOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`},{label:`large`,value:`large`}];typeOptions=[{label:`button`,value:r4.Button},{label:`submit`,value:r4.Submit},{label:`reset`,value:r4.Reset}];ngOnInit(){this.restore()}buttonClick(){this.poDialog.alert({title:`PO Button`,message:`Hello PO World!!!`})}propertiesChange(r$1){let a=!!r$1&&this.properties.includes(`danger`);this.setKindsWithoutDangerDisabled(a),this.sizesOptions[0]=s(r({},this.sizesOptions[0]),{disabled:!1}),this.sizesOptions[1]=s(r({},this.sizesOptions[1]),{disabled:!1})}verifyDisabled(r){let a=[...this.propertiesOptions];this.kindsWithoutDanger.includes(r)?(a[2]={value:`danger`,label:`Danger`,disabled:!0},this.propertiesOptions=a):(a[2]={value:`danger`,label:`Danger`,disabled:!1},this.propertiesOptions=a)}restore(){this.label=void 0,this.kind=`secondary`,this.size=`medium`,this.icon=void 0,this.type=r4.Button,this.properties=[],this.setKindsWithoutDangerDisabled(!1),this.sizesOptions[0]=s(r({},this.sizesOptions[0]),{disabled:!1}),this.sizesOptions[1]=s(r({},this.sizesOptions[1]),{disabled:!1})}setKindsWithoutDangerDisabled(r$2){this.kindsOptions=this.kindsOptions.map(a=>this.kindsWithoutDanger.includes(a.value)?s(r({},a),{disabled:r$2}):a)}static ɵfac=function(a){return new(a||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-button-labs`]],standalone:!1,decls:14,vars:19,consts:[[`f`,`ngForm`],[1,`po-row`],[1,`po-sm-12`,3,`p-click`,`p-disabled`,`p-icon`,`p-label`,`p-loading`,`p-size`,`p-danger`,`p-kind`,`p-type`],[`name`,`label`,`p-clean`,``,`p-label`,`Label`,1,`po-lg-6`,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`properties`,`p-columns`,`4`,`p-label`,`Properties`,1,`po-lg-12`,3,`ngModelChange`,`p-change`,`ngModel`,`p-options`],[`name`,`icon`,`p-columns`,`4`,`p-label`,`Icon`,1,`po-lg-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`kind`,`p-columns`,`4`,`p-label`,`Kind`,1,`po-lg-12`,3,`ngModelChange`,`p-change`,`ngModel`,`p-options`],[`name`,`type`,`p-columns`,`4`,`p-label`,`Type`,1,`po-lg-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`size`,`p-columns`,`4`,`p-label`,`Size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-lg-12`,3,`ngModelChange`,`p-change`,`ngModel`,`p-options`],[`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`]],template:function(a,i){if(a&1){let b=Ax();jc(0,`div`,1)(1,`po-button`,2),mt(`p-click`,function(){return i.buttonClick()}),wg()(),nu(2,`po-divider`),jc(3,`form`,null,0)(5,`div`,1)(6,`po-input`,3),r0(),ab(`ngModelChange`,function(d){return v_(b),uO(i.label,d)||(i.label=d),__(d)}),wg()(),jc(7,`po-checkbox-group`,4),r0(),ab(`ngModelChange`,function(d){return v_(b),uO(i.properties,d)||(i.properties=d),__(d)}),mt(`p-change`,function(d){return i.propertiesChange(d)}),wg(),jc(8,`po-radio-group`,5),r0(),ab(`ngModelChange`,function(d){return v_(b),uO(i.icon,d)||(i.icon=d),__(d)}),wg(),jc(9,`po-radio-group`,6),r0(),ab(`ngModelChange`,function(d){return v_(b),uO(i.kind,d)||(i.kind=d),__(d)}),mt(`p-change`,function(d){return i.verifyDisabled(d)}),wg(),jc(10,`po-radio-group`,7),r0(),ab(`ngModelChange`,function(d){return v_(b),uO(i.type,d)||(i.type=d),__(d)}),wg(),jc(11,`po-radio-group`,8),r0(),ab(`ngModelChange`,function(d){return v_(b),uO(i.size,d)||(i.size=d),__(d)}),mt(`p-change`,function(d){return i.verifyDisabled(d)}),wg(),jc(12,`div`,1)(13,`po-button`,9),mt(`p-click`,function(){return i.restore()}),wg()()()}a&2&&(rg(),UE(`p-disabled`,i.properties.includes(`disabled`))(`p-icon`,i.icon)(`p-label`,i.label)(`p-loading`,i.properties.includes(`loading`))(`p-size`,i.size)(`p-danger`,i.properties.includes(`danger`))(`p-kind`,i.kind)(`p-type`,i.type),rg(5),sb(`ngModel`,i.label),o0(),rg(),sb(`ngModel`,i.properties),UE(`p-options`,i.propertiesOptions),o0(),rg(),sb(`ngModel`,i.icon),UE(`p-options`,i.iconsOptions),o0(),rg(),sb(`ngModel`,i.kind),UE(`p-options`,i.kindsOptions),o0(),rg(),sb(`ngModel`,i.type),UE(`p-options`,i.typeOptions),o0(),rg(),sb(`ngModel`,i.size),UE(`p-options`,i.sizesOptions),o0())},dependencies:[RK,SK,MK,xF,SF,oi,Lf,w4,U4,Gte],encapsulation:2,changeDetection:1})}return o})();var we=o=>({"docs-sample-code-tabs":o});var ue=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-button-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,i){a&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),lO(3,`PO Button Labs`),wg(),jc(4,`a`,2),mt(`click`,function(){return i.toggleSampleCodeTabs()}),nu(5,`span`),lO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),lO(12,`sample-po-button-labs/sample-po-button-labs.component.html`),wg(),jc(13,`pre`,7),lO(14,`<div class="po-row">
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
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),lO(18,`sample-po-button-labs/sample-po-button-labs.component.ts`),wg(),jc(19,`pre`,9),lO(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-button-labs`),wg(),nu(23,`hr`)),a&2&&(rg(5),Xx(`po-icon `+i.sampleCodeButtonIcon),rg(),Ag(` `,i.sampleCodeButtonLabel),rg(),UE(`ngClass`,DO(4,we,i.hideSampleCodeTabs)))},dependencies:[Ok,P,Qae,ere,ce],encapsulation:2,changeDetection:1})}return o})();function ke(o,G){if(o&1){let r=Ax();jc(0,`div`,0),nu(1,`po-avatar`,2),jc(2,`div`,3)(3,`span`,4),lO(4),wg(),jc(5,`span`,5),lO(6),wg(),jc(7,`span`,5),lO(8),wg()()(),jc(9,`div`,0)(10,`po-button`,6),mt(`p-click`,function(){v_(r);let i=Fx();return __(i.notification(`added`,`success`))}),wg(),jc(11,`po-button`,7),mt(`p-click`,function(){v_(r);let i=Fx();return __(i.notification(`ignored`,`warning`))}),wg(),jc(12,`po-button`,8),mt(`p-click`,function(){v_(r);let i=Fx();return __(i.notification(`blocked`,`information`))}),wg()()}if(o&2){let r=Fx();rg(),UE(`p-src`,r.userAvatar),rg(3),Ag(` `,r.currentFriend.name,` `),rg(2),Ag(` `,r.currentFriend.mutualFriends,` mutual friends `),rg(2),Ag(` Resides in `,r.currentFriend.reside,` `)}}function Pe(o,G){o&1&&(jc(0,`div`,0)(1,`span`,9),lO(2,`Congratulations TOTVS, no more requests!`),wg()())}var Ee=(()=>{class o{poNotification=h(Fu);currentFriend;userAvatar=`https://lorempixel.com/144/144/`;newFriends=[{name:`Mr. Dev PO`,mutualFriends:`7`,reside:`Mountain View, CA`},{name:`Mr. AI PO`,mutualFriends:`99+`,reside:`New York City, NY`},{name:`Mr. UX PO`,mutualFriends:`14`,reside:`Los Angeles, CA`}];indexFriend=0;ngOnInit(){this.setCurrentFriend(0)}notification(r,a){this.poNotification[a](`User ${r} successfully!`),this.indexFriend++,this.setCurrentFriend(this.indexFriend)}setCurrentFriend(r){this.currentFriend=this.newFriends[r]}static ɵfac=function(a){return new(a||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-button-social-network`]],standalone:!1,decls:4,vars:1,consts:[[1,`po-row`],[`p-title`,`Friend Request`,1,`po-lg-6`],[`p-size`,`lg`,1,`po-md-4`,3,`p-src`],[1,`po-md-8`],[1,`po-sm-12`,`po-font-subtitle`],[1,`po-sm-12`,`po-font-text`],[`p-icon`,`fa fa-check-circle`,`p-label`,`Confirm`,1,`po-md-4`,3,`p-click`],[`p-icon`,`fa fa-eye-slash`,`p-label`,`Ignore`,1,`po-md-4`,3,`p-click`],[`p-icon`,`fa fa-ban`,`p-label`,`Block`,1,`po-md-4`,3,`p-click`],[1,`po-lg-8`,`po-font-subtitle`]],template:function(a,i){a&1&&(jc(0,`div`,0)(1,`po-widget`,1),vx(2,ke,13,4)(3,Pe,3,0,`div`,0),wg()()),a&2&&(rg(2),Dx(i.currentFriend?2:3))},dependencies:[a4,oi,fae],encapsulation:2,changeDetection:1})}return o})();var De=o=>({"docs-sample-code-tabs":o});var be=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-button-social-network-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,i){a&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),lO(3,`PO Button Social Network`),wg(),jc(4,`a`,2),mt(`click`,function(){return i.toggleSampleCodeTabs()}),nu(5,`span`),lO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),lO(12,`sample-po-button-social-network/sample-po-button-social-network.component.html`),wg(),jc(13,`pre`,7),lO(14,`<div class="po-row">
  <po-widget class="po-lg-6" p-title="Friend Request">
    @if (currentFriend) {
      <div class="po-row">
        <po-avatar class="po-md-4" p-size="lg" [p-src]="userAvatar"> </po-avatar>
        <div class="po-md-8">
          <span class="po-sm-12 po-font-subtitle">
            { { currentFriend.name }}
          </span>
          <span class="po-sm-12 po-font-text"> { { currentFriend.mutualFriends }} mutual friends </span>
          <span class="po-sm-12 po-font-text"> Resides in { { currentFriend.reside }} </span>
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
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),lO(18,`sample-po-button-social-network/sample-po-button-social-network.component.ts`),wg(),jc(19,`pre`,9),lO(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-button-social-network`),wg(),nu(23,`hr`)),a&2&&(rg(5),Xx(`po-icon `+i.sampleCodeButtonIcon),rg(),Ag(` `,i.sampleCodeButtonLabel),rg(),UE(`ngClass`,DO(4,De,i.hideSampleCodeTabs)))},dependencies:[Ok,P,Qae,ere,Ee],encapsulation:2,changeDetection:1})}return o})();var Se=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-button-doc`]],standalone:!1,decls:1106,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://www.w3.org/WAI/ARIA/apg/#keyboard-interaction-3`],[`href`,`https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance-enhanced`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`string`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`pan`,``,1,`docs-api-property-type`,`TemplateRef<void>`],[`href`,`https://po-ui.io/icons`],[`href`,`https://po-ui.io/documentation/po-theme`],[`pan`,``,1,`docs-api-property-type`,`number`],[`pan`,``,1,`docs-api-property-type`,`PoButtonType`],[1,`docs-api-method-table`],[`colspan`,`2`,1,`docs-api-properties-name-cell`]],template:function(a,i){a&1&&(jc(0,`div`,0)(1,`p`,1)(2,`code`),lO(3,`import { PoButtonModule } from '@po-ui/ng-components';`),wg()(),jc(4,`div`,2)(5,`p`),lO(6,`Módulo do componente po-button.`),wg()(),jc(7,`h3`,3),lO(8,`Componente`),wg(),jc(9,`h4`,4)(10,`code`,5),lO(11,`PoButtonComponent`),wg()(),jc(12,`div`,2)(13,`p`),lO(14,`O `),jc(15,`code`),lO(16,`po-button`),wg(),lO(17,` permite que o usuário execute ações predefinidas pelo desenvolvedor.`),wg(),jc(18,`p`),lO(19,`Através dos tipos, é possível identificar a importância de cada ação.`),wg(),jc(20,`h4`),lO(21,`Boas práticas`),wg(),jc(22,`ul`)(23,`li`),lO(24,`Evite `),jc(25,`code`),lO(26,`labels`),wg(),lO(27,` extensos que quebram o layout do `),jc(28,`code`),lO(29,`po-button`),wg(),lO(30,`, use `),jc(31,`code`),lO(32,`labels`),wg(),lO(33,` diretos, curtos e intuitivos.`),wg(),jc(34,`li`),lO(35,`Utilize apenas um `),jc(36,`code`),lO(37,`po-button`),wg(),lO(38,` configurado como `),jc(39,`code`),lO(40,`primary`),wg(),lO(41,` por página.`),wg(),jc(42,`li`),lO(43,`Para ações irreversíveis use sempre a propriedade `),jc(44,`code`),lO(45,`p-danger`),wg(),lO(46,`.`),wg()(),jc(47,`h4`),lO(48,`Acessibilidade tratada no componente`),wg(),jc(49,`p`),lO(50,`Algumas diretrizes de acessibilidade já são tratadas no componente, internamente, e não podem ser alteradas pelo proprietário do conteúdo. São elas:`),wg(),jc(51,`ul`)(52,`li`),lO(53,`Quando em foco, o botão é ativado usando as teclas de Espaço e Enter do teclado. `),jc(54,`a`,6),lO(55,`W3C WAI-ARIA 3.5 Button - Keyboard Interaction`),wg()(),jc(56,`li`),lO(57,`A área do foco precisar ter uma espessura de pelo menos 2 pixels CSS e o foco não pode ficar escondido por outros elementos da tela. `),jc(58,`a`,7),lO(59,`WCAG 2.4.12: Focus Appearance`),wg()()(),jc(60,`h4`),lO(61,`Tokens customizáveis`),wg(),jc(62,`p`),lO(63,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),wg(),jc(64,`blockquote`)(65,`p`),lO(66,`Para maiores informações, acesse o guia `),jc(67,`a`,8),lO(68,`Personalizando o Tema Padrão com Tokens CSS`),wg(),lO(69,`.`),wg()(),jc(70,`table`)(71,`thead`)(72,`tr`)(73,`th`),lO(74,`Propriedade`),wg(),jc(75,`th`),lO(76,`Descrição`),wg(),jc(77,`th`),lO(78,`Valor Padrão`),wg()()(),jc(79,`tbody`)(80,`tr`)(81,`td`)(82,`code`),lO(83,`--font-family`),wg()(),jc(84,`td`),lO(85,`Família tipográfica usada`),wg(),jc(86,`td`)(87,`code`),lO(88,`var(--font-family-theme)`),wg()()(),jc(89,`tr`)(90,`td`)(91,`code`),lO(92,`--font-size`),wg()(),jc(93,`td`),lO(94,`Tamanho da fonte`),wg(),jc(95,`td`)(96,`code`),lO(97,`var(--font-size-default)`),wg()()(),jc(98,`tr`)(99,`td`)(100,`code`),lO(101,`--font-weight`),wg()(),jc(102,`td`),lO(103,`Peso da fonte`),wg(),jc(104,`td`)(105,`code`),lO(106,`var(--font-weight-bold)`),wg()()(),jc(107,`tr`)(108,`td`)(109,`code`),lO(110,`--line-height`),wg()(),jc(111,`td`),lO(112,`Tamanho da label`),wg(),jc(113,`td`)(114,`code`),lO(115,`var(--line-height-none)`),wg()()(),jc(116,`tr`)(117,`td`)(118,`code`),lO(119,`--border-radius`),wg()(),jc(120,`td`),lO(121,`Contém o valor do raio dos cantos do elemento\xA0`),wg(),jc(122,`td`)(123,`code`),lO(124,`var(--border-radius-md)`),wg()()(),jc(125,`tr`)(126,`td`)(127,`code`),lO(128,`--border-width`),wg()(),jc(129,`td`),lO(130,`Contém o valor da largura dos cantos do elemento\xA0`),wg(),jc(131,`td`)(132,`code`),lO(133,`var(--border-width-md)`),wg()()(),jc(134,`tr`)(135,`td`)(136,`code`),lO(137,`--padding`),wg()(),jc(138,`td`),lO(139,`Preenchimento`),wg(),jc(140,`td`)(141,`code`),lO(142,`0 1em`),wg()()(),jc(143,`tr`)(144,`td`)(145,`strong`),lO(146,`Danger`),wg()(),nu(147,`td`)(148,`td`),wg(),jc(149,`tr`)(150,`td`)(151,`code`),lO(152,`--text-color-danger`),wg()(),jc(153,`td`),lO(154,`Cor do texto no estado danger`),wg(),jc(155,`td`)(156,`code`),lO(157,`var(--color-neutral-light-00)`),wg()()(),jc(158,`tr`)(159,`td`)(160,`code`),lO(161,`--color-button-danger`),wg()(),jc(162,`td`),lO(163,`Cor do botão no estado danger`),wg(),jc(164,`td`)(165,`code`),lO(166,`var(--color-feedback-negative-dark)`),wg()()(),jc(167,`tr`)(168,`td`)(169,`code`),lO(170,`--color-danger-hover`),wg()(),jc(171,`td`),lO(172,`Cor de hover no estado danger`),wg(),jc(173,`td`)(174,`code`),lO(175,`var(--color-feedback-negative-darker)`),wg()()(),jc(176,`tr`)(177,`td`)(178,`code`),lO(179,`--color-danger-pressed`),wg()(),jc(180,`td`),lO(181,`Cor pressionada no estado danger`),wg(),jc(182,`td`)(183,`code`),lO(184,`var(--color-feedback-negative-darkest)`),wg()()(),jc(185,`tr`)(186,`td`)(187,`code`),lO(188,`--background-danger-hover`),wg()(),jc(189,`td`),lO(190,`Cor de background de hover no estado danger`),wg(),jc(191,`td`)(192,`code`),lO(193,`var(--color-feedback-negative-lighter)`),wg()()(),jc(194,`tr`)(195,`td`)(196,`code`),lO(197,`--border-color-danger-hover`),wg()(),jc(198,`td`),lO(199,`Cor da borda de hover no estado danger`),wg(),jc(200,`td`)(201,`code`),lO(202,`var(--color-feedback-negative-darkest)`),wg()()(),jc(203,`tr`)(204,`td`)(205,`code`),lO(206,`--background-danger-pressed`),wg()(),jc(207,`td`),lO(208,`Cor de background pressionado no estado danger`),wg(),jc(209,`td`)(210,`code`),lO(211,`var(--color-feedback-negative-light)`),wg()()(),jc(212,`tr`)(213,`td`)(214,`code`),lO(215,`--background-color-button-danger`),wg(),lO(216,`\xA0`),wg(),jc(217,`td`),lO(218,`Cor de background do botão no estado danger`),wg(),jc(219,`td`)(220,`code`),lO(221,`var(--color-transparent)`),wg()()(),jc(222,`tr`)(223,`td`)(224,`strong`),lO(225,`Default Values`),wg()(),nu(226,`td`)(227,`td`),wg(),jc(228,`tr`)(229,`td`)(230,`code`),lO(231,`--text-color`),wg()(),jc(232,`td`),lO(233,`Cor do texto`),wg(),jc(234,`td`)(235,`code`),lO(236,`var(--color-neutral-light-00)`),wg()()(),jc(237,`tr`)(238,`td`)(239,`code`),lO(240,`--color`),wg()(),jc(241,`td`),lO(242,`Cor principal do botão`),wg(),jc(243,`td`)(244,`code`),lO(245,`var(--color-action-default)`),wg()()(),jc(246,`tr`)(247,`td`)(248,`code`),lO(249,`--background-color`),wg()(),jc(250,`td`),lO(251,`Cor de background`),wg(),jc(252,`td`)(253,`code`),lO(254,`var(--color-transparent)`),wg()()(),jc(255,`tr`)(256,`td`)(257,`code`),lO(258,`--border-color`),wg()(),jc(259,`td`),lO(260,`Cor da borda`),wg(),jc(261,`td`)(262,`code`),lO(263,`var(--color-transparent)`),wg()()(),jc(264,`tr`)(265,`td`)(266,`code`),lO(267,`--shadow`),wg()(),jc(268,`td`),lO(269,`Contém o valor da sombra do elemento`),wg(),jc(270,`td`)(271,`code`),lO(272,`var(--shadow-none)`),wg()()(),jc(273,`tr`)(274,`td`)(275,`strong`),lO(276,`Hover`),wg()(),nu(277,`td`)(278,`td`),wg(),jc(279,`tr`)(280,`td`)(281,`code`),lO(282,`--color-hover`),wg()(),jc(283,`td`),lO(284,`Cor principal no estado hover`),wg(),jc(285,`td`)(286,`code`),lO(287,`var(--color-action-hover)`),wg()()(),jc(288,`tr`)(289,`td`)(290,`code`),lO(291,`--background-hover`),wg()(),jc(292,`td`),lO(293,`Cor de background no estado hover`),wg(),jc(294,`td`)(295,`code`),lO(296,`var(--color-brand-01-lighter)`),wg()()(),jc(297,`tr`)(298,`td`)(299,`code`),lO(300,`--border-color-hover`),wg()(),jc(301,`td`),lO(302,`Cor da borda no estado hover`),wg(),jc(303,`td`)(304,`code`),lO(305,`var(--color-brand-01-darkest)`),wg()()(),jc(306,`tr`)(307,`td`)(308,`strong`),lO(309,`Focused`),wg()(),nu(310,`td`)(311,`td`),wg(),jc(312,`tr`)(313,`td`)(314,`code`),lO(315,`--outline-color-focused`),wg()(),jc(316,`td`),lO(317,`Cor do outline do estado de focus`),wg(),jc(318,`td`)(319,`code`),lO(320,`var(--color-action-focus)`),wg()()(),jc(321,`tr`)(322,`td`)(323,`strong`),lO(324,`Pressed`),wg()(),nu(325,`td`)(326,`td`),wg(),jc(327,`tr`)(328,`td`)(329,`code`),lO(330,`--color-pressed`),wg()(),jc(331,`td`),lO(332,`Cor principal no estado de pressionado`),wg(),jc(333,`td`)(334,`code`),lO(335,`var(--color-action-pressed)`),wg()()(),jc(336,`tr`)(337,`td`)(338,`code`),lO(339,`--background-pressed`),wg()(),jc(340,`td`),lO(341,`Cor de background no estado de pressionado\xA0`),wg(),jc(342,`td`)(343,`code`),lO(344,`var(--color-brand-01-light)`),wg()()(),jc(345,`tr`)(346,`td`)(347,`strong`),lO(348,`Disabled`),wg()(),nu(349,`td`)(350,`td`),wg(),jc(351,`tr`)(352,`td`)(353,`code`),lO(354,`--text-color-disabled`),wg()(),jc(355,`td`),lO(356,`Cor do texto no estado disabled`),wg(),jc(357,`td`)(358,`code`),lO(359,`var(--color-neutral-dark-70)`),wg()()(),jc(360,`tr`)(361,`td`)(362,`code`),lO(363,`--color-disabled`),wg()(),jc(364,`td`),lO(365,`Cor principal no estado disabled`),wg(),jc(366,`td`)(367,`code`),lO(368,`var(--color-action-disabled)`),wg()()(),jc(369,`tr`)(370,`td`)(371,`code`),lO(372,`--background-color-disabled`),wg()(),jc(373,`td`),lO(374,`Cor de background no estado disabled`),wg(),jc(375,`td`)(376,`code`),lO(377,`var(--color-transparent)`),wg()()(),jc(378,`tr`)(379,`td`)(380,`strong`),lO(381,`Glow`),wg(),lO(382,` (`),jc(383,`code`),lO(384,`p-kind="glow"`),wg(),lO(385,`)`),wg(),nu(386,`td`)(387,`td`),wg(),jc(388,`tr`)(389,`td`)(390,`code`),lO(391,`--color-glow`),wg()(),jc(392,`td`),lO(393,`Cor de background do botão`),wg(),jc(394,`td`)(395,`code`),lO(396,`var(--color-action-default)`),wg()()(),jc(397,`tr`)(398,`td`)(399,`code`),lO(400,`--text-color-glow`),wg()(),jc(401,`td`),lO(402,`Cor do texto`),wg(),jc(403,`td`)(404,`code`),lO(405,`var(--color-neutral-light-00)`),wg()()(),jc(406,`tr`)(407,`td`)(408,`code`),lO(409,`--color-glow-hover-start`),wg()(),jc(410,`td`),lO(411,`Cor inicial do gradiente no estado hover`),wg(),jc(412,`td`)(413,`code`),lO(414,`var(--color-brand-01-base)`),wg()()(),jc(415,`tr`)(416,`td`)(417,`code`),lO(418,`--color-glow-hover-end`),wg()(),jc(419,`td`),lO(420,`Cor final do gradiente no estado hover`),wg(),jc(421,`td`)(422,`code`),lO(423,`var(--color-brand-01-dark)`),wg()()(),jc(424,`tr`)(425,`td`)(426,`code`),lO(427,`--color-glow-highlight`),wg()(),jc(428,`td`),lO(429,`Cor do reflexo no estado hover`),wg(),jc(430,`td`)(431,`code`),lO(432,`var(--color-brand-01-light)`),wg()()(),jc(433,`tr`)(434,`td`)(435,`code`),lO(436,`--color-glow-pressed`),wg()(),jc(437,`td`),lO(438,`Cor de background no estado pressionado`),wg(),jc(439,`td`)(440,`code`),lO(441,`var(--color-action-pressed)`),wg()()(),jc(442,`tr`)(443,`td`)(444,`code`),lO(445,`--color-glow-ring`),wg()(),jc(446,`td`),lO(447,`Cor do brilho que percorre a borda`),wg(),jc(448,`td`)(449,`code`),lO(450,`var(--color-neutral-light-00)`),wg()()(),jc(451,`tr`)(452,`td`)(453,`code`),lO(454,`--color-glow-inner`),wg()(),jc(455,`td`),lO(456,`Cor do brilho interno no estado hover`),wg(),jc(457,`td`)(458,`code`),lO(459,`var(--color-neutral-light-00)`),wg()()(),jc(460,`tr`)(461,`td`)(462,`code`),lO(463,`--color-glow-halo`),wg()(),jc(464,`td`),lO(465,`Cor do halo externo e da sombra no estado hover`),wg(),jc(466,`td`)(467,`code`),lO(468,`var(--color-action-default)`),wg()()(),jc(469,`tr`)(470,`td`)(471,`code`),lO(472,`--border-width-glow`),wg()(),jc(473,`td`),lO(474,`Espessura do brilho que percorre a borda`),wg(),jc(475,`td`)(476,`code`),lO(477,`var(--border-width-md)`),wg()()(),jc(478,`tr`)(479,`td`)(480,`code`),lO(481,`--size-glow-ring-dot`),wg()(),jc(482,`td`),lO(483,`Diâmetro de cada ponto do brilho da borda`),wg(),jc(484,`td`)(485,`code`),lO(486,`var(--spacing-xl)`),wg()()(),jc(487,`tr`)(488,`td`)(489,`code`),lO(490,`--size-glow-halo-dot`),wg()(),jc(491,`td`),lO(492,`Diâmetro de cada ponto do halo externo`),wg(),jc(493,`td`)(494,`code`),lO(495,`var(--spacing-2xl)`),wg()()(),jc(496,`tr`)(497,`td`)(498,`code`),lO(499,`--spacing-glow-path`),wg()(),jc(500,`td`),lO(501,`Distância entre a borda e o caminho do brilho`),wg(),jc(502,`td`)(503,`code`),lO(504,`var(--border-width-sm)`),wg()()(),jc(505,`tr`)(506,`td`)(507,`code`),lO(508,`--blur-glow-halo`),wg()(),jc(509,`td`),lO(510,`Intensidade do desfoque do halo externo`),wg(),jc(511,`td`)(512,`code`),lO(513,`var(--spacing-sm)`),wg()()(),jc(514,`tr`)(515,`td`)(516,`code`),lO(517,`--opacity-glow-halo`),wg()(),jc(518,`td`),lO(519,`Opacidade do halo externo`),wg(),jc(520,`td`)(521,`code`),lO(522,`0.3`),wg()()(),jc(523,`tr`)(524,`td`)(525,`code`),lO(526,`--opacity-glow-halo-hover`),wg()(),jc(527,`td`),lO(528,`Opacidade do halo externo no estado hover`),wg(),jc(529,`td`)(530,`code`),lO(531,`0.5`),wg()()(),jc(532,`tr`)(533,`td`)(534,`code`),lO(535,`--opacity-glow-inner`),wg()(),jc(536,`td`),lO(537,`Opacidade do brilho interno no estado hover`),wg(),jc(538,`td`)(539,`code`),lO(540,`0.55`),wg()()(),jc(541,`tr`)(542,`td`)(543,`code`),lO(544,`--duration-glow-lap`),wg()(),jc(545,`td`),lO(546,`Duração de uma volta completa do brilho`),wg(),jc(547,`td`)(548,`code`),lO(549,`3200ms`),wg()()(),jc(550,`tr`)(551,`td`)(552,`code`),lO(553,`--duration-glow-step`),wg()(),jc(554,`td`),lO(555,`Intervalo entre os pontos da cauda do brilho`),wg(),jc(556,`td`)(557,`code`),lO(558,`30ms`),wg()()(),jc(559,`tr`)(560,`td`)(561,`code`),lO(562,`--duration-glow-state`),wg()(),jc(563,`td`),lO(564,`Duração da transição entre estados`),wg(),jc(565,`td`)(566,`code`),lO(567,`var(--duration-extra-slow)`),wg()()(),jc(568,`tr`)(569,`td`)(570,`code`),lO(571,`--timing-glow`),wg()(),jc(572,`td`),lO(573,`Curva de aceleração da transição entre estados`),wg(),jc(574,`td`)(575,`code`),lO(576,`var(--timing-exiting)`),wg()()(),jc(577,`tr`)(578,`td`)(579,`code`),lO(580,`--scale-glow-pressed`),wg()(),jc(581,`td`),lO(582,`Escala do botão no estado pressionado`),wg(),jc(583,`td`)(584,`code`),lO(585,`0.98`),wg()()(),jc(586,`tr`)(587,`td`)(588,`code`),lO(589,`--glow-trail-start`),wg()(),jc(590,`td`),lO(591,`Ângulo inicial da cauda (apenas no fallback*)`),wg(),jc(592,`td`)(593,`code`),lO(594,`252deg`),wg()()(),jc(595,`tr`)(596,`td`)(597,`code`),lO(598,`--spacing-glow-halo`),wg()(),jc(599,`td`),lO(600,`Expansão do halo externo (apenas no fallback*)`),wg(),jc(601,`td`)(602,`code`),lO(603,`var(--spacing-xxs)`),wg()()()()(),jc(604,`blockquote`)(605,`p`),lO(606,`* O brilho percorre a borda com velocidade constante via `),jc(607,`code`),lO(608,`offset-path`),wg(),lO(609,`. Em navegadores sem suporte a
`),jc(610,`code`),lO(611,`offset-path`),wg(),lO(612,` com formas b\xE1sicas (Chrome < 116, Firefox < 122 e Safari < 18), \xE9 exibido um gradiente
girando no centro do bot\xE3o.`),wg()(),jc(613,`blockquote`)(614,`p`),lO(615,`No estilo `),jc(616,`code`),lO(617,`glow`),wg(),lO(618,`, a anima\xE7\xE3o \xE9 interrompida quando o bot\xE3o est\xE1 desabilitado ou em carregamento,
e tamb\xE9m quando o sistema operacional do usu\xE1rio solicita redu\xE7\xE3o de movimento (`),jc(619,`code`),lO(620,`prefers-reduced-motion`),wg(),lO(621,`).`),wg()(),jc(622,`blockquote`)(623,`p`),lO(624,`No tema escuro, `),jc(625,`code`),lO(626,`--color-glow-ring`),wg(),lO(627,` e `),jc(628,`code`),lO(629,`--color-glow-inner`),wg(),lO(630,` usam `),jc(631,`code`),lO(632,`var(--color-neutral-dark-95)`),wg(),lO(633,`, para que o brilho
continue claro apesar da invers\xE3o da escala neutra. `),wg()()(),jc(634,`div`,9)(635,`h4`,10),lO(636,`Seletor`),wg(),jc(637,`pre`,11),lO(638,`<po-button
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
`),wg()(),jc(639,`h4`,12),lO(640,`Propriedades`),wg(),jc(641,`table`,13)(642,`tr`,14)(643,`th`,15),lO(644,`Nome`),wg(),jc(645,`th`,15),lO(646,`Tipo`),wg(),jc(647,`th`,15),lO(648,`Padrão`),wg(),jc(649,`th`,15),lO(650,`Descrição`),wg()(),jc(651,`tr`,16)(652,`td`,17)(653,`div`,18)(654,`span`,19),lO(655,` p-aria-label`),nu(656,`br`),wg()()(),jc(657,`td`,20)(658,`code`,21),lO(659,`string`),wg()(),jc(660,`td`,22),lO(661,`-`),wg(),jc(662,`td`,23)(663,`em`)(664,`strong`),lO(665,`(opcional)`),wg()(),jc(666,`p`),lO(667,`Define um `),jc(668,`code`),lO(669,`aria-label`),wg(),lO(670,` para o `),jc(671,`code`),lO(672,`po-button`),wg(),lO(673,`.`),wg(),jc(674,`p`),lO(675,`Caso esta propriedade não seja informada será considerada a label do botão.`),wg(),jc(676,`blockquote`)(677,`p`),lO(678,`Em caso de botões com apenas ícone a atribuição de valor à esta propriedade é muito importante para acessibilidade.`),wg()()()(),jc(679,`tr`,16)(680,`td`,17)(681,`div`,24)(682,`span`,25),lO(683,` (p-click)`),nu(684,`br`),wg()()(),jc(685,`td`,20)(686,`code`,26),lO(687,`EventEmitter`),wg()(),jc(688,`td`,22),lO(689,`-`),wg(),jc(690,`td`,23)(691,`p`),lO(692,`Ação que será executada quando o usuário clicar sobre o `),jc(693,`code`),lO(694,`po-button`),wg(),lO(695,`.`),wg()()(),jc(696,`tr`,16)(697,`td`,17)(698,`div`,18)(699,`span`,19),lO(700,` p-danger`),nu(701,`br`),wg()()(),jc(702,`td`,20)(703,`code`,27),lO(704,`boolean`),wg()(),jc(705,`td`,22),lO(706,`-`),wg(),jc(707,`td`,23)(708,`em`)(709,`strong`),lO(710,`(opcional)`),wg()(),jc(711,`p`),lO(712,`Deve ser usado em ações irreversíveis que o usuário precisa ter cuidado ao executá-la, como a exclusão de um registro.`),wg(),jc(713,`blockquote`)(714,`p`),lO(715,`A propriedade será inativada ao utilizar `),jc(716,`code`),lO(717,`p-kind="tertiary"`),wg(),lO(718,` ou `),jc(719,`code`),lO(720,`p-kind="glow"`),wg(),lO(721,`.`),wg()()()(),jc(722,`tr`,16)(723,`td`,17)(724,`div`,18)(725,`span`,19),lO(726,` p-disabled`),nu(727,`br`),wg()()(),jc(728,`td`,20)(729,`code`,27),lO(730,`boolean`),wg()(),jc(731,`td`,22)(732,`p`)(733,`code`),lO(734,`false`),wg()()(),jc(735,`td`,23)(736,`em`)(737,`strong`),lO(738,`(opcional)`),wg()(),jc(739,`p`),lO(740,`Desabilita o `),jc(741,`code`),lO(742,`po-button`),wg(),lO(743,` e não permite que o usuário interaja com o mesmo.`),wg()()(),jc(744,`tr`,16)(745,`td`,17)(746,`div`,18)(747,`span`,19),lO(748,` p-icon`),nu(749,`br`),wg()()(),jc(750,`td`,20)(751,`code`,21),lO(752,`string `),wg(),jc(753,`code`,28),lO(754,` TemplateRef<void>`),wg()(),jc(755,`td`,22),lO(756,`-`),wg(),jc(757,`td`,23)(758,`em`)(759,`strong`),lO(760,`(opcional)`),wg()(),jc(761,`p`),lO(762,`Ícone exibido ao lado esquerdo do label do botão.`),wg(),jc(763,`p`),lO(764,`É possível usar qualquer um dos ícones da `),jc(765,`a`,29),lO(766,`Biblioteca de ícones`),wg(),lO(767,`, conforme exemplo:`),wg(),jc(768,`pre`)(769,`code`),lO(770,`<po-button p-icon="an an-user" p-label="PO button"></po-button>
`),wg()(),jc(771,`p`),lO(772,`Também é possível utilizar outras fontes de ícones, por exemplo a biblioteca `),jc(773,`em`),lO(774,`Font Awesome`),wg(),lO(775,`, desde que a biblioteca
esteja carregada no projeto:`),wg(),jc(776,`pre`)(777,`code`),lO(778,`<po-button p-icon="fa fa-podcast" p-label="PO button"></po-button>
`),wg()(),jc(779,`p`),lO(780,`Outra opção seria a customização do ícone através do `),jc(781,`code`),lO(782,`TemplateRef`),wg(),lO(783,`, conforme exemplo abaixo:`),wg(),jc(784,`pre`)(785,`code`),lO(786,`<po-button [p-icon]="template" p-label="button template ionic"></po-button>

<ng-template #template>
 <ion-icon style="font-size: inherit" name="heart"></ion-icon>
</ng-template>
`),wg()(),jc(787,`blockquote`)(788,`p`),lO(789,`Para o ícone enquadrar corretamente, deve-se utilizar `),jc(790,`code`),lO(791,`font-size: inherit`),wg(),lO(792,` caso o ícone utilizado não aplique-o.`),wg()()()(),jc(793,`tr`,16)(794,`td`,17)(795,`div`,18)(796,`span`,19),lO(797,` p-kind`),nu(798,`br`),wg()()(),jc(799,`td`,20)(800,`code`,21),lO(801,`string`),wg()(),jc(802,`td`,22)(803,`p`)(804,`code`),lO(805,`secondary`),wg()()(),jc(806,`td`,23)(807,`em`)(808,`strong`),lO(809,`(opcional)`),wg()(),jc(810,`p`),lO(811,`Define o estilo visual do componente conforme valores especificados no enum `),jc(812,`code`),lO(813,`PoButtonKind`),wg(),lO(814,`:`),wg(),jc(815,`ul`)(816,`li`)(817,`code`),lO(818,`primary`),wg(),lO(819,`: destaca o botão, sendo recomendado para ações principais.`),wg(),jc(820,`li`)(821,`code`),lO(822,`secondary`),wg(),lO(823,`: estilo padrão, ideal para ações secundárias.`),wg(),jc(824,`li`)(825,`code`),lO(826,`tertiary`),wg(),lO(827,`: exibe o botão sem preenchimento no fundo, indicado para ações opcionais.`),wg(),jc(828,`li`)(829,`code`),lO(830,`glow`),wg(),lO(831,`: exibe o bot\xE3o em formato de p\xEDlula com um brilho animado percorrendo a borda, indicado para destacar
uma chamada para a\xE7\xE3o. Deve ser usado com modera\xE7\xE3o, preferencialmente em apenas um bot\xE3o por p\xE1gina.`),wg()(),jc(832,`blockquote`)(833,`p`),lO(834,`O estilo `),jc(835,`code`),lO(836,`glow`),wg(),lO(837,` é incompatível com a propriedade `),jc(838,`code`),lO(839,`p-danger`),wg(),lO(840,`.`),wg()()()(),jc(841,`tr`,16)(842,`td`,17)(843,`div`,18)(844,`span`,19),lO(845,` p-label`),nu(846,`br`),wg()()(),jc(847,`td`,20)(848,`code`,21),lO(849,`string`),wg()(),jc(850,`td`,22),lO(851,`-`),wg(),jc(852,`td`,23)(853,`em`)(854,`strong`),lO(855,`(opcional)`),wg()(),jc(856,`p`),lO(857,`Label do botão.`),wg()()(),jc(858,`tr`,16)(859,`td`,17)(860,`div`,18)(861,`span`,19),lO(862,` p-loading`),nu(863,`br`),wg()()(),jc(864,`td`,20)(865,`code`,27),lO(866,`boolean`),wg()(),jc(867,`td`,22)(868,`p`)(869,`code`),lO(870,`false`),wg()()(),jc(871,`td`,23)(872,`em`)(873,`strong`),lO(874,`(opcional)`),wg()(),jc(875,`p`),lO(876,`Exibe um ícone de carregamento à esquerda do `),jc(877,`em`),lO(878,`label`),wg(),lO(879,` do botão.`),wg(),jc(880,`blockquote`)(881,`p`),lO(882,`Quando esta propriedade estiver habilitada, desabilitará o botão.`),wg()()()(),jc(883,`tr`,16)(884,`td`,17)(885,`div`,18)(886,`span`,19),lO(887,` p-size`),nu(888,`br`),wg()()(),jc(889,`td`,20)(890,`code`,21),lO(891,`string`),wg()(),jc(892,`td`,22)(893,`p`)(894,`code`),lO(895,`medium`),wg()()(),jc(896,`td`,23)(897,`em`)(898,`strong`),lO(899,`(opcional)`),wg()(),jc(900,`p`),lO(901,`Define o tamanho do componente:`),wg(),jc(902,`ul`)(903,`li`)(904,`code`),lO(905,`small`),wg(),lO(906,`: altura de 32px (disponível apenas para acessibilidade AA).`),wg(),jc(907,`li`)(908,`code`),lO(909,`medium`),wg(),lO(910,`: altura de 44px.`),wg(),jc(911,`li`)(912,`code`),lO(913,`large`),wg(),lO(914,`: altura de 56px.`),wg()(),jc(915,`blockquote`)(916,`p`),lO(917,`Caso a acessibilidade AA não esteja configurada, o tamanho `),jc(918,`code`),lO(919,`medium`),wg(),lO(920,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),jc(921,`a`,30),lO(922,`po-theme`),wg(),lO(923,`.`),wg()()()(),jc(924,`tr`,16)(925,`td`,17)(926,`div`,18)(927,`span`,19),lO(928,` p-tabindex`),nu(929,`br`),wg()()(),jc(930,`td`,20)(931,`code`,31),lO(932,`number `),wg(),jc(933,`code`,21),lO(934,` string`),wg()(),jc(935,`td`,22),lO(936,`-`),wg(),jc(937,`td`,23)(938,`em`)(939,`strong`),lO(940,`(opcional)`),wg()(),jc(941,`p`),lO(942,`Define o `),jc(943,`code`),lO(944,`tabindex`),wg(),lO(945,` do elemento `),jc(946,`code`),lO(947,`<button>`),wg(),lO(948,` nativo interno.`),wg(),jc(949,`p`),lO(950,`Use `),jc(951,`code`),lO(952,`[tabindex]="-1"`),wg(),lO(953,` para remover o botão da ordem de foco do teclado.`),wg()()(),jc(954,`tr`,16)(955,`td`,17)(956,`div`,18)(957,`span`,19),lO(958,` p-type`),nu(959,`br`),wg()()(),jc(960,`td`,20)(961,`code`,32),lO(962,`PoButtonType`),wg()(),jc(963,`td`,22)(964,`p`)(965,`code`),lO(966,`PoButtonType.Button`),wg()()(),jc(967,`td`,23)(968,`em`)(969,`strong`),lO(970,`(opcional)`),wg()(),jc(971,`p`),lO(972,`Define o tipo do botão.`),wg()()()(),jc(973,`h3`,12),lO(974,`Métodos`),wg(),jc(975,`table`,33)(976,`tr`,16)(977,`th`,34)(978,`div`,18)(979,`h4`)(980,`span`,19),lO(981,` focus `),wg()()()()(),jc(982,`tr`,23)(983,`td`,23)(984,`p`),lO(985,`Função que atribui foco ao componente.`),wg(),jc(986,`p`),lO(987,`Para utilizá-la é necessário ter a instância do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:`),wg(),jc(988,`pre`)(989,`code`),lO(990,`import { PoButtonComponent } from '@po-ui/ng-components';

...

@ViewChild(PoButtonComponent, { static: true }) button: PoButtonComponent;

focusButton() {
  this.button.focus();
}
`),wg()()()()(),nu(991,`br`),jc(992,`h3`),lO(993,`Enums`),wg(),jc(994,`h4`,4)(995,`code`,5),lO(996,`PoButtonKind`),wg()(),jc(997,`div`,2)(998,`p`),lO(999,`Estilos disponíveis do button.`),wg()(),jc(1e3,`h4`,12),lO(1001,`Propriedades`),wg(),jc(1002,`table`,13)(1003,`tr`,14)(1004,`th`,15),lO(1005,`Nome`),wg(),jc(1006,`th`,15),lO(1007,`Descrição`),wg()(),jc(1008,`tr`,16)(1009,`td`,17)(1010,`div`,18)(1011,`span`,19),lO(1012,` primary`),nu(1013,`br`),wg()()(),jc(1014,`td`,23)(1015,`p`),lO(1016,`Estilo primário, usado para ações principais que requerem maior destaque.`),wg()()(),jc(1017,`tr`,16)(1018,`td`,17)(1019,`div`,18)(1020,`span`,19),lO(1021,` secondary`),nu(1022,`br`),wg()()(),jc(1023,`td`,23)(1024,`p`),lO(1025,`Estilo secundário, usado como padrão, para ações comuns.`),wg()()(),jc(1026,`tr`,16)(1027,`td`,17)(1028,`div`,18)(1029,`span`,19),lO(1030,` tertiary`),nu(1031,`br`),wg()()(),jc(1032,`td`,23)(1033,`p`),lO(1034,`Estilo terciário, ideal para ações menos importantes, sem fundo preenchido.`),wg()()(),jc(1035,`tr`,16)(1036,`td`,17)(1037,`div`,18)(1038,`span`,19),lO(1039,` glow`),nu(1040,`br`),wg()()(),jc(1041,`td`,23)(1042,`p`),lO(1043,`Estilo com brilho animado que percorre a borda do botão, usado para destacar uma chamada para ação.`),wg(),jc(1044,`blockquote`)(1045,`p`),lO(1046,`Incompatível com a propriedade `),jc(1047,`code`),lO(1048,`p-danger`),wg(),lO(1049,`.`),wg()()()()(),jc(1050,`h4`,4)(1051,`code`,5),lO(1052,`PoButtonType`),wg()(),jc(1053,`div`,2)(1054,`p`),lO(1055,`Enumeração que define os tipos possíveis para o `),jc(1056,`code`),lO(1057,`PoButtonComponent`),wg(),lO(1058,`. Estes tipos est\xE3o relacionados ao comportamento
do bot\xE3o quando utilizado dentro de um formul\xE1rio HTML.`),wg()(),jc(1059,`h4`,12),lO(1060,`Propriedades`),wg(),jc(1061,`table`,13)(1062,`tr`,14)(1063,`th`,15),lO(1064,`Nome`),wg(),jc(1065,`th`,15),lO(1066,`Descrição`),wg()(),jc(1067,`tr`,16)(1068,`td`,17)(1069,`div`,18)(1070,`span`,19),lO(1071,` Submit`),nu(1072,`br`),wg()()(),jc(1073,`td`,23)(1074,`p`),lO(1075,`Define o botão como do tipo `),jc(1076,`code`),lO(1077,`submit`),wg(),lO(1078,`. Quando clicado, o formul\xE1rio \xE9 enviado automaticamente,
disparando o evento `),jc(1079,`code`),lO(1080,`submit`),wg(),lO(1081,`.`),wg()()(),jc(1082,`tr`,16)(1083,`td`,17)(1084,`div`,18)(1085,`span`,19),lO(1086,` Button`),nu(1087,`br`),wg()()(),jc(1088,`td`,23)(1089,`p`),lO(1090,`Define o botão como do tipo `),jc(1091,`code`),lO(1092,`button`),wg(),lO(1093,`. Este tipo de bot\xE3o n\xE3o possui comportamento padr\xE3o associado
e \xE9 utilizado principalmente para a\xE7\xF5es program\xE1ticas como cliques e disparos de eventos customizados.`),wg()()(),jc(1094,`tr`,16)(1095,`td`,17)(1096,`div`,18)(1097,`span`,19),lO(1098,` Reset`),nu(1099,`br`),wg()()(),jc(1100,`td`,23)(1101,`p`),lO(1102,`Define o botão como do tipo `),jc(1103,`code`),lO(1104,`reset`),wg(),lO(1105,`. Quando clicado, redefine os campos do formul\xE1rio ao qual pertence
para seus valores iniciais.`),wg()()()()())},dependencies:[P],encapsulation:2,changeDetection:1})}return o})();function Oe(o,G){if(o&1){let r=Ax();jc(0,`po-tab`,4),mt(`p-click`,function(){v_(r);let i=Fx();return __(i.changeTab(`web`))}),nu(1,`sample-po-button-basic-view`)(2,`sample-po-button-labs-view`)(3,`sample-po-button-social-network-view`),wg()}if(o&2){let r=Fx();UE(`p-active`,r.activeTab===`web`)}}var Me=[{path:``,component:(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(r,a){this.route=r,this.router=a}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let a=r.view;this.activeTab=a||(this.samplesLength>0?`web`:`doc`),this.hidePoWebSample=this.samplesLength===0})}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:`merge`}),this.activeTab=r}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(a){return new(a||o)(b(ir),b(Sn))};static ɵcmp=Zn({type:o,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:3,consts:[[`p-title`,`Button`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Exemplos`,3,`p-active`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-active`]],template:function(a,i){a&1&&(jc(0,`po-page-default`,0)(1,`po-tabs`,1),vx(2,Oe,4,1,`po-tab`,2),jc(3,`po-tab`,3),mt(`p-click`,function(){return i.changeTab(`doc`)}),nu(4,`sample-po-button-doc`),wg()()()),a&2&&(UE(`p-actions`,i.actions),rg(2),Dx(i.hidePoWebSample?-1:2),rg(),UE(`p-active`,i.activeTab===`doc`))},dependencies:[Tze,Qae,ere,pe,ue,be,Se],encapsulation:2,changeDetection:1})}return o})()}];var xe=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵmod=pe$1({type:o});static ɵinj=ue$1({imports:[I1.forChild(Me),I1]})}return o})();var ct=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵmod=pe$1({type:o});static ɵinj=ue$1({imports:[M,xe]})}return o})();export{ct as DocPoButtonModule};