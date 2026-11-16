import{m as P,p as M}from"./main-5ZHUK4IE.js";import{Ar as I,At as Zte,G as Nf,Ii as WL,Ir as Kb,Lr as Kg,Oi as VO,Pi as W0,Pn as tre,Pr as Jn,Pt as are,Qa as tm,Ti as U_,Ui as YO,Va as p,W as Mze,Wi as Yb,Wr as MZ,Zi as ar,ar as An,bi as TZ,bn as oi,ci as QP,cr as B_,da as gk,gi as Rb,go as z0,io as vu,j as I4,ji as Vk,li as Qc,ln as joe,n as $P,na as de$1,oo as wg,ro as vt,rr as AZ,rt as Ru,sa as ek,si as QL,sn as j4,ua as ge,va as ik,vi as Sk,wr as GV,xi as Tk,xr as FO}from"./chunk-DtUf9FxZ.js";var ae=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-loading-overlay-basic`]],standalone:!1,decls:2,vars:0,consts:[[1,`sample-container`]],template:function(a,i){a&1&&(Qc(0,`div`,0),vu(1,`po-loading-overlay`),Kg())},dependencies:[$P],styles:[`.sample-container[_ngcontent-%COMP%]{position:relative;height:300px}`],changeDetection:1})}return o})();var he=o=>({"docs-sample-code-tabs":o});var re=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-loading-overlay-basic-view`]],standalone:!1,decls:30,vars:6,consts:[[`id`,`sample-po-loading-overlay-basic`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[`p-label`,`CSS`],[`appCodeHighlight`,``,1,`css`],[1,`docs-sample-container`]],template:function(a,i){a&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Loading Overlay Basic`),Kg(),Qc(4,`a`,2),vt(`click`,function(){return i.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-loading-overlay-basic/sample-po-loading-overlay-basic.component.html`),Kg(),Qc(13,`pre`,7),Sk(14,`<div class="sample-container">
  <po-loading-overlay></po-loading-overlay>
</div>
`),Kg()()(),Qc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Sk(18,`sample-po-loading-overlay-basic/sample-po-loading-overlay-basic.component.ts`),Kg(),Qc(19,`pre`,9),Sk(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-loading-overlay-basic',
  templateUrl: './sample-po-loading-overlay-basic.component.html',
  styleUrls: ['./sample-po-loading-overlay-basic.component.css'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoLoadingOverlayBasicComponent {}
`),Kg()()(),Qc(21,`po-tab`,10)(22,`div`)(23,`label`,6),Sk(24,`sample-po-loading-overlay-basic/sample-po-loading-overlay-basic.component.css`),Kg(),Qc(25,`pre`,11),Sk(26,`.sample-container {
  position: relative;
  height: 300px;
}
`),Kg()()()()(),Qc(27,`div`,12),vu(28,`sample-po-loading-overlay-basic`),Kg(),vu(29,`hr`)),a&2&&(wg(5),gk(`po-icon `+i.sampleCodeButtonIcon),wg(),tm(` `,i.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,he,i.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,ae],encapsulation:2,changeDetection:1})}return o})();var pe=(()=>{class o{properties=[];text;size;sizesOptions=[{label:`xs`,value:`xs`},{label:`sm`,value:`sm`},{label:`md`,value:`md`},{label:`lg`,value:`lg`}];propertiesOptions=[{value:`screenLock`,label:`Screen Lock`}];ngOnInit(){this.restore()}onChangeCheckbox(l){l.includes(`screenLock`)&&setTimeout(()=>{this.properties=[]},2e3)}restore(){this.size=`lg`,this.text=null}static ɵfac=function(a){return new(a||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-loading-overlay-labs`]],standalone:!1,decls:13,vars:8,consts:[[`formProperties`,`ngForm`],[1,`sample-container`],[3,`p-screen-lock`,`p-text`,`p-size`],[1,`po-row`],[`name`,`text`,`p-label`,`Text`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`properties`,`p-label`,`Properties`,1,`po-md-6`,3,`ngModelChange`,`p-change`,`ngModel`,`p-options`],[`name`,`size`,`p-label`,`Size`,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[1,`po-md-3`],[`p-label`,`Sample Restore`,3,`p-click`]],template:function(a,i){if(a&1){let c=YO();Qc(0,`div`,1),vu(1,`po-loading-overlay`,2),Kg(),vu(2,`po-divider`),Qc(3,`form`,null,0)(5,`div`,3)(6,`po-input`,4),z0(),Kb(`ngModelChange`,function(p){return B_(c),Tk(i.text,p)||(i.text=p),U_(p)}),Kg(),Qc(7,`po-checkbox-group`,5),z0(),Kb(`ngModelChange`,function(p){return B_(c),Tk(i.properties,p)||(i.properties=p),U_(p)}),vt(`p-change`,function(p){return i.onChangeCheckbox(p)}),Kg()(),Qc(8,`div`,3)(9,`po-radio-group`,6),z0(),Kb(`ngModelChange`,function(p){return B_(c),Tk(i.size,p)||(i.size=p),U_(p)}),Kg()(),Qc(10,`div`,3)(11,`div`,7)(12,`po-button`,8),vt(`p-click`,function(){return i.restore()}),Kg()()()()}a&2&&(wg(),Rb(`p-screen-lock`,i.properties?.includes(`screenLock`))(`p-text`,i.text)(`p-size`,i.size),wg(5),Yb(`ngModel`,i.text),W0(),wg(),Yb(`ngModel`,i.properties),Rb(`p-options`,i.propertiesOptions),W0(),wg(2),Yb(`ngModel`,i.size),Rb(`p-options`,i.sizesOptions),W0())},dependencies:[AZ,MZ,TZ,QL,WL,oi,Nf,I4,j4,Zte,$P],styles:[`.sample-container[_ngcontent-%COMP%]{position:relative;height:300px}`],changeDetection:1})}return o})();var ye=o=>({"docs-sample-code-tabs":o});var se=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-loading-overlay-labs-view`]],standalone:!1,decls:30,vars:6,consts:[[`id`,`sample-po-loading-overlay-labs`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[`p-label`,`CSS`],[`appCodeHighlight`,``,1,`css`],[1,`docs-sample-container`]],template:function(a,i){a&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Loading Overlay Labs`),Kg(),Qc(4,`a`,2),vt(`click`,function(){return i.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-loading-overlay-labs/sample-po-loading-overlay-labs.component.html`),Kg(),Qc(13,`pre`,7),Sk(14,`<div class="sample-container">
  <po-loading-overlay [p-screen-lock]="properties?.includes('screenLock')" [p-text]="text" [p-size]="size">
  </po-loading-overlay>
</div>

<po-divider />

<form #formProperties="ngForm">
  <div class="po-row">
    <po-input class="po-md-6" name="text" [(ngModel)]="text" p-label="Text"> </po-input>

    <po-checkbox-group
      class="po-md-6"
      name="properties"
      [(ngModel)]="properties"
      p-label="Properties"
      [p-options]="propertiesOptions"
      (p-change)="onChangeCheckbox($event)"
    >
    </po-checkbox-group>
  </div>
  <div class="po-row">
    <po-radio-group class="po-md-6" name="size" [(ngModel)]="size" p-label="Size" [p-options]="sizesOptions">
    </po-radio-group>
  </div>

  <div class="po-row">
    <div class="po-md-3">
      <po-button p-label="Sample Restore" (p-click)="restore()"> </po-button>
    </div>
  </div>
</form>
`),Kg()()(),Qc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Sk(18,`sample-po-loading-overlay-labs/sample-po-loading-overlay-labs.component.ts`),Kg(),Qc(19,`pre`,9),Sk(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { PoCheckboxGroupOption, PoRadioGroupOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-loading-overlay-labs',
  templateUrl: './sample-po-loading-overlay-labs.component.html',
  styleUrls: ['./sample-po-loading-overlay-labs.component.css'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoLoadingOverlayLabsComponent implements OnInit {
  properties: Array<string> = [];
  text: string;
  size: string;
  sizesOptions: Array<PoRadioGroupOption> = [
    { label: 'xs', value: 'xs' },
    { label: 'sm', value: 'sm' },
    { label: 'md', value: 'md' },
    { label: 'lg', value: 'lg' }
  ];

  readonly propertiesOptions: Array<PoCheckboxGroupOption> = [{ value: 'screenLock', label: 'Screen Lock' }];

  ngOnInit() {
    this.restore();
  }

  onChangeCheckbox(checkbox: Array<string>) {
    if (checkbox.includes('screenLock')) {
      setTimeout(() => {
        this.properties = [];
      }, 2000);
    }
  }

  restore() {
    this.size = 'lg';
    this.text = null;
  }
}
`),Kg()()(),Qc(21,`po-tab`,10)(22,`div`)(23,`label`,6),Sk(24,`sample-po-loading-overlay-labs/sample-po-loading-overlay-labs.component.css`),Kg(),Qc(25,`pre`,11),Sk(26,`.sample-container {
  position: relative;
  height: 300px;
}
`),Kg()()()()(),Qc(27,`div`,12),vu(28,`sample-po-loading-overlay-labs`),Kg(),vu(29,`hr`)),a&2&&(wg(5),gk(`po-icon `+i.sampleCodeButtonIcon),wg(),tm(` `,i.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,ye,i.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,pe],encapsulation:2,changeDetection:1})}return o})();var me=(()=>{class o{poNotification=p(Ru);environment={urlServer:``,urlDB:``,userDB:``,passwordDB:``};isHideLoading=!0;connectionTest(){let l=`Connection ok`;this.isHideLoading=!1,setTimeout(()=>{this.isHideLoading=!0,this.poNotification.success(l)},450)}static ɵfac=function(a){return new(a||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-loading-overlay-connection-test`]],standalone:!1,decls:11,vars:6,consts:[[`formConfig`,`ngForm`],[3,`hidden`],[1,`po-row`],[`name`,`urlServer`,`p-clean`,``,`p-label`,`URL Server`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`urlDB`,`p-clean`,``,`p-label`,`URL Database`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`userDB`,`p-clean`,``,`p-label`,`User Database`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`passwordDB`,`p-clean`,``,`p-label`,`Password Database`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Connect`,1,`po-md-4`,3,`p-click`,`p-disabled`]],template:function(a,i){if(a&1){let c=YO();Qc(0,`form`,null,0)(2,`div`),vu(3,`po-loading-overlay`,1),Kg(),Qc(4,`div`,2)(5,`po-input`,3),z0(),Kb(`ngModelChange`,function(p){return B_(c),Tk(i.environment.urlServer,p)||(i.environment.urlServer=p),U_(p)}),Kg(),Qc(6,`po-input`,4),z0(),Kb(`ngModelChange`,function(p){return B_(c),Tk(i.environment.urlDB,p)||(i.environment.urlDB=p),U_(p)}),Kg(),Qc(7,`po-input`,5),z0(),Kb(`ngModelChange`,function(p){return B_(c),Tk(i.environment.userDB,p)||(i.environment.userDB=p),U_(p)}),Kg(),Qc(8,`po-password`,6),z0(),Kb(`ngModelChange`,function(p){return B_(c),Tk(i.environment.passwordDB,p)||(i.environment.passwordDB=p),U_(p)}),Kg()(),Qc(9,`div`,2)(10,`po-button`,7),vt(`p-click`,function(){B_(c);let p=ik(1);return i.connectionTest(),U_(p.reset())}),Kg()()()}if(a&2){let c=ik(1);wg(3),Rb(`hidden`,i.isHideLoading),wg(2),Yb(`ngModel`,i.environment.urlServer),W0(),wg(),Yb(`ngModel`,i.environment.urlDB),W0(),wg(),Yb(`ngModel`,i.environment.userDB),W0(),wg(),Yb(`ngModel`,i.environment.passwordDB),W0(),wg(2),Rb(`p-disabled`,c.invalid)}},dependencies:[AZ,MZ,TZ,QL,WL,oi,j4,joe,$P],encapsulation:2,changeDetection:1})}return o})();var xe=o=>({"docs-sample-code-tabs":o});var de=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-loading-overlay-connection-test-view`]],standalone:!1,decls:24,vars:6,consts:[[`id`,`sample-po-loading-overlay-connection-test`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,i){a&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Loading Overlay - Connection Test`),Kg(),Qc(4,`a`,2),vt(`click`,function(){return i.toggleSampleCodeTabs()}),vu(5,`span`),Sk(6),Kg()(),Qc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-loading-overlay-connection-test/sample-po-loading-overlay-connection-test.component.html`),Kg(),Qc(13,`pre`,7),Sk(14,`<form #formConfig="ngForm">
  <div>
    <po-loading-overlay [hidden]="isHideLoading"></po-loading-overlay>
  </div>

  <div class="po-row">
    <po-input
      class="po-md-6"
      name="urlServer"
      [(ngModel)]="environment.urlServer"
      p-clean
      p-label="URL Server"
      p-required
    >
    </po-input>

    <po-input class="po-md-6" name="urlDB" [(ngModel)]="environment.urlDB" p-clean p-label="URL Database" p-required>
    </po-input>

    <po-input class="po-md-6" name="userDB" [(ngModel)]="environment.userDB" p-clean p-label="User Database" p-required>
    </po-input>

    <po-password
      class="po-md-6"
      name="passwordDB"
      [(ngModel)]="environment.passwordDB"
      p-clean
      p-label="Password Database"
      p-required
    >
    </po-password>
  </div>

  <div class="po-row">
    <po-button
      class="po-md-4"
      p-label="Connect"
      [p-disabled]="formConfig.invalid"
      (p-click)="connectionTest(); formConfig.reset()"
    >
    </po-button>
  </div>
</form>
`),Kg()()(),Qc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Sk(18,`sample-po-loading-overlay-connection-test/sample-po-loading-overlay-connection-test.component.ts`),Kg(),Qc(19,`pre`,9),Sk(20,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';

import { PoNotificationService } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-loading-overlay-connection-test',
  templateUrl: 'sample-po-loading-overlay-connection-test.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoLoadingOverlayConnectionTestComponent {
  private poNotification = inject(PoNotificationService);

  environment = {
    urlServer: '',
    urlDB: '',
    userDB: '',
    passwordDB: ''
  };

  isHideLoading = true;

  connectionTest() {
    const message = 'Connection ok';

    this.isHideLoading = false;

    setTimeout(() => {
      this.isHideLoading = true;
      this.poNotification.success(message);
    }, 450);
  }
}
`),Kg()()()()(),Qc(21,`div`,10),vu(22,`sample-po-loading-overlay-connection-test`),Kg(),vu(23,`hr`)),a&2&&(wg(5),gk(`po-icon `+i.sampleCodeButtonIcon),wg(),tm(` `,i.sampleCodeButtonLabel),wg(),Rb(`ngClass`,Vk(4,xe,i.hideSampleCodeTabs)))},dependencies:[QP,P,tre,are,me],encapsulation:2,changeDetection:1})}return o})();var ce=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-loading-overlay-doc`]],standalone:!1,decls:255,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[`id`,`class-po-loading-overlay-component`,1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[`id`,`prop-p-screen-lock`,1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`id`,`prop-p-size`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`string`],[`id`,`prop-p-text`,1,`docs-api-properties-row`],[`href`,`/documentation/po-i18n`]],template:function(a,i){a&1&&(Qc(0,`div`,0)(1,`p`,1)(2,`code`),Sk(3,`import { PoLoadingModule } from '@po-ui/ng-components';`),Kg()(),Qc(4,`div`,2)(5,`p`),Sk(6,`Módulo do componente po-loading-overlay.`),Kg()(),Qc(7,`h3`,3),Sk(8,`Componente`),Kg(),Qc(9,`h4`,4)(10,`code`,5),Sk(11,`PoLoadingOverlayComponent`),Kg()(),Qc(12,`div`,2)(13,`p`),Sk(14,`Este componente mostra ao usuário uma imagem de `),Qc(15,`em`),Sk(16,`loading`),Kg(),Sk(17,` e bloqueia a p\xE1gina inteira ou o container escolhido,
enquanto aguarda a resposta de alguma requisi\xE7\xE3o.`),Kg(),Qc(18,`h4`),Sk(19,`Tokens customizáveis`),Kg(),Qc(20,`p`),Sk(21,`É possível alterar o estilo do componente usando os seguintes tokens (CSS): `),vu(22,`br`),Sk(23,`
Obs: S\xF3 \xE9 poss\xEDvel realizar altera\xE7\xF5es ao adicionar a classe `),Qc(24,`code`),Sk(25,`.po-loading`),Kg()(),Qc(26,`blockquote`)(27,`p`),Sk(28,`Para maiores informações, acesse o guia `),Qc(29,`a`,6),Sk(30,`Personalizando o Tema Padrão com Tokens CSS`),Kg(),Sk(31,`.`),Kg()(),Qc(32,`table`)(33,`thead`)(34,`tr`)(35,`th`),Sk(36,`Propriedade`),Kg(),Qc(37,`th`),Sk(38,`Descrição`),Kg(),Qc(39,`th`),Sk(40,`Valor Padrão`),Kg()()(),Qc(41,`tbody`)(42,`tr`)(43,`td`)(44,`strong`),Sk(45,`Default Values`),Kg()(),vu(46,`td`)(47,`td`),Kg(),Qc(48,`tr`)(49,`td`)(50,`code`),Sk(51,`--font-family`),Kg()(),Qc(52,`td`),Sk(53,`Família tipográfica usada`),Kg(),Qc(54,`td`)(55,`code`),Sk(56,`var(--font-family-theme)`),Kg()()(),Qc(57,`tr`)(58,`td`)(59,`code`),Sk(60,`--font-weight`),Kg()(),Qc(61,`td`),Sk(62,`Peso da fonte`),Kg(),Qc(63,`td`)(64,`code`),Sk(65,`var(--font-weight-normal)`),Kg()()(),Qc(66,`tr`)(67,`td`)(68,`code`),Sk(69,`--text-color`),Kg()(),Qc(70,`td`),Sk(71,`Cor do texto`),Kg(),Qc(72,`td`)(73,`code`),Sk(74,`var(--color-neutral-dark-70)`),Kg()()(),Qc(75,`tr`)(76,`td`)(77,`code`),Sk(78,`--border-radius`),Kg()(),Qc(79,`td`),Sk(80,`Contém o valor do raio dos cantos do elemento\xA0`),Kg(),Qc(81,`td`)(82,`code`),Sk(83,`var(--border-radius-md)`),Kg()()(),Qc(84,`tr`)(85,`td`)(86,`code`),Sk(87,`--border-width`),Kg()(),Qc(88,`td`),Sk(89,`Contém o valor da largura dos cantos do elemento\xA0`),Kg(),Qc(90,`td`)(91,`code`),Sk(92,`var(--border-width-sm)`),Kg()()(),Qc(93,`tr`)(94,`td`)(95,`code`),Sk(96,`--border-color`),Kg()(),Qc(97,`td`),Sk(98,`Cor da borda`),Kg(),Qc(99,`td`)(100,`code`),Sk(101,`var(--color-neutral-light-20)`),Kg()()(),Qc(102,`tr`)(103,`td`)(104,`code`),Sk(105,`--background`),Kg()(),Qc(106,`td`),Sk(107,`Cor de background`),Kg(),Qc(108,`td`)(109,`code`),Sk(110,`var(--color-neutral-light-00)`),Kg()()(),Qc(111,`tr`)(112,`td`)(113,`code`),Sk(114,`--shadow`),Kg()(),Qc(115,`td`),Sk(116,`Contém o valor da sombra do elemento`),Kg(),Qc(117,`td`)(118,`code`),Sk(119,`var(--shadow-md)`),Kg()()(),Qc(120,`tr`)(121,`td`)(122,`strong`),Sk(123,`po-loading-icon`),Kg()(),vu(124,`td`)(125,`td`),Kg(),Qc(126,`tr`)(127,`td`)(128,`code`),Sk(129,`--color`),Kg()(),Qc(130,`td`),Sk(131,`Cor principal do spinner`),Kg(),Qc(132,`td`)(133,`code`),Sk(134,`var(--color-action-default)`),Kg()()()()()(),Qc(135,`div`,7)(136,`h4`,8),Sk(137,`Seletor`),Kg(),Qc(138,`pre`,9),Sk(139,`<po-loading-overlay
    p-screen-lock="boolean"
    p-size="string"
    p-text="string" >
</po-loading-overlay>
`),Kg()(),Qc(140,`h4`,10),Sk(141,`Propriedades`),Kg(),Qc(142,`table`,11)(143,`tr`,12)(144,`th`,13),Sk(145,`Nome`),Kg(),Qc(146,`th`,13),Sk(147,`Tipo`),Kg(),Qc(148,`th`,13),Sk(149,`Padrão`),Kg(),Qc(150,`th`,13),Sk(151,`Descrição`),Kg()(),Qc(152,`tr`,14)(153,`td`,15)(154,`div`,16)(155,`span`,17),Sk(156,` p-screen-lock`),vu(157,`br`),Kg()()(),Qc(158,`td`,18)(159,`code`,19),Sk(160,`boolean`),Kg()(),Qc(161,`td`,20)(162,`p`)(163,`code`),Sk(164,`false`),Kg()()(),Qc(165,`td`,21)(166,`em`)(167,`strong`),Sk(168,`(opcional)`),Kg()(),Qc(169,`p`),Sk(170,`Define se o `),Qc(171,`em`),Sk(172,`overlay`),Kg(),Sk(173,` será aplicado a um `),Qc(174,`em`),Sk(175,`container`),Kg(),Sk(176,` ou à página inteira.`),Kg(),Qc(177,`p`),Sk(178,`Para utilizar o componente como um `),Qc(179,`em`),Sk(180,`container`),Kg(),Sk(181,`, o elemento pai deverá receber uma posição relativa, por exemplo:`),Kg(),Qc(182,`pre`)(183,`code`),Sk(184,`<div style="position: relative">

 <po-chart [p-series]="[{ value: 10, category: 'Example' }]">
 </po-chart>

 <po-loading-overlay>
 </po-loading-overlay>
</div>
`),Kg()()()(),Qc(185,`tr`,22)(186,`td`,15)(187,`div`,16)(188,`span`,17),Sk(189,` p-size`),vu(190,`br`),Kg()()(),Qc(191,`td`,18)(192,`code`,23),Sk(193,`string`),Kg()(),Qc(194,`td`,20)(195,`p`)(196,`code`),Sk(197,`lg`),Kg()()(),Qc(198,`td`,21)(199,`em`)(200,`strong`),Sk(201,`(opcional)`),Kg()(),Qc(202,`p`),Sk(203,`Define o tamanho do componente com base no tamanho do ícone de `),Qc(204,`em`),Sk(205,`loading`),Kg(),Sk(206,`.`),Kg(),Qc(207,`p`),Sk(208,`Tamanhos disponíveis para o `),Qc(209,`em`),Sk(210,`loading`),Kg(),Sk(211,`:`),Kg(),Qc(212,`ul`)(213,`li`)(214,`code`),Sk(215,`xs`),Kg(),Sk(216,`: 1rem`),Kg(),Qc(217,`li`)(218,`code`),Sk(219,`sm`),Kg(),Sk(220,`: 1.5rem`),Kg(),Qc(221,`li`)(222,`code`),Sk(223,`md`),Kg(),Sk(224,`: 3rem`),Kg(),Qc(225,`li`)(226,`code`),Sk(227,`lg`),Kg(),Sk(228,`: 5rem (valor padrão)`),Kg()()()(),Qc(229,`tr`,24)(230,`td`,15)(231,`div`,16)(232,`span`,17),Sk(233,` p-text`),vu(234,`br`),Kg()()(),Qc(235,`td`,18)(236,`code`,23),Sk(237,`string`),Kg()(),Qc(238,`td`,20)(239,`p`)(240,`code`),Sk(241,`Carregando`),Kg()()(),Qc(242,`td`,21)(243,`em`)(244,`strong`),Sk(245,`(opcional)`),Kg()(),Qc(246,`p`),Sk(247,`Texto a ser exibido no componente.`),Kg(),Qc(248,`blockquote`)(249,`p`),Sk(250,`O valor padrão será traduzido de acordo com o idioma configurado no `),Qc(251,`a`,25)(252,`strong`),Sk(253,`PoI18n`),Kg()(),Sk(254,` ou navegador.`),Kg()()()()()())},dependencies:[P],encapsulation:2,changeDetection:1})}return o})();function Pe(o,Te){if(o&1){let l=YO();Qc(0,`po-tab`,4),vt(`p-click`,function(){B_(l);let i=ek();return U_(i.changeTab(`web`))}),vu(1,`sample-po-loading-overlay-basic-view`)(2,`sample-po-loading-overlay-labs-view`)(3,`sample-po-loading-overlay-connection-test-view`),Kg()}if(o&2){let l=ek();Rb(`p-active`,l.activeTab===`web`)}}var _e=[{path:``,component:(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(l,a){this.route=l,this.router=a}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(l=>{let a=l.view;this.hidePoWebSample=this.samplesLength===0,this.activeTab=this.hidePoWebSample?`doc`:a||`web`})}changeTab(l){this.router.navigate([],{queryParams:{view:l},queryParamsHandling:`merge`}),this.activeTab=l}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(a){return new(a||o)(I(ar),I(An))};static ɵcmp=Jn({type:o,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:3,consts:[[`p-title`,`Loading Overlay`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Exemplos`,3,`p-active`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-active`]],template:function(a,i){a&1&&(Qc(0,`po-page-default`,0)(1,`po-tabs`,1),FO(2,Pe,4,1,`po-tab`,2),Qc(3,`po-tab`,3),vt(`p-click`,function(){return i.changeTab(`doc`)}),vu(4,`sample-po-loading-overlay-doc`),Kg()()()),a&2&&(Rb(`p-actions`,i.actions),wg(2),VO(i.hidePoWebSample?-1:2),wg(),Rb(`p-active`,i.activeTab===`doc`))},dependencies:[Mze,tre,are,re,se,de,ce],encapsulation:2,changeDetection:1})}return o})()}];var ue=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵmod=ge({type:o});static ɵinj=de$1({imports:[GV.forChild(_e),GV]})}return o})();var nt=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵmod=ge({type:o});static ɵinj=de$1({imports:[M,ue]})}return o})();export{nt as DocPoLoadingOverlayModule};