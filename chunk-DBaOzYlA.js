import{n as s,t as r}from"./chunk-zystk1pz.js";import{$n as Ak,Ar as Ig,Ei as WV,Er as H_,Fi as Yb,Fr as Jn,H as Mze,Hi as ar,Ja as vt,Li as ZO,Mn as tre,Mr as Jc,Mt as are,Ni as Y0,On as sie,Ot as Zte,Pt as bae,Ri as Zg,Rr as Kb,Ti as W0,U as Nf,Vi as _u,Wt as d4,Yi as eF,an as j4,di as RZ,ea as ge$1,er as An,fi as Rb,gi as Tk,hi as TZ,j as I4,jr as JL,ka as qL,kr as I,no as yk,nr as BO,or as Bk,qi as de,qr as NZ,tt as Ru,va as nk,vn as oi,wa as p,xi as VO,ya as nm,yi as U_,zt as c4}from"./chunk-BL0ij1th.js";import{n as P,t as M}from"./main-3VBI2GXJ.js";var se=(()=>{class o{onClick(){alert(`Po Button!`)}static ɵfac=function(a){return new(a||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-button-basic`]],standalone:!1,decls:1,vars:0,consts:[[`p-label`,`PO Button`,3,`p-click`]],template:function(a,i){a&1&&(Jc(0,`po-button`,0),vt(`p-click`,function(){return i.onClick()}),Zg())},dependencies:[oi],encapsulation:2,changeDetection:1})}return o})();var fe=o=>({"docs-sample-code-tabs":o});var pe=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-button-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,i){a&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Button Basic`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return i.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-button-basic/sample-po-button-basic.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<po-button p-label="PO Button" (p-click)="onClick()"> </po-button>
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-button-basic/sample-po-button-basic.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

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
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-button-basic`),Zg(),_u(23,`hr`)),a&2&&(Ig(5),yk(`po-icon `+i.sampleCodeButtonIcon),Ig(),nm(` `,i.sampleCodeButtonLabel),Ig(),Rb(`ngClass`,Bk(4,fe,i.hideSampleCodeTabs)))},dependencies:[eF,P,tre,are,se],encapsulation:2,changeDetection:1})}return o})();var ce=(()=>{class o{poDialog=p(sie);label;kind;icon;size;properties;type;propertiesOptions=[{value:`disabled`,label:`Disabled`},{value:`loading`,label:`Loading`},{value:`danger`,label:`Danger`}];iconsOptions=[{label:`an an-newspaper`,value:`an an-newspaper`},{label:`an an-calendar-dots`,value:`an an-calendar-dots`},{label:`an an-user`,value:`an an-user`},{label:`fa fa-podcast`,value:`fa fa-podcast`}];kindsOptions=[{label:`primary`,value:`primary`},{label:`secondary`,value:`secondary`},{label:`tertiary`,value:`tertiary`},{label:`glow`,value:`glow`}];kindsWithoutDanger=[`tertiary`,`glow`];sizesOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`},{label:`large`,value:`large`}];typeOptions=[{label:`button`,value:d4.Button},{label:`submit`,value:d4.Submit},{label:`reset`,value:d4.Reset}];ngOnInit(){this.restore()}buttonClick(){this.poDialog.alert({title:`PO Button`,message:`Hello PO World!!!`})}propertiesChange(r$1){let a=!!r$1&&this.properties.includes(`danger`);this.setKindsWithoutDangerDisabled(a),this.sizesOptions[0]=s(r({},this.sizesOptions[0]),{disabled:!1}),this.sizesOptions[1]=s(r({},this.sizesOptions[1]),{disabled:!1})}verifyDisabled(r){let a=[...this.propertiesOptions];this.kindsWithoutDanger.includes(r)?(a[2]={value:`danger`,label:`Danger`,disabled:!0},this.propertiesOptions=a):(a[2]={value:`danger`,label:`Danger`,disabled:!1},this.propertiesOptions=a)}restore(){this.label=void 0,this.kind=`secondary`,this.size=`medium`,this.icon=void 0,this.type=d4.Button,this.properties=[],this.setKindsWithoutDangerDisabled(!1),this.sizesOptions[0]=s(r({},this.sizesOptions[0]),{disabled:!1}),this.sizesOptions[1]=s(r({},this.sizesOptions[1]),{disabled:!1})}setKindsWithoutDangerDisabled(r$2){this.kindsOptions=this.kindsOptions.map(a=>this.kindsWithoutDanger.includes(a.value)?s(r({},a),{disabled:r$2}):a)}static ɵfac=function(a){return new(a||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-button-labs`]],standalone:!1,decls:14,vars:19,consts:[[`f`,`ngForm`],[1,`po-row`],[1,`po-sm-12`,3,`p-click`,`p-disabled`,`p-icon`,`p-label`,`p-loading`,`p-size`,`p-danger`,`p-kind`,`p-type`],[`name`,`label`,`p-clean`,``,`p-label`,`Label`,1,`po-lg-6`,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`properties`,`p-columns`,`4`,`p-label`,`Properties`,1,`po-lg-12`,3,`ngModelChange`,`p-change`,`ngModel`,`p-options`],[`name`,`icon`,`p-columns`,`4`,`p-label`,`Icon`,1,`po-lg-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`kind`,`p-columns`,`4`,`p-label`,`Kind`,1,`po-lg-12`,3,`ngModelChange`,`p-change`,`ngModel`,`p-options`],[`name`,`type`,`p-columns`,`4`,`p-label`,`Type`,1,`po-lg-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`size`,`p-columns`,`4`,`p-label`,`Size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-lg-12`,3,`ngModelChange`,`p-change`,`ngModel`,`p-options`],[`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`]],template:function(a,i){if(a&1){let E=ZO();Jc(0,`div`,1)(1,`po-button`,2),vt(`p-click`,function(){return i.buttonClick()}),Zg()(),_u(2,`po-divider`),Jc(3,`form`,null,0)(5,`div`,1)(6,`po-input`,3),W0(),Kb(`ngModelChange`,function(d){return U_(E),Ak(i.label,d)||(i.label=d),H_(d)}),Zg()(),Jc(7,`po-checkbox-group`,4),W0(),Kb(`ngModelChange`,function(d){return U_(E),Ak(i.properties,d)||(i.properties=d),H_(d)}),vt(`p-change`,function(d){return i.propertiesChange(d)}),Zg(),Jc(8,`po-radio-group`,5),W0(),Kb(`ngModelChange`,function(d){return U_(E),Ak(i.icon,d)||(i.icon=d),H_(d)}),Zg(),Jc(9,`po-radio-group`,6),W0(),Kb(`ngModelChange`,function(d){return U_(E),Ak(i.kind,d)||(i.kind=d),H_(d)}),vt(`p-change`,function(d){return i.verifyDisabled(d)}),Zg(),Jc(10,`po-radio-group`,7),W0(),Kb(`ngModelChange`,function(d){return U_(E),Ak(i.type,d)||(i.type=d),H_(d)}),Zg(),Jc(11,`po-radio-group`,8),W0(),Kb(`ngModelChange`,function(d){return U_(E),Ak(i.size,d)||(i.size=d),H_(d)}),vt(`p-change`,function(d){return i.verifyDisabled(d)}),Zg(),Jc(12,`div`,1)(13,`po-button`,9),vt(`p-click`,function(){return i.restore()}),Zg()()()}a&2&&(Ig(),Rb(`p-disabled`,i.properties.includes(`disabled`))(`p-icon`,i.icon)(`p-label`,i.label)(`p-loading`,i.properties.includes(`loading`))(`p-size`,i.size)(`p-danger`,i.properties.includes(`danger`))(`p-kind`,i.kind)(`p-type`,i.type),Ig(5),Yb(`ngModel`,i.label),Y0(),Ig(),Yb(`ngModel`,i.properties),Rb(`p-options`,i.propertiesOptions),Y0(),Ig(),Yb(`ngModel`,i.icon),Rb(`p-options`,i.iconsOptions),Y0(),Ig(),Yb(`ngModel`,i.kind),Rb(`p-options`,i.kindsOptions),Y0(),Ig(),Yb(`ngModel`,i.type),Rb(`p-options`,i.typeOptions),Y0(),Ig(),Yb(`ngModel`,i.size),Rb(`p-options`,i.sizesOptions),Y0())},dependencies:[NZ,TZ,RZ,JL,qL,oi,Nf,I4,j4,Zte],encapsulation:2,changeDetection:1})}return o})();var ye=o=>({"docs-sample-code-tabs":o});var ue=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-button-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,i){a&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Button Labs`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return i.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-button-labs/sample-po-button-labs.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<div class="po-row">
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
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-button-labs/sample-po-button-labs.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-button-labs`),Zg(),_u(23,`hr`)),a&2&&(Ig(5),yk(`po-icon `+i.sampleCodeButtonIcon),Ig(),nm(` `,i.sampleCodeButtonLabel),Ig(),Rb(`ngClass`,Bk(4,ye,i.hideSampleCodeTabs)))},dependencies:[eF,P,tre,are,ce],encapsulation:2,changeDetection:1})}return o})();function we(o,G){if(o&1){let r=ZO();Jc(0,`div`,0),_u(1,`po-avatar`,2),Jc(2,`div`,3)(3,`span`,4),Tk(4),Zg(),Jc(5,`span`,5),Tk(6),Zg(),Jc(7,`span`,5),Tk(8),Zg()()(),Jc(9,`div`,0)(10,`po-button`,6),vt(`p-click`,function(){U_(r);let i=nk();return H_(i.notification(`added`,`success`))}),Zg(),Jc(11,`po-button`,7),vt(`p-click`,function(){U_(r);let i=nk();return H_(i.notification(`ignored`,`warning`))}),Zg(),Jc(12,`po-button`,8),vt(`p-click`,function(){U_(r);let i=nk();return H_(i.notification(`blocked`,`information`))}),Zg()()}if(o&2){let r=nk();Ig(),Rb(`p-src`,r.userAvatar),Ig(3),nm(` `,r.currentFriend.name,` `),Ig(2),nm(` `,r.currentFriend.mutualFriends,` mutual friends `),Ig(2),nm(` Resides in `,r.currentFriend.reside,` `)}}function Pe(o,G){o&1&&(Jc(0,`div`,0)(1,`span`,9),Tk(2,`Congratulations TOTVS, no more requests!`),Zg()())}var be=(()=>{class o{poNotification=p(Ru);currentFriend;userAvatar=`https://lorempixel.com/144/144/`;newFriends=[{name:`Mr. Dev PO`,mutualFriends:`7`,reside:`Mountain View, CA`},{name:`Mr. AI PO`,mutualFriends:`99+`,reside:`New York City, NY`},{name:`Mr. UX PO`,mutualFriends:`14`,reside:`Los Angeles, CA`}];indexFriend=0;ngOnInit(){this.setCurrentFriend(0)}notification(r,a){this.poNotification[a](`User ${r} successfully!`),this.indexFriend++,this.setCurrentFriend(this.indexFriend)}setCurrentFriend(r){this.currentFriend=this.newFriends[r]}static ɵfac=function(a){return new(a||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-button-social-network`]],standalone:!1,decls:4,vars:1,consts:[[1,`po-row`],[`p-title`,`Friend Request`,1,`po-lg-6`],[`p-size`,`lg`,1,`po-md-4`,3,`p-src`],[1,`po-md-8`],[1,`po-sm-12`,`po-font-subtitle`],[1,`po-sm-12`,`po-font-text`],[`p-icon`,`fa fa-check-circle`,`p-label`,`Confirm`,1,`po-md-4`,3,`p-click`],[`p-icon`,`fa fa-eye-slash`,`p-label`,`Ignore`,1,`po-md-4`,3,`p-click`],[`p-icon`,`fa fa-ban`,`p-label`,`Block`,1,`po-md-4`,3,`p-click`],[1,`po-lg-8`,`po-font-subtitle`]],template:function(a,i){a&1&&(Jc(0,`div`,0)(1,`po-widget`,1),VO(2,we,13,4)(3,Pe,3,0,`div`,0),Zg()()),a&2&&(Ig(2),BO(i.currentFriend?2:3))},dependencies:[c4,oi,bae],encapsulation:2,changeDetection:1})}return o})();var De=o=>({"docs-sample-code-tabs":o});var Ee=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-button-social-network-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,i){a&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Button Social Network`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return i.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-button-social-network/sample-po-button-social-network.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<div class="po-row">
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
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-button-social-network/sample-po-button-social-network.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-button-social-network`),Zg(),_u(23,`hr`)),a&2&&(Ig(5),yk(`po-icon `+i.sampleCodeButtonIcon),Ig(),nm(` `,i.sampleCodeButtonLabel),Ig(),Rb(`ngClass`,Bk(4,De,i.hideSampleCodeTabs)))},dependencies:[eF,P,tre,are,be],encapsulation:2,changeDetection:1})}return o})();var ge=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-button-doc`]],standalone:!1,decls:950,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://www.w3.org/WAI/ARIA/apg/#keyboard-interaction-3`],[`href`,`https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance-enhanced`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`string`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`pan`,``,1,`docs-api-property-type`,`TemplateRef<void>`],[`href`,`https://po-ui.io/icons`],[`href`,`https://po-ui.io/documentation/po-theme`],[`pan`,``,1,`docs-api-property-type`,`number`],[`pan`,``,1,`docs-api-property-type`,`PoButtonType`],[1,`docs-api-method-table`],[`colspan`,`2`,1,`docs-api-properties-name-cell`]],template:function(a,i){a&1&&(Jc(0,`div`,0)(1,`p`,1)(2,`code`),Tk(3,`import { PoButtonModule } from '@po-ui/ng-components';`),Zg()(),Jc(4,`div`,2)(5,`p`),Tk(6,`Módulo do componente po-button.`),Zg()(),Jc(7,`h3`,3),Tk(8,`Componente`),Zg(),Jc(9,`h4`,4)(10,`code`,5),Tk(11,`PoButtonComponent`),Zg()(),Jc(12,`div`,2)(13,`p`),Tk(14,`O `),Jc(15,`code`),Tk(16,`po-button`),Zg(),Tk(17,` permite que o usuário execute ações predefinidas pelo desenvolvedor.`),Zg(),Jc(18,`p`),Tk(19,`Através dos tipos, é possível identificar a importância de cada ação.`),Zg(),Jc(20,`h4`),Tk(21,`Boas práticas`),Zg(),Jc(22,`ul`)(23,`li`),Tk(24,`Evite `),Jc(25,`code`),Tk(26,`labels`),Zg(),Tk(27,` extensos que quebram o layout do `),Jc(28,`code`),Tk(29,`po-button`),Zg(),Tk(30,`, use `),Jc(31,`code`),Tk(32,`labels`),Zg(),Tk(33,` diretos, curtos e intuitivos.`),Zg(),Jc(34,`li`),Tk(35,`Utilize apenas um `),Jc(36,`code`),Tk(37,`po-button`),Zg(),Tk(38,` configurado como `),Jc(39,`code`),Tk(40,`primary`),Zg(),Tk(41,` por página.`),Zg(),Jc(42,`li`),Tk(43,`Para ações irreversíveis use sempre a propriedade `),Jc(44,`code`),Tk(45,`p-danger`),Zg(),Tk(46,`.`),Zg()(),Jc(47,`h4`),Tk(48,`Acessibilidade tratada no componente`),Zg(),Jc(49,`p`),Tk(50,`Algumas diretrizes de acessibilidade já são tratadas no componente, internamente, e não podem ser alteradas pelo proprietário do conteúdo. São elas:`),Zg(),Jc(51,`ul`)(52,`li`),Tk(53,`Quando em foco, o botão é ativado usando as teclas de Espaço e Enter do teclado. `),Jc(54,`a`,6),Tk(55,`W3C WAI-ARIA 3.5 Button - Keyboard Interaction`),Zg()(),Jc(56,`li`),Tk(57,`A área do foco precisar ter uma espessura de pelo menos 2 pixels CSS e o foco não pode ficar escondido por outros elementos da tela. `),Jc(58,`a`,7),Tk(59,`WCAG 2.4.12: Focus Appearance`),Zg()()(),Jc(60,`h4`),Tk(61,`Tokens customizáveis`),Zg(),Jc(62,`p`),Tk(63,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),Zg(),Jc(64,`blockquote`)(65,`p`),Tk(66,`Para maiores informações, acesse o guia `),Jc(67,`a`,8),Tk(68,`Personalizando o Tema Padrão com Tokens CSS`),Zg(),Tk(69,`.`),Zg()(),Jc(70,`table`)(71,`thead`)(72,`tr`)(73,`th`),Tk(74,`Propriedade`),Zg(),Jc(75,`th`),Tk(76,`Descrição`),Zg(),Jc(77,`th`),Tk(78,`Valor Padrão`),Zg()()(),Jc(79,`tbody`)(80,`tr`)(81,`td`)(82,`code`),Tk(83,`--font-family`),Zg()(),Jc(84,`td`),Tk(85,`Família tipográfica usada`),Zg(),Jc(86,`td`)(87,`code`),Tk(88,`var(--font-family-theme)`),Zg()()(),Jc(89,`tr`)(90,`td`)(91,`code`),Tk(92,`--font-size`),Zg()(),Jc(93,`td`),Tk(94,`Tamanho da fonte`),Zg(),Jc(95,`td`)(96,`code`),Tk(97,`var(--font-size-default)`),Zg()()(),Jc(98,`tr`)(99,`td`)(100,`code`),Tk(101,`--font-weight`),Zg()(),Jc(102,`td`),Tk(103,`Peso da fonte`),Zg(),Jc(104,`td`)(105,`code`),Tk(106,`var(--font-weight-bold)`),Zg()()(),Jc(107,`tr`)(108,`td`)(109,`code`),Tk(110,`--line-height`),Zg()(),Jc(111,`td`),Tk(112,`Tamanho da label`),Zg(),Jc(113,`td`)(114,`code`),Tk(115,`var(--line-height-none)`),Zg()()(),Jc(116,`tr`)(117,`td`)(118,`code`),Tk(119,`--border-radius`),Zg()(),Jc(120,`td`),Tk(121,`Contém o valor do raio dos cantos do elemento\xA0`),Zg(),Jc(122,`td`)(123,`code`),Tk(124,`var(--border-radius-md)`),Zg()()(),Jc(125,`tr`)(126,`td`)(127,`code`),Tk(128,`--border-width`),Zg()(),Jc(129,`td`),Tk(130,`Contém o valor da largura dos cantos do elemento\xA0`),Zg(),Jc(131,`td`)(132,`code`),Tk(133,`var(--border-width-md)`),Zg()()(),Jc(134,`tr`)(135,`td`)(136,`code`),Tk(137,`--padding`),Zg()(),Jc(138,`td`),Tk(139,`Preenchimento`),Zg(),Jc(140,`td`)(141,`code`),Tk(142,`0 1em`),Zg()()(),Jc(143,`tr`)(144,`td`)(145,`strong`),Tk(146,`Danger`),Zg()(),_u(147,`td`)(148,`td`),Zg(),Jc(149,`tr`)(150,`td`)(151,`code`),Tk(152,`--text-color-danger`),Zg()(),Jc(153,`td`),Tk(154,`Cor do texto no estado danger`),Zg(),Jc(155,`td`)(156,`code`),Tk(157,`var(--color-neutral-light-00)`),Zg()()(),Jc(158,`tr`)(159,`td`)(160,`code`),Tk(161,`--color-button-danger`),Zg()(),Jc(162,`td`),Tk(163,`Cor do botão no estado danger`),Zg(),Jc(164,`td`)(165,`code`),Tk(166,`var(--color-feedback-negative-dark)`),Zg()()(),Jc(167,`tr`)(168,`td`)(169,`code`),Tk(170,`--color-danger-hover`),Zg()(),Jc(171,`td`),Tk(172,`Cor de hover no estado danger`),Zg(),Jc(173,`td`)(174,`code`),Tk(175,`var(--color-feedback-negative-darker)`),Zg()()(),Jc(176,`tr`)(177,`td`)(178,`code`),Tk(179,`--color-danger-pressed`),Zg()(),Jc(180,`td`),Tk(181,`Cor pressionada no estado danger`),Zg(),Jc(182,`td`)(183,`code`),Tk(184,`var(--color-feedback-negative-darkest)`),Zg()()(),Jc(185,`tr`)(186,`td`)(187,`code`),Tk(188,`--background-danger-hover`),Zg()(),Jc(189,`td`),Tk(190,`Cor de background de hover no estado danger`),Zg(),Jc(191,`td`)(192,`code`),Tk(193,`var(--color-feedback-negative-lighter)`),Zg()()(),Jc(194,`tr`)(195,`td`)(196,`code`),Tk(197,`--border-color-danger-hover`),Zg()(),Jc(198,`td`),Tk(199,`Cor da borda de hover no estado danger`),Zg(),Jc(200,`td`)(201,`code`),Tk(202,`var(--color-feedback-negative-darkest)`),Zg()()(),Jc(203,`tr`)(204,`td`)(205,`code`),Tk(206,`--background-danger-pressed`),Zg()(),Jc(207,`td`),Tk(208,`Cor de background pressionado no estado danger`),Zg(),Jc(209,`td`)(210,`code`),Tk(211,`var(--color-feedback-negative-light)`),Zg()()(),Jc(212,`tr`)(213,`td`)(214,`code`),Tk(215,`--background-color-button-danger`),Zg(),Tk(216,`\xA0`),Zg(),Jc(217,`td`),Tk(218,`Cor de background do botão no estado danger`),Zg(),Jc(219,`td`)(220,`code`),Tk(221,`var(--color-transparent)`),Zg()()(),Jc(222,`tr`)(223,`td`)(224,`strong`),Tk(225,`Default Values`),Zg()(),_u(226,`td`)(227,`td`),Zg(),Jc(228,`tr`)(229,`td`)(230,`code`),Tk(231,`--text-color`),Zg()(),Jc(232,`td`),Tk(233,`Cor do texto`),Zg(),Jc(234,`td`)(235,`code`),Tk(236,`var(--color-neutral-light-00)`),Zg()()(),Jc(237,`tr`)(238,`td`)(239,`code`),Tk(240,`--color`),Zg()(),Jc(241,`td`),Tk(242,`Cor principal do botão`),Zg(),Jc(243,`td`)(244,`code`),Tk(245,`var(--color-action-default)`),Zg()()(),Jc(246,`tr`)(247,`td`)(248,`code`),Tk(249,`--background-color`),Zg()(),Jc(250,`td`),Tk(251,`Cor de background`),Zg(),Jc(252,`td`)(253,`code`),Tk(254,`var(--color-transparent)`),Zg()()(),Jc(255,`tr`)(256,`td`)(257,`code`),Tk(258,`--border-color`),Zg()(),Jc(259,`td`),Tk(260,`Cor da borda`),Zg(),Jc(261,`td`)(262,`code`),Tk(263,`var(--color-transparent)`),Zg()()(),Jc(264,`tr`)(265,`td`)(266,`code`),Tk(267,`--shadow`),Zg()(),Jc(268,`td`),Tk(269,`Contém o valor da sombra do elemento`),Zg(),Jc(270,`td`)(271,`code`),Tk(272,`var(--shadow-none)`),Zg()()(),Jc(273,`tr`)(274,`td`)(275,`strong`),Tk(276,`Hover`),Zg()(),_u(277,`td`)(278,`td`),Zg(),Jc(279,`tr`)(280,`td`)(281,`code`),Tk(282,`--color-hover`),Zg()(),Jc(283,`td`),Tk(284,`Cor principal no estado hover`),Zg(),Jc(285,`td`)(286,`code`),Tk(287,`var(--color-action-hover)`),Zg()()(),Jc(288,`tr`)(289,`td`)(290,`code`),Tk(291,`--background-hover`),Zg()(),Jc(292,`td`),Tk(293,`Cor de background no estado hover`),Zg(),Jc(294,`td`)(295,`code`),Tk(296,`var(--color-brand-01-lighter)`),Zg()()(),Jc(297,`tr`)(298,`td`)(299,`code`),Tk(300,`--border-color-hover`),Zg()(),Jc(301,`td`),Tk(302,`Cor da borda no estado hover`),Zg(),Jc(303,`td`)(304,`code`),Tk(305,`var(--color-brand-01-darkest)`),Zg()()(),Jc(306,`tr`)(307,`td`)(308,`strong`),Tk(309,`Focused`),Zg()(),_u(310,`td`)(311,`td`),Zg(),Jc(312,`tr`)(313,`td`)(314,`code`),Tk(315,`--outline-color-focused`),Zg()(),Jc(316,`td`),Tk(317,`Cor do outline do estado de focus`),Zg(),Jc(318,`td`)(319,`code`),Tk(320,`var(--color-action-focus)`),Zg()()(),Jc(321,`tr`)(322,`td`)(323,`strong`),Tk(324,`Pressed`),Zg()(),_u(325,`td`)(326,`td`),Zg(),Jc(327,`tr`)(328,`td`)(329,`code`),Tk(330,`--color-pressed`),Zg()(),Jc(331,`td`),Tk(332,`Cor principal no estado de pressionado`),Zg(),Jc(333,`td`)(334,`code`),Tk(335,`var(--color-action-pressed)`),Zg()()(),Jc(336,`tr`)(337,`td`)(338,`code`),Tk(339,`--background-pressed`),Zg()(),Jc(340,`td`),Tk(341,`Cor de background no estado de pressionado\xA0`),Zg(),Jc(342,`td`)(343,`code`),Tk(344,`var(--color-brand-01-light)`),Zg()()(),Jc(345,`tr`)(346,`td`)(347,`strong`),Tk(348,`Disabled`),Zg()(),_u(349,`td`)(350,`td`),Zg(),Jc(351,`tr`)(352,`td`)(353,`code`),Tk(354,`--text-color-disabled`),Zg()(),Jc(355,`td`),Tk(356,`Cor do texto no estado disabled`),Zg(),Jc(357,`td`)(358,`code`),Tk(359,`var(--color-neutral-dark-70)`),Zg()()(),Jc(360,`tr`)(361,`td`)(362,`code`),Tk(363,`--color-disabled`),Zg()(),Jc(364,`td`),Tk(365,`Cor principal no estado disabled`),Zg(),Jc(366,`td`)(367,`code`),Tk(368,`var(--color-action-disabled)`),Zg()()(),Jc(369,`tr`)(370,`td`)(371,`code`),Tk(372,`--background-color-disabled`),Zg()(),Jc(373,`td`),Tk(374,`Cor de background no estado disabled`),Zg(),Jc(375,`td`)(376,`code`),Tk(377,`var(--color-transparent)`),Zg()()(),Jc(378,`tr`)(379,`td`)(380,`strong`),Tk(381,`Glow`),Zg(),Tk(382,` (`),Jc(383,`code`),Tk(384,`p-kind="glow"`),Zg(),Tk(385,`)`),Zg(),_u(386,`td`)(387,`td`),Zg(),Jc(388,`tr`)(389,`td`)(390,`code`),Tk(391,`--color-glow-highlight`),Zg()(),Jc(392,`td`),Tk(393,`Cor do reflexo no estado hover`),Zg(),Jc(394,`td`)(395,`code`),Tk(396,`var(--color-brand-01-light)`),Zg()()(),Jc(397,`tr`)(398,`td`)(399,`code`),Tk(400,`--color-glow-ring`),Zg()(),Jc(401,`td`),Tk(402,`Cor do brilho da borda e do brilho interno (hover)`),Zg(),Jc(403,`td`)(404,`code`),Tk(405,`var(--color-neutral-light-00)`),Zg()()(),Jc(406,`tr`)(407,`td`)(408,`code`),Tk(409,`--glow-animation-duration`),Zg()(),Jc(410,`td`),Tk(411,`Duração de uma volta completa do brilho`),Zg(),Jc(412,`td`)(413,`code`),Tk(414,`3200ms`),Zg()()(),Jc(415,`tr`)(416,`td`)(417,`code`),Tk(418,`--glow-transition-duration`),Zg()(),Jc(419,`td`),Tk(420,`Duração da transição entre estados`),Zg(),Jc(421,`td`)(422,`code`),Tk(423,`var(--duration-extra-slow)`),Zg()()(),Jc(424,`tr`)(425,`td`)(426,`code`),Tk(427,`--glow-transition-timing`),Zg()(),Jc(428,`td`),Tk(429,`Curva de aceleração da transição entre estados`),Zg(),Jc(430,`td`)(431,`code`),Tk(432,`var(--timing-exiting)`),Zg()()()()(),Jc(433,`blockquote`)(434,`p`),Tk(435,`No estilo `),Jc(436,`code`),Tk(437,`glow`),Zg(),Tk(438,`, o botão reutiliza os tokens `),Jc(439,`code`),Tk(440,`--color`),Zg(),Tk(441,`, `),Jc(442,`code`),Tk(443,`--text-color`),Zg(),Tk(444,`, `),Jc(445,`code`),Tk(446,`--color-hover`),Zg(),Tk(447,`, `),Jc(448,`code`),Tk(449,`--color-pressed`),Zg(),Tk(450,` e
`),Jc(451,`code`),Tk(452,`--border-width`),Zg(),Tk(453,`. O brilho percorre a borda com velocidade constante via `),Jc(454,`code`),Tk(455,`offset-path`),Zg(),Tk(456,`. Em navegadores sem
suporte a `),Jc(457,`code`),Tk(458,`offset-path`),Zg(),Tk(459,` com formas b\xE1sicas (Chrome < 116, Firefox < 122 e Safari < 18), \xE9 exibido um gradiente
girando no centro do bot\xE3o.`),Zg()(),Jc(460,`blockquote`)(461,`p`),Tk(462,`No estilo `),Jc(463,`code`),Tk(464,`glow`),Zg(),Tk(465,`, a anima\xE7\xE3o \xE9 interrompida quando o bot\xE3o est\xE1 desabilitado ou em carregamento,
e tamb\xE9m quando o sistema operacional do usu\xE1rio solicita redu\xE7\xE3o de movimento (`),Jc(466,`code`),Tk(467,`prefers-reduced-motion`),Zg(),Tk(468,`).`),Zg()(),Jc(469,`blockquote`)(470,`p`),Tk(471,`No tema escuro, `),Jc(472,`code`),Tk(473,`--color-glow-ring`),Zg(),Tk(474,` usa `),Jc(475,`code`),Tk(476,`var(--color-neutral-dark-95)`),Zg(),Tk(477,`, para que o brilho
continue claro apesar da invers\xE3o da escala neutra. `),Zg()()(),Jc(478,`div`,9)(479,`h4`,10),Tk(480,`Seletor`),Zg(),Jc(481,`pre`,11),Tk(482,`<po-button
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
`),Zg()(),Jc(483,`h4`,12),Tk(484,`Propriedades`),Zg(),Jc(485,`table`,13)(486,`tr`,14)(487,`th`,15),Tk(488,`Nome`),Zg(),Jc(489,`th`,15),Tk(490,`Tipo`),Zg(),Jc(491,`th`,15),Tk(492,`Padrão`),Zg(),Jc(493,`th`,15),Tk(494,`Descrição`),Zg()(),Jc(495,`tr`,16)(496,`td`,17)(497,`div`,18)(498,`span`,19),Tk(499,` p-aria-label`),_u(500,`br`),Zg()()(),Jc(501,`td`,20)(502,`code`,21),Tk(503,`string`),Zg()(),Jc(504,`td`,22),Tk(505,`-`),Zg(),Jc(506,`td`,23)(507,`em`)(508,`strong`),Tk(509,`(opcional)`),Zg()(),Jc(510,`p`),Tk(511,`Define um `),Jc(512,`code`),Tk(513,`aria-label`),Zg(),Tk(514,` para o `),Jc(515,`code`),Tk(516,`po-button`),Zg(),Tk(517,`.`),Zg(),Jc(518,`p`),Tk(519,`Caso esta propriedade não seja informada será considerada a label do botão.`),Zg(),Jc(520,`blockquote`)(521,`p`),Tk(522,`Em caso de botões com apenas ícone a atribuição de valor à esta propriedade é muito importante para acessibilidade.`),Zg()()()(),Jc(523,`tr`,16)(524,`td`,17)(525,`div`,24)(526,`span`,25),Tk(527,` (p-click)`),_u(528,`br`),Zg()()(),Jc(529,`td`,20)(530,`code`,26),Tk(531,`EventEmitter`),Zg()(),Jc(532,`td`,22),Tk(533,`-`),Zg(),Jc(534,`td`,23)(535,`p`),Tk(536,`Ação que será executada quando o usuário clicar sobre o `),Jc(537,`code`),Tk(538,`po-button`),Zg(),Tk(539,`.`),Zg()()(),Jc(540,`tr`,16)(541,`td`,17)(542,`div`,18)(543,`span`,19),Tk(544,` p-danger`),_u(545,`br`),Zg()()(),Jc(546,`td`,20)(547,`code`,27),Tk(548,`boolean`),Zg()(),Jc(549,`td`,22),Tk(550,`-`),Zg(),Jc(551,`td`,23)(552,`em`)(553,`strong`),Tk(554,`(opcional)`),Zg()(),Jc(555,`p`),Tk(556,`Deve ser usado em ações irreversíveis que o usuário precisa ter cuidado ao executá-la, como a exclusão de um registro.`),Zg(),Jc(557,`blockquote`)(558,`p`),Tk(559,`A propriedade será inativada ao utilizar `),Jc(560,`code`),Tk(561,`p-kind="tertiary"`),Zg(),Tk(562,` ou `),Jc(563,`code`),Tk(564,`p-kind="glow"`),Zg(),Tk(565,`.`),Zg()()()(),Jc(566,`tr`,16)(567,`td`,17)(568,`div`,18)(569,`span`,19),Tk(570,` p-disabled`),_u(571,`br`),Zg()()(),Jc(572,`td`,20)(573,`code`,27),Tk(574,`boolean`),Zg()(),Jc(575,`td`,22)(576,`p`)(577,`code`),Tk(578,`false`),Zg()()(),Jc(579,`td`,23)(580,`em`)(581,`strong`),Tk(582,`(opcional)`),Zg()(),Jc(583,`p`),Tk(584,`Desabilita o `),Jc(585,`code`),Tk(586,`po-button`),Zg(),Tk(587,` e não permite que o usuário interaja com o mesmo.`),Zg()()(),Jc(588,`tr`,16)(589,`td`,17)(590,`div`,18)(591,`span`,19),Tk(592,` p-icon`),_u(593,`br`),Zg()()(),Jc(594,`td`,20)(595,`code`,21),Tk(596,`string `),Zg(),Jc(597,`code`,28),Tk(598,` TemplateRef<void>`),Zg()(),Jc(599,`td`,22),Tk(600,`-`),Zg(),Jc(601,`td`,23)(602,`em`)(603,`strong`),Tk(604,`(opcional)`),Zg()(),Jc(605,`p`),Tk(606,`Ícone exibido ao lado esquerdo do label do botão.`),Zg(),Jc(607,`p`),Tk(608,`É possível usar qualquer um dos ícones da `),Jc(609,`a`,29),Tk(610,`Biblioteca de ícones`),Zg(),Tk(611,`, conforme exemplo:`),Zg(),Jc(612,`pre`)(613,`code`),Tk(614,`<po-button p-icon="an an-user" p-label="PO button"></po-button>
`),Zg()(),Jc(615,`p`),Tk(616,`Também é possível utilizar outras fontes de ícones, por exemplo a biblioteca `),Jc(617,`em`),Tk(618,`Font Awesome`),Zg(),Tk(619,`, desde que a biblioteca
esteja carregada no projeto:`),Zg(),Jc(620,`pre`)(621,`code`),Tk(622,`<po-button p-icon="fa fa-podcast" p-label="PO button"></po-button>
`),Zg()(),Jc(623,`p`),Tk(624,`Outra opção seria a customização do ícone através do `),Jc(625,`code`),Tk(626,`TemplateRef`),Zg(),Tk(627,`, conforme exemplo abaixo:`),Zg(),Jc(628,`pre`)(629,`code`),Tk(630,`<po-button [p-icon]="template" p-label="button template ionic"></po-button>

<ng-template #template>
 <ion-icon style="font-size: inherit" name="heart"></ion-icon>
</ng-template>
`),Zg()(),Jc(631,`blockquote`)(632,`p`),Tk(633,`Para o ícone enquadrar corretamente, deve-se utilizar `),Jc(634,`code`),Tk(635,`font-size: inherit`),Zg(),Tk(636,` caso o ícone utilizado não aplique-o.`),Zg()()()(),Jc(637,`tr`,16)(638,`td`,17)(639,`div`,18)(640,`span`,19),Tk(641,` p-kind`),_u(642,`br`),Zg()()(),Jc(643,`td`,20)(644,`code`,21),Tk(645,`string`),Zg()(),Jc(646,`td`,22)(647,`p`)(648,`code`),Tk(649,`secondary`),Zg()()(),Jc(650,`td`,23)(651,`em`)(652,`strong`),Tk(653,`(opcional)`),Zg()(),Jc(654,`p`),Tk(655,`Define o estilo visual do componente conforme valores especificados no enum `),Jc(656,`code`),Tk(657,`PoButtonKind`),Zg(),Tk(658,`:`),Zg(),Jc(659,`ul`)(660,`li`)(661,`code`),Tk(662,`primary`),Zg(),Tk(663,`: destaca o botão, sendo recomendado para ações principais.`),Zg(),Jc(664,`li`)(665,`code`),Tk(666,`secondary`),Zg(),Tk(667,`: estilo padrão, ideal para ações secundárias.`),Zg(),Jc(668,`li`)(669,`code`),Tk(670,`tertiary`),Zg(),Tk(671,`: exibe o botão sem preenchimento no fundo, indicado para ações opcionais.`),Zg(),Jc(672,`li`)(673,`code`),Tk(674,`glow`),Zg(),Tk(675,`: exibe o bot\xE3o em formato de p\xEDlula com um brilho animado percorrendo a borda, indicado para destacar
uma chamada para a\xE7\xE3o. Deve ser usado com modera\xE7\xE3o, preferencialmente em apenas um bot\xE3o por p\xE1gina.`),Zg()(),Jc(676,`blockquote`)(677,`p`),Tk(678,`O estilo `),Jc(679,`code`),Tk(680,`glow`),Zg(),Tk(681,` é incompatível com a propriedade `),Jc(682,`code`),Tk(683,`p-danger`),Zg(),Tk(684,`.`),Zg()()()(),Jc(685,`tr`,16)(686,`td`,17)(687,`div`,18)(688,`span`,19),Tk(689,` p-label`),_u(690,`br`),Zg()()(),Jc(691,`td`,20)(692,`code`,21),Tk(693,`string`),Zg()(),Jc(694,`td`,22),Tk(695,`-`),Zg(),Jc(696,`td`,23)(697,`em`)(698,`strong`),Tk(699,`(opcional)`),Zg()(),Jc(700,`p`),Tk(701,`Label do botão.`),Zg()()(),Jc(702,`tr`,16)(703,`td`,17)(704,`div`,18)(705,`span`,19),Tk(706,` p-loading`),_u(707,`br`),Zg()()(),Jc(708,`td`,20)(709,`code`,27),Tk(710,`boolean`),Zg()(),Jc(711,`td`,22)(712,`p`)(713,`code`),Tk(714,`false`),Zg()()(),Jc(715,`td`,23)(716,`em`)(717,`strong`),Tk(718,`(opcional)`),Zg()(),Jc(719,`p`),Tk(720,`Exibe um ícone de carregamento à esquerda do `),Jc(721,`em`),Tk(722,`label`),Zg(),Tk(723,` do botão.`),Zg(),Jc(724,`blockquote`)(725,`p`),Tk(726,`Quando esta propriedade estiver habilitada, desabilitará o botão.`),Zg()()()(),Jc(727,`tr`,16)(728,`td`,17)(729,`div`,18)(730,`span`,19),Tk(731,` p-size`),_u(732,`br`),Zg()()(),Jc(733,`td`,20)(734,`code`,21),Tk(735,`string`),Zg()(),Jc(736,`td`,22)(737,`p`)(738,`code`),Tk(739,`medium`),Zg()()(),Jc(740,`td`,23)(741,`em`)(742,`strong`),Tk(743,`(opcional)`),Zg()(),Jc(744,`p`),Tk(745,`Define o tamanho do componente:`),Zg(),Jc(746,`ul`)(747,`li`)(748,`code`),Tk(749,`small`),Zg(),Tk(750,`: altura de 32px (disponível apenas para acessibilidade AA).`),Zg(),Jc(751,`li`)(752,`code`),Tk(753,`medium`),Zg(),Tk(754,`: altura de 44px.`),Zg(),Jc(755,`li`)(756,`code`),Tk(757,`large`),Zg(),Tk(758,`: altura de 56px.`),Zg()(),Jc(759,`blockquote`)(760,`p`),Tk(761,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Jc(762,`code`),Tk(763,`medium`),Zg(),Tk(764,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Jc(765,`a`,30),Tk(766,`po-theme`),Zg(),Tk(767,`.`),Zg()()()(),Jc(768,`tr`,16)(769,`td`,17)(770,`div`,18)(771,`span`,19),Tk(772,` p-tabindex`),_u(773,`br`),Zg()()(),Jc(774,`td`,20)(775,`code`,31),Tk(776,`number `),Zg(),Jc(777,`code`,21),Tk(778,` string`),Zg()(),Jc(779,`td`,22),Tk(780,`-`),Zg(),Jc(781,`td`,23)(782,`em`)(783,`strong`),Tk(784,`(opcional)`),Zg()(),Jc(785,`p`),Tk(786,`Define o `),Jc(787,`code`),Tk(788,`tabindex`),Zg(),Tk(789,` do elemento `),Jc(790,`code`),Tk(791,`<button>`),Zg(),Tk(792,` nativo interno.`),Zg(),Jc(793,`p`),Tk(794,`Use `),Jc(795,`code`),Tk(796,`[tabindex]="-1"`),Zg(),Tk(797,` para remover o botão da ordem de foco do teclado.`),Zg()()(),Jc(798,`tr`,16)(799,`td`,17)(800,`div`,18)(801,`span`,19),Tk(802,` p-type`),_u(803,`br`),Zg()()(),Jc(804,`td`,20)(805,`code`,32),Tk(806,`PoButtonType`),Zg()(),Jc(807,`td`,22)(808,`p`)(809,`code`),Tk(810,`PoButtonType.Button`),Zg()()(),Jc(811,`td`,23)(812,`em`)(813,`strong`),Tk(814,`(opcional)`),Zg()(),Jc(815,`p`),Tk(816,`Define o tipo do botão.`),Zg()()()(),Jc(817,`h3`,12),Tk(818,`Métodos`),Zg(),Jc(819,`table`,33)(820,`tr`,16)(821,`th`,34)(822,`div`,18)(823,`h4`)(824,`span`,19),Tk(825,` focus `),Zg()()()()(),Jc(826,`tr`,23)(827,`td`,23)(828,`p`),Tk(829,`Função que atribui foco ao componente.`),Zg(),Jc(830,`p`),Tk(831,`Para utilizá-la é necessário ter a instância do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:`),Zg(),Jc(832,`pre`)(833,`code`),Tk(834,`import { PoButtonComponent } from '@po-ui/ng-components';

...

@ViewChild(PoButtonComponent, { static: true }) button: PoButtonComponent;

focusButton() {
  this.button.focus();
}
`),Zg()()()()(),_u(835,`br`),Jc(836,`h3`),Tk(837,`Enums`),Zg(),Jc(838,`h4`,4)(839,`code`,5),Tk(840,`PoButtonKind`),Zg()(),Jc(841,`div`,2)(842,`p`),Tk(843,`Estilos disponíveis do button.`),Zg()(),Jc(844,`h4`,12),Tk(845,`Propriedades`),Zg(),Jc(846,`table`,13)(847,`tr`,14)(848,`th`,15),Tk(849,`Nome`),Zg(),Jc(850,`th`,15),Tk(851,`Descrição`),Zg()(),Jc(852,`tr`,16)(853,`td`,17)(854,`div`,18)(855,`span`,19),Tk(856,` primary`),_u(857,`br`),Zg()()(),Jc(858,`td`,23)(859,`p`),Tk(860,`Estilo primário, usado para ações principais que requerem maior destaque.`),Zg()()(),Jc(861,`tr`,16)(862,`td`,17)(863,`div`,18)(864,`span`,19),Tk(865,` secondary`),_u(866,`br`),Zg()()(),Jc(867,`td`,23)(868,`p`),Tk(869,`Estilo secundário, usado como padrão, para ações comuns.`),Zg()()(),Jc(870,`tr`,16)(871,`td`,17)(872,`div`,18)(873,`span`,19),Tk(874,` tertiary`),_u(875,`br`),Zg()()(),Jc(876,`td`,23)(877,`p`),Tk(878,`Estilo terciário, ideal para ações menos importantes, sem fundo preenchido.`),Zg()()(),Jc(879,`tr`,16)(880,`td`,17)(881,`div`,18)(882,`span`,19),Tk(883,` glow`),_u(884,`br`),Zg()()(),Jc(885,`td`,23)(886,`p`),Tk(887,`Estilo com brilho animado que percorre a borda do botão, usado para destacar uma chamada para ação.`),Zg(),Jc(888,`blockquote`)(889,`p`),Tk(890,`Incompatível com a propriedade `),Jc(891,`code`),Tk(892,`p-danger`),Zg(),Tk(893,`.`),Zg()()()()(),Jc(894,`h4`,4)(895,`code`,5),Tk(896,`PoButtonType`),Zg()(),Jc(897,`div`,2)(898,`p`),Tk(899,`Enumeração que define os tipos possíveis para o `),Jc(900,`code`),Tk(901,`PoButtonComponent`),Zg(),Tk(902,`. Estes tipos est\xE3o relacionados ao comportamento
do bot\xE3o quando utilizado dentro de um formul\xE1rio HTML.`),Zg()(),Jc(903,`h4`,12),Tk(904,`Propriedades`),Zg(),Jc(905,`table`,13)(906,`tr`,14)(907,`th`,15),Tk(908,`Nome`),Zg(),Jc(909,`th`,15),Tk(910,`Descrição`),Zg()(),Jc(911,`tr`,16)(912,`td`,17)(913,`div`,18)(914,`span`,19),Tk(915,` Submit`),_u(916,`br`),Zg()()(),Jc(917,`td`,23)(918,`p`),Tk(919,`Define o botão como do tipo `),Jc(920,`code`),Tk(921,`submit`),Zg(),Tk(922,`. Quando clicado, o formul\xE1rio \xE9 enviado automaticamente,
disparando o evento `),Jc(923,`code`),Tk(924,`submit`),Zg(),Tk(925,`.`),Zg()()(),Jc(926,`tr`,16)(927,`td`,17)(928,`div`,18)(929,`span`,19),Tk(930,` Button`),_u(931,`br`),Zg()()(),Jc(932,`td`,23)(933,`p`),Tk(934,`Define o botão como do tipo `),Jc(935,`code`),Tk(936,`button`),Zg(),Tk(937,`. Este tipo de bot\xE3o n\xE3o possui comportamento padr\xE3o associado
e \xE9 utilizado principalmente para a\xE7\xF5es program\xE1ticas como cliques e disparos de eventos customizados.`),Zg()()(),Jc(938,`tr`,16)(939,`td`,17)(940,`div`,18)(941,`span`,19),Tk(942,` Reset`),_u(943,`br`),Zg()()(),Jc(944,`td`,23)(945,`p`),Tk(946,`Define o botão como do tipo `),Jc(947,`code`),Tk(948,`reset`),Zg(),Tk(949,`. Quando clicado, redefine os campos do formul\xE1rio ao qual pertence
para seus valores iniciais.`),Zg()()()()())},dependencies:[P],encapsulation:2,changeDetection:1})}return o})();function Oe(o,G){if(o&1){let r=ZO();Jc(0,`po-tab`,4),vt(`p-click`,function(){U_(r);let i=nk();return H_(i.changeTab(`web`))}),_u(1,`sample-po-button-basic-view`)(2,`sample-po-button-labs-view`)(3,`sample-po-button-social-network-view`),Zg()}if(o&2){let r=nk();Rb(`p-active`,r.activeTab===`web`)}}var Me=[{path:``,component:(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(r,a){this.route=r,this.router=a}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let a=r.view;this.hidePoWebSample=this.samplesLength===0,this.activeTab=this.hidePoWebSample?`doc`:a||`web`})}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:`merge`}),this.activeTab=r}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(a){return new(a||o)(I(ar),I(An))};static ɵcmp=Jn({type:o,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:3,consts:[[`p-title`,`Button`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Exemplos`,3,`p-active`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-active`]],template:function(a,i){a&1&&(Jc(0,`po-page-default`,0)(1,`po-tabs`,1),VO(2,Oe,4,1,`po-tab`,2),Jc(3,`po-tab`,3),vt(`p-click`,function(){return i.changeTab(`doc`)}),_u(4,`sample-po-button-doc`),Zg()()()),a&2&&(Rb(`p-actions`,i.actions),Ig(2),BO(i.hidePoWebSample?-1:2),Ig(),Rb(`p-active`,i.activeTab===`doc`))},dependencies:[Mze,tre,are,pe,ue,Ee,ge],encapsulation:2,changeDetection:1})}return o})()}];var xe=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵmod=ge$1({type:o});static ɵinj=de({imports:[WV.forChild(Me),WV]})}return o})();var ct=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵmod=ge$1({type:o});static ɵinj=de({imports:[M,xe]})}return o})();export{ct as DocPoButtonModule};