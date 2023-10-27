import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { postAdded } from './postsSlice';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Input, Label, Form } from 'reactstrap';

export const AddPostForm = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const dispatch = useDispatch();

    const onTitleChanged = (e) => setTitle(e.target.value);
    const onContentChanged = (e) => setContent(e.target.value);

    const onSavePostClicked = () => {
        if (title && content) {
            dispatch(
                postAdded({
                    id: nanoid(),
                    title,
                    content,
                }),
            );

            setTitle('');
            setContent('');
        }
    };

    return (
        <section>
            <h2>Add a New Post</h2>
            <Form>
                <Label htmlFor="postTitle">Post Title:</Label>
                <Input type="text" id="postTitle" name="postTitle" value={title} onChange={onTitleChanged} />
                <Label htmlFor="postContent">Content:</Label>
                <Input type='textarea' id="postContent" name="postContent" value={content} onChange={onContentChanged} />
                <Button type="button" onClick={onSavePostClicked}>
                    Save Post
                </Button>
            </Form>
        </section>
    );
};
