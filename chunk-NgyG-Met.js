import{m as P,p as M}from"./main-5ZHUK4IE.js";import{Ar as I$1,Lr as Kg,Oi as VO,Pn as tre,Pr as Jn,Pt as are,Ti as U_,Ui as YO,W as Mze,Zi as ar,ar as An,cr as B_,gi as Rb,io as vu,li as Qc,na as de,oo as wg,ro as vt,sa as ek,ua as ge,vi as Sk,wr as GV,xr as FO}from"./chunk-DtUf9FxZ.js";var I=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵcmp=Jn({type:n,selectors:[[`sample-po-table-cell-template-doc`]],standalone:!1,decls:71,vars:0,consts:[[1,`docs-api`],[1,`docs-api-part-of`],[`href`,`/documentation/po-table?view=doc`],[1,`docs-api-module-import`],[1,`docs-api-class-description`],[1,`docs-api-h3`],[`id`,`class-po-table-cell-template-directive`,1,`docs-api-class-name`],[1,`doc-code`],[1,`docs-api-directive-selectors`],[1,`docs-api-class-selector-label`],[`appCodeHighlight`,``]],template:function(i,l){i&1&&(Qc(0,`div`,0)(1,`p`,1),Sk(2,` Faz parte de `),Qc(3,`a`,2),Sk(4,`Table`),Kg(),Sk(5,`. `),Kg(),Qc(6,`p`,3)(7,`code`),Sk(8,`import { PoTableModule } from '@po-ui/ng-components';`),Kg()(),Qc(9,`div`,4)(10,`p`),Sk(11,`Módulo do componente po-table`),Kg()(),Qc(12,`h3`,5),Sk(13,`Componente`),Kg(),Qc(14,`h4`,6)(15,`code`,7),Sk(16,`PoTableCellTemplateDirective`),Kg()(),Qc(17,`div`,4)(18,`p`),Sk(19,`Esta diretiva permite que seja poss\xEDvel alterar o conte\xFAdo das c\xE9lulas de uma coluna, para que os valores possam ser exibidos
de acordo com a necessidade do usu\xE1rio.`),Kg(),Qc(20,`p`),Sk(21,`Em seu uso, deve-se apenas adicionar a diretiva `),Qc(22,`strong`),Sk(23,`p-table-cell-template`),Kg(),Sk(24,` à tag `),Qc(25,`code`),Sk(26,`ng-template`),Kg(),Sk(27,`.`),Kg(),Qc(28,`p`),Sk(29,`Retorno:`),Kg(),Qc(30,`ul`)(31,`li`)(32,`code`),Sk(33,`column`),Kg(),Sk(34,`: conteúdo da coluna corrente.`),Kg(),Qc(35,`li`)(36,`code`),Sk(37,`row`),Kg(),Sk(38,`: conteúdo da linha corrente`),Kg()(),Qc(39,`p`),Sk(40,`Modo de uso:`),Kg(),Qc(41,`pre`)(42,`code`),Sk(43,`...
<po-table
  [p-columns]="columns"
  [p-items]="items">
    <ng-template p-table-cell-template let-column="column" let-row="row">
     <div *ngIf="column.property === 'status' && row.status === 'CANCELED'">
       <h1 [style.background]="'red'">CANCELADA</h1>
       <span (click)="onClick()"><small>clique aqui</small></span>
     </div>
     <h1 *ngIf="column.property === 'status' && row.status === 'FINISHED'" [style.background]="'green'">FINALIZADA</h1>
     <h1 *ngIf="column.property === 'status' && row.status === 'OPENED'" [style.background]="'orange'">ABERTA</h1>
     <h1 *ngIf="column.property === 'status2'">Conte\xFAdo do status 2</h1>
     <h1 *ngIf="column.property === 'status3'">Conte\xFAdo do status 3</h1>
   </ng-template>
...
`),Kg()(),Qc(44,`blockquote`)(45,`p`),Sk(46,`No exemplo acima, o usuário tem como retorno `),Qc(47,`code`),Sk(48,`row`),Kg(),Sk(49,` e a `),Qc(50,`code`),Sk(51,`column`),Kg(),Sk(52,` corrente, neste caso ele tem total liberdade para manipular os objetos.`),Kg()(),Qc(53,`p`),Sk(54,`Abaixo, a declaração dos dados de entrada do PO-TABLE para o uso da directiva.`),Kg(),Qc(55,`pre`)(56,`code`),Sk(57,`...
export class AppComponent {

   items = [{
     code: 1200,
     product: 'Rice',
     status: 'CANCELED',
     status2: '',
     status3: ''
     },{
     code: 1355,
     product: 'Bean',
     status: 'FINISHED',
     status2: '',
     status3: ''
     }];

   columns = [
      { property: 'code', label: 'ID' },
      { property: 'product', label: 'PRODUTO' },
      { property: 'status', label: 'STATUS', type: 'cellTemplate' },
      { property: 'status2', label: 'STATUS 2', type: 'cellTemplate' },
      { property: 'status3', label: 'STATUS 3', type: 'cellTemplate' }
   ];
}
...
`),Kg()(),Qc(58,`blockquote`)(59,`p`),Sk(60,`Observação: Sempre adicionar o `),Qc(61,`strong`),Sk(62,`type`),Kg(),Sk(63,` da coluna que deseja manipular com a directiva como `),Qc(64,`code`),Sk(65,`cellTemplate`),Kg()()()(),Qc(66,`div`,8)(67,`h4`,9),Sk(68,`Seletor`),Kg(),Qc(69,`pre`,10),Sk(70,`<[p-table-cell-template] >
</[p-table-cell-template]>
`),Kg()()())},dependencies:[P],encapsulation:2,changeDetection:1})}return n})();function N(n,R){if(n&1){let a=YO();Qc(0,`po-tab`,4),vt(`p-click`,function(){B_(a);let l=ek();return U_(l.changeTab(`web`))}),Kg()}if(n&2){let a=ek();Rb(`p-active`,a.activeTab===`web`)}}var q=[{path:``,component:(()=>{class n{route;router;sub;hidePoWebSample=!0;samplesLength=0;activeTab=`doc`;actions=[{label:`Documentação`,action:this.goBack.bind(this),icon:`an an-file-text`},{label:`Colabore`,action:this.improveDocs.bind(this)}];constructor(a,i){this.route=a,this.router=i}goBack(){this.router.navigate([`documentation`])}improveDocs(){this.router.navigate([`guides/development-flow`])}ngOnInit(){this.sub=this.route.queryParams.subscribe(a=>{let i=a.view;this.hidePoWebSample=this.samplesLength===0,this.activeTab=this.hidePoWebSample?`doc`:i||`web`})}changeTab(a){this.router.navigate([],{queryParams:{view:a},queryParamsHandling:`merge`}),this.activeTab=a}ngOnDestroy(){this.sub.unsubscribe()}static ɵfac=function(i){return new(i||n)(I$1(ar),I$1(An))};static ɵcmp=Jn({type:n,selectors:[[`ng-component`]],standalone:!1,decls:5,vars:3,consts:[[`p-title`,`Table Cell Template`,3,`p-actions`],[`p-size`,`1`],[`p-label`,`Exemplos`,3,`p-active`],[`p-label`,`Documentação`,3,`p-click`,`p-active`],[`p-label`,`Exemplos`,3,`p-click`,`p-active`]],template:function(i,l){i&1&&(Qc(0,`po-page-default`,0)(1,`po-tabs`,1),FO(2,N,1,1,`po-tab`,2),Qc(3,`po-tab`,3),vt(`p-click`,function(){return l.changeTab(`doc`)}),vu(4,`sample-po-table-cell-template-doc`),Kg()()()),i&2&&(Rb(`p-actions`,l.actions),wg(2),VO(l.hidePoWebSample?-1:2),wg(),Rb(`p-active`,l.activeTab===`doc`))},dependencies:[Mze,tre,are,I],encapsulation:2,changeDetection:1})}return n})()}];var k=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵmod=ge({type:n});static ɵinj=de({imports:[GV.forChild(q),GV]})}return n})();var X=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵmod=ge({type:n});static ɵinj=de({imports:[M,k]})}return n})();export{X as DocPoTableCellTemplateModule};