import{$r as RK,Ai as Zn,Br as MK,C as G4,Ca as o0,Ci as Xx,Cn as rie,Ga as vo,Ia as rg,Ii as ab,Jr as Ok,K as Nze,Ka as vx,La as sb,Li as b,Mi as __,Mn as ure,Nr as I1,Oa as pe,Pa as r0,Qa as xF,Ra as uO,Sa as nu,Sn as ri,Tr as Fx,Ua as v_,Wt as eie,Xa as wg,Yn as zu,Z as P4,_r as Dx,_t as Vze,a as $oe,aa as ir,ca as jc,di as UE,ea as h,fr as DO,ha as lO,ii as SK,io as yo,ir as Ax,ln as lre,oa as iu,oi as Sn,ri as SF,rr as Ag,sn as l5,sr as Bx,tt as Qte,wt as Xoe,x as Ff,ya as mt,za as ue}from"./chunk-CtaZqRb_.js";import{n as P,t as M}from"./main-ZQ7GH27Y.js";var ce=(()=>{class o{static ɵfac=function(r){return new(r||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-page-edit-basic`]],standalone:!1,decls:1,vars:0,consts:[[`p-title`,`PO Page Edit`]],template:function(r,i){r&1&&nu(0,`po-page-edit`,0)},dependencies:[Nze],encapsulation:2,changeDetection:1})}return o})();var _e=o=>({"docs-sample-code-tabs":o});var ge=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-page-edit-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),lO(3,`PO Page Edit Basic`),wg(),jc(4,`a`,2),mt(`click`,function(){return i.toggleSampleCodeTabs()}),nu(5,`span`),lO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),lO(12,`sample-po-page-edit-basic/sample-po-page-edit-basic.component.html`),wg(),jc(13,`pre`,7),lO(14,`<po-page-edit p-title="PO Page Edit"> </po-page-edit>
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),lO(18,`sample-po-page-edit-basic/sample-po-page-edit-basic.component.ts`),wg(),jc(19,`pre`,9),lO(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-page-edit-basic',
  templateUrl: './sample-po-page-edit-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPageEditBasicComponent {}
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-page-edit-basic`),wg(),nu(23,`hr`)),r&2&&(rg(5),Xx(`po-icon `+i.sampleCodeButtonIcon),rg(),Ag(` `,i.sampleCodeButtonLabel),rg(),UE(`ngClass`,DO(4,_e,i.hideSampleCodeTabs)))},dependencies:[Ok,P,lre,ure,ce],encapsulation:2,changeDetection:1})}return o})();var be=(()=>{class o{action;breadcrumb;breadcrumbItem;breadcrumbParams;componentsSize;customLiterals;literals;params;properties;title;subtitle;componentsSizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];propertiesOptions=[{value:`disableSubmit`,label:`Disable Submit`}];ngOnInit(){this.restore()}addBreadcrumbItem(){this.breadcrumb.items=this.breadcrumb.items.concat([this.breadcrumbItem]),this.breadcrumbItem={label:void 0,link:void 0}}addBreadcrumbParam(){let p={[this.breadcrumbParams.property]:this.breadcrumbParams.value};this.breadcrumb.params?this.breadcrumb.params=Object.assign(this.breadcrumb.params,p):this.breadcrumb.params=p,this.breadcrumbParams={}}cancel(){this.action=`Cancel`}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals)}catch(p){this.customLiterals=void 0}}restore(){this.action=``,this.breadcrumb={items:[]},this.breadcrumbItem={label:void 0,link:void 0},this.breadcrumbParams={},this.componentsSize=`medium`,this.customLiterals=void 0,this.literals=``,this.properties=[],this.title=`PO Page Edit`,this.subtitle=``}save(){this.action=`Save`}saveNew(){this.action=`Save and new`}static ɵfac=function(r){return new(r||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-page-edit-labs`]],standalone:!1,decls:34,vars:21,consts:[[`formBreadcrumbFavorite`,`ngForm`],[`formBreadcrumbItems`,`ngForm`],[`formBreadcrumbParams`,`ngForm`],[3,`p-cancel`,`p-save`,`p-save-new`,`p-breadcrumb`,`p-components-size`,`p-disable-submit`,`p-literals`,`p-title`,`p-subtitle`],[1,`po-row`],[`p-label`,`Action`,1,`po-md-12`,3,`p-value`],[`name`,`title`,`p-label`,`Title`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`subtitle`,`p-label`,`Subtitle`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`properties`,`p-columns`,`4`,`p-label`,`Properties`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`size`,`p-columns`,`4`,`p-label`,`Components size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`breadcrumbFavorite`,`p-clean`,``,`p-help`,`https://po-sample-api.onrender.com/v1/favorite`,`p-label`,`Breadcrumb favorite`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`breadcrumbItemLabel`,`p-clean`,``,`p-label`,`Breadcrumb item label`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`breadcrumbItemLink`,`p-clean`,``,`p-label`,`Breadcrumb item link`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Add breadcrumb item`,1,`po-md-6`,`po-lg-3`,3,`p-click`,`p-disabled`],[`name`,`breadcrumbParamsProperty`,`p-clean`,``,`p-label`,`Breadcrumb params property`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`breadcrumbParamsValue`,`p-clean`,``,`p-label`,`Breadcrumb params value`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Add breadcrumb params`,1,`po-md-6`,`po-lg-3`,3,`p-click`,`p-disabled`],[`name`,`literals`,`p-help`,`Ex.: {"cancel": "Voltar", "save": "Confirmar", "saveNew": "Confirmar e criar um novo"}`,`p-label`,`Literals`,1,`po-md-12`,`po-lg-6`,3,`ngModelChange`,`p-change`,`ngModel`],[`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`]],template:function(r,i){if(r&1){let d=Ax();jc(0,`po-page-edit`,3),mt(`p-cancel`,function(){return i.cancel()})(`p-save`,function(){return i.save()})(`p-save-new`,function(){return i.saveNew()}),jc(1,`div`,4),nu(2,`po-info`,5),wg(),nu(3,`po-divider`),jc(4,`form`)(5,`div`,4)(6,`po-input`,6),r0(),ab(`ngModelChange`,function(a){return v_(d),uO(i.title,a)||(i.title=a),__(a)}),wg(),jc(7,`po-input`,7),r0(),ab(`ngModelChange`,function(a){return v_(d),uO(i.subtitle,a)||(i.subtitle=a),__(a)}),wg(),jc(8,`po-checkbox-group`,8),r0(),ab(`ngModelChange`,function(a){return v_(d),uO(i.properties,a)||(i.properties=a),__(a)}),wg(),jc(9,`po-radio-group`,9),r0(),ab(`ngModelChange`,function(a){return v_(d),uO(i.componentsSize,a)||(i.componentsSize=a),__(a)}),wg()(),nu(10,`po-divider`),jc(11,`form`,null,0)(13,`div`,4)(14,`po-input`,10),r0(),ab(`ngModelChange`,function(a){return v_(d),uO(i.breadcrumb.favorite,a)||(i.breadcrumb.favorite=a),__(a)}),wg()()(),jc(15,`form`,null,1)(17,`div`,4)(18,`po-input`,11),r0(),ab(`ngModelChange`,function(a){return v_(d),uO(i.breadcrumbItem.label,a)||(i.breadcrumbItem.label=a),__(a)}),wg(),jc(19,`po-input`,12),r0(),ab(`ngModelChange`,function(a){return v_(d),uO(i.breadcrumbItem.link,a)||(i.breadcrumbItem.link=a),__(a)}),wg()(),jc(20,`div`,4)(21,`po-button`,13),mt(`p-click`,function(){return i.addBreadcrumbItem()}),wg()()(),nu(22,`po-divider`),jc(23,`form`,null,2)(25,`div`,4)(26,`po-input`,14),r0(),ab(`ngModelChange`,function(a){return v_(d),uO(i.breadcrumbParams.property,a)||(i.breadcrumbParams.property=a),__(a)}),wg(),jc(27,`po-input`,15),r0(),ab(`ngModelChange`,function(a){return v_(d),uO(i.breadcrumbParams.value,a)||(i.breadcrumbParams.value=a),__(a)}),wg()(),jc(28,`div`,4)(29,`po-button`,16),mt(`p-click`,function(){return i.addBreadcrumbParam()}),wg()()(),jc(30,`div`,4)(31,`po-input`,17),r0(),ab(`ngModelChange`,function(a){return v_(d),uO(i.literals,a)||(i.literals=a),__(a)}),mt(`p-change`,function(){return i.changeLiterals()}),wg()(),jc(32,`div`,4)(33,`po-button`,18),mt(`p-click`,function(){return i.restore()}),wg()()()()}if(r&2){let d=Bx(16),s=Bx(24);UE(`p-breadcrumb`,i.breadcrumb)(`p-components-size`,i.componentsSize)(`p-disable-submit`,i.properties.includes(`disableSubmit`))(`p-literals`,i.customLiterals)(`p-title`,i.title)(`p-subtitle`,i.subtitle),rg(2),UE(`p-value`,i.action),rg(4),sb(`ngModel`,i.title),o0(),rg(),sb(`ngModel`,i.subtitle),o0(),rg(),sb(`ngModel`,i.properties),UE(`p-options`,i.propertiesOptions),o0(),rg(),sb(`ngModel`,i.componentsSize),UE(`p-options`,i.componentsSizeOptions),o0(),rg(5),sb(`ngModel`,i.breadcrumb.favorite),o0(),rg(4),sb(`ngModel`,i.breadcrumbItem.label),o0(),rg(),sb(`ngModel`,i.breadcrumbItem.link),o0(),rg(2),UE(`p-disabled`,d.invalid),rg(5),sb(`ngModel`,i.breadcrumbParams.property),o0(),rg(),sb(`ngModel`,i.breadcrumbParams.value),o0(),rg(2),UE(`p-disabled`,s.invalid),rg(2),sb(`ngModel`,i.literals),o0()}},dependencies:[RK,SK,MK,xF,SF,ri,Ff,P4,G4,Qte,Xoe,Nze],encapsulation:2,changeDetection:1})}return o})();var Me=o=>({"docs-sample-code-tabs":o});var Ee=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-page-edit-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),lO(3,`PO Page Edit Labs`),wg(),jc(4,`a`,2),mt(`click`,function(){return i.toggleSampleCodeTabs()}),nu(5,`span`),lO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),lO(12,`sample-po-page-edit-labs/sample-po-page-edit-labs.component.html`),wg(),jc(13,`pre`,7),lO(14,`<po-page-edit
  [p-breadcrumb]="breadcrumb"
  [p-components-size]="componentsSize"
  [p-disable-submit]="properties.includes('disableSubmit')"
  [p-literals]="customLiterals"
  [p-title]="title"
  (p-cancel)="cancel()"
  (p-save)="save()"
  (p-save-new)="saveNew()"
  [p-subtitle]="subtitle"
>
  <div class="po-row">
    <po-info class="po-md-12" p-label="Action" [p-value]="action"> </po-info>
  </div>

  <po-divider />

  <form>
    <div class="po-row">
      <po-input class="po-md-6" name="title" [(ngModel)]="title" p-label="Title"> </po-input>
      <po-input class="po-md-6" name="subtitle" [(ngModel)]="subtitle" p-label="Subtitle"> </po-input>

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
        [(ngModel)]="componentsSize"
        p-columns="4"
        p-label="Components size"
        p-help="Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme)."
        [p-options]="componentsSizeOptions"
      >
      </po-radio-group>
    </div>

    <po-divider />

    <form #formBreadcrumbFavorite="ngForm">
      <div class="po-row">
        <po-input
          class="po-md-6"
          name="breadcrumbFavorite"
          [(ngModel)]="breadcrumb.favorite"
          p-clean
          p-help="https://po-sample-api.onrender.com/v1/favorite"
          p-label="Breadcrumb favorite"
        >
        </po-input>
      </div>
    </form>

    <form #formBreadcrumbItems="ngForm">
      <div class="po-row">
        <po-input
          class="po-md-6"
          name="breadcrumbItemLabel"
          [(ngModel)]="breadcrumbItem.label"
          p-clean
          p-label="Breadcrumb item label"
          p-required
        >
        </po-input>

        <po-input
          class="po-md-6"
          name="breadcrumbItemLink"
          [(ngModel)]="breadcrumbItem.link"
          p-clean
          p-label="Breadcrumb item link"
          p-required
        >
        </po-input>
      </div>

      <div class="po-row">
        <po-button
          class="po-md-6 po-lg-3"
          p-label="Add breadcrumb item"
          [p-disabled]="formBreadcrumbItems.invalid"
          (p-click)="addBreadcrumbItem()"
        >
        </po-button>
      </div>
    </form>

    <po-divider />

    <form #formBreadcrumbParams="ngForm">
      <div class="po-row">
        <po-input
          class="po-md-6"
          name="breadcrumbParamsProperty"
          [(ngModel)]="breadcrumbParams.property"
          p-clean
          p-label="Breadcrumb params property"
          p-required
        >
        </po-input>

        <po-input
          class="po-md-6"
          name="breadcrumbParamsValue"
          [(ngModel)]="breadcrumbParams.value"
          p-clean
          p-label="Breadcrumb params value"
          p-required
        >
        </po-input>
      </div>

      <div class="po-row">
        <po-button
          class="po-md-6 po-lg-3"
          p-label="Add breadcrumb params"
          [p-disabled]="formBreadcrumbParams.invalid"
          (p-click)="addBreadcrumbParam()"
        >
        </po-button>
      </div>
    </form>

    <div class="po-row">
      <po-input
        class="po-md-12 po-lg-6"
        name="literals"
        [(ngModel)]="literals"
        p-help='Ex.: {"cancel": "Voltar", "save": "Confirmar", "saveNew": "Confirmar e criar um novo"}'
        p-label="Literals"
        (p-change)="changeLiterals()"
      >
      </po-input>
    </div>

    <div class="po-row">
      <po-button class="po-lg-3 po-md-6" p-label="Sample Restore" (p-click)="restore()"> </po-button>
    </div>
  </form>
</po-page-edit>
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),lO(18,`sample-po-page-edit-labs/sample-po-page-edit-labs.component.ts`),wg(),jc(19,`pre`,9),lO(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { PoBreadcrumb, PoBreadcrumbItem, PoCheckboxGroupOption, PoRadioGroupOption } from '@po-ui/ng-components';

import { PoPageEditLiterals } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-page-edit-labs',
  templateUrl: './sample-po-page-edit-labs.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPageEditLabsComponent implements OnInit {
  action: string;
  breadcrumb: PoBreadcrumb;
  breadcrumbItem: PoBreadcrumbItem;
  breadcrumbParams: any;
  componentsSize: string;
  customLiterals: PoPageEditLiterals;
  literals: string;
  params: any;
  properties: Array<string>;
  title: string;
  subtitle: string;

  public readonly componentsSizeOptions: Array<PoRadioGroupOption> = [
    { label: 'small', value: 'small' },
    { label: 'medium', value: 'medium' }
  ];

  public readonly propertiesOptions: Array<PoCheckboxGroupOption> = [
    { value: 'disableSubmit', label: 'Disable Submit' }
  ];

  ngOnInit() {
    this.restore();
  }

  addBreadcrumbItem() {
    this.breadcrumb.items = this.breadcrumb.items.concat([this.breadcrumbItem]);
    this.breadcrumbItem = { label: undefined, link: undefined };
  }

  addBreadcrumbParam() {
    const newParam = { [this.breadcrumbParams.property]: this.breadcrumbParams.value };

    if (this.breadcrumb.params) {
      this.breadcrumb.params = Object.assign(this.breadcrumb.params, newParam);
    } else {
      this.breadcrumb.params = newParam;
    }

    this.breadcrumbParams = {};
  }

  cancel() {
    this.action = 'Cancel';
  }

  changeLiterals() {
    try {
      this.customLiterals = JSON.parse(this.literals);
    } catch {
      this.customLiterals = undefined;
    }
  }

  restore() {
    this.action = '';
    this.breadcrumb = { items: [] };
    this.breadcrumbItem = { label: undefined, link: undefined };
    this.breadcrumbParams = {};
    this.componentsSize = 'medium';
    this.customLiterals = undefined;
    this.literals = '';
    this.properties = [];
    this.title = 'PO Page Edit';
    this.subtitle = '';
  }

  save() {
    this.action = 'Save';
  }

  saveNew() {
    this.action = 'Save and new';
  }
}
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-page-edit-labs`),wg(),nu(23,`hr`)),r&2&&(rg(5),Xx(`po-icon `+i.sampleCodeButtonIcon),rg(),Ag(` `,i.sampleCodeButtonLabel),rg(),UE(`ngClass`,DO(4,Me,i.hideSampleCodeTabs)))},dependencies:[Ok,P,lre,ure,be],encapsulation:2,changeDetection:1})}return o})();var Be=[`formEditUser`];var he=(()=>{class o{route=h(Sn);poDialog=h(rie);poNotification=h(zu);formEditUser;birthDate;email;fathersName;genre;graduation;mothersName;name;nationality;nickname;placeOfBirth;userId;breadcrumb={items:[{label:`Home`,action:this.beforeRedirect.bind(this)},{label:`User Edit`}]};ngOnInit(){this.initialize()}cancel(){this.initialize()}initialize(){this.birthDate=new Date(1978,11,26),this.email=`john.doe@po-ui.com.br`,this.fathersName=`Mike Doe`,this.genre=`male`,this.graduation=`College Degree`,this.mothersName=`Jane Doe`,this.name=`John Doe`,this.nationality=`USA`,this.nickname=`John`,this.placeOfBirth=`Colorado`,this.userId=122635}save(){this.poNotification.success(`Save successfully`)}beforeRedirect(p){this.formEditUser.valid?this.route.navigate([`/`]):this.poDialog.confirm({title:`Confirm redirect to ${p}`,message:`There is data that has not been saved yet. Are you sure you want to quit?`,confirm:()=>this.route.navigate([`/`])})}static ɵfac=function(r){return new(r||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-page-edit-user`]],viewQuery:function(r,i){if(r&1&&iu(Be,7),r&2){let d;yo(d=vo())&&(i.formEditUser=d.first)}},standalone:!1,decls:18,vars:13,consts:[[`formEditUser`,`ngForm`],[`p-title`,`User Edit`,`p-subtitle`,`Fields marked with <b>*</b> are <u>required</u>`,3,`p-cancel`,`p-save`,`p-breadcrumb`,`p-disable-submit`],[1,`po-row`],[`name`,`userId`,`p-clean`,``,`p-label`,`User ID`,`p-required`,``,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`name`,`email`,`p-clean`,``,`p-label`,`Email`,`p-required`,``,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`name`,`name`,`p-clean`,``,`p-label`,`Name`,`p-required`,``,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`name`,`nickname`,`p-clean`,``,`p-label`,`Nickname`,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`name`,`birthDate`,`p-clean`,``,`p-label`,`Birth Date`,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`name`,`genre`,`p-clean`,``,`p-label`,`Genre`,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`name`,`nationality`,`p-clean`,``,`p-label`,`Nationality`,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`name`,`placeOfBirth`,`p-clean`,``,`p-label`,`Place Of Birth`,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`name`,`graduation`,`p-clean`,``,`p-label`,`Graduation`,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`name`,`fathersName`,`p-clean`,``,`p-label`,`Father's Name`,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`name`,`mothersName`,`p-clean`,``,`p-label`,`Mother's Name`,1,`po-md-4`,3,`ngModelChange`,`ngModel`]],template:function(r,i){if(r&1){let d=Ax();jc(0,`po-page-edit`,1),mt(`p-cancel`,function(){return i.cancel()})(`p-save`,function(){return i.save()}),jc(1,`form`,null,0)(3,`div`,2)(4,`po-number`,3),r0(),ab(`ngModelChange`,function(a){return v_(d),uO(i.userId,a)||(i.userId=a),__(a)}),wg(),jc(5,`po-email`,4),r0(),ab(`ngModelChange`,function(a){return v_(d),uO(i.email,a)||(i.email=a),__(a)}),wg(),jc(6,`po-input`,5),r0(),ab(`ngModelChange`,function(a){return v_(d),uO(i.name,a)||(i.name=a),__(a)}),wg()(),jc(7,`div`,2)(8,`po-input`,6),r0(),ab(`ngModelChange`,function(a){return v_(d),uO(i.nickname,a)||(i.nickname=a),__(a)}),wg(),jc(9,`po-datepicker`,7),r0(),ab(`ngModelChange`,function(a){return v_(d),uO(i.birthDate,a)||(i.birthDate=a),__(a)}),wg(),jc(10,`po-input`,8),r0(),ab(`ngModelChange`,function(a){return v_(d),uO(i.genre,a)||(i.genre=a),__(a)}),wg()(),jc(11,`div`,2)(12,`po-input`,9),r0(),ab(`ngModelChange`,function(a){return v_(d),uO(i.nationality,a)||(i.nationality=a),__(a)}),wg(),jc(13,`po-input`,10),r0(),ab(`ngModelChange`,function(a){return v_(d),uO(i.placeOfBirth,a)||(i.placeOfBirth=a),__(a)}),wg(),jc(14,`po-input`,11),r0(),ab(`ngModelChange`,function(a){return v_(d),uO(i.graduation,a)||(i.graduation=a),__(a)}),wg()(),jc(15,`div`,2)(16,`po-input`,12),r0(),ab(`ngModelChange`,function(a){return v_(d),uO(i.fathersName,a)||(i.fathersName=a),__(a)}),wg(),jc(17,`po-input`,13),r0(),ab(`ngModelChange`,function(a){return v_(d),uO(i.mothersName,a)||(i.mothersName=a),__(a)}),wg()()()()}if(r&2){let d=Bx(2);UE(`p-breadcrumb`,i.breadcrumb)(`p-disable-submit`,d.invalid),rg(4),sb(`ngModel`,i.userId),o0(),rg(),sb(`ngModel`,i.email),o0(),rg(),sb(`ngModel`,i.name),o0(),rg(2),sb(`ngModel`,i.nickname),o0(),rg(),sb(`ngModel`,i.birthDate),o0(),rg(),sb(`ngModel`,i.genre),o0(),rg(2),sb(`ngModel`,i.nationality),o0(),rg(),sb(`ngModel`,i.placeOfBirth),o0(),rg(),sb(`ngModel`,i.graduation),o0(),rg(2),sb(`ngModel`,i.fathersName),o0(),rg(),sb(`ngModel`,i.mothersName),o0()}},dependencies:[RK,SK,MK,xF,SF,eie,l5,G4,$oe,Nze],encapsulation:2,changeDetection:1})}return o})();var ke=o=>({"docs-sample-code-tabs":o});var Se=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-page-edit-user-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),lO(3,`PO Page Edit - User`),wg(),jc(4,`a`,2),mt(`click`,function(){return i.toggleSampleCodeTabs()}),nu(5,`span`),lO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),lO(12,`sample-po-page-edit-user/sample-po-page-edit-user.component.html`),wg(),jc(13,`pre`,7),lO(14,`<po-page-edit
  p-title="User Edit"
  p-subtitle="Fields marked with <b>*</b> are <u>required</u>"
  [p-breadcrumb]="breadcrumb"
  [p-disable-submit]="formEditUser.invalid"
  (p-cancel)="cancel()"
  (p-save)="save()"
>
  <form #formEditUser="ngForm">
    <div class="po-row">
      <po-number class="po-md-4" name="userId" [(ngModel)]="userId" p-clean p-label="User ID" p-required> </po-number>

      <po-email class="po-md-4" name="email" [(ngModel)]="email" p-clean p-label="Email" p-required> </po-email>

      <po-input class="po-md-4" name="name" [(ngModel)]="name" p-clean p-label="Name" p-required> </po-input>
    </div>

    <div class="po-row">
      <po-input class="po-md-4" name="nickname" [(ngModel)]="nickname" p-clean p-label="Nickname"> </po-input>

      <po-datepicker class="po-md-4" name="birthDate" [(ngModel)]="birthDate" p-clean p-label="Birth Date">
      </po-datepicker>

      <po-input class="po-md-4" name="genre" [(ngModel)]="genre" p-clean p-label="Genre"> </po-input>
    </div>

    <div class="po-row">
      <po-input class="po-md-4" name="nationality" [(ngModel)]="nationality" p-clean p-label="Nationality"> </po-input>

      <po-input class="po-md-4" name="placeOfBirth" [(ngModel)]="placeOfBirth" p-clean p-label="Place Of Birth">
      </po-input>

      <po-input class="po-md-4" name="graduation" [(ngModel)]="graduation" p-clean p-label="Graduation"> </po-input>
    </div>

    <div class="po-row">
      <po-input class="po-md-4" name="fathersName" [(ngModel)]="fathersName" p-clean p-label="Father's Name">
      </po-input>

      <po-input class="po-md-4" name="mothersName" [(ngModel)]="mothersName" p-clean p-label="Mother's Name">
      </po-input>
    </div>
  </form>
</po-page-edit>
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),lO(18,`sample-po-page-edit-user/sample-po-page-edit-user.component.ts`),wg(),jc(19,`pre`,9),lO(20,`import { Component, OnInit, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { PoBreadcrumb } from '@po-ui/ng-components';
import { PoDialogService } from '@po-ui/ng-components';
import { PoNotificationService } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-page-edit-user',
  templateUrl: './sample-po-page-edit-user.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPageEditUserComponent implements OnInit {
  private route = inject(Router);
  private poDialog = inject(PoDialogService);
  private poNotification = inject(PoNotificationService);

  @ViewChild('formEditUser', { static: true }) formEditUser: NgForm;

  birthDate: Date;
  email: string;
  fathersName: string;
  genre: string;
  graduation: string;
  mothersName: string;
  name: string;
  nationality: string;
  nickname: string;
  placeOfBirth: string;
  userId: number;

  public readonly breadcrumb: PoBreadcrumb = {
    items: [{ label: 'Home', action: this.beforeRedirect.bind(this) }, { label: 'User Edit' }]
  };

  ngOnInit() {
    this.initialize();
  }

  cancel() {
    this.initialize();
  }

  initialize() {
    this.birthDate = new Date(1978, 11, 26);
    this.email = 'john.doe@po-ui.com.br';
    this.fathersName = 'Mike Doe';
    this.genre = 'male';
    this.graduation = 'College Degree';
    this.mothersName = 'Jane Doe';
    this.name = 'John Doe';
    this.nationality = 'USA';
    this.nickname = 'John';
    this.placeOfBirth = 'Colorado';
    this.userId = 122635;
  }

  save() {
    this.poNotification.success(\`Save successfully\`);
  }

  private beforeRedirect(itemBreadcrumbLabel) {
    if (this.formEditUser.valid) {
      this.route.navigate(['/']);
    } else {
      this.poDialog.confirm({
        title: \`Confirm redirect to \${itemBreadcrumbLabel}\`,
        message: \`There is data that has not been saved yet. Are you sure you want to quit?\`,
        confirm: () => this.route.navigate(['/'])
      });
    }
  }
}
`),wg()()()()(),jc(21,`div`,10),nu(22,`sample-po-page-edit-user`),wg(),nu(23,`hr`)),r&2&&(rg(5),Xx(`po-icon `+i.sampleCodeButtonIcon),rg(),Ag(` `,i.sampleCodeButtonLabel),rg(),UE(`ngClass`,DO(4,ke,i.hideSampleCodeTabs)))},dependencies:[Ok,P,lre,ure,he],encapsulation:2,changeDetection:1})}return o})();var fe=(()=>{class o{static ɵfac=function(r){return new(r||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-page-edit-doc`]],standalone:!1,decls:605,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`PoBreadcrumb`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[`pan`,``,1,`docs-api-property-type`,`string`],[`href`,`https://po-ui.io/documentation/po-theme`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`pan`,``,1,`docs-api-property-type`,`PoPageEditLiterals`],[`href`,`/documentation/po-i18n`],[1,`language-typescript`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`Function`],[`href`,`/guides/getting-started`],[`pan`,``,1,`docs-api-property-type`,`Array<PoBreadcrumbItem>`],[`pan`,``,1,`docs-api-property-type`,`object`]],template:function(r,i){r&1&&(jc(0,`div`,0)(1,`p`,1)(2,`code`),lO(3,`import { PoPageModule } from '@po-ui/ng-components';`),wg()(),jc(4,`div`,2)(5,`p`),lO(6,`Módulo responsável pelos componentes de estrutura de página: `),jc(7,`code`),lO(8,`po-page-default`),wg(),lO(9,`, `),jc(10,`code`),lO(11,`po-page-detail`),wg(),lO(12,`,
`),jc(13,`code`),lO(14,`po-page-edit`),wg(),lO(15,`, `),jc(16,`code`),lO(17,`po-page-list`),wg(),lO(18,` e `),jc(19,`code`),lO(20,`po-page-slide`),wg(),lO(21,`.`),wg()(),jc(22,`h3`,3),lO(23,`Componente`),wg(),jc(24,`h4`,4)(25,`code`,5),lO(26,`PoPageEditComponent`),wg()(),jc(27,`div`,2)(28,`p`),lO(29,`O componente `),jc(30,`strong`),lO(31,`po-page-edit`),wg(),lO(32,` \xE9 utilizado como container principal para tela de edi\xE7\xE3o ou adi\xE7\xE3o de um
registro, tendo a possibilidade de usar as a\xE7\xF5es de "Salvar", "Salvar e Novo" e "Cancelar".`),wg(),jc(33,`p`),lO(34,`Os botões "Salvar" e "Salvar e Novo" podem ser habilitados/desabilitados utilizando a propriedade `),jc(35,`code`),lO(36,`p-disable-submit`),wg(),lO(37,`.
Esta propriedade pode ser utilizada para desabilitar os bot\xF5es caso exista um formul\xE1rio inv\xE1lido na p\xE1gina ou alguma
regra de neg\xF3cio n\xE3o tenha sido atendida.`),wg(),jc(38,`h4`),lO(39,`Tokens customizáveis`),wg(),jc(40,`blockquote`)(41,`p`),lO(42,`Para maiores informações, acesse o guia `),jc(43,`a`,6),lO(44,`Personalizando o Tema Padrão com Tokens CSS`),wg(),lO(45,`.`),wg()(),jc(46,`table`)(47,`thead`)(48,`tr`)(49,`th`),lO(50,`Propriedade`),wg(),jc(51,`th`),lO(52,`Descrição`),wg(),jc(53,`th`),lO(54,`Valor Padrão`),wg()()(),jc(55,`tbody`)(56,`tr`)(57,`td`)(58,`strong`),lO(59,`Header`),wg()(),nu(60,`td`)(61,`td`),wg(),jc(62,`tr`)(63,`td`)(64,`code`),lO(65,`--padding`),wg()(),jc(66,`td`),lO(67,`Espaçamento do header`),wg(),jc(68,`td`)(69,`code`),lO(70,`var(--spacing-xs) var(--spacing-md)`),wg()()(),jc(71,`tr`)(72,`td`)(73,`code`),lO(74,`--gap`),wg()(),jc(75,`td`),lO(76,`Espaçamento entre os breadcrumbs e o título`),wg(),jc(77,`td`)(78,`code`),lO(79,`var(--spacing-md)`),wg()()(),jc(80,`tr`)(81,`td`)(82,`code`),lO(83,`--gap-actions`),wg()(),jc(84,`td`),lO(85,`Espaçamento entre as ações`),wg(),jc(86,`td`)(87,`code`),lO(88,`var(--spacing-xs)`),wg()()(),jc(89,`tr`)(90,`td`)(91,`code`),lO(92,`--font-family`),wg()(),jc(93,`td`),lO(94,`Família tipográfica do título`),wg(),jc(95,`td`)(96,`code`),lO(97,`var(--font-family-theme)`),wg()()(),jc(98,`tr`)(99,`td`)(100,`strong`),lO(101,`Content`),wg()(),nu(102,`td`)(103,`td`),wg(),jc(104,`tr`)(105,`td`)(106,`code`),lO(107,`--padding-content`),wg()(),jc(108,`td`),lO(109,`Espaçamento do conteúdo`),wg(),jc(110,`td`)(111,`code`),lO(112,`var(--spacing-xs) var(--spacing-sm)`),wg()()()()()(),jc(113,`div`,7)(114,`h4`,8),lO(115,`Seletor`),wg(),jc(116,`pre`,9),lO(117,`<po-page-edit
    p-breadcrumb="PoBreadcrumb"
    (p-cancel)="EventEmitter"
    p-components-size="string"
    p-disable-submit="boolean"
    p-literals="PoPageEditLiterals"
    (p-save)="EventEmitter"
    (p-save-new)="EventEmitter"
    p-subtitle="string"
    p-title="string" >
</po-page-edit>
`),wg()(),jc(118,`h4`,10),lO(119,`Propriedades`),wg(),jc(120,`table`,11)(121,`tr`,12)(122,`th`,13),lO(123,`Nome`),wg(),jc(124,`th`,13),lO(125,`Tipo`),wg(),jc(126,`th`,13),lO(127,`Padrão`),wg(),jc(128,`th`,13),lO(129,`Descrição`),wg()(),jc(130,`tr`,14)(131,`td`,15)(132,`div`,16)(133,`span`,17),lO(134,` p-breadcrumb`),nu(135,`br`),wg()()(),jc(136,`td`,18)(137,`code`,19),lO(138,`PoBreadcrumb`),wg()(),jc(139,`td`,20),lO(140,`-`),wg(),jc(141,`td`,21)(142,`em`)(143,`strong`),lO(144,`(opcional)`),wg()(),jc(145,`p`),lO(146,`Objeto com propriedades do breadcrumb.`),wg()()(),jc(147,`tr`,14)(148,`td`,15)(149,`div`,22)(150,`span`,23),lO(151,` (p-cancel)`),nu(152,`br`),wg()()(),jc(153,`td`,18)(154,`code`,24),lO(155,`EventEmitter`),wg()(),jc(156,`td`,20),lO(157,`-`),wg(),jc(158,`td`,21)(159,`p`),lO(160,`Evento que será disparado ao clicar no botão de "Cancelar".`),wg(),jc(161,`pre`)(162,`code`),lO(163,`<po-page-edit (p-cancel)="myCancelFunction()">
</po-page-edit>
`),wg()(),jc(164,`blockquote`)(165,`p`),lO(166,`Caso não utilizar esta propriedade, o botão de "Cancelar" não será exibido.`),wg()()()(),jc(167,`tr`,14)(168,`td`,15)(169,`div`,16)(170,`span`,17),lO(171,` p-components-size`),nu(172,`br`),wg()()(),jc(173,`td`,18)(174,`code`,25),lO(175,`string`),wg()(),jc(176,`td`,20)(177,`p`)(178,`code`),lO(179,`medium`),wg()()(),jc(180,`td`,21)(181,`em`)(182,`strong`),lO(183,`(opcional)`),wg()(),jc(184,`p`),lO(185,`Define o tamanho dos componentes de formulário no template:`),wg(),jc(186,`ul`)(187,`li`)(188,`code`),lO(189,`small`),wg(),lO(190,`: aplica a medida small de cada componente (disponível apenas para acessibilidade AA).`),wg(),jc(191,`li`)(192,`code`),lO(193,`medium`),wg(),lO(194,`: aplica a medida medium de cada componente.`),wg()(),jc(195,`blockquote`)(196,`p`),lO(197,`Caso a acessibilidade AA não esteja configurada, o tamanho `),jc(198,`code`),lO(199,`medium`),wg(),lO(200,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),jc(201,`a`,26),lO(202,`po-theme`),wg(),lO(203,`.`),wg()()()(),jc(204,`tr`,14)(205,`td`,15)(206,`div`,16)(207,`span`,17),lO(208,` p-disable-submit`),nu(209,`br`),wg()()(),jc(210,`td`,18)(211,`code`,27),lO(212,`boolean`),wg()(),jc(213,`td`,20),lO(214,`-`),wg(),jc(215,`td`,21)(216,`em`)(217,`strong`),lO(218,`(opcional)`),wg()(),jc(219,`p`),lO(220,`Desabilita botões de submissão (save e saveNew)`),wg()()(),jc(221,`tr`,14)(222,`td`,15)(223,`div`,16)(224,`span`,17),lO(225,` p-literals`),nu(226,`br`),wg()()(),jc(227,`td`,18)(228,`code`,28),lO(229,`PoPageEditLiterals`),wg()(),jc(230,`td`,20),lO(231,`-`),wg(),jc(232,`td`,21)(233,`em`)(234,`strong`),lO(235,`(opcional)`),wg()(),jc(236,`p`),lO(237,`Objeto com as literais usadas no `),jc(238,`code`),lO(239,`po-page-edit`),wg(),lO(240,`.`),wg(),jc(241,`p`),lO(242,`Existem duas maneiras de customizar o componente, passando um objeto com todas as literais disponíveis:`),wg(),jc(243,`pre`)(244,`code`),lO(245,`const customLiterals: PoPageEditLiterals = {
  cancel: 'Voltar',
  save: 'Confirmar',
  saveNew: 'Confirmar e criar um novo'
};
`),wg()(),jc(246,`p`),lO(247,`Ou passando apenas as literais que deseja customizar:`),wg(),jc(248,`pre`)(249,`code`),lO(250,`const customLiterals: PoPageEditLiterals = {
  cancel: 'Cancelar processo'
};
`),wg()(),jc(251,`p`),lO(252,`E para carregar as literais customizadas, basta apenas passar o objeto para o componente.`),wg(),jc(253,`pre`)(254,`code`),lO(255,`<po-page-edit
  [p-literals]="customLiterals">
</po-page-edit>
`),wg()(),jc(256,`blockquote`)(257,`p`),lO(258,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do
`),jc(259,`a`,29)(260,`code`),lO(261,`PoI18nService`),wg()(),lO(262,` ou do browser.`),wg()()()(),jc(263,`tr`,14)(264,`td`,15)(265,`div`,22)(266,`span`,23),lO(267,` (p-save)`),nu(268,`br`),wg()()(),jc(269,`td`,18)(270,`code`,24),lO(271,`EventEmitter`),wg()(),jc(272,`td`,20),lO(273,`-`),wg(),jc(274,`td`,21)(275,`p`),lO(276,`Evento que será disparado ao clicar no botão de "Salvar".`),wg(),jc(277,`pre`)(278,`code`),lO(279,`<po-page-edit (p-save)="mySaveFunction()">
</po-page-edit>
`),wg()(),jc(280,`blockquote`)(281,`p`),lO(282,`Caso não utilizar esta propriedade, o botão de "Salvar" não será exibido.`),wg()()()(),jc(283,`tr`,14)(284,`td`,15)(285,`div`,22)(286,`span`,23),lO(287,` (p-save-new)`),nu(288,`br`),wg()()(),jc(289,`td`,18)(290,`code`,24),lO(291,`EventEmitter`),wg()(),jc(292,`td`,20),lO(293,`-`),wg(),jc(294,`td`,21)(295,`p`),lO(296,`Evento que será disparado ao clicar no botão de "Salvar e Novo".`),wg(),jc(297,`pre`)(298,`code`),lO(299,`<po-page-edit (p-save-new)="mySaveNewFunction()">
</po-page-edit>
`),wg()(),jc(300,`blockquote`)(301,`p`),lO(302,`Caso não utilizar esta propriedade, o botão de "Salvar e Novo" não será exibido.`),wg()()()(),jc(303,`tr`,14)(304,`td`,15)(305,`div`,16)(306,`span`,17),lO(307,` p-subtitle`),nu(308,`br`),wg()()(),jc(309,`td`,18)(310,`code`,25),lO(311,`string`),wg()(),jc(312,`td`,20),lO(313,`-`),wg(),jc(314,`td`,21)(315,`em`)(316,`strong`),lO(317,`(opcional)`),wg()(),jc(318,`p`),lO(319,`Subtitulo do Header da página.`),wg(),jc(320,`p`),lO(321,`Suporta formatação básica com as tags `),jc(322,`code`),lO(323,`<b>`),wg(),lO(324,` (negrito), `),jc(325,`code`),lO(326,`<strong>`),wg(),lO(327,` (negrito), `),jc(328,`code`),lO(329,`<i>`),wg(),lO(330,` (itálico), `),jc(331,`code`),lO(332,`<em>`),wg(),lO(333,` (it\xE1lico) e
`),jc(334,`code`),lO(335,`<u>`),wg(),lO(336,` (sublinhado).`),wg(),jc(337,`p`),lO(338,`Exemplo:`),wg(),jc(339,`pre`)(340,`code`,30),lO(341,`subtitle = 'Fields marked with <b>*</b> are <u>required</u>';
`),wg()(),jc(342,`blockquote`)(343,`p`),lO(344,`Requer que `),jc(345,`code`),lO(346,`p-title`),wg(),lO(347,` esteja definido.`),wg()()()(),jc(348,`tr`,14)(349,`td`,15)(350,`div`,16)(351,`span`,17),lO(352,` p-title`),nu(353,`br`),wg()()(),jc(354,`td`,18)(355,`code`,25),lO(356,`string`),wg()(),jc(357,`td`,20),lO(358,`-`),wg(),jc(359,`td`,21)(360,`p`),lO(361,`Título da página.`),wg()()()(),jc(362,`h3`),lO(363,`Interfaces`),wg(),jc(364,`h4`,31)(365,`code`,5),lO(366,`PoBreadcrumbItem`),wg()(),jc(367,`div`,2)(368,`p`),lO(369,`Interface que define cada item do componente `),jc(370,`strong`),lO(371,`po-breadcrumb`),wg(),lO(372,`.`),wg()(),jc(373,`h4`,10),lO(374,`Propriedades`),wg(),jc(375,`table`,11)(376,`tr`,12)(377,`th`,13),lO(378,`Nome`),wg(),jc(379,`th`,13),lO(380,`Tipo`),wg(),jc(381,`th`,13),lO(382,`Descrição`),wg()(),jc(383,`tr`,14)(384,`td`,15)(385,`div`,16)(386,`span`,17),lO(387,` action`),nu(388,`br`),wg()()(),jc(389,`td`,18)(390,`code`,32),lO(391,`Function`),wg()(),jc(392,`td`,21)(393,`em`)(394,`strong`),lO(395,`(opcional)`),wg()(),jc(396,`p`),lO(397,`Ação executada ao clicar no item.`),wg(),jc(398,`blockquote`)(399,`p`),lO(400,`A função atribuída a esta propriedade receberá o `),jc(401,`em`),lO(402,`label`),wg(),lO(403,` do item como parâmetro para execução.`),wg()()()(),jc(404,`tr`,14)(405,`td`,15)(406,`div`,16)(407,`span`,17),lO(408,` label`),nu(409,`br`),wg()()(),jc(410,`td`,18)(411,`code`,25),lO(412,`string`),wg()(),jc(413,`td`,21)(414,`p`),lO(415,`Rótulo do item.`),wg()()(),jc(416,`tr`,14)(417,`td`,15)(418,`div`,16)(419,`span`,17),lO(420,` link`),nu(421,`br`),wg()()(),jc(422,`td`,18)(423,`code`,25),lO(424,`string`),wg()(),jc(425,`td`,21)(426,`em`)(427,`strong`),lO(428,`(opcional)`),wg()(),jc(429,`p`),lO(430,`Url do item.`),wg(),jc(431,`blockquote`)(432,`p`),lO(433,`Caso o item também contenha uma `),jc(434,`em`),lO(435,`action`),wg(),lO(436,` definida, a preferência de execução será do `),jc(437,`em`),lO(438,`link`),wg(),lO(439,`.`),wg()(),jc(440,`blockquote`)(441,`p`),lO(442,`Para o correto funcionamento, \xE9 necess\xE1rio que haja uma rota referenciando seu valor.
`),jc(443,`strong`)(444,`a`,33),lO(445,`Veja um exemplo de como criar rotas aqui`),wg()(),lO(446,`.`),wg()(),jc(447,`blockquote`)(448,`p`),lO(449,`Esta propriedade é necessária para que a propriedade `),jc(450,`code`),lO(451,`p-favorite-service`),wg(),lO(452,` consiga favoritar ou desfavoritar.`),wg()()()()(),jc(453,`h4`,31)(454,`code`,5),lO(455,`PoBreadcrumb`),wg()(),jc(456,`div`,2)(457,`p`),lO(458,`Interface que define o `),jc(459,`code`),lO(460,`po-breadcrumb`),wg(),lO(461,`.`),wg()(),jc(462,`h4`,10),lO(463,`Propriedades`),wg(),jc(464,`table`,11)(465,`tr`,12)(466,`th`,13),lO(467,`Nome`),wg(),jc(468,`th`,13),lO(469,`Tipo`),wg(),jc(470,`th`,13),lO(471,`Descrição`),wg()(),jc(472,`tr`,14)(473,`td`,15)(474,`div`,16)(475,`span`,17),lO(476,` favorite`),nu(477,`br`),wg()()(),jc(478,`td`,18)(479,`code`,25),lO(480,`string`),wg()(),jc(481,`td`,21)(482,`em`)(483,`strong`),lO(484,`(opcional)`),wg()(),jc(485,`p`),lO(486,`Permite definir uma URL para favoritar ou desfavoritar.`),wg(),jc(487,`blockquote`)(488,`p`),lO(489,`Para maiores informações verificar a propriedade `),jc(490,`code`),lO(491,`p-favorite-service`),wg(),lO(492,` do componente `),jc(493,`code`),lO(494,`po-breadcrumb`),wg(),lO(495,`.`),wg()()()(),jc(496,`tr`,14)(497,`td`,15)(498,`div`,16)(499,`span`,17),lO(500,` items`),nu(501,`br`),wg()()(),jc(502,`td`,18)(503,`code`,34),lO(504,`Array<PoBreadcrumbItem>`),wg()(),jc(505,`td`,21)(506,`p`),lO(507,`Lista de itens do `),jc(508,`em`),lO(509,`breadcrumb`),wg(),lO(510,`.`),wg(),jc(511,`p`)(512,`strong`),lO(513,`Exemplo:`),wg()(),jc(514,`pre`)(515,`code`),lO(516,`{ label: 'Po Portal', link: 'portal' }
`),wg()()()(),jc(517,`tr`,14)(518,`td`,15)(519,`div`,16)(520,`span`,17),lO(521,` params`),nu(522,`br`),wg()()(),jc(523,`td`,18)(524,`code`,35),lO(525,`object`),wg()(),jc(526,`td`,21)(527,`em`)(528,`strong`),lO(529,`(opcional)`),wg()(),jc(530,`p`),lO(531,`Objeto que possibilita o envio de parâmetros adicionais à requisição.`),wg()()()(),jc(532,`h4`,31)(533,`code`,5),lO(534,`PoPageEditLiterals`),wg()(),jc(535,`div`,2)(536,`p`),lO(537,`Interface para definição das literais usadas no `),jc(538,`code`),lO(539,`po-page-edit`),wg(),lO(540,`.`),wg()(),jc(541,`h4`,10),lO(542,`Propriedades`),wg(),jc(543,`table`,11)(544,`tr`,12)(545,`th`,13),lO(546,`Nome`),wg(),jc(547,`th`,13),lO(548,`Tipo`),wg(),jc(549,`th`,13),lO(550,`Descrição`),wg()(),jc(551,`tr`,14)(552,`td`,15)(553,`div`,16)(554,`span`,17),lO(555,` cancel`),nu(556,`br`),wg()()(),jc(557,`td`,18)(558,`code`,25),lO(559,`string`),wg()(),jc(560,`td`,21)(561,`em`)(562,`strong`),lO(563,`(opcional)`),wg()(),jc(564,`p`),lO(565,`Label da ação `),jc(566,`code`),lO(567,`cancel`),wg(),lO(568,`.`),wg()()(),jc(569,`tr`,14)(570,`td`,15)(571,`div`,16)(572,`span`,17),lO(573,` save`),nu(574,`br`),wg()()(),jc(575,`td`,18)(576,`code`,25),lO(577,`string`),wg()(),jc(578,`td`,21)(579,`em`)(580,`strong`),lO(581,`(opcional)`),wg()(),jc(582,`p`),lO(583,`Label da ação `),jc(584,`code`),lO(585,`save`),wg(),lO(586,`.`),wg()()(),jc(587,`tr`,14)(588,`td`,15)(589,`div`,16)(590,`span`,17),lO(591,` saveNew`),nu(592,`br`),wg()()(),jc(593,`td`,18)(594,`code`,25),lO(595,`string`),wg()(),jc(596,`td`,21)(597,`em`)(598,`strong`),lO(599,`(opcional)`),wg()(),jc(600,`p`),lO(601,`Label da ação `),jc(602,`code`),lO(603,`saveNew`),wg(),lO(604,`.`),wg()()()()())},dependencies:[P],encapsulation:2,changeDetection:1})}return o})();function Ie(o,We){if(o&1){let p=Ax();jc(0,`po-tab`,4),mt(`p-click`,function(){v_(p);let i=Fx();return __(i.changeTab(`web`))}),nu(1,`sample-po-page-edit-basic-view`)(2,`sample-po-page-edit-labs-view`)(3,`sample-po-page-edit-user-view`),wg()}if(o&2){let p=Fx();UE(`p-active`,p.activeTab===`web`)}}var Ve=[{path:``,component:(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(p,r){this.route=p,this.router=r}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(p=>{let r=p.view;this.activeTab=r||(this.samplesLength>0?`web`:`doc`),this.hidePoWebSample=this.samplesLength===0})}changeTab(p){this.router.navigate([],{queryParams:{view:p},queryParamsHandling:`merge`}),this.activeTab=p}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(r){return new(r||o)(b(ir),b(Sn))};static ɵcmp=Zn({type:o,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:3,consts:[[`p-title`,`Page Edit`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Exemplos`,3,`p-active`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-active`]],template:function(r,i){r&1&&(jc(0,`po-page-default`,0)(1,`po-tabs`,1),vx(2,Ie,4,1,`po-tab`,2),jc(3,`po-tab`,3),mt(`p-click`,function(){return i.changeTab(`doc`)}),nu(4,`sample-po-page-edit-doc`),wg()()()),r&2&&(UE(`p-actions`,i.actions),rg(2),Dx(i.hidePoWebSample?-1:2),rg(),UE(`p-active`,i.activeTab===`doc`))},dependencies:[Vze,lre,ure,ge,Ee,Se,fe],encapsulation:2,changeDetection:1})}return o})()}];var Pe=(()=>{class o{static ɵfac=function(r){return new(r||o)};static ɵmod=pe({type:o});static ɵinj=ue({imports:[I1.forChild(Ve),I1]})}return o})();var ut=(()=>{class o{static ɵfac=function(r){return new(r||o)};static ɵmod=pe({type:o});static ɵinj=ue({imports:[M,Pe]})}return o})();export{ut as DocPoPageEditModule};