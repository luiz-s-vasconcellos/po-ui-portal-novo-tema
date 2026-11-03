import{n as s,t as r}from"./chunk-zystk1pz.js";import{$i as ir,Aa as t0,Cn as rie,Da as qx,Gn as yae,Ka as wg,Lt as c4,Mn as ure,Oa as rg,Pa as ue$1,Pr as JN,Qa as y_,Qi as ib,Ra as v_,Sn as ri,Ta as px,Ua as wK,Ya as xx,Yn as zf,Z as P4,Zi as iO,_a as nu,b as G4,ba as p,bt as Vze,ci as TF,cn as lre,cr as CK,fa as mt,fn as p4,ia as jc,ir as Ag,ji as b,ka as sO,la as mO,na as jE,nt as Qte,oi as Sn,pa as mx,ri as Rk,si as Sx,sr as C1,va as ob,vr as EF,wi as Zn,xa as pe$1,yr as EK,yt as Vu}from"./chunk-FGyGiu1H.js";import{n as P,t as M}from"./main-M62PY4SQ.js";var me=(()=>{class o{onClick(){alert(`Po Button!`)}static ɵfac=function(a){return new(a||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-button-basic`]],standalone:!1,decls:1,vars:0,consts:[[`p-label`,`PO Button`,3,`p-click`]],template:function(a,i){a&1&&(jc(0,`po-button`,0),mt(`p-click`,function(){return i.onClick()}),wg())},dependencies:[ri],encapsulation:2,changeDetection:1})}return o})();var ve=o=>({"docs-sample-code-tabs":o});var pe=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-button-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,i){a&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Button Basic`),wg(),jc(4,`a`,2),mt(`click`,function(){return i.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-button-basic/sample-po-button-basic.component.html`),wg(),jc(13,`pre`,7),iO(14,`<po-button p-label="PO Button" (p-click)="onClick()"> </po-button>
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-button-basic/sample-po-button-basic.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-button-basic`),wg(),nu(23,`hr`)),a&2&&(rg(5),qx(`po-icon `+i.sampleCodeButtonIcon),rg(),Ag(` `,i.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,ve,i.hideSampleCodeTabs)))},dependencies:[Rk,P,lre,ure,me],encapsulation:2,changeDetection:1})}return o})();var ce=(()=>{class o{poDialog=p(rie);label;kind;icon;size;properties;type;propertiesOptions=[{value:`disabled`,label:`Disabled`},{value:`loading`,label:`Loading`},{value:`danger`,label:`Danger`}];iconsOptions=[{label:`an an-newspaper`,value:`an an-newspaper`},{label:`an an-calendar-dots`,value:`an an-calendar-dots`},{label:`an an-user`,value:`an an-user`},{label:`fa fa-podcast`,value:`fa fa-podcast`}];kindsOptions=[{label:`primary`,value:`primary`},{label:`secondary`,value:`secondary`},{label:`tertiary`,value:`tertiary`},{label:`glow`,value:`glow`}];kindsWithoutDanger=[`tertiary`,`glow`];sizesOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`},{label:`large`,value:`large`}];typeOptions=[{label:`button`,value:c4.Button},{label:`submit`,value:c4.Submit},{label:`reset`,value:c4.Reset}];ngOnInit(){this.restore()}buttonClick(){this.poDialog.alert({title:`PO Button`,message:`Hello PO World!!!`})}propertiesChange(r$1){let a=!!r$1&&this.properties.includes(`danger`);this.setKindsWithoutDangerDisabled(a),this.sizesOptions[0]=s(r({},this.sizesOptions[0]),{disabled:!1}),this.sizesOptions[1]=s(r({},this.sizesOptions[1]),{disabled:!1})}verifyDisabled(r){let a=[...this.propertiesOptions];this.kindsWithoutDanger.includes(r)?(a[2]={value:`danger`,label:`Danger`,disabled:!0},this.propertiesOptions=a):(a[2]={value:`danger`,label:`Danger`,disabled:!1},this.propertiesOptions=a)}restore(){this.label=void 0,this.kind=`secondary`,this.size=`medium`,this.icon=void 0,this.type=c4.Button,this.properties=[],this.setKindsWithoutDangerDisabled(!1),this.sizesOptions[0]=s(r({},this.sizesOptions[0]),{disabled:!1}),this.sizesOptions[1]=s(r({},this.sizesOptions[1]),{disabled:!1})}setKindsWithoutDangerDisabled(r$2){this.kindsOptions=this.kindsOptions.map(a=>this.kindsWithoutDanger.includes(a.value)?s(r({},a),{disabled:r$2}):a)}static ɵfac=function(a){return new(a||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-button-labs`]],standalone:!1,decls:14,vars:19,consts:[[`f`,`ngForm`],[1,`po-row`],[1,`po-sm-12`,3,`p-click`,`p-disabled`,`p-icon`,`p-label`,`p-loading`,`p-size`,`p-danger`,`p-kind`,`p-type`],[`name`,`label`,`p-clean`,``,`p-label`,`Label`,1,`po-lg-6`,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`properties`,`p-columns`,`4`,`p-label`,`Properties`,1,`po-lg-12`,3,`ngModelChange`,`p-change`,`ngModel`,`p-options`],[`name`,`icon`,`p-columns`,`4`,`p-label`,`Icon`,1,`po-lg-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`kind`,`p-columns`,`4`,`p-label`,`Kind`,1,`po-lg-12`,3,`ngModelChange`,`p-change`,`ngModel`,`p-options`],[`name`,`type`,`p-columns`,`4`,`p-label`,`Type`,1,`po-lg-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`size`,`p-columns`,`4`,`p-label`,`Size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-lg-12`,3,`ngModelChange`,`p-change`,`ngModel`,`p-options`],[`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`]],template:function(a,i){if(a&1){let b=Sx();jc(0,`div`,1)(1,`po-button`,2),mt(`p-click`,function(){return i.buttonClick()}),wg()(),nu(2,`po-divider`),jc(3,`form`,null,0)(5,`div`,1)(6,`po-input`,3),JN(),ob(`ngModelChange`,function(d){return y_(b),sO(i.label,d)||(i.label=d),v_(d)}),wg()(),jc(7,`po-checkbox-group`,4),JN(),ob(`ngModelChange`,function(d){return y_(b),sO(i.properties,d)||(i.properties=d),v_(d)}),mt(`p-change`,function(d){return i.propertiesChange(d)}),wg(),jc(8,`po-radio-group`,5),JN(),ob(`ngModelChange`,function(d){return y_(b),sO(i.icon,d)||(i.icon=d),v_(d)}),wg(),jc(9,`po-radio-group`,6),JN(),ob(`ngModelChange`,function(d){return y_(b),sO(i.kind,d)||(i.kind=d),v_(d)}),mt(`p-change`,function(d){return i.verifyDisabled(d)}),wg(),jc(10,`po-radio-group`,7),JN(),ob(`ngModelChange`,function(d){return y_(b),sO(i.type,d)||(i.type=d),v_(d)}),wg(),jc(11,`po-radio-group`,8),JN(),ob(`ngModelChange`,function(d){return y_(b),sO(i.size,d)||(i.size=d),v_(d)}),mt(`p-change`,function(d){return i.verifyDisabled(d)}),wg(),jc(12,`div`,1)(13,`po-button`,9),mt(`p-click`,function(){return i.restore()}),wg()()()}a&2&&(rg(),jE(`p-disabled`,i.properties.includes(`disabled`))(`p-icon`,i.icon)(`p-label`,i.label)(`p-loading`,i.properties.includes(`loading`))(`p-size`,i.size)(`p-danger`,i.properties.includes(`danger`))(`p-kind`,i.kind)(`p-type`,i.type),rg(5),ib(`ngModel`,i.label),t0(),rg(),ib(`ngModel`,i.properties),jE(`p-options`,i.propertiesOptions),t0(),rg(),ib(`ngModel`,i.icon),jE(`p-options`,i.iconsOptions),t0(),rg(),ib(`ngModel`,i.kind),jE(`p-options`,i.kindsOptions),t0(),rg(),ib(`ngModel`,i.type),jE(`p-options`,i.typeOptions),t0(),rg(),ib(`ngModel`,i.size),jE(`p-options`,i.sizesOptions),t0())},dependencies:[wK,CK,EK,TF,EF,ri,zf,P4,G4,Qte],encapsulation:2,changeDetection:1})}return o})();var we=o=>({"docs-sample-code-tabs":o});var ue=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-button-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,i){a&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Button Labs`),wg(),jc(4,`a`,2),mt(`click`,function(){return i.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-button-labs/sample-po-button-labs.component.html`),wg(),jc(13,`pre`,7),iO(14,`<div class="po-row">
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
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-button-labs/sample-po-button-labs.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-button-labs`),wg(),nu(23,`hr`)),a&2&&(rg(5),qx(`po-icon `+i.sampleCodeButtonIcon),rg(),Ag(` `,i.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,we,i.hideSampleCodeTabs)))},dependencies:[Rk,P,lre,ure,ce],encapsulation:2,changeDetection:1})}return o})();function ke(o,G){if(o&1){let r=Sx();jc(0,`div`,0),nu(1,`po-avatar`,2),jc(2,`div`,3)(3,`span`,4),iO(4),wg(),jc(5,`span`,5),iO(6),wg(),jc(7,`span`,5),iO(8),wg()()(),jc(9,`div`,0)(10,`po-button`,6),mt(`p-click`,function(){y_(r);let i=xx();return v_(i.notification(`added`,`success`))}),wg(),jc(11,`po-button`,7),mt(`p-click`,function(){y_(r);let i=xx();return v_(i.notification(`ignored`,`warning`))}),wg(),jc(12,`po-button`,8),mt(`p-click`,function(){y_(r);let i=xx();return v_(i.notification(`blocked`,`information`))}),wg()()}if(o&2){let r=xx();rg(),jE(`p-src`,r.userAvatar),rg(3),Ag(` `,r.currentFriend.name,` `),rg(2),Ag(` `,r.currentFriend.mutualFriends,` mutual friends `),rg(2),Ag(` Resides in `,r.currentFriend.reside,` `)}}function Pe(o,G){o&1&&(jc(0,`div`,0)(1,`span`,9),iO(2,`Congratulations TOTVS, no more requests!`),wg()())}var Ee=(()=>{class o{poNotification=p(Vu);currentFriend;userAvatar=`https://lorempixel.com/144/144/`;newFriends=[{name:`Mr. Dev PO`,mutualFriends:`7`,reside:`Mountain View, CA`},{name:`Mr. AI PO`,mutualFriends:`99+`,reside:`New York City, NY`},{name:`Mr. UX PO`,mutualFriends:`14`,reside:`Los Angeles, CA`}];indexFriend=0;ngOnInit(){this.setCurrentFriend(0)}notification(r,a){this.poNotification[a](`User ${r} successfully!`),this.indexFriend++,this.setCurrentFriend(this.indexFriend)}setCurrentFriend(r){this.currentFriend=this.newFriends[r]}static ɵfac=function(a){return new(a||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-button-social-network`]],standalone:!1,decls:4,vars:1,consts:[[1,`po-row`],[`p-title`,`Friend Request`,1,`po-lg-6`],[`p-size`,`lg`,1,`po-md-4`,3,`p-src`],[1,`po-md-8`],[1,`po-sm-12`,`po-font-subtitle`],[1,`po-sm-12`,`po-font-text`],[`p-icon`,`fa fa-check-circle`,`p-label`,`Confirm`,1,`po-md-4`,3,`p-click`],[`p-icon`,`fa fa-eye-slash`,`p-label`,`Ignore`,1,`po-md-4`,3,`p-click`],[`p-icon`,`fa fa-ban`,`p-label`,`Block`,1,`po-md-4`,3,`p-click`],[1,`po-lg-8`,`po-font-subtitle`]],template:function(a,i){a&1&&(jc(0,`div`,0)(1,`po-widget`,1),px(2,ke,13,4)(3,Pe,3,0,`div`,0),wg()()),a&2&&(rg(2),mx(i.currentFriend?2:3))},dependencies:[p4,ri,yae],encapsulation:2,changeDetection:1})}return o})();var De=o=>({"docs-sample-code-tabs":o});var be=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-button-social-network-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,i){a&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),iO(3,`PO Button Social Network`),wg(),jc(4,`a`,2),mt(`click`,function(){return i.toggleSampleCodeTabs()}),nu(5,`span`),iO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),iO(12,`sample-po-button-social-network/sample-po-button-social-network.component.html`),wg(),jc(13,`pre`,7),iO(14,`<div class="po-row">
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
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),iO(18,`sample-po-button-social-network/sample-po-button-social-network.component.ts`),wg(),jc(19,`pre`,9),iO(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-button-social-network`),wg(),nu(23,`hr`)),a&2&&(rg(5),qx(`po-icon `+i.sampleCodeButtonIcon),rg(),Ag(` `,i.sampleCodeButtonLabel),rg(),jE(`ngClass`,mO(4,De,i.hideSampleCodeTabs)))},dependencies:[Rk,P,lre,ure,Ee],encapsulation:2,changeDetection:1})}return o})();var Se=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-button-doc`]],standalone:!1,decls:1106,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://www.w3.org/WAI/ARIA/apg/#keyboard-interaction-3`],[`href`,`https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance-enhanced`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`string`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`pan`,``,1,`docs-api-property-type`,`TemplateRef<void>`],[`href`,`https://po-ui.io/icons`],[`href`,`https://po-ui.io/documentation/po-theme`],[`pan`,``,1,`docs-api-property-type`,`number`],[`pan`,``,1,`docs-api-property-type`,`PoButtonType`],[1,`docs-api-method-table`],[`colspan`,`2`,1,`docs-api-properties-name-cell`]],template:function(a,i){a&1&&(jc(0,`div`,0)(1,`p`,1)(2,`code`),iO(3,`import { PoButtonModule } from '@po-ui/ng-components';`),wg()(),jc(4,`div`,2)(5,`p`),iO(6,`Módulo do componente po-button.`),wg()(),jc(7,`h3`,3),iO(8,`Componente`),wg(),jc(9,`h4`,4)(10,`code`,5),iO(11,`PoButtonComponent`),wg()(),jc(12,`div`,2)(13,`p`),iO(14,`O `),jc(15,`code`),iO(16,`po-button`),wg(),iO(17,` permite que o usuário execute ações predefinidas pelo desenvolvedor.`),wg(),jc(18,`p`),iO(19,`Através dos tipos, é possível identificar a importância de cada ação.`),wg(),jc(20,`h4`),iO(21,`Boas práticas`),wg(),jc(22,`ul`)(23,`li`),iO(24,`Evite `),jc(25,`code`),iO(26,`labels`),wg(),iO(27,` extensos que quebram o layout do `),jc(28,`code`),iO(29,`po-button`),wg(),iO(30,`, use `),jc(31,`code`),iO(32,`labels`),wg(),iO(33,` diretos, curtos e intuitivos.`),wg(),jc(34,`li`),iO(35,`Utilize apenas um `),jc(36,`code`),iO(37,`po-button`),wg(),iO(38,` configurado como `),jc(39,`code`),iO(40,`primary`),wg(),iO(41,` por página.`),wg(),jc(42,`li`),iO(43,`Para ações irreversíveis use sempre a propriedade `),jc(44,`code`),iO(45,`p-danger`),wg(),iO(46,`.`),wg()(),jc(47,`h4`),iO(48,`Acessibilidade tratada no componente`),wg(),jc(49,`p`),iO(50,`Algumas diretrizes de acessibilidade já são tratadas no componente, internamente, e não podem ser alteradas pelo proprietário do conteúdo. São elas:`),wg(),jc(51,`ul`)(52,`li`),iO(53,`Quando em foco, o botão é ativado usando as teclas de Espaço e Enter do teclado. `),jc(54,`a`,6),iO(55,`W3C WAI-ARIA 3.5 Button - Keyboard Interaction`),wg()(),jc(56,`li`),iO(57,`A área do foco precisar ter uma espessura de pelo menos 2 pixels CSS e o foco não pode ficar escondido por outros elementos da tela. `),jc(58,`a`,7),iO(59,`WCAG 2.4.12: Focus Appearance`),wg()()(),jc(60,`h4`),iO(61,`Tokens customizáveis`),wg(),jc(62,`p`),iO(63,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),wg(),jc(64,`blockquote`)(65,`p`),iO(66,`Para maiores informações, acesse o guia `),jc(67,`a`,8),iO(68,`Personalizando o Tema Padrão com Tokens CSS`),wg(),iO(69,`.`),wg()(),jc(70,`table`)(71,`thead`)(72,`tr`)(73,`th`),iO(74,`Propriedade`),wg(),jc(75,`th`),iO(76,`Descrição`),wg(),jc(77,`th`),iO(78,`Valor Padrão`),wg()()(),jc(79,`tbody`)(80,`tr`)(81,`td`)(82,`code`),iO(83,`--font-family`),wg()(),jc(84,`td`),iO(85,`Família tipográfica usada`),wg(),jc(86,`td`)(87,`code`),iO(88,`var(--font-family-theme)`),wg()()(),jc(89,`tr`)(90,`td`)(91,`code`),iO(92,`--font-size`),wg()(),jc(93,`td`),iO(94,`Tamanho da fonte`),wg(),jc(95,`td`)(96,`code`),iO(97,`var(--font-size-default)`),wg()()(),jc(98,`tr`)(99,`td`)(100,`code`),iO(101,`--font-weight`),wg()(),jc(102,`td`),iO(103,`Peso da fonte`),wg(),jc(104,`td`)(105,`code`),iO(106,`var(--font-weight-bold)`),wg()()(),jc(107,`tr`)(108,`td`)(109,`code`),iO(110,`--line-height`),wg()(),jc(111,`td`),iO(112,`Tamanho da label`),wg(),jc(113,`td`)(114,`code`),iO(115,`var(--line-height-none)`),wg()()(),jc(116,`tr`)(117,`td`)(118,`code`),iO(119,`--border-radius`),wg()(),jc(120,`td`),iO(121,`Contém o valor do raio dos cantos do elemento\xA0`),wg(),jc(122,`td`)(123,`code`),iO(124,`var(--border-radius-md)`),wg()()(),jc(125,`tr`)(126,`td`)(127,`code`),iO(128,`--border-width`),wg()(),jc(129,`td`),iO(130,`Contém o valor da largura dos cantos do elemento\xA0`),wg(),jc(131,`td`)(132,`code`),iO(133,`var(--border-width-md)`),wg()()(),jc(134,`tr`)(135,`td`)(136,`code`),iO(137,`--padding`),wg()(),jc(138,`td`),iO(139,`Preenchimento`),wg(),jc(140,`td`)(141,`code`),iO(142,`0 1em`),wg()()(),jc(143,`tr`)(144,`td`)(145,`strong`),iO(146,`Danger`),wg()(),nu(147,`td`)(148,`td`),wg(),jc(149,`tr`)(150,`td`)(151,`code`),iO(152,`--text-color-danger`),wg()(),jc(153,`td`),iO(154,`Cor do texto no estado danger`),wg(),jc(155,`td`)(156,`code`),iO(157,`var(--color-neutral-light-00)`),wg()()(),jc(158,`tr`)(159,`td`)(160,`code`),iO(161,`--color-button-danger`),wg()(),jc(162,`td`),iO(163,`Cor do botão no estado danger`),wg(),jc(164,`td`)(165,`code`),iO(166,`var(--color-feedback-negative-dark)`),wg()()(),jc(167,`tr`)(168,`td`)(169,`code`),iO(170,`--color-danger-hover`),wg()(),jc(171,`td`),iO(172,`Cor de hover no estado danger`),wg(),jc(173,`td`)(174,`code`),iO(175,`var(--color-feedback-negative-darker)`),wg()()(),jc(176,`tr`)(177,`td`)(178,`code`),iO(179,`--color-danger-pressed`),wg()(),jc(180,`td`),iO(181,`Cor pressionada no estado danger`),wg(),jc(182,`td`)(183,`code`),iO(184,`var(--color-feedback-negative-darkest)`),wg()()(),jc(185,`tr`)(186,`td`)(187,`code`),iO(188,`--background-danger-hover`),wg()(),jc(189,`td`),iO(190,`Cor de background de hover no estado danger`),wg(),jc(191,`td`)(192,`code`),iO(193,`var(--color-feedback-negative-lighter)`),wg()()(),jc(194,`tr`)(195,`td`)(196,`code`),iO(197,`--border-color-danger-hover`),wg()(),jc(198,`td`),iO(199,`Cor da borda de hover no estado danger`),wg(),jc(200,`td`)(201,`code`),iO(202,`var(--color-feedback-negative-darkest)`),wg()()(),jc(203,`tr`)(204,`td`)(205,`code`),iO(206,`--background-danger-pressed`),wg()(),jc(207,`td`),iO(208,`Cor de background pressionado no estado danger`),wg(),jc(209,`td`)(210,`code`),iO(211,`var(--color-feedback-negative-light)`),wg()()(),jc(212,`tr`)(213,`td`)(214,`code`),iO(215,`--background-color-button-danger`),wg(),iO(216,`\xA0`),wg(),jc(217,`td`),iO(218,`Cor de background do botão no estado danger`),wg(),jc(219,`td`)(220,`code`),iO(221,`var(--color-transparent)`),wg()()(),jc(222,`tr`)(223,`td`)(224,`strong`),iO(225,`Default Values`),wg()(),nu(226,`td`)(227,`td`),wg(),jc(228,`tr`)(229,`td`)(230,`code`),iO(231,`--text-color`),wg()(),jc(232,`td`),iO(233,`Cor do texto`),wg(),jc(234,`td`)(235,`code`),iO(236,`var(--color-neutral-light-00)`),wg()()(),jc(237,`tr`)(238,`td`)(239,`code`),iO(240,`--color`),wg()(),jc(241,`td`),iO(242,`Cor principal do botão`),wg(),jc(243,`td`)(244,`code`),iO(245,`var(--color-action-default)`),wg()()(),jc(246,`tr`)(247,`td`)(248,`code`),iO(249,`--background-color`),wg()(),jc(250,`td`),iO(251,`Cor de background`),wg(),jc(252,`td`)(253,`code`),iO(254,`var(--color-transparent)`),wg()()(),jc(255,`tr`)(256,`td`)(257,`code`),iO(258,`--border-color`),wg()(),jc(259,`td`),iO(260,`Cor da borda`),wg(),jc(261,`td`)(262,`code`),iO(263,`var(--color-transparent)`),wg()()(),jc(264,`tr`)(265,`td`)(266,`code`),iO(267,`--shadow`),wg()(),jc(268,`td`),iO(269,`Contém o valor da sombra do elemento`),wg(),jc(270,`td`)(271,`code`),iO(272,`var(--shadow-none)`),wg()()(),jc(273,`tr`)(274,`td`)(275,`strong`),iO(276,`Hover`),wg()(),nu(277,`td`)(278,`td`),wg(),jc(279,`tr`)(280,`td`)(281,`code`),iO(282,`--color-hover`),wg()(),jc(283,`td`),iO(284,`Cor principal no estado hover`),wg(),jc(285,`td`)(286,`code`),iO(287,`var(--color-action-hover)`),wg()()(),jc(288,`tr`)(289,`td`)(290,`code`),iO(291,`--background-hover`),wg()(),jc(292,`td`),iO(293,`Cor de background no estado hover`),wg(),jc(294,`td`)(295,`code`),iO(296,`var(--color-brand-01-lighter)`),wg()()(),jc(297,`tr`)(298,`td`)(299,`code`),iO(300,`--border-color-hover`),wg()(),jc(301,`td`),iO(302,`Cor da borda no estado hover`),wg(),jc(303,`td`)(304,`code`),iO(305,`var(--color-brand-01-darkest)`),wg()()(),jc(306,`tr`)(307,`td`)(308,`strong`),iO(309,`Focused`),wg()(),nu(310,`td`)(311,`td`),wg(),jc(312,`tr`)(313,`td`)(314,`code`),iO(315,`--outline-color-focused`),wg()(),jc(316,`td`),iO(317,`Cor do outline do estado de focus`),wg(),jc(318,`td`)(319,`code`),iO(320,`var(--color-action-focus)`),wg()()(),jc(321,`tr`)(322,`td`)(323,`strong`),iO(324,`Pressed`),wg()(),nu(325,`td`)(326,`td`),wg(),jc(327,`tr`)(328,`td`)(329,`code`),iO(330,`--color-pressed`),wg()(),jc(331,`td`),iO(332,`Cor principal no estado de pressionado`),wg(),jc(333,`td`)(334,`code`),iO(335,`var(--color-action-pressed)`),wg()()(),jc(336,`tr`)(337,`td`)(338,`code`),iO(339,`--background-pressed`),wg()(),jc(340,`td`),iO(341,`Cor de background no estado de pressionado\xA0`),wg(),jc(342,`td`)(343,`code`),iO(344,`var(--color-brand-01-light)`),wg()()(),jc(345,`tr`)(346,`td`)(347,`strong`),iO(348,`Disabled`),wg()(),nu(349,`td`)(350,`td`),wg(),jc(351,`tr`)(352,`td`)(353,`code`),iO(354,`--text-color-disabled`),wg()(),jc(355,`td`),iO(356,`Cor do texto no estado disabled`),wg(),jc(357,`td`)(358,`code`),iO(359,`var(--color-neutral-dark-70)`),wg()()(),jc(360,`tr`)(361,`td`)(362,`code`),iO(363,`--color-disabled`),wg()(),jc(364,`td`),iO(365,`Cor principal no estado disabled`),wg(),jc(366,`td`)(367,`code`),iO(368,`var(--color-action-disabled)`),wg()()(),jc(369,`tr`)(370,`td`)(371,`code`),iO(372,`--background-color-disabled`),wg()(),jc(373,`td`),iO(374,`Cor de background no estado disabled`),wg(),jc(375,`td`)(376,`code`),iO(377,`var(--color-transparent)`),wg()()(),jc(378,`tr`)(379,`td`)(380,`strong`),iO(381,`Glow`),wg(),iO(382,` (`),jc(383,`code`),iO(384,`p-kind="glow"`),wg(),iO(385,`)`),wg(),nu(386,`td`)(387,`td`),wg(),jc(388,`tr`)(389,`td`)(390,`code`),iO(391,`--color-glow`),wg()(),jc(392,`td`),iO(393,`Cor de background do botão`),wg(),jc(394,`td`)(395,`code`),iO(396,`var(--color-action-default)`),wg()()(),jc(397,`tr`)(398,`td`)(399,`code`),iO(400,`--text-color-glow`),wg()(),jc(401,`td`),iO(402,`Cor do texto`),wg(),jc(403,`td`)(404,`code`),iO(405,`var(--color-neutral-light-00)`),wg()()(),jc(406,`tr`)(407,`td`)(408,`code`),iO(409,`--color-glow-hover-start`),wg()(),jc(410,`td`),iO(411,`Cor inicial do gradiente no estado hover`),wg(),jc(412,`td`)(413,`code`),iO(414,`var(--color-brand-01-base)`),wg()()(),jc(415,`tr`)(416,`td`)(417,`code`),iO(418,`--color-glow-hover-end`),wg()(),jc(419,`td`),iO(420,`Cor final do gradiente no estado hover`),wg(),jc(421,`td`)(422,`code`),iO(423,`var(--color-brand-01-dark)`),wg()()(),jc(424,`tr`)(425,`td`)(426,`code`),iO(427,`--color-glow-highlight`),wg()(),jc(428,`td`),iO(429,`Cor do reflexo no estado hover`),wg(),jc(430,`td`)(431,`code`),iO(432,`var(--color-brand-01-light)`),wg()()(),jc(433,`tr`)(434,`td`)(435,`code`),iO(436,`--color-glow-pressed`),wg()(),jc(437,`td`),iO(438,`Cor de background no estado pressionado`),wg(),jc(439,`td`)(440,`code`),iO(441,`var(--color-action-pressed)`),wg()()(),jc(442,`tr`)(443,`td`)(444,`code`),iO(445,`--color-glow-ring`),wg()(),jc(446,`td`),iO(447,`Cor do brilho que percorre a borda`),wg(),jc(448,`td`)(449,`code`),iO(450,`var(--color-neutral-light-00)`),wg()()(),jc(451,`tr`)(452,`td`)(453,`code`),iO(454,`--color-glow-inner`),wg()(),jc(455,`td`),iO(456,`Cor do brilho interno no estado hover`),wg(),jc(457,`td`)(458,`code`),iO(459,`var(--color-neutral-light-00)`),wg()()(),jc(460,`tr`)(461,`td`)(462,`code`),iO(463,`--color-glow-halo`),wg()(),jc(464,`td`),iO(465,`Cor do halo externo e da sombra no estado hover`),wg(),jc(466,`td`)(467,`code`),iO(468,`var(--color-action-default)`),wg()()(),jc(469,`tr`)(470,`td`)(471,`code`),iO(472,`--border-width-glow`),wg()(),jc(473,`td`),iO(474,`Espessura do brilho que percorre a borda`),wg(),jc(475,`td`)(476,`code`),iO(477,`var(--border-width-md)`),wg()()(),jc(478,`tr`)(479,`td`)(480,`code`),iO(481,`--size-glow-ring-dot`),wg()(),jc(482,`td`),iO(483,`Diâmetro de cada ponto do brilho da borda`),wg(),jc(484,`td`)(485,`code`),iO(486,`var(--spacing-xl)`),wg()()(),jc(487,`tr`)(488,`td`)(489,`code`),iO(490,`--size-glow-halo-dot`),wg()(),jc(491,`td`),iO(492,`Diâmetro de cada ponto do halo externo`),wg(),jc(493,`td`)(494,`code`),iO(495,`var(--spacing-2xl)`),wg()()(),jc(496,`tr`)(497,`td`)(498,`code`),iO(499,`--spacing-glow-path`),wg()(),jc(500,`td`),iO(501,`Distância entre a borda e o caminho do brilho`),wg(),jc(502,`td`)(503,`code`),iO(504,`var(--border-width-sm)`),wg()()(),jc(505,`tr`)(506,`td`)(507,`code`),iO(508,`--blur-glow-halo`),wg()(),jc(509,`td`),iO(510,`Intensidade do desfoque do halo externo`),wg(),jc(511,`td`)(512,`code`),iO(513,`var(--spacing-sm)`),wg()()(),jc(514,`tr`)(515,`td`)(516,`code`),iO(517,`--opacity-glow-halo`),wg()(),jc(518,`td`),iO(519,`Opacidade do halo externo`),wg(),jc(520,`td`)(521,`code`),iO(522,`0.3`),wg()()(),jc(523,`tr`)(524,`td`)(525,`code`),iO(526,`--opacity-glow-halo-hover`),wg()(),jc(527,`td`),iO(528,`Opacidade do halo externo no estado hover`),wg(),jc(529,`td`)(530,`code`),iO(531,`0.5`),wg()()(),jc(532,`tr`)(533,`td`)(534,`code`),iO(535,`--opacity-glow-inner`),wg()(),jc(536,`td`),iO(537,`Opacidade do brilho interno no estado hover`),wg(),jc(538,`td`)(539,`code`),iO(540,`0.55`),wg()()(),jc(541,`tr`)(542,`td`)(543,`code`),iO(544,`--duration-glow-lap`),wg()(),jc(545,`td`),iO(546,`Duração de uma volta completa do brilho`),wg(),jc(547,`td`)(548,`code`),iO(549,`3200ms`),wg()()(),jc(550,`tr`)(551,`td`)(552,`code`),iO(553,`--duration-glow-step`),wg()(),jc(554,`td`),iO(555,`Intervalo entre os pontos da cauda do brilho`),wg(),jc(556,`td`)(557,`code`),iO(558,`30ms`),wg()()(),jc(559,`tr`)(560,`td`)(561,`code`),iO(562,`--duration-glow-state`),wg()(),jc(563,`td`),iO(564,`Duração da transição entre estados`),wg(),jc(565,`td`)(566,`code`),iO(567,`var(--duration-extra-slow)`),wg()()(),jc(568,`tr`)(569,`td`)(570,`code`),iO(571,`--timing-glow`),wg()(),jc(572,`td`),iO(573,`Curva de aceleração da transição entre estados`),wg(),jc(574,`td`)(575,`code`),iO(576,`var(--timing-exiting)`),wg()()(),jc(577,`tr`)(578,`td`)(579,`code`),iO(580,`--scale-glow-pressed`),wg()(),jc(581,`td`),iO(582,`Escala do botão no estado pressionado`),wg(),jc(583,`td`)(584,`code`),iO(585,`0.98`),wg()()(),jc(586,`tr`)(587,`td`)(588,`code`),iO(589,`--glow-trail-start`),wg()(),jc(590,`td`),iO(591,`Ângulo inicial da cauda (apenas no fallback*)`),wg(),jc(592,`td`)(593,`code`),iO(594,`252deg`),wg()()(),jc(595,`tr`)(596,`td`)(597,`code`),iO(598,`--spacing-glow-halo`),wg()(),jc(599,`td`),iO(600,`Expansão do halo externo (apenas no fallback*)`),wg(),jc(601,`td`)(602,`code`),iO(603,`var(--spacing-xxs)`),wg()()()()(),jc(604,`blockquote`)(605,`p`),iO(606,`* O brilho percorre a borda com velocidade constante via `),jc(607,`code`),iO(608,`offset-path`),wg(),iO(609,`. Em navegadores sem suporte a
`),jc(610,`code`),iO(611,`offset-path`),wg(),iO(612,` com formas b\xE1sicas (Chrome < 116, Firefox < 122 e Safari < 18), \xE9 exibido um gradiente
girando no centro do bot\xE3o.`),wg()(),jc(613,`blockquote`)(614,`p`),iO(615,`No estilo `),jc(616,`code`),iO(617,`glow`),wg(),iO(618,`, a anima\xE7\xE3o \xE9 interrompida quando o bot\xE3o est\xE1 desabilitado ou em carregamento,
e tamb\xE9m quando o sistema operacional do usu\xE1rio solicita redu\xE7\xE3o de movimento (`),jc(619,`code`),iO(620,`prefers-reduced-motion`),wg(),iO(621,`).`),wg()(),jc(622,`blockquote`)(623,`p`),iO(624,`No tema escuro, `),jc(625,`code`),iO(626,`--color-glow-ring`),wg(),iO(627,` e `),jc(628,`code`),iO(629,`--color-glow-inner`),wg(),iO(630,` usam `),jc(631,`code`),iO(632,`var(--color-neutral-dark-95)`),wg(),iO(633,`, para que o brilho
continue claro apesar da invers\xE3o da escala neutra. `),wg()()(),jc(634,`div`,9)(635,`h4`,10),iO(636,`Seletor`),wg(),jc(637,`pre`,11),iO(638,`<po-button
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
`),wg()(),jc(639,`h4`,12),iO(640,`Propriedades`),wg(),jc(641,`table`,13)(642,`tr`,14)(643,`th`,15),iO(644,`Nome`),wg(),jc(645,`th`,15),iO(646,`Tipo`),wg(),jc(647,`th`,15),iO(648,`Padrão`),wg(),jc(649,`th`,15),iO(650,`Descrição`),wg()(),jc(651,`tr`,16)(652,`td`,17)(653,`div`,18)(654,`span`,19),iO(655,` p-aria-label`),nu(656,`br`),wg()()(),jc(657,`td`,20)(658,`code`,21),iO(659,`string`),wg()(),jc(660,`td`,22),iO(661,`-`),wg(),jc(662,`td`,23)(663,`em`)(664,`strong`),iO(665,`(opcional)`),wg()(),jc(666,`p`),iO(667,`Define um `),jc(668,`code`),iO(669,`aria-label`),wg(),iO(670,` para o `),jc(671,`code`),iO(672,`po-button`),wg(),iO(673,`.`),wg(),jc(674,`p`),iO(675,`Caso esta propriedade não seja informada será considerada a label do botão.`),wg(),jc(676,`blockquote`)(677,`p`),iO(678,`Em caso de botões com apenas ícone a atribuição de valor à esta propriedade é muito importante para acessibilidade.`),wg()()()(),jc(679,`tr`,16)(680,`td`,17)(681,`div`,24)(682,`span`,25),iO(683,` (p-click)`),nu(684,`br`),wg()()(),jc(685,`td`,20)(686,`code`,26),iO(687,`EventEmitter`),wg()(),jc(688,`td`,22),iO(689,`-`),wg(),jc(690,`td`,23)(691,`p`),iO(692,`Ação que será executada quando o usuário clicar sobre o `),jc(693,`code`),iO(694,`po-button`),wg(),iO(695,`.`),wg()()(),jc(696,`tr`,16)(697,`td`,17)(698,`div`,18)(699,`span`,19),iO(700,` p-danger`),nu(701,`br`),wg()()(),jc(702,`td`,20)(703,`code`,27),iO(704,`boolean`),wg()(),jc(705,`td`,22),iO(706,`-`),wg(),jc(707,`td`,23)(708,`em`)(709,`strong`),iO(710,`(opcional)`),wg()(),jc(711,`p`),iO(712,`Deve ser usado em ações irreversíveis que o usuário precisa ter cuidado ao executá-la, como a exclusão de um registro.`),wg(),jc(713,`blockquote`)(714,`p`),iO(715,`A propriedade será inativada ao utilizar `),jc(716,`code`),iO(717,`p-kind="tertiary"`),wg(),iO(718,` ou `),jc(719,`code`),iO(720,`p-kind="glow"`),wg(),iO(721,`.`),wg()()()(),jc(722,`tr`,16)(723,`td`,17)(724,`div`,18)(725,`span`,19),iO(726,` p-disabled`),nu(727,`br`),wg()()(),jc(728,`td`,20)(729,`code`,27),iO(730,`boolean`),wg()(),jc(731,`td`,22)(732,`p`)(733,`code`),iO(734,`false`),wg()()(),jc(735,`td`,23)(736,`em`)(737,`strong`),iO(738,`(opcional)`),wg()(),jc(739,`p`),iO(740,`Desabilita o `),jc(741,`code`),iO(742,`po-button`),wg(),iO(743,` e não permite que o usuário interaja com o mesmo.`),wg()()(),jc(744,`tr`,16)(745,`td`,17)(746,`div`,18)(747,`span`,19),iO(748,` p-icon`),nu(749,`br`),wg()()(),jc(750,`td`,20)(751,`code`,21),iO(752,`string `),wg(),jc(753,`code`,28),iO(754,` TemplateRef<void>`),wg()(),jc(755,`td`,22),iO(756,`-`),wg(),jc(757,`td`,23)(758,`em`)(759,`strong`),iO(760,`(opcional)`),wg()(),jc(761,`p`),iO(762,`Ícone exibido ao lado esquerdo do label do botão.`),wg(),jc(763,`p`),iO(764,`É possível usar qualquer um dos ícones da `),jc(765,`a`,29),iO(766,`Biblioteca de ícones`),wg(),iO(767,`, conforme exemplo:`),wg(),jc(768,`pre`)(769,`code`),iO(770,`<po-button p-icon="an an-user" p-label="PO button"></po-button>
`),wg()(),jc(771,`p`),iO(772,`Também é possível utilizar outras fontes de ícones, por exemplo a biblioteca `),jc(773,`em`),iO(774,`Font Awesome`),wg(),iO(775,`, desde que a biblioteca
esteja carregada no projeto:`),wg(),jc(776,`pre`)(777,`code`),iO(778,`<po-button p-icon="fa fa-podcast" p-label="PO button"></po-button>
`),wg()(),jc(779,`p`),iO(780,`Outra opção seria a customização do ícone através do `),jc(781,`code`),iO(782,`TemplateRef`),wg(),iO(783,`, conforme exemplo abaixo:`),wg(),jc(784,`pre`)(785,`code`),iO(786,`<po-button [p-icon]="template" p-label="button template ionic"></po-button>

<ng-template #template>
 <ion-icon style="font-size: inherit" name="heart"></ion-icon>
</ng-template>
`),wg()(),jc(787,`blockquote`)(788,`p`),iO(789,`Para o ícone enquadrar corretamente, deve-se utilizar `),jc(790,`code`),iO(791,`font-size: inherit`),wg(),iO(792,` caso o ícone utilizado não aplique-o.`),wg()()()(),jc(793,`tr`,16)(794,`td`,17)(795,`div`,18)(796,`span`,19),iO(797,` p-kind`),nu(798,`br`),wg()()(),jc(799,`td`,20)(800,`code`,21),iO(801,`string`),wg()(),jc(802,`td`,22)(803,`p`)(804,`code`),iO(805,`secondary`),wg()()(),jc(806,`td`,23)(807,`em`)(808,`strong`),iO(809,`(opcional)`),wg()(),jc(810,`p`),iO(811,`Define o estilo visual do componente conforme valores especificados no enum `),jc(812,`code`),iO(813,`PoButtonKind`),wg(),iO(814,`:`),wg(),jc(815,`ul`)(816,`li`)(817,`code`),iO(818,`primary`),wg(),iO(819,`: destaca o botão, sendo recomendado para ações principais.`),wg(),jc(820,`li`)(821,`code`),iO(822,`secondary`),wg(),iO(823,`: estilo padrão, ideal para ações secundárias.`),wg(),jc(824,`li`)(825,`code`),iO(826,`tertiary`),wg(),iO(827,`: exibe o botão sem preenchimento no fundo, indicado para ações opcionais.`),wg(),jc(828,`li`)(829,`code`),iO(830,`glow`),wg(),iO(831,`: exibe o bot\xE3o em formato de p\xEDlula com um brilho animado percorrendo a borda, indicado para destacar
uma chamada para a\xE7\xE3o. Deve ser usado com modera\xE7\xE3o, preferencialmente em apenas um bot\xE3o por p\xE1gina.`),wg()(),jc(832,`blockquote`)(833,`p`),iO(834,`O estilo `),jc(835,`code`),iO(836,`glow`),wg(),iO(837,` é incompatível com a propriedade `),jc(838,`code`),iO(839,`p-danger`),wg(),iO(840,`.`),wg()()()(),jc(841,`tr`,16)(842,`td`,17)(843,`div`,18)(844,`span`,19),iO(845,` p-label`),nu(846,`br`),wg()()(),jc(847,`td`,20)(848,`code`,21),iO(849,`string`),wg()(),jc(850,`td`,22),iO(851,`-`),wg(),jc(852,`td`,23)(853,`em`)(854,`strong`),iO(855,`(opcional)`),wg()(),jc(856,`p`),iO(857,`Label do botão.`),wg()()(),jc(858,`tr`,16)(859,`td`,17)(860,`div`,18)(861,`span`,19),iO(862,` p-loading`),nu(863,`br`),wg()()(),jc(864,`td`,20)(865,`code`,27),iO(866,`boolean`),wg()(),jc(867,`td`,22)(868,`p`)(869,`code`),iO(870,`false`),wg()()(),jc(871,`td`,23)(872,`em`)(873,`strong`),iO(874,`(opcional)`),wg()(),jc(875,`p`),iO(876,`Exibe um ícone de carregamento à esquerda do `),jc(877,`em`),iO(878,`label`),wg(),iO(879,` do botão.`),wg(),jc(880,`blockquote`)(881,`p`),iO(882,`Quando esta propriedade estiver habilitada, desabilitará o botão.`),wg()()()(),jc(883,`tr`,16)(884,`td`,17)(885,`div`,18)(886,`span`,19),iO(887,` p-size`),nu(888,`br`),wg()()(),jc(889,`td`,20)(890,`code`,21),iO(891,`string`),wg()(),jc(892,`td`,22)(893,`p`)(894,`code`),iO(895,`medium`),wg()()(),jc(896,`td`,23)(897,`em`)(898,`strong`),iO(899,`(opcional)`),wg()(),jc(900,`p`),iO(901,`Define o tamanho do componente:`),wg(),jc(902,`ul`)(903,`li`)(904,`code`),iO(905,`small`),wg(),iO(906,`: altura de 32px (disponível apenas para acessibilidade AA).`),wg(),jc(907,`li`)(908,`code`),iO(909,`medium`),wg(),iO(910,`: altura de 44px.`),wg(),jc(911,`li`)(912,`code`),iO(913,`large`),wg(),iO(914,`: altura de 56px.`),wg()(),jc(915,`blockquote`)(916,`p`),iO(917,`Caso a acessibilidade AA não esteja configurada, o tamanho `),jc(918,`code`),iO(919,`medium`),wg(),iO(920,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),jc(921,`a`,30),iO(922,`po-theme`),wg(),iO(923,`.`),wg()()()(),jc(924,`tr`,16)(925,`td`,17)(926,`div`,18)(927,`span`,19),iO(928,` p-tabindex`),nu(929,`br`),wg()()(),jc(930,`td`,20)(931,`code`,31),iO(932,`number `),wg(),jc(933,`code`,21),iO(934,` string`),wg()(),jc(935,`td`,22),iO(936,`-`),wg(),jc(937,`td`,23)(938,`em`)(939,`strong`),iO(940,`(opcional)`),wg()(),jc(941,`p`),iO(942,`Define o `),jc(943,`code`),iO(944,`tabindex`),wg(),iO(945,` do elemento `),jc(946,`code`),iO(947,`<button>`),wg(),iO(948,` nativo interno.`),wg(),jc(949,`p`),iO(950,`Use `),jc(951,`code`),iO(952,`[tabindex]="-1"`),wg(),iO(953,` para remover o botão da ordem de foco do teclado.`),wg()()(),jc(954,`tr`,16)(955,`td`,17)(956,`div`,18)(957,`span`,19),iO(958,` p-type`),nu(959,`br`),wg()()(),jc(960,`td`,20)(961,`code`,32),iO(962,`PoButtonType`),wg()(),jc(963,`td`,22)(964,`p`)(965,`code`),iO(966,`PoButtonType.Button`),wg()()(),jc(967,`td`,23)(968,`em`)(969,`strong`),iO(970,`(opcional)`),wg()(),jc(971,`p`),iO(972,`Define o tipo do botão.`),wg()()()(),jc(973,`h3`,12),iO(974,`Métodos`),wg(),jc(975,`table`,33)(976,`tr`,16)(977,`th`,34)(978,`div`,18)(979,`h4`)(980,`span`,19),iO(981,` focus `),wg()()()()(),jc(982,`tr`,23)(983,`td`,23)(984,`p`),iO(985,`Função que atribui foco ao componente.`),wg(),jc(986,`p`),iO(987,`Para utilizá-la é necessário ter a instância do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:`),wg(),jc(988,`pre`)(989,`code`),iO(990,`import { PoButtonComponent } from '@po-ui/ng-components';

...

@ViewChild(PoButtonComponent, { static: true }) button: PoButtonComponent;

focusButton() {
  this.button.focus();
}
`),wg()()()()(),nu(991,`br`),jc(992,`h3`),iO(993,`Enums`),wg(),jc(994,`h4`,4)(995,`code`,5),iO(996,`PoButtonKind`),wg()(),jc(997,`div`,2)(998,`p`),iO(999,`Estilos disponíveis do button.`),wg()(),jc(1e3,`h4`,12),iO(1001,`Propriedades`),wg(),jc(1002,`table`,13)(1003,`tr`,14)(1004,`th`,15),iO(1005,`Nome`),wg(),jc(1006,`th`,15),iO(1007,`Descrição`),wg()(),jc(1008,`tr`,16)(1009,`td`,17)(1010,`div`,18)(1011,`span`,19),iO(1012,` primary`),nu(1013,`br`),wg()()(),jc(1014,`td`,23)(1015,`p`),iO(1016,`Estilo primário, usado para ações principais que requerem maior destaque.`),wg()()(),jc(1017,`tr`,16)(1018,`td`,17)(1019,`div`,18)(1020,`span`,19),iO(1021,` secondary`),nu(1022,`br`),wg()()(),jc(1023,`td`,23)(1024,`p`),iO(1025,`Estilo secundário, usado como padrão, para ações comuns.`),wg()()(),jc(1026,`tr`,16)(1027,`td`,17)(1028,`div`,18)(1029,`span`,19),iO(1030,` tertiary`),nu(1031,`br`),wg()()(),jc(1032,`td`,23)(1033,`p`),iO(1034,`Estilo terciário, ideal para ações menos importantes, sem fundo preenchido.`),wg()()(),jc(1035,`tr`,16)(1036,`td`,17)(1037,`div`,18)(1038,`span`,19),iO(1039,` glow`),nu(1040,`br`),wg()()(),jc(1041,`td`,23)(1042,`p`),iO(1043,`Estilo com brilho animado que percorre a borda do botão, usado para destacar uma chamada para ação.`),wg(),jc(1044,`blockquote`)(1045,`p`),iO(1046,`Incompatível com a propriedade `),jc(1047,`code`),iO(1048,`p-danger`),wg(),iO(1049,`.`),wg()()()()(),jc(1050,`h4`,4)(1051,`code`,5),iO(1052,`PoButtonType`),wg()(),jc(1053,`div`,2)(1054,`p`),iO(1055,`Enumeração que define os tipos possíveis para o `),jc(1056,`code`),iO(1057,`PoButtonComponent`),wg(),iO(1058,`. Estes tipos est\xE3o relacionados ao comportamento
do bot\xE3o quando utilizado dentro de um formul\xE1rio HTML.`),wg()(),jc(1059,`h4`,12),iO(1060,`Propriedades`),wg(),jc(1061,`table`,13)(1062,`tr`,14)(1063,`th`,15),iO(1064,`Nome`),wg(),jc(1065,`th`,15),iO(1066,`Descrição`),wg()(),jc(1067,`tr`,16)(1068,`td`,17)(1069,`div`,18)(1070,`span`,19),iO(1071,` Submit`),nu(1072,`br`),wg()()(),jc(1073,`td`,23)(1074,`p`),iO(1075,`Define o botão como do tipo `),jc(1076,`code`),iO(1077,`submit`),wg(),iO(1078,`. Quando clicado, o formul\xE1rio \xE9 enviado automaticamente,
disparando o evento `),jc(1079,`code`),iO(1080,`submit`),wg(),iO(1081,`.`),wg()()(),jc(1082,`tr`,16)(1083,`td`,17)(1084,`div`,18)(1085,`span`,19),iO(1086,` Button`),nu(1087,`br`),wg()()(),jc(1088,`td`,23)(1089,`p`),iO(1090,`Define o botão como do tipo `),jc(1091,`code`),iO(1092,`button`),wg(),iO(1093,`. Este tipo de bot\xE3o n\xE3o possui comportamento padr\xE3o associado
e \xE9 utilizado principalmente para a\xE7\xF5es program\xE1ticas como cliques e disparos de eventos customizados.`),wg()()(),jc(1094,`tr`,16)(1095,`td`,17)(1096,`div`,18)(1097,`span`,19),iO(1098,` Reset`),nu(1099,`br`),wg()()(),jc(1100,`td`,23)(1101,`p`),iO(1102,`Define o botão como do tipo `),jc(1103,`code`),iO(1104,`reset`),wg(),iO(1105,`. Quando clicado, redefine os campos do formul\xE1rio ao qual pertence
para seus valores iniciais.`),wg()()()()())},dependencies:[P],encapsulation:2,changeDetection:1})}return o})();function Oe(o,G){if(o&1){let r=Sx();jc(0,`po-tab`,4),mt(`p-click`,function(){y_(r);let i=xx();return v_(i.changeTab(`web`))}),nu(1,`sample-po-button-basic-view`)(2,`sample-po-button-labs-view`)(3,`sample-po-button-social-network-view`),wg()}if(o&2){let r=xx();jE(`p-active`,r.activeTab===`web`)}}var Me=[{path:``,component:(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(r,a){this.route=r,this.router=a}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let a=r.view;this.activeTab=a||(this.samplesLength>0?`web`:`doc`),this.hidePoWebSample=this.samplesLength===0})}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:`merge`}),this.activeTab=r}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(a){return new(a||o)(b(ir),b(Sn))};static ɵcmp=Zn({type:o,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:3,consts:[[`p-title`,`Button`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Exemplos`,3,`p-active`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-active`]],template:function(a,i){a&1&&(jc(0,`po-page-default`,0)(1,`po-tabs`,1),px(2,Oe,4,1,`po-tab`,2),jc(3,`po-tab`,3),mt(`p-click`,function(){return i.changeTab(`doc`)}),nu(4,`sample-po-button-doc`),wg()()()),a&2&&(jE(`p-actions`,i.actions),rg(2),mx(i.hidePoWebSample?-1:2),rg(),jE(`p-active`,i.activeTab===`doc`))},dependencies:[Vze,lre,ure,pe,ue,be,Se],encapsulation:2,changeDetection:1})}return o})()}];var xe=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵmod=pe$1({type:o});static ɵinj=ue$1({imports:[C1.forChild(Me),C1]})}return o})();var ct=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵmod=pe$1({type:o});static ɵinj=ue$1({imports:[M,xe]})}return o})();export{ct as DocPoButtonModule};