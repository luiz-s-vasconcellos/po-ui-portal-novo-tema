import{m as P,p as M}from"./main-MOTCU2CE.js";import{Ar as I$1,Lr as Kg,Oi as VO,Pn as tre,Pr as Jn,Pt as are,Ti as U_,Ui as YO,Va as p,W as Mze,Zi as ar,ar as An,cr as B_,gi as Rb,io as vu,li as Qc,lt as Ss,na as de,oo as wg,ro as vt,sa as ek,ua as ge,vi as Sk,wr as GV,xr as FO}from"./chunk-DtUf9FxZ.js";var F=(()=>{class i{router=p(An);openDoc(n){this.router.navigate([`/documentation`,n],{queryParams:{view:`doc`}})}static ɵfac=function(a){return new(a||i)};static ɵcmp=Jn({type:i,selectors:[[`sample-po-combo-option-template-doc`]],standalone:!1,decls:73,vars:0,consts:[[1,`docs-api`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-related`],[`p-value`,`Combo`,3,`p-click`],[1,`docs-api-h3`],[`id`,`class-po-combo-option-template-directive`,1,`docs-api-class-name`],[1,`doc-code`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``]],template:function(a,p){a&1&&(Qc(0,`div`,0)(1,`p`,1)(2,`code`),Sk(3,`import { PoFieldModule } from '@po-ui/ng-components';`),Kg()(),Qc(4,`div`,2)(5,`p`),Sk(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datetimepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-timepicker, po-upload, po-url e po-search-ai.`),Kg(),Qc(7,`blockquote`)(8,`p`),Sk(9,`Não esqueça de importar o módulo `),Qc(10,`code`),Sk(11,`FormsModule`),Kg(),Sk(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),Qc(13,`code`),Sk(14,`ReactiveFormsModule`),Kg(),Sk(15,`, ambos nativos do Angular.`),Kg()()(),Qc(16,`blockquote`,3)(17,`strong`),Sk(18,`Faz parte de:`),Kg(),Qc(19,`po-tag`,4),vt(`p-click`,function(){return p.openDoc(`po-combo`)}),Kg()(),Qc(20,`h3`,5),Sk(21,`Componente`),Kg(),Qc(22,`h4`,6)(23,`code`,7),Sk(24,`PoComboOptionTemplateDirective`),Kg()(),Qc(25,`div`,2)(26,`p`),Sk(27,`Esta diretiva permite personalizar o conteúdo dos itens exibidos na lista de opções do componente.`),Kg(),Qc(28,`blockquote`)(29,`p`),Sk(30,`Quando utilizada em dispositivos `),Qc(31,`em`),Sk(32,`mobile`),Kg(),Sk(33,` será exibido o componente nativo.`),Kg()(),Qc(34,`p`),Sk(35,`Para personalizar o conteúdo de cada item da lista deve-se utilizar a diretiva `),Qc(36,`code`),Sk(37,`p-combo-option-template`),Kg(),Sk(38,` com `),Qc(39,`code`),Sk(40,`ng-template`),Kg(),Sk(41,`
dentro da `),Qc(42,`em`),Sk(43,`tag`),Kg(),Qc(44,`code`),Sk(45,`po-combo`),Kg(),Sk(46,`.`),Kg(),Qc(47,`p`),Sk(48,`Para obter a referência do item atual utilize `),Qc(49,`code`),Sk(50,`let-option`),Kg(),Sk(51,`, com isso você terá acesso aos valores e poderá personalizar sua exibição.`),Kg(),Qc(52,`p`),Sk(53,`Esta diretiva compõe-se de dois meios para uso, de forma explícita tal como em `),Qc(54,`em`),Sk(55,`syntax sugar`),Kg(),Sk(56,`. Veja a seguir ambos, respectivamente:`),Kg(),Qc(57,`pre`)(58,`code`),Sk(59,`...
<po-combo
  name="combo"
  [(ngModel)]="combo"
  [p-options]="options">
    <ng-template p-combo-option-template let-option>
      <option-template [option]="option"></option-template>
    </ng-template>
</po-combo>
...
`),Kg()(),Qc(60,`pre`)(61,`code`),Sk(62,`...
<po-combo
  name="combo"
  [(ngModel)]="combo"
  [p-options]="options">
    <div *p-combo-option-template="let option">
      <option-template [option]="option"></option-template>
    </div>
</po-combo>
...
`),Kg()(),Qc(63,`p`),Sk(64,`Para o caso de personaliza\xE7\xE3o de op\xE7\xF5es com agrupamentos, deve-se seguir a mesma orienta\xE7\xE3o acima. Por\xE9m, cabe ao desenvolvedor
a responsabilidade de estiliza\xE7\xE3o dos elementos da lista, tais como t\xEDtulo e links dos grupos. Abaixo h\xE1 um exemplo de aplica\xE7\xE3o:`),Kg(),Qc(65,`pre`)(66,`code`),Sk(67,`...
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
`),Kg()()(),Qc(68,`div`,8)(69,`h4`,9),Sk(70,`Seletor`),Kg(),Qc(71,`pre`,10),Sk(72,`<[p-combo-option-template] >
</[p-combo-option-template]>
`),Kg()()())},dependencies:[P,Ss],encapsulation:2,changeDetection:1})}return i})();function I(i,N){if(i&1){let n=YO();Qc(0,`po-tab`,4),vt(`p-click`,function(){B_(n);let p=ek();return U_(p.changeTab(`web`))}),Kg()}if(i&2){let n=ek();Rb(`p-active`,n.activeTab===`web`)}}var H=[{path:``,component:(()=>{class i{route;router;sub;hidePoWebSample=!0;samplesLength=0;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(n,a){this.route=n,this.router=a}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(n=>{let a=n.view;this.hidePoWebSample=this.samplesLength===0,this.activeTab=this.hidePoWebSample?`doc`:a||`web`})}changeTab(n){this.router.navigate([],{queryParams:{view:n},queryParamsHandling:`merge`}),this.activeTab=n}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(a){return new(a||i)(I$1(ar),I$1(An))};static ɵcmp=Jn({type:i,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:3,consts:[[`p-title`,`Combo Option Template`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Exemplos`,3,`p-active`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-active`]],template:function(a,p){a&1&&(Qc(0,`po-page-default`,0)(1,`po-tabs`,1),FO(2,I,1,1,`po-tab`,2),Qc(3,`po-tab`,3),vt(`p-click`,function(){return p.changeTab(`doc`)}),vu(4,`sample-po-combo-option-template-doc`),Kg()()()),a&2&&(Rb(`p-actions`,p.actions),wg(2),VO(p.hidePoWebSample?-1:2),wg(),Rb(`p-active`,p.activeTab===`doc`))},dependencies:[Mze,tre,are,F],encapsulation:2,changeDetection:1})}return i})()}];var j=(()=>{class i{static ɵfac=function(a){return new(a||i)};static ɵmod=ge({type:i});static ɵinj=de({imports:[GV.forChild(H),GV]})}return i})();var ie=(()=>{class i{static ɵfac=function(a){return new(a||i)};static ɵmod=ge({type:i});static ɵinj=de({imports:[M,j]})}return i})();export{ie as DocPoComboOptionTemplateModule};