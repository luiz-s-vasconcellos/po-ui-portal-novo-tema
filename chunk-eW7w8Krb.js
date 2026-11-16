import{m as P,p as M}from"./main-5ZHUK4IE.js";import{Ar as I,Lr as Kg,Oi as VO,Pn as tre,Pr as Jn,Pt as are,Ti as U_,Ui as YO,W as Mze,Zi as ar,ar as An,cr as B_,gi as Rb,io as vu,li as Qc,na as de,oo as wg,ro as vt,sa as ek,ua as ge,vi as Sk,wr as GV,xr as FO}from"./chunk-DtUf9FxZ.js";var w=(()=>{class i{static ɵfac=function(n){return new(n||i)};static ɵcmp=Jn({type:i,selectors:[[`sample-po-combo-option-template-doc`]],standalone:!1,decls:74,vars:0,consts:[[1,`docs-api`],[1,`docs-api-part-of`],[`href`,`/documentation/po-combo?view=doc`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[`id`,`class-po-combo-option-template-directive`,1,`docs-api-class-name`],[1,`doc-code`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``]],template:function(n,p){n&1&&(Qc(0,`div`,0)(1,`p`,1),Sk(2,` Faz parte de `),Qc(3,`a`,2),Sk(4,`Combo`),Kg(),Sk(5,`. `),Kg(),Qc(6,`p`,3)(7,`code`),Sk(8,`import { PoFieldModule } from '@po-ui/ng-components';`),Kg()(),Qc(9,`div`,4)(10,`p`),Sk(11,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-timepicker, po-upload, po-url e po-search-ai.`),Kg(),Qc(12,`blockquote`)(13,`p`),Sk(14,`Não esqueça de importar o módulo `),Qc(15,`code`),Sk(16,`FormsModule`),Kg(),Sk(17,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),Qc(18,`code`),Sk(19,`ReactiveFormsModule`),Kg(),Sk(20,`, ambos nativos do Angular.`),Kg()()(),Qc(21,`h3`,5),Sk(22,`Componente`),Kg(),Qc(23,`h4`,6)(24,`code`,7),Sk(25,`PoComboOptionTemplateDirective`),Kg()(),Qc(26,`div`,4)(27,`p`),Sk(28,`Esta diretiva permite personalizar o conteúdo dos itens exibidos na lista de opções do componente.`),Kg(),Qc(29,`blockquote`)(30,`p`),Sk(31,`Quando utilizada em dispositivos `),Qc(32,`em`),Sk(33,`mobile`),Kg(),Sk(34,` será exibido o componente nativo.`),Kg()(),Qc(35,`p`),Sk(36,`Para personalizar o conteúdo de cada item da lista deve-se utilizar a diretiva `),Qc(37,`code`),Sk(38,`p-combo-option-template`),Kg(),Sk(39,` com `),Qc(40,`code`),Sk(41,`ng-template`),Kg(),Sk(42,`
dentro da `),Qc(43,`em`),Sk(44,`tag`),Kg(),Qc(45,`code`),Sk(46,`po-combo`),Kg(),Sk(47,`.`),Kg(),Qc(48,`p`),Sk(49,`Para obter a referência do item atual utilize `),Qc(50,`code`),Sk(51,`let-option`),Kg(),Sk(52,`, com isso você terá acesso aos valores e poderá personalizar sua exibição.`),Kg(),Qc(53,`p`),Sk(54,`Esta diretiva compõe-se de dois meios para uso, de forma explícita tal como em `),Qc(55,`em`),Sk(56,`syntax sugar`),Kg(),Sk(57,`. Veja a seguir ambos, respectivamente:`),Kg(),Qc(58,`pre`)(59,`code`),Sk(60,`...
<po-combo
  name="combo"
  [(ngModel)]="combo"
  [p-options]="options">
    <ng-template p-combo-option-template let-option>
      <option-template [option]="option"></option-template>
    </ng-template>
</po-combo>
...
`),Kg()(),Qc(61,`pre`)(62,`code`),Sk(63,`...
<po-combo
  name="combo"
  [(ngModel)]="combo"
  [p-options]="options">
    <div *p-combo-option-template="let option">
      <option-template [option]="option"></option-template>
    </div>
</po-combo>
...
`),Kg()(),Qc(64,`p`),Sk(65,`Para o caso de personaliza\xE7\xE3o de op\xE7\xF5es com agrupamentos, deve-se seguir a mesma orienta\xE7\xE3o acima. Por\xE9m, cabe ao desenvolvedor
a responsabilidade de estiliza\xE7\xE3o dos elementos da lista, tais como t\xEDtulo e links dos grupos. Abaixo h\xE1 um exemplo de aplica\xE7\xE3o:`),Kg(),Qc(66,`pre`)(67,`code`),Sk(68,`...
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
`),Kg()()(),Qc(69,`div`,8)(70,`h4`,9),Sk(71,`Seletor`),Kg(),Qc(72,`pre`,10),Sk(73,`<[p-combo-option-template] >
</[p-combo-option-template]>
`),Kg()()())},dependencies:[P],encapsulation:2,changeDetection:1})}return i})();function j(i,R){if(i&1){let a=YO();Qc(0,`po-tab`,4),vt(`p-click`,function(){B_(a);let p=ek();return U_(p.changeTab(`web`))}),Kg()}if(i&2){let a=ek();Rb(`p-active`,a.activeTab===`web`)}}var A=[{path:``,component:(()=>{class i{route;router;sub;hidePoWebSample=!0;samplesLength=0;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(a,n){this.route=a,this.router=n}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(a=>{let n=a.view;this.hidePoWebSample=this.samplesLength===0,this.activeTab=this.hidePoWebSample?`doc`:n||`web`})}changeTab(a){this.router.navigate([],{queryParams:{view:a},queryParamsHandling:`merge`}),this.activeTab=a}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(n){return new(n||i)(I(ar),I(An))};static ɵcmp=Jn({type:i,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:3,consts:[[`p-title`,`Combo Option Template`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Exemplos`,3,`p-active`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-active`]],template:function(n,p){n&1&&(Qc(0,`po-page-default`,0)(1,`po-tabs`,1),FO(2,j,1,1,`po-tab`,2),Qc(3,`po-tab`,3),vt(`p-click`,function(){return p.changeTab(`doc`)}),vu(4,`sample-po-combo-option-template-doc`),Kg()()()),n&2&&(Rb(`p-actions`,p.actions),wg(2),VO(p.hidePoWebSample?-1:2),wg(),Rb(`p-active`,p.activeTab===`doc`))},dependencies:[Mze,tre,are,w],encapsulation:2,changeDetection:1})}return i})()}];var F=(()=>{class i{static ɵfac=function(n){return new(n||i)};static ɵmod=ge({type:i});static ɵinj=de({imports:[GV.forChild(A),GV]})}return i})();var Y=(()=>{class i{static ɵfac=function(n){return new(n||i)};static ɵmod=ge({type:i});static ɵinj=de({imports:[M,F]})}return i})();export{Y as DocPoComboOptionTemplateModule};