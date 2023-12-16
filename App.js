
import PropsFunction from"./Component/PropsFunction";
import PropsClass from"./Component/PropsClass";
import StateClassCom from"./Component/StateClassCom";
import StateFunction from"./Component/StateFunction";
import StateHoldObject from"./Component/StateHoldObject";
import ArrowPropss from"./Component/ArrowPropss";
import DefaultProps from "./Component/DefaultProps";
import List from"./Component/List";
import List1 from"./Component/List1";
import Button from"./Component/Button";
import Button2 from"./Component/Button2";
import Button3 from"./Component/Button3";
import ComponentLifeCycle from"./Component/ComponentLifeCycle";

export default function App()
{
  return(
    <div>
      <PropsFunction name="Jungkook"></PropsFunction>
      <PropsClass college="SKCT"> </PropsClass>
      <StateClassCom color="red"></StateClassCom>
      <StateFunction carName="Porche"></StateFunction>
       <StateHoldObject year="2000"></StateHoldObject> 
      <ArrowPropss place=" and Appa"></ArrowPropss>
      <DefaultProps></DefaultProps>
      <List></List>
      <List1></List1>
      <Button></Button>
      <Button2></Button2>
      <Button3></Button3>
      <ComponentLifeCycle></ComponentLifeCycle>
    </div>
  )
}

