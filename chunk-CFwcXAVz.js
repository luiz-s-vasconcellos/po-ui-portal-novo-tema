import{$i as h,Cn as oi,Da as pe$1,Fa as rg,Fi as ab,Ga as vx,H as Lf,Ha as v_,Ia as sb,Ii as b,La as uO,Ln as w4,Mr as I1,Na as r0,Qr as RK,Ra as ue,Sa as o0,Si as Xx,T as Gte,Xt as ere,Ya as wg,Za as xF,_t as Uoe,ai as Sn,b as Fu,c as BP,dr as DO,gr as Dx,ht as U4,i as Ac,ia as ir,ji as __,ki as Zn,ma as lO,mt as Tze,ni as SF,nr as Ag,or as Bx,qr as Ok,ri as SK,rr as Ax,rt as Qae,sa as jc,ui as UE,va as mt,wr as Fx,xa as nu,zr as MK}from"./chunk-VuVfKKNQ.js";import{n as P,t as M}from"./main-7FOYFSS2.js";var le=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-loading-overlay-basic`]],standalone:!1,decls:2,vars:0,consts:[[1,`sample-container`]],template:function(a,i){a&1&&(jc(0,`div`,0),nu(1,`po-loading-overlay`),wg())},dependencies:[BP],styles:[`.sample-container[_ngcontent-%COMP%]{position:relative;height:300px}`],changeDetection:1})}return o})();var he=o=>({"docs-sample-code-tabs":o});var pe=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-loading-overlay-basic-view`]],standalone:!1,decls:30,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[`p-label`,`CSS`],[`appCodeHighlight`,``,1,`css`]],template:function(a,i){a&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),lO(3,`PO Loading Overlay Basic`),wg(),jc(4,`a`,2),mt(`click`,function(){return i.toggleSampleCodeTabs()}),nu(5,`span`),lO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),lO(12,`sample-po-loading-overlay-basic/sample-po-loading-overlay-basic.component.html`),wg(),jc(13,`pre`,7),lO(14,`<div class="sample-container">
  <po-loading-overlay></po-loading-overlay>
</div>
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),lO(18,`sample-po-loading-overlay-basic/sample-po-loading-overlay-basic.component.ts`),wg(),jc(19,`pre`,9),lO(20,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-loading-overlay-basic',
  templateUrl: './sample-po-loading-overlay-basic.component.html',
  styleUrls: ['./sample-po-loading-overlay-basic.component.css'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoLoadingOverlayBasicComponent {}
`),wg()()(),jc(21,`po-tab`,10)(22,`div`)(23,`label`,6),lO(24,`sample-po-loading-overlay-basic/sample-po-loading-overlay-basic.component.css`),wg(),jc(25,`pre`,11),lO(26,`.sample-container {
  position: relative;
  height: 300px;
}
`),wg()()()()(),jc(27,`po-container`),nu(28,`sample-po-loading-overlay-basic`),wg(),nu(29,`hr`)),a&2&&(rg(5),Xx(`po-icon `+i.sampleCodeButtonIcon),rg(),Ag(` `,i.sampleCodeButtonLabel),rg(),UE(`ngClass`,DO(4,he,i.hideSampleCodeTabs)))},dependencies:[Ok,P,Ac,Qae,ere,le],encapsulation:2,changeDetection:1})}return o})();var se=(()=>{class o{properties=[];text;size;sizesOptions=[{label:`xs`,value:`xs`},{label:`sm`,value:`sm`},{label:`md`,value:`md`},{label:`lg`,value:`lg`}];propertiesOptions=[{value:`screenLock`,label:`Screen Lock`}];ngOnInit(){this.restore()}onChangeCheckbox(l){l.includes(`screenLock`)&&setTimeout(()=>{this.properties=[]},2e3)}restore(){this.size=`lg`,this.text=null}static ɵfac=function(a){return new(a||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-loading-overlay-labs`]],standalone:!1,decls:13,vars:8,consts:[[`formProperties`,`ngForm`],[1,`sample-container`],[3,`p-screen-lock`,`p-text`,`p-size`],[1,`po-row`],[`name`,`text`,`p-label`,`Text`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`properties`,`p-label`,`Properties`,1,`po-md-6`,3,`ngModelChange`,`p-change`,`ngModel`,`p-options`],[`name`,`size`,`p-label`,`Size`,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[1,`po-md-3`],[`p-label`,`Sample Restore`,3,`p-click`]],template:function(a,i){if(a&1){let c=Ax();jc(0,`div`,1),nu(1,`po-loading-overlay`,2),wg(),nu(2,`po-divider`),jc(3,`form`,null,0)(5,`div`,3)(6,`po-input`,4),r0(),ab(`ngModelChange`,function(p){return v_(c),uO(i.text,p)||(i.text=p),__(p)}),wg(),jc(7,`po-checkbox-group`,5),r0(),ab(`ngModelChange`,function(p){return v_(c),uO(i.properties,p)||(i.properties=p),__(p)}),mt(`p-change`,function(p){return i.onChangeCheckbox(p)}),wg()(),jc(8,`div`,3)(9,`po-radio-group`,6),r0(),ab(`ngModelChange`,function(p){return v_(c),uO(i.size,p)||(i.size=p),__(p)}),wg()(),jc(10,`div`,3)(11,`div`,7)(12,`po-button`,8),mt(`p-click`,function(){return i.restore()}),wg()()()()}a&2&&(rg(),UE(`p-screen-lock`,i.properties?.includes(`screenLock`))(`p-text`,i.text)(`p-size`,i.size),rg(5),sb(`ngModel`,i.text),o0(),rg(),sb(`ngModel`,i.properties),UE(`p-options`,i.propertiesOptions),o0(),rg(2),sb(`ngModel`,i.size),UE(`p-options`,i.sizesOptions),o0())},dependencies:[RK,SK,MK,xF,SF,oi,Lf,w4,U4,Gte,BP],styles:[`.sample-container[_ngcontent-%COMP%]{position:relative;height:300px}`],changeDetection:1})}return o})();var fe=o=>({"docs-sample-code-tabs":o});var me=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-loading-overlay-labs-view`]],standalone:!1,decls:30,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`],[`p-label`,`CSS`],[`appCodeHighlight`,``,1,`css`]],template:function(a,i){a&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),lO(3,`PO Loading Overlay Labs`),wg(),jc(4,`a`,2),mt(`click`,function(){return i.toggleSampleCodeTabs()}),nu(5,`span`),lO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),lO(12,`sample-po-loading-overlay-labs/sample-po-loading-overlay-labs.component.html`),wg(),jc(13,`pre`,7),lO(14,`<div class="sample-container">
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
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),lO(18,`sample-po-loading-overlay-labs/sample-po-loading-overlay-labs.component.ts`),wg(),jc(19,`pre`,9),lO(20,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),wg()()(),jc(21,`po-tab`,10)(22,`div`)(23,`label`,6),lO(24,`sample-po-loading-overlay-labs/sample-po-loading-overlay-labs.component.css`),wg(),jc(25,`pre`,11),lO(26,`.sample-container {
  position: relative;
  height: 300px;
}
`),wg()()()()(),jc(27,`po-container`),nu(28,`sample-po-loading-overlay-labs`),wg(),nu(29,`hr`)),a&2&&(rg(5),Xx(`po-icon `+i.sampleCodeButtonIcon),rg(),Ag(` `,i.sampleCodeButtonLabel),rg(),UE(`ngClass`,DO(4,fe,i.hideSampleCodeTabs)))},dependencies:[Ok,P,Ac,Qae,ere,se],encapsulation:2,changeDetection:1})}return o})();var de=(()=>{class o{poNotification=h(Fu);environment={urlServer:``,urlDB:``,userDB:``,passwordDB:``};isHideLoading=!0;connectionTest(){let l=`Connection ok`;this.isHideLoading=!1,setTimeout(()=>{this.isHideLoading=!0,this.poNotification.success(l)},450)}static ɵfac=function(a){return new(a||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-loading-overlay-connection-test`]],standalone:!1,decls:11,vars:6,consts:[[`formConfig`,`ngForm`],[3,`hidden`],[1,`po-row`],[`name`,`urlServer`,`p-clean`,``,`p-label`,`URL Server`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`urlDB`,`p-clean`,``,`p-label`,`URL Database`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`userDB`,`p-clean`,``,`p-label`,`User Database`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`passwordDB`,`p-clean`,``,`p-label`,`Password Database`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Connect`,1,`po-md-4`,3,`p-click`,`p-disabled`]],template:function(a,i){if(a&1){let c=Ax();jc(0,`form`,null,0)(2,`div`),nu(3,`po-loading-overlay`,1),wg(),jc(4,`div`,2)(5,`po-input`,3),r0(),ab(`ngModelChange`,function(p){return v_(c),uO(i.environment.urlServer,p)||(i.environment.urlServer=p),__(p)}),wg(),jc(6,`po-input`,4),r0(),ab(`ngModelChange`,function(p){return v_(c),uO(i.environment.urlDB,p)||(i.environment.urlDB=p),__(p)}),wg(),jc(7,`po-input`,5),r0(),ab(`ngModelChange`,function(p){return v_(c),uO(i.environment.userDB,p)||(i.environment.userDB=p),__(p)}),wg(),jc(8,`po-password`,6),r0(),ab(`ngModelChange`,function(p){return v_(c),uO(i.environment.passwordDB,p)||(i.environment.passwordDB=p),__(p)}),wg()(),jc(9,`div`,2)(10,`po-button`,7),mt(`p-click`,function(){v_(c);let p=Bx(1);return i.connectionTest(),__(p.reset())}),wg()()()}if(a&2){let c=Bx(1);rg(3),UE(`hidden`,i.isHideLoading),rg(2),sb(`ngModel`,i.environment.urlServer),o0(),rg(),sb(`ngModel`,i.environment.urlDB),o0(),rg(),sb(`ngModel`,i.environment.userDB),o0(),rg(),sb(`ngModel`,i.environment.passwordDB),o0(),rg(2),UE(`p-disabled`,c.invalid)}},dependencies:[RK,SK,MK,xF,SF,oi,U4,Uoe,BP],encapsulation:2,changeDetection:1})}return o})();var Pe=o=>({"docs-sample-code-tabs":o});var ce=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel=`Talk is cheap, show me the code!`;sampleCodeButtonIcon=`an an-plus`;toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?`Talk is cheap, show me the code!`:`Okay, hide the code`,this.sampleCodeButtonIcon=this.hideSampleCodeTabs?`an an-plus`:`an an-minus`}static ɵfac=function(a){return new(a||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-loading-overlay-connection-test-view`]],standalone:!1,decls:24,vars:6,consts:[[1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[1,`show-me-the-code`,3,`click`],[3,`ngClass`],[`p-size`,`2`],[`p-label`,`HTML`,`p-active`,``],[1,`doc-label-path`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`appCodeHighlight`,``,1,`typescript`]],template:function(a,i){a&1&&(nu(0,`br`),jc(1,`blockquote`,0)(2,`label`,1),lO(3,`PO Loading Overlay - Connection Test`),wg(),jc(4,`a`,2),mt(`click`,function(){return i.toggleSampleCodeTabs()}),nu(5,`span`),lO(6),wg()(),jc(7,`div`,3)(8,`po-tabs`,4)(9,`po-tab`,5)(10,`div`)(11,`label`,6),lO(12,`sample-po-loading-overlay-connection-test/sample-po-loading-overlay-connection-test.component.html`),wg(),jc(13,`pre`,7),lO(14,`<form #formConfig="ngForm">
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
`),wg()()(),jc(15,`po-tab`,8)(16,`div`)(17,`label`,6),lO(18,`sample-po-loading-overlay-connection-test/sample-po-loading-overlay-connection-test.component.ts`),wg(),jc(19,`pre`,9),lO(20,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),wg()()()()(),jc(21,`po-container`),nu(22,`sample-po-loading-overlay-connection-test`),wg(),nu(23,`hr`)),a&2&&(rg(5),Xx(`po-icon `+i.sampleCodeButtonIcon),rg(),Ag(` `,i.sampleCodeButtonLabel),rg(),UE(`ngClass`,DO(4,Pe,i.hideSampleCodeTabs)))},dependencies:[Ok,P,Ac,Qae,ere,de],encapsulation:2,changeDetection:1})}return o})();var ge=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵcmp=Zn({type:o,selectors:[[`sample-po-loading-overlay-doc`]],standalone:!1,decls:255,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`pan`,``,1,`docs-api-property-type`,`string`],[`href`,`/documentation/po-i18n`]],template:function(a,i){a&1&&(jc(0,`div`,0)(1,`p`,1)(2,`code`),lO(3,`import { PoLoadingModule } from '@po-ui/ng-components';`),wg()(),jc(4,`div`,2)(5,`p`),lO(6,`Módulo do componente po-loading-overlay.`),wg()(),jc(7,`h3`,3),lO(8,`Componente`),wg(),jc(9,`h4`,4)(10,`code`,5),lO(11,`PoLoadingOverlayComponent`),wg()(),jc(12,`div`,2)(13,`p`),lO(14,`Este componente mostra ao usuário uma imagem de `),jc(15,`em`),lO(16,`loading`),wg(),lO(17,` e bloqueia a p\xE1gina inteira ou o container escolhido,
enquanto aguarda a resposta de alguma requisi\xE7\xE3o.`),wg(),jc(18,`h4`),lO(19,`Tokens customizáveis`),wg(),jc(20,`p`),lO(21,`É possível alterar o estilo do componente usando os seguintes tokens (CSS): `),nu(22,`br`),lO(23,`
Obs: S\xF3 \xE9 poss\xEDvel realizar altera\xE7\xF5es ao adicionar a classe `),jc(24,`code`),lO(25,`.po-loading`),wg()(),jc(26,`blockquote`)(27,`p`),lO(28,`Para maiores informações, acesse o guia `),jc(29,`a`,6),lO(30,`Personalizando o Tema Padrão com Tokens CSS`),wg(),lO(31,`.`),wg()(),jc(32,`table`)(33,`thead`)(34,`tr`)(35,`th`),lO(36,`Propriedade`),wg(),jc(37,`th`),lO(38,`Descrição`),wg(),jc(39,`th`),lO(40,`Valor Padrão`),wg()()(),jc(41,`tbody`)(42,`tr`)(43,`td`)(44,`strong`),lO(45,`Default Values`),wg()(),nu(46,`td`)(47,`td`),wg(),jc(48,`tr`)(49,`td`)(50,`code`),lO(51,`--font-family`),wg()(),jc(52,`td`),lO(53,`Família tipográfica usada`),wg(),jc(54,`td`)(55,`code`),lO(56,`var(--font-family-theme)`),wg()()(),jc(57,`tr`)(58,`td`)(59,`code`),lO(60,`--font-weight`),wg()(),jc(61,`td`),lO(62,`Peso da fonte`),wg(),jc(63,`td`)(64,`code`),lO(65,`var(--font-weight-normal)`),wg()()(),jc(66,`tr`)(67,`td`)(68,`code`),lO(69,`--text-color`),wg()(),jc(70,`td`),lO(71,`Cor do texto`),wg(),jc(72,`td`)(73,`code`),lO(74,`var(--color-neutral-dark-70)`),wg()()(),jc(75,`tr`)(76,`td`)(77,`code`),lO(78,`--border-radius`),wg()(),jc(79,`td`),lO(80,`Contém o valor do raio dos cantos do elemento\xA0`),wg(),jc(81,`td`)(82,`code`),lO(83,`var(--border-radius-md)`),wg()()(),jc(84,`tr`)(85,`td`)(86,`code`),lO(87,`--border-width`),wg()(),jc(88,`td`),lO(89,`Contém o valor da largura dos cantos do elemento\xA0`),wg(),jc(90,`td`)(91,`code`),lO(92,`var(--border-width-sm)`),wg()()(),jc(93,`tr`)(94,`td`)(95,`code`),lO(96,`--border-color`),wg()(),jc(97,`td`),lO(98,`Cor da borda`),wg(),jc(99,`td`)(100,`code`),lO(101,`var(--color-neutral-light-20)`),wg()()(),jc(102,`tr`)(103,`td`)(104,`code`),lO(105,`--background`),wg()(),jc(106,`td`),lO(107,`Cor de background`),wg(),jc(108,`td`)(109,`code`),lO(110,`var(--color-neutral-light-00)`),wg()()(),jc(111,`tr`)(112,`td`)(113,`code`),lO(114,`--shadow`),wg()(),jc(115,`td`),lO(116,`Contém o valor da sombra do elemento`),wg(),jc(117,`td`)(118,`code`),lO(119,`var(--shadow-md)`),wg()()(),jc(120,`tr`)(121,`td`)(122,`strong`),lO(123,`po-loading-icon`),wg()(),nu(124,`td`)(125,`td`),wg(),jc(126,`tr`)(127,`td`)(128,`code`),lO(129,`--color`),wg()(),jc(130,`td`),lO(131,`Cor principal do spinner`),wg(),jc(132,`td`)(133,`code`),lO(134,`var(--color-action-default)`),wg()()()()()(),jc(135,`div`,7)(136,`h4`,8),lO(137,`Seletor`),wg(),jc(138,`pre`,9),lO(139,`<po-loading-overlay
    p-screen-lock="boolean"
    p-size="string"
    p-text="string" >
</po-loading-overlay>
`),wg()(),jc(140,`h4`,10),lO(141,`Propriedades`),wg(),jc(142,`table`,11)(143,`tr`,12)(144,`th`,13),lO(145,`Nome`),wg(),jc(146,`th`,13),lO(147,`Tipo`),wg(),jc(148,`th`,13),lO(149,`Padrão`),wg(),jc(150,`th`,13),lO(151,`Descrição`),wg()(),jc(152,`tr`,14)(153,`td`,15)(154,`div`,16)(155,`span`,17),lO(156,` p-screen-lock`),nu(157,`br`),wg()()(),jc(158,`td`,18)(159,`code`,19),lO(160,`boolean`),wg()(),jc(161,`td`,20)(162,`p`)(163,`code`),lO(164,`false`),wg()()(),jc(165,`td`,21)(166,`em`)(167,`strong`),lO(168,`(opcional)`),wg()(),jc(169,`p`),lO(170,`Define se o `),jc(171,`em`),lO(172,`overlay`),wg(),lO(173,` será aplicado a um `),jc(174,`em`),lO(175,`container`),wg(),lO(176,` ou à página inteira.`),wg(),jc(177,`p`),lO(178,`Para utilizar o componente como um `),jc(179,`em`),lO(180,`container`),wg(),lO(181,`, o elemento pai deverá receber uma posição relativa, por exemplo:`),wg(),jc(182,`pre`)(183,`code`),lO(184,`<div style="position: relative">

 <po-chart [p-series]="[{ value: 10, category: 'Example' }]">
 </po-chart>

 <po-loading-overlay>
 </po-loading-overlay>
</div>
`),wg()()()(),jc(185,`tr`,14)(186,`td`,15)(187,`div`,16)(188,`span`,17),lO(189,` p-size`),nu(190,`br`),wg()()(),jc(191,`td`,18)(192,`code`,22),lO(193,`string`),wg()(),jc(194,`td`,20)(195,`p`)(196,`code`),lO(197,`lg`),wg()()(),jc(198,`td`,21)(199,`em`)(200,`strong`),lO(201,`(opcional)`),wg()(),jc(202,`p`),lO(203,`Define o tamanho do componente com base no tamanho do ícone de `),jc(204,`em`),lO(205,`loading`),wg(),lO(206,`.`),wg(),jc(207,`p`),lO(208,`Tamanhos disponíveis para o `),jc(209,`em`),lO(210,`loading`),wg(),lO(211,`:`),wg(),jc(212,`ul`)(213,`li`)(214,`code`),lO(215,`xs`),wg(),lO(216,`: 1rem`),wg(),jc(217,`li`)(218,`code`),lO(219,`sm`),wg(),lO(220,`: 1.5rem`),wg(),jc(221,`li`)(222,`code`),lO(223,`md`),wg(),lO(224,`: 3rem`),wg(),jc(225,`li`)(226,`code`),lO(227,`lg`),wg(),lO(228,`: 5rem (valor padrão)`),wg()()()(),jc(229,`tr`,14)(230,`td`,15)(231,`div`,16)(232,`span`,17),lO(233,` p-text`),nu(234,`br`),wg()()(),jc(235,`td`,18)(236,`code`,22),lO(237,`string`),wg()(),jc(238,`td`,20)(239,`p`)(240,`code`),lO(241,`Carregando`),wg()()(),jc(242,`td`,21)(243,`em`)(244,`strong`),lO(245,`(opcional)`),wg()(),jc(246,`p`),lO(247,`Texto a ser exibido no componente.`),wg(),jc(248,`blockquote`)(249,`p`),lO(250,`O valor padrão será traduzido de acordo com o idioma configurado no `),jc(251,`a`,23)(252,`strong`),lO(253,`PoI18n`),wg()(),lO(254,` ou navegador.`),wg()()()()()())},dependencies:[P],encapsulation:2,changeDetection:1})}return o})();function _e(o,De){if(o&1){let l=Ax();jc(0,`po-tab`,4),mt(`p-click`,function(){v_(l);let i=Fx();return __(i.changeTab(`web`))}),nu(1,`sample-po-loading-overlay-basic-view`)(2,`sample-po-loading-overlay-labs-view`)(3,`sample-po-loading-overlay-connection-test-view`),wg()}if(o&2){let l=Fx();UE(`p-active`,l.activeTab===`web`)}}var Te=[{path:``,component:(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(l,a){this.route=l,this.router=a}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(l=>{let a=l.view;this.activeTab=a||(this.samplesLength>0?`web`:`doc`),this.hidePoWebSample=this.samplesLength===0})}changeTab(l){this.router.navigate([],{queryParams:{view:l},queryParamsHandling:`merge`}),this.activeTab=l}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(a){return new(a||o)(b(ir),b(Sn))};static ɵcmp=Zn({type:o,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:3,consts:[[`p-title`,`Loading Overlay`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Exemplos`,3,`p-active`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-active`]],template:function(a,i){a&1&&(jc(0,`po-page-default`,0)(1,`po-tabs`,1),vx(2,_e,4,1,`po-tab`,2),jc(3,`po-tab`,3),mt(`p-click`,function(){return i.changeTab(`doc`)}),nu(4,`sample-po-loading-overlay-doc`),wg()()()),a&2&&(UE(`p-actions`,i.actions),rg(2),Dx(i.hidePoWebSample?-1:2),rg(),UE(`p-active`,i.activeTab===`doc`))},dependencies:[Tze,Qae,ere,pe,me,ce,ge],encapsulation:2,changeDetection:1})}return o})()}];var ve=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵmod=pe$1({type:o});static ɵinj=ue({imports:[I1.forChild(Te),I1]})}return o})();var ot=(()=>{class o{static ɵfac=function(a){return new(a||o)};static ɵmod=pe$1({type:o});static ɵinj=ue({imports:[M,ve]})}return o})();export{ot as DocPoLoadingOverlayModule};