import{m as P,p as M}from"./main-OAHE3DMQ.js";import{$r as No,A as Goe,Ba as q0,Br as Kb,Ci as U_,Cn as sie,Dn as tre,En as tie,Er as GV,Ft as are,G as Nf,Gi as _t,Hi as Zb,I as Joe,Ia as p,Ir as Jc,Ji as ar,Ki as _u,Lr as Jn,M as I4,Mi as WL,Mt as Zte,Na as ok,Pr as I,Qn as AZ,Tr as G0,Vr as Kg,W as Mze,Wr as LO,Ya as tk,_a as jO,_i as RZ,ca as ge$1,do as xo,ea as de$1,er as Ab,fn as oi,fr as Cu,it as Ru,jr as H_,li as QL,pn as p5,qr as Mk,ro as wg,s as Aze,so as xZ,tn as j4,tr as An,vi as Rk,zr as KO}from"./chunk-CTJH0VS3.js";var pe=(()=>{class o{static ɵfac=function(r){return new(r||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-page-edit-basic`]],standalone:!1,decls:1,vars:0,consts:[[`p-title`,`PO Page Edit`]],template:function(r,n){r&1&&_u(0,`po-page-edit`,0)},dependencies:[Aze],encapsulation:2,changeDetection:1})}return o})();var me=(()=>{class o{static ɵfac=function(r){return new(r||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-page-edit-basic-view`]],standalone:!1,decls:24,vars:0,consts:[[`id`,`sample-po-page-edit-basic`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`data-tour`,`sample-tabs`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-page-edit-basic/sample-po-page-edit-basic.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-page-edit-basic/sample-po-page-edit-basic.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`]],template:function(r,n){r&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Mk(3,`PO Page Edit Basic`),Kg()(),Jc(4,`div`,2)(5,`po-tabs`,3)(6,`po-tab`,4)(7,`div`,5),_u(8,`sample-po-page-edit-basic`),Kg()(),Jc(9,`po-tab`,6)(10,`div`)(11,`label`,7),Mk(12,`sample-po-page-edit-basic/sample-po-page-edit-basic.component.html`),Kg(),Jc(13,`div`,8)(14,`pre`,9),Mk(15,`<po-page-edit p-title="PO Page Edit"> </po-page-edit>
`),Kg()()()(),Jc(16,`po-tab`,10)(17,`div`)(18,`label`,7),Mk(19,`sample-po-page-edit-basic/sample-po-page-edit-basic.component.ts`),Kg(),Jc(20,`div`,11)(21,`pre`,12),Mk(22,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-page-edit-basic',
  templateUrl: './sample-po-page-edit-basic.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoPageEditBasicComponent {}
`),Kg()()()()()(),_u(23,`hr`))},dependencies:[P,tre,are,pe],encapsulation:2,changeDetection:1})}return o})();var de=(()=>{class o{action;breadcrumb;breadcrumbItem;breadcrumbParams;componentsSize;customLiterals;literals;params;properties;title;subtitle;componentsSizeOptions=[{label:`small`,value:`small`},{label:`medium`,value:`medium`}];propertiesOptions=[{value:`disableSubmit`,label:`Disable Submit`}];ngOnInit(){this.restore()}addBreadcrumbItem(){this.breadcrumb.items=this.breadcrumb.items.concat([this.breadcrumbItem]),this.breadcrumbItem={label:void 0,link:void 0}}addBreadcrumbParam(){let p={[this.breadcrumbParams.property]:this.breadcrumbParams.value};this.breadcrumb.params?this.breadcrumb.params=Object.assign(this.breadcrumb.params,p):this.breadcrumb.params=p,this.breadcrumbParams={}}cancel(){this.action=`Cancel`}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals)}catch(p){this.customLiterals=void 0}}restore(){this.action=``,this.breadcrumb={items:[]},this.breadcrumbItem={label:void 0,link:void 0},this.breadcrumbParams={},this.componentsSize=`medium`,this.customLiterals=void 0,this.literals=``,this.properties=[],this.title=`PO Page Edit`,this.subtitle=``}save(){this.action=`Save`}saveNew(){this.action=`Save and new`}static ɵfac=function(r){return new(r||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-page-edit-labs`]],standalone:!1,decls:34,vars:21,consts:[[`formBreadcrumbFavorite`,`ngForm`],[`formBreadcrumbItems`,`ngForm`],[`formBreadcrumbParams`,`ngForm`],[3,`p-cancel`,`p-save`,`p-save-new`,`p-breadcrumb`,`p-components-size`,`p-disable-submit`,`p-literals`,`p-title`,`p-subtitle`],[1,`po-row`],[`p-label`,`Action`,1,`po-md-12`,3,`p-value`],[`name`,`title`,`p-label`,`Title`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`subtitle`,`p-label`,`Subtitle`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`properties`,`p-columns`,`4`,`p-label`,`Properties`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`size`,`p-columns`,`4`,`p-label`,`Components size`,`p-help`,`Para aplicar o tamanho small, configure o nível de acessibilidade para AA, ajustável no navbar ou serviço de tema (https://po-ui.io/documentation/po-theme).`,1,`po-md-12`,3,`ngModelChange`,`ngModel`,`p-options`],[`name`,`breadcrumbFavorite`,`p-clean`,``,`p-help`,`https://po-sample-api.onrender.com/v1/favorite`,`p-label`,`Breadcrumb favorite`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`breadcrumbItemLabel`,`p-clean`,``,`p-label`,`Breadcrumb item label`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`breadcrumbItemLink`,`p-clean`,``,`p-label`,`Breadcrumb item link`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Add breadcrumb item`,1,`po-md-6`,`po-lg-3`,3,`p-click`,`p-disabled`],[`name`,`breadcrumbParamsProperty`,`p-clean`,``,`p-label`,`Breadcrumb params property`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`breadcrumbParamsValue`,`p-clean`,``,`p-label`,`Breadcrumb params value`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Add breadcrumb params`,1,`po-md-6`,`po-lg-3`,3,`p-click`,`p-disabled`],[`name`,`literals`,`p-help`,`Ex.: {"cancel": "Voltar", "save": "Confirmar", "saveNew": "Confirmar e criar um novo"}`,`p-label`,`Literals`,1,`po-md-12`,`po-lg-6`,3,`ngModelChange`,`p-change`,`ngModel`],[`p-label`,`Sample Restore`,1,`po-lg-3`,`po-md-6`,3,`p-click`]],template:function(r,n){if(r&1){let d=KO();Jc(0,`po-page-edit`,3),_t(`p-cancel`,function(){return n.cancel()})(`p-save`,function(){return n.save()})(`p-save-new`,function(){return n.saveNew()}),Jc(1,`div`,4),_u(2,`po-info`,5),Kg(),_u(3,`po-divider`),Jc(4,`form`)(5,`div`,4)(6,`po-input`,6),G0(),Zb(`ngModelChange`,function(a){return U_(d),Rk(n.title,a)||(n.title=a),H_(a)}),Kg(),Jc(7,`po-input`,7),G0(),Zb(`ngModelChange`,function(a){return U_(d),Rk(n.subtitle,a)||(n.subtitle=a),H_(a)}),Kg(),Jc(8,`po-checkbox-group`,8),G0(),Zb(`ngModelChange`,function(a){return U_(d),Rk(n.properties,a)||(n.properties=a),H_(a)}),Kg(),Jc(9,`po-radio-group`,9),G0(),Zb(`ngModelChange`,function(a){return U_(d),Rk(n.componentsSize,a)||(n.componentsSize=a),H_(a)}),Kg()(),_u(10,`po-divider`),Jc(11,`form`,null,0)(13,`div`,4)(14,`po-input`,10),G0(),Zb(`ngModelChange`,function(a){return U_(d),Rk(n.breadcrumb.favorite,a)||(n.breadcrumb.favorite=a),H_(a)}),Kg()()(),Jc(15,`form`,null,1)(17,`div`,4)(18,`po-input`,11),G0(),Zb(`ngModelChange`,function(a){return U_(d),Rk(n.breadcrumbItem.label,a)||(n.breadcrumbItem.label=a),H_(a)}),Kg(),Jc(19,`po-input`,12),G0(),Zb(`ngModelChange`,function(a){return U_(d),Rk(n.breadcrumbItem.link,a)||(n.breadcrumbItem.link=a),H_(a)}),Kg()(),Jc(20,`div`,4)(21,`po-button`,13),_t(`p-click`,function(){return n.addBreadcrumbItem()}),Kg()()(),_u(22,`po-divider`),Jc(23,`form`,null,2)(25,`div`,4)(26,`po-input`,14),G0(),Zb(`ngModelChange`,function(a){return U_(d),Rk(n.breadcrumbParams.property,a)||(n.breadcrumbParams.property=a),H_(a)}),Kg(),Jc(27,`po-input`,15),G0(),Zb(`ngModelChange`,function(a){return U_(d),Rk(n.breadcrumbParams.value,a)||(n.breadcrumbParams.value=a),H_(a)}),Kg()(),Jc(28,`div`,4)(29,`po-button`,16),_t(`p-click`,function(){return n.addBreadcrumbParam()}),Kg()()(),Jc(30,`div`,4)(31,`po-input`,17),G0(),Zb(`ngModelChange`,function(a){return U_(d),Rk(n.literals,a)||(n.literals=a),H_(a)}),_t(`p-change`,function(){return n.changeLiterals()}),Kg()(),Jc(32,`div`,4)(33,`po-button`,18),_t(`p-click`,function(){return n.restore()}),Kg()()()()}if(r&2){let d=ok(16),m=ok(24);Ab(`p-breadcrumb`,n.breadcrumb)(`p-components-size`,n.componentsSize)(`p-disable-submit`,n.properties.includes(`disableSubmit`))(`p-literals`,n.customLiterals)(`p-title`,n.title)(`p-subtitle`,n.subtitle),wg(2),Ab(`p-value`,n.action),wg(4),Kb(`ngModel`,n.title),q0(),wg(),Kb(`ngModel`,n.subtitle),q0(),wg(),Kb(`ngModel`,n.properties),Ab(`p-options`,n.propertiesOptions),q0(),wg(),Kb(`ngModel`,n.componentsSize),Ab(`p-options`,n.componentsSizeOptions),q0(),wg(5),Kb(`ngModel`,n.breadcrumb.favorite),q0(),wg(4),Kb(`ngModel`,n.breadcrumbItem.label),q0(),wg(),Kb(`ngModel`,n.breadcrumbItem.link),q0(),wg(2),Ab(`p-disabled`,d.invalid),wg(5),Kb(`ngModel`,n.breadcrumbParams.property),q0(),wg(),Kb(`ngModel`,n.breadcrumbParams.value),q0(),wg(2),Ab(`p-disabled`,m.invalid),wg(2),Kb(`ngModel`,n.literals),q0()}},dependencies:[xZ,RZ,AZ,QL,WL,oi,Nf,I4,j4,Zte,Joe,Aze],encapsulation:2,changeDetection:1})}return o})();var se=(()=>{class o{static ɵfac=function(r){return new(r||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-page-edit-labs-view`]],standalone:!1,decls:24,vars:0,consts:[[`id`,`sample-po-page-edit-labs`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`data-tour`,`sample-tabs`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-page-edit-labs/sample-po-page-edit-labs.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-page-edit-labs/sample-po-page-edit-labs.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`]],template:function(r,n){r&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Mk(3,`PO Page Edit Labs`),Kg()(),Jc(4,`div`,2)(5,`po-tabs`,3)(6,`po-tab`,4)(7,`div`,5),_u(8,`sample-po-page-edit-labs`),Kg()(),Jc(9,`po-tab`,6)(10,`div`)(11,`label`,7),Mk(12,`sample-po-page-edit-labs/sample-po-page-edit-labs.component.html`),Kg(),Jc(13,`div`,8)(14,`pre`,9),Mk(15,`<po-page-edit
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
`),Kg()()()(),Jc(16,`po-tab`,10)(17,`div`)(18,`label`,7),Mk(19,`sample-po-page-edit-labs/sample-po-page-edit-labs.component.ts`),Kg(),Jc(20,`div`,11)(21,`pre`,12),Mk(22,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),Kg()()()()()(),_u(23,`hr`))},dependencies:[P,tre,are,de],encapsulation:2,changeDetection:1})}return o})();var Ce=[`formEditUser`];var ce=(()=>{class o{route=p(An);poDialog=p(sie);poNotification=p(Ru);formEditUser;birthDate;email;fathersName;genre;graduation;mothersName;name;nationality;nickname;placeOfBirth;userId;breadcrumb={items:[{label:`Home`,action:this.beforeRedirect.bind(this)},{label:`User Edit`}]};ngOnInit(){this.initialize()}cancel(){this.initialize()}initialize(){this.birthDate=new Date(1978,11,26),this.email=`john.doe@po-ui.com.br`,this.fathersName=`Mike Doe`,this.genre=`male`,this.graduation=`College Degree`,this.mothersName=`Jane Doe`,this.name=`John Doe`,this.nationality=`USA`,this.nickname=`John`,this.placeOfBirth=`Colorado`,this.userId=122635}save(){this.poNotification.success(`Save successfully`)}beforeRedirect(p){this.formEditUser.valid?this.route.navigate([`/`]):this.poDialog.confirm({title:`Confirm redirect to ${p}`,message:`There is data that has not been saved yet. Are you sure you want to quit?`,confirm:()=>this.route.navigate([`/`])})}static ɵfac=function(r){return new(r||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-page-edit-user`]],viewQuery:function(r,n){if(r&1&&Cu(Ce,7),r&2){let d;No(d=xo())&&(n.formEditUser=d.first)}},standalone:!1,decls:18,vars:13,consts:[[`formEditUser`,`ngForm`],[`p-title`,`User Edit`,`p-subtitle`,`Fields marked with <b>*</b> are <u>required</u>`,3,`p-cancel`,`p-save`,`p-breadcrumb`,`p-disable-submit`],[1,`po-row`],[`name`,`userId`,`p-clean`,``,`p-label`,`User ID`,`p-required`,``,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`name`,`email`,`p-clean`,``,`p-label`,`Email`,`p-required`,``,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`name`,`name`,`p-clean`,``,`p-label`,`Name`,`p-required`,``,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`name`,`nickname`,`p-clean`,``,`p-label`,`Nickname`,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`name`,`birthDate`,`p-clean`,``,`p-label`,`Birth Date`,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`name`,`genre`,`p-clean`,``,`p-label`,`Genre`,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`name`,`nationality`,`p-clean`,``,`p-label`,`Nationality`,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`name`,`placeOfBirth`,`p-clean`,``,`p-label`,`Place Of Birth`,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`name`,`graduation`,`p-clean`,``,`p-label`,`Graduation`,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`name`,`fathersName`,`p-clean`,``,`p-label`,`Father's Name`,1,`po-md-4`,3,`ngModelChange`,`ngModel`],[`name`,`mothersName`,`p-clean`,``,`p-label`,`Mother's Name`,1,`po-md-4`,3,`ngModelChange`,`ngModel`]],template:function(r,n){if(r&1){let d=KO();Jc(0,`po-page-edit`,1),_t(`p-cancel`,function(){return n.cancel()})(`p-save`,function(){return n.save()}),Jc(1,`form`,null,0)(3,`div`,2)(4,`po-number`,3),G0(),Zb(`ngModelChange`,function(a){return U_(d),Rk(n.userId,a)||(n.userId=a),H_(a)}),Kg(),Jc(5,`po-email`,4),G0(),Zb(`ngModelChange`,function(a){return U_(d),Rk(n.email,a)||(n.email=a),H_(a)}),Kg(),Jc(6,`po-input`,5),G0(),Zb(`ngModelChange`,function(a){return U_(d),Rk(n.name,a)||(n.name=a),H_(a)}),Kg()(),Jc(7,`div`,2)(8,`po-input`,6),G0(),Zb(`ngModelChange`,function(a){return U_(d),Rk(n.nickname,a)||(n.nickname=a),H_(a)}),Kg(),Jc(9,`po-datepicker`,7),G0(),Zb(`ngModelChange`,function(a){return U_(d),Rk(n.birthDate,a)||(n.birthDate=a),H_(a)}),Kg(),Jc(10,`po-input`,8),G0(),Zb(`ngModelChange`,function(a){return U_(d),Rk(n.genre,a)||(n.genre=a),H_(a)}),Kg()(),Jc(11,`div`,2)(12,`po-input`,9),G0(),Zb(`ngModelChange`,function(a){return U_(d),Rk(n.nationality,a)||(n.nationality=a),H_(a)}),Kg(),Jc(13,`po-input`,10),G0(),Zb(`ngModelChange`,function(a){return U_(d),Rk(n.placeOfBirth,a)||(n.placeOfBirth=a),H_(a)}),Kg(),Jc(14,`po-input`,11),G0(),Zb(`ngModelChange`,function(a){return U_(d),Rk(n.graduation,a)||(n.graduation=a),H_(a)}),Kg()(),Jc(15,`div`,2)(16,`po-input`,12),G0(),Zb(`ngModelChange`,function(a){return U_(d),Rk(n.fathersName,a)||(n.fathersName=a),H_(a)}),Kg(),Jc(17,`po-input`,13),G0(),Zb(`ngModelChange`,function(a){return U_(d),Rk(n.mothersName,a)||(n.mothersName=a),H_(a)}),Kg()()()()}if(r&2){let d=ok(2);Ab(`p-breadcrumb`,n.breadcrumb)(`p-disable-submit`,d.invalid),wg(4),Kb(`ngModel`,n.userId),q0(),wg(),Kb(`ngModel`,n.email),q0(),wg(),Kb(`ngModel`,n.name),q0(),wg(2),Kb(`ngModel`,n.nickname),q0(),wg(),Kb(`ngModel`,n.birthDate),q0(),wg(),Kb(`ngModel`,n.genre),q0(),wg(2),Kb(`ngModel`,n.nationality),q0(),wg(),Kb(`ngModel`,n.placeOfBirth),q0(),wg(),Kb(`ngModel`,n.graduation),q0(),wg(2),Kb(`ngModel`,n.fathersName),q0(),wg(),Kb(`ngModel`,n.mothersName),q0()}},dependencies:[xZ,RZ,AZ,QL,WL,tie,p5,j4,Goe,Aze],encapsulation:2,changeDetection:1})}return o})();var ue=(()=>{class o{static ɵfac=function(r){return new(r||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-page-edit-user-view`]],standalone:!1,decls:24,vars:0,consts:[[`id`,`sample-po-page-edit-user`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`data-tour`,`sample-tabs`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-page-edit-user/sample-po-page-edit-user.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-page-edit-user/sample-po-page-edit-user.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`]],template:function(r,n){r&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Mk(3,`PO Page Edit - User`),Kg()(),Jc(4,`div`,2)(5,`po-tabs`,3)(6,`po-tab`,4)(7,`div`,5),_u(8,`sample-po-page-edit-user`),Kg()(),Jc(9,`po-tab`,6)(10,`div`)(11,`label`,7),Mk(12,`sample-po-page-edit-user/sample-po-page-edit-user.component.html`),Kg(),Jc(13,`div`,8)(14,`pre`,9),Mk(15,`<po-page-edit
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
`),Kg()()()(),Jc(16,`po-tab`,10)(17,`div`)(18,`label`,7),Mk(19,`sample-po-page-edit-user/sample-po-page-edit-user.component.ts`),Kg(),Jc(20,`div`,11)(21,`pre`,12),Mk(22,`import { Component, OnInit, ViewChild, inject, ChangeDetectionStrategy } from '@angular/core';
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
`),Kg()()()()()(),_u(23,`hr`))},dependencies:[P,tre,are,ce],encapsulation:2,changeDetection:1})}return o})();var ge=(()=>{class o{router=p(An);openDoc(p){this.router.navigate([`/documentation`,p],{queryParams:{view:`doc`}})}static ɵfac=function(r){return new(r||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-page-edit-doc`]],standalone:!1,decls:605,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[`id`,`class-po-page-edit-component`,1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[`id`,`prop-p-breadcrumb`,1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`PoBreadcrumb`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`id`,`event-p-cancel`,1,`docs-api-properties-row`],[1,`docs-api-output-marker`],[1,`docs-api-output-alias`],[`pan`,``,1,`docs-api-property-type`,`EventEmitter`],[`id`,`prop-p-components-size`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`string`],[`href`,`https://po-ui.io/documentation/po-theme`],[`id`,`prop-p-disable-submit`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[`id`,`prop-p-literals`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`PoPageEditLiterals`],[`href`,`/documentation/po-i18n`],[`id`,`event-p-save`,1,`docs-api-properties-row`],[`id`,`event-p-save-new`,1,`docs-api-properties-row`],[`id`,`prop-p-subtitle`,1,`docs-api-properties-row`],[1,`language-typescript`],[`id`,`prop-p-title`,1,`docs-api-properties-row`],[`id`,`interface-po-breadcrumb-item`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-breadcrumb-item-action`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`Function`],[`id`,`interface-po-breadcrumb-item-label`,1,`docs-api-properties-row`],[`id`,`interface-po-breadcrumb-item-link`,1,`docs-api-properties-row`],[`href`,`/guides/getting-started`],[`id`,`interface-po-breadcrumb`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-breadcrumb-favorite`,1,`docs-api-properties-row`],[`id`,`interface-po-breadcrumb-items`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`Array<PoBreadcrumbItem>`],[`id`,`interface-po-breadcrumb-params`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`object`],[`id`,`interface-po-page-edit-literals`,1,`docs-api-h4`,`docs-api-class-name`],[`id`,`interface-po-page-edit-literals-cancel`,1,`docs-api-properties-row`],[`id`,`interface-po-page-edit-literals-save`,1,`docs-api-properties-row`],[`id`,`interface-po-page-edit-literals-save-new`,1,`docs-api-properties-row`]],template:function(r,n){r&1&&(Jc(0,`div`,0)(1,`p`,1)(2,`code`),Mk(3,`import { PoPageModule } from '@po-ui/ng-components';`),Kg()(),Jc(4,`div`,2)(5,`p`),Mk(6,`Módulo responsável pelos componentes de estrutura de página: `),Jc(7,`code`),Mk(8,`po-page-default`),Kg(),Mk(9,`, `),Jc(10,`code`),Mk(11,`po-page-detail`),Kg(),Mk(12,`,
`),Jc(13,`code`),Mk(14,`po-page-edit`),Kg(),Mk(15,`, `),Jc(16,`code`),Mk(17,`po-page-list`),Kg(),Mk(18,` e `),Jc(19,`code`),Mk(20,`po-page-slide`),Kg(),Mk(21,`.`),Kg()(),Jc(22,`h3`,3),Mk(23,`Componente`),Kg(),Jc(24,`h4`,4)(25,`code`,5),Mk(26,`PoPageEditComponent`),Kg()(),Jc(27,`div`,2)(28,`p`),Mk(29,`O componente `),Jc(30,`strong`),Mk(31,`po-page-edit`),Kg(),Mk(32,` \xE9 utilizado como container principal para tela de edi\xE7\xE3o ou adi\xE7\xE3o de um
registro, tendo a possibilidade de usar as a\xE7\xF5es de "Salvar", "Salvar e Novo" e "Cancelar".`),Kg(),Jc(33,`p`),Mk(34,`Os botões "Salvar" e "Salvar e Novo" podem ser habilitados/desabilitados utilizando a propriedade `),Jc(35,`code`),Mk(36,`p-disable-submit`),Kg(),Mk(37,`.
Esta propriedade pode ser utilizada para desabilitar os bot\xF5es caso exista um formul\xE1rio inv\xE1lido na p\xE1gina ou alguma
regra de neg\xF3cio n\xE3o tenha sido atendida.`),Kg(),Jc(38,`h4`),Mk(39,`Tokens customizáveis`),Kg(),Jc(40,`blockquote`)(41,`p`),Mk(42,`Para maiores informações, acesse o guia `),Jc(43,`a`,6),Mk(44,`Personalizando o Tema Padrão com Tokens CSS`),Kg(),Mk(45,`.`),Kg()(),Jc(46,`table`)(47,`thead`)(48,`tr`)(49,`th`),Mk(50,`Propriedade`),Kg(),Jc(51,`th`),Mk(52,`Descrição`),Kg(),Jc(53,`th`),Mk(54,`Valor Padrão`),Kg()()(),Jc(55,`tbody`)(56,`tr`)(57,`td`)(58,`strong`),Mk(59,`Header`),Kg()(),_u(60,`td`)(61,`td`),Kg(),Jc(62,`tr`)(63,`td`)(64,`code`),Mk(65,`--padding`),Kg()(),Jc(66,`td`),Mk(67,`Espaçamento do header`),Kg(),Jc(68,`td`)(69,`code`),Mk(70,`var(--spacing-xs) var(--spacing-md)`),Kg()()(),Jc(71,`tr`)(72,`td`)(73,`code`),Mk(74,`--gap`),Kg()(),Jc(75,`td`),Mk(76,`Espaçamento entre os breadcrumbs e o título`),Kg(),Jc(77,`td`)(78,`code`),Mk(79,`var(--spacing-md)`),Kg()()(),Jc(80,`tr`)(81,`td`)(82,`code`),Mk(83,`--gap-actions`),Kg()(),Jc(84,`td`),Mk(85,`Espaçamento entre as ações`),Kg(),Jc(86,`td`)(87,`code`),Mk(88,`var(--spacing-xs)`),Kg()()(),Jc(89,`tr`)(90,`td`)(91,`code`),Mk(92,`--font-family`),Kg()(),Jc(93,`td`),Mk(94,`Família tipográfica do título`),Kg(),Jc(95,`td`)(96,`code`),Mk(97,`var(--font-family-theme)`),Kg()()(),Jc(98,`tr`)(99,`td`)(100,`strong`),Mk(101,`Content`),Kg()(),_u(102,`td`)(103,`td`),Kg(),Jc(104,`tr`)(105,`td`)(106,`code`),Mk(107,`--padding-content`),Kg()(),Jc(108,`td`),Mk(109,`Espaçamento do conteúdo`),Kg(),Jc(110,`td`)(111,`code`),Mk(112,`var(--spacing-xs) var(--spacing-sm)`),Kg()()()()()(),Jc(113,`div`,7)(114,`h4`,8),Mk(115,`Seletor`),Kg(),Jc(116,`pre`,9),Mk(117,`<po-page-edit
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
`),Kg()(),Jc(118,`h4`,10),Mk(119,`Propriedades`),Kg(),Jc(120,`table`,11)(121,`tr`,12)(122,`th`,13),Mk(123,`Nome`),Kg(),Jc(124,`th`,13),Mk(125,`Tipo`),Kg(),Jc(126,`th`,13),Mk(127,`Padrão`),Kg(),Jc(128,`th`,13),Mk(129,`Descrição`),Kg()(),Jc(130,`tr`,14)(131,`td`,15)(132,`div`,16)(133,`span`,17),Mk(134,` p-breadcrumb`),_u(135,`br`),Kg()()(),Jc(136,`td`,18)(137,`code`,19),Mk(138,`PoBreadcrumb`),Kg()(),Jc(139,`td`,20),Mk(140,`-`),Kg(),Jc(141,`td`,21)(142,`em`)(143,`strong`),Mk(144,`(opcional)`),Kg()(),Jc(145,`p`),Mk(146,`Objeto com propriedades do breadcrumb.`),Kg()()(),Jc(147,`tr`,22)(148,`td`,15)(149,`div`,23)(150,`span`,24),Mk(151,` (p-cancel)`),_u(152,`br`),Kg()()(),Jc(153,`td`,18)(154,`code`,25),Mk(155,`EventEmitter`),Kg()(),Jc(156,`td`,20),Mk(157,`-`),Kg(),Jc(158,`td`,21)(159,`p`),Mk(160,`Evento que será disparado ao clicar no botão de "Cancelar".`),Kg(),Jc(161,`pre`)(162,`code`),Mk(163,`<po-page-edit (p-cancel)="myCancelFunction()">
</po-page-edit>
`),Kg()(),Jc(164,`blockquote`)(165,`p`),Mk(166,`Caso não utilizar esta propriedade, o botão de "Cancelar" não será exibido.`),Kg()()()(),Jc(167,`tr`,26)(168,`td`,15)(169,`div`,16)(170,`span`,17),Mk(171,` p-components-size`),_u(172,`br`),Kg()()(),Jc(173,`td`,18)(174,`code`,27),Mk(175,`string`),Kg()(),Jc(176,`td`,20)(177,`p`)(178,`code`),Mk(179,`medium`),Kg()()(),Jc(180,`td`,21)(181,`em`)(182,`strong`),Mk(183,`(opcional)`),Kg()(),Jc(184,`p`),Mk(185,`Define o tamanho dos componentes de formulário no template:`),Kg(),Jc(186,`ul`)(187,`li`)(188,`code`),Mk(189,`small`),Kg(),Mk(190,`: aplica a medida small de cada componente (disponível apenas para acessibilidade AA).`),Kg(),Jc(191,`li`)(192,`code`),Mk(193,`medium`),Kg(),Mk(194,`: aplica a medida medium de cada componente.`),Kg()(),Jc(195,`blockquote`)(196,`p`),Mk(197,`Caso a acessibilidade AA não esteja configurada, o tamanho `),Jc(198,`code`),Mk(199,`medium`),Kg(),Mk(200,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),Jc(201,`a`,28),Mk(202,`po-theme`),Kg(),Mk(203,`.`),Kg()()()(),Jc(204,`tr`,29)(205,`td`,15)(206,`div`,16)(207,`span`,17),Mk(208,` p-disable-submit`),_u(209,`br`),Kg()()(),Jc(210,`td`,18)(211,`code`,30),Mk(212,`boolean`),Kg()(),Jc(213,`td`,20),Mk(214,`-`),Kg(),Jc(215,`td`,21)(216,`em`)(217,`strong`),Mk(218,`(opcional)`),Kg()(),Jc(219,`p`),Mk(220,`Desabilita botões de submissão (save e saveNew)`),Kg()()(),Jc(221,`tr`,31)(222,`td`,15)(223,`div`,16)(224,`span`,17),Mk(225,` p-literals`),_u(226,`br`),Kg()()(),Jc(227,`td`,18)(228,`code`,32),Mk(229,`PoPageEditLiterals`),Kg()(),Jc(230,`td`,20),Mk(231,`-`),Kg(),Jc(232,`td`,21)(233,`em`)(234,`strong`),Mk(235,`(opcional)`),Kg()(),Jc(236,`p`),Mk(237,`Objeto com as literais usadas no `),Jc(238,`code`),Mk(239,`po-page-edit`),Kg(),Mk(240,`.`),Kg(),Jc(241,`p`),Mk(242,`Existem duas maneiras de customizar o componente, passando um objeto com todas as literais disponíveis:`),Kg(),Jc(243,`pre`)(244,`code`),Mk(245,`const customLiterals: PoPageEditLiterals = {
  cancel: 'Voltar',
  save: 'Confirmar',
  saveNew: 'Confirmar e criar um novo'
};
`),Kg()(),Jc(246,`p`),Mk(247,`Ou passando apenas as literais que deseja customizar:`),Kg(),Jc(248,`pre`)(249,`code`),Mk(250,`const customLiterals: PoPageEditLiterals = {
  cancel: 'Cancelar processo'
};
`),Kg()(),Jc(251,`p`),Mk(252,`E para carregar as literais customizadas, basta apenas passar o objeto para o componente.`),Kg(),Jc(253,`pre`)(254,`code`),Mk(255,`<po-page-edit
  [p-literals]="customLiterals">
</po-page-edit>
`),Kg()(),Jc(256,`blockquote`)(257,`p`),Mk(258,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do
`),Jc(259,`a`,33)(260,`code`),Mk(261,`PoI18nService`),Kg()(),Mk(262,` ou do browser.`),Kg()()()(),Jc(263,`tr`,34)(264,`td`,15)(265,`div`,23)(266,`span`,24),Mk(267,` (p-save)`),_u(268,`br`),Kg()()(),Jc(269,`td`,18)(270,`code`,25),Mk(271,`EventEmitter`),Kg()(),Jc(272,`td`,20),Mk(273,`-`),Kg(),Jc(274,`td`,21)(275,`p`),Mk(276,`Evento que será disparado ao clicar no botão de "Salvar".`),Kg(),Jc(277,`pre`)(278,`code`),Mk(279,`<po-page-edit (p-save)="mySaveFunction()">
</po-page-edit>
`),Kg()(),Jc(280,`blockquote`)(281,`p`),Mk(282,`Caso não utilizar esta propriedade, o botão de "Salvar" não será exibido.`),Kg()()()(),Jc(283,`tr`,35)(284,`td`,15)(285,`div`,23)(286,`span`,24),Mk(287,` (p-save-new)`),_u(288,`br`),Kg()()(),Jc(289,`td`,18)(290,`code`,25),Mk(291,`EventEmitter`),Kg()(),Jc(292,`td`,20),Mk(293,`-`),Kg(),Jc(294,`td`,21)(295,`p`),Mk(296,`Evento que será disparado ao clicar no botão de "Salvar e Novo".`),Kg(),Jc(297,`pre`)(298,`code`),Mk(299,`<po-page-edit (p-save-new)="mySaveNewFunction()">
</po-page-edit>
`),Kg()(),Jc(300,`blockquote`)(301,`p`),Mk(302,`Caso não utilizar esta propriedade, o botão de "Salvar e Novo" não será exibido.`),Kg()()()(),Jc(303,`tr`,36)(304,`td`,15)(305,`div`,16)(306,`span`,17),Mk(307,` p-subtitle`),_u(308,`br`),Kg()()(),Jc(309,`td`,18)(310,`code`,27),Mk(311,`string`),Kg()(),Jc(312,`td`,20),Mk(313,`-`),Kg(),Jc(314,`td`,21)(315,`em`)(316,`strong`),Mk(317,`(opcional)`),Kg()(),Jc(318,`p`),Mk(319,`Subtitulo do Header da página.`),Kg(),Jc(320,`p`),Mk(321,`Suporta formatação básica com as tags `),Jc(322,`code`),Mk(323,`<b>`),Kg(),Mk(324,` (negrito), `),Jc(325,`code`),Mk(326,`<strong>`),Kg(),Mk(327,` (negrito), `),Jc(328,`code`),Mk(329,`<i>`),Kg(),Mk(330,` (itálico), `),Jc(331,`code`),Mk(332,`<em>`),Kg(),Mk(333,` (it\xE1lico) e
`),Jc(334,`code`),Mk(335,`<u>`),Kg(),Mk(336,` (sublinhado).`),Kg(),Jc(337,`p`),Mk(338,`Exemplo:`),Kg(),Jc(339,`pre`)(340,`code`,37),Mk(341,`subtitle = 'Fields marked with <b>*</b> are <u>required</u>';
`),Kg()(),Jc(342,`blockquote`)(343,`p`),Mk(344,`Requer que `),Jc(345,`code`),Mk(346,`p-title`),Kg(),Mk(347,` esteja definido.`),Kg()()()(),Jc(348,`tr`,38)(349,`td`,15)(350,`div`,16)(351,`span`,17),Mk(352,` p-title`),_u(353,`br`),Kg()()(),Jc(354,`td`,18)(355,`code`,27),Mk(356,`string`),Kg()(),Jc(357,`td`,20),Mk(358,`-`),Kg(),Jc(359,`td`,21)(360,`p`),Mk(361,`Título da página.`),Kg()()()(),Jc(362,`h3`),Mk(363,`Interfaces`),Kg(),Jc(364,`h4`,39)(365,`code`,5),Mk(366,`PoBreadcrumbItem`),Kg()(),Jc(367,`div`,2)(368,`p`),Mk(369,`Interface que define cada item do componente `),Jc(370,`strong`),Mk(371,`po-breadcrumb`),Kg(),Mk(372,`.`),Kg()(),Jc(373,`h4`,10),Mk(374,`Propriedades`),Kg(),Jc(375,`table`,11)(376,`tr`,12)(377,`th`,13),Mk(378,`Nome`),Kg(),Jc(379,`th`,13),Mk(380,`Tipo`),Kg(),Jc(381,`th`,13),Mk(382,`Descrição`),Kg()(),Jc(383,`tr`,40)(384,`td`,15)(385,`div`,16)(386,`span`,17),Mk(387,` action`),_u(388,`br`),Kg()()(),Jc(389,`td`,18)(390,`code`,41),Mk(391,`Function`),Kg()(),Jc(392,`td`,21)(393,`em`)(394,`strong`),Mk(395,`(opcional)`),Kg()(),Jc(396,`p`),Mk(397,`Ação executada ao clicar no item.`),Kg(),Jc(398,`blockquote`)(399,`p`),Mk(400,`A função atribuída a esta propriedade receberá o `),Jc(401,`em`),Mk(402,`label`),Kg(),Mk(403,` do item como parâmetro para execução.`),Kg()()()(),Jc(404,`tr`,42)(405,`td`,15)(406,`div`,16)(407,`span`,17),Mk(408,` label`),_u(409,`br`),Kg()()(),Jc(410,`td`,18)(411,`code`,27),Mk(412,`string`),Kg()(),Jc(413,`td`,21)(414,`p`),Mk(415,`Rótulo do item.`),Kg()()(),Jc(416,`tr`,43)(417,`td`,15)(418,`div`,16)(419,`span`,17),Mk(420,` link`),_u(421,`br`),Kg()()(),Jc(422,`td`,18)(423,`code`,27),Mk(424,`string`),Kg()(),Jc(425,`td`,21)(426,`em`)(427,`strong`),Mk(428,`(opcional)`),Kg()(),Jc(429,`p`),Mk(430,`Url do item.`),Kg(),Jc(431,`blockquote`)(432,`p`),Mk(433,`Caso o item também contenha uma `),Jc(434,`em`),Mk(435,`action`),Kg(),Mk(436,` definida, a preferência de execução será do `),Jc(437,`em`),Mk(438,`link`),Kg(),Mk(439,`.`),Kg()(),Jc(440,`blockquote`)(441,`p`),Mk(442,`Para o correto funcionamento, \xE9 necess\xE1rio que haja uma rota referenciando seu valor.
`),Jc(443,`strong`)(444,`a`,44),Mk(445,`Veja um exemplo de como criar rotas aqui`),Kg()(),Mk(446,`.`),Kg()(),Jc(447,`blockquote`)(448,`p`),Mk(449,`Esta propriedade é necessária para que a propriedade `),Jc(450,`code`),Mk(451,`p-favorite-service`),Kg(),Mk(452,` consiga favoritar ou desfavoritar.`),Kg()()()()(),Jc(453,`h4`,45)(454,`code`,5),Mk(455,`PoBreadcrumb`),Kg()(),Jc(456,`div`,2)(457,`p`),Mk(458,`Interface que define o `),Jc(459,`code`),Mk(460,`po-breadcrumb`),Kg(),Mk(461,`.`),Kg()(),Jc(462,`h4`,10),Mk(463,`Propriedades`),Kg(),Jc(464,`table`,11)(465,`tr`,12)(466,`th`,13),Mk(467,`Nome`),Kg(),Jc(468,`th`,13),Mk(469,`Tipo`),Kg(),Jc(470,`th`,13),Mk(471,`Descrição`),Kg()(),Jc(472,`tr`,46)(473,`td`,15)(474,`div`,16)(475,`span`,17),Mk(476,` favorite`),_u(477,`br`),Kg()()(),Jc(478,`td`,18)(479,`code`,27),Mk(480,`string`),Kg()(),Jc(481,`td`,21)(482,`em`)(483,`strong`),Mk(484,`(opcional)`),Kg()(),Jc(485,`p`),Mk(486,`Permite definir uma URL para favoritar ou desfavoritar.`),Kg(),Jc(487,`blockquote`)(488,`p`),Mk(489,`Para maiores informações verificar a propriedade `),Jc(490,`code`),Mk(491,`p-favorite-service`),Kg(),Mk(492,` do componente `),Jc(493,`code`),Mk(494,`po-breadcrumb`),Kg(),Mk(495,`.`),Kg()()()(),Jc(496,`tr`,47)(497,`td`,15)(498,`div`,16)(499,`span`,17),Mk(500,` items`),_u(501,`br`),Kg()()(),Jc(502,`td`,18)(503,`code`,48),Mk(504,`Array<PoBreadcrumbItem>`),Kg()(),Jc(505,`td`,21)(506,`p`),Mk(507,`Lista de itens do `),Jc(508,`em`),Mk(509,`breadcrumb`),Kg(),Mk(510,`.`),Kg(),Jc(511,`p`)(512,`strong`),Mk(513,`Exemplo:`),Kg()(),Jc(514,`pre`)(515,`code`),Mk(516,`{ label: 'Po Portal', link: 'portal' }
`),Kg()()()(),Jc(517,`tr`,49)(518,`td`,15)(519,`div`,16)(520,`span`,17),Mk(521,` params`),_u(522,`br`),Kg()()(),Jc(523,`td`,18)(524,`code`,50),Mk(525,`object`),Kg()(),Jc(526,`td`,21)(527,`em`)(528,`strong`),Mk(529,`(opcional)`),Kg()(),Jc(530,`p`),Mk(531,`Objeto que possibilita o envio de parâmetros adicionais à requisição.`),Kg()()()(),Jc(532,`h4`,51)(533,`code`,5),Mk(534,`PoPageEditLiterals`),Kg()(),Jc(535,`div`,2)(536,`p`),Mk(537,`Interface para definição das literais usadas no `),Jc(538,`code`),Mk(539,`po-page-edit`),Kg(),Mk(540,`.`),Kg()(),Jc(541,`h4`,10),Mk(542,`Propriedades`),Kg(),Jc(543,`table`,11)(544,`tr`,12)(545,`th`,13),Mk(546,`Nome`),Kg(),Jc(547,`th`,13),Mk(548,`Tipo`),Kg(),Jc(549,`th`,13),Mk(550,`Descrição`),Kg()(),Jc(551,`tr`,52)(552,`td`,15)(553,`div`,16)(554,`span`,17),Mk(555,` cancel`),_u(556,`br`),Kg()()(),Jc(557,`td`,18)(558,`code`,27),Mk(559,`string`),Kg()(),Jc(560,`td`,21)(561,`em`)(562,`strong`),Mk(563,`(opcional)`),Kg()(),Jc(564,`p`),Mk(565,`Label da ação `),Jc(566,`code`),Mk(567,`cancel`),Kg(),Mk(568,`.`),Kg()()(),Jc(569,`tr`,53)(570,`td`,15)(571,`div`,16)(572,`span`,17),Mk(573,` save`),_u(574,`br`),Kg()()(),Jc(575,`td`,18)(576,`code`,27),Mk(577,`string`),Kg()(),Jc(578,`td`,21)(579,`em`)(580,`strong`),Mk(581,`(opcional)`),Kg()(),Jc(582,`p`),Mk(583,`Label da ação `),Jc(584,`code`),Mk(585,`save`),Kg(),Mk(586,`.`),Kg()()(),Jc(587,`tr`,54)(588,`td`,15)(589,`div`,16)(590,`span`,17),Mk(591,` saveNew`),_u(592,`br`),Kg()()(),Jc(593,`td`,18)(594,`code`,27),Mk(595,`string`),Kg()(),Jc(596,`td`,21)(597,`em`)(598,`strong`),Mk(599,`(opcional)`),Kg()(),Jc(600,`p`),Mk(601,`Label da ação `),Jc(602,`code`),Mk(603,`saveNew`),Kg(),Mk(604,`.`),Kg()()()()())},dependencies:[P],encapsulation:2,changeDetection:1})}return o})();function xe(o,De){if(o&1&&(Jc(0,`div`,1),_u(1,`sample-po-page-edit-basic-view`)(2,`sample-po-page-edit-labs-view`)(3,`sample-po-page-edit-user-view`),Kg()),o&2){let p=tk();Ab(`hidden`,p.activeTab!==`web`)}}var Me=[{path:``,component:(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;title=`Page Edit`;actions=[];toWeb={label:`Ver exemplos`,icon:`an an-browsers`,action:()=>this.changeTab(`web`)};toDoc={label:`Ver documentação`,icon:`an an-file-text`,action:()=>this.changeTab(`doc`)};back={label:`Voltar`,icon:`an an-arrow-left`,action:this.goBack.bind(this)};constructor(p,r){this.route=p,this.router=r}goBack(){this.router.navigate([`documentation`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(p=>{let r=p.view;this.hidePoWebSample=this.samplesLength===0,this.activeTab=this.hidePoWebSample?`doc`:r||`web`,this.title=`Page Edit · `+(this.activeTab===`web`?`Exemplos`:`Documentação`),this.actions=this.hidePoWebSample?[this.back]:[this.activeTab===`web`?this.toDoc:this.toWeb,this.back]})}changeTab(p){this.router.navigate([],{queryParams:{view:p},queryParamsHandling:`merge`})}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(r){return new(r||o)(I(ar),I(An))};static ɵcmp=Jn({type:o,selectors:[[`ng-component`]],standalone:!1,decls:4,vars:4,consts:[[`data-tour`,`component-page`,3,`p-title`,`p-actions`],[`data-tour-mode`,`web`,3,`hidden`],[`data-tour-mode`,`doc`,3,`hidden`]],template:function(r,n){r&1&&(Jc(0,`po-page-default`,0),LO(1,xe,4,1,`div`,1),Jc(2,`div`,2),_u(3,`sample-po-page-edit-doc`),Kg()()),r&2&&(Ab(`p-title`,n.title)(`p-actions`,n.actions),wg(),jO(n.hidePoWebSample?-1:1),wg(),Ab(`hidden`,n.activeTab!==`doc`))},dependencies:[Mze,me,se,ue,ge],encapsulation:2,changeDetection:1})}return o})()}];var Ee=(()=>{class o{static ɵfac=function(r){return new(r||o)};static ɵmod=ge$1({type:o});static ɵinj=de$1({imports:[GV.forChild(Me),GV]})}return o})();var mt=(()=>{class o{static ɵfac=function(r){return new(r||o)};static ɵmod=ge$1({type:o});static ɵinj=de$1({imports:[M,Ee]})}return o})();export{mt as DocPoPageEditModule};