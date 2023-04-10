gdjs.Suhat_32sceneCode = {};
gdjs.Suhat_32sceneCode.GDSmallYellowPlatformObjects1= [];
gdjs.Suhat_32sceneCode.GDSmallYellowPlatformObjects2= [];
gdjs.Suhat_32sceneCode.GDSmallYellowPlatformObjects3= [];
gdjs.Suhat_32sceneCode.GDSmallYellowPlatformObjects4= [];
gdjs.Suhat_32sceneCode.GDGreenPlayerObjects1= [];
gdjs.Suhat_32sceneCode.GDGreenPlayerObjects2= [];
gdjs.Suhat_32sceneCode.GDGreenPlayerObjects3= [];
gdjs.Suhat_32sceneCode.GDGreenPlayerObjects4= [];
gdjs.Suhat_32sceneCode.GDRightArrowRoundButtonObjects1= [];
gdjs.Suhat_32sceneCode.GDRightArrowRoundButtonObjects2= [];
gdjs.Suhat_32sceneCode.GDRightArrowRoundButtonObjects3= [];
gdjs.Suhat_32sceneCode.GDRightArrowRoundButtonObjects4= [];
gdjs.Suhat_32sceneCode.GDLeftArrowRoundButtonObjects1= [];
gdjs.Suhat_32sceneCode.GDLeftArrowRoundButtonObjects2= [];
gdjs.Suhat_32sceneCode.GDLeftArrowRoundButtonObjects3= [];
gdjs.Suhat_32sceneCode.GDLeftArrowRoundButtonObjects4= [];
gdjs.Suhat_32sceneCode.GDTopArrowRoundButtonObjects1= [];
gdjs.Suhat_32sceneCode.GDTopArrowRoundButtonObjects2= [];
gdjs.Suhat_32sceneCode.GDTopArrowRoundButtonObjects3= [];
gdjs.Suhat_32sceneCode.GDTopArrowRoundButtonObjects4= [];

gdjs.Suhat_32sceneCode.conditionTrue_0 = {val:false};
gdjs.Suhat_32sceneCode.condition0IsTrue_0 = {val:false};
gdjs.Suhat_32sceneCode.condition1IsTrue_0 = {val:false};


gdjs.Suhat_32sceneCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.Suhat_32sceneCode.GDGreenPlayerObjects2, gdjs.Suhat_32sceneCode.GDGreenPlayerObjects3);


gdjs.Suhat_32sceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Suhat_32sceneCode.GDGreenPlayerObjects3.length;i<l;++i) {
    if ( gdjs.Suhat_32sceneCode.GDGreenPlayerObjects3[i].getBehavior("PlatformerObject").isUsingControl("Left") ) {
        gdjs.Suhat_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.Suhat_32sceneCode.GDGreenPlayerObjects3[k] = gdjs.Suhat_32sceneCode.GDGreenPlayerObjects3[i];
        ++k;
    }
}
gdjs.Suhat_32sceneCode.GDGreenPlayerObjects3.length = k;}if (gdjs.Suhat_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Suhat_32sceneCode.GDGreenPlayerObjects3 */
{for(var i = 0, len = gdjs.Suhat_32sceneCode.GDGreenPlayerObjects3.length ;i < len;++i) {
    gdjs.Suhat_32sceneCode.GDGreenPlayerObjects3[i].flipX(true);
}
}}

}


{

/* Reuse gdjs.Suhat_32sceneCode.GDGreenPlayerObjects2 */

gdjs.Suhat_32sceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Suhat_32sceneCode.GDGreenPlayerObjects2.length;i<l;++i) {
    if ( gdjs.Suhat_32sceneCode.GDGreenPlayerObjects2[i].getBehavior("PlatformerObject").isUsingControl("Right") ) {
        gdjs.Suhat_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.Suhat_32sceneCode.GDGreenPlayerObjects2[k] = gdjs.Suhat_32sceneCode.GDGreenPlayerObjects2[i];
        ++k;
    }
}
gdjs.Suhat_32sceneCode.GDGreenPlayerObjects2.length = k;}if (gdjs.Suhat_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Suhat_32sceneCode.GDGreenPlayerObjects2 */
{for(var i = 0, len = gdjs.Suhat_32sceneCode.GDGreenPlayerObjects2.length ;i < len;++i) {
    gdjs.Suhat_32sceneCode.GDGreenPlayerObjects2[i].flipX(false);
}
}}

}


};gdjs.Suhat_32sceneCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.Suhat_32sceneCode.GDGreenPlayerObjects1, gdjs.Suhat_32sceneCode.GDGreenPlayerObjects2);


gdjs.Suhat_32sceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Suhat_32sceneCode.GDGreenPlayerObjects2.length;i<l;++i) {
    if ( gdjs.Suhat_32sceneCode.GDGreenPlayerObjects2[i].getBehavior("PlatformerObject").isMovingEvenALittle() ) {
        gdjs.Suhat_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.Suhat_32sceneCode.GDGreenPlayerObjects2[k] = gdjs.Suhat_32sceneCode.GDGreenPlayerObjects2[i];
        ++k;
    }
}
gdjs.Suhat_32sceneCode.GDGreenPlayerObjects2.length = k;}if (gdjs.Suhat_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Suhat_32sceneCode.GDGreenPlayerObjects2 */
{for(var i = 0, len = gdjs.Suhat_32sceneCode.GDGreenPlayerObjects2.length ;i < len;++i) {
    gdjs.Suhat_32sceneCode.GDGreenPlayerObjects2[i].setAnimationName("walk");
}
}
{ //Subevents
gdjs.Suhat_32sceneCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

/* Reuse gdjs.Suhat_32sceneCode.GDGreenPlayerObjects1 */

gdjs.Suhat_32sceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Suhat_32sceneCode.GDGreenPlayerObjects1.length;i<l;++i) {
    if ( !(gdjs.Suhat_32sceneCode.GDGreenPlayerObjects1[i].getBehavior("PlatformerObject").isMovingEvenALittle()) ) {
        gdjs.Suhat_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.Suhat_32sceneCode.GDGreenPlayerObjects1[k] = gdjs.Suhat_32sceneCode.GDGreenPlayerObjects1[i];
        ++k;
    }
}
gdjs.Suhat_32sceneCode.GDGreenPlayerObjects1.length = k;}if (gdjs.Suhat_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Suhat_32sceneCode.GDGreenPlayerObjects1 */
{for(var i = 0, len = gdjs.Suhat_32sceneCode.GDGreenPlayerObjects1.length ;i < len;++i) {
    gdjs.Suhat_32sceneCode.GDGreenPlayerObjects1[i].setAnimationName("stand");
}
}}

}


};gdjs.Suhat_32sceneCode.mapOfGDgdjs_46Suhat_9532sceneCode_46GDLeftArrowRoundButtonObjects1Objects = Hashtable.newFrom({"LeftArrowRoundButton": gdjs.Suhat_32sceneCode.GDLeftArrowRoundButtonObjects1});
gdjs.Suhat_32sceneCode.eventsList2 = function(runtimeScene) {

{


gdjs.Suhat_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.Suhat_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.Suhat_32sceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("GreenPlayer"), gdjs.Suhat_32sceneCode.GDGreenPlayerObjects1);
/* Reuse gdjs.Suhat_32sceneCode.GDLeftArrowRoundButtonObjects1 */
{for(var i = 0, len = gdjs.Suhat_32sceneCode.GDGreenPlayerObjects1.length ;i < len;++i) {
    gdjs.Suhat_32sceneCode.GDGreenPlayerObjects1[i].getBehavior("PlatformerObject").simulateControl("Left");
}
}{for(var i = 0, len = gdjs.Suhat_32sceneCode.GDLeftArrowRoundButtonObjects1.length ;i < len;++i) {
    gdjs.Suhat_32sceneCode.GDLeftArrowRoundButtonObjects1[i].setHeight(110);
}
}{for(var i = 0, len = gdjs.Suhat_32sceneCode.GDLeftArrowRoundButtonObjects1.length ;i < len;++i) {
    gdjs.Suhat_32sceneCode.GDLeftArrowRoundButtonObjects1[i].setWidth(110);
}
}}

}


};gdjs.Suhat_32sceneCode.mapOfGDgdjs_46Suhat_9532sceneCode_46GDLeftArrowRoundButtonObjects1Objects = Hashtable.newFrom({"LeftArrowRoundButton": gdjs.Suhat_32sceneCode.GDLeftArrowRoundButtonObjects1});
gdjs.Suhat_32sceneCode.mapOfGDgdjs_46Suhat_9532sceneCode_46GDRightArrowRoundButtonObjects1Objects = Hashtable.newFrom({"RightArrowRoundButton": gdjs.Suhat_32sceneCode.GDRightArrowRoundButtonObjects1});
gdjs.Suhat_32sceneCode.eventsList3 = function(runtimeScene) {

{


gdjs.Suhat_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.Suhat_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.Suhat_32sceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("GreenPlayer"), gdjs.Suhat_32sceneCode.GDGreenPlayerObjects1);
/* Reuse gdjs.Suhat_32sceneCode.GDRightArrowRoundButtonObjects1 */
{for(var i = 0, len = gdjs.Suhat_32sceneCode.GDGreenPlayerObjects1.length ;i < len;++i) {
    gdjs.Suhat_32sceneCode.GDGreenPlayerObjects1[i].getBehavior("PlatformerObject").simulateControl("Right");
}
}{for(var i = 0, len = gdjs.Suhat_32sceneCode.GDRightArrowRoundButtonObjects1.length ;i < len;++i) {
    gdjs.Suhat_32sceneCode.GDRightArrowRoundButtonObjects1[i].setHeight(110);
}
}{for(var i = 0, len = gdjs.Suhat_32sceneCode.GDRightArrowRoundButtonObjects1.length ;i < len;++i) {
    gdjs.Suhat_32sceneCode.GDRightArrowRoundButtonObjects1[i].setWidth(110);
}
}}

}


};gdjs.Suhat_32sceneCode.mapOfGDgdjs_46Suhat_9532sceneCode_46GDRightArrowRoundButtonObjects1Objects = Hashtable.newFrom({"RightArrowRoundButton": gdjs.Suhat_32sceneCode.GDRightArrowRoundButtonObjects1});
gdjs.Suhat_32sceneCode.mapOfGDgdjs_46Suhat_9532sceneCode_46GDTopArrowRoundButtonObjects1Objects = Hashtable.newFrom({"TopArrowRoundButton": gdjs.Suhat_32sceneCode.GDTopArrowRoundButtonObjects1});
gdjs.Suhat_32sceneCode.eventsList4 = function(runtimeScene) {

{


gdjs.Suhat_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.Suhat_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.Suhat_32sceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("GreenPlayer"), gdjs.Suhat_32sceneCode.GDGreenPlayerObjects1);
/* Reuse gdjs.Suhat_32sceneCode.GDTopArrowRoundButtonObjects1 */
{for(var i = 0, len = gdjs.Suhat_32sceneCode.GDGreenPlayerObjects1.length ;i < len;++i) {
    gdjs.Suhat_32sceneCode.GDGreenPlayerObjects1[i].getBehavior("PlatformerObject").simulateControl("Jump");
}
}{for(var i = 0, len = gdjs.Suhat_32sceneCode.GDTopArrowRoundButtonObjects1.length ;i < len;++i) {
    gdjs.Suhat_32sceneCode.GDTopArrowRoundButtonObjects1[i].setWidth(140);
}
}{for(var i = 0, len = gdjs.Suhat_32sceneCode.GDTopArrowRoundButtonObjects1.length ;i < len;++i) {
    gdjs.Suhat_32sceneCode.GDTopArrowRoundButtonObjects1[i].setHeight(140);
}
}}

}


};gdjs.Suhat_32sceneCode.mapOfGDgdjs_46Suhat_9532sceneCode_46GDTopArrowRoundButtonObjects1Objects = Hashtable.newFrom({"TopArrowRoundButton": gdjs.Suhat_32sceneCode.GDTopArrowRoundButtonObjects1});
gdjs.Suhat_32sceneCode.eventsList5 = function(runtimeScene) {

{


gdjs.Suhat_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.Suhat_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Suhat_32sceneCode.condition0IsTrue_0.val) {
{gdjs.evtTools.input.touchSimulateMouse(runtimeScene, true);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("GreenPlayer"), gdjs.Suhat_32sceneCode.GDGreenPlayerObjects1);

gdjs.Suhat_32sceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Suhat_32sceneCode.GDGreenPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Suhat_32sceneCode.GDGreenPlayerObjects1[i].getBehavior("PlatformerObject").isJumping() ) {
        gdjs.Suhat_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.Suhat_32sceneCode.GDGreenPlayerObjects1[k] = gdjs.Suhat_32sceneCode.GDGreenPlayerObjects1[i];
        ++k;
    }
}
gdjs.Suhat_32sceneCode.GDGreenPlayerObjects1.length = k;}if (gdjs.Suhat_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Suhat_32sceneCode.GDGreenPlayerObjects1 */
{for(var i = 0, len = gdjs.Suhat_32sceneCode.GDGreenPlayerObjects1.length ;i < len;++i) {
    gdjs.Suhat_32sceneCode.GDGreenPlayerObjects1[i].setAnimationName("swim");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("GreenPlayer"), gdjs.Suhat_32sceneCode.GDGreenPlayerObjects1);

gdjs.Suhat_32sceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Suhat_32sceneCode.GDGreenPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Suhat_32sceneCode.GDGreenPlayerObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.Suhat_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.Suhat_32sceneCode.GDGreenPlayerObjects1[k] = gdjs.Suhat_32sceneCode.GDGreenPlayerObjects1[i];
        ++k;
    }
}
gdjs.Suhat_32sceneCode.GDGreenPlayerObjects1.length = k;}if (gdjs.Suhat_32sceneCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Suhat_32sceneCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("GreenPlayer"), gdjs.Suhat_32sceneCode.GDGreenPlayerObjects1);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.Suhat_32sceneCode.GDGreenPlayerObjects1.length !== 0 ? gdjs.Suhat_32sceneCode.GDGreenPlayerObjects1[0] : null), true, "", 0);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("LeftArrowRoundButton"), gdjs.Suhat_32sceneCode.GDLeftArrowRoundButtonObjects1);

gdjs.Suhat_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.Suhat_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Suhat_32sceneCode.mapOfGDgdjs_46Suhat_9532sceneCode_46GDLeftArrowRoundButtonObjects1Objects, runtimeScene, true, false);
}if (gdjs.Suhat_32sceneCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Suhat_32sceneCode.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("LeftArrowRoundButton"), gdjs.Suhat_32sceneCode.GDLeftArrowRoundButtonObjects1);

gdjs.Suhat_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.Suhat_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Suhat_32sceneCode.mapOfGDgdjs_46Suhat_9532sceneCode_46GDLeftArrowRoundButtonObjects1Objects, runtimeScene, true, true);
}if (gdjs.Suhat_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Suhat_32sceneCode.GDLeftArrowRoundButtonObjects1 */
{for(var i = 0, len = gdjs.Suhat_32sceneCode.GDLeftArrowRoundButtonObjects1.length ;i < len;++i) {
    gdjs.Suhat_32sceneCode.GDLeftArrowRoundButtonObjects1[i].setWidth(100);
}
}{for(var i = 0, len = gdjs.Suhat_32sceneCode.GDLeftArrowRoundButtonObjects1.length ;i < len;++i) {
    gdjs.Suhat_32sceneCode.GDLeftArrowRoundButtonObjects1[i].setHeight(100);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("RightArrowRoundButton"), gdjs.Suhat_32sceneCode.GDRightArrowRoundButtonObjects1);

gdjs.Suhat_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.Suhat_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Suhat_32sceneCode.mapOfGDgdjs_46Suhat_9532sceneCode_46GDRightArrowRoundButtonObjects1Objects, runtimeScene, true, false);
}if (gdjs.Suhat_32sceneCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Suhat_32sceneCode.eventsList3(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("RightArrowRoundButton"), gdjs.Suhat_32sceneCode.GDRightArrowRoundButtonObjects1);

gdjs.Suhat_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.Suhat_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Suhat_32sceneCode.mapOfGDgdjs_46Suhat_9532sceneCode_46GDRightArrowRoundButtonObjects1Objects, runtimeScene, true, true);
}if (gdjs.Suhat_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Suhat_32sceneCode.GDRightArrowRoundButtonObjects1 */
{for(var i = 0, len = gdjs.Suhat_32sceneCode.GDRightArrowRoundButtonObjects1.length ;i < len;++i) {
    gdjs.Suhat_32sceneCode.GDRightArrowRoundButtonObjects1[i].setWidth(100);
}
}{for(var i = 0, len = gdjs.Suhat_32sceneCode.GDRightArrowRoundButtonObjects1.length ;i < len;++i) {
    gdjs.Suhat_32sceneCode.GDRightArrowRoundButtonObjects1[i].setHeight(100);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("TopArrowRoundButton"), gdjs.Suhat_32sceneCode.GDTopArrowRoundButtonObjects1);

gdjs.Suhat_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.Suhat_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Suhat_32sceneCode.mapOfGDgdjs_46Suhat_9532sceneCode_46GDTopArrowRoundButtonObjects1Objects, runtimeScene, true, false);
}if (gdjs.Suhat_32sceneCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Suhat_32sceneCode.eventsList4(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("TopArrowRoundButton"), gdjs.Suhat_32sceneCode.GDTopArrowRoundButtonObjects1);

gdjs.Suhat_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.Suhat_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Suhat_32sceneCode.mapOfGDgdjs_46Suhat_9532sceneCode_46GDTopArrowRoundButtonObjects1Objects, runtimeScene, true, true);
}if (gdjs.Suhat_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Suhat_32sceneCode.GDTopArrowRoundButtonObjects1 */
{for(var i = 0, len = gdjs.Suhat_32sceneCode.GDTopArrowRoundButtonObjects1.length ;i < len;++i) {
    gdjs.Suhat_32sceneCode.GDTopArrowRoundButtonObjects1[i].setWidth(100);
}
}{for(var i = 0, len = gdjs.Suhat_32sceneCode.GDTopArrowRoundButtonObjects1.length ;i < len;++i) {
    gdjs.Suhat_32sceneCode.GDTopArrowRoundButtonObjects1[i].setHeight(100);
}
}}

}


};

gdjs.Suhat_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Suhat_32sceneCode.GDSmallYellowPlatformObjects1.length = 0;
gdjs.Suhat_32sceneCode.GDSmallYellowPlatformObjects2.length = 0;
gdjs.Suhat_32sceneCode.GDSmallYellowPlatformObjects3.length = 0;
gdjs.Suhat_32sceneCode.GDSmallYellowPlatformObjects4.length = 0;
gdjs.Suhat_32sceneCode.GDGreenPlayerObjects1.length = 0;
gdjs.Suhat_32sceneCode.GDGreenPlayerObjects2.length = 0;
gdjs.Suhat_32sceneCode.GDGreenPlayerObjects3.length = 0;
gdjs.Suhat_32sceneCode.GDGreenPlayerObjects4.length = 0;
gdjs.Suhat_32sceneCode.GDRightArrowRoundButtonObjects1.length = 0;
gdjs.Suhat_32sceneCode.GDRightArrowRoundButtonObjects2.length = 0;
gdjs.Suhat_32sceneCode.GDRightArrowRoundButtonObjects3.length = 0;
gdjs.Suhat_32sceneCode.GDRightArrowRoundButtonObjects4.length = 0;
gdjs.Suhat_32sceneCode.GDLeftArrowRoundButtonObjects1.length = 0;
gdjs.Suhat_32sceneCode.GDLeftArrowRoundButtonObjects2.length = 0;
gdjs.Suhat_32sceneCode.GDLeftArrowRoundButtonObjects3.length = 0;
gdjs.Suhat_32sceneCode.GDLeftArrowRoundButtonObjects4.length = 0;
gdjs.Suhat_32sceneCode.GDTopArrowRoundButtonObjects1.length = 0;
gdjs.Suhat_32sceneCode.GDTopArrowRoundButtonObjects2.length = 0;
gdjs.Suhat_32sceneCode.GDTopArrowRoundButtonObjects3.length = 0;
gdjs.Suhat_32sceneCode.GDTopArrowRoundButtonObjects4.length = 0;

gdjs.Suhat_32sceneCode.eventsList5(runtimeScene);

return;

}

gdjs['Suhat_32sceneCode'] = gdjs.Suhat_32sceneCode;
