import{m as P,p as M}from"./main-RBGX2DMP.js";import{An as sie,Ar as I,At as Zte,F as Joe,G as Nf,Gi as Yb,Ha as p,Ii as WL,Ir as Kb,Lr as Kg,Nn as tie,Oi as VO,Pi as W0,Pn as tre,Pr as Jn,Pt as are,Qi as ar,Ti as U_,W as Mze,Wi as YO,Wr as MZ,Zr as No,_o as z0,ao as vu,ar as An,bi as TZ,bn as oi,ca as ek,cr as B_,da as ge$1,fo as xo,gi as Rb,io as vt,j as I4,k as Goe,li as Qc,ra as de$1,rr as AZ,rt as Ru,s as Aze,si as QL,sn as j4,so as wg,vi as Sk,wr as GV,xi as Tk,xn as p5,xr as FO,ya as ik,yr as Du}from"./chunk-BQDTQO8h.js";var pe=(()=>{class o{static ɵfac=function(r){return new(r||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-page-edit-basic`]],standalone:!1,decls:1,vars:0,consts:[[`p-title`,`PO Page Edit`]],template:function(r,n){r&1&&vu(0,`po-page-edit`,0)},dependencies:[Aze],encapsulation:2,changeDetection:1})}return o})();var me=(()=>{class o{static ɵfac=function(r){return new(r||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-page-edit-basic-view`]],standalone:!1,decls:24,vars:0,consts:[[`id`,`sample-po-page-edit-basic`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-page-edit-basic/sample-po-page-edit-basic.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-page-edit-basic/sample-po-page-edit-basic.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`]],template:function(r,n){r&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Page Edit Basic`),Kg()(),Qc(4,`div`)(5,`po-tabs`,2)(6,`po-tab`,3)(7,`div`,4),vu(8,`sample-po-page-edit-basic`),Kg()(),Qc(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-page-edit-basic/sample-po-page-edit-basic.component.html`),Kg(),Qc(13,`div`,7)(14,`pre`,8),Sk(15,`<po-page-edit p-title="PO Page Edit"> </po-page-edit>
`),Kg()()()(),Qc(16,`po-tab`,9)(17,`div`)(18,`label`,6),Sk(19,`sample-po-page-edit-basic/sample-po-page-edit-basic.component.ts`),Kg(),Qc(20,`div`,10)(21,`pre`,11),Sk(22,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-page-edit-basic',
  templateUrl: './sample-po-page-edit-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPageEditBasicComponent {}
`),Kg()()()()()(),vu(23,`hr`))},dependencies:[P,tre,are,pe],encapsulation:2,changeDetection:1})}return o})();var de=(()=>{class o{action;breadcrumb;breadcrumbItem;breadcrumbParams;componentsSize;customLiterals;literals;params;properties;title;subtitle;componentsSizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];propertiesOptions=[{value:`disableSubmit`,label:`Disable Submit`}];ngOnInit(){this.restore()}addBreadcrumbItem(){this.breadcrumb.items=this.breadcrumb.items.concat([this.breadcrumbItem]),this.breadcrumbItem={label:void 0,link:void 0}}addBreadcrumbParam(){let p={[this.breadcrumbParams.property]:this.breadcrumbParams.value};this.breadcrumb.params?this.breadcrumb.params=Object.assign(this.breadcrumb.params,p):this.breadcrumb.params=p,this.breadcrumbParams={}}cancel(){this.action=`Cancel`}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals)}catch(p){this.customLiterals=void 0}}restore(){this.action=``,this.breadcrumb={items:[]},this.breadcrumbItem={label:void 0,link:void 0},this.breadcrumbParams={},this.componentsSize=`medium`,this.customLiterals=void 0,this.literals=``,this.properties=[],this.title=`PO Page Edit`,this.subtitle=``}save(){this.action=`Save`}saveNew(){this.action=`Save and new`}static ɵfac=function(r){return new(r||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-page-edit-labs`]],standalone:!1,decls:34,vars:21,consts:[[`formBreadcrumbFavorite`,`ngForm`],[`formBreadcrumbItems`,`ngForm`],[`formBreadcrumbParams`,`ngForm`],[3,`p-cancel`,`p-save`,`p-save-new`,`p-breadcrumb`,`p-components-size`,`p-disable-submit`,`p-literals`,`p-title`,`p-subtitle`],[1,`po-row`],[`p-label`,`Action`,1,`po-md-12`,3,`p-value`],[`name`,`title`,`p-label`,`Title`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`subtitle`,`p-label`,`Subtitle`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`properties`,`p-columns`,`4`,`p-label`,`Properties`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`size`,`p-columns`,`4`,`p-label`,`Components size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`breadcrumbFavorite`,`p-clean`,``,`p-help`,`https://po-sample-api.onrender.com/v1/favorite`,`p-label`,`Breadcrumb favorite`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`breadcrumbItemLabel`,`p-clean`,``,`p-label`,`Breadcrumb item label`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`breadcrumbItemLink`,`p-clean`,``,`p-label`,`Breadcrumb item link`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Add breadcrumb item`,1,`po-md-6`,`po-lg-3`,3,`p-click`,`p-disabled`],[`name`,`breadcrumbParamsProperty`,`p-clean`,``,`p-label`,`Breadcrumb params property`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`breadcrumbParamsValue`,`p-clean`,``,`p-label`,`Breadcrumb params value`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Add breadcrumb params`,1,`po-md-6`,`po-lg-3`,3,`p-click`,`p-disabled`],[`name`,`literals`,`p-help`,`Ex.: {"cancel": "Voltar", "save": "Confirmar", "saveNew": "Confirmar e criar um novo"}`,`p-label`,`Literals`,1,`po-md-12`,`po-lg-6`,3,`ngModelChange`,`p-change`,`ngModel`],[`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`]],template:function(r,n){if(r&1){let d=YO();Qc(0,`po-page-edit`,3),vt(`p-cancel`,function(){return n.cancel()})(`p-save`,function(){return n.save()})(`p-save-new`,function(){return n.saveNew()}),Qc(1,`div`,4),vu(2,`po-info`,5),Kg(),vu(3,`po-divider`),Qc(4,`form`)(5,`div`,4)(6,`po-input`,6),z0(),Kb(`ngModelChange`,function(a){return B_(d),Tk(n.title,a)||(n.title=a),U_(a)}),Kg(),Qc(7,`po-input`,7),z0(),Kb(`ngModelChange`,function(a){return B_(d),Tk(n.subtitle,a)||(n.subtitle=a),U_(a)}),Kg(),Qc(8,`po-checkbox-group`,8),z0(),Kb(`ngModelChange`,function(a){return B_(d),Tk(n.properties,a)||(n.properties=a),U_(a)}),Kg(),Qc(9,`po-radio-group`,9),z0(),Kb(`ngModelChange`,function(a){return B_(d),Tk(n.componentsSize,a)||(n.componentsSize=a),U_(a)}),Kg()(),vu(10,`po-divider`),Qc(11,`form`,null,0)(13,`div`,4)(14,`po-input`,10),z0(),Kb(`ngModelChange`,function(a){return B_(d),Tk(n.breadcrumb.favorite,a)||(n.breadcrumb.favorite=a),U_(a)}),Kg()()(),Qc(15,`form`,null,1)(17,`div`,4)(18,`po-input`,11),z0(),Kb(`ngModelChange`,function(a){return B_(d),Tk(n.breadcrumbItem.label,a)||(n.breadcrumbItem.label=a),U_(a)}),Kg(),Qc(19,`po-input`,12),z0(),Kb(`ngModelChange`,function(a){return B_(d),Tk(n.breadcrumbItem.link,a)||(n.breadcrumbItem.link=a),U_(a)}),Kg()(),Qc(20,`div`,4)(21,`po-button`,13),vt(`p-click`,function(){return n.addBreadcrumbItem()}),Kg()()(),vu(22,`po-divider`),Qc(23,`form`,null,2)(25,`div`,4)(26,`po-input`,14),z0(),Kb(`ngModelChange`,function(a){return B_(d),Tk(n.breadcrumbParams.property,a)||(n.breadcrumbParams.property=a),U_(a)}),Kg(),Qc(27,`po-input`,15),z0(),Kb(`ngModelChange`,function(a){return B_(d),Tk(n.breadcrumbParams.value,a)||(n.breadcrumbParams.value=a),U_(a)}),Kg()(),Qc(28,`div`,4)(29,`po-button`,16),vt(`p-click`,function(){return n.addBreadcrumbParam()}),Kg()()(),Qc(30,`div`,4)(31,`po-input`,17),z0(),Kb(`ngModelChange`,function(a){return B_(d),Tk(n.literals,a)||(n.literals=a),U_(a)}),vt(`p-change`,function(){return n.changeLiterals()}),Kg()(),Qc(32,`div`,4)(33,`po-button`,18),vt(`p-click`,function(){return n.restore()}),Kg()()()()}if(r&2){let d=ik(16),m=ik(24);Rb(`p-breadcrumb`,n.breadcrumb)(`p-components-size`,n.componentsSize)(`p-disable-submit`,n.properties.includes(`disableSubmit`))(`p-literals`,n.customLiterals)(`p-title`,n.title)(`p-subtitle`,n.subtitle),wg(2),Rb(`p-value`,n.action),wg(4),Yb(`ngModel`,n.title),W0(),wg(),Yb(`ngModel`,n.subtitle),W0(),wg(),Yb(`ngModel`,n.properties),Rb(`p-options`,n.propertiesOptions),W0(),wg(),Yb(`ngModel`,n.componentsSize),Rb(`p-options`,n.componentsSizeOptions),W0(),wg(5),Yb(`ngModel`,n.breadcrumb.favorite),W0(),wg(4),Yb(`ngModel`,n.breadcrumbItem.label),W0(),wg(),Yb(`ngModel`,n.breadcrumbItem.link),W0(),wg(2),Rb(`p-disabled`,d.invalid),wg(5),Yb(`ngModel`,n.breadcrumbParams.property),W0(),wg(),Yb(`ngModel`,n.breadcrumbParams.value),W0(),wg(2),Rb(`p-disabled`,m.invalid),wg(2),Yb(`ngModel`,n.literals),W0()}},dependencies:[AZ,MZ,TZ,QL,WL,oi,Nf,I4,j4,Zte,Joe,Aze],encapsulation:2,changeDetection:1})}return o})();var se=(()=>{class o{static ɵfac=function(r){return new(r||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-page-edit-labs-view`]],standalone:!1,decls:24,vars:0,consts:[[`id`,`sample-po-page-edit-labs`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-page-edit-labs/sample-po-page-edit-labs.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-page-edit-labs/sample-po-page-edit-labs.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`]],template:function(r,n){r&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Page Edit Labs`),Kg()(),Qc(4,`div`)(5,`po-tabs`,2)(6,`po-tab`,3)(7,`div`,4),vu(8,`sample-po-page-edit-labs`),Kg()(),Qc(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-page-edit-labs/sample-po-page-edit-labs.component.html`),Kg(),Qc(13,`div`,7)(14,`pre`,8),Sk(15,`<po-page-edit
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
`),Kg()()()(),Qc(16,`po-tab`,9)(17,`div`)(18,`label`,6),Sk(19,`sample-po-page-edit-labs/sample-po-page-edit-labs.component.ts`),Kg(),Qc(20,`div`,10)(21,`pre`,11),Sk(22,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),Kg()()()()()(),vu(23,`hr`))},dependencies:[P,tre,are,de],encapsulation:2,changeDetection:1})}return o})();var Ce=[`formEditUser`];var ce=(()=>{class o{route=p(An);poDialog=p(sie);poNotification=p(Ru);formEditUser;birthDate;email;fathersName;genre;graduation;mothersName;name;nationality;nickname;placeOfBirth;userId;breadcrumb={items:[{label:`Home`,action:this.beforeRedirect.bind(this)},{label:`User Edit`}]};ngOnInit(){this.initialize()}cancel(){this.initialize()}initialize(){this.birthDate=new Date(1978,11,26),this.email=`john.doe@po-ui.com.br`,this.fathersName=`Mike Doe`,this.genre=`male`,this.graduation=`College Degree`,this.mothersName=`Jane Doe`,this.name=`John Doe`,this.nationality=`USA`,this.nickname=`John`,this.placeOfBirth=`Colorado`,this.userId=122635}save(){this.poNotification.success(`Save successfully`)}beforeRedirect(p){this.formEditUser.valid?this.route.navigate([`/`]):this.poDialog.confirm({title:`Confirm redirect to ${p}`,message:`There is data that has not been saved yet. Are you sure you want to quit?`,confirm:()=>this.route.navigate([`/`])})}static ɵfac=function(r){return new(r||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-page-edit-user`]],viewQuery:function(r,n){if(r&1&&Du(Ce,7),r&2){let d;No(d=xo())&&(n.formEditUser=d.first)}},standalone:!1,decls:18,vars:13,consts:[[`formEditUser`,`ngForm`],[`p-title`,`User Edit`,`p-subtitle`,`Fields marked with <b>*</b> are <u>required</u>`,3,`p-cancel`,`p-save`,`p-breadcrumb`,`p-disable-submit`],[1,`po-row`],[`name`,`userId`,`p-clean`,``,`p-label`,`User ID`,`p-required`,``,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`name`,`email`,`p-clean`,``,`p-label`,`Email`,`p-required`,``,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`name`,`name`,`p-clean`,``,`p-label`,`Name`,`p-required`,``,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`name`,`nickname`,`p-clean`,``,`p-label`,`Nickname`,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`name`,`birthDate`,`p-clean`,``,`p-label`,`Birth Date`,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`name`,`genre`,`p-clean`,``,`p-label`,`Genre`,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`name`,`nationality`,`p-clean`,``,`p-label`,`Nationality`,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`name`,`placeOfBirth`,`p-clean`,``,`p-label`,`Place Of Birth`,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`name`,`graduation`,`p-clean`,``,`p-label`,`Graduation`,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`name`,`fathersName`,`p-clean`,``,`p-label`,`Father's Name`,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`name`,`mothersName`,`p-clean`,``,`p-label`,`Mother's Name`,1,`po-md-4`,3,`ngModelChange`,`ngModel`]],template:function(r,n){if(r&1){let d=YO();Qc(0,`po-page-edit`,1),vt(`p-cancel`,function(){return n.cancel()})(`p-save`,function(){return n.save()}),Qc(1,`form`,null,0)(3,`div`,2)(4,`po-number`,3),z0(),Kb(`ngModelChange`,function(a){return B_(d),Tk(n.userId,a)||(n.userId=a),U_(a)}),Kg(),Qc(5,`po-email`,4),z0(),Kb(`ngModelChange`,function(a){return B_(d),Tk(n.email,a)||(n.email=a),U_(a)}),Kg(),Qc(6,`po-input`,5),z0(),Kb(`ngModelChange`,function(a){return B_(d),Tk(n.name,a)||(n.name=a),U_(a)}),Kg()(),Qc(7,`div`,2)(8,`po-input`,6),z0(),Kb(`ngModelChange`,function(a){return B_(d),Tk(n.nickname,a)||(n.nickname=a),U_(a)}),Kg(),Qc(9,`po-datepicker`,7),z0(),Kb(`ngModelChange`,function(a){return B_(d),Tk(n.birthDate,a)||(n.birthDate=a),U_(a)}),Kg(),Qc(10,`po-input`,8),z0(),Kb(`ngModelChange`,function(a){return B_(d),Tk(n.genre,a)||(n.genre=a),U_(a)}),Kg()(),Qc(11,`div`,2)(12,`po-input`,9),z0(),Kb(`ngModelChange`,function(a){return B_(d),Tk(n.nationality,a)||(n.nationality=a),U_(a)}),Kg(),Qc(13,`po-input`,10),z0(),Kb(`ngModelChange`,function(a){return B_(d),Tk(n.placeOfBirth,a)||(n.placeOfBirth=a),U_(a)}),Kg(),Qc(14,`po-input`,11),z0(),Kb(`ngModelChange`,function(a){return B_(d),Tk(n.graduation,a)||(n.graduation=a),U_(a)}),Kg()(),Qc(15,`div`,2)(16,`po-input`,12),z0(),Kb(`ngModelChange`,function(a){return B_(d),Tk(n.fathersName,a)||(n.fathersName=a),U_(a)}),Kg(),Qc(17,`po-input`,13),z0(),Kb(`ngModelChange`,function(a){return B_(d),Tk(n.mothersName,a)||(n.mothersName=a),U_(a)}),Kg()()()()}if(r&2){let d=ik(2);Rb(`p-breadcrumb`,n.breadcrumb)(`p-disable-submit`,d.invalid),wg(4),Yb(`ngModel`,n.userId),W0(),wg(),Yb(`ngModel`,n.email),W0(),wg(),Yb(`ngModel`,n.name),W0(),wg(2),Yb(`ngModel`,n.nickname),W0(),wg(),Yb(`ngModel`,n.birthDate),W0(),wg(),Yb(`ngModel`,n.genre),W0(),wg(2),Yb(`ngModel`,n.nationality),W0(),wg(),Yb(`ngModel`,n.placeOfBirth),W0(),wg(),Yb(`ngModel`,n.graduation),W0(),wg(2),Yb(`ngModel`,n.fathersName),W0(),wg(),Yb(`ngModel`,n.mothersName),W0()}},dependencies:[AZ,MZ,TZ,QL,WL,tie,p5,j4,Goe,Aze],encapsulation:2,changeDetection:1})}return o})();var ue=(()=>{class o{static ɵfac=function(r){return new(r||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-page-edit-user-view`]],standalone:!1,decls:24,vars:0,consts:[[`id`,`sample-po-page-edit-user`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-page-edit-user/sample-po-page-edit-user.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-page-edit-user/sample-po-page-edit-user.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`]],template:function(r,n){r&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Page Edit - User`),Kg()(),Qc(4,`div`)(5,`po-tabs`,2)(6,`po-tab`,3)(7,`div`,4),vu(8,`sample-po-page-edit-user`),Kg()(),Qc(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-page-edit-user/sample-po-page-edit-user.component.html`),Kg(),Qc(13,`div`,7)(14,`pre`,8),Sk(15,`<po-page-edit
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
`),Kg()()()(),Qc(16,`po-tab`,9)(17,`div`)(18,`label`,6),Sk(19,`sample-po-page-edit-user/sample-po-page-edit-user.component.ts`),Kg(),Qc(20,`div`,10)(21,`pre`,11),Sk(22,`import { Component, OnInit, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),Kg()()()()()(),vu(23,`hr`))},dependencies:[P,tre,are,ce],encapsulation:2,changeDetection:1})}return o})();var ge=(()=>{class o{router=p(An);openDoc(p){this.router.navigate([`/documentation`,p],{queryParams:{view:`doc`}})}static ɵfac=function(r){return new(r||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-page-edit-doc`]],standalone:!1,decls:605,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[`id`,`class-po-page-edit-component`,1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[`id`,`prop-p-breadcrumb`,1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`PoBreadcrumb`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`id`,`event-p-cancel`,1,`docs-api-properties-row`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[`id`,`prop-p-components-size`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`string`],[`href`,`https://po-ui.io/documentation/po-theme`],[`id`,`prop-p-disable-submit`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`id`,`prop-p-literals`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoPageEditLiterals`],[`href`,`/documentation/po-i18n`],[`id`,`event-p-save`,1,`docs-api-properties-row`],[`id`,`event-p-save-new`,1,`docs-api-properties-row`],[`id`,`prop-p-subtitle`,1,`docs-api-properties-row`],[1,`language-typescript`],[`id`,`prop-p-title`,1,`docs-api-properties-row`],[`id`,`interface-po-breadcrumb-item`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-breadcrumb-item-action`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`Function`],[`id`,`interface-po-breadcrumb-item-label`,1,`docs-api-properties-row`],[`id`,`interface-po-breadcrumb-item-link`,1,`docs-api-properties-row`],[`href`,`/guides/getting-started`],[`id`,`interface-po-breadcrumb`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-breadcrumb-favorite`,1,`docs-api-properties-row`],[`id`,`interface-po-breadcrumb-items`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`Array<PoBreadcrumbItem>`],[`id`,`interface-po-breadcrumb-params`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`object`],[`id`,`interface-po-page-edit-literals`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-page-edit-literals-cancel`,1,`docs-api-properties-row`],[`id`,`interface-po-page-edit-literals-save`,1,`docs-api-properties-row`],[`id`,`interface-po-page-edit-literals-save-new`,1,`docs-api-properties-row`]],template:function(r,n){r&1&&(Qc(0,`div`,0)(1,`p`,1)(2,`code`),Sk(3,`import { PoPageModule } from '@po-ui/ng-components';`),Kg()(),Qc(4,`div`,2)(5,`p`),Sk(6,`Módulo responsável pelos componentes de estrutura de página: `),Qc(7,`code`),Sk(8,`po-page-default`),Kg(),Sk(9,`, `),Qc(10,`code`),Sk(11,`po-page-detail`),Kg(),Sk(12,`,
`),Qc(13,`code`),Sk(14,`po-page-edit`),Kg(),Sk(15,`, `),Qc(16,`code`),Sk(17,`po-page-list`),Kg(),Sk(18,` e `),Qc(19,`code`),Sk(20,`po-page-slide`),Kg(),Sk(21,`.`),Kg()(),Qc(22,`h3`,3),Sk(23,`Componente`),Kg(),Qc(24,`h4`,4)(25,`code`,5),Sk(26,`PoPageEditComponent`),Kg()(),Qc(27,`div`,2)(28,`p`),Sk(29,`O componente `),Qc(30,`strong`),Sk(31,`po-page-edit`),Kg(),Sk(32,` \xE9 utilizado como container principal para tela de edi\xE7\xE3o ou adi\xE7\xE3o de um
registro, tendo a possibilidade de usar as a\xE7\xF5es de "Salvar", "Salvar e Novo" e "Cancelar".`),Kg(),Qc(33,`p`),Sk(34,`Os botões "Salvar" e "Salvar e Novo" podem ser habilitados/desabilitados utilizando a propriedade `),Qc(35,`code`),Sk(36,`p-disable-submit`),Kg(),Sk(37,`.
Esta propriedade pode ser utilizada para desabilitar os bot\xF5es caso exista um formul\xE1rio inv\xE1lido na p\xE1gina ou alguma
regra de neg\xF3cio n\xE3o tenha sido atendida.`),Kg(),Qc(38,`h4`),Sk(39,`Tokens customizáveis`),Kg(),Qc(40,`blockquote`)(41,`p`),Sk(42,`Para maiores informações, acesse o guia `),Qc(43,`a`,6),Sk(44,`Personalizando o Tema Padrão com Tokens CSS`),Kg(),Sk(45,`.`),Kg()(),Qc(46,`table`)(47,`thead`)(48,`tr`)(49,`th`),Sk(50,`Propriedade`),Kg(),Qc(51,`th`),Sk(52,`Descrição`),Kg(),Qc(53,`th`),Sk(54,`Valor Padrão`),Kg()()(),Qc(55,`tbody`)(56,`tr`)(57,`td`)(58,`strong`),Sk(59,`Header`),Kg()(),vu(60,`td`)(61,`td`),Kg(),Qc(62,`tr`)(63,`td`)(64,`code`),Sk(65,`--padding`),Kg()(),Qc(66,`td`),Sk(67,`Espaçamento do header`),Kg(),Qc(68,`td`)(69,`code`),Sk(70,`var(--spacing-xs) var(--spacing-md)`),Kg()()(),Qc(71,`tr`)(72,`td`)(73,`code`),Sk(74,`--gap`),Kg()(),Qc(75,`td`),Sk(76,`Espaçamento entre os breadcrumbs e o título`),Kg(),Qc(77,`td`)(78,`code`),Sk(79,`var(--spacing-md)`),Kg()()(),Qc(80,`tr`)(81,`td`)(82,`code`),Sk(83,`--gap-actions`),Kg()(),Qc(84,`td`),Sk(85,`Espaçamento entre as ações`),Kg(),Qc(86,`td`)(87,`code`),Sk(88,`var(--spacing-xs)`),Kg()()(),Qc(89,`tr`)(90,`td`)(91,`code`),Sk(92,`--font-family`),Kg()(),Qc(93,`td`),Sk(94,`Família tipográfica do título`),Kg(),Qc(95,`td`)(96,`code`),Sk(97,`var(--font-family-theme)`),Kg()()(),Qc(98,`tr`)(99,`td`)(100,`strong`),Sk(101,`Content`),Kg()(),vu(102,`td`)(103,`td`),Kg(),Qc(104,`tr`)(105,`td`)(106,`code`),Sk(107,`--padding-content`),Kg()(),Qc(108,`td`),Sk(109,`Espaçamento do conteúdo`),Kg(),Qc(110,`td`)(111,`code`),Sk(112,`var(--spacing-xs) var(--spacing-sm)`),Kg()()()()()(),Qc(113,`div`,7)(114,`h4`,8),Sk(115,`Seletor`),Kg(),Qc(116,`pre`,9),Sk(117,`<po-page-edit
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
`),Kg()(),Qc(118,`h4`,10),Sk(119,`Propriedades`),Kg(),Qc(120,`table`,11)(121,`tr`,12)(122,`th`,13),Sk(123,`Nome`),Kg(),Qc(124,`th`,13),Sk(125,`Tipo`),Kg(),Qc(126,`th`,13),Sk(127,`Padrão`),Kg(),Qc(128,`th`,13),Sk(129,`Descrição`),Kg()(),Qc(130,`tr`,14)(131,`td`,15)(132,`div`,16)(133,`span`,17),Sk(134,` p-breadcrumb`),vu(135,`br`),Kg()()(),Qc(136,`td`,18)(137,`code`,19),Sk(138,`PoBreadcrumb`),Kg()(),Qc(139,`td`,20),Sk(140,`-`),Kg(),Qc(141,`td`,21)(142,`em`)(143,`strong`),Sk(144,`(opcional)`),Kg()(),Qc(145,`p`),Sk(146,`Objeto com propriedades do breadcrumb.`),Kg()()(),Qc(147,`tr`,22)(148,`td`,15)(149,`div`,23)(150,`span`,24),Sk(151,` (p-cancel)`),vu(152,`br`),Kg()()(),Qc(153,`td`,18)(154,`code`,25),Sk(155,`EventEmitter`),Kg()(),Qc(156,`td`,20),Sk(157,`-`),Kg(),Qc(158,`td`,21)(159,`p`),Sk(160,`Evento que será disparado ao clicar no botão de "Cancelar".`),Kg(),Qc(161,`pre`)(162,`code`),Sk(163,`<po-page-edit (p-cancel)="myCancelFunction()">
</po-page-edit>
`),Kg()(),Qc(164,`blockquote`)(165,`p`),Sk(166,`Caso não utilizar esta propriedade, o botão de "Cancelar" não será exibido.`),Kg()()()(),Qc(167,`tr`,26)(168,`td`,15)(169,`div`,16)(170,`span`,17),Sk(171,` p-components-size`),vu(172,`br`),Kg()()(),Qc(173,`td`,18)(174,`code`,27),Sk(175,`string`),Kg()(),Qc(176,`td`,20)(177,`p`)(178,`code`),Sk(179,`medium`),Kg()()(),Qc(180,`td`,21)(181,`em`)(182,`strong`),Sk(183,`(opcional)`),Kg()(),Qc(184,`p`),Sk(185,`Define o tamanho dos componentes de formulário no template:`),Kg(),Qc(186,`ul`)(187,`li`)(188,`code`),Sk(189,`small`),Kg(),Sk(190,`: aplica a medida small de cada componente (disponível apenas para acessibilidade AA).`),Kg(),Qc(191,`li`)(192,`code`),Sk(193,`medium`),Kg(),Sk(194,`: aplica a medida medium de cada componente.`),Kg()(),Qc(195,`blockquote`)(196,`p`),Sk(197,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Qc(198,`code`),Sk(199,`medium`),Kg(),Sk(200,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Qc(201,`a`,28),Sk(202,`po-theme`),Kg(),Sk(203,`.`),Kg()()()(),Qc(204,`tr`,29)(205,`td`,15)(206,`div`,16)(207,`span`,17),Sk(208,` p-disable-submit`),vu(209,`br`),Kg()()(),Qc(210,`td`,18)(211,`code`,30),Sk(212,`boolean`),Kg()(),Qc(213,`td`,20),Sk(214,`-`),Kg(),Qc(215,`td`,21)(216,`em`)(217,`strong`),Sk(218,`(opcional)`),Kg()(),Qc(219,`p`),Sk(220,`Desabilita botões de submissão (save e saveNew)`),Kg()()(),Qc(221,`tr`,31)(222,`td`,15)(223,`div`,16)(224,`span`,17),Sk(225,` p-literals`),vu(226,`br`),Kg()()(),Qc(227,`td`,18)(228,`code`,32),Sk(229,`PoPageEditLiterals`),Kg()(),Qc(230,`td`,20),Sk(231,`-`),Kg(),Qc(232,`td`,21)(233,`em`)(234,`strong`),Sk(235,`(opcional)`),Kg()(),Qc(236,`p`),Sk(237,`Objeto com as literais usadas no `),Qc(238,`code`),Sk(239,`po-page-edit`),Kg(),Sk(240,`.`),Kg(),Qc(241,`p`),Sk(242,`Existem duas maneiras de customizar o componente, passando um objeto com todas as literais disponíveis:`),Kg(),Qc(243,`pre`)(244,`code`),Sk(245,`const customLiterals: PoPageEditLiterals = {
  cancel: 'Voltar',
  save: 'Confirmar',
  saveNew: 'Confirmar e criar um novo'
};
`),Kg()(),Qc(246,`p`),Sk(247,`Ou passando apenas as literais que deseja customizar:`),Kg(),Qc(248,`pre`)(249,`code`),Sk(250,`const customLiterals: PoPageEditLiterals = {
  cancel: 'Cancelar processo'
};
`),Kg()(),Qc(251,`p`),Sk(252,`E para carregar as literais customizadas, basta apenas passar o objeto para o componente.`),Kg(),Qc(253,`pre`)(254,`code`),Sk(255,`<po-page-edit
  [p-literals]="customLiterals">
</po-page-edit>
`),Kg()(),Qc(256,`blockquote`)(257,`p`),Sk(258,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do
`),Qc(259,`a`,33)(260,`code`),Sk(261,`PoI18nService`),Kg()(),Sk(262,` ou do browser.`),Kg()()()(),Qc(263,`tr`,34)(264,`td`,15)(265,`div`,23)(266,`span`,24),Sk(267,` (p-save)`),vu(268,`br`),Kg()()(),Qc(269,`td`,18)(270,`code`,25),Sk(271,`EventEmitter`),Kg()(),Qc(272,`td`,20),Sk(273,`-`),Kg(),Qc(274,`td`,21)(275,`p`),Sk(276,`Evento que será disparado ao clicar no botão de "Salvar".`),Kg(),Qc(277,`pre`)(278,`code`),Sk(279,`<po-page-edit (p-save)="mySaveFunction()">
</po-page-edit>
`),Kg()(),Qc(280,`blockquote`)(281,`p`),Sk(282,`Caso não utilizar esta propriedade, o botão de "Salvar" não será exibido.`),Kg()()()(),Qc(283,`tr`,35)(284,`td`,15)(285,`div`,23)(286,`span`,24),Sk(287,` (p-save-new)`),vu(288,`br`),Kg()()(),Qc(289,`td`,18)(290,`code`,25),Sk(291,`EventEmitter`),Kg()(),Qc(292,`td`,20),Sk(293,`-`),Kg(),Qc(294,`td`,21)(295,`p`),Sk(296,`Evento que será disparado ao clicar no botão de "Salvar e Novo".`),Kg(),Qc(297,`pre`)(298,`code`),Sk(299,`<po-page-edit (p-save-new)="mySaveNewFunction()">
</po-page-edit>
`),Kg()(),Qc(300,`blockquote`)(301,`p`),Sk(302,`Caso não utilizar esta propriedade, o botão de "Salvar e Novo" não será exibido.`),Kg()()()(),Qc(303,`tr`,36)(304,`td`,15)(305,`div`,16)(306,`span`,17),Sk(307,` p-subtitle`),vu(308,`br`),Kg()()(),Qc(309,`td`,18)(310,`code`,27),Sk(311,`string`),Kg()(),Qc(312,`td`,20),Sk(313,`-`),Kg(),Qc(314,`td`,21)(315,`em`)(316,`strong`),Sk(317,`(opcional)`),Kg()(),Qc(318,`p`),Sk(319,`Subtitulo do Header da página.`),Kg(),Qc(320,`p`),Sk(321,`Suporta formatação básica com as tags `),Qc(322,`code`),Sk(323,`<b>`),Kg(),Sk(324,` (negrito), `),Qc(325,`code`),Sk(326,`<strong>`),Kg(),Sk(327,` (negrito), `),Qc(328,`code`),Sk(329,`<i>`),Kg(),Sk(330,` (itálico), `),Qc(331,`code`),Sk(332,`<em>`),Kg(),Sk(333,` (it\xE1lico) e
`),Qc(334,`code`),Sk(335,`<u>`),Kg(),Sk(336,` (sublinhado).`),Kg(),Qc(337,`p`),Sk(338,`Exemplo:`),Kg(),Qc(339,`pre`)(340,`code`,37),Sk(341,`subtitle = 'Fields marked with <b>*</b> are <u>required</u>';
`),Kg()(),Qc(342,`blockquote`)(343,`p`),Sk(344,`Requer que `),Qc(345,`code`),Sk(346,`p-title`),Kg(),Sk(347,` esteja definido.`),Kg()()()(),Qc(348,`tr`,38)(349,`td`,15)(350,`div`,16)(351,`span`,17),Sk(352,` p-title`),vu(353,`br`),Kg()()(),Qc(354,`td`,18)(355,`code`,27),Sk(356,`string`),Kg()(),Qc(357,`td`,20),Sk(358,`-`),Kg(),Qc(359,`td`,21)(360,`p`),Sk(361,`Título da página.`),Kg()()()(),Qc(362,`h3`),Sk(363,`Interfaces`),Kg(),Qc(364,`h4`,39)(365,`code`,5),Sk(366,`PoBreadcrumbItem`),Kg()(),Qc(367,`div`,2)(368,`p`),Sk(369,`Interface que define cada item do componente `),Qc(370,`strong`),Sk(371,`po-breadcrumb`),Kg(),Sk(372,`.`),Kg()(),Qc(373,`h4`,10),Sk(374,`Propriedades`),Kg(),Qc(375,`table`,11)(376,`tr`,12)(377,`th`,13),Sk(378,`Nome`),Kg(),Qc(379,`th`,13),Sk(380,`Tipo`),Kg(),Qc(381,`th`,13),Sk(382,`Descrição`),Kg()(),Qc(383,`tr`,40)(384,`td`,15)(385,`div`,16)(386,`span`,17),Sk(387,` action`),vu(388,`br`),Kg()()(),Qc(389,`td`,18)(390,`code`,41),Sk(391,`Function`),Kg()(),Qc(392,`td`,21)(393,`em`)(394,`strong`),Sk(395,`(opcional)`),Kg()(),Qc(396,`p`),Sk(397,`Ação executada ao clicar no item.`),Kg(),Qc(398,`blockquote`)(399,`p`),Sk(400,`A função atribuída a esta propriedade receberá o `),Qc(401,`em`),Sk(402,`label`),Kg(),Sk(403,` do item como parâmetro para execução.`),Kg()()()(),Qc(404,`tr`,42)(405,`td`,15)(406,`div`,16)(407,`span`,17),Sk(408,` label`),vu(409,`br`),Kg()()(),Qc(410,`td`,18)(411,`code`,27),Sk(412,`string`),Kg()(),Qc(413,`td`,21)(414,`p`),Sk(415,`Rótulo do item.`),Kg()()(),Qc(416,`tr`,43)(417,`td`,15)(418,`div`,16)(419,`span`,17),Sk(420,` link`),vu(421,`br`),Kg()()(),Qc(422,`td`,18)(423,`code`,27),Sk(424,`string`),Kg()(),Qc(425,`td`,21)(426,`em`)(427,`strong`),Sk(428,`(opcional)`),Kg()(),Qc(429,`p`),Sk(430,`Url do item.`),Kg(),Qc(431,`blockquote`)(432,`p`),Sk(433,`Caso o item também contenha uma `),Qc(434,`em`),Sk(435,`action`),Kg(),Sk(436,` definida, a preferência de execução será do `),Qc(437,`em`),Sk(438,`link`),Kg(),Sk(439,`.`),Kg()(),Qc(440,`blockquote`)(441,`p`),Sk(442,`Para o correto funcionamento, \xE9 necess\xE1rio que haja uma rota referenciando seu valor.
`),Qc(443,`strong`)(444,`a`,44),Sk(445,`Veja um exemplo de como criar rotas aqui`),Kg()(),Sk(446,`.`),Kg()(),Qc(447,`blockquote`)(448,`p`),Sk(449,`Esta propriedade é necessária para que a propriedade `),Qc(450,`code`),Sk(451,`p-favorite-service`),Kg(),Sk(452,` consiga favoritar ou desfavoritar.`),Kg()()()()(),Qc(453,`h4`,45)(454,`code`,5),Sk(455,`PoBreadcrumb`),Kg()(),Qc(456,`div`,2)(457,`p`),Sk(458,`Interface que define o `),Qc(459,`code`),Sk(460,`po-breadcrumb`),Kg(),Sk(461,`.`),Kg()(),Qc(462,`h4`,10),Sk(463,`Propriedades`),Kg(),Qc(464,`table`,11)(465,`tr`,12)(466,`th`,13),Sk(467,`Nome`),Kg(),Qc(468,`th`,13),Sk(469,`Tipo`),Kg(),Qc(470,`th`,13),Sk(471,`Descrição`),Kg()(),Qc(472,`tr`,46)(473,`td`,15)(474,`div`,16)(475,`span`,17),Sk(476,` favorite`),vu(477,`br`),Kg()()(),Qc(478,`td`,18)(479,`code`,27),Sk(480,`string`),Kg()(),Qc(481,`td`,21)(482,`em`)(483,`strong`),Sk(484,`(opcional)`),Kg()(),Qc(485,`p`),Sk(486,`Permite definir uma URL para favoritar ou desfavoritar.`),Kg(),Qc(487,`blockquote`)(488,`p`),Sk(489,`Para maiores informações verificar a propriedade `),Qc(490,`code`),Sk(491,`p-favorite-service`),Kg(),Sk(492,` do componente `),Qc(493,`code`),Sk(494,`po-breadcrumb`),Kg(),Sk(495,`.`),Kg()()()(),Qc(496,`tr`,47)(497,`td`,15)(498,`div`,16)(499,`span`,17),Sk(500,` items`),vu(501,`br`),Kg()()(),Qc(502,`td`,18)(503,`code`,48),Sk(504,`Array<PoBreadcrumbItem>`),Kg()(),Qc(505,`td`,21)(506,`p`),Sk(507,`Lista de itens do `),Qc(508,`em`),Sk(509,`breadcrumb`),Kg(),Sk(510,`.`),Kg(),Qc(511,`p`)(512,`strong`),Sk(513,`Exemplo:`),Kg()(),Qc(514,`pre`)(515,`code`),Sk(516,`{ label: 'Po Portal', link: 'portal' }
`),Kg()()()(),Qc(517,`tr`,49)(518,`td`,15)(519,`div`,16)(520,`span`,17),Sk(521,` params`),vu(522,`br`),Kg()()(),Qc(523,`td`,18)(524,`code`,50),Sk(525,`object`),Kg()(),Qc(526,`td`,21)(527,`em`)(528,`strong`),Sk(529,`(opcional)`),Kg()(),Qc(530,`p`),Sk(531,`Objeto que possibilita o envio de parâmetros adicionais à requisição.`),Kg()()()(),Qc(532,`h4`,51)(533,`code`,5),Sk(534,`PoPageEditLiterals`),Kg()(),Qc(535,`div`,2)(536,`p`),Sk(537,`Interface para definição das literais usadas no `),Qc(538,`code`),Sk(539,`po-page-edit`),Kg(),Sk(540,`.`),Kg()(),Qc(541,`h4`,10),Sk(542,`Propriedades`),Kg(),Qc(543,`table`,11)(544,`tr`,12)(545,`th`,13),Sk(546,`Nome`),Kg(),Qc(547,`th`,13),Sk(548,`Tipo`),Kg(),Qc(549,`th`,13),Sk(550,`Descrição`),Kg()(),Qc(551,`tr`,52)(552,`td`,15)(553,`div`,16)(554,`span`,17),Sk(555,` cancel`),vu(556,`br`),Kg()()(),Qc(557,`td`,18)(558,`code`,27),Sk(559,`string`),Kg()(),Qc(560,`td`,21)(561,`em`)(562,`strong`),Sk(563,`(opcional)`),Kg()(),Qc(564,`p`),Sk(565,`Label da ação `),Qc(566,`code`),Sk(567,`cancel`),Kg(),Sk(568,`.`),Kg()()(),Qc(569,`tr`,53)(570,`td`,15)(571,`div`,16)(572,`span`,17),Sk(573,` save`),vu(574,`br`),Kg()()(),Qc(575,`td`,18)(576,`code`,27),Sk(577,`string`),Kg()(),Qc(578,`td`,21)(579,`em`)(580,`strong`),Sk(581,`(opcional)`),Kg()(),Qc(582,`p`),Sk(583,`Label da ação `),Qc(584,`code`),Sk(585,`save`),Kg(),Sk(586,`.`),Kg()()(),Qc(587,`tr`,54)(588,`td`,15)(589,`div`,16)(590,`span`,17),Sk(591,` saveNew`),vu(592,`br`),Kg()()(),Qc(593,`td`,18)(594,`code`,27),Sk(595,`string`),Kg()(),Qc(596,`td`,21)(597,`em`)(598,`strong`),Sk(599,`(opcional)`),Kg()(),Qc(600,`p`),Sk(601,`Label da ação `),Qc(602,`code`),Sk(603,`saveNew`),Kg(),Sk(604,`.`),Kg()()()()())},dependencies:[P],encapsulation:2,changeDetection:1})}return o})();function xe(o,De){if(o&1&&(Qc(0,`div`,1),vu(1,`sample-po-page-edit-basic-view`)(2,`sample-po-page-edit-labs-view`)(3,`sample-po-page-edit-user-view`),Kg()),o&2){let p=ek();Rb(`hidden`,p.activeTab!==`web`)}}var Me=[{path:``,component:(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;title=`Page Edit`;actions=[];toWeb={label:`Ver exemplos`,icon:`an an-browsers`,action:()=>this.changeTab(`web`)};toDoc={label:`Ver documentação`,icon:`an an-file-text`,action:()=>this.changeTab(`doc`)};back={label:`Voltar`,icon:`an an-arrow-left`,action:this.goBack.bind(this)};constructor(p,r){this.route=p,this.router=r}goBack(){this.router.navigate([`documentation`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(p=>{let r=p.view;this.hidePoWebSample=this.samplesLength===0,this.activeTab=this.hidePoWebSample?`doc`:r||`web`,this.title=`Page Edit · `+(this.activeTab===`web`?`Exemplos`:`Documentação`),this.actions=this.hidePoWebSample?[this.back]:[this.activeTab===`web`?this.toDoc:this.toWeb,this.back]})}changeTab(p){this.router.navigate([],{queryParams:{view:p},queryParamsHandling:`merge`})}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(r){return new(r||o)(I(ar),I(An))};static ɵcmp=Jn({type:o,selectors:[[`ng-component`]],standalone:!1,decls:4,vars:4,consts:[[3,`p-title`,`p-actions`],[3,`hidden`]],template:function(r,n){r&1&&(Qc(0,`po-page-default`,0),FO(1,xe,4,1,`div`,1),Qc(2,`div`,1),vu(3,`sample-po-page-edit-doc`),Kg()()),r&2&&(Rb(`p-title`,n.title)(`p-actions`,n.actions),wg(),VO(n.hidePoWebSample?-1:1),wg(),Rb(`hidden`,n.activeTab!==`doc`))},dependencies:[Mze,me,se,ue,ge],encapsulation:2,changeDetection:1})}return o})()}];var Ee=(()=>{class o{static ɵfac=function(r){return new(r||o)};static ɵmod=ge$1({type:o});static ɵinj=de$1({imports:[GV.forChild(Me),GV]})}return o})();var mt=(()=>{class o{static ɵfac=function(r){return new(r||o)};static ɵmod=ge$1({type:o});static ɵinj=de$1({imports:[M,Ee]})}return o})();export{mt as DocPoPageEditModule};