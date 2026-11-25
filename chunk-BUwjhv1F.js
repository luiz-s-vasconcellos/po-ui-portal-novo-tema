import{m as P,p as M}from"./main-VRFIZKV3.js";import{$i as ar,Ar as G0,At as Zte,Ci as Rk,Fn as tre,Ga as q0,Gr as Kb,Hr as Jn,Ir as H_,Kr as Kg,Li as WL,Oi as U_,Pt as are,Qr as Mk,Ra as ok,Sa as jO,Si as RZ,U as Mze,Va as p,Vr as Jc,W as Nf,Wr as KO,Xi as _t,Yr as LO,Zi as _u,aa as de,ar as Ab,bn as oi,co as wg,eo as tk,fo as xZ,j as I4,jr as GV,ln as joe,mi as QL,n as $P,or as An,pa as ge,qi as Zb,rr as AZ,rt as Ru,sn as j4,zr as I}from"./chunk-DdK63a0t.js";var te=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-loading-overlay-basic`]],standalone:!1,decls:2,vars:0,consts:[[1,`sample-container`]],template:function(i,a){i&1&&(Jc(0,`div`,0),_u(1,`po-loading-overlay`),Kg())},dependencies:[$P],styles:[`.sample-container[_ngcontent-%COMP%]{position:relative;height:300px}`],changeDetection:1})}return n})();var oe=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-loading-overlay-basic-view`]],standalone:!1,decls:31,vars:0,consts:[[`id`,`sample-po-loading-overlay-basic`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`data-tour`,`sample-tabs`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-loading-overlay-basic/sample-po-loading-overlay-basic.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-loading-overlay-basic/sample-po-loading-overlay-basic.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`],[`p-label`,`CSS`],[`data-file`,`sample-po-loading-overlay-basic/sample-po-loading-overlay-basic.component.css`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`css`]],template:function(i,a){i&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Mk(3,`PO Loading Overlay Basic`),Kg()(),Jc(4,`div`,2)(5,`po-tabs`,3)(6,`po-tab`,4)(7,`div`,5),_u(8,`sample-po-loading-overlay-basic`),Kg()(),Jc(9,`po-tab`,6)(10,`div`)(11,`label`,7),Mk(12,`sample-po-loading-overlay-basic/sample-po-loading-overlay-basic.component.html`),Kg(),Jc(13,`div`,8)(14,`pre`,9),Mk(15,`<div class="sample-container">
  <po-loading-overlay></po-loading-overlay>
</div>
`),Kg()()()(),Jc(16,`po-tab`,10)(17,`div`)(18,`label`,7),Mk(19,`sample-po-loading-overlay-basic/sample-po-loading-overlay-basic.component.ts`),Kg(),Jc(20,`div`,11)(21,`pre`,12),Mk(22,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-loading-overlay-basic',
  templateUrl: './sample-po-loading-overlay-basic.component.html',
  styleUrls: ['./sample-po-loading-overlay-basic.component.css'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoLoadingOverlayBasicComponent {}
`),Kg()()()(),Jc(23,`po-tab`,13)(24,`div`)(25,`label`,7),Mk(26,`sample-po-loading-overlay-basic/sample-po-loading-overlay-basic.component.css`),Kg(),Jc(27,`div`,14)(28,`pre`,15),Mk(29,`.sample-container {
  position: relative;
  height: 300px;
}
`),Kg()()()()()(),_u(30,`hr`))},dependencies:[P,tre,are,te],encapsulation:2,changeDetection:1})}return n})();var ne=(()=>{class n{properties=[];text;size;sizesOptions=[{label:`xs`,value:`xs`},{label:`sm`,value:`sm`},{label:`md`,value:`md`},{label:`lg`,value:`lg`}];propertiesOptions=[{value:`screenLock`,label:`Screen Lock`}];ngOnInit(){this.restore()}onChangeCheckbox(l){l.includes(`screenLock`)&&setTimeout(()=>{this.properties=[]},2e3)}restore(){this.size=`lg`,this.text=null}static ɵfac=function(i){return new(i||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-loading-overlay-labs`]],standalone:!1,decls:13,vars:8,consts:[[`formProperties`,`ngForm`],[1,`sample-container`],[3,`p-screen-lock`,`p-text`,`p-size`],[1,`po-row`],[`name`,`text`,`p-label`,`Text`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`properties`,`p-label`,`Properties`,1,`po-md-6`,3,`ngModelChange`,`p-change`,`ngModel`,`p-options`],[`name`,`size`,`p-label`,`Size`,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[1,`po-md-3`],[`p-label`,`Sample Restore`,3,`p-click`]],template:function(i,a){if(i&1){let m=KO();Jc(0,`div`,1),_u(1,`po-loading-overlay`,2),Kg(),_u(2,`po-divider`),Jc(3,`form`,null,0)(5,`div`,3)(6,`po-input`,4),G0(),Zb(`ngModelChange`,function(r){return U_(m),Rk(a.text,r)||(a.text=r),H_(r)}),Kg(),Jc(7,`po-checkbox-group`,5),G0(),Zb(`ngModelChange`,function(r){return U_(m),Rk(a.properties,r)||(a.properties=r),H_(r)}),_t(`p-change`,function(r){return a.onChangeCheckbox(r)}),Kg()(),Jc(8,`div`,3)(9,`po-radio-group`,6),G0(),Zb(`ngModelChange`,function(r){return U_(m),Rk(a.size,r)||(a.size=r),H_(r)}),Kg()(),Jc(10,`div`,3)(11,`div`,7)(12,`po-button`,8),_t(`p-click`,function(){return a.restore()}),Kg()()()()}i&2&&(wg(),Ab(`p-screen-lock`,a.properties?.includes(`screenLock`))(`p-text`,a.text)(`p-size`,a.size),wg(5),Kb(`ngModel`,a.text),q0(),wg(),Kb(`ngModel`,a.properties),Ab(`p-options`,a.propertiesOptions),q0(),wg(2),Kb(`ngModel`,a.size),Ab(`p-options`,a.sizesOptions),q0())},dependencies:[xZ,RZ,AZ,QL,WL,oi,Nf,I4,j4,Zte,$P],styles:[`.sample-container[_ngcontent-%COMP%]{position:relative;height:300px}`],changeDetection:1})}return n})();var ie=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-loading-overlay-labs-view`]],standalone:!1,decls:31,vars:0,consts:[[`id`,`sample-po-loading-overlay-labs`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`data-tour`,`sample-tabs`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-loading-overlay-labs/sample-po-loading-overlay-labs.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-loading-overlay-labs/sample-po-loading-overlay-labs.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`],[`p-label`,`CSS`],[`data-file`,`sample-po-loading-overlay-labs/sample-po-loading-overlay-labs.component.css`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`css`]],template:function(i,a){i&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Mk(3,`PO Loading Overlay Labs`),Kg()(),Jc(4,`div`,2)(5,`po-tabs`,3)(6,`po-tab`,4)(7,`div`,5),_u(8,`sample-po-loading-overlay-labs`),Kg()(),Jc(9,`po-tab`,6)(10,`div`)(11,`label`,7),Mk(12,`sample-po-loading-overlay-labs/sample-po-loading-overlay-labs.component.html`),Kg(),Jc(13,`div`,8)(14,`pre`,9),Mk(15,`<div class="sample-container">
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
`),Kg()()()(),Jc(16,`po-tab`,10)(17,`div`)(18,`label`,7),Mk(19,`sample-po-loading-overlay-labs/sample-po-loading-overlay-labs.component.ts`),Kg(),Jc(20,`div`,11)(21,`pre`,12),Mk(22,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),Kg()()()(),Jc(23,`po-tab`,13)(24,`div`)(25,`label`,7),Mk(26,`sample-po-loading-overlay-labs/sample-po-loading-overlay-labs.component.css`),Kg(),Jc(27,`div`,14)(28,`pre`,15),Mk(29,`.sample-container {
  position: relative;
  height: 300px;
}
`),Kg()()()()()(),_u(30,`hr`))},dependencies:[P,tre,are,ne],encapsulation:2,changeDetection:1})}return n})();var ae=(()=>{class n{poNotification=p(Ru);environment={urlServer:``,urlDB:``,userDB:``,passwordDB:``};isHideLoading=!0;connectionTest(){let l=`Connection ok`;this.isHideLoading=!1,setTimeout(()=>{this.isHideLoading=!0,this.poNotification.success(l)},450)}static ɵfac=function(i){return new(i||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-loading-overlay-connection-test`]],standalone:!1,decls:11,vars:6,consts:[[`formConfig`,`ngForm`],[3,`hidden`],[1,`po-row`],[`name`,`urlServer`,`p-clean`,``,`p-label`,`URL Server`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`urlDB`,`p-clean`,``,`p-label`,`URL Database`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`userDB`,`p-clean`,``,`p-label`,`User Database`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`passwordDB`,`p-clean`,``,`p-label`,`Password Database`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Connect`,1,`po-md-4`,3,`p-click`,`p-disabled`]],template:function(i,a){if(i&1){let m=KO();Jc(0,`form`,null,0)(2,`div`),_u(3,`po-loading-overlay`,1),Kg(),Jc(4,`div`,2)(5,`po-input`,3),G0(),Zb(`ngModelChange`,function(r){return U_(m),Rk(a.environment.urlServer,r)||(a.environment.urlServer=r),H_(r)}),Kg(),Jc(6,`po-input`,4),G0(),Zb(`ngModelChange`,function(r){return U_(m),Rk(a.environment.urlDB,r)||(a.environment.urlDB=r),H_(r)}),Kg(),Jc(7,`po-input`,5),G0(),Zb(`ngModelChange`,function(r){return U_(m),Rk(a.environment.userDB,r)||(a.environment.userDB=r),H_(r)}),Kg(),Jc(8,`po-password`,6),G0(),Zb(`ngModelChange`,function(r){return U_(m),Rk(a.environment.passwordDB,r)||(a.environment.passwordDB=r),H_(r)}),Kg()(),Jc(9,`div`,2)(10,`po-button`,7),_t(`p-click`,function(){U_(m);let r=ok(1);return a.connectionTest(),H_(r.reset())}),Kg()()()}if(i&2){let m=ok(1);wg(3),Ab(`hidden`,a.isHideLoading),wg(2),Kb(`ngModel`,a.environment.urlServer),q0(),wg(),Kb(`ngModel`,a.environment.urlDB),q0(),wg(),Kb(`ngModel`,a.environment.userDB),q0(),wg(),Kb(`ngModel`,a.environment.passwordDB),q0(),wg(2),Ab(`p-disabled`,m.invalid)}},dependencies:[xZ,RZ,AZ,QL,WL,oi,j4,joe,$P],encapsulation:2,changeDetection:1})}return n})();var le=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-loading-overlay-connection-test-view`]],standalone:!1,decls:24,vars:0,consts:[[`id`,`sample-po-loading-overlay-connection-test`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`data-tour`,`sample-tabs`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-loading-overlay-connection-test/sample-po-loading-overlay-connection-test.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-loading-overlay-connection-test/sample-po-loading-overlay-connection-test.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`]],template:function(i,a){i&1&&(_u(0,`br`),Jc(1,`blockquote`,0)(2,`label`,1),Mk(3,`PO Loading Overlay - Connection Test`),Kg()(),Jc(4,`div`,2)(5,`po-tabs`,3)(6,`po-tab`,4)(7,`div`,5),_u(8,`sample-po-loading-overlay-connection-test`),Kg()(),Jc(9,`po-tab`,6)(10,`div`)(11,`label`,7),Mk(12,`sample-po-loading-overlay-connection-test/sample-po-loading-overlay-connection-test.component.html`),Kg(),Jc(13,`div`,8)(14,`pre`,9),Mk(15,`<form #formConfig="ngForm">
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
`),Kg()()()(),Jc(16,`po-tab`,10)(17,`div`)(18,`label`,7),Mk(19,`sample-po-loading-overlay-connection-test/sample-po-loading-overlay-connection-test.component.ts`),Kg(),Jc(20,`div`,11)(21,`pre`,12),Mk(22,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),Kg()()()()()(),_u(23,`hr`))},dependencies:[P,tre,are,ae],encapsulation:2,changeDetection:1})}return n})();var re=(()=>{class n{router=p(An);openDoc(l){this.router.navigate([`/documentation`,l],{queryParams:{view:`doc`}})}static ɵfac=function(i){return new(i||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-loading-overlay-doc`]],standalone:!1,decls:255,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[`id`,`class-po-loading-overlay-component`,1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[`id`,`prop-p-screen-lock`,1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`id`,`prop-p-size`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`string`],[`id`,`prop-p-text`,1,`docs-api-properties-row`],[`href`,`/documentation/po-i18n`]],template:function(i,a){i&1&&(Jc(0,`div`,0)(1,`p`,1)(2,`code`),Mk(3,`import { PoLoadingModule } from '@po-ui/ng-components';`),Kg()(),Jc(4,`div`,2)(5,`p`),Mk(6,`Módulo do componente po-loading-overlay.`),Kg()(),Jc(7,`h3`,3),Mk(8,`Componente`),Kg(),Jc(9,`h4`,4)(10,`code`,5),Mk(11,`PoLoadingOverlayComponent`),Kg()(),Jc(12,`div`,2)(13,`p`),Mk(14,`Este componente mostra ao usuário uma imagem de `),Jc(15,`em`),Mk(16,`loading`),Kg(),Mk(17,` e bloqueia a p\xE1gina inteira ou o container escolhido,
enquanto aguarda a resposta de alguma requisi\xE7\xE3o.`),Kg(),Jc(18,`h4`),Mk(19,`Tokens customizáveis`),Kg(),Jc(20,`p`),Mk(21,`É possível alterar o estilo do componente usando os seguintes tokens (CSS): `),_u(22,`br`),Mk(23,`
Obs: S\xF3 \xE9 poss\xEDvel realizar altera\xE7\xF5es ao adicionar a classe `),Jc(24,`code`),Mk(25,`.po-loading`),Kg()(),Jc(26,`blockquote`)(27,`p`),Mk(28,`Para maiores informações, acesse o guia `),Jc(29,`a`,6),Mk(30,`Personalizando o Tema Padrão com Tokens CSS`),Kg(),Mk(31,`.`),Kg()(),Jc(32,`table`)(33,`thead`)(34,`tr`)(35,`th`),Mk(36,`Propriedade`),Kg(),Jc(37,`th`),Mk(38,`Descrição`),Kg(),Jc(39,`th`),Mk(40,`Valor Padrão`),Kg()()(),Jc(41,`tbody`)(42,`tr`)(43,`td`)(44,`strong`),Mk(45,`Default Values`),Kg()(),_u(46,`td`)(47,`td`),Kg(),Jc(48,`tr`)(49,`td`)(50,`code`),Mk(51,`--font-family`),Kg()(),Jc(52,`td`),Mk(53,`Família tipográfica usada`),Kg(),Jc(54,`td`)(55,`code`),Mk(56,`var(--font-family-theme)`),Kg()()(),Jc(57,`tr`)(58,`td`)(59,`code`),Mk(60,`--font-weight`),Kg()(),Jc(61,`td`),Mk(62,`Peso da fonte`),Kg(),Jc(63,`td`)(64,`code`),Mk(65,`var(--font-weight-normal)`),Kg()()(),Jc(66,`tr`)(67,`td`)(68,`code`),Mk(69,`--text-color`),Kg()(),Jc(70,`td`),Mk(71,`Cor do texto`),Kg(),Jc(72,`td`)(73,`code`),Mk(74,`var(--color-neutral-dark-70)`),Kg()()(),Jc(75,`tr`)(76,`td`)(77,`code`),Mk(78,`--border-radius`),Kg()(),Jc(79,`td`),Mk(80,`Contém o valor do raio dos cantos do elemento\xA0`),Kg(),Jc(81,`td`)(82,`code`),Mk(83,`var(--border-radius-md)`),Kg()()(),Jc(84,`tr`)(85,`td`)(86,`code`),Mk(87,`--border-width`),Kg()(),Jc(88,`td`),Mk(89,`Contém o valor da largura dos cantos do elemento\xA0`),Kg(),Jc(90,`td`)(91,`code`),Mk(92,`var(--border-width-sm)`),Kg()()(),Jc(93,`tr`)(94,`td`)(95,`code`),Mk(96,`--border-color`),Kg()(),Jc(97,`td`),Mk(98,`Cor da borda`),Kg(),Jc(99,`td`)(100,`code`),Mk(101,`var(--color-neutral-light-20)`),Kg()()(),Jc(102,`tr`)(103,`td`)(104,`code`),Mk(105,`--background`),Kg()(),Jc(106,`td`),Mk(107,`Cor de background`),Kg(),Jc(108,`td`)(109,`code`),Mk(110,`var(--color-neutral-light-00)`),Kg()()(),Jc(111,`tr`)(112,`td`)(113,`code`),Mk(114,`--shadow`),Kg()(),Jc(115,`td`),Mk(116,`Contém o valor da sombra do elemento`),Kg(),Jc(117,`td`)(118,`code`),Mk(119,`var(--shadow-md)`),Kg()()(),Jc(120,`tr`)(121,`td`)(122,`strong`),Mk(123,`po-loading-icon`),Kg()(),_u(124,`td`)(125,`td`),Kg(),Jc(126,`tr`)(127,`td`)(128,`code`),Mk(129,`--color`),Kg()(),Jc(130,`td`),Mk(131,`Cor principal do spinner`),Kg(),Jc(132,`td`)(133,`code`),Mk(134,`var(--color-action-default)`),Kg()()()()()(),Jc(135,`div`,7)(136,`h4`,8),Mk(137,`Seletor`),Kg(),Jc(138,`pre`,9),Mk(139,`<po-loading-overlay
    p-screen-lock="boolean"
    p-size="string"
    p-text="string" >
</po-loading-overlay>
`),Kg()(),Jc(140,`h4`,10),Mk(141,`Propriedades`),Kg(),Jc(142,`table`,11)(143,`tr`,12)(144,`th`,13),Mk(145,`Nome`),Kg(),Jc(146,`th`,13),Mk(147,`Tipo`),Kg(),Jc(148,`th`,13),Mk(149,`Padrão`),Kg(),Jc(150,`th`,13),Mk(151,`Descrição`),Kg()(),Jc(152,`tr`,14)(153,`td`,15)(154,`div`,16)(155,`span`,17),Mk(156,` p-screen-lock`),_u(157,`br`),Kg()()(),Jc(158,`td`,18)(159,`code`,19),Mk(160,`boolean`),Kg()(),Jc(161,`td`,20)(162,`p`)(163,`code`),Mk(164,`false`),Kg()()(),Jc(165,`td`,21)(166,`em`)(167,`strong`),Mk(168,`(opcional)`),Kg()(),Jc(169,`p`),Mk(170,`Define se o `),Jc(171,`em`),Mk(172,`overlay`),Kg(),Mk(173,` será aplicado a um `),Jc(174,`em`),Mk(175,`container`),Kg(),Mk(176,` ou à página inteira.`),Kg(),Jc(177,`p`),Mk(178,`Para utilizar o componente como um `),Jc(179,`em`),Mk(180,`container`),Kg(),Mk(181,`, o elemento pai deverá receber uma posição relativa, por exemplo:`),Kg(),Jc(182,`pre`)(183,`code`),Mk(184,`<div style="position: relative">

 <po-chart [p-series]="[{ value: 10, category: 'Example' }]">
 </po-chart>

 <po-loading-overlay>
 </po-loading-overlay>
</div>
`),Kg()()()(),Jc(185,`tr`,22)(186,`td`,15)(187,`div`,16)(188,`span`,17),Mk(189,` p-size`),_u(190,`br`),Kg()()(),Jc(191,`td`,18)(192,`code`,23),Mk(193,`string`),Kg()(),Jc(194,`td`,20)(195,`p`)(196,`code`),Mk(197,`lg`),Kg()()(),Jc(198,`td`,21)(199,`em`)(200,`strong`),Mk(201,`(opcional)`),Kg()(),Jc(202,`p`),Mk(203,`Define o tamanho do componente com base no tamanho do ícone de `),Jc(204,`em`),Mk(205,`loading`),Kg(),Mk(206,`.`),Kg(),Jc(207,`p`),Mk(208,`Tamanhos disponíveis para o `),Jc(209,`em`),Mk(210,`loading`),Kg(),Mk(211,`:`),Kg(),Jc(212,`ul`)(213,`li`)(214,`code`),Mk(215,`xs`),Kg(),Mk(216,`: 1rem`),Kg(),Jc(217,`li`)(218,`code`),Mk(219,`sm`),Kg(),Mk(220,`: 1.5rem`),Kg(),Jc(221,`li`)(222,`code`),Mk(223,`md`),Kg(),Mk(224,`: 3rem`),Kg(),Jc(225,`li`)(226,`code`),Mk(227,`lg`),Kg(),Mk(228,`: 5rem (valor padrão)`),Kg()()()(),Jc(229,`tr`,24)(230,`td`,15)(231,`div`,16)(232,`span`,17),Mk(233,` p-text`),_u(234,`br`),Kg()()(),Jc(235,`td`,18)(236,`code`,23),Mk(237,`string`),Kg()(),Jc(238,`td`,20)(239,`p`)(240,`code`),Mk(241,`Carregando`),Kg()()(),Jc(242,`td`,21)(243,`em`)(244,`strong`),Mk(245,`(opcional)`),Kg()(),Jc(246,`p`),Mk(247,`Texto a ser exibido no componente.`),Kg(),Jc(248,`blockquote`)(249,`p`),Mk(250,`O valor padrão será traduzido de acordo com o idioma configurado no `),Jc(251,`a`,25)(252,`strong`),Mk(253,`PoI18n`),Kg()(),Mk(254,` ou navegador.`),Kg()()()()()())},dependencies:[P],encapsulation:2,changeDetection:1})}return n})();function Se(n,fe){if(n&1&&(Jc(0,`div`,1),_u(1,`sample-po-loading-overlay-basic-view`)(2,`sample-po-loading-overlay-labs-view`)(3,`sample-po-loading-overlay-connection-test-view`),Kg()),n&2){let l=tk();Ab(`hidden`,l.activeTab!==`web`)}}var he=[{path:``,component:(()=>{class n{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;title=`Loading Overlay`;actions=[];toWeb={label:`Ver exemplos`,icon:`an an-browsers`,action:()=>this.changeTab(`web`)};toDoc={label:`Ver documentação`,icon:`an an-file-text`,action:()=>this.changeTab(`doc`)};back={label:`Voltar`,icon:`an an-arrow-left`,action:this.goBack.bind(this)};constructor(l,i){this.route=l,this.router=i}goBack(){this.router.navigate([`documentation`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(l=>{let i=l.view;this.hidePoWebSample=this.samplesLength===0,this.activeTab=this.hidePoWebSample?`doc`:i||`web`,this.title=`Loading Overlay · `+(this.activeTab===`web`?`Exemplos`:`Documentação`),this.actions=this.hidePoWebSample?[this.back]:[this.activeTab===`web`?this.toDoc:this.toWeb,this.back]})}changeTab(l){this.router.navigate([],{queryParams:{view:l},queryParamsHandling:`merge`})}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(i){return new(i||n)(I(ar),I(An))};static ɵcmp=Jn({type:n,selectors:[[`ng-component`]],standalone:!1,decls:4,vars:4,consts:[[`data-tour`,`component-page`,3,`p-title`,`p-actions`],[`data-tour-mode`,`web`,3,`hidden`],[`data-tour-mode`,`doc`,3,`hidden`]],template:function(i,a){i&1&&(Jc(0,`po-page-default`,0),LO(1,Se,4,1,`div`,1),Jc(2,`div`,2),_u(3,`sample-po-loading-overlay-doc`),Kg()()),i&2&&(Ab(`p-title`,a.title)(`p-actions`,a.actions),wg(),jO(a.hidePoWebSample?-1:1),wg(),Ab(`hidden`,a.activeTab!==`doc`))},dependencies:[Mze,oe,ie,le,re],encapsulation:2,changeDetection:1})}return n})()}];var se=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵmod=ge({type:n});static ɵinj=de({imports:[GV.forChild(he),GV]})}return n})();var Ze=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵmod=ge({type:n});static ɵinj=de({imports:[M,se]})}return n})();export{Ze as DocPoLoadingOverlayModule};