import{$n as Ak,Ar as Ig,Ei as WV,Er as H_,Fi as Yb,Fr as Jn,H as Mze,Hi as ar,Ia as sk,Ja as vt,Li as ZO,Mn as tre,Mr as Jc,Mt as are,Ni as Y0,On as sie,Ot as Zte,P as Joe,Ri as Zg,Rr as Kb,Ti as W0,U as Nf,Vi as _u,Xr as No,Yi as eF,an as j4,di as RZ,dr as Cu,ea as ge$1,eo as xo,er as An,fi as Rb,gi as Tk,hi as TZ,j as I4,jn as tie,jr as JL,k as Goe,ka as qL,kr as I,no as yk,nr as BO,or as Bk,qi as de,qr as NZ,s as Aze,tt as Ru,va as nk,vn as oi,wa as p,xi as VO,ya as nm,yi as U_,yn as p5}from"./chunk-BL0ij1th.js";import{n as P,t as M}from"./main-3VBI2GXJ.js";var ce=(()=>{class o{static ɵfac=function(r){return new(r||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-page-edit-basic`]],standalone:!1,decls:1,vars:0,consts:[[`p-title`,`PO Page Edit`]],template:function(r,i){r&1&&_u(0,`po-page-edit`,0)},dependencies:[Aze],encapsulation:2,changeDetection:1})}return o})();var _e=o=>({"docs-sample-code-tabs":o});var ge=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-page-edit-basic-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Page Edit Basic`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return i.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-page-edit-basic/sample-po-page-edit-basic.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<po-page-edit p-title="PO Page Edit"> </po-page-edit>
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-page-edit-basic/sample-po-page-edit-basic.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-page-edit-basic',
  templateUrl: './sample-po-page-edit-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPageEditBasicComponent {}
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-page-edit-basic`),Zg(),_u(23,`hr`)),r&2&&(Ig(5),yk(`po-icon `+i.sampleCodeButtonIcon),Ig(),nm(` `,i.sampleCodeButtonLabel),Ig(),Rb(`ngClass`,Bk(4,_e,i.hideSampleCodeTabs)))},dependencies:[eF,P,tre,are,ce],encapsulation:2,changeDetection:1})}return o})();var be=(()=>{class o{action;breadcrumb;breadcrumbItem;breadcrumbParams;componentsSize;customLiterals;literals;params;properties;title;subtitle;componentsSizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];propertiesOptions=[{value:`disableSubmit`,label:`Disable Submit`}];ngOnInit(){this.restore()}addBreadcrumbItem(){this.breadcrumb.items=this.breadcrumb.items.concat([this.breadcrumbItem]),this.breadcrumbItem={label:void 0,link:void 0}}addBreadcrumbParam(){let p={[this.breadcrumbParams.property]:this.breadcrumbParams.value};this.breadcrumb.params?this.breadcrumb.params=Object.assign(this.breadcrumb.params,p):this.breadcrumb.params=p,this.breadcrumbParams={}}cancel(){this.action=`Cancel`}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals)}catch(p){this.customLiterals=void 0}}restore(){this.action=``,this.breadcrumb={items:[]},this.breadcrumbItem={label:void 0,link:void 0},this.breadcrumbParams={},this.componentsSize=`medium`,this.customLiterals=void 0,this.literals=``,this.properties=[],this.title=`PO Page Edit`,this.subtitle=``}save(){this.action=`Save`}saveNew(){this.action=`Save and new`}static ɵfac=function(r){return new(r||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-page-edit-labs`]],standalone:!1,decls:34,vars:21,consts:[[`formBreadcrumbFavorite`,`ngForm`],[`formBreadcrumbItems`,`ngForm`],[`formBreadcrumbParams`,`ngForm`],[3,`p-cancel`,`p-save`,`p-save-new`,`p-breadcrumb`,`p-components-size`,`p-disable-submit`,`p-literals`,`p-title`,`p-subtitle`],[1,`po-row`],[`p-label`,`Action`,1,`po-md-12`,3,`p-value`],[`name`,`title`,`p-label`,`Title`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`subtitle`,`p-label`,`Subtitle`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`properties`,`p-columns`,`4`,`p-label`,`Properties`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`size`,`p-columns`,`4`,`p-label`,`Components size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`breadcrumbFavorite`,`p-clean`,``,`p-help`,`https://po-sample-api.onrender.com/v1/favorite`,`p-label`,`Breadcrumb favorite`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`breadcrumbItemLabel`,`p-clean`,``,`p-label`,`Breadcrumb item label`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`breadcrumbItemLink`,`p-clean`,``,`p-label`,`Breadcrumb item link`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Add breadcrumb item`,1,`po-md-6`,`po-lg-3`,3,`p-click`,`p-disabled`],[`name`,`breadcrumbParamsProperty`,`p-clean`,``,`p-label`,`Breadcrumb params property`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`breadcrumbParamsValue`,`p-clean`,``,`p-label`,`Breadcrumb params value`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Add breadcrumb params`,1,`po-md-6`,`po-lg-3`,3,`p-click`,`p-disabled`],[`name`,`literals`,`p-help`,`Ex.: {"cancel": "Voltar", "save": "Confirmar", "saveNew": "Confirmar e criar um novo"}`,`p-label`,`Literals`,1,`po-md-12`,`po-lg-6`,3,`ngModelChange`,`p-change`,`ngModel`],[`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`]],template:function(r,i){if(r&1){let d=ZO();Jc(0,`po-page-edit`,3),vt(`p-cancel`,function(){return i.cancel()})(`p-save`,function(){return i.save()})(`p-save-new`,function(){return i.saveNew()}),Jc(1,`div`,4),_u(2,`po-info`,5),Zg(),_u(3,`po-divider`),Jc(4,`form`)(5,`div`,4)(6,`po-input`,6),W0(),Kb(`ngModelChange`,function(a){return U_(d),Ak(i.title,a)||(i.title=a),H_(a)}),Zg(),Jc(7,`po-input`,7),W0(),Kb(`ngModelChange`,function(a){return U_(d),Ak(i.subtitle,a)||(i.subtitle=a),H_(a)}),Zg(),Jc(8,`po-checkbox-group`,8),W0(),Kb(`ngModelChange`,function(a){return U_(d),Ak(i.properties,a)||(i.properties=a),H_(a)}),Zg(),Jc(9,`po-radio-group`,9),W0(),Kb(`ngModelChange`,function(a){return U_(d),Ak(i.componentsSize,a)||(i.componentsSize=a),H_(a)}),Zg()(),_u(10,`po-divider`),Jc(11,`form`,null,0)(13,`div`,4)(14,`po-input`,10),W0(),Kb(`ngModelChange`,function(a){return U_(d),Ak(i.breadcrumb.favorite,a)||(i.breadcrumb.favorite=a),H_(a)}),Zg()()(),Jc(15,`form`,null,1)(17,`div`,4)(18,`po-input`,11),W0(),Kb(`ngModelChange`,function(a){return U_(d),Ak(i.breadcrumbItem.label,a)||(i.breadcrumbItem.label=a),H_(a)}),Zg(),Jc(19,`po-input`,12),W0(),Kb(`ngModelChange`,function(a){return U_(d),Ak(i.breadcrumbItem.link,a)||(i.breadcrumbItem.link=a),H_(a)}),Zg()(),Jc(20,`div`,4)(21,`po-button`,13),vt(`p-click`,function(){return i.addBreadcrumbItem()}),Zg()()(),_u(22,`po-divider`),Jc(23,`form`,null,2)(25,`div`,4)(26,`po-input`,14),W0(),Kb(`ngModelChange`,function(a){return U_(d),Ak(i.breadcrumbParams.property,a)||(i.breadcrumbParams.property=a),H_(a)}),Zg(),Jc(27,`po-input`,15),W0(),Kb(`ngModelChange`,function(a){return U_(d),Ak(i.breadcrumbParams.value,a)||(i.breadcrumbParams.value=a),H_(a)}),Zg()(),Jc(28,`div`,4)(29,`po-button`,16),vt(`p-click`,function(){return i.addBreadcrumbParam()}),Zg()()(),Jc(30,`div`,4)(31,`po-input`,17),W0(),Kb(`ngModelChange`,function(a){return U_(d),Ak(i.literals,a)||(i.literals=a),H_(a)}),vt(`p-change`,function(){return i.changeLiterals()}),Zg()(),Jc(32,`div`,4)(33,`po-button`,18),vt(`p-click`,function(){return i.restore()}),Zg()()()()}if(r&2){let d=sk(16),s=sk(24);Rb(`p-breadcrumb`,i.breadcrumb)(`p-components-size`,i.componentsSize)(`p-disable-submit`,i.properties.includes(`disableSubmit`))(`p-literals`,i.customLiterals)(`p-title`,i.title)(`p-subtitle`,i.subtitle),Ig(2),Rb(`p-value`,i.action),Ig(4),Yb(`ngModel`,i.title),Y0(),Ig(),Yb(`ngModel`,i.subtitle),Y0(),Ig(),Yb(`ngModel`,i.properties),Rb(`p-options`,i.propertiesOptions),Y0(),Ig(),Yb(`ngModel`,i.componentsSize),Rb(`p-options`,i.componentsSizeOptions),Y0(),Ig(5),Yb(`ngModel`,i.breadcrumb.favorite),Y0(),Ig(4),Yb(`ngModel`,i.breadcrumbItem.label),Y0(),Ig(),Yb(`ngModel`,i.breadcrumbItem.link),Y0(),Ig(2),Rb(`p-disabled`,d.invalid),Ig(5),Yb(`ngModel`,i.breadcrumbParams.property),Y0(),Ig(),Yb(`ngModel`,i.breadcrumbParams.value),Y0(),Ig(2),Rb(`p-disabled`,s.invalid),Ig(2),Yb(`ngModel`,i.literals),Y0()}},dependencies:[NZ,TZ,RZ,JL,qL,oi,Nf,I4,j4,Zte,Joe,Aze],encapsulation:2,changeDetection:1})}return o})();var Me=o=>({"docs-sample-code-tabs":o});var Ee=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-page-edit-labs-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Page Edit Labs`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return i.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-page-edit-labs/sample-po-page-edit-labs.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<po-page-edit
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
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-page-edit-labs/sample-po-page-edit-labs.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-page-edit-labs`),Zg(),_u(23,`hr`)),r&2&&(Ig(5),yk(`po-icon `+i.sampleCodeButtonIcon),Ig(),nm(` `,i.sampleCodeButtonLabel),Ig(),Rb(`ngClass`,Bk(4,Me,i.hideSampleCodeTabs)))},dependencies:[eF,P,tre,are,be],encapsulation:2,changeDetection:1})}return o})();var Be=[`formEditUser`];var he=(()=>{class o{route=p(An);poDialog=p(sie);poNotification=p(Ru);formEditUser;birthDate;email;fathersName;genre;graduation;mothersName;name;nationality;nickname;placeOfBirth;userId;breadcrumb={items:[{label:`Home`,action:this.beforeRedirect.bind(this)},{label:`User Edit`}]};ngOnInit(){this.initialize()}cancel(){this.initialize()}initialize(){this.birthDate=new Date(1978,11,26),this.email=`john.doe@po-ui.com.br`,this.fathersName=`Mike Doe`,this.genre=`male`,this.graduation=`College Degree`,this.mothersName=`Jane Doe`,this.name=`John Doe`,this.nationality=`USA`,this.nickname=`John`,this.placeOfBirth=`Colorado`,this.userId=122635}save(){this.poNotification.success(`Save successfully`)}beforeRedirect(p){this.formEditUser.valid?this.route.navigate([`/`]):this.poDialog.confirm({title:`Confirm redirect to ${p}`,message:`There is data that has not been saved yet. Are you sure you want to quit?`,confirm:()=>this.route.navigate([`/`])})}static ɵfac=function(r){return new(r||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-page-edit-user`]],viewQuery:function(r,i){if(r&1&&Cu(Be,7),r&2){let d;No(d=xo())&&(i.formEditUser=d.first)}},standalone:!1,decls:18,vars:13,consts:[[`formEditUser`,`ngForm`],[`p-title`,`User Edit`,`p-subtitle`,`Fields marked with <b>*</b> are <u>required</u>`,3,`p-cancel`,`p-save`,`p-breadcrumb`,`p-disable-submit`],[1,`po-row`],[`name`,`userId`,`p-clean`,``,`p-label`,`User ID`,`p-required`,``,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`name`,`email`,`p-clean`,``,`p-label`,`Email`,`p-required`,``,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`name`,`name`,`p-clean`,``,`p-label`,`Name`,`p-required`,``,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`name`,`nickname`,`p-clean`,``,`p-label`,`Nickname`,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`name`,`birthDate`,`p-clean`,``,`p-label`,`Birth Date`,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`name`,`genre`,`p-clean`,``,`p-label`,`Genre`,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`name`,`nationality`,`p-clean`,``,`p-label`,`Nationality`,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`name`,`placeOfBirth`,`p-clean`,``,`p-label`,`Place Of Birth`,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`name`,`graduation`,`p-clean`,``,`p-label`,`Graduation`,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`name`,`fathersName`,`p-clean`,``,`p-label`,`Father's Name`,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`name`,`mothersName`,`p-clean`,``,`p-label`,`Mother's Name`,1,`po-md-4`,3,`ngModelChange`,`ngModel`]],template:function(r,i){if(r&1){let d=ZO();Jc(0,`po-page-edit`,1),vt(`p-cancel`,function(){return i.cancel()})(`p-save`,function(){return i.save()}),Jc(1,`form`,null,0)(3,`div`,2)(4,`po-number`,3),W0(),Kb(`ngModelChange`,function(a){return U_(d),Ak(i.userId,a)||(i.userId=a),H_(a)}),Zg(),Jc(5,`po-email`,4),W0(),Kb(`ngModelChange`,function(a){return U_(d),Ak(i.email,a)||(i.email=a),H_(a)}),Zg(),Jc(6,`po-input`,5),W0(),Kb(`ngModelChange`,function(a){return U_(d),Ak(i.name,a)||(i.name=a),H_(a)}),Zg()(),Jc(7,`div`,2)(8,`po-input`,6),W0(),Kb(`ngModelChange`,function(a){return U_(d),Ak(i.nickname,a)||(i.nickname=a),H_(a)}),Zg(),Jc(9,`po-datepicker`,7),W0(),Kb(`ngModelChange`,function(a){return U_(d),Ak(i.birthDate,a)||(i.birthDate=a),H_(a)}),Zg(),Jc(10,`po-input`,8),W0(),Kb(`ngModelChange`,function(a){return U_(d),Ak(i.genre,a)||(i.genre=a),H_(a)}),Zg()(),Jc(11,`div`,2)(12,`po-input`,9),W0(),Kb(`ngModelChange`,function(a){return U_(d),Ak(i.nationality,a)||(i.nationality=a),H_(a)}),Zg(),Jc(13,`po-input`,10),W0(),Kb(`ngModelChange`,function(a){return U_(d),Ak(i.placeOfBirth,a)||(i.placeOfBirth=a),H_(a)}),Zg(),Jc(14,`po-input`,11),W0(),Kb(`ngModelChange`,function(a){return U_(d),Ak(i.graduation,a)||(i.graduation=a),H_(a)}),Zg()(),Jc(15,`div`,2)(16,`po-input`,12),W0(),Kb(`ngModelChange`,function(a){return U_(d),Ak(i.fathersName,a)||(i.fathersName=a),H_(a)}),Zg(),Jc(17,`po-input`,13),W0(),Kb(`ngModelChange`,function(a){return U_(d),Ak(i.mothersName,a)||(i.mothersName=a),H_(a)}),Zg()()()()}if(r&2){let d=sk(2);Rb(`p-breadcrumb`,i.breadcrumb)(`p-disable-submit`,d.invalid),Ig(4),Yb(`ngModel`,i.userId),Y0(),Ig(),Yb(`ngModel`,i.email),Y0(),Ig(),Yb(`ngModel`,i.name),Y0(),Ig(2),Yb(`ngModel`,i.nickname),Y0(),Ig(),Yb(`ngModel`,i.birthDate),Y0(),Ig(),Yb(`ngModel`,i.genre),Y0(),Ig(2),Yb(`ngModel`,i.nationality),Y0(),Ig(),Yb(`ngModel`,i.placeOfBirth),Y0(),Ig(),Yb(`ngModel`,i.graduation),Y0(),Ig(2),Yb(`ngModel`,i.fathersName),Y0(),Ig(),Yb(`ngModel`,i.mothersName),Y0()}},dependencies:[NZ,TZ,RZ,JL,qL,tie,p5,j4,Goe,Aze],encapsulation:2,changeDetection:1})}return o})();var ke=o=>({"docs-sample-code-tabs":o});var Se=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(r){return new(r||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-page-edit-user-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(r,i){r&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Page Edit - User`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return i.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-page-edit-user/sample-po-page-edit-user.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<po-page-edit
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
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-page-edit-user/sample-po-page-edit-user.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, OnInit, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-page-edit-user`),Zg(),_u(23,`hr`)),r&2&&(Ig(5),yk(`po-icon `+i.sampleCodeButtonIcon),Ig(),nm(` `,i.sampleCodeButtonLabel),Ig(),Rb(`ngClass`,Bk(4,ke,i.hideSampleCodeTabs)))},dependencies:[eF,P,tre,are,he],encapsulation:2,changeDetection:1})}return o})();var fe=(()=>{class o{static ɵfac=function(r){return new(r||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-page-edit-doc`]],standalone:!1,decls:605,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`PoBreadcrumb`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[`pan`,``,1,`docs-api-property-type`,`string`],[`href`,`https://po-ui.io/documentation/po-theme`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`pan`,``,1,`docs-api-property-type`,`PoPageEditLiterals`],[`href`,`/documentation/po-i18n`],[1,`language-typescript`],[1,`docs-api-h4`,`docs-api-class-name`],[`pan`,``,1,`docs-api-property-type`,`Function`],[`href`,`/guides/getting-started`],[`pan`,``,1,`docs-api-property-type`,`Array<PoBreadcrumbItem>`],[`pan`,``,1,`docs-api-property-type`,`object`]],template:function(r,i){r&1&&(Jc(0,`div`,0)(1,`p`,1)(2,`code`),Tk(3,`import { PoPageModule } from '@po-ui/ng-components';`),Zg()(),Jc(4,`div`,2)(5,`p`),Tk(6,`Módulo responsável pelos componentes de estrutura de página: `),Jc(7,`code`),Tk(8,`po-page-default`),Zg(),Tk(9,`, `),Jc(10,`code`),Tk(11,`po-page-detail`),Zg(),Tk(12,`,
`),Jc(13,`code`),Tk(14,`po-page-edit`),Zg(),Tk(15,`, `),Jc(16,`code`),Tk(17,`po-page-list`),Zg(),Tk(18,` e `),Jc(19,`code`),Tk(20,`po-page-slide`),Zg(),Tk(21,`.`),Zg()(),Jc(22,`h3`,3),Tk(23,`Componente`),Zg(),Jc(24,`h4`,4)(25,`code`,5),Tk(26,`PoPageEditComponent`),Zg()(),Jc(27,`div`,2)(28,`p`),Tk(29,`O componente `),Jc(30,`strong`),Tk(31,`po-page-edit`),Zg(),Tk(32,` \xE9 utilizado como container principal para tela de edi\xE7\xE3o ou adi\xE7\xE3o de um
registro, tendo a possibilidade de usar as a\xE7\xF5es de "Salvar", "Salvar e Novo" e "Cancelar".`),Zg(),Jc(33,`p`),Tk(34,`Os botões "Salvar" e "Salvar e Novo" podem ser habilitados/desabilitados utilizando a propriedade `),Jc(35,`code`),Tk(36,`p-disable-submit`),Zg(),Tk(37,`.
Esta propriedade pode ser utilizada para desabilitar os bot\xF5es caso exista um formul\xE1rio inv\xE1lido na p\xE1gina ou alguma
regra de neg\xF3cio n\xE3o tenha sido atendida.`),Zg(),Jc(38,`h4`),Tk(39,`Tokens customizáveis`),Zg(),Jc(40,`blockquote`)(41,`p`),Tk(42,`Para maiores informações, acesse o guia `),Jc(43,`a`,6),Tk(44,`Personalizando o Tema Padrão com Tokens CSS`),Zg(),Tk(45,`.`),Zg()(),Jc(46,`table`)(47,`thead`)(48,`tr`)(49,`th`),Tk(50,`Propriedade`),Zg(),Jc(51,`th`),Tk(52,`Descrição`),Zg(),Jc(53,`th`),Tk(54,`Valor Padrão`),Zg()()(),Jc(55,`tbody`)(56,`tr`)(57,`td`)(58,`strong`),Tk(59,`Header`),Zg()(),_u(60,`td`)(61,`td`),Zg(),Jc(62,`tr`)(63,`td`)(64,`code`),Tk(65,`--padding`),Zg()(),Jc(66,`td`),Tk(67,`Espaçamento do header`),Zg(),Jc(68,`td`)(69,`code`),Tk(70,`var(--spacing-xs) var(--spacing-md)`),Zg()()(),Jc(71,`tr`)(72,`td`)(73,`code`),Tk(74,`--gap`),Zg()(),Jc(75,`td`),Tk(76,`Espaçamento entre os breadcrumbs e o título`),Zg(),Jc(77,`td`)(78,`code`),Tk(79,`var(--spacing-md)`),Zg()()(),Jc(80,`tr`)(81,`td`)(82,`code`),Tk(83,`--gap-actions`),Zg()(),Jc(84,`td`),Tk(85,`Espaçamento entre as ações`),Zg(),Jc(86,`td`)(87,`code`),Tk(88,`var(--spacing-xs)`),Zg()()(),Jc(89,`tr`)(90,`td`)(91,`code`),Tk(92,`--font-family`),Zg()(),Jc(93,`td`),Tk(94,`Família tipográfica do título`),Zg(),Jc(95,`td`)(96,`code`),Tk(97,`var(--font-family-theme)`),Zg()()(),Jc(98,`tr`)(99,`td`)(100,`strong`),Tk(101,`Content`),Zg()(),_u(102,`td`)(103,`td`),Zg(),Jc(104,`tr`)(105,`td`)(106,`code`),Tk(107,`--padding-content`),Zg()(),Jc(108,`td`),Tk(109,`Espaçamento do conteúdo`),Zg(),Jc(110,`td`)(111,`code`),Tk(112,`var(--spacing-xs) var(--spacing-sm)`),Zg()()()()()(),Jc(113,`div`,7)(114,`h4`,8),Tk(115,`Seletor`),Zg(),Jc(116,`pre`,9),Tk(117,`<po-page-edit
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
`),Zg()(),Jc(118,`h4`,10),Tk(119,`Propriedades`),Zg(),Jc(120,`table`,11)(121,`tr`,12)(122,`th`,13),Tk(123,`Nome`),Zg(),Jc(124,`th`,13),Tk(125,`Tipo`),Zg(),Jc(126,`th`,13),Tk(127,`Padrão`),Zg(),Jc(128,`th`,13),Tk(129,`Descrição`),Zg()(),Jc(130,`tr`,14)(131,`td`,15)(132,`div`,16)(133,`span`,17),Tk(134,` p-breadcrumb`),_u(135,`br`),Zg()()(),Jc(136,`td`,18)(137,`code`,19),Tk(138,`PoBreadcrumb`),Zg()(),Jc(139,`td`,20),Tk(140,`-`),Zg(),Jc(141,`td`,21)(142,`em`)(143,`strong`),Tk(144,`(opcional)`),Zg()(),Jc(145,`p`),Tk(146,`Objeto com propriedades do breadcrumb.`),Zg()()(),Jc(147,`tr`,14)(148,`td`,15)(149,`div`,22)(150,`span`,23),Tk(151,` (p-cancel)`),_u(152,`br`),Zg()()(),Jc(153,`td`,18)(154,`code`,24),Tk(155,`EventEmitter`),Zg()(),Jc(156,`td`,20),Tk(157,`-`),Zg(),Jc(158,`td`,21)(159,`p`),Tk(160,`Evento que será disparado ao clicar no botão de "Cancelar".`),Zg(),Jc(161,`pre`)(162,`code`),Tk(163,`<po-page-edit (p-cancel)="myCancelFunction()">
</po-page-edit>
`),Zg()(),Jc(164,`blockquote`)(165,`p`),Tk(166,`Caso não utilizar esta propriedade, o botão de "Cancelar" não será exibido.`),Zg()()()(),Jc(167,`tr`,14)(168,`td`,15)(169,`div`,16)(170,`span`,17),Tk(171,` p-components-size`),_u(172,`br`),Zg()()(),Jc(173,`td`,18)(174,`code`,25),Tk(175,`string`),Zg()(),Jc(176,`td`,20)(177,`p`)(178,`code`),Tk(179,`medium`),Zg()()(),Jc(180,`td`,21)(181,`em`)(182,`strong`),Tk(183,`(opcional)`),Zg()(),Jc(184,`p`),Tk(185,`Define o tamanho dos componentes de formulário no template:`),Zg(),Jc(186,`ul`)(187,`li`)(188,`code`),Tk(189,`small`),Zg(),Tk(190,`: aplica a medida small de cada componente (disponível apenas para acessibilidade AA).`),Zg(),Jc(191,`li`)(192,`code`),Tk(193,`medium`),Zg(),Tk(194,`: aplica a medida medium de cada componente.`),Zg()(),Jc(195,`blockquote`)(196,`p`),Tk(197,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Jc(198,`code`),Tk(199,`medium`),Zg(),Tk(200,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Jc(201,`a`,26),Tk(202,`po-theme`),Zg(),Tk(203,`.`),Zg()()()(),Jc(204,`tr`,14)(205,`td`,15)(206,`div`,16)(207,`span`,17),Tk(208,` p-disable-submit`),_u(209,`br`),Zg()()(),Jc(210,`td`,18)(211,`code`,27),Tk(212,`boolean`),Zg()(),Jc(213,`td`,20),Tk(214,`-`),Zg(),Jc(215,`td`,21)(216,`em`)(217,`strong`),Tk(218,`(opcional)`),Zg()(),Jc(219,`p`),Tk(220,`Desabilita botões de submissão (save e saveNew)`),Zg()()(),Jc(221,`tr`,14)(222,`td`,15)(223,`div`,16)(224,`span`,17),Tk(225,` p-literals`),_u(226,`br`),Zg()()(),Jc(227,`td`,18)(228,`code`,28),Tk(229,`PoPageEditLiterals`),Zg()(),Jc(230,`td`,20),Tk(231,`-`),Zg(),Jc(232,`td`,21)(233,`em`)(234,`strong`),Tk(235,`(opcional)`),Zg()(),Jc(236,`p`),Tk(237,`Objeto com as literais usadas no `),Jc(238,`code`),Tk(239,`po-page-edit`),Zg(),Tk(240,`.`),Zg(),Jc(241,`p`),Tk(242,`Existem duas maneiras de customizar o componente, passando um objeto com todas as literais disponíveis:`),Zg(),Jc(243,`pre`)(244,`code`),Tk(245,`const customLiterals: PoPageEditLiterals = {
  cancel: 'Voltar',
  save: 'Confirmar',
  saveNew: 'Confirmar e criar um novo'
};
`),Zg()(),Jc(246,`p`),Tk(247,`Ou passando apenas as literais que deseja customizar:`),Zg(),Jc(248,`pre`)(249,`code`),Tk(250,`const customLiterals: PoPageEditLiterals = {
  cancel: 'Cancelar processo'
};
`),Zg()(),Jc(251,`p`),Tk(252,`E para carregar as literais customizadas, basta apenas passar o objeto para o componente.`),Zg(),Jc(253,`pre`)(254,`code`),Tk(255,`<po-page-edit
  [p-literals]="customLiterals">
</po-page-edit>
`),Zg()(),Jc(256,`blockquote`)(257,`p`),Tk(258,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do
`),Jc(259,`a`,29)(260,`code`),Tk(261,`PoI18nService`),Zg()(),Tk(262,` ou do browser.`),Zg()()()(),Jc(263,`tr`,14)(264,`td`,15)(265,`div`,22)(266,`span`,23),Tk(267,` (p-save)`),_u(268,`br`),Zg()()(),Jc(269,`td`,18)(270,`code`,24),Tk(271,`EventEmitter`),Zg()(),Jc(272,`td`,20),Tk(273,`-`),Zg(),Jc(274,`td`,21)(275,`p`),Tk(276,`Evento que será disparado ao clicar no botão de "Salvar".`),Zg(),Jc(277,`pre`)(278,`code`),Tk(279,`<po-page-edit (p-save)="mySaveFunction()">
</po-page-edit>
`),Zg()(),Jc(280,`blockquote`)(281,`p`),Tk(282,`Caso não utilizar esta propriedade, o botão de "Salvar" não será exibido.`),Zg()()()(),Jc(283,`tr`,14)(284,`td`,15)(285,`div`,22)(286,`span`,23),Tk(287,` (p-save-new)`),_u(288,`br`),Zg()()(),Jc(289,`td`,18)(290,`code`,24),Tk(291,`EventEmitter`),Zg()(),Jc(292,`td`,20),Tk(293,`-`),Zg(),Jc(294,`td`,21)(295,`p`),Tk(296,`Evento que será disparado ao clicar no botão de "Salvar e Novo".`),Zg(),Jc(297,`pre`)(298,`code`),Tk(299,`<po-page-edit (p-save-new)="mySaveNewFunction()">
</po-page-edit>
`),Zg()(),Jc(300,`blockquote`)(301,`p`),Tk(302,`Caso não utilizar esta propriedade, o botão de "Salvar e Novo" não será exibido.`),Zg()()()(),Jc(303,`tr`,14)(304,`td`,15)(305,`div`,16)(306,`span`,17),Tk(307,` p-subtitle`),_u(308,`br`),Zg()()(),Jc(309,`td`,18)(310,`code`,25),Tk(311,`string`),Zg()(),Jc(312,`td`,20),Tk(313,`-`),Zg(),Jc(314,`td`,21)(315,`em`)(316,`strong`),Tk(317,`(opcional)`),Zg()(),Jc(318,`p`),Tk(319,`Subtitulo do Header da página.`),Zg(),Jc(320,`p`),Tk(321,`Suporta formatação básica com as tags `),Jc(322,`code`),Tk(323,`<b>`),Zg(),Tk(324,` (negrito), `),Jc(325,`code`),Tk(326,`<strong>`),Zg(),Tk(327,` (negrito), `),Jc(328,`code`),Tk(329,`<i>`),Zg(),Tk(330,` (itálico), `),Jc(331,`code`),Tk(332,`<em>`),Zg(),Tk(333,` (it\xE1lico) e
`),Jc(334,`code`),Tk(335,`<u>`),Zg(),Tk(336,` (sublinhado).`),Zg(),Jc(337,`p`),Tk(338,`Exemplo:`),Zg(),Jc(339,`pre`)(340,`code`,30),Tk(341,`subtitle = 'Fields marked with <b>*</b> are <u>required</u>';
`),Zg()(),Jc(342,`blockquote`)(343,`p`),Tk(344,`Requer que `),Jc(345,`code`),Tk(346,`p-title`),Zg(),Tk(347,` esteja definido.`),Zg()()()(),Jc(348,`tr`,14)(349,`td`,15)(350,`div`,16)(351,`span`,17),Tk(352,` p-title`),_u(353,`br`),Zg()()(),Jc(354,`td`,18)(355,`code`,25),Tk(356,`string`),Zg()(),Jc(357,`td`,20),Tk(358,`-`),Zg(),Jc(359,`td`,21)(360,`p`),Tk(361,`Título da página.`),Zg()()()(),Jc(362,`h3`),Tk(363,`Interfaces`),Zg(),Jc(364,`h4`,31)(365,`code`,5),Tk(366,`PoBreadcrumbItem`),Zg()(),Jc(367,`div`,2)(368,`p`),Tk(369,`Interface que define cada item do componente `),Jc(370,`strong`),Tk(371,`po-breadcrumb`),Zg(),Tk(372,`.`),Zg()(),Jc(373,`h4`,10),Tk(374,`Propriedades`),Zg(),Jc(375,`table`,11)(376,`tr`,12)(377,`th`,13),Tk(378,`Nome`),Zg(),Jc(379,`th`,13),Tk(380,`Tipo`),Zg(),Jc(381,`th`,13),Tk(382,`Descrição`),Zg()(),Jc(383,`tr`,14)(384,`td`,15)(385,`div`,16)(386,`span`,17),Tk(387,` action`),_u(388,`br`),Zg()()(),Jc(389,`td`,18)(390,`code`,32),Tk(391,`Function`),Zg()(),Jc(392,`td`,21)(393,`em`)(394,`strong`),Tk(395,`(opcional)`),Zg()(),Jc(396,`p`),Tk(397,`Ação executada ao clicar no item.`),Zg(),Jc(398,`blockquote`)(399,`p`),Tk(400,`A função atribuída a esta propriedade receberá o `),Jc(401,`em`),Tk(402,`label`),Zg(),Tk(403,` do item como parâmetro para execução.`),Zg()()()(),Jc(404,`tr`,14)(405,`td`,15)(406,`div`,16)(407,`span`,17),Tk(408,` label`),_u(409,`br`),Zg()()(),Jc(410,`td`,18)(411,`code`,25),Tk(412,`string`),Zg()(),Jc(413,`td`,21)(414,`p`),Tk(415,`Rótulo do item.`),Zg()()(),Jc(416,`tr`,14)(417,`td`,15)(418,`div`,16)(419,`span`,17),Tk(420,` link`),_u(421,`br`),Zg()()(),Jc(422,`td`,18)(423,`code`,25),Tk(424,`string`),Zg()(),Jc(425,`td`,21)(426,`em`)(427,`strong`),Tk(428,`(opcional)`),Zg()(),Jc(429,`p`),Tk(430,`Url do item.`),Zg(),Jc(431,`blockquote`)(432,`p`),Tk(433,`Caso o item também contenha uma `),Jc(434,`em`),Tk(435,`action`),Zg(),Tk(436,` definida, a preferência de execução será do `),Jc(437,`em`),Tk(438,`link`),Zg(),Tk(439,`.`),Zg()(),Jc(440,`blockquote`)(441,`p`),Tk(442,`Para o correto funcionamento, \xE9 necess\xE1rio que haja uma rota referenciando seu valor.
`),Jc(443,`strong`)(444,`a`,33),Tk(445,`Veja um exemplo de como criar rotas aqui`),Zg()(),Tk(446,`.`),Zg()(),Jc(447,`blockquote`)(448,`p`),Tk(449,`Esta propriedade é necessária para que a propriedade `),Jc(450,`code`),Tk(451,`p-favorite-service`),Zg(),Tk(452,` consiga favoritar ou desfavoritar.`),Zg()()()()(),Jc(453,`h4`,31)(454,`code`,5),Tk(455,`PoBreadcrumb`),Zg()(),Jc(456,`div`,2)(457,`p`),Tk(458,`Interface que define o `),Jc(459,`code`),Tk(460,`po-breadcrumb`),Zg(),Tk(461,`.`),Zg()(),Jc(462,`h4`,10),Tk(463,`Propriedades`),Zg(),Jc(464,`table`,11)(465,`tr`,12)(466,`th`,13),Tk(467,`Nome`),Zg(),Jc(468,`th`,13),Tk(469,`Tipo`),Zg(),Jc(470,`th`,13),Tk(471,`Descrição`),Zg()(),Jc(472,`tr`,14)(473,`td`,15)(474,`div`,16)(475,`span`,17),Tk(476,` favorite`),_u(477,`br`),Zg()()(),Jc(478,`td`,18)(479,`code`,25),Tk(480,`string`),Zg()(),Jc(481,`td`,21)(482,`em`)(483,`strong`),Tk(484,`(opcional)`),Zg()(),Jc(485,`p`),Tk(486,`Permite definir uma URL para favoritar ou desfavoritar.`),Zg(),Jc(487,`blockquote`)(488,`p`),Tk(489,`Para maiores informações verificar a propriedade `),Jc(490,`code`),Tk(491,`p-favorite-service`),Zg(),Tk(492,` do componente `),Jc(493,`code`),Tk(494,`po-breadcrumb`),Zg(),Tk(495,`.`),Zg()()()(),Jc(496,`tr`,14)(497,`td`,15)(498,`div`,16)(499,`span`,17),Tk(500,` items`),_u(501,`br`),Zg()()(),Jc(502,`td`,18)(503,`code`,34),Tk(504,`Array<PoBreadcrumbItem>`),Zg()(),Jc(505,`td`,21)(506,`p`),Tk(507,`Lista de itens do `),Jc(508,`em`),Tk(509,`breadcrumb`),Zg(),Tk(510,`.`),Zg(),Jc(511,`p`)(512,`strong`),Tk(513,`Exemplo:`),Zg()(),Jc(514,`pre`)(515,`code`),Tk(516,`{ label: 'Po Portal', link: 'portal' }
`),Zg()()()(),Jc(517,`tr`,14)(518,`td`,15)(519,`div`,16)(520,`span`,17),Tk(521,` params`),_u(522,`br`),Zg()()(),Jc(523,`td`,18)(524,`code`,35),Tk(525,`object`),Zg()(),Jc(526,`td`,21)(527,`em`)(528,`strong`),Tk(529,`(opcional)`),Zg()(),Jc(530,`p`),Tk(531,`Objeto que possibilita o envio de parâmetros adicionais à requisição.`),Zg()()()(),Jc(532,`h4`,31)(533,`code`,5),Tk(534,`PoPageEditLiterals`),Zg()(),Jc(535,`div`,2)(536,`p`),Tk(537,`Interface para definição das literais usadas no `),Jc(538,`code`),Tk(539,`po-page-edit`),Zg(),Tk(540,`.`),Zg()(),Jc(541,`h4`,10),Tk(542,`Propriedades`),Zg(),Jc(543,`table`,11)(544,`tr`,12)(545,`th`,13),Tk(546,`Nome`),Zg(),Jc(547,`th`,13),Tk(548,`Tipo`),Zg(),Jc(549,`th`,13),Tk(550,`Descrição`),Zg()(),Jc(551,`tr`,14)(552,`td`,15)(553,`div`,16)(554,`span`,17),Tk(555,` cancel`),_u(556,`br`),Zg()()(),Jc(557,`td`,18)(558,`code`,25),Tk(559,`string`),Zg()(),Jc(560,`td`,21)(561,`em`)(562,`strong`),Tk(563,`(opcional)`),Zg()(),Jc(564,`p`),Tk(565,`Label da ação `),Jc(566,`code`),Tk(567,`cancel`),Zg(),Tk(568,`.`),Zg()()(),Jc(569,`tr`,14)(570,`td`,15)(571,`div`,16)(572,`span`,17),Tk(573,` save`),_u(574,`br`),Zg()()(),Jc(575,`td`,18)(576,`code`,25),Tk(577,`string`),Zg()(),Jc(578,`td`,21)(579,`em`)(580,`strong`),Tk(581,`(opcional)`),Zg()(),Jc(582,`p`),Tk(583,`Label da ação `),Jc(584,`code`),Tk(585,`save`),Zg(),Tk(586,`.`),Zg()()(),Jc(587,`tr`,14)(588,`td`,15)(589,`div`,16)(590,`span`,17),Tk(591,` saveNew`),_u(592,`br`),Zg()()(),Jc(593,`td`,18)(594,`code`,25),Tk(595,`string`),Zg()(),Jc(596,`td`,21)(597,`em`)(598,`strong`),Tk(599,`(opcional)`),Zg()(),Jc(600,`p`),Tk(601,`Label da ação `),Jc(602,`code`),Tk(603,`saveNew`),Zg(),Tk(604,`.`),Zg()()()()())},dependencies:[P],encapsulation:2,changeDetection:1})}return o})();function Ie(o,We){if(o&1){let p=ZO();Jc(0,`po-tab`,4),vt(`p-click`,function(){U_(p);let i=nk();return H_(i.changeTab(`web`))}),_u(1,`sample-po-page-edit-basic-view`)(2,`sample-po-page-edit-labs-view`)(3,`sample-po-page-edit-user-view`),Zg()}if(o&2){let p=nk();Rb(`p-active`,p.activeTab===`web`)}}var Ve=[{path:``,component:(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(p,r){this.route=p,this.router=r}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(p=>{let r=p.view;this.hidePoWebSample=this.samplesLength===0,this.activeTab=this.hidePoWebSample?`doc`:r||`web`})}changeTab(p){this.router.navigate([],{queryParams:{view:p},queryParamsHandling:`merge`}),this.activeTab=p}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(r){return new(r||o)(I(ar),I(An))};static ɵcmp=Jn({type:o,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:3,consts:[[`p-title`,`Page Edit`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Exemplos`,3,`p-active`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-active`]],template:function(r,i){r&1&&(Jc(0,`po-page-default`,0)(1,`po-tabs`,1),VO(2,Ie,4,1,`po-tab`,2),Jc(3,`po-tab`,3),vt(`p-click`,function(){return i.changeTab(`doc`)}),_u(4,`sample-po-page-edit-doc`),Zg()()()),r&2&&(Rb(`p-actions`,i.actions),Ig(2),BO(i.hidePoWebSample?-1:2),Ig(),Rb(`p-active`,i.activeTab===`doc`))},dependencies:[Mze,tre,are,ge,Ee,Se,fe],encapsulation:2,changeDetection:1})}return o})()}];var Pe=(()=>{class o{static ɵfac=function(r){return new(r||o)};static ɵmod=ge$1({type:o});static ɵinj=de({imports:[WV.forChild(Ve),WV]})}return o})();var ut=(()=>{class o{static ɵfac=function(r){return new(r||o)};static ɵmod=ge$1({type:o});static ɵinj=de({imports:[M,Pe]})}return o})();export{ut as DocPoPageEditModule};