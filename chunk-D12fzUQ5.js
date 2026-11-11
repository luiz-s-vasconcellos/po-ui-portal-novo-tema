import{n as P,t as M}from"./main-G4GMLTOQ.js";import{Ei as WV,Fr as Jc,H as Mze,Hi as ar,Ia as sk,Ii as ZO,Ji as eF,Li as Zb,Mi as Y0,Mn as tre,Mt as are,Nr as Ig,Oa as qL,Or as H_,Ot as Zte,Pr as JL,Ri as Zg,Rr as Jn,Ti as W0,U as Nf,Vi as _u,Vr as Kb,Yr as NZ,Zn as $_,an as j4,cr as Bk,ea as ge,er as Ab,fi as RZ,gi as Tk,hi as TZ,ir as BO,j as I4,jr as I,n as $P,no as yk,nr as An,qa as vt,qi as de$1,sn as joe,tr as Ak,tt as Ru,va as nk,vn as oi,wa as p,xi as VO,ya as nm}from"./chunk-BJubg121.js";var ae=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-loading-overlay-basic`]],standalone:!1,decls:2,vars:0,consts:[[1,`sample-container`]],template:function(a,i){a&1&&(Jc(0,`div`,0),_u(1,`po-loading-overlay`),Zg())},dependencies:[$P],styles:[`.sample-container[_ngcontent-%COMP%]{position:relative;height:300px}`],changeDetection:1})}return o})();var he=o=>({"docs-sample-code-tabs":o});var re=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-loading-overlay-basic-view`]],standalone:!1,decls:30,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[`p-label`,`CSS`],[`appCodeHighlight`,``,1,`css`],[1,`docs-sample-container`]],template:function(a,i){a&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Loading Overlay Basic`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return i.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-loading-overlay-basic/sample-po-loading-overlay-basic.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<div class="sample-container">
  <po-loading-overlay></po-loading-overlay>
</div>
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-loading-overlay-basic/sample-po-loading-overlay-basic.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-loading-overlay-basic',
  templateUrl: './sample-po-loading-overlay-basic.component.html',
  styleUrls: ['./sample-po-loading-overlay-basic.component.css'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoLoadingOverlayBasicComponent {}
`),Zg()()(),Jc(21,`po-tab`,10)(22,`div`)(23,`label`,6),Tk(24,`sample-po-loading-overlay-basic/sample-po-loading-overlay-basic.component.css`),Zg(),Jc(25,`pre`,11),Tk(26,`.sample-container {
  position: relative;
  height: 300px;
}
`),Zg()()()()(),Jc(27,`div`,12),_u(28,`sample-po-loading-overlay-basic`),Zg(),_u(29,`hr`)),a&2&&(Ig(5),yk(`po-icon `+i.sampleCodeButtonIcon),Ig(),nm(` `,i.sampleCodeButtonLabel),Ig(),Ab(`ngClass`,Bk(4,he,i.hideSampleCodeTabs)))},dependencies:[eF,P,tre,are,ae],encapsulation:2,changeDetection:1})}return o})();var pe=(()=>{class o{properties=[];text;size;sizesOptions=[{label:`xs`,value:`xs`},{label:`sm`,value:`sm`},{label:`md`,value:`md`},{label:`lg`,value:`lg`}];propertiesOptions=[{value:`screenLock`,label:`Screen Lock`}];ngOnInit(){this.restore()}onChangeCheckbox(l){l.includes(`screenLock`)&&setTimeout(()=>{this.properties=[]},2e3)}restore(){this.size=`lg`,this.text=null}static ɵfac=function(a){return new(a||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-loading-overlay-labs`]],standalone:!1,decls:13,vars:8,consts:[[`formProperties`,`ngForm`],[1,`sample-container`],[3,`p-screen-lock`,`p-text`,`p-size`],[1,`po-row`],[`name`,`text`,`p-label`,`Text`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`properties`,`p-label`,`Properties`,1,`po-md-6`,3,`ngModelChange`,`p-change`,`ngModel`,`p-options`],[`name`,`size`,`p-label`,`Size`,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[1,`po-md-3`],[`p-label`,`Sample Restore`,3,`p-click`]],template:function(a,i){if(a&1){let c=ZO();Jc(0,`div`,1),_u(1,`po-loading-overlay`,2),Zg(),_u(2,`po-divider`),Jc(3,`form`,null,0)(5,`div`,3)(6,`po-input`,4),W0(),Zb(`ngModelChange`,function(p){return H_(c),Ak(i.text,p)||(i.text=p),$_(p)}),Zg(),Jc(7,`po-checkbox-group`,5),W0(),Zb(`ngModelChange`,function(p){return H_(c),Ak(i.properties,p)||(i.properties=p),$_(p)}),vt(`p-change`,function(p){return i.onChangeCheckbox(p)}),Zg()(),Jc(8,`div`,3)(9,`po-radio-group`,6),W0(),Zb(`ngModelChange`,function(p){return H_(c),Ak(i.size,p)||(i.size=p),$_(p)}),Zg()(),Jc(10,`div`,3)(11,`div`,7)(12,`po-button`,8),vt(`p-click`,function(){return i.restore()}),Zg()()()()}a&2&&(Ig(),Ab(`p-screen-lock`,i.properties?.includes(`screenLock`))(`p-text`,i.text)(`p-size`,i.size),Ig(5),Kb(`ngModel`,i.text),Y0(),Ig(),Kb(`ngModel`,i.properties),Ab(`p-options`,i.propertiesOptions),Y0(),Ig(2),Kb(`ngModel`,i.size),Ab(`p-options`,i.sizesOptions),Y0())},dependencies:[NZ,TZ,RZ,JL,qL,oi,Nf,I4,j4,Zte,$P],styles:[`.sample-container[_ngcontent-%COMP%]{position:relative;height:300px}`],changeDetection:1})}return o})();var ye=o=>({"docs-sample-code-tabs":o});var se=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-loading-overlay-labs-view`]],standalone:!1,decls:30,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[`p-label`,`CSS`],[`appCodeHighlight`,``,1,`css`],[1,`docs-sample-container`]],template:function(a,i){a&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Loading Overlay Labs`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return i.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-loading-overlay-labs/sample-po-loading-overlay-labs.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<div class="sample-container">
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
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-loading-overlay-labs/sample-po-loading-overlay-labs.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),Zg()()(),Jc(21,`po-tab`,10)(22,`div`)(23,`label`,6),Tk(24,`sample-po-loading-overlay-labs/sample-po-loading-overlay-labs.component.css`),Zg(),Jc(25,`pre`,11),Tk(26,`.sample-container {
  position: relative;
  height: 300px;
}
`),Zg()()()()(),Jc(27,`div`,12),_u(28,`sample-po-loading-overlay-labs`),Zg(),_u(29,`hr`)),a&2&&(Ig(5),yk(`po-icon `+i.sampleCodeButtonIcon),Ig(),nm(` `,i.sampleCodeButtonLabel),Ig(),Ab(`ngClass`,Bk(4,ye,i.hideSampleCodeTabs)))},dependencies:[eF,P,tre,are,pe],encapsulation:2,changeDetection:1})}return o})();var me=(()=>{class o{poNotification=p(Ru);environment={urlServer:``,urlDB:``,userDB:``,passwordDB:``};isHideLoading=!0;connectionTest(){let l=`Connection ok`;this.isHideLoading=!1,setTimeout(()=>{this.isHideLoading=!0,this.poNotification.success(l)},450)}static ɵfac=function(a){return new(a||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-loading-overlay-connection-test`]],standalone:!1,decls:11,vars:6,consts:[[`formConfig`,`ngForm`],[3,`hidden`],[1,`po-row`],[`name`,`urlServer`,`p-clean`,``,`p-label`,`URL Server`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`urlDB`,`p-clean`,``,`p-label`,`URL Database`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`userDB`,`p-clean`,``,`p-label`,`User Database`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`passwordDB`,`p-clean`,``,`p-label`,`Password Database`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Connect`,1,`po-md-4`,3,`p-click`,`p-disabled`]],template:function(a,i){if(a&1){let c=ZO();Jc(0,`form`,null,0)(2,`div`),_u(3,`po-loading-overlay`,1),Zg(),Jc(4,`div`,2)(5,`po-input`,3),W0(),Zb(`ngModelChange`,function(p){return H_(c),Ak(i.environment.urlServer,p)||(i.environment.urlServer=p),$_(p)}),Zg(),Jc(6,`po-input`,4),W0(),Zb(`ngModelChange`,function(p){return H_(c),Ak(i.environment.urlDB,p)||(i.environment.urlDB=p),$_(p)}),Zg(),Jc(7,`po-input`,5),W0(),Zb(`ngModelChange`,function(p){return H_(c),Ak(i.environment.userDB,p)||(i.environment.userDB=p),$_(p)}),Zg(),Jc(8,`po-password`,6),W0(),Zb(`ngModelChange`,function(p){return H_(c),Ak(i.environment.passwordDB,p)||(i.environment.passwordDB=p),$_(p)}),Zg()(),Jc(9,`div`,2)(10,`po-button`,7),vt(`p-click`,function(){H_(c);let p=sk(1);return i.connectionTest(),$_(p.reset())}),Zg()()()}if(a&2){let c=sk(1);Ig(3),Ab(`hidden`,i.isHideLoading),Ig(2),Kb(`ngModel`,i.environment.urlServer),Y0(),Ig(),Kb(`ngModel`,i.environment.urlDB),Y0(),Ig(),Kb(`ngModel`,i.environment.userDB),Y0(),Ig(),Kb(`ngModel`,i.environment.passwordDB),Y0(),Ig(2),Ab(`p-disabled`,c.invalid)}},dependencies:[NZ,TZ,RZ,JL,qL,oi,j4,joe,$P],encapsulation:2,changeDetection:1})}return o})();var xe=o=>({"docs-sample-code-tabs":o});var de=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-loading-overlay-connection-test-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[1,`docs-sample-container`]],template:function(a,i){a&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Tk(3,`PO Loading Overlay - Connection Test`),Zg(),Jc(4,`a`,2),vt(`click`,function(){return i.toggleSampleCodeTabs()}),_u(5,`span`),Tk(6),Zg()(),Jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),Tk(12,`sample-po-loading-overlay-connection-test/sample-po-loading-overlay-connection-test.component.html`),Zg(),Jc(13,`pre`,7),Tk(14,`<form #formConfig="ngForm">
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
`),Zg()()(),Jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),Tk(18,`sample-po-loading-overlay-connection-test/sample-po-loading-overlay-connection-test.component.ts`),Zg(),Jc(19,`pre`,9),Tk(20,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),Zg()()()()(),Jc(21,`div`,10),_u(22,`sample-po-loading-overlay-connection-test`),Zg(),_u(23,`hr`)),a&2&&(Ig(5),yk(`po-icon `+i.sampleCodeButtonIcon),Ig(),nm(` `,i.sampleCodeButtonLabel),Ig(),Ab(`ngClass`,Bk(4,xe,i.hideSampleCodeTabs)))},dependencies:[eF,P,tre,are,me],encapsulation:2,changeDetection:1})}return o})();var ce=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵcmp=Jn({type:o,selectors:[[`sample-po-loading-overlay-doc`]],standalone:!1,decls:255,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`pan`,``,1,`docs-api-property-type`,`string`],[`href`,`/documentation/po-i18n`]],template:function(a,i){a&1&&(Jc(0,`div`,0)(1,`p`,1)(2,`code`),Tk(3,`import { PoLoadingModule } from '@po-ui/ng-components';`),Zg()(),Jc(4,`div`,2)(5,`p`),Tk(6,`Módulo do componente po-loading-overlay.`),Zg()(),Jc(7,`h3`,3),Tk(8,`Componente`),Zg(),Jc(9,`h4`,4)(10,`code`,5),Tk(11,`PoLoadingOverlayComponent`),Zg()(),Jc(12,`div`,2)(13,`p`),Tk(14,`Este componente mostra ao usuário uma imagem de `),Jc(15,`em`),Tk(16,`loading`),Zg(),Tk(17,` e bloqueia a p\xE1gina inteira ou o container escolhido,
enquanto aguarda a resposta de alguma requisi\xE7\xE3o.`),Zg(),Jc(18,`h4`),Tk(19,`Tokens customizáveis`),Zg(),Jc(20,`p`),Tk(21,`É possível alterar o estilo do componente usando os seguintes tokens (CSS): `),_u(22,`br`),Tk(23,`
Obs: S\xF3 \xE9 poss\xEDvel realizar altera\xE7\xF5es ao adicionar a classe `),Jc(24,`code`),Tk(25,`.po-loading`),Zg()(),Jc(26,`blockquote`)(27,`p`),Tk(28,`Para maiores informações, acesse o guia `),Jc(29,`a`,6),Tk(30,`Personalizando o Tema Padrão com Tokens CSS`),Zg(),Tk(31,`.`),Zg()(),Jc(32,`table`)(33,`thead`)(34,`tr`)(35,`th`),Tk(36,`Propriedade`),Zg(),Jc(37,`th`),Tk(38,`Descrição`),Zg(),Jc(39,`th`),Tk(40,`Valor Padrão`),Zg()()(),Jc(41,`tbody`)(42,`tr`)(43,`td`)(44,`strong`),Tk(45,`Default Values`),Zg()(),_u(46,`td`)(47,`td`),Zg(),Jc(48,`tr`)(49,`td`)(50,`code`),Tk(51,`--font-family`),Zg()(),Jc(52,`td`),Tk(53,`Família tipográfica usada`),Zg(),Jc(54,`td`)(55,`code`),Tk(56,`var(--font-family-theme)`),Zg()()(),Jc(57,`tr`)(58,`td`)(59,`code`),Tk(60,`--font-weight`),Zg()(),Jc(61,`td`),Tk(62,`Peso da fonte`),Zg(),Jc(63,`td`)(64,`code`),Tk(65,`var(--font-weight-normal)`),Zg()()(),Jc(66,`tr`)(67,`td`)(68,`code`),Tk(69,`--text-color`),Zg()(),Jc(70,`td`),Tk(71,`Cor do texto`),Zg(),Jc(72,`td`)(73,`code`),Tk(74,`var(--color-neutral-dark-70)`),Zg()()(),Jc(75,`tr`)(76,`td`)(77,`code`),Tk(78,`--border-radius`),Zg()(),Jc(79,`td`),Tk(80,`Contém o valor do raio dos cantos do elemento\xA0`),Zg(),Jc(81,`td`)(82,`code`),Tk(83,`var(--border-radius-md)`),Zg()()(),Jc(84,`tr`)(85,`td`)(86,`code`),Tk(87,`--border-width`),Zg()(),Jc(88,`td`),Tk(89,`Contém o valor da largura dos cantos do elemento\xA0`),Zg(),Jc(90,`td`)(91,`code`),Tk(92,`var(--border-width-sm)`),Zg()()(),Jc(93,`tr`)(94,`td`)(95,`code`),Tk(96,`--border-color`),Zg()(),Jc(97,`td`),Tk(98,`Cor da borda`),Zg(),Jc(99,`td`)(100,`code`),Tk(101,`var(--color-neutral-light-20)`),Zg()()(),Jc(102,`tr`)(103,`td`)(104,`code`),Tk(105,`--background`),Zg()(),Jc(106,`td`),Tk(107,`Cor de background`),Zg(),Jc(108,`td`)(109,`code`),Tk(110,`var(--color-neutral-light-00)`),Zg()()(),Jc(111,`tr`)(112,`td`)(113,`code`),Tk(114,`--shadow`),Zg()(),Jc(115,`td`),Tk(116,`Contém o valor da sombra do elemento`),Zg(),Jc(117,`td`)(118,`code`),Tk(119,`var(--shadow-md)`),Zg()()(),Jc(120,`tr`)(121,`td`)(122,`strong`),Tk(123,`po-loading-icon`),Zg()(),_u(124,`td`)(125,`td`),Zg(),Jc(126,`tr`)(127,`td`)(128,`code`),Tk(129,`--color`),Zg()(),Jc(130,`td`),Tk(131,`Cor principal do spinner`),Zg(),Jc(132,`td`)(133,`code`),Tk(134,`var(--color-action-default)`),Zg()()()()()(),Jc(135,`div`,7)(136,`h4`,8),Tk(137,`Seletor`),Zg(),Jc(138,`pre`,9),Tk(139,`<po-loading-overlay
    p-screen-lock="boolean"
    p-size="string"
    p-text="string" >
</po-loading-overlay>
`),Zg()(),Jc(140,`h4`,10),Tk(141,`Propriedades`),Zg(),Jc(142,`table`,11)(143,`tr`,12)(144,`th`,13),Tk(145,`Nome`),Zg(),Jc(146,`th`,13),Tk(147,`Tipo`),Zg(),Jc(148,`th`,13),Tk(149,`Padrão`),Zg(),Jc(150,`th`,13),Tk(151,`Descrição`),Zg()(),Jc(152,`tr`,14)(153,`td`,15)(154,`div`,16)(155,`span`,17),Tk(156,` p-screen-lock`),_u(157,`br`),Zg()()(),Jc(158,`td`,18)(159,`code`,19),Tk(160,`boolean`),Zg()(),Jc(161,`td`,20)(162,`p`)(163,`code`),Tk(164,`false`),Zg()()(),Jc(165,`td`,21)(166,`em`)(167,`strong`),Tk(168,`(opcional)`),Zg()(),Jc(169,`p`),Tk(170,`Define se o `),Jc(171,`em`),Tk(172,`overlay`),Zg(),Tk(173,` será aplicado a um `),Jc(174,`em`),Tk(175,`container`),Zg(),Tk(176,` ou à página inteira.`),Zg(),Jc(177,`p`),Tk(178,`Para utilizar o componente como um `),Jc(179,`em`),Tk(180,`container`),Zg(),Tk(181,`, o elemento pai deverá receber uma posição relativa, por exemplo:`),Zg(),Jc(182,`pre`)(183,`code`),Tk(184,`<div style="position: relative">

 <po-chart [p-series]="[{ value: 10, category: 'Example' }]">
 </po-chart>

 <po-loading-overlay>
 </po-loading-overlay>
</div>
`),Zg()()()(),Jc(185,`tr`,14)(186,`td`,15)(187,`div`,16)(188,`span`,17),Tk(189,` p-size`),_u(190,`br`),Zg()()(),Jc(191,`td`,18)(192,`code`,22),Tk(193,`string`),Zg()(),Jc(194,`td`,20)(195,`p`)(196,`code`),Tk(197,`lg`),Zg()()(),Jc(198,`td`,21)(199,`em`)(200,`strong`),Tk(201,`(opcional)`),Zg()(),Jc(202,`p`),Tk(203,`Define o tamanho do componente com base no tamanho do ícone de `),Jc(204,`em`),Tk(205,`loading`),Zg(),Tk(206,`.`),Zg(),Jc(207,`p`),Tk(208,`Tamanhos disponíveis para o `),Jc(209,`em`),Tk(210,`loading`),Zg(),Tk(211,`:`),Zg(),Jc(212,`ul`)(213,`li`)(214,`code`),Tk(215,`xs`),Zg(),Tk(216,`: 1rem`),Zg(),Jc(217,`li`)(218,`code`),Tk(219,`sm`),Zg(),Tk(220,`: 1.5rem`),Zg(),Jc(221,`li`)(222,`code`),Tk(223,`md`),Zg(),Tk(224,`: 3rem`),Zg(),Jc(225,`li`)(226,`code`),Tk(227,`lg`),Zg(),Tk(228,`: 5rem (valor padrão)`),Zg()()()(),Jc(229,`tr`,14)(230,`td`,15)(231,`div`,16)(232,`span`,17),Tk(233,` p-text`),_u(234,`br`),Zg()()(),Jc(235,`td`,18)(236,`code`,22),Tk(237,`string`),Zg()(),Jc(238,`td`,20)(239,`p`)(240,`code`),Tk(241,`Carregando`),Zg()()(),Jc(242,`td`,21)(243,`em`)(244,`strong`),Tk(245,`(opcional)`),Zg()(),Jc(246,`p`),Tk(247,`Texto a ser exibido no componente.`),Zg(),Jc(248,`blockquote`)(249,`p`),Tk(250,`O valor padrão será traduzido de acordo com o idioma configurado no `),Jc(251,`a`,23)(252,`strong`),Tk(253,`PoI18n`),Zg()(),Tk(254,` ou navegador.`),Zg()()()()()())},dependencies:[P],encapsulation:2,changeDetection:1})}return o})();function we(o,Te){if(o&1){let l=ZO();Jc(0,`po-tab`,4),vt(`p-click`,function(){H_(l);let i=nk();return $_(i.changeTab(`web`))}),_u(1,`sample-po-loading-overlay-basic-view`)(2,`sample-po-loading-overlay-labs-view`)(3,`sample-po-loading-overlay-connection-test-view`),Zg()}if(o&2){let l=nk();Ab(`p-active`,l.activeTab===`web`)}}var _e=[{path:``,component:(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(l,a){this.route=l,this.router=a}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(l=>{let a=l.view;this.hidePoWebSample=this.samplesLength===0,this.activeTab=this.hidePoWebSample?`doc`:a||`web`})}changeTab(l){this.router.navigate([],{queryParams:{view:l},queryParamsHandling:`merge`}),this.activeTab=l}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(a){return new(a||o)(I(ar),I(An))};static ɵcmp=Jn({type:o,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:3,consts:[[`p-title`,`Loading Overlay`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Exemplos`,3,`p-active`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-active`]],template:function(a,i){a&1&&(Jc(0,`po-page-default`,0)(1,`po-tabs`,1),VO(2,we,4,1,`po-tab`,2),Jc(3,`po-tab`,3),vt(`p-click`,function(){return i.changeTab(`doc`)}),_u(4,`sample-po-loading-overlay-doc`),Zg()()()),a&2&&(Ab(`p-actions`,i.actions),Ig(2),BO(i.hidePoWebSample?-1:2),Ig(),Ab(`p-active`,i.activeTab===`doc`))},dependencies:[Mze,tre,are,re,se,de,ce],encapsulation:2,changeDetection:1})}return o})()}];var ue=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵmod=ge({type:o});static ɵinj=de$1({imports:[WV.forChild(_e),WV]})}return o})();var nt=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵmod=ge({type:o});static ɵinj=de$1({imports:[M,ue]})}return o})();export{nt as DocPoLoadingOverlayModule};