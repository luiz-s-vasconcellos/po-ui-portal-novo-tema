import{m as P,p as M}from"./main-RBGX2DMP.js";import{Ar as I,At as Zte,G as Nf,Gi as Yb,Ha as p,Ii as WL,Ir as Kb,Lr as Kg,Oi as VO,Pi as W0,Pn as tre,Pr as Jn,Pt as are,Qi as ar,Ti as U_,W as Mze,Wi as YO,Wr as MZ,_o as z0,ao as vu,ar as An,bi as TZ,bn as oi,ca as ek,cr as B_,da as ge,gi as Rb,io as vt,j as I4,li as Qc,ln as joe,n as $P,ra as de,rr as AZ,rt as Ru,si as QL,sn as j4,so as wg,vi as Sk,wr as GV,xi as Tk,xr as FO,ya as ik}from"./chunk-BQDTQO8h.js";var te=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-loading-overlay-basic`]],standalone:!1,decls:2,vars:0,consts:[[1,`sample-container`]],template:function(i,a){i&1&&(Qc(0,`div`,0),vu(1,`po-loading-overlay`),Kg())},dependencies:[$P],styles:[`.sample-container[_ngcontent-%COMP%]{position:relative;height:300px}`],changeDetection:1})}return n})();var oe=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-loading-overlay-basic-view`]],standalone:!1,decls:31,vars:0,consts:[[`id`,`sample-po-loading-overlay-basic`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-loading-overlay-basic/sample-po-loading-overlay-basic.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-loading-overlay-basic/sample-po-loading-overlay-basic.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`],[`p-label`,`CSS`],[`data-file`,`sample-po-loading-overlay-basic/sample-po-loading-overlay-basic.component.css`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`css`]],template:function(i,a){i&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Loading Overlay Basic`),Kg()(),Qc(4,`div`)(5,`po-tabs`,2)(6,`po-tab`,3)(7,`div`,4),vu(8,`sample-po-loading-overlay-basic`),Kg()(),Qc(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-loading-overlay-basic/sample-po-loading-overlay-basic.component.html`),Kg(),Qc(13,`div`,7)(14,`pre`,8),Sk(15,`<div class="sample-container">
  <po-loading-overlay></po-loading-overlay>
</div>
`),Kg()()()(),Qc(16,`po-tab`,9)(17,`div`)(18,`label`,6),Sk(19,`sample-po-loading-overlay-basic/sample-po-loading-overlay-basic.component.ts`),Kg(),Qc(20,`div`,10)(21,`pre`,11),Sk(22,`import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sample-po-loading-overlay-basic',
  templateUrl: './sample-po-loading-overlay-basic.component.html',
  styleUrls: ['./sample-po-loading-overlay-basic.component.css'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false
})
export class SamplePoLoadingOverlayBasicComponent {}
`),Kg()()()(),Qc(23,`po-tab`,12)(24,`div`)(25,`label`,6),Sk(26,`sample-po-loading-overlay-basic/sample-po-loading-overlay-basic.component.css`),Kg(),Qc(27,`div`,13)(28,`pre`,14),Sk(29,`.sample-container {
  position: relative;
  height: 300px;
}
`),Kg()()()()()(),vu(30,`hr`))},dependencies:[P,tre,are,te],encapsulation:2,changeDetection:1})}return n})();var ne=(()=>{class n{properties=[];text;size;sizesOptions=[{label:`xs`,value:`xs`},{label:`sm`,value:`sm`},{label:`md`,value:`md`},{label:`lg`,value:`lg`}];propertiesOptions=[{value:`screenLock`,label:`Screen Lock`}];ngOnInit(){this.restore()}onChangeCheckbox(l){l.includes(`screenLock`)&&setTimeout(()=>{this.properties=[]},2e3)}restore(){this.size=`lg`,this.text=null}static ɵfac=function(i){return new(i||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-loading-overlay-labs`]],standalone:!1,decls:13,vars:8,consts:[[`formProperties`,`ngForm`],[1,`sample-container`],[3,`p-screen-lock`,`p-text`,`p-size`],[1,`po-row`],[`name`,`text`,`p-label`,`Text`,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`properties`,`p-label`,`Properties`,1,`po-md-6`,3,`ngModelChange`,`p-change`,`ngModel`,`p-options`],[`name`,`size`,`p-label`,`Size`,1,`po-md-6`,3,`ngModelChange`,`ngModel`,`p-options`],[1,`po-md-3`],[`p-label`,`Sample Restore`,3,`p-click`]],template:function(i,a){if(i&1){let m=YO();Qc(0,`div`,1),vu(1,`po-loading-overlay`,2),Kg(),vu(2,`po-divider`),Qc(3,`form`,null,0)(5,`div`,3)(6,`po-input`,4),z0(),Kb(`ngModelChange`,function(r){return B_(m),Tk(a.text,r)||(a.text=r),U_(r)}),Kg(),Qc(7,`po-checkbox-group`,5),z0(),Kb(`ngModelChange`,function(r){return B_(m),Tk(a.properties,r)||(a.properties=r),U_(r)}),vt(`p-change`,function(r){return a.onChangeCheckbox(r)}),Kg()(),Qc(8,`div`,3)(9,`po-radio-group`,6),z0(),Kb(`ngModelChange`,function(r){return B_(m),Tk(a.size,r)||(a.size=r),U_(r)}),Kg()(),Qc(10,`div`,3)(11,`div`,7)(12,`po-button`,8),vt(`p-click`,function(){return a.restore()}),Kg()()()()}i&2&&(wg(),Rb(`p-screen-lock`,a.properties?.includes(`screenLock`))(`p-text`,a.text)(`p-size`,a.size),wg(5),Yb(`ngModel`,a.text),W0(),wg(),Yb(`ngModel`,a.properties),Rb(`p-options`,a.propertiesOptions),W0(),wg(2),Yb(`ngModel`,a.size),Rb(`p-options`,a.sizesOptions),W0())},dependencies:[AZ,MZ,TZ,QL,WL,oi,Nf,I4,j4,Zte,$P],styles:[`.sample-container[_ngcontent-%COMP%]{position:relative;height:300px}`],changeDetection:1})}return n})();var ie=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-loading-overlay-labs-view`]],standalone:!1,decls:31,vars:0,consts:[[`id`,`sample-po-loading-overlay-labs`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-loading-overlay-labs/sample-po-loading-overlay-labs.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-loading-overlay-labs/sample-po-loading-overlay-labs.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`],[`p-label`,`CSS`],[`data-file`,`sample-po-loading-overlay-labs/sample-po-loading-overlay-labs.component.css`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`css`]],template:function(i,a){i&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Loading Overlay Labs`),Kg()(),Qc(4,`div`)(5,`po-tabs`,2)(6,`po-tab`,3)(7,`div`,4),vu(8,`sample-po-loading-overlay-labs`),Kg()(),Qc(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-loading-overlay-labs/sample-po-loading-overlay-labs.component.html`),Kg(),Qc(13,`div`,7)(14,`pre`,8),Sk(15,`<div class="sample-container">
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
`),Kg()()()(),Qc(16,`po-tab`,9)(17,`div`)(18,`label`,6),Sk(19,`sample-po-loading-overlay-labs/sample-po-loading-overlay-labs.component.ts`),Kg(),Qc(20,`div`,10)(21,`pre`,11),Sk(22,`import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
`),Kg()()()(),Qc(23,`po-tab`,12)(24,`div`)(25,`label`,6),Sk(26,`sample-po-loading-overlay-labs/sample-po-loading-overlay-labs.component.css`),Kg(),Qc(27,`div`,13)(28,`pre`,14),Sk(29,`.sample-container {
  position: relative;
  height: 300px;
}
`),Kg()()()()()(),vu(30,`hr`))},dependencies:[P,tre,are,ne],encapsulation:2,changeDetection:1})}return n})();var ae=(()=>{class n{poNotification=p(Ru);environment={urlServer:``,urlDB:``,userDB:``,passwordDB:``};isHideLoading=!0;connectionTest(){let l=`Connection ok`;this.isHideLoading=!1,setTimeout(()=>{this.isHideLoading=!0,this.poNotification.success(l)},450)}static ɵfac=function(i){return new(i||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-loading-overlay-connection-test`]],standalone:!1,decls:11,vars:6,consts:[[`formConfig`,`ngForm`],[3,`hidden`],[1,`po-row`],[`name`,`urlServer`,`p-clean`,``,`p-label`,`URL Server`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`urlDB`,`p-clean`,``,`p-label`,`URL Database`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`userDB`,`p-clean`,``,`p-label`,`User Database`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`name`,`passwordDB`,`p-clean`,``,`p-label`,`Password Database`,`p-required`,``,1,`po-md-6`,3,`ngModelChange`,`ngModel`],[`p-label`,`Connect`,1,`po-md-4`,3,`p-click`,`p-disabled`]],template:function(i,a){if(i&1){let m=YO();Qc(0,`form`,null,0)(2,`div`),vu(3,`po-loading-overlay`,1),Kg(),Qc(4,`div`,2)(5,`po-input`,3),z0(),Kb(`ngModelChange`,function(r){return B_(m),Tk(a.environment.urlServer,r)||(a.environment.urlServer=r),U_(r)}),Kg(),Qc(6,`po-input`,4),z0(),Kb(`ngModelChange`,function(r){return B_(m),Tk(a.environment.urlDB,r)||(a.environment.urlDB=r),U_(r)}),Kg(),Qc(7,`po-input`,5),z0(),Kb(`ngModelChange`,function(r){return B_(m),Tk(a.environment.userDB,r)||(a.environment.userDB=r),U_(r)}),Kg(),Qc(8,`po-password`,6),z0(),Kb(`ngModelChange`,function(r){return B_(m),Tk(a.environment.passwordDB,r)||(a.environment.passwordDB=r),U_(r)}),Kg()(),Qc(9,`div`,2)(10,`po-button`,7),vt(`p-click`,function(){B_(m);let r=ik(1);return a.connectionTest(),U_(r.reset())}),Kg()()()}if(i&2){let m=ik(1);wg(3),Rb(`hidden`,a.isHideLoading),wg(2),Yb(`ngModel`,a.environment.urlServer),W0(),wg(),Yb(`ngModel`,a.environment.urlDB),W0(),wg(),Yb(`ngModel`,a.environment.userDB),W0(),wg(),Yb(`ngModel`,a.environment.passwordDB),W0(),wg(2),Rb(`p-disabled`,m.invalid)}},dependencies:[AZ,MZ,TZ,QL,WL,oi,j4,joe,$P],encapsulation:2,changeDetection:1})}return n})();var le=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-loading-overlay-connection-test-view`]],standalone:!1,decls:24,vars:0,consts:[[`id`,`sample-po-loading-overlay-connection-test`,1,`sample-blockquote`],[1,`sample-title`,`po-font-text-large-bold`],[`p-size`,`2`],[`p-label`,`Preview`,`p-active`,``],[1,`docs-sample-container`],[`p-label`,`HTML`],[1,`doc-label-path`],[`data-file`,`sample-po-loading-overlay-connection-test/sample-po-loading-overlay-connection-test.component.html`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`html`],[`p-label`,`TS`],[`data-file`,`sample-po-loading-overlay-connection-test/sample-po-loading-overlay-connection-test.component.ts`,1,`docs-code-block`],[`appCodeHighlight`,``,1,`typescript`]],template:function(i,a){i&1&&(vu(0,`br`),Qc(1,`blockquote`,0)(2,`label`,1),Sk(3,`PO Loading Overlay - Connection Test`),Kg()(),Qc(4,`div`)(5,`po-tabs`,2)(6,`po-tab`,3)(7,`div`,4),vu(8,`sample-po-loading-overlay-connection-test`),Kg()(),Qc(9,`po-tab`,5)(10,`div`)(11,`label`,6),Sk(12,`sample-po-loading-overlay-connection-test/sample-po-loading-overlay-connection-test.component.html`),Kg(),Qc(13,`div`,7)(14,`pre`,8),Sk(15,`<form #formConfig="ngForm">
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
`),Kg()()()(),Qc(16,`po-tab`,9)(17,`div`)(18,`label`,6),Sk(19,`sample-po-loading-overlay-connection-test/sample-po-loading-overlay-connection-test.component.ts`),Kg(),Qc(20,`div`,10)(21,`pre`,11),Sk(22,`import { Component, inject, ChangeDetectionStrategy } from '@angular/core';

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
`),Kg()()()()()(),vu(23,`hr`))},dependencies:[P,tre,are,ae],encapsulation:2,changeDetection:1})}return n})();var re=(()=>{class n{router=p(An);openDoc(l){this.router.navigate([`/documentation`,l],{queryParams:{view:`doc`}})}static ɵfac=function(i){return new(i||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-loading-overlay-doc`]],standalone:!1,decls:255,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[`id`,`class-po-loading-overlay-component`,1,`docs-api-class-name`],[1,`doc-code`],[`href`,`https://po-ui.io/guides/theme-customization`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``],[1,`docs-api-h5`,`docs-api-method-header`],[1,`docs-api-properties-table`],[1,`docs-api-properties-header-row`],[1,`docs-api-properties-th`],[`id`,`prop-p-screen-lock`,1,`docs-api-properties-row`],[1,`docs-api-properties-name-cell`],[1,`docs-api-input-marker`],[1,`docs-api-input-alias`],[1,`docs-api-properties-type-cell`],[`pan`,``,1,`docs-api-property-type`,`boolean`],[1,`docs-api-property-default`],[1,`docs-api-property-description`],[`id`,`prop-p-size`,1,`docs-api-properties-row`],[`pan`,``,1,`docs-api-property-type`,`string`],[`id`,`prop-p-text`,1,`docs-api-properties-row`],[`href`,`/documentation/po-i18n`]],template:function(i,a){i&1&&(Qc(0,`div`,0)(1,`p`,1)(2,`code`),Sk(3,`import { PoLoadingModule } from '@po-ui/ng-components';`),Kg()(),Qc(4,`div`,2)(5,`p`),Sk(6,`Módulo do componente po-loading-overlay.`),Kg()(),Qc(7,`h3`,3),Sk(8,`Componente`),Kg(),Qc(9,`h4`,4)(10,`code`,5),Sk(11,`PoLoadingOverlayComponent`),Kg()(),Qc(12,`div`,2)(13,`p`),Sk(14,`Este componente mostra ao usuário uma imagem de `),Qc(15,`em`),Sk(16,`loading`),Kg(),Sk(17,` e bloqueia a p\xE1gina inteira ou o container escolhido,
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
`),Kg()()()(),Qc(185,`tr`,22)(186,`td`,15)(187,`div`,16)(188,`span`,17),Sk(189,` p-size`),vu(190,`br`),Kg()()(),Qc(191,`td`,18)(192,`code`,23),Sk(193,`string`),Kg()(),Qc(194,`td`,20)(195,`p`)(196,`code`),Sk(197,`lg`),Kg()()(),Qc(198,`td`,21)(199,`em`)(200,`strong`),Sk(201,`(opcional)`),Kg()(),Qc(202,`p`),Sk(203,`Define o tamanho do componente com base no tamanho do ícone de `),Qc(204,`em`),Sk(205,`loading`),Kg(),Sk(206,`.`),Kg(),Qc(207,`p`),Sk(208,`Tamanhos disponíveis para o `),Qc(209,`em`),Sk(210,`loading`),Kg(),Sk(211,`:`),Kg(),Qc(212,`ul`)(213,`li`)(214,`code`),Sk(215,`xs`),Kg(),Sk(216,`: 1rem`),Kg(),Qc(217,`li`)(218,`code`),Sk(219,`sm`),Kg(),Sk(220,`: 1.5rem`),Kg(),Qc(221,`li`)(222,`code`),Sk(223,`md`),Kg(),Sk(224,`: 3rem`),Kg(),Qc(225,`li`)(226,`code`),Sk(227,`lg`),Kg(),Sk(228,`: 5rem (valor padrão)`),Kg()()()(),Qc(229,`tr`,24)(230,`td`,15)(231,`div`,16)(232,`span`,17),Sk(233,` p-text`),vu(234,`br`),Kg()()(),Qc(235,`td`,18)(236,`code`,23),Sk(237,`string`),Kg()(),Qc(238,`td`,20)(239,`p`)(240,`code`),Sk(241,`Carregando`),Kg()()(),Qc(242,`td`,21)(243,`em`)(244,`strong`),Sk(245,`(opcional)`),Kg()(),Qc(246,`p`),Sk(247,`Texto a ser exibido no componente.`),Kg(),Qc(248,`blockquote`)(249,`p`),Sk(250,`O valor padrão será traduzido de acordo com o idioma configurado no `),Qc(251,`a`,25)(252,`strong`),Sk(253,`PoI18n`),Kg()(),Sk(254,` ou navegador.`),Kg()()()()()())},dependencies:[P],encapsulation:2,changeDetection:1})}return n})();function Se(n,fe){if(n&1&&(Qc(0,`div`,1),vu(1,`sample-po-loading-overlay-basic-view`)(2,`sample-po-loading-overlay-labs-view`)(3,`sample-po-loading-overlay-connection-test-view`),Kg()),n&2){let l=ek();Rb(`hidden`,l.activeTab!==`web`)}}var he=[{path:``,component:(()=>{class n{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab=`doc`;title=`Loading Overlay`;actions=[];toWeb={label:`Ver exemplos`,icon:`an an-browsers`,action:()=>this.changeTab(`web`)};toDoc={label:`Ver documentação`,icon:`an an-file-text`,action:()=>this.changeTab(`doc`)};back={label:`Voltar`,icon:`an an-arrow-left`,action:this.goBack.bind(this)};constructor(l,i){this.route=l,this.router=i}goBack(){this.router.navigate([`documentation`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(l=>{let i=l.view;this.hidePoWebSample=this.samplesLength===0,this.activeTab=this.hidePoWebSample?`doc`:i||`web`,this.title=`Loading Overlay · `+(this.activeTab===`web`?`Exemplos`:`Documentação`),this.actions=this.hidePoWebSample?[this.back]:[this.activeTab===`web`?this.toDoc:this.toWeb,this.back]})}changeTab(l){this.router.navigate([],{queryParams:{view:l},queryParamsHandling:`merge`})}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(i){return new(i||n)(I(ar),I(An))};static ɵcmp=Jn({type:n,selectors:[[`ng-component`]],standalone:!1,decls:4,vars:4,consts:[[3,`p-title`,`p-actions`],[3,`hidden`]],template:function(i,a){i&1&&(Qc(0,`po-page-default`,0),FO(1,Se,4,1,`div`,1),Qc(2,`div`,1),vu(3,`sample-po-loading-overlay-doc`),Kg()()),i&2&&(Rb(`p-title`,a.title)(`p-actions`,a.actions),wg(),VO(a.hidePoWebSample?-1:1),wg(),Rb(`hidden`,a.activeTab!==`doc`))},dependencies:[Mze,oe,ie,le,re],encapsulation:2,changeDetection:1})}return n})()}];var se=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵmod=ge({type:n});static ɵinj=de({imports:[GV.forChild(he),GV]})}return n})();var Ze=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵmod=ge({type:n});static ɵinj=de({imports:[M,se]})}return n})();export{Ze as DocPoLoadingOverlayModule};