angularjs-element-switch
==========================

AngularJS directive to create HTML element which lock like iOS switch element 


### USAGE

    <div switch-state="switchState" zbx-switch />

### SCSS

    .my-switch {
        position: relative;
        border: 1px solid $colorBorderDark;
        border-radius: $br4;
        float: left;
        width: 75px;
        height: 25px;
        line-height: 1;
        @include background(linear-gradient(#fff, $cg2));

        .switch {
            @include transition(all 1s);
            border: 1px solid green;
            background: green;
            border-radius: $br4;
            position: absolute;
            height: 23px;
            width: 35px;
            line-height: 20px;
            @include fontSemiBold($fs4);
            cursor: pointer;
            color: white;
            @include box-shadow(lighten($colorBorderDark, 10%) 0 0 2px 2px);
        }
    
        &.-off {
            .switch {
                left: 0;
                border-color: red;
                background: red;
            }
        }

        &.-on {
            .switch {
                right: 0;
                border-color: green;
                background: green;
            }
        }
    }
