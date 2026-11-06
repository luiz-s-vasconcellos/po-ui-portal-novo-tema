import{n as s,t as r}from"./chunk-zystk1pz.js";import{$n as Ak,Ar as Ig,Cn as oi,Ei as WV,Er as H_,Fi as Yb,Fr as Jn,H as Lf,Hi as ar,Ja as vt,Li as ZO,Ln as w4,Mr as Jc,Ni as Y0,On as r4,Pt as a4,Ri as Zg,Rr as Kb,T as Gte,Ti as W0,Vi as _u,Xt as ere,Yi as eF,Zt as fae,b as Fu,cn as iie,di as RZ,ea as ge,er as An,fi as Rb,gi as Tk,hi as TZ,ht as U4,jr as JL,ka as qL,kr as I,mt as Tze,no as yk,nr as BO,or as Bk,qi as de,qr as NZ,rt as Qae,va as nk,wa as p,xi as VO,ya as nm,yi as U_}from"./chunk-DvS_Nb_w.js";import{n as P,t as M}from"./main-HXZZSDJT.js";var me=(()=>{class o{onClick(){alert(`Po Button!`)}static ɵfac=function(a){return new(a||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-button-basic`]],standalone:!1,decls:1,vars:0,consts:[[`p-label`,`PO Button`,3,`p-click`]],template:function(a,i){a&1&&(Jc(0,`po-button`,0),vt(`p-click`,function(){return i.onClick()}),Zg())},dependencies:[oi],encapsulation:2,changeDetection:1})}return o})();var ve=o=>({"docs-sample-code-tabs":o});var pe=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-button-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,i){a&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Button Basic`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return i.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-button-basic/sample-po-button-basic.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<po-button p-label="PO Button" (p-click)="onClick()"> </po-button>
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
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-button-basic`),Zg(),_u(23,`hr`)),a&2&&(Ig(5),yk(`po-icon `+i.sampleCodeButtonIcon),Ig(),nm(` `,i.sampleCodeButtonLabel),Ig(),Rb(`ngClass`,Bk(4,ve,i.hideSampleCodeTabs)))},dependencies:[eF,P,Qae,ere,me],encapsulation:2,changeDetection:1})}return o})();var ce=(()=>{class o{poDialog=p(iie);label;kind;icon;size;properties;type;propertiesOptions=[{value:`disabled`,label:`Disabled`},{value:`loading`,label:`Loading`},{value:`danger`,label:`Danger`}];iconsOptions=[{label:`an an-newspaper`,value:`an an-newspaper`},{label:`an an-calendar-dots`,value:`an an-calendar-dots`},{label:`an an-user`,value:`an an-user`},{label:`fa fa-podcast`,value:`fa fa-podcast`}];kindsOptions=[{label:`primary`,value:`primary`},{label:`secondary`,value:`secondary`},{label:`tertiary`,value:`tertiary`},{label:`glow`,value:`glow`}];kindsWithoutDanger=[`tertiary`,`glow`];sizesOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`},{label:`large`,value:`large`}];typeOptions=[{label:`button`,value:r4.Button},{label:`submit`,value:r4.Submit},{label:`reset`,value:r4.Reset}];ngOnInit(){this.restore()}buttonClick(){this.poDialog.alert({title:`PO Button`,message:`Hello PO World!!!`})}propertiesChange(r$1){let a=!!r$1&&this.properties.includes(`danger`);this.setKindsWithoutDangerDisabled(a),this.sizesOptions[0]=s(r({},this.sizesOptions[0]),{disabled:!1}),this.sizesOptions[1]=s(r({},this.sizesOptions[1]),{disabled:!1})}verifyDisabled(r){let a=[...this.propertiesOptions];this.kindsWithoutDanger.includes(r)?(a[2]={value:`danger`,label:`Danger`,disabled:!0},this.propertiesOptions=a):(a[2]={value:`danger`,label:`Danger`,disabled:!1},this.propertiesOptions=a)}restore(){this.label=void 0,this.kind=`secondary`,this.size=`medium`,this.icon=void 0,this.type=r4.Button,this.properties=[],this.setKindsWithoutDangerDisabled(!1),this.sizesOptions[0]=s(r({},this.sizesOptions[0]),{disabled:!1}),this.sizesOptions[1]=s(r({},this.sizesOptions[1]),{disabled:!1})}setKindsWithoutDangerDisabled(r$2){this.kindsOptions=this.kindsOptions.map(a=>this.kindsWithoutDanger.includes(a.value)?s(r({},a),{disabled:r$2}):a)}static ɵfac=function(a){return new(a||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-button-labs`]],standalone:!1,decls:14,vars:19,consts:[[`f`,`ngForm`],[1,`po-row`],[1,`po-sm-12`,3,`p-click`,`p-disabled`,`p-icon`,`p-label`,`p-loading`,`p-size`,`p-danger`,`p-kind`,`p-type`],[`name`,`label`,`p-clean`,``,`p-label`,`Label`,1,`po-lg-6`,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`properties`,`p-columns`,`4`,`p-label`,`Properties`,1,`po-lg-12`,3,`ngModelChange`,`p-change`,`ngModel`,`p-options`],[`name`,`icon`,`p-columns`,`4`,`p-label`,`Icon`,1,`po-lg-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`kind`,`p-columns`,`4`,`p-label`,`Kind`,1,`po-lg-12`,3,`ngModelChange`,`p-change`,`ngModel`,`p-options`],[`name`,`type`,`p-columns`,`4`,`p-label`,`Type`,1,`po-lg-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`size`,`p-columns`,`4`,`p-label`,`Size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-lg-12`,3,`ngModelChange`,`p-change`,`ngModel`,`p-options`],[`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`]],template:function(a,i){if(a&1){let b=ZO();Jc(0,`div`,1)(1,`po-button`,2),vt(`p-click`,function(){return i.buttonClick()}),Zg()(),_u(2,`po-divider`),Jc(3,`form`,null,0)(5,`div`,1)(6,`po-input`,3),W0(),Kb(`ngModelChange`,function(d){return U_(b),Ak(i.label,d)||(i.label=d),H_(d)}),Zg()(),Jc(7,`po-checkbox-group`,4),W0(),Kb(`ngModelChange`,function(d){return U_(b),Ak(i.properties,d)||(i.properties=d),H_(d)}),vt(`p-change`,function(d){return i.propertiesChange(d)}),Zg(),Jc(8,`po-radio-group`,5),W0(),Kb(`ngModelChange`,function(d){return U_(b),Ak(i.icon,d)||(i.icon=d),H_(d)}),Zg(),Jc(9,`po-radio-group`,6),W0(),Kb(`ngModelChange`,function(d){return U_(b),Ak(i.kind,d)||(i.kind=d),H_(d)}),vt(`p-change`,function(d){return i.verifyDisabled(d)}),Zg(),Jc(10,`po-radio-group`,7),W0(),Kb(`ngModelChange`,function(d){return U_(b),Ak(i.type,d)||(i.type=d),H_(d)}),Zg(),Jc(11,`po-radio-group`,8),W0(),Kb(`ngModelChange`,function(d){return U_(b),Ak(i.size,d)||(i.size=d),H_(d)}),vt(`p-change`,function(d){return i.verifyDisabled(d)}),Zg(),Jc(12,`div`,1)(13,`po-button`,9),vt(`p-click`,function(){return i.restore()}),Zg()()()}a&2&&(Ig(),Rb(`p-disabled`,i.properties.includes(`disabled`))(`p-icon`,i.icon)(`p-label`,i.label)(`p-loading`,i.properties.includes(`loading`))(`p-size`,i.size)(`p-danger`,i.properties.includes(`danger`))(`p-kind`,i.kind)(`p-type`,i.type),Ig(5),Yb(`ngModel`,i.label),Y0(),Ig(),Yb(`ngModel`,i.properties),Rb(`p-options`,i.propertiesOptions),Y0(),Ig(),Yb(`ngModel`,i.icon),Rb(`p-options`,i.iconsOptions),Y0(),Ig(),Yb(`ngModel`,i.kind),Rb(`p-options`,i.kindsOptions),Y0(),Ig(),Yb(`ngModel`,i.type),Rb(`p-options`,i.typeOptions),Y0(),Ig(),Yb(`ngModel`,i.size),Rb(`p-options`,i.sizesOptions),Y0())},dependencies:[NZ,TZ,RZ,JL,qL,oi,Lf,w4,U4,Gte],encapsulation:2,changeDetection:1})}return o})();var we=o=>({"docs-sample-code-tabs":o});var ue=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-button-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,i){a&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Button Labs`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return i.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-button-labs/sample-po-button-labs.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<div class="po-row">
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
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-button-labs`),Zg(),_u(23,`hr`)),a&2&&(Ig(5),yk(`po-icon `+i.sampleCodeButtonIcon),Ig(),nm(` `,i.sampleCodeButtonLabel),Ig(),Rb(`ngClass`,Bk(4,we,i.hideSampleCodeTabs)))},dependencies:[eF,P,Qae,ere,ce],encapsulation:2,changeDetection:1})}return o})();function ke(o,G){if(o&1){let r=ZO();Jc(0,`div`,0),_u(1,`po-avatar`,2),Jc(2,`div`,3)(3,`span`,4),Tk(4),Zg(),Jc(5,`span`,5),Tk(6),Zg(),Jc(7,`span`,5),Tk(8),Zg()()(),Jc(9,`div`,0)(10,`po-button`,6),vt(`p-click`,function(){U_(r);let i=nk();return H_(i.notification(`added`,`success`))}),Zg(),Jc(11,`po-button`,7),vt(`p-click`,function(){U_(r);let i=nk();return H_(i.notification(`ignored`,`warning`))}),Zg(),Jc(12,`po-button`,8),vt(`p-click`,function(){U_(r);let i=nk();return H_(i.notification(`blocked`,`information`))}),Zg()()}if(o&2){let r=nk();Ig(),Rb(`p-src`,r.userAvatar),Ig(3),nm(` `,r.currentFriend.name,` `),Ig(2),nm(` `,r.currentFriend.mutualFriends,` mutual friends `),Ig(2),nm(` Resides in `,r.currentFriend.reside,` `)}}function Pe(o,G){o&1&&(Jc(0,`div`,0)(1,`span`,9),Tk(2,`Congratulations TOTVS, no more requests!`),Zg()())}var Ee=(()=>{class o{poNotification=p(Fu);currentFriend;userAvatar=`https://lorempixel.com/144/144/`;newFriends=[{name:`Mr. Dev PO`,mutualFriends:`7`,reside:`Mountain View, CA`},{name:`Mr. AI PO`,mutualFriends:`99+`,reside:`New York City, NY`},{name:`Mr. UX PO`,mutualFriends:`14`,reside:`Los Angeles, CA`}];indexFriend=0;ngOnInit(){this.setCurrentFriend(0)}notification(r,a){this.poNotification[a](`User ${r} successfully!`),this.indexFriend++,this.setCurrentFriend(this.indexFriend)}setCurrentFriend(r){this.currentFriend=this.newFriends[r]}static ɵfac=function(a){return new(a||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-button-social-network`]],standalone:!1,decls:4,vars:1,consts:[[1,`po-row`],[`p-title`,`Friend Request`,1,`po-lg-6`],[`p-size`,`lg`,1,`po-md-4`,3,`p-src`],[1,`po-md-8`],[1,`po-sm-12`,`po-font-subtitle`],[1,`po-sm-12`,`po-font-text`],[`p-icon`,`fa fa-check-circle`,`p-label`,`Confirm`,1,`po-md-4`,3,`p-click`],[`p-icon`,`fa fa-eye-slash`,`p-label`,`Ignore`,1,`po-md-4`,3,`p-click`],[`p-icon`,`fa fa-ban`,`p-label`,`Block`,1,`po-md-4`,3,`p-click`],[1,`po-lg-8`,`po-font-subtitle`]],template:function(a,i){a&1&&(Jc(0,`div`,0)(1,`po-widget`,1),VO(2,ke,13,4)(3,Pe,3,0,`div`,0),Zg()()),a&2&&(Ig(2),BO(i.currentFriend?2:3))},dependencies:[a4,oi,fae],encapsulation:2,changeDetection:1})}return o})();var De=o=>({"docs-sample-code-tabs":o});var be=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-button-social-network-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,i){a&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Button Social Network`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return i.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-button-social-network/sample-po-button-social-network.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<div class="po-row">
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
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-button-social-network`),Zg(),_u(23,`hr`)),a&2&&(Ig(5),yk(`po-icon `+i.sampleCodeButtonIcon),Ig(),nm(` `,i.sampleCodeButtonLabel),Ig(),Rb(`ngClass`,Bk(4,De,i.hideSampleCodeTabs)))},dependencies:[eF,P,Qae,ere,Ee],encapsulation:2,changeDetection:1})}return o})();var Se=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-button-doc`]],standalone:!1,decls:1106,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://www.w3.org/WAI/ARIA/apg/#keyboard-interaction-3`],[`href`,`https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance-enhanced`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`string`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`pan`,``,1,`docs-api-property-type`,`TemplateRef<void>`],[`href`,`https://po-ui.io/icons`],[`href`,`https://po-ui.io/documentation/po-theme`],[`pan`,``,1,`docs-api-property-type`,`number`],[`pan`,``,1,`docs-api-property-type`,`PoButtonType`],[1,`docs-api-method-table`],[`colspan`,`2`,1,`docs-api-properties-name-cell`]],template:function(a,i){a&1&&(Jc(0,`div`,0)(1,`p`,1)(2,`code`),Tk(3,`import { PoButtonModule } from '@po-ui/ng-components';`),Zg()(),Jc(4,`div`,2)(5,`p`),Tk(6,`Módulo do componente po-button.`),Zg()(),Jc(7,`h3`,3),Tk(8,`Componente`),Zg(),Jc(9,`h4`,4)(10,`code`,5),Tk(11,`PoButtonComponent`),Zg()(),Jc(12,`div`,2)(13,`p`),Tk(14,`O `),Jc(15,`code`),Tk(16,`po-button`),Zg(),Tk(17,` permite que o usuário execute ações predefinidas pelo desenvolvedor.`),Zg(),Jc(18,`p`),Tk(19,`Através dos tipos, é possível identificar a importância de cada ação.`),Zg(),Jc(20,`h4`),Tk(21,`Boas práticas`),Zg(),Jc(22,`ul`)(23,`li`),Tk(24,`Evite `),Jc(25,`code`),Tk(26,`labels`),Zg(),Tk(27,` extensos que quebram o layout do `),Jc(28,`code`),Tk(29,`po-button`),Zg(),Tk(30,`, use `),Jc(31,`code`),Tk(32,`labels`),Zg(),Tk(33,` diretos, curtos e intuitivos.`),Zg(),Jc(34,`li`),Tk(35,`Utilize apenas um `),Jc(36,`code`),Tk(37,`po-button`),Zg(),Tk(38,` configurado como `),Jc(39,`code`),Tk(40,`primary`),Zg(),Tk(41,` por página.`),Zg(),Jc(42,`li`),Tk(43,`Para ações irreversíveis use sempre a propriedade `),Jc(44,`code`),Tk(45,`p-danger`),Zg(),Tk(46,`.`),Zg()(),Jc(47,`h4`),Tk(48,`Acessibilidade tratada no componente`),Zg(),Jc(49,`p`),Tk(50,`Algumas diretrizes de acessibilidade já são tratadas no componente, internamente, e não podem ser alteradas pelo proprietário do conteúdo. São elas:`),Zg(),Jc(51,`ul`)(52,`li`),Tk(53,`Quando em foco, o botão é ativado usando as teclas de Espaço e Enter do teclado. `),Jc(54,`a`,6),Tk(55,`W3C WAI-ARIA 3.5 Button - Keyboard Interaction`),Zg()(),Jc(56,`li`),Tk(57,`A área do foco precisar ter uma espessura de pelo menos 2 pixels CSS e o foco não pode ficar escondido por outros elementos da tela. `),Jc(58,`a`,7),Tk(59,`WCAG 2.4.12: Focus Appearance`),Zg()()(),Jc(60,`h4`),Tk(61,`Tokens customizáveis`),Zg(),Jc(62,`p`),Tk(63,`É possível alterar o estilo do componente usando os seguintes tokens (CSS):`),Zg(),Jc(64,`blockquote`)(65,`p`),Tk(66,`Para maiores informações, acesse o guia `),Jc(67,`a`,8),Tk(68,`Personalizando o Tema Padrão com Tokens CSS`),Zg(),Tk(69,`.`),Zg()(),Jc(70,`table`)(71,`thead`)(72,`tr`)(73,`th`),Tk(74,`Propriedade`),Zg(),Jc(75,`th`),Tk(76,`Descrição`),Zg(),Jc(77,`th`),Tk(78,`Valor Padrão`),Zg()()(),Jc(79,`tbody`)(80,`tr`)(81,`td`)(82,`code`),Tk(83,`--font-family`),Zg()(),Jc(84,`td`),Tk(85,`Família tipográfica usada`),Zg(),Jc(86,`td`)(87,`code`),Tk(88,`var(--font-family-theme)`),Zg()()(),Jc(89,`tr`)(90,`td`)(91,`code`),Tk(92,`--font-size`),Zg()(),Jc(93,`td`),Tk(94,`Tamanho da fonte`),Zg(),Jc(95,`td`)(96,`code`),Tk(97,`var(--font-size-default)`),Zg()()(),Jc(98,`tr`)(99,`td`)(100,`code`),Tk(101,`--font-weight`),Zg()(),Jc(102,`td`),Tk(103,`Peso da fonte`),Zg(),Jc(104,`td`)(105,`code`),Tk(106,`var(--font-weight-bold)`),Zg()()(),Jc(107,`tr`)(108,`td`)(109,`code`),Tk(110,`--line-height`),Zg()(),Jc(111,`td`),Tk(112,`Tamanho da label`),Zg(),Jc(113,`td`)(114,`code`),Tk(115,`var(--line-height-none)`),Zg()()(),Jc(116,`tr`)(117,`td`)(118,`code`),Tk(119,`--border-radius`),Zg()(),Jc(120,`td`),Tk(121,`Contém o valor do raio dos cantos do elemento\xA0`),Zg(),Jc(122,`td`)(123,`code`),Tk(124,`var(--border-radius-md)`),Zg()()(),Jc(125,`tr`)(126,`td`)(127,`code`),Tk(128,`--border-width`),Zg()(),Jc(129,`td`),Tk(130,`Contém o valor da largura dos cantos do elemento\xA0`),Zg(),Jc(131,`td`)(132,`code`),Tk(133,`var(--border-width-md)`),Zg()()(),Jc(134,`tr`)(135,`td`)(136,`code`),Tk(137,`--padding`),Zg()(),Jc(138,`td`),Tk(139,`Preenchimento`),Zg(),Jc(140,`td`)(141,`code`),Tk(142,`0 1em`),Zg()()(),Jc(143,`tr`)(144,`td`)(145,`strong`),Tk(146,`Danger`),Zg()(),_u(147,`td`)(148,`td`),Zg(),Jc(149,`tr`)(150,`td`)(151,`code`),Tk(152,`--text-color-danger`),Zg()(),Jc(153,`td`),Tk(154,`Cor do texto no estado danger`),Zg(),Jc(155,`td`)(156,`code`),Tk(157,`var(--color-neutral-light-00)`),Zg()()(),Jc(158,`tr`)(159,`td`)(160,`code`),Tk(161,`--color-button-danger`),Zg()(),Jc(162,`td`),Tk(163,`Cor do botão no estado danger`),Zg(),Jc(164,`td`)(165,`code`),Tk(166,`var(--color-feedback-negative-dark)`),Zg()()(),Jc(167,`tr`)(168,`td`)(169,`code`),Tk(170,`--color-danger-hover`),Zg()(),Jc(171,`td`),Tk(172,`Cor de hover no estado danger`),Zg(),Jc(173,`td`)(174,`code`),Tk(175,`var(--color-feedback-negative-darker)`),Zg()()(),Jc(176,`tr`)(177,`td`)(178,`code`),Tk(179,`--color-danger-pressed`),Zg()(),Jc(180,`td`),Tk(181,`Cor pressionada no estado danger`),Zg(),Jc(182,`td`)(183,`code`),Tk(184,`var(--color-feedback-negative-darkest)`),Zg()()(),Jc(185,`tr`)(186,`td`)(187,`code`),Tk(188,`--background-danger-hover`),Zg()(),Jc(189,`td`),Tk(190,`Cor de background de hover no estado danger`),Zg(),Jc(191,`td`)(192,`code`),Tk(193,`var(--color-feedback-negative-lighter)`),Zg()()(),Jc(194,`tr`)(195,`td`)(196,`code`),Tk(197,`--border-color-danger-hover`),Zg()(),Jc(198,`td`),Tk(199,`Cor da borda de hover no estado danger`),Zg(),Jc(200,`td`)(201,`code`),Tk(202,`var(--color-feedback-negative-darkest)`),Zg()()(),Jc(203,`tr`)(204,`td`)(205,`code`),Tk(206,`--background-danger-pressed`),Zg()(),Jc(207,`td`),Tk(208,`Cor de background pressionado no estado danger`),Zg(),Jc(209,`td`)(210,`code`),Tk(211,`var(--color-feedback-negative-light)`),Zg()()(),Jc(212,`tr`)(213,`td`)(214,`code`),Tk(215,`--background-color-button-danger`),Zg(),Tk(216,`\xA0`),Zg(),Jc(217,`td`),Tk(218,`Cor de background do botão no estado danger`),Zg(),Jc(219,`td`)(220,`code`),Tk(221,`var(--color-transparent)`),Zg()()(),Jc(222,`tr`)(223,`td`)(224,`strong`),Tk(225,`Default Values`),Zg()(),_u(226,`td`)(227,`td`),Zg(),Jc(228,`tr`)(229,`td`)(230,`code`),Tk(231,`--text-color`),Zg()(),Jc(232,`td`),Tk(233,`Cor do texto`),Zg(),Jc(234,`td`)(235,`code`),Tk(236,`var(--color-neutral-light-00)`),Zg()()(),Jc(237,`tr`)(238,`td`)(239,`code`),Tk(240,`--color`),Zg()(),Jc(241,`td`),Tk(242,`Cor principal do botão`),Zg(),Jc(243,`td`)(244,`code`),Tk(245,`var(--color-action-default)`),Zg()()(),Jc(246,`tr`)(247,`td`)(248,`code`),Tk(249,`--background-color`),Zg()(),Jc(250,`td`),Tk(251,`Cor de background`),Zg(),Jc(252,`td`)(253,`code`),Tk(254,`var(--color-transparent)`),Zg()()(),Jc(255,`tr`)(256,`td`)(257,`code`),Tk(258,`--border-color`),Zg()(),Jc(259,`td`),Tk(260,`Cor da borda`),Zg(),Jc(261,`td`)(262,`code`),Tk(263,`var(--color-transparent)`),Zg()()(),Jc(264,`tr`)(265,`td`)(266,`code`),Tk(267,`--shadow`),Zg()(),Jc(268,`td`),Tk(269,`Contém o valor da sombra do elemento`),Zg(),Jc(270,`td`)(271,`code`),Tk(272,`var(--shadow-none)`),Zg()()(),Jc(273,`tr`)(274,`td`)(275,`strong`),Tk(276,`Hover`),Zg()(),_u(277,`td`)(278,`td`),Zg(),Jc(279,`tr`)(280,`td`)(281,`code`),Tk(282,`--color-hover`),Zg()(),Jc(283,`td`),Tk(284,`Cor principal no estado hover`),Zg(),Jc(285,`td`)(286,`code`),Tk(287,`var(--color-action-hover)`),Zg()()(),Jc(288,`tr`)(289,`td`)(290,`code`),Tk(291,`--background-hover`),Zg()(),Jc(292,`td`),Tk(293,`Cor de background no estado hover`),Zg(),Jc(294,`td`)(295,`code`),Tk(296,`var(--color-brand-01-lighter)`),Zg()()(),Jc(297,`tr`)(298,`td`)(299,`code`),Tk(300,`--border-color-hover`),Zg()(),Jc(301,`td`),Tk(302,`Cor da borda no estado hover`),Zg(),Jc(303,`td`)(304,`code`),Tk(305,`var(--color-brand-01-darkest)`),Zg()()(),Jc(306,`tr`)(307,`td`)(308,`strong`),Tk(309,`Focused`),Zg()(),_u(310,`td`)(311,`td`),Zg(),Jc(312,`tr`)(313,`td`)(314,`code`),Tk(315,`--outline-color-focused`),Zg()(),Jc(316,`td`),Tk(317,`Cor do outline do estado de focus`),Zg(),Jc(318,`td`)(319,`code`),Tk(320,`var(--color-action-focus)`),Zg()()(),Jc(321,`tr`)(322,`td`)(323,`strong`),Tk(324,`Pressed`),Zg()(),_u(325,`td`)(326,`td`),Zg(),Jc(327,`tr`)(328,`td`)(329,`code`),Tk(330,`--color-pressed`),Zg()(),Jc(331,`td`),Tk(332,`Cor principal no estado de pressionado`),Zg(),Jc(333,`td`)(334,`code`),Tk(335,`var(--color-action-pressed)`),Zg()()(),Jc(336,`tr`)(337,`td`)(338,`code`),Tk(339,`--background-pressed`),Zg()(),Jc(340,`td`),Tk(341,`Cor de background no estado de pressionado\xA0`),Zg(),Jc(342,`td`)(343,`code`),Tk(344,`var(--color-brand-01-light)`),Zg()()(),Jc(345,`tr`)(346,`td`)(347,`strong`),Tk(348,`Disabled`),Zg()(),_u(349,`td`)(350,`td`),Zg(),Jc(351,`tr`)(352,`td`)(353,`code`),Tk(354,`--text-color-disabled`),Zg()(),Jc(355,`td`),Tk(356,`Cor do texto no estado disabled`),Zg(),Jc(357,`td`)(358,`code`),Tk(359,`var(--color-neutral-dark-70)`),Zg()()(),Jc(360,`tr`)(361,`td`)(362,`code`),Tk(363,`--color-disabled`),Zg()(),Jc(364,`td`),Tk(365,`Cor principal no estado disabled`),Zg(),Jc(366,`td`)(367,`code`),Tk(368,`var(--color-action-disabled)`),Zg()()(),Jc(369,`tr`)(370,`td`)(371,`code`),Tk(372,`--background-color-disabled`),Zg()(),Jc(373,`td`),Tk(374,`Cor de background no estado disabled`),Zg(),Jc(375,`td`)(376,`code`),Tk(377,`var(--color-transparent)`),Zg()()(),Jc(378,`tr`)(379,`td`)(380,`strong`),Tk(381,`Glow`),Zg(),Tk(382,` (`),Jc(383,`code`),Tk(384,`p-kind="glow"`),Zg(),Tk(385,`)`),Zg(),_u(386,`td`)(387,`td`),Zg(),Jc(388,`tr`)(389,`td`)(390,`code`),Tk(391,`--color-glow`),Zg()(),Jc(392,`td`),Tk(393,`Cor de background do botão`),Zg(),Jc(394,`td`)(395,`code`),Tk(396,`var(--color-action-default)`),Zg()()(),Jc(397,`tr`)(398,`td`)(399,`code`),Tk(400,`--text-color-glow`),Zg()(),Jc(401,`td`),Tk(402,`Cor do texto`),Zg(),Jc(403,`td`)(404,`code`),Tk(405,`var(--color-neutral-light-00)`),Zg()()(),Jc(406,`tr`)(407,`td`)(408,`code`),Tk(409,`--color-glow-hover-start`),Zg()(),Jc(410,`td`),Tk(411,`Cor inicial do gradiente no estado hover`),Zg(),Jc(412,`td`)(413,`code`),Tk(414,`var(--color-brand-01-base)`),Zg()()(),Jc(415,`tr`)(416,`td`)(417,`code`),Tk(418,`--color-glow-hover-end`),Zg()(),Jc(419,`td`),Tk(420,`Cor final do gradiente no estado hover`),Zg(),Jc(421,`td`)(422,`code`),Tk(423,`var(--color-brand-01-dark)`),Zg()()(),Jc(424,`tr`)(425,`td`)(426,`code`),Tk(427,`--color-glow-highlight`),Zg()(),Jc(428,`td`),Tk(429,`Cor do reflexo no estado hover`),Zg(),Jc(430,`td`)(431,`code`),Tk(432,`var(--color-brand-01-light)`),Zg()()(),Jc(433,`tr`)(434,`td`)(435,`code`),Tk(436,`--color-glow-pressed`),Zg()(),Jc(437,`td`),Tk(438,`Cor de background no estado pressionado`),Zg(),Jc(439,`td`)(440,`code`),Tk(441,`var(--color-action-pressed)`),Zg()()(),Jc(442,`tr`)(443,`td`)(444,`code`),Tk(445,`--color-glow-ring`),Zg()(),Jc(446,`td`),Tk(447,`Cor do brilho que percorre a borda`),Zg(),Jc(448,`td`)(449,`code`),Tk(450,`var(--color-neutral-light-00)`),Zg()()(),Jc(451,`tr`)(452,`td`)(453,`code`),Tk(454,`--color-glow-inner`),Zg()(),Jc(455,`td`),Tk(456,`Cor do brilho interno no estado hover`),Zg(),Jc(457,`td`)(458,`code`),Tk(459,`var(--color-neutral-light-00)`),Zg()()(),Jc(460,`tr`)(461,`td`)(462,`code`),Tk(463,`--color-glow-halo`),Zg()(),Jc(464,`td`),Tk(465,`Cor do halo externo e da sombra no estado hover`),Zg(),Jc(466,`td`)(467,`code`),Tk(468,`var(--color-action-default)`),Zg()()(),Jc(469,`tr`)(470,`td`)(471,`code`),Tk(472,`--border-width-glow`),Zg()(),Jc(473,`td`),Tk(474,`Espessura do brilho que percorre a borda`),Zg(),Jc(475,`td`)(476,`code`),Tk(477,`var(--border-width-md)`),Zg()()(),Jc(478,`tr`)(479,`td`)(480,`code`),Tk(481,`--size-glow-ring-dot`),Zg()(),Jc(482,`td`),Tk(483,`Diâmetro de cada ponto do brilho da borda`),Zg(),Jc(484,`td`)(485,`code`),Tk(486,`var(--spacing-xl)`),Zg()()(),Jc(487,`tr`)(488,`td`)(489,`code`),Tk(490,`--size-glow-halo-dot`),Zg()(),Jc(491,`td`),Tk(492,`Diâmetro de cada ponto do halo externo`),Zg(),Jc(493,`td`)(494,`code`),Tk(495,`var(--spacing-2xl)`),Zg()()(),Jc(496,`tr`)(497,`td`)(498,`code`),Tk(499,`--spacing-glow-path`),Zg()(),Jc(500,`td`),Tk(501,`Distância entre a borda e o caminho do brilho`),Zg(),Jc(502,`td`)(503,`code`),Tk(504,`var(--border-width-sm)`),Zg()()(),Jc(505,`tr`)(506,`td`)(507,`code`),Tk(508,`--blur-glow-halo`),Zg()(),Jc(509,`td`),Tk(510,`Intensidade do desfoque do halo externo`),Zg(),Jc(511,`td`)(512,`code`),Tk(513,`var(--spacing-sm)`),Zg()()(),Jc(514,`tr`)(515,`td`)(516,`code`),Tk(517,`--opacity-glow-halo`),Zg()(),Jc(518,`td`),Tk(519,`Opacidade do halo externo`),Zg(),Jc(520,`td`)(521,`code`),Tk(522,`0.3`),Zg()()(),Jc(523,`tr`)(524,`td`)(525,`code`),Tk(526,`--opacity-glow-halo-hover`),Zg()(),Jc(527,`td`),Tk(528,`Opacidade do halo externo no estado hover`),Zg(),Jc(529,`td`)(530,`code`),Tk(531,`0.5`),Zg()()(),Jc(532,`tr`)(533,`td`)(534,`code`),Tk(535,`--opacity-glow-inner`),Zg()(),Jc(536,`td`),Tk(537,`Opacidade do brilho interno no estado hover`),Zg(),Jc(538,`td`)(539,`code`),Tk(540,`0.55`),Zg()()(),Jc(541,`tr`)(542,`td`)(543,`code`),Tk(544,`--duration-glow-lap`),Zg()(),Jc(545,`td`),Tk(546,`Duração de uma volta completa do brilho`),Zg(),Jc(547,`td`)(548,`code`),Tk(549,`3200ms`),Zg()()(),Jc(550,`tr`)(551,`td`)(552,`code`),Tk(553,`--duration-glow-step`),Zg()(),Jc(554,`td`),Tk(555,`Intervalo entre os pontos da cauda do brilho`),Zg(),Jc(556,`td`)(557,`code`),Tk(558,`30ms`),Zg()()(),Jc(559,`tr`)(560,`td`)(561,`code`),Tk(562,`--duration-glow-state`),Zg()(),Jc(563,`td`),Tk(564,`Duração da transição entre estados`),Zg(),Jc(565,`td`)(566,`code`),Tk(567,`var(--duration-extra-slow)`),Zg()()(),Jc(568,`tr`)(569,`td`)(570,`code`),Tk(571,`--timing-glow`),Zg()(),Jc(572,`td`),Tk(573,`Curva de aceleração da transição entre estados`),Zg(),Jc(574,`td`)(575,`code`),Tk(576,`var(--timing-exiting)`),Zg()()(),Jc(577,`tr`)(578,`td`)(579,`code`),Tk(580,`--scale-glow-pressed`),Zg()(),Jc(581,`td`),Tk(582,`Escala do botão no estado pressionado`),Zg(),Jc(583,`td`)(584,`code`),Tk(585,`0.98`),Zg()()(),Jc(586,`tr`)(587,`td`)(588,`code`),Tk(589,`--glow-trail-start`),Zg()(),Jc(590,`td`),Tk(591,`Ângulo inicial da cauda (apenas no fallback*)`),Zg(),Jc(592,`td`)(593,`code`),Tk(594,`252deg`),Zg()()(),Jc(595,`tr`)(596,`td`)(597,`code`),Tk(598,`--spacing-glow-halo`),Zg()(),Jc(599,`td`),Tk(600,`Expansão do halo externo (apenas no fallback*)`),Zg(),Jc(601,`td`)(602,`code`),Tk(603,`var(--spacing-xxs)`),Zg()()()()(),Jc(604,`blockquote`)(605,`p`),Tk(606,`* O brilho percorre a borda com velocidade constante via `),Jc(607,`code`),Tk(608,`offset-path`),Zg(),Tk(609,`. Em navegadores sem suporte a
`),Jc(610,`code`),Tk(611,`offset-path`),Zg(),Tk(612,` com formas b\xE1sicas (Chrome < 116, Firefox < 122 e Safari < 18), \xE9 exibido um gradiente
girando no centro do bot\xE3o.`),Zg()(),Jc(613,`blockquote`)(614,`p`),Tk(615,`No estilo `),Jc(616,`code`),Tk(617,`glow`),Zg(),Tk(618,`, a anima\xE7\xE3o \xE9 interrompida quando o bot\xE3o est\xE1 desabilitado ou em carregamento,
e tamb\xE9m quando o sistema operacional do usu\xE1rio solicita redu\xE7\xE3o de movimento (`),Jc(619,`code`),Tk(620,`prefers-reduced-motion`),Zg(),Tk(621,`).`),Zg()(),Jc(622,`blockquote`)(623,`p`),Tk(624,`No tema escuro, `),Jc(625,`code`),Tk(626,`--color-glow-ring`),Zg(),Tk(627,` e `),Jc(628,`code`),Tk(629,`--color-glow-inner`),Zg(),Tk(630,` usam `),Jc(631,`code`),Tk(632,`var(--color-neutral-dark-95)`),Zg(),Tk(633,`, para que o brilho
continue claro apesar da invers\xE3o da escala neutra. `),Zg()()(),Jc(634,`div`,9)(635,`h4`,10),Tk(636,`Seletor`),Zg(),Jc(637,`pre`,11),Tk(638,`<po-button
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
`),Zg()(),Jc(639,`h4`,12),Tk(640,`Propriedades`),Zg(),Jc(641,`table`,13)(642,`tr`,14)(643,`th`,15),Tk(644,`Nome`),Zg(),Jc(645,`th`,15),Tk(646,`Tipo`),Zg(),Jc(647,`th`,15),Tk(648,`Padrão`),Zg(),Jc(649,`th`,15),Tk(650,`Descrição`),Zg()(),Jc(651,`tr`,16)(652,`td`,17)(653,`div`,18)(654,`span`,19),Tk(655,` p-aria-label`),_u(656,`br`),Zg()()(),Jc(657,`td`,20)(658,`code`,21),Tk(659,`string`),Zg()(),Jc(660,`td`,22),Tk(661,`-`),Zg(),Jc(662,`td`,23)(663,`em`)(664,`strong`),Tk(665,`(opcional)`),Zg()(),Jc(666,`p`),Tk(667,`Define um `),Jc(668,`code`),Tk(669,`aria-label`),Zg(),Tk(670,` para o `),Jc(671,`code`),Tk(672,`po-button`),Zg(),Tk(673,`.`),Zg(),Jc(674,`p`),Tk(675,`Caso esta propriedade não seja informada será considerada a label do botão.`),Zg(),Jc(676,`blockquote`)(677,`p`),Tk(678,`Em caso de botões com apenas ícone a atribuição de valor à esta propriedade é muito importante para acessibilidade.`),Zg()()()(),Jc(679,`tr`,16)(680,`td`,17)(681,`div`,24)(682,`span`,25),Tk(683,` (p-click)`),_u(684,`br`),Zg()()(),Jc(685,`td`,20)(686,`code`,26),Tk(687,`EventEmitter`),Zg()(),Jc(688,`td`,22),Tk(689,`-`),Zg(),Jc(690,`td`,23)(691,`p`),Tk(692,`Ação que será executada quando o usuário clicar sobre o `),Jc(693,`code`),Tk(694,`po-button`),Zg(),Tk(695,`.`),Zg()()(),Jc(696,`tr`,16)(697,`td`,17)(698,`div`,18)(699,`span`,19),Tk(700,` p-danger`),_u(701,`br`),Zg()()(),Jc(702,`td`,20)(703,`code`,27),Tk(704,`boolean`),Zg()(),Jc(705,`td`,22),Tk(706,`-`),Zg(),Jc(707,`td`,23)(708,`em`)(709,`strong`),Tk(710,`(opcional)`),Zg()(),Jc(711,`p`),Tk(712,`Deve ser usado em ações irreversíveis que o usuário precisa ter cuidado ao executá-la, como a exclusão de um registro.`),Zg(),Jc(713,`blockquote`)(714,`p`),Tk(715,`A propriedade será inativada ao utilizar `),Jc(716,`code`),Tk(717,`p-kind="tertiary"`),Zg(),Tk(718,` ou `),Jc(719,`code`),Tk(720,`p-kind="glow"`),Zg(),Tk(721,`.`),Zg()()()(),Jc(722,`tr`,16)(723,`td`,17)(724,`div`,18)(725,`span`,19),Tk(726,` p-disabled`),_u(727,`br`),Zg()()(),Jc(728,`td`,20)(729,`code`,27),Tk(730,`boolean`),Zg()(),Jc(731,`td`,22)(732,`p`)(733,`code`),Tk(734,`false`),Zg()()(),Jc(735,`td`,23)(736,`em`)(737,`strong`),Tk(738,`(opcional)`),Zg()(),Jc(739,`p`),Tk(740,`Desabilita o `),Jc(741,`code`),Tk(742,`po-button`),Zg(),Tk(743,` e não permite que o usuário interaja com o mesmo.`),Zg()()(),Jc(744,`tr`,16)(745,`td`,17)(746,`div`,18)(747,`span`,19),Tk(748,` p-icon`),_u(749,`br`),Zg()()(),Jc(750,`td`,20)(751,`code`,21),Tk(752,`string `),Zg(),Jc(753,`code`,28),Tk(754,` TemplateRef<void>`),Zg()(),Jc(755,`td`,22),Tk(756,`-`),Zg(),Jc(757,`td`,23)(758,`em`)(759,`strong`),Tk(760,`(opcional)`),Zg()(),Jc(761,`p`),Tk(762,`Ícone exibido ao lado esquerdo do label do botão.`),Zg(),Jc(763,`p`),Tk(764,`É possível usar qualquer um dos ícones da `),Jc(765,`a`,29),Tk(766,`Biblioteca de ícones`),Zg(),Tk(767,`, conforme exemplo:`),Zg(),Jc(768,`pre`)(769,`code`),Tk(770,`<po-button p-icon="an an-user" p-label="PO button"></po-button>
`),Zg()(),Jc(771,`p`),Tk(772,`Também é possível utilizar outras fontes de ícones, por exemplo a biblioteca `),Jc(773,`em`),Tk(774,`Font Awesome`),Zg(),Tk(775,`, desde que a biblioteca
esteja carregada no projeto:`),Zg(),Jc(776,`pre`)(777,`code`),Tk(778,`<po-button p-icon="fa fa-podcast" p-label="PO button"></po-button>
`),Zg()(),Jc(779,`p`),Tk(780,`Outra opção seria a customização do ícone através do `),Jc(781,`code`),Tk(782,`TemplateRef`),Zg(),Tk(783,`, conforme exemplo abaixo:`),Zg(),Jc(784,`pre`)(785,`code`),Tk(786,`<po-button [p-icon]="template" p-label="button template ionic"></po-button>

<ng-template #template>
 <ion-icon style="font-size: inherit" name="heart"></ion-icon>
</ng-template>
`),Zg()(),Jc(787,`blockquote`)(788,`p`),Tk(789,`Para o ícone enquadrar corretamente, deve-se utilizar `),Jc(790,`code`),Tk(791,`font-size: inherit`),Zg(),Tk(792,` caso o ícone utilizado não aplique-o.`),Zg()()()(),Jc(793,`tr`,16)(794,`td`,17)(795,`div`,18)(796,`span`,19),Tk(797,` p-kind`),_u(798,`br`),Zg()()(),Jc(799,`td`,20)(800,`code`,21),Tk(801,`string`),Zg()(),Jc(802,`td`,22)(803,`p`)(804,`code`),Tk(805,`secondary`),Zg()()(),Jc(806,`td`,23)(807,`em`)(808,`strong`),Tk(809,`(opcional)`),Zg()(),Jc(810,`p`),Tk(811,`Define o estilo visual do componente conforme valores especificados no enum `),Jc(812,`code`),Tk(813,`PoButtonKind`),Zg(),Tk(814,`:`),Zg(),Jc(815,`ul`)(816,`li`)(817,`code`),Tk(818,`primary`),Zg(),Tk(819,`: destaca o botão, sendo recomendado para ações principais.`),Zg(),Jc(820,`li`)(821,`code`),Tk(822,`secondary`),Zg(),Tk(823,`: estilo padrão, ideal para ações secundárias.`),Zg(),Jc(824,`li`)(825,`code`),Tk(826,`tertiary`),Zg(),Tk(827,`: exibe o botão sem preenchimento no fundo, indicado para ações opcionais.`),Zg(),Jc(828,`li`)(829,`code`),Tk(830,`glow`),Zg(),Tk(831,`: exibe o bot\xE3o em formato de p\xEDlula com um brilho animado percorrendo a borda, indicado para destacar
uma chamada para a\xE7\xE3o. Deve ser usado com modera\xE7\xE3o, preferencialmente em apenas um bot\xE3o por p\xE1gina.`),Zg()(),Jc(832,`blockquote`)(833,`p`),Tk(834,`O estilo `),Jc(835,`code`),Tk(836,`glow`),Zg(),Tk(837,` é incompatível com a propriedade `),Jc(838,`code`),Tk(839,`p-danger`),Zg(),Tk(840,`.`),Zg()()()(),Jc(841,`tr`,16)(842,`td`,17)(843,`div`,18)(844,`span`,19),Tk(845,` p-label`),_u(846,`br`),Zg()()(),Jc(847,`td`,20)(848,`code`,21),Tk(849,`string`),Zg()(),Jc(850,`td`,22),Tk(851,`-`),Zg(),Jc(852,`td`,23)(853,`em`)(854,`strong`),Tk(855,`(opcional)`),Zg()(),Jc(856,`p`),Tk(857,`Label do botão.`),Zg()()(),Jc(858,`tr`,16)(859,`td`,17)(860,`div`,18)(861,`span`,19),Tk(862,` p-loading`),_u(863,`br`),Zg()()(),Jc(864,`td`,20)(865,`code`,27),Tk(866,`boolean`),Zg()(),Jc(867,`td`,22)(868,`p`)(869,`code`),Tk(870,`false`),Zg()()(),Jc(871,`td`,23)(872,`em`)(873,`strong`),Tk(874,`(opcional)`),Zg()(),Jc(875,`p`),Tk(876,`Exibe um ícone de carregamento à esquerda do `),Jc(877,`em`),Tk(878,`label`),Zg(),Tk(879,` do botão.`),Zg(),Jc(880,`blockquote`)(881,`p`),Tk(882,`Quando esta propriedade estiver habilitada, desabilitará o botão.`),Zg()()()(),Jc(883,`tr`,16)(884,`td`,17)(885,`div`,18)(886,`span`,19),Tk(887,` p-size`),_u(888,`br`),Zg()()(),Jc(889,`td`,20)(890,`code`,21),Tk(891,`string`),Zg()(),Jc(892,`td`,22)(893,`p`)(894,`code`),Tk(895,`medium`),Zg()()(),Jc(896,`td`,23)(897,`em`)(898,`strong`),Tk(899,`(opcional)`),Zg()(),Jc(900,`p`),Tk(901,`Define o tamanho do componente:`),Zg(),Jc(902,`ul`)(903,`li`)(904,`code`),Tk(905,`small`),Zg(),Tk(906,`: altura de 32px (disponível apenas para acessibilidade AA).`),Zg(),Jc(907,`li`)(908,`code`),Tk(909,`medium`),Zg(),Tk(910,`: altura de 44px.`),Zg(),Jc(911,`li`)(912,`code`),Tk(913,`large`),Zg(),Tk(914,`: altura de 56px.`),Zg()(),Jc(915,`blockquote`)(916,`p`),Tk(917,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Jc(918,`code`),Tk(919,`medium`),Zg(),Tk(920,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Jc(921,`a`,30),Tk(922,`po-theme`),Zg(),Tk(923,`.`),Zg()()()(),Jc(924,`tr`,16)(925,`td`,17)(926,`div`,18)(927,`span`,19),Tk(928,` p-tabindex`),_u(929,`br`),Zg()()(),Jc(930,`td`,20)(931,`code`,31),Tk(932,`number `),Zg(),Jc(933,`code`,21),Tk(934,` string`),Zg()(),Jc(935,`td`,22),Tk(936,`-`),Zg(),Jc(937,`td`,23)(938,`em`)(939,`strong`),Tk(940,`(opcional)`),Zg()(),Jc(941,`p`),Tk(942,`Define o `),Jc(943,`code`),Tk(944,`tabindex`),Zg(),Tk(945,` do elemento `),Jc(946,`code`),Tk(947,`<button>`),Zg(),Tk(948,` nativo interno.`),Zg(),Jc(949,`p`),Tk(950,`Use `),Jc(951,`code`),Tk(952,`[tabindex]="-1"`),Zg(),Tk(953,` para remover o botão da ordem de foco do teclado.`),Zg()()(),Jc(954,`tr`,16)(955,`td`,17)(956,`div`,18)(957,`span`,19),Tk(958,` p-type`),_u(959,`br`),Zg()()(),Jc(960,`td`,20)(961,`code`,32),Tk(962,`PoButtonType`),Zg()(),Jc(963,`td`,22)(964,`p`)(965,`code`),Tk(966,`PoButtonType.Button`),Zg()()(),Jc(967,`td`,23)(968,`em`)(969,`strong`),Tk(970,`(opcional)`),Zg()(),Jc(971,`p`),Tk(972,`Define o tipo do botão.`),Zg()()()(),Jc(973,`h3`,12),Tk(974,`Métodos`),Zg(),Jc(975,`table`,33)(976,`tr`,16)(977,`th`,34)(978,`div`,18)(979,`h4`)(980,`span`,19),Tk(981,` focus `),Zg()()()()(),Jc(982,`tr`,23)(983,`td`,23)(984,`p`),Tk(985,`Função que atribui foco ao componente.`),Zg(),Jc(986,`p`),Tk(987,`Para utilizá-la é necessário ter a instância do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:`),Zg(),Jc(988,`pre`)(989,`code`),Tk(990,`import { PoButtonComponent } from '@po-ui/ng-components';

...

@ViewChild(PoButtonComponent, { static: true }) button: PoButtonComponent;

focusButton() {
  this.button.focus();
}
`),Zg()()()()(),_u(991,`br`),Jc(992,`h3`),Tk(993,`Enums`),Zg(),Jc(994,`h4`,4)(995,`code`,5),Tk(996,`PoButtonKind`),Zg()(),Jc(997,`div`,2)(998,`p`),Tk(999,`Estilos disponíveis do button.`),Zg()(),Jc(1e3,`h4`,12),Tk(1001,`Propriedades`),Zg(),Jc(1002,`table`,13)(1003,`tr`,14)(1004,`th`,15),Tk(1005,`Nome`),Zg(),Jc(1006,`th`,15),Tk(1007,`Descrição`),Zg()(),Jc(1008,`tr`,16)(1009,`td`,17)(1010,`div`,18)(1011,`span`,19),Tk(1012,` primary`),_u(1013,`br`),Zg()()(),Jc(1014,`td`,23)(1015,`p`),Tk(1016,`Estilo primário, usado para ações principais que requerem maior destaque.`),Zg()()(),Jc(1017,`tr`,16)(1018,`td`,17)(1019,`div`,18)(1020,`span`,19),Tk(1021,` secondary`),_u(1022,`br`),Zg()()(),Jc(1023,`td`,23)(1024,`p`),Tk(1025,`Estilo secundário, usado como padrão, para ações comuns.`),Zg()()(),Jc(1026,`tr`,16)(1027,`td`,17)(1028,`div`,18)(1029,`span`,19),Tk(1030,` tertiary`),_u(1031,`br`),Zg()()(),Jc(1032,`td`,23)(1033,`p`),Tk(1034,`Estilo terciário, ideal para ações menos importantes, sem fundo preenchido.`),Zg()()(),Jc(1035,`tr`,16)(1036,`td`,17)(1037,`div`,18)(1038,`span`,19),Tk(1039,` glow`),_u(1040,`br`),Zg()()(),Jc(1041,`td`,23)(1042,`p`),Tk(1043,`Estilo com brilho animado que percorre a borda do botão, usado para destacar uma chamada para ação.`),Zg(),Jc(1044,`blockquote`)(1045,`p`),Tk(1046,`Incompatível com a propriedade `),Jc(1047,`code`),Tk(1048,`p-danger`),Zg(),Tk(1049,`.`),Zg()()()()(),Jc(1050,`h4`,4)(1051,`code`,5),Tk(1052,`PoButtonType`),Zg()(),Jc(1053,`div`,2)(1054,`p`),Tk(1055,`Enumeração que define os tipos possíveis para o `),Jc(1056,`code`),Tk(1057,`PoButtonComponent`),Zg(),Tk(1058,`. Estes tipos est\xE3o relacionados ao comportamento
do bot\xE3o quando utilizado dentro de um formul\xE1rio HTML.`),Zg()(),Jc(1059,`h4`,12),Tk(1060,`Propriedades`),Zg(),Jc(1061,`table`,13)(1062,`tr`,14)(1063,`th`,15),Tk(1064,`Nome`),Zg(),Jc(1065,`th`,15),Tk(1066,`Descrição`),Zg()(),Jc(1067,`tr`,16)(1068,`td`,17)(1069,`div`,18)(1070,`span`,19),Tk(1071,` Submit`),_u(1072,`br`),Zg()()(),Jc(1073,`td`,23)(1074,`p`),Tk(1075,`Define o botão como do tipo `),Jc(1076,`code`),Tk(1077,`submit`),Zg(),Tk(1078,`. Quando clicado, o formul\xE1rio \xE9 enviado automaticamente,
disparando o evento `),Jc(1079,`code`),Tk(1080,`submit`),Zg(),Tk(1081,`.`),Zg()()(),Jc(1082,`tr`,16)(1083,`td`,17)(1084,`div`,18)(1085,`span`,19),Tk(1086,` Button`),_u(1087,`br`),Zg()()(),Jc(1088,`td`,23)(1089,`p`),Tk(1090,`Define o botão como do tipo `),Jc(1091,`code`),Tk(1092,`button`),Zg(),Tk(1093,`. Este tipo de bot\xE3o n\xE3o possui comportamento padr\xE3o associado
e \xE9 utilizado principalmente para a\xE7\xF5es program\xE1ticas como cliques e disparos de eventos customizados.`),Zg()()(),Jc(1094,`tr`,16)(1095,`td`,17)(1096,`div`,18)(1097,`span`,19),Tk(1098,` Reset`),_u(1099,`br`),Zg()()(),Jc(1100,`td`,23)(1101,`p`),Tk(1102,`Define o botão como do tipo `),Jc(1103,`code`),Tk(1104,`reset`),Zg(),Tk(1105,`. Quando clicado, redefine os campos do formul\xE1rio ao qual pertence
para seus valores iniciais.`),Zg()()()()())},dependencies:[P],encapsulation:2,changeDetection:1})}return o})();function Oe(o,G){if(o&1){let r=ZO();Jc(0,`po-tab`,4),vt(`p-click`,function(){U_(r);let i=nk();return H_(i.changeTab(`web`))}),_u(1,`sample-po-button-basic-view`)(2,`sample-po-button-labs-view`)(3,`sample-po-button-social-network-view`),Zg()}if(o&2){let r=nk();Rb(`p-active`,r.activeTab===`web`)}}var Me=[{path:``,component:(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(r,a){this.route=r,this.router=a}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let a=r.view;this.activeTab=a||(this.samplesLength>0?`web`:`doc`),this.hidePoWebSample=this.samplesLength===0})}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:`merge`}),this.activeTab=r}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(a){return new(a||o)(I(ar),I(An))};static ɵcmp=Jn({type:o,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:3,consts:[[`p-title`,`Button`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Exemplos`,3,`p-active`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-active`]],template:function(a,i){a&1&&(Jc(0,`po-page-default`,0)(1,`po-tabs`,1),VO(2,Oe,4,1,`po-tab`,2),Jc(3,`po-tab`,3),vt(`p-click`,function(){return i.changeTab(`doc`)}),_u(4,`sample-po-button-doc`),Zg()()()),a&2&&(Rb(`p-actions`,i.actions),Ig(2),BO(i.hidePoWebSample?-1:2),Ig(),Rb(`p-active`,i.activeTab===`doc`))},dependencies:[Tze,Qae,ere,pe,ue,be,Se],encapsulation:2,changeDetection:1})}return o})()}];var xe=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵmod=ge({type:o});static ɵinj=de({imports:[WV.forChild(Me),WV]})}return o})();var ct=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵmod=ge({type:o});static ɵinj=de({imports:[M,xe]})}return o})();export{ct as DocPoButtonModule};