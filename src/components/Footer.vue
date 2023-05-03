<template>
    <div class="card mt-3 main__footer">
      <div>
        <ul>
            <li style="--i: #a955ff; --j:#ea51ff;">
                <span class="icon"><i class="fab fa-facebook-f"></i></span>                
                <span class="titulo"> Facebook</span>
            </li>
            <li style="--i: #ffa9c6; --j:#f434e2;">
                <span class="icon"><i class="fab fa-instagram"></i></span>
                <span class="titulo"> Instagram</span>
            </li>
            <li style="--i: #56ccf2; --j:#2f80ed;">
                <span class="icon"><i class="fab fa-twitter"></i></span>               
                <span class="titulo"> Twitter</span>
            </li>
        </ul>
      </div>
    </div>
</template>
<style scoped>

.main__footer {
    background-color: #343a40;  
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    /* min-height: 10vh; */
    margin: auto;
}
ul{
    position: relative;
    display: flex;
    gap: 25px;
}
ul li {
    position: relative;
    list-style: none;
    width: 60px;
    height: 60px;
    border-radius: 60px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 10px 20px rgb(0, 0, 0, 0.75);
    transition: 0.5s;
}
ul li:hover{
    width: 170px;
    box-shadow: 0 10px 20px rgb(0, 0, 0, 0);
}
ul li::before{
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 50px;
    background: linear-gradient(45deg, var(--i), var(--j));
    opacity: 0;
    transform: 0.5s;
}
ul li:hover::before{
    opacity: 1;
}
ul li::after{
    content: "";
    position: absolute;
    top: 20px;
    width: 100%;
    height: 100%;
    border-radius: 60px;
    background: linear-gradient(45deg, var(--i), var(--j));
    opacity: 0;
    transform: 0.5s;
    filter: blur(10px);
}
ul li i{
    color: #fff;
    font-size: 0.75cm !important;
    transform: 0.5s;
    transition-delay: 0.25s;
}
ul li:hover i{
    font-size: 1cm;
    transform: scale(0);
    transition-delay: 0.25s;
}
ul span{
    position: absolute;
}
ul li .titulo{
    color: #fff;
    font-size: 0.5cm !important;
    transform: 0.5s;
    text-transform: uppercase;
    letter-spacing: 0.1cm;
    transform: scale(0);
    transition-delay: 0s;
    transform: 0.5s;
}
ul li:hover .titulo{
    transform: scale(1);
    transition-delay: 0.25s;
}
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
}
</style>