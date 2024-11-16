<template>
    <div class="about-template">
        <p>Шаблон Vue проекта сделан <strong>dampoff</strong></p>
        <a href="https://github.com/dampoff" target="_blank" rel="noopener noreferrer">
            GitHub
        </a>
        <p>Используются пакеты:</p>
        <ul>
            <li>Bootstrap</li>
            <li>Axios</li>
            <li>Copyfiles</li>
            <li>Vue Router</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "AboutTemplate",
};
</script>

<style scoped>
@keyframes pulseBackground {
    0% {
        background-color: #323232;
    }

    50% {
        background-color: #505050;
    }

    100% {
        background-color: #323232;
    }
}

.about-template {
    background-color: #323232;
    color: #ffffff;
    text-align: center;
    padding: 20px;
    font-family: Arial, sans-serif;
    font-size: 1.5rem;
    animation: pulseBackground 3s infinite;
    /* Применение анимации с длительностью 3 секунды */
}

.about-template a {
    color: #ffffff;
    text-decoration: underline;
    font-weight: bold;
    font-size: 1.8rem;
}

.about-template a:hover {
    text-decoration: none;
}

.about-template ul {
    list-style-type: none;
    padding: 0;
    margin: 10px 0;
}

.about-template li {
    margin: 5px 0;
    font-size: 1.2rem;
}
</style>