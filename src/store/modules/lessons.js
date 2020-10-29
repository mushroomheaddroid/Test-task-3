export default {
    state: {
        lessons: []
    },
    mutations: {
        updateLessons(state, lessons) {
            state.lessons = lessons;
        }
    },
    actions: {
        async fetchLessons(ctx) {
            const res = await fetch(
                'https://5daca7380af117001417072a.mockapi.io/api/v1/lessons'
            );
            const lessons = await res.json();
            ctx.commit('updateLessons', lessons);
        }
    },
    getters: {
        lessons(state) {
            return state.lessons
        },
        lessonsByType: state => type => {
            if (type) {
                return JSON.parse(JSON.stringify(state.lessons.filter(item => item.courseId === type)));
            } else {
                return state.lessons
            }
        },
        lessonById: state => id => {
            return JSON.parse(JSON.stringify(state.lessons.filter(item => item.id === id)));
        }
    },
}
