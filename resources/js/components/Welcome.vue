<template>
        <div class="flex-center position-ref full-height">
            <div class="content">
                <div class="title m-b-md">
                    {{title}}
                </div>
                <div class="links">
                    <a href="https://www.linkedin.com/in/mohit-paudel-0b3186140/">Contact developer via LinkedIn</a>
                    <a href="https://github.com/MohitP197">Contact Developer Via GitHub</a>
                    <a href="https://mohitpaudel.weebly.com">Via Website</a>
                </div>
            </div>
        </div>
    </template>
    <script>
        export default {
            //props is for accessing the data from the welcome.blade
            props: ['title']
        }
    </script>
    <style scoped>
        html, body {
            background-color: #fff;
            color: #636b6f;
            font-family: 'Raleway', sans-serif;
            font-weight: 100;
            height: 100vh;
            margin: 0;
        }

        .full-height {
            height: 100vh;
        }

        .flex-center {
            align-items: center;
            display: flex;
            justify-content: center;
        }

        .position-ref {
            position: relative;
        }

        .top-right {
            position: absolute;
            right: 10px;
            top: 18px;
        }

        .content {
            text-align: center;
        }

        .title {
            font-size: 84px;
        }

        .links > a {
            color: #636b6f;
            padding: 0 25px;
            font-size: 12px;
            font-weight: 600;
            letter-spacing: .1rem;
            text-decoration: none;
            text-transform: uppercase;
        }

        .m-b-md {
            margin-bottom: 30px;
        }
    </style>