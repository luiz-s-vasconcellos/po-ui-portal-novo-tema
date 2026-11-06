import{Ar as Ig,Ei as WV,Er as H_,Fr as Jn,Hi as ar,Ja as vt,Li as ZO,Mr as Jc,Ri as Zg,Vi as _u,Xt as ere,ea as ge,er as An,fi as Rb,gi as Tk,kr as I,mt as Tze,nr as BO,qi as de,rt as Qae,va as nk,xi as VO,yi as U_}from"./chunk-DvS_Nb_w.js";import{n as P,t as M}from"./main-HXZZSDJT.js";var O=(()=>{class i{static ɵfac=function(n){return new(n||i)};static ɵcmp=Jn({type:i,selectors:[[`sample-po-combo-option-template-doc`]],standalone:!1,decls:69,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[1,`docs-api-class-name`],[1,`doc-code`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``]],template:function(n,p){n&1&&(Jc(0,`div`,0)(1,`p`,1)(2,`code`),Tk(3,`import { PoFieldModule } from '@po-ui/ng-components';`),Zg()(),Jc(4,`div`,2)(5,`p`),Tk(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-timepicker, po-upload, po-url e po-search-ai.`),Zg(),Jc(7,`blockquote`)(8,`p`),Tk(9,`Não esqueça de importar o módulo `),Jc(10,`code`),Tk(11,`FormsModule`),Zg(),Tk(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),Jc(13,`code`),Tk(14,`ReactiveFormsModule`),Zg(),Tk(15,`, ambos nativos do Angular.`),Zg()()(),Jc(16,`h3`,3),Tk(17,`Componente`),Zg(),Jc(18,`h4`,4)(19,`code`,5),Tk(20,`PoComboOptionTemplateDirective`),Zg()(),Jc(21,`div`,2)(22,`p`),Tk(23,`Esta diretiva permite personalizar o conteúdo dos itens exibidos na lista de opções do componente.`),Zg(),Jc(24,`blockquote`)(25,`p`),Tk(26,`Quando utilizada em dispositivos `),Jc(27,`em`),Tk(28,`mobile`),Zg(),Tk(29,` será exibido o componente nativo.`),Zg()(),Jc(30,`p`),Tk(31,`Para personalizar o conteúdo de cada item da lista deve-se utilizar a diretiva `),Jc(32,`code`),Tk(33,`p-combo-option-template`),Zg(),Tk(34,` com `),Jc(35,`code`),Tk(36,`ng-template`),Zg(),Tk(37,`
dentro da `),Jc(38,`em`),Tk(39,`tag`),Zg(),Jc(40,`code`),Tk(41,`po-combo`),Zg(),Tk(42,`.`),Zg(),Jc(43,`p`),Tk(44,`Para obter a referência do item atual utilize `),Jc(45,`code`),Tk(46,`let-option`),Zg(),Tk(47,`, com isso você terá acesso aos valores e poderá personalizar sua exibição.`),Zg(),Jc(48,`p`),Tk(49,`Esta diretiva compõe-se de dois meios para uso, de forma explícita tal como em `),Jc(50,`em`),Tk(51,`syntax sugar`),Zg(),Tk(52,`. Veja a seguir ambos, respectivamente:`),Zg(),Jc(53,`pre`)(54,`code`),Tk(55,`...
<po-combo
  name="combo"
  [(ngModel)]="combo"
  [p-options]="options">
    <ng-template p-combo-option-template let-option>
      <option-template [option]="option"></option-template>
    </ng-template>
</po-combo>
...
`),Zg()(),Jc(56,`pre`)(57,`code`),Tk(58,`...
<po-combo
  name="combo"
  [(ngModel)]="combo"
  [p-options]="options">
    <div *p-combo-option-template="let option">
      <option-template [option]="option"></option-template>
    </div>
</po-combo>
...
`),Zg()(),Jc(59,`p`),Tk(60,`Para o caso de personaliza\xE7\xE3o de op\xE7\xF5es com agrupamentos, deve-se seguir a mesma orienta\xE7\xE3o acima. Por\xE9m, cabe ao desenvolvedor
a responsabilidade de estiliza\xE7\xE3o dos elementos da lista, tais como t\xEDtulo e links dos grupos. Abaixo h\xE1 um exemplo de aplica\xE7\xE3o:`),Zg(),Jc(61,`pre`)(62,`code`),Tk(63,`...
<ng-template p-combo-option-template let-option>
  <ng-container *ngIf="option.options; then optionsGroupTitle; else optionsGroupList"></ng-container>
  <ng-template #optionsGroupTitle>
    <p class="po-combo-item-title" [innerHtml]="option.label"></p>
  </ng-template>
  <ng-template #optionsGroupList>
    <div class="po-combo-item">
      <div class="po-row">
        <po-avatar class="po-md-1" p-size="sm"></po-avatar>
        <div class="po-md-11" [innerHtml]="option.label"></div>
      </div>
    </div>
  </ng-template>
</ng-template>
...
`),Zg()()(),Jc(64,`div`,6)(65,`h4`,7),Tk(66,`Seletor`),Zg(),Jc(67,`pre`,8),Tk(68,`<[p-combo-option-template] >
</[p-combo-option-template]>
`),Zg()()())},dependencies:[P],encapsulation:2,changeDetection:1})}return i})();function j(i,R){if(i&1){let a=ZO();Jc(0,`po-tab`,4),vt(`p-click`,function(){U_(a);let p=nk();return H_(p.changeTab(`web`))}),Zg()}if(i&2){let a=nk();Rb(`p-active`,a.activeTab===`web`)}}var A=[{path:``,component:(()=>{class i{route;router;sub;hidePoWebSample=!0;samplesLength=0;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(a,n){this.route=a,this.router=n}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(a=>{let n=a.view;this.activeTab=n||(this.samplesLength>0?`web`:`doc`),this.hidePoWebSample=this.samplesLength===0})}changeTab(a){this.router.navigate([],{queryParams:{view:a},queryParamsHandling:`merge`}),this.activeTab=a}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(n){return new(n||i)(I(ar),I(An))};static ɵcmp=Jn({type:i,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:3,consts:[[`p-title`,`Combo Option Template`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Exemplos`,3,`p-active`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-active`]],template:function(n,p){n&1&&(Jc(0,`po-page-default`,0)(1,`po-tabs`,1),VO(2,j,1,1,`po-tab`,2),Jc(3,`po-tab`,3),vt(`p-click`,function(){return p.changeTab(`doc`)}),_u(4,`sample-po-combo-option-template-doc`),Zg()()()),n&2&&(Rb(`p-actions`,p.actions),Ig(2),BO(p.hidePoWebSample?-1:2),Ig(),Rb(`p-active`,p.activeTab===`doc`))},dependencies:[Tze,Qae,ere,O],encapsulation:2,changeDetection:1})}return i})()}];var F=(()=>{class i{static ɵfac=function(n){return new(n||i)};static ɵmod=ge({type:i});static ɵinj=de({imports:[WV.forChild(A),WV]})}return i})();var Y=(()=>{class i{static ɵfac=function(n){return new(n||i)};static ɵmod=ge({type:i});static ɵinj=de({imports:[M,F]})}return i})();export{Y as DocPoComboOptionTemplateModule};