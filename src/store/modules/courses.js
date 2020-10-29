export default {
    state: {
        courses: [],
        current: false
    },
    mutations: {
        updateCourses(state, courses) {
            state.courses = courses;
        },
        updateCourseType(state, type) {
            state.current = type;
        }
    },
    actions: {
        async fetchCourses(ctx) {
            const res = await fetch(
                'https://5daca7380af117001417072a.mockapi.io/api/v1/courses'
            );
            const courses = await res.json();
            ctx.commit('updateCourses', courses);
        }
    },
    getters: {
        courses(state) {
            return state.courses
        },
        current(state) {
            return state.current
        }
    },
}
