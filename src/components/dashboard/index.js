<Grid justify="center" container spacing={10}>
                <Grid item xs={12}>
                    <Grid container spacing={12}>
                        <Grid item xs={12}>
                        <SearchBar onFormSubmit={this.handleSubmit} />
                        </Grid>
                        <Grid item xs={8}>
                        <VideoDetail video={this.state.selectedVideo} />
                        </Grid>
                        <Grid item xs={4}>
                        <VideoList videos={videos} onVideoSelect={this.onVideoSelect} />
                        </Grid>
                    </Grid>
                </Grid>
        </Grid>