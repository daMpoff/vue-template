
# Vue Preset Dampoff 🌟

> Кастомный пресет Vue CLI для быстрого создания проектов с предустановленными зависимостями и удобным деплоем. 

---

## 📋 Особенности

- **Поддержка Bootstrap** для стильной и быстрой верстки.
- **Axios** для работы с API.
- **Vue Router** с `history mode` для маршрутизации.
- **Команда Deploy**: автоматическое копирование файлов сборки в указанную директорию (например, для Nginx).
- Линтинг кода с помощью ESLint.

---

## 🚀 Установка

Создайте новый Vue проект с этим пресетом:

```bash
vue create --preset dampoff/vue-preset <project-name>
```

> Замените `<project-name>` на желаемое имя вашего проекта.

---

## 🛠️ Скрипты

После создания проекта доступны следующие команды:

| Команда         | Описание                                                                 |
|------------------|--------------------------------------------------------------------------|
| `npm run serve`  | Запускает локальный сервер разработки.                                  |
| `npm run build`  | Сборка проекта для продакшена.                                          |
| `npm run lint`   | Проверка кода с помощью ESLint.                                         |
| `npm run deploy` | Копирует файлы сборки в указанную папку (путь настраивается при создании проекта). |

---

## ⚙️ Настраиваемый Deploy

Во время создания проекта вас попросят указать путь для деплоя (по умолчанию: `C:/nginx/html/`). Эта настройка используется в скрипте:

```bash
npm run deploy
```

Для изменения пути позже откройте `package.json` и отредактируйте:

```json
"scripts": {
  "deploy": "copyfiles dist/**/* YOUR_PATH_HERE -u 1"
}
```

---

## 📦 Зависимости

Этот пресет включает следующие зависимости:

- [Vue 3](https://vuejs.org/)
- [Vue Router](https://router.vuejs.org/)
- [Bootstrap](https://getbootstrap.com/)
- [Axios](https://axios-http.com/)
- [Copyfiles](https://www.npmjs.com/package/copyfiles)

---

## 📝 Пример использования

1. Создайте новый проект:
   ```bash
   vue create --preset dampoff/vue-preset my-vue-app
   ```

2. Перейдите в директорию проекта:
   ```bash
   cd my-vue-app
   ```

3. Запустите сервер разработки:
   ```bash
   npm run serve
   ```

---

## 🤝 Контакты

Автор: **dampoff**

- GitHub: [github.com/dampoff](https://github.com/dampoff)

---

Спасибо, что используете этот пресет! 🎉 Если у вас есть предложения или вы нашли ошибки, создайте [issue](https://github.com/dampoff/vue-preset/issues) в репозитории.