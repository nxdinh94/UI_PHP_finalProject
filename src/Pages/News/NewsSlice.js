import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getApiFake } from '~/actions/fetchApi';

// const data = {
//     dog: [
//         {
//             id: 1,
//             title: 'Meissen Dogs',
//             desc: 'Kennel Club of Philadelphia teams with Take the Lead and readies for its Thanksgiving Day broadcast',
//             content:
//                 'The KENNEL CLUB OF PHILADELPHIA, home of the CITY OF BROTHERLY LOVE, is opening up its arms to TAKE THE LEAD as the charity celebrates “30 Years of Caring.” Think of the people we know among all those who have been helped by this most important charity within our purebred-dog community. Our continued support is vital to keep up with requests for the help that is needed by those less fortunate. The celebration will take place Friday evening, November 17, from 5:30 to 8:30 at the Hilton Garden Inn Valley Forge/Oaks, located at 500 Cresol Boulevard in Phoenixville — just one mile from the show grounds. Tickets are limited, priced at $50 per person, so make your reservations soon. For reservations and information, visit takethelead.org or call 800-814-1123. ...',
//             thumpnail:
//                 'https://www.dognews.com/sites/default/files/styles/medium/public/field/image/macys%20thanksgiving%20day%20parade.jpg?itok=pjrSnZNJ',
//             author: 'Thomas Tukley',
//             created: '3/2023',
//         },
//         {
//             id: 2,
//             title: 'Meissen Dogs',
//             desc: 'Kennel Club of Philadelphia teams with Take the Lead and readies for its Thanksgiving Day broadcast',
//             content:
//                 'The KENNEL CLUB OF PHILADELPHIA, home of the CITY OF BROTHERLY LOVE, is opening up its arms to TAKE THE LEAD as the charity celebrates “30 Years of Caring.” Think of the people we know among all those who have been helped by this most important charity within our purebred-dog community. Our continued support is vital to keep up with requests for the help that is needed by those less fortunate. The celebration will take place Friday evening, November 17, from 5:30 to 8:30 at the Hilton Garden Inn Valley Forge/Oaks, located at 500 Cresol Boulevard in Phoenixville — just one mile from the show grounds. Tickets are limited, priced at $50 per person, so make your reservations soon. For reservations and information, visit takethelead.org or call 800-814-1123. ...',
//             thumpnail: 'https://www.dognews.com/sites/default/files/field/image/koch_110323.jpg',
//             author: 'Thomas Tukley',
//             created: '3/2023',
//         },
//         {
//             id: 3,
//             title: 'Meissen Dogs',
//             desc: 'Kennel Club of Philadelphia teams with Take the Lead and readies for its Thanksgiving Day broadcast',
//             content:
//                 'The KENNEL CLUB OF PHILADELPHIA, home of the CITY OF BROTHERLY LOVE, is opening up its arms to TAKE THE LEAD as the charity celebrates “30 Years of Caring.” Think of the people we know among all those who have been helped by this most important charity within our purebred-dog community. Our continued support is vital to keep up with requests for the help that is needed by those less fortunate. The celebration will take place Friday evening, November 17, from 5:30 to 8:30 at the Hilton Garden Inn Valley Forge/Oaks, located at 500 Cresol Boulevard in Phoenixville — just one mile from the show grounds. Tickets are limited, priced at $50 per person, so make your reservations soon. For reservations and information, visit takethelead.org or call 800-814-1123. ...',
//             thumpnail: 'https://www.dognews.com/sites/default/files/field/image/koch_110323.jpg',

//             author: 'Thomas Tukley',
//             created: '3/2023',
//         },
//         {
//             id: 4,
//             title: 'Meissen Dogs',
//             desc: 'Kennel Club of Philadelphia teams with Take the Lead and readies for its Thanksgiving Day broadcast',
//             content:
//                 'The KENNEL CLUB OF PHILADELPHIA, home of the CITY OF BROTHERLY LOVE, is opening up its arms to TAKE THE LEAD as the charity celebrates “30 Years of Caring.” Think of the people we know among all those who have been helped by this most important charity within our purebred-dog community. Our continued support is vital to keep up with requests for the help that is needed by those less fortunate. The celebration will take place Friday evening, November 17, from 5:30 to 8:30 at the Hilton Garden Inn Valley Forge/Oaks, located at 500 Cresol Boulevard in Phoenixville — just one mile from the show grounds. Tickets are limited, priced at $50 per person, so make your reservations soon. For reservations and information, visit takethelead.org or call 800-814-1123. ...',
//             thumpnail:
//                 'https://www.dognews.com/sites/default/files/styles/medium/public/field/image/macys%20thanksgiving%20day%20parade.jpg?itok=pjrSnZNJ',
//             author: 'Thomas Tukley',
//             created: '3/2023',
//         },
//         {
//             id: 5,
//             title: 'Meissen Dogs',
//             desc: 'Kennel Club of Philadelphia teams with Take the Lead and readies for its Thanksgiving Day broadcast',
//             content:
//                 'The KENNEL CLUB OF PHILADELPHIA, home of the CITY OF BROTHERLY LOVE, is opening up its arms to TAKE THE LEAD as the charity celebrates “30 Years of Caring.” Think of the people we know among all those who have been helped by this most important charity within our purebred-dog community. Our continued support is vital to keep up with requests for the help that is needed by those less fortunate. The celebration will take place Friday evening, November 17, from 5:30 to 8:30 at the Hilton Garden Inn Valley Forge/Oaks, located at 500 Cresol Boulevard in Phoenixville — just one mile from the show grounds. Tickets are limited, priced at $50 per person, so make your reservations soon. For reservations and information, visit takethelead.org or call 800-814-1123. ...',
//             thumpnail:
//                 'https://www.dognews.com/sites/default/files/styles/medium/public/field/image/macys%20thanksgiving%20day%20parade.jpg?itok=pjrSnZNJ',
//             author: 'Thomas Tukley',
//             created: '3/2023',
//         },
//         {
//             id: 6,
//             title: 'Meissen Dogs',
//             desc: 'Kennel Club of Philadelphia teams with Take the Lead and readies for its Thanksgiving Day broadcast',
//             content:
//                 'The KENNEL CLUB OF PHILADELPHIA, home of the CITY OF BROTHERLY LOVE, is opening up its arms to TAKE THE LEAD as the charity celebrates “30 Years of Caring.” Think of the people we know among all those who have been helped by this most important charity within our purebred-dog community. Our continued support is vital to keep up with requests for the help that is needed by those less fortunate. The celebration will take place Friday evening, November 17, from 5:30 to 8:30 at the Hilton Garden Inn Valley Forge/Oaks, located at 500 Cresol Boulevard in Phoenixville — just one mile from the show grounds. Tickets are limited, priced at $50 per person, so make your reservations soon. For reservations and information, visit takethelead.org or call 800-814-1123. ...',
//             thumpnail:
//                 'https://www.dognews.com/sites/default/files/styles/medium/public/field/image/macys%20thanksgiving%20day%20parade.jpg?itok=pjrSnZNJ',
//             author: 'Thomas Tukley',
//             created: '3/2023',
//         },
//         {
//             id: 7,
//             title: 'Meissen Dogs',
//             desc: 'Kennel Club of Philadelphia teams with Take the Lead and readies for its Thanksgiving Day broadcast',
//             content:
//                 'The KENNEL CLUB OF PHILADELPHIA, home of the CITY OF BROTHERLY LOVE, is opening up its arms to TAKE THE LEAD as the charity celebrates “30 Years of Caring.” Think of the people we know among all those who have been helped by this most important charity within our purebred-dog community. Our continued support is vital to keep up with requests for the help that is needed by those less fortunate. The celebration will take place Friday evening, November 17, from 5:30 to 8:30 at the Hilton Garden Inn Valley Forge/Oaks, located at 500 Cresol Boulevard in Phoenixville — just one mile from the show grounds. Tickets are limited, priced at $50 per person, so make your reservations soon. For reservations and information, visit takethelead.org or call 800-814-1123. ...',
//             thumpnail:
//                 'https://www.dognews.com/sites/default/files/styles/medium/public/field/image/macys%20thanksgiving%20day%20parade.jpg?itok=pjrSnZNJ',
//             author: 'Thomas Tukley',
//             created: '3/2023',
//         },
//     ],
//     cat: [
//         {
//             id: 8,
//             title: 'Cat',
//             desc: 'Kennel Club of Philadelphia teams with Take the Lead and readies for its Thanksgiving Day broadcast',
//             content:
//                 'The KENNEL CLUB OF PHILADELPHIA, home of the CITY OF BROTHERLY LOVE, is opening up its arms to TAKE THE LEAD as the charity celebrates “30 Years of Caring.” Think of the people we know among all those who have been helped by this most important charity within our purebred-dog community. Our continued support is vital to keep up with requests for the help that is needed by those less fortunate. The celebration will take place Friday evening, November 17, from 5:30 to 8:30 at the Hilton Garden Inn Valley Forge/Oaks, located at 500 Cresol Boulevard in Phoenixville — just one mile from the show grounds. Tickets are limited, priced at $50 per person, so make your reservations soon. For reservations and information, visit takethelead.org or call 800-814-1123. ...',
//             thumpnail:
//                 '/images/blog/blog-8.jpg',
//             author: 'Thomas Tukley',
//             created: '3/2023',
//         },
//         {
//             id: 9,
//             title: 'Cat',
//             desc: 'Kennel Club of Philadelphia teams with Take the Lead and readies for its Thanksgiving Day broadcast',
//             content:
//                 'The KENNEL CLUB OF PHILADELPHIA, home of the CITY OF BROTHERLY LOVE, is opening up its arms to TAKE THE LEAD as the charity celebrates “30 Years of Caring.” Think of the people we know among all those who have been helped by this most important charity within our purebred-dog community. Our continued support is vital to keep up with requests for the help that is needed by those less fortunate. The celebration will take place Friday evening, November 17, from 5:30 to 8:30 at the Hilton Garden Inn Valley Forge/Oaks, located at 500 Cresol Boulevard in Phoenixville — just one mile from the show grounds. Tickets are limited, priced at $50 per person, so make your reservations soon. For reservations and information, visit takethelead.org or call 800-814-1123. ...',
//             thumpnail:
//                 '/images/blog/blog-8.jpg',
//             author: 'Thomas Tukley',
//             created: '3/2023',
//         },
//         {
//             id: 10,
//             title: 'Cat',
//             desc: 'Kennel Club of Philadelphia teams with Take the Lead and readies for its Thanksgiving Day broadcast',
//             content:
//                 'The KENNEL CLUB OF PHILADELPHIA, home of the CITY OF BROTHERLY LOVE, is opening up its arms to TAKE THE LEAD as the charity celebrates “30 Years of Caring.” Think of the people we know among all those who have been helped by this most important charity within our purebred-dog community. Our continued support is vital to keep up with requests for the help that is needed by those less fortunate. The celebration will take place Friday evening, November 17, from 5:30 to 8:30 at the Hilton Garden Inn Valley Forge/Oaks, located at 500 Cresol Boulevard in Phoenixville — just one mile from the show grounds. Tickets are limited, priced at $50 per person, so make your reservations soon. For reservations and information, visit takethelead.org or call 800-814-1123. ...',
//             thumpnail:
//                 '/images/blog/blog-8.jpg',
//             author: 'Thomas Tukley',
//             created: '3/2023',
//         },
//         {
//             id: 11,
//             title: 'Cat',
//             desc: 'Kennel Club of Philadelphia teams with Take the Lead and readies for its Thanksgiving Day broadcast',
//             content:
//                 'The KENNEL CLUB OF PHILADELPHIA, home of the CITY OF BROTHERLY LOVE, is opening up its arms to TAKE THE LEAD as the charity celebrates “30 Years of Caring.” Think of the people we know among all those who have been helped by this most important charity within our purebred-dog community. Our continued support is vital to keep up with requests for the help that is needed by those less fortunate. The celebration will take place Friday evening, November 17, from 5:30 to 8:30 at the Hilton Garden Inn Valley Forge/Oaks, located at 500 Cresol Boulevard in Phoenixville — just one mile from the show grounds. Tickets are limited, priced at $50 per person, so make your reservations soon. For reservations and information, visit takethelead.org or call 800-814-1123. ...',
//             thumpnail:
//                 '/images/blog/blog-8.jpg',
//             author: 'Thomas Tukley',
//             created: '3/2023',
//         },
//         {
//             id: 12,
//             title: 'Cat',
//             desc: 'Kennel Club of Philadelphia teams with Take the Lead and readies for its Thanksgiving Day broadcast',
//             content:
//                 'The KENNEL CLUB OF PHILADELPHIA, home of the CITY OF BROTHERLY LOVE, is opening up its arms to TAKE THE LEAD as the charity celebrates “30 Years of Caring.” Think of the people we know among all those who have been helped by this most important charity within our purebred-dog community. Our continued support is vital to keep up with requests for the help that is needed by those less fortunate. The celebration will take place Friday evening, November 17, from 5:30 to 8:30 at the Hilton Garden Inn Valley Forge/Oaks, located at 500 Cresol Boulevard in Phoenixville — just one mile from the show grounds. Tickets are limited, priced at $50 per person, so make your reservations soon. For reservations and information, visit takethelead.org or call 800-814-1123. ...',
//             thumpnail:
//                 '/images/blog/blog-8.jpg',
//             author: 'Thomas Tukley',
//             created: '3/2023',
//         },
//         {
//             id: 13,
//             title: 'Cat',
//             desc: 'Kennel Club of Philadelphia teams with Take the Lead and readies for its Thanksgiving Day broadcast',
//             content:
//                 'The KENNEL CLUB OF PHILADELPHIA, home of the CITY OF BROTHERLY LOVE, is opening up its arms to TAKE THE LEAD as the charity celebrates “30 Years of Caring.” Think of the people we know among all those who have been helped by this most important charity within our purebred-dog community. Our continued support is vital to keep up with requests for the help that is needed by those less fortunate. The celebration will take place Friday evening, November 17, from 5:30 to 8:30 at the Hilton Garden Inn Valley Forge/Oaks, located at 500 Cresol Boulevard in Phoenixville — just one mile from the show grounds. Tickets are limited, priced at $50 per person, so make your reservations soon. For reservations and information, visit takethelead.org or call 800-814-1123. ...',
//             thumpnail:
//                 '/images/blog/blog-8.jpg',
//             author: 'Thomas Tukley',
//             created: '3/2023',
//         },
//         {
//             id: 14,
//             title: 'Cat',
//             desc: 'Kennel Club of Philadelphia teams with Take the Lead and readies for its Thanksgiving Day broadcast',
//             content:
//                 'The KENNEL CLUB OF PHILADELPHIA, home of the CITY OF BROTHERLY LOVE, is opening up its arms to TAKE THE LEAD as the charity celebrates “30 Years of Caring.” Think of the people we know among all those who have been helped by this most important charity within our purebred-dog community. Our continued support is vital to keep up with requests for the help that is needed by those less fortunate. The celebration will take place Friday evening, November 17, from 5:30 to 8:30 at the Hilton Garden Inn Valley Forge/Oaks, located at 500 Cresol Boulevard in Phoenixville — just one mile from the show grounds. Tickets are limited, priced at $50 per person, so make your reservations soon. For reservations and information, visit takethelead.org or call 800-814-1123. ...',
//             thumpnail:
//                 '/images/blog/blog-8.jpg',
//             author: 'Thomas Tukley',
//             created: '3/2023',
//         },
//     ],
//     bird: [
//         {
//             id: 15,
//             title: 'Bird',
//             desc: 'Kennel Club of Philadelphia teams with Take the Lead and readies for its Thanksgiving Day broadcast',
//             content:
//                 'The KENNEL CLUB OF PHILADELPHIA, home of the CITY OF BROTHERLY LOVE, is opening up its arms to TAKE THE LEAD as the charity celebrates “30 Years of Caring.” Think of the people we know among all those who have been helped by this most important charity within our purebred-dog community. Our continued support is vital to keep up with requests for the help that is needed by those less fortunate. The celebration will take place Friday evening, November 17, from 5:30 to 8:30 at the Hilton Garden Inn Valley Forge/Oaks, located at 500 Cresol Boulevard in Phoenixville — just one mile from the show grounds. Tickets are limited, priced at $50 per person, so make your reservations soon. For reservations and information, visit takethelead.org or call 800-814-1123. ...',
//             thumpnail:
//                 'https://www.dognews.com/sites/default/files/styles/medium/public/field/image/macys%20thanksgiving%20day%20parade.jpg?itok=pjrSnZNJ',
//             author: 'Thomas Tukley',
//             created: '3/2023',
//         },
//         {
//             id: 16,
//             title: 'Bird',
//             desc: 'Kennel Club of Philadelphia teams with Take the Lead and readies for its Thanksgiving Day broadcast',
//             content:
//                 'The KENNEL CLUB OF PHILADELPHIA, home of the CITY OF BROTHERLY LOVE, is opening up its arms to TAKE THE LEAD as the charity celebrates “30 Years of Caring.” Think of the people we know among all those who have been helped by this most important charity within our purebred-dog community. Our continued support is vital to keep up with requests for the help that is needed by those less fortunate. The celebration will take place Friday evening, November 17, from 5:30 to 8:30 at the Hilton Garden Inn Valley Forge/Oaks, located at 500 Cresol Boulevard in Phoenixville — just one mile from the show grounds. Tickets are limited, priced at $50 per person, so make your reservations soon. For reservations and information, visit takethelead.org or call 800-814-1123. ...',
//             thumpnail:
//                 'https://www.dognews.com/sites/default/files/styles/medium/public/field/image/macys%20thanksgiving%20day%20parade.jpg?itok=pjrSnZNJ',
//             author: 'Thomas Tukley',
//             created: '3/2023',
//         },
//         {
//             id: 17,
//             title: 'Bird',
//             desc: 'Kennel Club of Philadelphia teams with Take the Lead and readies for its Thanksgiving Day broadcast',
//             content:
//                 'The KENNEL CLUB OF PHILADELPHIA, home of the CITY OF BROTHERLY LOVE, is opening up its arms to TAKE THE LEAD as the charity celebrates “30 Years of Caring.” Think of the people we know among all those who have been helped by this most important charity within our purebred-dog community. Our continued support is vital to keep up with requests for the help that is needed by those less fortunate. The celebration will take place Friday evening, November 17, from 5:30 to 8:30 at the Hilton Garden Inn Valley Forge/Oaks, located at 500 Cresol Boulevard in Phoenixville — just one mile from the show grounds. Tickets are limited, priced at $50 per person, so make your reservations soon. For reservations and information, visit takethelead.org or call 800-814-1123. ...',
//             thumpnail:
//                 'https://www.dognews.com/sites/default/files/styles/medium/public/field/image/macys%20thanksgiving%20day%20parade.jpg?itok=pjrSnZNJ',
//             author: 'Thomas Tukley',
//             created: '3/2023',
//         },
//         {
//             id: 18,
//             title: 'Bird',
//             desc: 'Kennel Club of Philadelphia teams with Take the Lead and readies for its Thanksgiving Day broadcast',
//             content:
//                 'The KENNEL CLUB OF PHILADELPHIA, home of the CITY OF BROTHERLY LOVE, is opening up its arms to TAKE THE LEAD as the charity celebrates “30 Years of Caring.” Think of the people we know among all those who have been helped by this most important charity within our purebred-dog community. Our continued support is vital to keep up with requests for the help that is needed by those less fortunate. The celebration will take place Friday evening, November 17, from 5:30 to 8:30 at the Hilton Garden Inn Valley Forge/Oaks, located at 500 Cresol Boulevard in Phoenixville — just one mile from the show grounds. Tickets are limited, priced at $50 per person, so make your reservations soon. For reservations and information, visit takethelead.org or call 800-814-1123. ...',
//             thumpnail:
//                 'https://www.dognews.com/sites/default/files/styles/medium/public/field/image/macys%20thanksgiving%20day%20parade.jpg?itok=pjrSnZNJ',
//             author: 'Thomas Tukley',
//             created: '3/2023',
//         },
//         {
//             id: 19,
//             title: 'Bird',
//             desc: 'Kennel Club of Philadelphia teams with Take the Lead and readies for its Thanksgiving Day broadcast',
//             content:
//                 'The KENNEL CLUB OF PHILADELPHIA, home of the CITY OF BROTHERLY LOVE, is opening up its arms to TAKE THE LEAD as the charity celebrates “30 Years of Caring.” Think of the people we know among all those who have been helped by this most important charity within our purebred-dog community. Our continued support is vital to keep up with requests for the help that is needed by those less fortunate. The celebration will take place Friday evening, November 17, from 5:30 to 8:30 at the Hilton Garden Inn Valley Forge/Oaks, located at 500 Cresol Boulevard in Phoenixville — just one mile from the show grounds. Tickets are limited, priced at $50 per person, so make your reservations soon. For reservations and information, visit takethelead.org or call 800-814-1123. ...',
//             thumpnail:
//                 'https://www.dognews.com/sites/default/files/styles/medium/public/field/image/macys%20thanksgiving%20day%20parade.jpg?itok=pjrSnZNJ',
//             author: 'Thomas Tukley',
//             created: '3/2023',
//         },
//         {
//             id: 20,
//             title: 'Bird',
//             desc: 'Kennel Club of Philadelphia teams with Take the Lead and readies for its Thanksgiving Day broadcast',
//             content:
//                 'The KENNEL CLUB OF PHILADELPHIA, home of the CITY OF BROTHERLY LOVE, is opening up its arms to TAKE THE LEAD as the charity celebrates “30 Years of Caring.” Think of the people we know among all those who have been helped by this most important charity within our purebred-dog community. Our continued support is vital to keep up with requests for the help that is needed by those less fortunate. The celebration will take place Friday evening, November 17, from 5:30 to 8:30 at the Hilton Garden Inn Valley Forge/Oaks, located at 500 Cresol Boulevard in Phoenixville — just one mile from the show grounds. Tickets are limited, priced at $50 per person, so make your reservations soon. For reservations and information, visit takethelead.org or call 800-814-1123. ...',
//             thumpnail:
//                 'https://www.dognews.com/sites/default/files/styles/medium/public/field/image/macys%20thanksgiving%20day%20parade.jpg?itok=pjrSnZNJ',
//             author: 'Thomas Tukley',
//             created: '3/2023',
//         },
//         {
//             id: 21,
//             title: 'Bird',
//             desc: 'Kennel Club of Philadelphia teams with Take the Lead and readies for its Thanksgiving Day broadcast',
//             content:
//                 'The KENNEL CLUB OF PHILADELPHIA, home of the CITY OF BROTHERLY LOVE, is opening up its arms to TAKE THE LEAD as the charity celebrates “30 Years of Caring.” Think of the people we know among all those who have been helped by this most important charity within our purebred-dog community. Our continued support is vital to keep up with requests for the help that is needed by those less fortunate. The celebration will take place Friday evening, November 17, from 5:30 to 8:30 at the Hilton Garden Inn Valley Forge/Oaks, located at 500 Cresol Boulevard in Phoenixville — just one mile from the show grounds. Tickets are limited, priced at $50 per person, so make your reservations soon. For reservations and information, visit takethelead.org or call 800-814-1123. ...',
//             thumpnail:
//                 'https://www.dognews.com/sites/default/files/styles/medium/public/field/image/macys%20thanksgiving%20day%20parade.jpg?itok=pjrSnZNJ',
//             author: 'Thomas Tukley',
//             created: '3/2023',
//         },
//     ],
// };

const initialState = {
    value: {},
    status: 'idle',
};
export const fetchApiAsyn = createAsyncThunk('newsSlice/fetchApiAsyn', async () => {
    const response = await getApiFake();
    // console.log('....',response);
    return response;
});
export const newsSlice = createSlice({
    name: 'newsSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchApiAsyn.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchApiAsyn.fulfilled, (state, action) => {
                state.status = 'idle';
                state.value = {...action.payload};
            });
    },
});
export const {} = newsSlice.actions;
export default newsSlice.reducer;
